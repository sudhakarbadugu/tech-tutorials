const fs = require('fs');
const path = require('path');

// This script will be used to process extracted interview question data
// and format it for the tutorialData.js file

const sections = [
  { id: 'core-java', name: 'Core Java', file: 'core-java.json' },
  { id: 'spring', name: 'Spring Framework', file: 'spring.json' },
  { id: 'spring-boot', name: 'Spring Boot', file: 'spring-boot.json' },
  { id: 'hibernate', name: 'Hibernate', file: 'hibernate.json' },
  { id: 'design-patterns', name: 'Design Patterns', file: 'design-patterns.json' },
  { id: 'database', name: 'Database', file: 'database.json' },
  { id: 'coding', name: 'Coding Programs', file: 'coding.json' }
];

function generateTutorialData() {
  const topics = [];
  
  sections.forEach((section, idx) => {
    const filePath = path.join(__dirname, section.file);
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${section.name} - file not found`);
      return;
    }
    
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Group questions into modules of ~10 questions each
    const modules = [];
    const questionsPerModule = 10;
    
    for (let i = 0; i < data.length; i += questionsPerModule) {
      const moduleQuestions = data.slice(i, i + questionsPerModule);
      modules.push({
        id: `${section.id}-module-${Math.floor(i / questionsPerModule) + 1}`,
        title: moduleQuestions[0]?.q?.substring(0, 50) + '...' || `${section.name} Part ${Math.floor(i / questionsPerModule) + 1}`,
        content: moduleQuestions.map((q, qi) => ({
          id: `${section.id}-q${i + qi + 1}`,
          title: q.q,
          content: `<h3>${q.q}</h3><div class="answer">${formatAnswer(q.a)}</div>`
        }))
      });
    }
    
    topics.push({
      id: section.id,
      title: section.name,
      description: `Java interview questions - ${section.name}`,
      icon: getIconForSection(section.id),
      modules: modules
    });
  });
  
  return topics;
}

function formatAnswer(answer) {
  // Convert plain text answer to HTML
  let html = answer
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n- /g, '</li><li>')
    .replace(/\n/g, '<br>');
  
  if (html.includes('<li>')) {
    html = '<ul><li>' + html + '</li></ul>';
  }
  
  return html;
}

function getIconForSection(id) {
  const icons = {
    'core-java': '☕',
    'spring': '🌱',
    'spring-boot': '🚀',
    'hibernate': '🐘',
    'design-patterns': '📐',
    'database': '🗄️',
    'coding': '💻'
  };
  return icons[id] || '📚';
}

// Export for use
module.exports = { generateTutorialData, sections };
