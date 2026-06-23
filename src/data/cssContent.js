// Auto-generated from trinits-web-angular tutorial sources
// Rewritten beginner-friendly tutorial content (w3schools style)

export const cssContent = {
  module1: {
    'css-intro': {
      title: 'CSS Introduction & Overview',
      sections: [
        {
          heading: 'What is CSS?',
          content: [
            'CSS stands for Cascading Style Sheets. It is the language used to style and lay out web pages. While HTML provides the structure and content of a page (the text, images, and buttons), CSS makes that content look good — it controls colors, spacing, fonts, backgrounds, and the position of every element on the page.',
            'Think of HTML as the bones of a house and CSS as the paint, furniture, and decorations. Without CSS, every website would look like a plain text document. With CSS, you can transform that same content into a polished, modern, and responsive design.',
            'CSS works hand-in-hand with HTML. You write CSS rules that target HTML elements, and the browser applies those rules to make the page look the way you want.',
            'A simple example shows the idea: one rule can change the color of every paragraph on a page, or center a heading, or make images line up in a row. With just a few lines of CSS, you can completely change the look and feel of a website.'
          ],
          list: [
            '<strong>CSS stands for</strong> Cascading Style Sheets.',
            '<strong>CSS describes</strong> how HTML elements should be displayed on screen, on paper, or in other media.',
            '<strong>CSS saves a lot of work</strong> — you can control the layout of many web pages all at once with one stylesheet.',
            '<strong>External stylesheets</strong> are stored in <code>.css</code> files (standard CSS) or <code>.scss</code> files (SASS, used in Angular/React projects).'
          ],
          code: `/* A simple CSS rule */
body {{ '{' }}
  background-color: lightblue;
  font-family: Arial, sans-serif;
{{ '}' }}

h1 {{ '{' }}
  color: navy;
  text-align: center;
{{ '}' }}`
        }
      ]
    },
    'css-syntax': {
      title: 'CSS Syntax',
      sections: [
        {
          heading: 'CSS Syntax',
          content: [
            'A CSS rule has two main parts: a selector and a declaration block. The selector points to the HTML element you want to style, and the declaration block contains one or more declarations that say what to change.',
            'Each declaration is made of a property and a value, separated by a colon. For example, <code>color: red;</code> means the property <code>color</code> is set to the value <code>red</code>.',
            'You write the selector, then an opening curly brace <code>{</code>, then your declarations, and finally a closing curly brace <code>}</code>. Every declaration ends with a semicolon <code>;</code> — even the last one, which is a good habit to keep.',
            'CSS does not care about whitespace or line breaks, but formatting the code with each property on its own line makes it much easier to read. Comments help too: anything between <code>/*</code> and <code>*/</code> is ignored by the browser.'
          ],
          list: [
            '<strong>Selector:</strong> The HTML element you want to style (for example, <code>p</code>, <code>h1</code>, or <code>.button</code>).',
            '<strong>Property:</strong> The style attribute you want to change (for example, <code>color</code>, <code>font-size</code>, <code>margin</code>).',
            '<strong>Value:</strong> The setting for the property (for example, <code>red</code>, <code>16px</code>, <code>20%</code>).',
            '<strong>Declaration block:</strong> The group of declarations wrapped in curly braces <code>{ }</code>.',
            '<strong>Comments:</strong> Use <code>/* your note */</code> to leave notes for yourself or other developers.'
          ],
          code: `p {{ '{' }}
  color: red;
  text-align: center;
  font-size: 14px;
{{ '}' }}`
        }
      ]
    },
    'css-selectors': {
      title: 'CSS Selectors',
      sections: [
        {
          heading: 'Simple Selectors',
          content: [
            'Selectors are how you tell CSS which HTML elements to style. The simplest selectors target elements by their tag name, by an ID, or by a class. These three are the ones you will use most often as a beginner.',
            'A tag selector matches every element of that type on the page — for example, <code>p { ... }</code> will style every paragraph. An ID selector uses the <code>#</code> symbol and targets only one element that has that exact ID. A class selector uses the <code>.</code> symbol and can be reused on as many elements as you want.',
            'Classes are the most flexible. You can give the same class to many elements and style them all with one rule. That is the heart of how modern CSS is organized: assign meaningful class names, then style them once.'
          ],
          list: [
            '<strong>Tag Selector:</strong> Targets all instances of a tag. <code>p { ... }</code> styles every paragraph.',
            '<strong>ID Selector:</strong> Targets a single element by ID. <code>#header { ... }</code> targets the element with <code>id="header"</code>.',
            '<strong>Class Selector:</strong> Targets elements by class. <code>.box { ... }</code> styles every element with <code>class="box"</code>.',
            '<strong>Universal Selector:</strong> <code>* { ... }</code> targets every element on the page — useful for resets.',
            '<strong>Grouping Selector:</strong> <code>h1, h2, h3 { ... }</code> applies the same styles to multiple selectors at once.'
          ],
          code: `/* Tag selector — affects every paragraph */
p {{ '{' }} color: blue; {{ '}' }}

/* ID selector — highest specificity of these three */
#header {{ '{' }} background: navy; {{ '}' }}

/* Class selector — reusable across many elements */
.highlight {{ '{' }} background: yellow; {{ '}' }}`
        },
        {
          heading: 'Combinator Selectors',
          content: [
            'Combinator selectors let you pick elements based on their relationship to other elements in the page. For example, you might want to style only paragraphs that are inside a card, or list items that come right after a heading.',
            'There are four main combinators: the descendant combinator (just a space) matches elements at any depth, the child combinator (<code>&gt;</code>) matches only direct children, the adjacent sibling (<code>+</code>) matches the very next element, and the general sibling (<code>~</code>) matches any following sibling.'
          ],
          list: [
            '<code>div p</code> – Descendant: selects all <code>&lt;p&gt;</code> inside <code>&lt;div&gt;</code> at any depth.',
            '<code>div &gt; p</code> – Child: selects only direct child <code>&lt;p&gt;</code> of <code>&lt;div&gt;</code> (one level only).',
            '<code>div + p</code> – Adjacent sibling: selects the <code>&lt;p&gt;</code> that comes immediately after a <code>&lt;div&gt;</code>.',
            '<code>div ~ p</code> – General sibling: selects all <code>&lt;p&gt;</code> siblings that follow a <code>&lt;div&gt;</code>.'
          ]
        },
        {
          heading: 'Pseudo-Class Selectors',
          content: [
            'Pseudo-classes let you style an element based on its state or position — like when the user hovers over a link, when an input is focused, or when it is the first child of its parent. They are written with a single colon <code>:</code> followed by the pseudo-class name.',
            'Pseudo-classes are what make CSS feel interactive. With them, you can give visual feedback when someone points at a button, highlight the currently active navigation link, or style every other row of a table without writing extra classes in your HTML.'
          ],
          list: [
            '<code>a:hover</code> – Applies when the user hovers over a link or button.',
            '<code>input:focus</code> – Applies while an input has keyboard focus.',
            '<code>li:first-child</code> – Targets the first <code>&lt;li&gt;</code> in a list.',
            '<code>li:last-child</code> – Targets the last <code>&lt;li&gt;</code> in a list.',
            '<code>li:nth-child(2n)</code> – Targets every even-numbered child.',
            '<code>a:not(.active)</code> – Targets all links that do <em>not</em> have the <code>.active</code> class.',
            '<code>:root</code> – Targets the highest-level parent of the document (great for CSS variables).'
          ]
        },
        {
          heading: 'Pseudo-Element Selectors',
          content: [
            'Pseudo-elements let you style a specific part of an element — like the first letter, the first line, or content that you insert before or after the element. They are written with a double colon <code>::</code> to set them apart from pseudo-classes.',
            'The <code>::before</code> and <code>::after</code> pseudo-elements are especially powerful. You can use them to add decorative shapes, icons, or labels without changing your HTML at all.'
          ],
          list: [
            '<code>p::first-line</code> – Styles the first line of a paragraph.',
            '<code>p::first-letter</code> – Styles the first letter (great for drop caps).',
            '<code>p::before</code> – Inserts generated content before the element.',
            '<code>p::after</code> – Inserts generated content after the element.',
            '<code>::placeholder</code> – Styles the placeholder text inside an input.',
            '<code>::selection</code> – Styles the part of text a user highlights with the mouse.'
          ],
          code: `.tooltip::after {{ '{' }}
  content: attr(data-tooltip);
  position: absolute;
  background: black;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
{{ '}' }}`
        },
        {
          heading: 'Attribute Selectors',
          content: [
            'Attribute selectors target elements based on the attributes they have, or even on the value of those attributes. They are very useful for styling form inputs, links, and any element where the markup already tells you what it is.',
            'You can match an exact value, a value that starts with a certain word, one that ends with a certain file extension, or one that simply contains a word anywhere in the value.'
          ],
          list: [
            '<code>[type]</code> – Selects all elements that have a <code>type</code> attribute, regardless of value.',
            '<code>[type="text"]</code> – Exact match: input elements where <code>type</code> is exactly <code>text</code>.',
            '<code>[href^="https"]</code> – Starts with: every link that begins with <code>https</code>.',
            '<code>[href$=".pdf"]</code> – Ends with: every link that points to a PDF file.',
            '<code>[title*="hello"]</code> – Contains: every element whose <code>title</code> contains the word "hello".',
            '<code>[class~="btn"]</code> – Whitespace-separated list: targets elements where one of the classes is <code>btn</code>.'
          ]
        }
      ]
    },
    'css-insert': {
      title: 'Ways to Insert CSS',
      sections: [
        {
          heading: 'Three Ways to Insert CSS',
          content: [
            'There are three ways to add CSS to an HTML page, and each one has its place. Knowing when to use which is an important part of writing maintainable CSS.',
            'An <strong>external</strong> stylesheet is a separate <code>.css</code> file that you link from your HTML. This is the most common and recommended way because you can style many pages from one file. An <strong>internal</strong> stylesheet goes inside a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> of a single HTML page. An <strong>inline</strong> style is written directly on an HTML element using the <code>style</code> attribute and affects only that one element.',
            'As a rule of thumb: use external stylesheets for everything in a real project, internal styles for quick experiments or page-specific tweaks, and inline styles only for very small, one-off cases.'
          ],
          list: [
            '<strong>External CSS:</strong> A separate <code>.css</code> file linked with <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>. Best for real projects.',
            '<strong>Internal CSS:</strong> A <code>&lt;style&gt;</code> block in the <code>&lt;head&gt;</code> of an HTML page. Useful for single-page demos or overrides.',
            '<strong>Inline CSS:</strong> A <code>style</code> attribute on a single element. Use sparingly — it is hard to maintain.',
            '<strong>Cascade priority:</strong> Inline &gt; Internal/External &gt; Browser defaults.'
          ],
          code: `<!DOCTYPE html>
<html>
<head>
  <!-- External CSS -->
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Internal CSS */
    p {{ '{' }}
      color: red;
      font-size: 18px;
    {{ '}' }}
  </style>
</head>
<body>
  <p style="color: blue;">This paragraph uses inline CSS.</p>
</body>
</html>`
        }
      ]
    },
    'css-cascade': {
      title: 'Cascade & Specificity',
      sections: [
        {
          heading: 'The Cascade',
          content: [
            'The word "cascading" in CSS is not just decoration. It describes how the browser decides which style wins when more than one rule targets the same element. CSS stands for <em>Cascading</em> Style Sheets for a reason.',
            'When two rules try to set the same property on the same element, the browser uses three things to break the tie: <strong>importance</strong> (does the rule use <code>!important</code>?), <strong>specificity</strong> (how detailed is the selector?), and <strong>source order</strong> (which rule comes last in the file?).',
            'This system is what makes CSS so powerful at scale. You can write general rules at the top, and more specific overrides below, and the browser will figure it out. Once you understand cascade and specificity, you stop fighting CSS and start working with it.'
          ],
          list: [
            '<strong>Importance:</strong> <code>!important</code> wins everything else — use it as a last resort only.',
            '<strong>Specificity:</strong> More specific selectors win over less specific ones.',
            '<strong>Source order:</strong> When two rules have the same importance and specificity, the one that comes later in the file wins.',
            '<strong>Origin priority (highest to lowest):</strong> Inline styles &gt; internal/external stylesheets &gt; browser defaults.'
          ],
          code: `/* External style sheet (style.css) */
p {{ '{' }} color: green; {{ '}' }}`
        },
        {
          heading: 'Specificity Calculation',
          content: [
            'Specificity is a four-part score given to every selector. The score is written as a tuple: <code>(inline, IDs, classes/attributes/pseudo-classes, elements/pseudo-elements)</code>. You compare scores from left to right — a higher number in any column wins.',
            'For example, an inline style gets <code>(1,0,0,0)</code>, an ID selector gets <code>(0,1,0,0)</code>, a class selector gets <code>(0,0,1,0)</code>, and a tag selector gets <code>(0,0,0,1)</code>. Combining them adds them up: <code>div p</code> is <code>(0,0,0,2)</code> because it has two tag selectors.',
            'If specificity is tied, the rule that comes later in the stylesheet wins. And finally, the nuclear option is <code>!important</code>, which overrides everything — but be careful, because overusing it makes CSS very hard to maintain.'
          ],
          list: [
            '<code>inline style</code> → (1,0,0,0) — wins over almost everything.',
            '<code>#header</code> → (0,1,0,0) — an ID alone is very strong.',
            '<code>.nav .menu</code> → (0,0,2,0) — two classes add up.',
            '<code>div p</code> → (0,0,0,2) — two tag selectors are weaker than even one class.',
            '<strong>Tiebreaker:</strong> When specificity is equal, the last rule in the source wins.',
            '<strong>!important:</strong> Overrides all specificity, but should be used sparingly.'
          ],
          code: `/* Specificity examples (highest to lowest) */
#nav .menu li   /* (0,1,1,1) — WINS */
.menu li         /* (0,0,1,1) */
div p            /* (0,0,0,2) */

/* !important overrides everything */
color: red !important;`
        }
      ]
    },
    'css-comments': {
      title: 'CSS Comments',
      sections: [
        {
          heading: 'CSS Comments',
          content: [
            'Comments in CSS let you leave notes inside your stylesheet. They are written between <code>/*</code> and <code>*/</code>, and the browser completely ignores them — they exist only for the people reading your code.',
            'Use comments to explain <em>why</em> you styled something a certain way, to label sections of a long stylesheet, or to temporarily disable a rule while testing. Good comments are like a roadmap: they help you and your team navigate the file months later.'
          ],
          list: [
            '<strong>Single-line comment:</strong> <code>/* this is a comment */</code>',
            '<strong>Multi-line comment:</strong> Comments can span as many lines as you need.',
            '<strong>Disable rules:</strong> Wrap a rule in <code>/* */</code> to temporarily turn it off.',
            '<strong>HTML comments are different:</strong> HTML uses <code>&lt;!-- --&gt;</code>, not <code>/* */</code>.',
            '<strong>JS comments are different too:</strong> JavaScript uses <code>//</code> for single-line and <code>/* */</code> for multi-line.'
          ],
          code: `/* This is a single-line comment */

/* This is
   a multi-line
   comment */

/* .button {
  background: blue;
  /* This rule is currently disabled */
} */`
        }
      ]
    }
  },
  module2: {
    'css-properties': {
      title: 'CSS Properties & Values',
      sections: [
        {
          heading: 'CSS Properties & Values',
          content: [
            'A <strong>property</strong> is the part of CSS that says <em>what</em> you want to change (like color, font-size, or margin). A <strong>value</strong> is the part that says <em>how</em> to change it (like red, 18px, or 20%).',
            'Each property only accepts certain value types. For example, <code>color</code> accepts a color, <code>font-size</code> accepts a length, and <code>display</code> accepts a keyword like <code>flex</code> or <code>grid</code>. The browser will ignore the rule if the value is invalid, so getting familiar with the common value types is important.',
            'You will run into lengths, percentages, colors, keywords, and functions like <code>calc()</code> or <code>clamp()</code>. CSS variables (<code>--name</code>) let you define a value once and reuse it, which keeps your styles consistent and easy to update.'
          ],
          list: [
            '<strong>Length units:</strong> <code>px</code> (pixels), <code>rem</code> (relative to root font size), <code>em</code> (relative to parent), <code>%</code>, <code>vw</code>/<code>vh</code> (viewport width/height), <code>vmin</code>/<code>vmax</code>.',
            '<strong>Color values:</strong> named (<code>red</code>), hex (<code>#ff0000</code>), rgb/hsl functions, modern <code>oklch()</code>.',
            '<strong>Functions:</strong> <code>calc()</code> for math, <code>clamp(min, preferred, max)</code> for fluid values, <code>min()</code> and <code>max()</code> for comparisons.',
            '<strong>CSS Variables:</strong> Define with <code>--name: value;</code> and use with <code>var(--name)</code>.',
            '<strong>@property:</strong> Register a custom property with a type so it can be smoothly animated.'
          ],
          code: `h1 {{ '{' }}
  color: red;
  font-size: clamp(1.5rem, 3vw, 2.5rem);  /* fluid typography */
  background-color: yellow;
  width: calc(100% - 2rem);               /* math in CSS */
{{ '}' }}

/* CSS custom properties */
:root {{ '{' }}
  --primary: #3498db;
  --spacing: 1rem;
{{ '}' }}

.button {{ '{' }}
  background: var(--primary);
  padding: var(--spacing);
{{ '}' }}

/* @property for animatable custom properties */
@property --gradient-angle {{ '{' }}
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
{{ '}' }}`
        }
      ]
    },
    'css-colors': {
      title: 'CSS Colors',
      sections: [
        {
          heading: 'CSS Color Formats',
          content: [
            'CSS gives you several ways to write a color, and modern browsers support all of them. You can use simple keywords like <code>red</code> or <code>tomato</code>, the classic hex notation that web developers have used for decades, or modern functions like <code>rgb()</code>, <code>hsl()</code>, and <code>oklch()</code>.',
            'Each format has its strengths. Hex and named colors are short and familiar. <code>rgb()</code> and <code>hsl()</code> make it easy to think in terms of red-green-blue or hue-saturation-lightness. <code>oklch()</code> is a modern color space that matches how humans actually see color, so a 50% lightness in oklch looks like a true mid-gray, unlike in hsl where it can look slightly off.',
            'You can also blend colors with <code>color-mix()</code> — for example, mixing 30% white into your brand color to create a lighter shade — without needing a preprocessor or a separate tool.'
          ],
          list: [
            '<strong>Named:</strong> <code>red</code>, <code>blue</code>, <code>transparent</code>, <code>currentColor</code> — short and easy to read.',
            '<strong>Hex:</strong> <code>#ff0000</code> for red, or <code>#ff000088</code> (8-digit) to include transparency.',
            '<strong>RGB/RGBA:</strong> <code>rgb(255, 0, 0)</code> or <code>rgba(255, 0, 0, 0.5)</code> for transparent red.',
            '<strong>HSL/HSLA:</strong> <code>hsl(0, 100%, 50%)</code> — hue, saturation, lightness.',
            '<strong>oklch():</strong> <code>oklch(70% 0.1 250)</code> — perceptually uniform (lightness, chroma, hue).',
            '<strong>color-mix():</strong> <code>color-mix(in oklch, blue, red 40%)</code> — blend two colors.',
            '<strong>currentcolor:</strong> Inherits the current text color, useful for SVG icons that should match text.'
          ],
          code: `h2 {{ '{' }}
  color: red;
  color: #ff0000;
  color: rgb(255, 0, 0);
  color: rgba(255, 0, 0, 0.5);
  color: hsl(0, 100%, 50%);
  color: hsla(0, 100%, 50%, 0.5);
  color: oklch(70% 0.1 250);
{{ '}' }}

/* Blend colors without a preprocessor */
:root {{ '{' }}
  --primary: oklch(62% 0.19 250);
  --primary-light: color-mix(in oklch, var(--primary), white 30%);
{{ '}' }}`
        }
      ]
    },
    'css-background': {
      title: 'CSS Backgrounds',
      sections: [
        {
          heading: 'CSS Backgrounds',
          content: [
            'The background properties let you add color, images, and gradients behind any HTML element. They are how you create visual depth on a page — from a simple flat color to a hero image that fills the screen.',
            'You can layer multiple backgrounds on top of each other, control how a background image repeats, position it precisely, and even lock it in place when the user scrolls. The <code>background</code> shorthand lets you set all of these properties in a single line.',
            'A common beginner question is the difference between <code>background-color</code> and <code>opacity</code>: <code>background-color</code> only affects the background, while <code>opacity</code> makes the entire element (including its text) see-through. Most of the time you want the former.'
          ],
          list: [
            '<strong>background-color:</strong> Sets a solid color behind the element.',
            '<strong>background-image:</strong> Sets one or more background images (or gradients).',
            '<strong>background-repeat:</strong> Controls if/how the image tiles — <code>no-repeat</code>, <code>repeat-x</code>, <code>repeat-y</code>, <code>repeat</code>.',
            '<strong>background-size:</strong> <code>cover</code> (fill the box, may crop), <code>contain</code> (fit fully, may leave space), or exact sizes like <code>300px 200px</code>.',
            '<strong>background-position:</strong> Where the image sits — <code>center</code>, <code>top right</code>, <code>50% 50%</code>, and so on.',
            '<strong>background-attachment:</strong> <code>scroll</code>, <code>fixed</code>, or <code>local</code> — controls whether the image moves with the page.',
            '<strong>background (shorthand):</strong> Combines all the above into one declaration.',
            '<strong>background-blend-mode:</strong> Blends multiple background images together (advanced).'
          ],
          code: `.hero {{ '{' }}
  background-color: #f0f0f0;
  background-image: url('image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
{{ '}' }}

/* Shorthand version of the same rule */
.hero {{ '{' }}
  background: #f0f0f0 url('image.jpg') no-repeat center top / cover fixed;
{{ '}' }}`
        }
      ]
    },
    'css-fonts': {
      title: 'CSS Fonts & Text',
      sections: [
        {
          heading: 'CSS Fonts',
          content: [
            'Fonts are one of the most noticeable parts of any design. CSS lets you choose the typeface (<code>font-family</code>), the size (<code>font-size</code>), the style (<code>font-style</code>), and the weight (<code>font-weight</code>). You can also control the spacing between lines and the spacing between individual letters, both of which have a big effect on readability.',
            'A common practice is to list several font families in order of preference — the browser will use the first one that is available. End the list with a generic family like <code>serif</code> or <code>sans-serif</code> as a fallback so the page never breaks.'
          ],
          list: [
            '<strong>font-family:</strong> The typeface. <code>font-family: "Georgia", serif;</code>',
            '<strong>font-size:</strong> The size of the text. <code>font-size: 18px;</code> or <code>1.2em;</code>',
            '<strong>font-style:</strong> <code>normal</code>, <code>italic</code>, or <code>oblique</code>.',
            '<strong>font-weight:</strong> Boldness — keywords (<code>normal</code>, <code>bold</code>) or numbers (<code>100</code> to <code>900</code>).',
            '<strong>line-height:</strong> Spacing between lines — usually <code>1.4</code> to <code>1.8</code> for body text.',
            '<strong>letter-spacing:</strong> Space between letters.',
            '<strong>word-spacing:</strong> Space between words.',
            '<strong>font (shorthand):</strong> Sets size, family, weight, and style in one line: <code>font: italic bold 16px Arial;</code>'
          ],
          code: `p {{ '{' }}
  font-family: "Georgia", serif;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  line-height: 1.6;
{{ '}' }}`
        },
        {
          heading: 'Text Properties',
          content: [
            'Beyond fonts, CSS gives you fine control over how text is aligned, decorated, transformed, and wrapped. These small touches are what separate an amateur page from a polished one.',
            'For example, <code>text-align: justify</code> makes both edges of a paragraph line up neatly (like in newspapers and books), <code>text-transform: uppercase</code> shows text in capital letters without changing the underlying HTML, and <code>white-space: nowrap</code> prevents line breaks in places like buttons where wrapping would look odd.'
          ],
          list: [
            '<strong>text-align:</strong> <code>left</code>, <code>right</code>, <code>center</code>, or <code>justify</code>.',
            '<strong>text-decoration:</strong> <code>underline</code>, <code>overline</code>, <code>line-through</code>, or <code>none</code>.',
            '<strong>text-transform:</strong> <code>uppercase</code>, <code>lowercase</code>, or <code>capitalize</code>.',
            '<strong>text-indent:</strong> Indents the first line of a paragraph. <code>text-indent: 50px;</code>',
            '<strong>white-space:</strong> Controls how whitespace is handled — <code>normal</code>, <code>nowrap</code>, <code>pre</code>.',
            '<strong>text-shadow:</strong> Adds a shadow behind text — <code>text-shadow: 2px 2px 4px gray;</code>',
            '<strong>word-break / overflow-wrap:</strong> Controls how long words break when they would overflow.'
          ],
          code: `p {{ '{' }}
  text-align: justify;
  text-decoration: underline;
  text-transform: uppercase;
  text-indent: 50px;
  white-space: nowrap;
  letter-spacing: 1px;
{{ '}' }}`
        }
      ]
    }
  },
  module3: {
    'css-box-model': {
      title: 'CSS Box Model',
      sections: [
        {
          heading: 'The CSS Box Model',
          content: [
            'Every HTML element on a page is treated by CSS as a rectangular <strong>box</strong>. This is one of the most important ideas in CSS, because once you understand the box model, properties like margin, padding, and width start making much more sense.',
            'A box has four layers, from the inside out: <strong>content</strong> (your text or image), <strong>padding</strong> (space between the content and the border), <strong>border</strong> (a line around the padding), and <strong>margin</strong> (space outside the border, separating this box from other elements).',
            'By default, when you set a <code>width</code> on an element, you are sizing only the content area, and the padding and border are added on top. This often surprises beginners — a 200px-wide box with 10px padding and a 2px border actually takes up 224px of horizontal space. To make sizing more intuitive, most developers now use <code>box-sizing: border-box</code>, which makes <code>width</code> include padding and border.'
          ],
          list: [
            '<strong>Content:</strong> The actual content of the box (text, image, etc.) — sized by <code>width</code> and <code>height</code>.',
            '<strong>Padding:</strong> Space between the content and the border — clears the inside of the box.',
            '<strong>Border:</strong> A line that wraps the padding and content.',
            '<strong>Margin:</strong> Space outside the border — separates this box from neighbors.',
            '<strong>box-sizing:</strong> <code>content-box</code> (default) sizes only content; <code>border-box</code> includes padding and border.'
          ],
          code: `.box {{ '{' }}
  width: 200px;
  padding: 10px;
  border: 2px solid #333;
  margin: 20px;
  box-sizing: border-box;  /* recommended */
{{ '}' }}`
        }
      ]
    },
    'css-margin-padding': {
      title: 'CSS Margins & Padding',
      sections: [
        {
          heading: 'Margins and Padding',
          content: [
            'Margins and padding are the two spacing tools in CSS, and knowing when to use which is essential. The simple rule is: <strong>padding</strong> pushes the content inward, away from the element\u2019s own border; <strong>margin</strong> pushes the element itself away from its neighbors.',
            'You will often see margins and padding written with one to four values. With four values, they go in clockwise order — top, right, bottom, left. With two values, the first is top/bottom and the second is left/right. With one value, it applies to all four sides.',
            'A few helpful tricks: <code>margin: auto</code> on a block element with a width will center it horizontally, and using margin values like <code>auto</code> works well for layouts. <code>box-sizing: border-box</code> makes width calculations match what most people expect.'
          ],
          list: [
            '<strong>Four-value syntax:</strong> <code>margin: 25px 50px 75px 100px;</code> — top, right, bottom, left.',
            '<strong>Two-value syntax:</strong> First value is top/bottom, second is left/right.',
            '<strong>One-value syntax:</strong> Applies to all four sides.',
            '<strong>Auto margins:</strong> <code>margin: auto;</code> centers a block element horizontally.',
            '<strong>Individual sides:</strong> <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, <code>margin-left</code> (same for padding).',
            '<strong>box-sizing:</strong> Use <code>border-box</code> so width includes padding and border.'
          ],
          code: `div {{ '{' }}
  margin: 25px 50px 75px 100px;  /* top right bottom left */
  padding: 25px 50px 75px 100px;
  margin: auto;                  /* center horizontally */
  box-sizing: border-box;        /* predictable sizing */
{{ '}' }}`
        }
      ]
    },
    'css-border': {
      title: 'CSS Borders',
      sections: [
        {
          heading: 'CSS Borders',
          content: [
            'Borders are the lines drawn around an element\u2019s padding and content. You can use them to outline boxes, create dividers, draw underlines, and even build shapes with clever use of <code>border-radius</code>.',
            'A border has three parts: a <strong>style</strong> (like solid, dashed, or dotted), a <strong>width</strong> (usually in pixels), and a <strong>color</strong>. The shorthand <code>border: 5px solid red;</code> sets all three in one line. You can also style each side differently with <code>border-top</code>, <code>border-right</code>, and so on.',
            '<code>border-radius</code> rounds the corners. A large value can turn a square into a circle, and small values give a subtle, modern feel that designers love. It is one of the smallest CSS properties with the biggest visual impact.'
          ],
          list: [
            '<strong>border-style:</strong> <code>solid</code>, <code>dashed</code>, <code>dotted</code>, <code>double</code>, <code>none</code>, and more.',
            '<strong>border-width:</strong> Thickness in pixels (or thin/medium/thick).',
            '<strong>border-color:</strong> Any valid color.',
            '<strong>border (shorthand):</strong> <code>border: 5px solid red;</code>',
            '<strong>border-radius:</strong> Rounds the corners — try <code>50%</code> for circles.',
            '<strong>Individual sides:</strong> <code>border-top</code>, <code>border-right</code>, <code>border-bottom</code>, <code>border-left</code>.',
            '<strong>outline:</strong> Similar to border, but drawn outside the box and does not affect layout.'
          ],
          code: `div {{ '{' }}
  border-style: dotted solid double dashed;  /* top right bottom left */
  border-width: 5px 20px;                    /* top/bottom  right/left */
  border-color: red green blue yellow;
  border-radius: 5px;
  border: 5px solid red;                     /* shorthand */
{{ '}' }}`
        }
      ]
    },
    'css-display': {
      title: 'Display & Position',
      sections: [
        {
          heading: 'The display Property',
          content: [
            'The <code>display</code> property controls how an element behaves in the page flow. By default, block elements (like <code>&lt;div&gt;</code> and <code>&lt;p&gt;</code>) start on a new line and take the full width, while inline elements (like <code>&lt;span&gt;</code> and <code>&lt;a&gt;</code>) sit on the same line as their neighbors and only take up as much width as their content needs.',
            'You can change that behavior with <code>display</code>. Setting it to <code>inline-block</code> lets an element sit on the same line while still respecting width and height. Setting it to <code>flex</code> or <code>grid</code> turns the element into a layout container (you will learn those in detail later). And <code>display: none</code> removes the element from the page entirely, as if it was never there.'
          ],
          list: [
            '<strong>block:</strong> Starts on a new line and stretches to fill the width.',
            '<strong>inline:</strong> Stays on the same line; width and height are ignored.',
            '<strong>inline-block:</strong> Sits inline but respects width, height, and margins.',
            '<strong>flex:</strong> Becomes a flex container (see the Flexbox module).',
            '<strong>grid:</strong> Becomes a grid container (see the Grid module).',
            '<strong>none:</strong> Hides the element completely — it is removed from the page flow.',
            '<strong>contents:</strong> The element\u2019s box disappears but its children stay visible.'
          ],
          code: `.header {{ '{' }} display: block; {{ '}' }}
.inline-link {{ '{' }} display: inline; {{ '}' }}
.button {{ '{' }}
  display: inline-block;  /* sit on a line, size like a block */
  padding: 8px 16px;
{{ '}' }}
.modal {{ '{' }} display: none; {{ '}' }} /* hidden */`
        },
        {
          heading: 'The position Property',
          content: [
            'Where <code>display</code> controls how an element flows, the <code>position</code> property controls how it is placed on the page. The default is <code>static</code>, which means the element follows the normal page flow. The other values let you take elements out of that flow and place them exactly where you want.',
            'A <code>relative</code> element stays where it is but can be nudged with <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>, and it becomes a reference point for its absolutely positioned children. An <code>absolute</code> element is removed from the flow and positioned relative to its nearest positioned ancestor. A <code>fixed</code> element is positioned relative to the viewport, so it stays in place when you scroll — that is how sticky navigation bars are often made. <code>sticky</code> is a hybrid: it acts like <code>relative</code> until you scroll past it, then it sticks.'
          ],
          list: [
            '<strong>static (default):</strong> Follows the normal page flow.',
            '<strong>relative:</strong> Stays in flow but can be offset, and becomes a positioning reference for children.',
            '<strong>absolute:</strong> Removed from flow; positioned relative to the nearest positioned ancestor.',
            '<strong>fixed:</strong> Positioned relative to the viewport; stays in place when scrolling.',
            '<strong>sticky:</strong> Acts like relative until scrolled past, then sticks in place.',
            '<strong>top / right / bottom / left:</strong> Offsets for positioned elements.',
            '<strong>z-index:</strong> Stacking order — higher values appear on top.'
          ],
          code: `.modal {{ '{' }}
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
{{ '}' }}

.sticky-nav {{ '{' }}
  position: sticky;
  top: 0;
{{ '}' }}`
        }
      ]
    }
  },
  module4: {
    'css-flexbox': {
      title: 'Flexbox',
      sections: [
        {
          heading: 'What is Flexbox?',
          content: [
            'Flexbox is a one-dimensional layout system built into CSS. It is designed for arranging items in a single row <em>or</em> a single column, and it is excellent at distributing space and aligning items. If you have ever wrestled with floats or table hacks to center something, flexbox is your new best friend.',
            'To use flexbox, set <code>display: flex</code> on a container. Its direct children automatically become <strong>flex items</strong>, and you can control how those items are sized, spaced, and aligned with a handful of intuitive properties.'
          ],
          list: [
            '<strong>Container properties:</strong>',
            '<code>flex-direction</code>: <code>row</code> (default), <code>column</code>, <code>row-reverse</code>, <code>column-reverse</code>.',
            '<code>flex-wrap</code>: <code>nowrap</code> (default), <code>wrap</code>, <code>wrap-reverse</code>.',
            '<code>justify-content</code>: Main-axis alignment — <code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>.',
            '<code>align-items</code>: Cross-axis alignment — <code>stretch</code>, <code>center</code>, <code>flex-start</code>, <code>flex-end</code>, <code>baseline</code>.',
            '<code>align-content</code>: Alignment of wrapped lines — <code>stretch</code>, <code>center</code>, <code>flex-start</code>, <code>flex-end</code>, <code>space-between</code>.',
            '<code>gap</code>: Spacing between items without using margins — <code>gap: 10px</code> or <code>row-gap</code> / <code>column-gap</code>.',
            '<strong>Item properties:</strong>',
            '<code>flex</code> (shorthand): <code>flex: &lt;grow&gt; &lt;shrink&gt; &lt;basis&gt;</code> — e.g. <code>flex: 1 1 200px</code>.',
            '<code>order</code>: Reorder items visually without changing the HTML — <code>order: 2</code>.',
            '<code>align-self</code>: Override <code>align-items</code> for a single item.'
          ],
          code: `.container {{ '{' }}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
{{ '}' }}

.item {{ '{' }}
  flex: 1 1 200px;  /* grow, shrink, basis */
  order: 2;
  align-self: flex-end;
{{ '}' }}`
        },
        {
          heading: 'Common Flexbox Patterns',
          content: [
            'Once you know the basics, a few recipes cover most of the layouts you will build in real life. These patterns are worth memorizing — they show up everywhere.',
            'Centering a single element both horizontally and vertically used to be a famous CSS puzzle. With flexbox, it is a one-liner. Building a sticky footer, equal-width columns, or a sidebar-plus-content layout is also just a few lines once you understand the basics.'
          ],
          list: [
            '<strong>Center anything:</strong> <code>display: flex; justify-content: center; align-items: center;</code>',
            '<strong>Sticky footer:</strong> <code>flex-direction: column; min-height: 100vh;</code> with <code>margin-top: auto</code> on the footer.',
            '<strong>Equal-width columns:</strong> Apply <code>flex: 1</code> to each child.',
            '<strong>Sidebar + content:</strong> Sidebar <code>flex: 0 0 250px</code>, main area <code>flex: 1</code>.',
            '<strong>Push item to the end:</strong> <code>margin-left: auto;</code> on a single flex item.'
          ],
          code: `/* Perfect centering */
.center {{ '{' }}
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
{{ '}' }}

/* Sidebar layout */
.layout {{ '{' }} display: flex; {{ '}' }}
.sidebar {{ '{' }} flex: 0 0 250px; {{ '}' }}
.main    {{ '{' }} flex: 1;          {{ '}' }}`
        }
      ]
    },
    'css-grid': {
      title: 'CSS Grid',
      sections: [
        {
          heading: 'What is CSS Grid?',
          content: [
            'CSS Grid is a two-dimensional layout system. Where flexbox is great for laying things out in a single row or column, grid lets you control both rows and columns at the same time. It is the right tool for page-level layouts, dashboards, image galleries, and any design where items need to line up on a strict grid.',
            'To use grid, set <code>display: grid</code> on a container and define the rows and columns you want with <code>grid-template-columns</code> and <code>grid-template-rows</code>. Then you can place each child anywhere on that grid, even spanning multiple cells.'
          ],
          list: [
            '<strong>Container properties:</strong>',
            '<code>grid-template-columns</code>: Define column tracks — <code>1fr 1fr 1fr</code> or <code>repeat(3, 1fr)</code>.',
            '<code>grid-template-rows</code>: Define row tracks — <code>auto 200px</code>.',
            '<code>gap</code> (or <code>grid-gap</code>): Spacing between tracks — <code>gap: 10px</code>.',
            '<code>grid-template-areas</code>: Named grid areas for a visual layout (see example below).',
            '<code>justify-items</code>: Inline-axis alignment of items within their cells.',
            '<code>align-items</code>: Block-axis alignment of items within their cells.',
            '<strong>Item properties:</strong>',
            '<code>grid-column</code>: Span columns — <code>1 / 3</code> (from line 1 to line 3).',
            '<code>grid-row</code>: Span rows — <code>2 / span 2</code>.',
            '<code>grid-area</code>: Place into a named area — <code>grid-area: header</code>.'
          ],
          code: `.grid-container {{ '{' }}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
{{ '}' }}

.grid-item {{ '{' }}
  grid-column: 1 / 3;  /* span from line 1 to line 3 */
  grid-row: 2 / span 2;
{{ '}' }}`
        },
        {
          heading: 'Grid Template Areas',
          content: [
            'Grid template areas are one of the most readable ways to lay out a page. You give each part of your design a name (like <code>header</code>, <code>sidebar</code>, <code>main</code>, <code>footer</code>), then draw a little ASCII map of where they go. The browser handles the rest.',
            'This style is especially nice for full-page layouts because you can see the structure at a glance, and changing the layout is as simple as rearranging the map.'
          ],
          code: `.page-layout {{ '{' }}
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 12px;
{{ '}' }}

.header  {{ '{' }} grid-area: header;  {{ '}' }}
.sidebar {{ '{' }} grid-area: sidebar; {{ '}' }}
.main    {{ '{' }} grid-area: main;    {{ '}' }}
.footer  {{ '{' }} grid-area: footer;  {{ '}' }}`
        },
        {
          heading: 'Responsive Grid with auto-fit',
          content: [
            'One of the most powerful grid tricks is <code>repeat(auto-fit, minmax(250px, 1fr))</code>. With this single line, you get a card layout that automatically wraps to as many columns as fit, and each card is at least 250px wide. No media queries needed.',
            'The <code>auto-fit</code> keyword tells grid to create as many tracks as can fit, and <code>minmax(250px, 1fr)</code> says each track should be at least 250px and can grow to share any remaining space.'
          ],
          code: `.card-grid {{ '{' }}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
{{ '}' }}`
        }
      ]
    },
    'css-responsive': {
      title: 'Responsive Design & Media Queries',
      sections: [
        {
          heading: 'Responsive Design & Media Queries',
          content: [
            'Responsive design means making your web pages look good on every screen size — from a small phone in portrait mode to a wide desktop monitor. It is now a baseline expectation: more than half of all web traffic comes from mobile devices, and Google ranks mobile-friendly sites higher in search results.',
            'The main tool for responsive design is the <strong>media query</strong>. A media query is a rule that says "only apply these styles if the screen is at least this wide" (or "at most this wide", or matches some other condition). You can also target orientation, resolution, and more.'
          ],
          list: [
            '<strong>Mobile-first approach:</strong> Write base styles for small screens, then add styles for larger screens with <code>min-width</code> queries.',
            '<strong>Desktop-first approach:</strong> Write base styles for large screens, then override for smaller screens with <code>max-width</code> queries.',
            '<strong>Common breakpoints:</strong> 576px (phones), 768px (tablets), 992px (laptops), 1200px (desktops).',
            '<strong>Viewport units:</strong> <code>vw</code> (1% of viewport width), <code>vh</code> (1% of viewport height), <code>vmin</code> / <code>vmax</code>.',
            '<strong>Fluid typography:</strong> Use <code>clamp()</code> for responsive font sizes — <code>font-size: clamp(1rem, 2vw + 1rem, 2rem)</code>.',
            '<strong>Don\'t forget the viewport meta tag:</strong> Add <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code> in your HTML head.'
          ],
          code: `/* Mobile-first media queries */

/* Base styles (mobile) */
.container {{ '{' }}
  flex-direction: column;
  padding: 12px;
{{ '}' }}

/* Tablet and up */
@media (min-width: 768px) {{ '{' }}
  .container {{ '{' }}
    flex-direction: row;
    padding: 24px;
  {{ '}' }}
{{ '}' }}

/* Desktop and up */
@media (min-width: 1200px) {{ '{' }}
  .container {{ '{' }}
    max-width: 1200px;
    margin: 0 auto;
  {{ '}' }}
{{ '}' }}`
        },
        {
          heading: 'Responsive Patterns',
          content: [
            'A few techniques cover most responsive layouts you will need. Once you know them, you can adapt almost any design to any screen size.',
            'A fluid grid uses <code>auto-fit</code> with <code>minmax()</code> so cards wrap automatically without media queries. Responsive images set <code>max-width: 100%</code> so they never overflow their container. And the modern approach — container queries — lets a component respond to its own size, no matter where it is placed on the page.'
          ],
          list: [
            '<strong>Fluid grids:</strong> <code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));</code> — cards wrap automatically.',
            '<strong>Responsive images:</strong> <code>img { max-width: 100%; height: auto; }</code>',
            '<strong>Hide/show on breakpoints:</strong> <code>.hide-mobile { display: none; }</code> inside a <code>@media (max-width: 767px)</code> block.',
            '<strong>Container queries:</strong> Style based on the parent container, not the viewport (see the Modern CSS module).',
            '<strong>Responsive typography:</strong> Use <code>clamp(min, preferred, max)</code> so text scales smoothly with the screen.'
          ]
        }
      ]
    },
    'css-animation': {
      title: 'CSS Animation & Transition',
      sections: [
        {
          heading: 'Transitions vs Animations',
          content: [
            'CSS gives you two ways to add motion: <strong>transitions</strong> and <strong>animations</strong>. They look similar, but they are used for different things.',
            'A <strong>transition</strong> smoothly changes a property from one value to another when something happens — most often on <code>:hover</code> or <code>:focus</code>. You don\'t need to define the start and end; you just say "when this property changes, animate the change over this much time."',
            'An <strong>animation</strong> is more powerful: you define the keyframes (the start, end, and any steps in between) and the browser plays them, optionally repeating forever. Use animations for things like loading spinners, attention-grabbing effects, or any motion that does not depend on user interaction.'
          ]
        },
        {
          heading: 'CSS Transitions',
          content: [
            'A transition watches a property and animates any change to it. The most common use is to make buttons grow, fade, or change color smoothly on hover, instead of snapping instantly.',
            'You pick which property to watch (or use <code>all</code> to watch everything), how long the transition should take, what speed curve to use, and how long to wait before starting. The shorthand <code>transition: width 0.5s ease;</code> sets all of these in one line.'
          ],
          list: [
            '<strong>transition-property:</strong> The CSS property to animate — e.g. <code>width</code>, <code>opacity</code>, <code>transform</code>.',
            '<strong>transition-duration:</strong> How long the transition takes — e.g. <code>0.5s</code>, <code>1s</code>, <code>200ms</code>.',
            '<strong>transition-timing-function:</strong> The speed curve — <code>ease</code>, <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>, <code>ease-in-out</code>.',
            '<strong>transition-delay:</strong> How long to wait before the transition starts.',
            '<strong>transition (shorthand):</strong> <code>transition: all 0.5s ease-in-out;</code>'
          ],
          code: `.box {{ '{' }}
  width: 100px;
  transition: width 0.5s ease;
{{ '}' }}

.box:hover {{ '{' }}
  width: 200px;
{{ '}' }}`
        },
        {
          heading: 'CSS Animations',
          content: [
            'Animations give you full control. You write <code>@keyframes</code> rules to define what the element looks like at different points in time, and then you tell CSS to play that animation with a name, duration, and other settings.',
            'Inside <code>@keyframes</code>, you can use <code>from</code> and <code>to</code> for two-state animations, or use percentages like <code>0%</code>, <code>50%</code>, <code>100%</code> for more complex motion. You can repeat the animation forever with <code>infinite</code>, play it once, or play it a specific number of times.'
          ],
          list: [
            '<strong>@keyframes:</strong> Defines the stages of the animation.',
            '<strong>animation-name:</strong> The name of the keyframe set to use.',
            '<strong>animation-duration:</strong> How long one cycle takes.',
            '<strong>animation-iteration-count:</strong> How many times to repeat — a number or <code>infinite</code>.',
            '<strong>animation-direction:</strong> <code>normal</code>, <code>reverse</code>, <code>alternate</code> (bounce back and forth).',
            '<strong>animation-timing-function:</strong> Speed curve — same options as <code>transition</code>.',
            '<strong>animation-delay:</strong> Wait this long before starting.',
            '<strong>animation-fill-mode:</strong> What styles to keep before/after the animation runs.'
          ],
          code: `@keyframes slideRight {{ '{' }}
  from {{ '{' }}
    transform: translateX(0);
  {{ '}' }}
  to {{ '{' }}
    transform: translateX(100px);
  {{ '}' }}
{{ '}' }}

.box {{ '{' }}
  animation-name: slideRight;
  animation-duration: 2s;
  animation-iteration-count: infinite;
{{ '}' }}`
        }
      ]
    }
  },
  module5: {
    'css-bootstrap': {
      title: 'Bootstrap',
      sections: [
        {
          heading: 'What is Bootstrap?',
          content: [
            'Bootstrap is the most popular CSS framework in the world. It is a free, open-source collection of pre-written CSS and JavaScript that you can drop into a project to build responsive websites quickly.',
            'Instead of writing every component from scratch — every button style, every form field, every navigation bar — you add Bootstrap to your page and use its ready-made classes. This is a huge productivity boost, especially for prototypes and dashboards.',
            'Bootstrap is also <strong>mobile-first</strong>: its base styles target small screens, and larger screens get enhancements. This means your layouts look good on phones automatically.'
          ],
          list: [
            '<strong>Open-source</strong> and free to use.',
            '<strong>Mobile-first:</strong> Base styles for small screens; larger screens get enhancements.',
            '<strong>12-column grid system:</strong> A flexible way to lay out rows and columns.',
            '<strong>Utility classes:</strong> <code>p-1</code> through <code>p-5</code> for padding, <code>m-1</code> through <code>m-5</code> for margin, <code>d-flex</code>, <code>text-center</code>, and many more.',
            '<strong>Pre-built components:</strong> Navbar, cards, modals, alerts, badges, buttons, forms, tables, accordion, carousel.',
            '<strong>How to include:</strong> Either link the CDN in your HTML <code>&lt;head&gt;</code> or install via npm.'
          ],
          code: `<!-- Add Bootstrap via CDN -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
>`
        },
        {
          heading: 'Bootstrap Grid System',
          content: [
            'Bootstrap\'s grid is built on a 12-column layout. You create a row with <code>&lt;div class="row"&gt;</code>, then add columns inside it. Each column\'s width is set by a class that includes the screen size and a number from 1 to 12 (the number is how many of the 12 columns it spans).',
            'You can change the layout for different screen sizes by adding breakpoint prefixes. For example, <code>col-12 col-md-6 col-lg-4</code> means "full width on phones, half width on tablets, one third width on laptops."'
          ],
          list: [
            '<code>col-12</code> — Extra small (all sizes, full width).',
            '<code>col-sm-12</code> — Small devices (≥576px).',
            '<code>col-md-6</code> — Medium devices (≥768px), spans 6 of 12 columns.',
            '<code>col-lg-4</code> — Large devices (≥992px), spans 4 of 12 columns.',
            '<code>col-xl-3</code> — Extra large (≥1200px), spans 3 of 12 columns.',
            '<strong>Stacked by default:</strong> Columns stack vertically on smaller screens, then expand horizontally when the breakpoint is reached.'
          ],
          code: `<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">Column 1</div>
    <div class="col-12 col-md-6 col-lg-4">Column 2</div>
    <div class="col-12 col-md-12 col-lg-4">Column 3</div>
  </div>
</div>

<!-- Behavior:
     Mobile:  3 stacked full-width columns
     Tablet:  2 columns side-by-side + 1 full-width
     Desktop: 3 columns side-by-side -->`
        },
        {
          heading: 'Common Components',
          content: [
            'Bootstrap ships with dozens of pre-styled components that you can use by adding classes. Buttons, cards, navbars, alerts, and forms are the most common. You rarely need to write your own CSS for these — just add the right classes and you are done.'
          ],
          list: [
            '<strong>Buttons:</strong> <code>&lt;button class="btn btn-primary"&gt;</code> — variants include <code>btn-secondary</code>, <code>btn-danger</code>, <code>btn-outline-primary</code>, and many more.',
            '<strong>Cards:</strong> <code>&lt;div class="card"&gt;</code> with <code>card-body</code>, <code>card-title</code>, <code>card-text</code> for content sections.',
            '<strong>Navbar:</strong> Responsive navigation bar with <code>navbar-expand-lg</code> and a mobile hamburger toggle.',
            '<strong>Alerts:</strong> <code>&lt;div class="alert alert-success"&gt;</code> — variants: <code>alert-warning</code>, <code>alert-danger</code>, <code>alert-info</code>.',
            '<strong>Forms:</strong> <code>form-control</code>, <code>form-select</code>, <code>form-check</code>, <code>input-group</code>.',
            '<strong>Modals:</strong> Pop-up dialogs for confirmations, forms, or content.',
            '<strong>Carousel:</strong> Image/content slideshows out of the box.'
          ],
          code: `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
        },
        {
          heading: 'Utility Classes',
          content: [
            'Bootstrap\'s utility classes are the fastest way to make small adjustments to spacing, alignment, color, and visibility. Once you learn the naming pattern — <code>property-side-breakpoint-value</code> — you can apply almost any style without writing custom CSS.',
            'For example, <code>mt-3</code> means "margin-top size 3," <code>p-2</code> means "padding all sides size 2," and <code>d-md-flex</code> means "display flex starting at the medium breakpoint."'
          ],
          list: [
            '<strong>Spacing:</strong> <code>mt-3</code> (margin-top), <code>pb-4</code> (padding-bottom), <code>gx-2</code> (horizontal gutter).',
            '<strong>Flex:</strong> <code>d-flex</code>, <code>justify-content-center</code>, <code>align-items-center</code>.',
            '<strong>Display:</strong> <code>d-none</code>, <code>d-block</code>, <code>d-md-flex</code> (responsive).',
            '<strong>Text:</strong> <code>text-center</code>, <code>text-muted</code>, <code>fw-bold</code>, <code>text-primary</code>.',
            '<strong>Responsive variants:</strong> Add a breakpoint prefix — <code>d-none d-md-block</code> hides on mobile, shows on tablet and up.'
          ]
        }
      ]
    }
  },
  module6: {
    'css-container-queries': {
      title: 'Container Queries',
      sections: [
        {
          heading: 'Container Queries',
          content: [
            'For years, responsive design meant media queries — styles that change based on the size of the browser window. But in modern apps, a component is often dropped into a sidebar, a modal, a card, or a full page, and we want it to adapt to the space it actually has, not the whole screen.',
            'Container queries solve this. They let you style elements based on the size of their parent container, not the viewport. A card placed in a narrow sidebar can look one way; the same card placed in a wide main area can look another. The component itself becomes truly reusable.',
            'You enable a container with <code>container-type</code>, and then write <code>@container</code> queries that look very similar to media queries.'
          ],
          list: [
            '<code>container-type: inline-size</code> — query based on the container\'s width (most common).',
            '<code>container-type: size</code> — query based on both width and height.',
            '<code>container-name: sidebar</code> — name a container to target it specifically.',
            '<code>@container (min-width: 400px)</code> — apply styles when the container is at least 400px wide.',
            '<code>@container sidebar (min-width: 400px)</code> — target a specific named container.'
          ],
          code: `.card-wrapper {{ '{' }}
  container-type: inline-size;
{{ '}' }}

.card {{ '{' }}
  display: flex;
  flex-direction: column;
{{ '}' }}

/* When the container is wide enough, switch to row layout */
@container (min-width: 400px) {{ '{' }}
  .card {{ '{' }}
    flex-direction: row;
    gap: 16px;
  {{ '}' }}
{{ '}' }}`
        }
      ]
    },
    'css-has-selector': {
      title: ':has() Selector',
      sections: [
        {
          heading: 'The :has() Pseudo-Class',
          content: [
            'For decades, CSS only had a "descendant" direction: parents could style their children, but children could not style their parents. The <code>:has()</code> pseudo-class finally changes that.',
            'You can think of <code>:has()</code> as a parent selector. It lets you style an element based on what is inside it. For example, you can give a card different padding if it contains an image, or highlight a form with a red border when one of its inputs is invalid — all in pure CSS, with no JavaScript.',
            'This opens up powerful patterns like "the article that has an image gets a different layout" or "the list item just before the active one gets a special style," all without adding extra classes to your HTML.'
          ],
          list: [
            '<code>div:has(p)</code> — selects every div that contains a paragraph.',
            '<code>form:has(input:invalid)</code> — styles a form differently when it has invalid inputs.',
            '<code>article:has(img)</code> — articles with images get a different style.',
            '<code>.card:not(:has(img))</code> — cards that do not contain an image.',
            '<code>li:has(+ li.active)</code> — the list item just before the active one.',
            '<code>h2:has(+ p)</code> — any heading that is immediately followed by a paragraph.'
          ],
          code: `/* Style a card differently when it has an image */
.card:has(img) {{ '{' }}
  padding: 0;
{{ '}' }}

/* Highlight a form when it has validation errors */
form:has(input:invalid) {{ '{' }}
  border: 2px solid red;
{{ '}' }}

/* Style the list item just before the active one */
li:has(+ li.active) {{ '{' }}
  border-bottom: 2px solid blue;
{{ '}' }}`
        }
      ]
    },
    'css-cascade-layers': {
      title: '@layer Cascade Layers',
      sections: [
        {
          heading: 'Cascade Layers',
          content: [
            'Cascade layers give you a way to organize your CSS into clear priority groups, so you can stop fighting specificity battles. Instead of trying to write more and more specific selectors to "win" against other styles, you decide up front which group of styles is more important.',
            'You declare a list of layer names in order — first one is the lowest priority, last one is the highest. Then any rule inside a layer can never beat a rule in a higher layer, no matter what the specificity is. This makes large stylesheets much easier to reason about.',
            'A common pattern is reset → base → components → utilities, where utilities always win over components, which win over base styles, which win over resets.'
          ],
          list: [
            '<strong>Declare order upfront:</strong> <code>@layer reset, base, components, utilities;</code>',
            '<strong>Layer priority:</strong> Later layers win over earlier ones.',
            '<strong>Unlayered styles</strong> have higher priority than any layer — use sparingly.',
            '<strong>Import into a layer:</strong> <code>@import url("reset.css") layer(reset);</code>',
            '<strong>Nested layers:</strong> You can put one layer inside another for finer control.',
            '<strong>!important reversal:</strong> Inside layers, <code>!important</code> reverses the order — earlier layers become more important.'
          ],
          code: `/* Declare layer order (first = lowest priority) */
@layer reset, base, components, utilities;

@layer reset {{ '{' }}
  * {{ '{' }} margin: 0; box-sizing: border-box; {{ '}' }}
{{ '}' }}

@layer base {{ '{' }}
  body {{ '{' }} font-size: 16px; line-height: 1.5; {{ '}' }}
{{ '}' }}

@layer components {{ '{' }}
  .btn {{ '{' }} padding: 8px 16px; border-radius: 4px; {{ '}' }}
{{ '}' }}

@layer utilities {{ '{' }}
  .text-center {{ '{' }} text-align: center; {{ '}' }}  /* wins over .btn */
{{ '}' }}`
        }
      ]
    },
    'css-clamp': {
      title: 'clamp(), min(), max()',
      sections: [
        {
          heading: 'Fluid Values with clamp(), min(), max()',
          content: [
            'These three CSS functions let you create responsive values without writing any media queries. They work on any property that takes a number with a unit — font sizes, widths, padding, margins, and more.',
            '<code>clamp(min, preferred, max)</code> is the most useful: it picks a value that is never smaller than <code>min</code>, never larger than <code>max</code>, and uses <code>preferred</code> in between. This is the secret to smooth, fluid typography that looks good on every screen size.',
            '<code>min(a, b)</code> and <code>max(a, b)</code> are simpler: they just compare two values and pick the smaller or the larger one. They are handy for things like "this container is at most 1200px wide, but never wider than 100% of its parent."'
          ],
          list: [
            '<code>clamp(min, preferred, max)</code> — stays between min and max, prefers the middle value.',
            '<code>min(a, b)</code> — picks the smaller of the two values.',
            '<code>max(a, b)</code> — picks the larger of the two values.',
            '<strong>Fluid typography:</strong> <code>font-size: clamp(1rem, 2vw + 1rem, 2rem)</code> — grows with the viewport but never below 1rem or above 2rem.',
            '<strong>Responsive padding:</strong> <code>padding: clamp(1rem, 3vw, 3rem)</code>',
            '<strong>Dynamic width:</strong> <code>width: min(100%, 1200px)</code> — never exceeds 1200px.'
          ],
          code: `/* Fluid typography — no media queries needed */
h1 {{ '{' }}
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
{{ '}' }}

p {{ '{' }}
  font-size: clamp(0.875rem, 1vw + 0.75rem, 1.125rem);
  padding: clamp(1rem, 3vw, 2rem);
{{ '}' }}

/* Container never exceeds 1200px, fills the screen on small devices */
.container {{ '{' }}
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
{{ '}' }}`
        }
      ]
    },
    'css-oklch': {
      title: 'oklch() & color-mix()',
      sections: [
        {
          heading: 'Modern Color Functions',
          content: [
            '<code>oklch()</code> is a modern color space designed to match how humans actually perceive color. In traditional <code>rgb()</code> or <code>hsl()</code>, equal numerical steps do not always look equally different to the eye — a "50% lightness" in hsl can look slightly muddy compared to a true mid-gray. In <code>oklch()</code>, equal steps look equally different, so your color scales are predictable.',
            '<code>color-mix()</code> is the other half of the modern color toolkit. It lets you blend two colors together in any color space, right in CSS. That means you no longer need a Sass function or a design tool to create a lighter or darker shade of your brand color — you can write it directly in your stylesheet.'
          ],
          list: [
            '<code>oklch(70% 0.1 250)</code> — lightness, chroma, hue.',
            'Better perceptual uniformity than <code>hsl()</code> — 50% lightness is a true mid-gray.',
            '<code>color-mix(in oklch, blue, red 40%)</code> — 60% blue plus 40% red.',
            '<code>color-mix(in srgb, var(--primary), white 20%)</code> — lighten a color by 20%.',
            'Use <code>@property</code> to make custom properties animatable.',
            '<strong>Wide gamut support:</strong> <code>oklch()</code> can describe colors that older color spaces cannot.'
          ],
          code: `:root {{ '{' }}
  --primary: oklch(62% 0.19 250);            /* vibrant blue */
  --primary-light: color-mix(in oklch, var(--primary), white 30%);
  --primary-dark: color-mix(in oklch, var(--primary), black 20%);
{{ '}' }}

.button {{ '{' }}
  background: var(--primary);
{{ '}' }}

.button:hover {{ '{' }}
  background: var(--primary-light);
{{ '}' }}`
        }
      ]
    },
    'css-nesting': {
      title: 'Native CSS Nesting',
      sections: [
        {
          heading: 'Native CSS Nesting',
          content: [
            'For years, only preprocessors like Sass and Less let you nest one selector inside another. Now CSS supports nesting natively, in every modern browser, with no build step required.',
            'You write a rule, then inside its block you write child rules. The <code>&</code> symbol refers to the parent selector, so you can build compound selectors like <code>&:hover</code> or <code>&.active</code> right where you need them.',
            'Nesting is great for keeping related styles together. A card\'s layout, its hover state, its modifier classes, and even its media queries can all live in one place — much easier to read than scattering them across the file.'
          ],
          list: [
            '<strong>Child selectors:</strong> Just nest them inside the parent block.',
            '<strong>& (parent reference):</strong> <code>&</code> means "the parent selector" — like in Sass.',
            '<strong>&:hover:</strong> Style the parent on hover.',
            '<strong>&.active:</strong> Style the parent when it also has the <code>.active</code> class.',
            '<strong>&::before:</strong> Style the parent\'s pseudo-element.',
            '<strong>Nested media queries:</strong> Write <code>@media</code> right inside the rule for that breakpoint.',
            '<strong>Wide support:</strong> Works in all modern browsers as of 2023 — no preprocessor needed.'
          ],
          code: `.card {{ '{' }}
  padding: 16px;
  border-radius: 8px;

  /* Nest a child selector */
  .title {{ '{' }}
    font-size: 1.25rem;
    font-weight: bold;
  {{ '}' }}

  /* Use & to reference the parent selector */
  &:hover {{ '{' }}
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  {{ '}' }}

  &.featured {{ '{' }}
    border: 2px solid gold;
  {{ '}' }}

  /* Media queries can nest too */
  @media (max-width: 768px) {{ '{' }}
    padding: 8px;
  {{ '}' }}
{{ '}' }}`
        }
      ]
    }
  }
};
