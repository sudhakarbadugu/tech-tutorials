// Real CSS interview questions from actual candidate experiences

export const cssRealQuestions = {
  questions: [
    {
      question: 'What is CSS selector specificity and how does it work?',
      answer: `<p>Specificity determines which CSS rule applies when multiple rules target the same element. It is calculated as a tuple of weights: inline styles, IDs, classes/attributes/pseudo-classes, and type/pseudo-elements.</p><p>For example, &lt;code&gt;#nav .menu li</code> has specificity (0,1,1,1), while &lt;code&gt;.menu li</code> has (0,0,1,1). The first wins because it has an ID. The &lt;code&gt;!important</code> flag overrides specificity, and the order in the stylesheet is the final tiebreaker.</p>`,
      difficulty: 'Intermediate',
      tags: ['CSS', 'Specificity'],
      keyPoints: [
        'Specificity is a weight (a, b, c, d) for inline, IDs, classes, and elements.',
        'More specific selectors override less specific ones.',
        '!important and source order are tiebreakers.'
      ]
    },
    {
      question: 'Describe z-index and how stacking context is formed.',
      answer: `<p>&lt;code&gt;z-index</code> controls the vertical stacking order of positioned elements along the z-axis. It only applies to elements with a position value other than &lt;code&gt;static</code> or to flex/grid children with &lt;code&gt;z-index</code>.</p><p>A new stacking context is formed by setting &lt;code&gt;opacity</code> less than 1, &lt;code&gt;transform</code>, &lt;code&gt;filter</code>, &lt;code&gt;will-change</code>, &lt;code&gt;isolation: isolate</code>, or explicit &lt;code&gt;z-index</code> on a positioned element. Elements inside a stacking context are stacked relative to each other before the entire context is stacked with its siblings.</p>`,
      difficulty: 'Intermediate',
      tags: ['CSS', 'Layout', 'z-index'],
      keyPoints: [
        'z-index controls stacking order on the z-axis.',
        'It applies to positioned elements and certain transformed/opacity contexts.',
        'New stacking contexts isolate their children from the global stacking order.'
      ]
    },
    {
      question: 'What is the difference between Flexbox and CSS Grid? When would you use each?',
      answer: `<p><strong>Flexbox</strong> is a one-dimensional layout system designed for arranging items in a row or column. It excels at distributing space, aligning items, and building components such as navigation bars, card footers, and centered modals.</p><p><strong>CSS Grid</strong> is a two-dimensional layout system that controls both rows and columns simultaneously. It is ideal for overall page layouts, dashboards, and complex grids where items need to span multiple tracks.</p><p>They complement each other: use Grid for macro layout and Flexbox for micro layout within grid items.</p>`,
      difficulty: 'Beginner',
      tags: ['CSS', 'Flexbox', 'Grid'],
      keyPoints: [
        'Flexbox is one-dimensional (row or column).',
        'CSS Grid is two-dimensional (rows and columns).',
        'Use Grid for page layouts and Flexbox for component alignment.'
      ]
    },
    {
      question: 'Explain the CSS box model and how you would tell the browser to render in different box models.',
      answer: `<p>The CSS box model describes how an element occupies space: content, padding, border, and margin. The total rendered width can be calculated differently depending on the box-sizing value.</p><p><strong>content-box</strong> (default): width/height apply only to the content; padding and border are added outside, so the total size is larger.</p><p><strong>border-box</strong>: width/height include content, padding, and border, so the element stays the declared size regardless of padding or border thickness.</p><p>Use &lt;code&gt;box-sizing: border-box</code> for predictable layouts.</p>`,
      difficulty: 'Beginner',
      tags: ['CSS', 'Box Model'],
      keyPoints: [
        'The box model consists of content, padding, border, and margin.',
        'content-box adds padding and border outside the declared width.',
        'border-box includes padding and border in the declared width.'
      ]
    },
    {
      question: 'What does `* { box-sizing: border-box; }` do? What are its advantages?',
      answer: `<p>Applying &lt;code&gt;* { box-sizing: border-box; }</code> sets every element to use the border-box model. In this model, the declared &lt;code&gt;width</code> and &lt;code&gt;height</code> include content, padding, and border.</p><p>The main advantage is predictable sizing: adding padding or borders no longer increases the total size of an element, which simplifies responsive layouts and reduces layout bugs. Many CSS frameworks include this as a global reset.</p>`,
      difficulty: 'Beginner',
      tags: ['CSS', 'Box Model'],
      keyPoints: [
        'border-box includes padding and border in width and height.',
        'It makes element sizing predictable when adding padding or borders.',
        'It is widely used as a global reset in modern CSS.'
      ]
    },
    {
      question: 'Explain the concept of CSS Grid. How does it compare to Flexbox?',
      answer: `<p>CSS Grid is a two-dimensional layout system that lets you define rows and columns explicitly and place items into cells. You can create complex layouts with properties such as &lt;code&gt;grid-template-columns</code>, &lt;code&gt;grid-template-rows</code>, &lt;code&gt;grid-gap</code>, and &lt;code&gt;grid-column</code>/&lt;code&gt;grid-row</code>.</p><p>Unlike Flexbox, which arranges items along a single axis and wraps if needed, Grid controls both axes at once. Flexbox is best for distributing space within a component; Grid is best for defining the overall structure of a page or section.</p>`,
      difficulty: 'Intermediate',
      tags: ['CSS', 'Grid', 'Flexbox'],
      keyPoints: [
        'CSS Grid is a two-dimensional layout system.',
        'It excels at defining rows, columns, and precise item placement.',
        'Use Grid for macro layout and Flexbox for component-level alignment.'
      ]
    }
  ]
}
