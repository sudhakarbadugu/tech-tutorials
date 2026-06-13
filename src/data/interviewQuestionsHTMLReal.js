// Real HTML interview questions from actual candidate experiences

export const htmlRealQuestions = {
  questions: [
    {
      question: 'What is semantic HTML and why is it important?',
      answer: `<p>Semantic HTML uses elements that convey meaning about the content they contain, such as &lt;code&gt;&lt;header&gt;</code>, &lt;code&gt;&lt;nav&gt;</code>, &lt;code&gt;&lt;main&gt;</code>, &lt;code&gt;&lt;article&gt;</code>, &lt;code&gt;&lt;section&gt;</code>, and &lt;code&gt;&lt;footer&gt;</code>, instead of generic &lt;code&gt;&lt;div&gt;</code> or &lt;code&gt;&lt;span&gt;</code> tags.</p><p>It improves accessibility because screen readers can navigate landmarks and announce content correctly. It also benefits SEO, maintainability, and responsive design by giving the document a clear structure.</p>`,
      difficulty: 'Beginner',
      tags: ['HTML', 'Semantic HTML', 'Accessibility'],
      keyPoints: [
        'Semantic elements describe the meaning of content, not just presentation.',
        'They improve accessibility for assistive technologies.',
        'They help search engines and developers understand page structure.'
      ]
    },
    {
      question: 'What are ARIA roles and how do they enhance accessibility?',
      answer: `<p>ARIA (Accessible Rich Internet Applications) roles are attributes that describe the purpose of an element to assistive technologies when native HTML semantics are insufficient. Examples include &lt;code&gt;role="button"</code>, &lt;code&gt;role="navigation"</code>, &lt;code&gt;role="dialog"</code>, and &lt;code&gt;role="tabpanel"</code>.</p><p>They enhance accessibility by exposing widget roles, states, and properties to screen readers. However, the best practice is to use the correct native HTML element first and add ARIA only when necessary, because ARIA does not add behavior.</p>`,
      difficulty: 'Intermediate',
      tags: ['HTML', 'ARIA', 'Accessibility'],
      keyPoints: [
        'ARIA roles describe element purpose to assistive technologies.',
        'Use native HTML elements first; add ARIA only when semantics are missing.',
        'ARIA provides roles, states, and properties but not keyboard behavior.'
      ]
    },
    {
      question: 'How would you ensure a web application is compliant with WCAG guidelines?',
      answer: `<p>WCAG (Web Content Accessibility Guidelines) compliance involves four principles: perceivable, operable, understandable, and robust content.</p><ul><li>Use semantic HTML and meaningful text alternatives for images.</li><li>Ensure sufficient color contrast and avoid relying on color alone.</li><li>Make all interactive elements keyboard accessible and visible on focus.</li><li>Provide captions, transcripts, and clear error messages.</li><li>Use ARIA appropriately and test with screen readers and automated tools such as Lighthouse, axe, or WAVE.</li></ul><p>Regular audits and manual keyboard navigation tests are essential.</p>`,
      difficulty: 'Intermediate',
      tags: ['HTML', 'Accessibility', 'WCAG'],
      keyPoints: [
        'WCAG is organized around perceivable, operable, understandable, and robust principles.',
        'Semantic HTML, contrast, keyboard access, and alt text are foundational.',
        'Automated tools and manual screen-reader testing verify compliance.'
      ]
    }
  ]
}
