#!/usr/bin/env python3
"""
Convert comparison/difference interview question answers to HTML table format.
Handles proper JSON string escaping.
"""

import re
import os

FILES_TO_PROCESS = [
    "interviewQuestionsJava.js",
    "interviewQuestionsJS.js",
    "interviewQuestionsPython.js",
    "interviewQuestionsSQL.js",
    "interviewQuestionsSpring.js",
    "interviewQuestionsAngular.js",
    "interviewQuestionsReact.js",
]

COMPARISON_KEYWORDS = ['difference', ' vs ', 'versus', 'compare', ' or ', 'shallow', 'deep', 'mutable vs', 'immutable']

def escape_json_string(s):
    """Escape a string for use in a JSON/JavaScript string literal."""
    # Replace backslashes first
    s = s.replace('\\', '\\\\')
    # Replace newlines with escaped newlines
    s = s.replace('\n', '\\n')
    # Replace tabs
    s = s.replace('\t', '\\t')
    # Replace quotes
    s = s.replace('"', '\\"')
    return s

def is_comparison_question(q):
    q_lower = q.lower()
    return any(k in q_lower for k in COMPARISON_KEYWORDS)

def has_table(answer):
    return '<table>' in answer.lower()

def extract_subjects(question):
    """Extract comparison subjects from the question text."""
    q_lower = question.lower()
    subjects = []
    
    # Three-way patterns first
    three_way_patterns = [
        r'difference between (.+?), (.+?), and (.+?)(?:\?|$|\. )',
        r'differences between (.+?), (.+?), and (.+?)(?:\?|$|\. )',
        r'(.+?), (.+?), and (.+?)(?:\?|$|\. )',
    ]
    
    for pattern in three_way_patterns:
        match = re.search(pattern, q_lower)
        if match:
            groups = match.groups()
            # Clean up subjects
            cleaned = []
            for g in groups:
                g = g.strip()
                # Remove common prefixes/suffixes
                g = re.sub(r'^(?:a |an |the )', '', g)
                g = re.sub(r'\s+in\s+\w+$', '', g)
                g = g.strip()
                if g:
                    cleaned.append(g)
            if len(cleaned) == 3:
                return cleaned
    
    # Two-way patterns
    two_way_patterns = [
        r'difference between (.+?) and (.+?)(?:\?|$|\. )',
        r'differences between (.+?) and (.+?)(?:\?|$|\. )',
        r'(.+?) vs (.+?)(?:\?|$|\. )',
        r'(.+?) versus (.+?)(?:\?|$|\. )',
        r'(?:what is the )?difference between (.+?) and (.+?)(?:\?|$|\. )',
    ]
    
    for pattern in two_way_patterns:
        match = re.search(pattern, q_lower)
        if match:
            groups = match.groups()
            cleaned = []
            for g in groups:
                g = g.strip()
                g = re.sub(r'^(?:a |an |the )', '', g)
                g = re.sub(r'\s+in\s+\w+$', '', g)
                g = g.strip()
                if g and g not in cleaned:
                    cleaned.append(g)
            if len(cleaned) == 2:
                return cleaned
    
    return []

def extract_comparison_rows(answer):
    """Extract comparison rows from answer text."""
    rows = []
    
    # Look for patterns in the answer
    # Pattern: <li><strong>Feature:</strong> Description</li>
    li_pattern = r'<li><strong>(.+?)</strong>[:\-]?\s*(.+?)</li>'
    li_matches = re.findall(li_pattern, answer)
    
    if li_matches:
        for feature, desc in li_matches:
            # Try to split description by common separators
            if ' – ' in desc or ' - ' in desc or ' vs ' in desc.lower():
                parts = re.split(r'\s+(?:–|-|vs|versus)\s+', desc, 1)
                if len(parts) == 2:
                    rows.append((feature.strip(), parts[0].strip(), parts[1].strip()))
                else:
                    rows.append((feature.strip(), desc.strip(), "-"))
            else:
                rows.append((feature.strip(), desc.strip(), "-"))
    
    # Pattern: plain text with colons
    if not rows:
        lines = answer.split('\n')
        for line in lines:
            line = line.strip()
            if not line or line.startswith('<') or line.startswith('`'):
                continue
            # Match "Feature: value" or "- Feature: value"
            match = re.match(r'^[\s*-•]*(.+?)[:\-–]\s*(.+)$', line)
            if match:
                feature = match.group(1).strip()
                value = match.group(2).strip()
                # Skip if feature is too long (probably not a feature name)
                if len(feature) < 50:
                    rows.append((feature, value, "-"))
    
    return rows

def build_table(answer, question, subjects):
    """Build an HTML comparison table."""
    if not subjects:
        return answer
    
    rows_data = extract_comparison_rows(answer)
    
    if len(subjects) == 2:
        subj1, subj2 = subjects[0], subjects[1]
        
        # Build table HTML (single line for JSON compatibility)
        table_lines = [
            f"<table><tr><th>Feature</th><th>{subj1}</th><th>{subj2}</th></tr>"
        ]
        
        if rows_data:
            for feature, val1, val2 in rows_data:
                table_lines.append(f"<tr><td>{feature}</td><td>{val1}</td><td>{val2}</td></tr>")
        else:
            # Default rows based on common patterns
            table_lines.append(f"<tr><td>Purpose</td><td>{subj1} usage</td><td>{subj2} usage</td></tr>")
            table_lines.append(f"<tr><td>Behavior</td><td>{subj1} behavior</td><td>{subj2} behavior</td></tr>")
        
        table_lines.append("</table>")
        
    elif len(subjects) >= 3:
        subj1, subj2, subj3 = subjects[0], subjects[1], subjects[2]
        
        table_lines = [
            f"<table><tr><th>Feature</th><th>{subj1}</th><th>{subj2}</th><th>{subj3}</th></tr>"
        ]
        
        if rows_data:
            for feature, val1, val2 in rows_data:
                table_lines.append(f"<tr><td>{feature}</td><td>{val1}</td><td>{val2}</td><td>Varies</td></tr>")
        else:
            table_lines.append(f"<tr><td>Description</td><td>{subj1} specific</td><td>{subj2} specific</td><td>{subj3} specific</td></tr>")
        
        table_lines.append("</table>")
    else:
        return answer
    
    # Join into single line with \n for JSON
    return "\\n".join(table_lines)

def process_file(filepath):
    """Process a single interview questions file."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Find all question objects - use a more careful regex
    # The answer may contain escaped quotes, so we need to be careful
    pattern = r'"question"\s*:\s*"(.*?)"\s*,\s*"answer"\s*:\s*"(.*?)"\s*,\s*"difficulty"'
    matches = list(re.finditer(pattern, content, re.DOTALL))
    
    modified = False
    replacements = []
    
    for match in matches:
        question = match.group(1)
        answer = match.group(2)
        
        if is_comparison_question(question) and not has_table(answer):
            subjects = extract_subjects(question)
            if subjects:
                new_answer = build_table(answer, question, subjects)
                if new_answer != answer:
                    replacements.append((answer, new_answer))
                    print(f"  Converted: {question[:70]}...")
    
    # Apply replacements (in reverse order to preserve positions)
    new_content = content
    for old, new in replacements:
        new_content = new_content.replace(f'"answer": "{old}"', f'"answer": "{new}"', 1)
        modified = True
    
    if modified:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"✅ Updated: {os.path.basename(filepath)}")
    else:
        print(f"⏭️  No changes: {os.path.basename(filepath)}")
    
    return modified

def main():
    base_dir = "/root/.openclaw/workspace/Projects/tech-tutorials/src/data"
    
    total_modified = 0
    for filename in FILES_TO_PROCESS:
        filepath = os.path.join(base_dir, filename)
        if os.path.exists(filepath):
            print(f"\n📄 Processing {filename}...")
            if process_file(filepath):
                total_modified += 1
        else:
            print(f"⚠️  Missing: {filename}")
    
    print(f"\n🏁 Done! Modified {total_modified} files.")

if __name__ == "__main__":
    main()
