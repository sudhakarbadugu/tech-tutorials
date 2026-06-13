// Auto-generated from trinits-web-angular tutorial sources
// Generated: 2026-06-13T02:26:18.128Z

export const cssContent = {
  module1: {
    'css-intro': {
      title: 'CSS Introduction & Overview',
      sections: [
        {
          heading: 'CSS Introduction & Overview',
          list: [
            '<code>.css</code> (standard CSS file)',
            '<code>.scss</code> (SASS/SCSS, used in Angular/React)'
          ]
        }
      ]
    },
    'css-syntax': {
      title: 'CSS Syntax',
      sections: [
        {
          heading: 'CSS Syntax',
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
          heading: 'CSS Selectors',
          list: [
            '<strong>Simple Selectors:</strong> <ul class="list-disc ml-6 space-y-1"> <li> <strong>Tag Selector:</strong> Targets all instances of a tag. <code>p { ... }</code> </li> <li> <strong>ID Selector:</strong> Targets an element by ID. <code>#main { ... }</code> </li> <li> <strong>Class Selector:</strong> Targets elements by class. <code>.box { ... }</code> </li> </ul>',
            '<strong>Combinator Selectors:</strong> Based on relationship between elements. <ul class="list-disc ml-6 space-y-1"> <li> <code>div p</code> – Selects all <code><p></code> inside <code><div></code> </li> <li> <code>div > p</code> – Selects direct child <code><p></code> of <code><div></code> </li> <li> <code>div + p</code> – Selects <code><p></code> immediately after <code><div></code> </li> <li> <code>div ~ p</code> – Selects all <code><p></code> siblings after <code><div></code> </li> </ul>',
            '<strong>Pseudo-Class Selectors:</strong> Based on state of elements. <ul class="list-disc ml-6 space-y-1"> <li> <code>a:hover</code> – Applies on hover </li> <li> <code>input:focus</code> – When input is focused </li> <li> <code>li:first-child</code> – First <code><li></code> element </li> <li> <code>li:last-child</code> – Last <code><li></code> element </li> </ul>',
            '<strong>Pseudo-Element Selectors:</strong> Target part of an element. <ul class="list-disc ml-6 space-y-1"> <li> <code>p::first-line</code> – Styles the first line of a paragraph </li> <li> <code>p::first-letter</code> – Styles the first letter </li> <li> <code>p::before</code> – Inserts content before element </li> <li> <code>p::after</code> – Inserts content after element </li> </ul>',
            '<strong>Attribute Selectors:</strong> Select elements by attribute or value. <ul class="list-disc ml-6 space-y-1"> <li> <code>[type]</code> – Selects all with a <code>type</code> attribute </li> <li> <code>[type="text"]</code> – Selects input elements of type text </li> <li> <code>[href^="https"]</code> – Starts with https </li> <li> <code>[href$=".pdf"]</code> – Ends with .pdf </li> <li> <code>[title*="hello"]</code> – Contains “hello” </li> </ul>',
            '<strong>Tag Selector:</strong> Targets all instances of a tag. <code>p { ... }</code>',
            '<strong>ID Selector:</strong> Targets an element by ID. <code>#main { ... }</code>',
            '<strong>Class Selector:</strong> Targets elements by class. <code>.box { ... }</code>',
            '<code>div p</code> – Selects all <code><p></code> inside <code><div></code>',
            '<code>div > p</code> – Selects direct child <code><p></code> of <code><div></code>',
            '<code>div + p</code> – Selects <code><p></code> immediately after <code><div></code>',
            '<code>div ~ p</code> – Selects all <code><p></code> siblings after <code><div></code>',
            '<code>a:hover</code> – Applies on hover',
            '<code>input:focus</code> – When input is focused',
            '<code>li:first-child</code> – First <code><li></code> element',
            '<code>li:last-child</code> – Last <code><li></code> element',
            '<code>p::first-line</code> – Styles the first line of a paragraph',
            '<code>p::first-letter</code> – Styles the first letter',
            '<code>p::before</code> – Inserts content before element',
            '<code>p::after</code> – Inserts content after element',
            '<code>[type]</code> – Selects all with a <code>type</code> attribute',
            '<code>[type="text"]</code> – Selects input elements of type text',
            '<code>[href^="https"]</code> – Starts with https',
            '<code>[href$=".pdf"]</code> – Ends with .pdf',
            '<code>[title*="hello"]</code> – Contains “hello”'
          ]
        }
      ]
    },
    'css-insert': {
      title: 'Ways to Insert CSS',
      sections: [
        {
          heading: 'Ways to Insert CSS',
          example: {
            title: 'Example',
            code: '<p style="color: blue;">This is a blue paragraph.</p>',
            output: `<!DOCTYPE html>
<html>
<head>
  <style>
    p {{ '{' }}
      color: red;
      font-size: 18px;
    {{ '}' }}
  </style>
</head>
<body>
  <p>This is a red paragraph.</p>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This is a styled paragraph.</p>
</body>
</html>

p {{ '{' }}
  color: green;
  font-size: 20px;
{{ '}' }}`,
            type: 'code'
          }
        }
      ]
    },
    'css-cascade': {
      title: 'Cascading Order',
      sections: [
        {
          heading: 'Cascading Order',
          code: `<!DOCTYPE html>
<html>
<head>
  <style>
    p {{ '{' }}
      color: green;
    {{ '}' }}
  </style>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p style="color: red;">This text will be red.</p>
</body>
</html>`
        }
      ]
    },
    'css-comments': {
      title: 'CSS Comments',
      sections: [
        {
          heading: 'CSS Comments',
          code: `/* This is a single-line comment */

/* This is
   a multi-line
   comment */`
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
          code: `h1 {{ '{' }}
  color: red;
  font-size: 20px;
  background-color: yellow;
{{ '}' }}`
        }
      ]
    },
    'css-colors': {
      title: 'CSS Colors',
      sections: [
        {
          heading: 'CSS Colors',
          code: `h2 {{ '{' }}
  color: red;
  color: #ff0000;
  color: rgb(255, 0, 0);
  color: rgba(255, 0, 0, 0.5);
  color: hsl(0, 100%, 50%);
  color: hsla(0, 100%, 50%, 0.5);
  opacity: 0.5;
{{ '}' }}`
        }
      ]
    },
    'css-background': {
      title: 'CSS Backgrounds',
      sections: [
        {
          heading: 'CSS Backgrounds',
          code: `background-color: #f0f0f0;
background-image: url('image.jpg');
background-repeat: no-repeat;
background-size: cover;
background-position: center top;
background-attachment: fixed;
background: #fff url('img_tree.png') no-repeat right top;
opacity: 0.5;
background: rgba(0,128,0,0.3);`
        }
      ]
    },
    'css-fonts': {
      title: 'CSS Fonts & Text',
      sections: [
        {
          heading: 'CSS Fonts & Text',
          code: `p {{ '{' }}
  font-family: "Georgia", serif;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  line-height: 1.6;
  text-align: justify;
  text-decoration: underline;
  letter-spacing: 1px;
{{ '}' }}`
        },
        {
          heading: 'Font Properties:',
          list: [
            '<strong>font-family:</strong> Specifies the typeface used. <code>font-family: Arial, sans-serif;</code>',
            '<strong>font-size:</strong> Sets the size of the font. <code>font-size: 18px;</code> or <code>font-size: 1.2em;</code>',
            '<strong>font-style:</strong> Sets font to normal, italic, or oblique. <code>font-style: italic;</code>',
            '<strong>font-weight:</strong> Defines font boldness. <code>font-weight: bold;</code> or <code>font-weight: 400;</code>',
            '<strong>line-height:</strong> Controls the vertical spacing between lines. <code>line-height: 1.5;</code>',
            '<strong>letter-spacing:</strong> Sets space between letters. <code>letter-spacing: 2px;</code>',
            '<strong>word-spacing:</strong> Sets space between words. <code>word-spacing: 5px;</code>',
            '<strong>font (shorthand):</strong> Sets all font values in one line. <code>font: italic bold 16px Arial;</code>'
          ]
        },
        {
          heading: 'Text Properties:',
          content: [
            '<strong>Example:</strong>'
          ],
          list: [
            'Write a CSS rule to make all paragraph text bold, italic, and 20px in size.',
            'How does <code>line-height</code> affect paragraph spacing?',
            'What’s the difference between <code>text-align: justify</code> and <code>text-align: center</code> ?',
            'Write a shorthand <code>font</code> property with italic, 16px, Arial.',
            '<strong>text-align:</strong> Aligns text: <code>left</code> , <code>right</code> , <code>center</code> , <code>justify</code>',
            '<strong>text-decoration:</strong> Underline, overline, line-through, or none. <code>text-decoration: underline;</code>',
            '<strong>text-transform:</strong> Controls case. <code>text-transform: uppercase;</code>',
            '<strong>text-indent:</strong> Indents the first line of a paragraph. <code>text-indent: 50px;</code>',
            '<strong>white-space:</strong> Controls how white space is handled (e.g., <code>nowrap</code> , <code>pre</code> )'
          ],
          code: `p {{ '{' }}
  font-family: "Georgia", serif;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  line-height: 1.6;
  text-align: justify;
  text-decoration: underline;
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
          heading: 'CSS Box Model',
          code: `.box {{ '{' }}
  width: 200px;
  padding: 10px;
  border: 2px solid #333;
  margin: 20px;
{{ '}' }}`
        }
      ]
    },
    'css-margin-padding': {
      title: 'CSS Margins & Padding',
      sections: [
        {
          heading: 'CSS Margins & Padding',
          code: `div {{ '{' }}
  margin: 25px 50px 75px 100px;
  padding: 25px 50px 75px 100px;
  margin: auto;
  box-sizing: border-box;
{{ '}' }}`
        }
      ]
    },
    'css-border': {
      title: 'CSS Borders',
      sections: [
        {
          heading: 'CSS Borders',
          code: `div {{ '{' }}
  border-style: dotted solid double dashed;
  border-width: 5px 20px;
  border-color: red green blue yellow;
  border-radius: 5px;
  border: 5px solid red;
{{ '}' }}`
        }
      ]
    },
    'css-display': {
      title: 'Display & Position',
      sections: [
        {
          heading: 'Display & Position',
          example: {
            title: 'Example',
            code: `display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;`,
            output: `position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
top: 10px;
left: 20px;
z-index: 10;`,
            type: 'code'
          }
        }
      ]
    }
  },
  module4: {
    'css-flexbox': {
      title: 'Flexbox',
      sections: [
        {
          heading: 'Flexbox',
          code: `.container {{ '{' }}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
{{ '}' }}

.item {{ '{' }}
  flex: 1 1 200px;
  order: 2;
  align-self: flex-end;
{{ '}' }}`
        }
      ]
    },
    'css-grid': {
      title: 'CSS Grid',
      sections: [
        {
          heading: 'CSS Grid',
          code: `.grid-container {{ '{' }}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
{{ '}' }}

.grid-item {{ '{' }}
  grid-column: 1 / 3;
  grid-row: 2 / span 2;
{{ '}' }}`
        }
      ]
    },
    'css-responsive': {
      title: 'Responsive Design & Media Queries',
      sections: [
        {
          heading: 'Responsive Design & Media Queries',
          example: {
            title: 'Example',
            code: `@media (max-width: 700px) {{ '{' }}
  .flex-container {{ '{' }}
    flex-direction: column;
  {{ '}' }}
{{ '}' }}`,
            output: `.button-basic {{ '{' }}
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
{{ '}' }}

.button-report {{ '{' }}
  @extend .button-basic;
  background-color: red;
{{ '}' }}`,
            type: 'code'
          }
        }
      ]
    },
    'css-animation': {
      title: 'CSS Animation & Transition',
      sections: [
        {
          heading: 'CSS Animation & Transition',
          example: {
            title: 'Example',
            code: `.box {{ '{' }}
  width: 100px;
  transition: width 0.5s ease;
{{ '}' }}

.box:hover {{ '{' }}
  width: 200px;
{{ '}' }}`,
            output: `@keyframes slideRight {{ '{' }}
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
{{ '}' }}`,
            type: 'code'
          }
        },
        {
          heading: 'CSS Transitions',
          content: [
            'Transitions allow property changes in CSS values to occur over a specified duration.'
          ],
          list: [
            '<strong>transition-property:</strong> The CSS property to animate (e.g., <code>width</code> , <code>opacity</code> )',
            '<strong>transition-duration:</strong> How long the transition takes (e.g., <code>0.5s</code> , <code>1s</code> )',
            '<strong>transition-timing-function:</strong> The speed curve of the transition ( <code>ease</code> , <code>linear</code> , <code>ease-in</code> , <code>ease-out</code> )',
            '<strong>transition-delay:</strong> Delay before transition starts',
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
            'Animations let you animate many CSS properties from one state to another using keyframes.'
          ],
          list: [
            'How do you animate the background color of a box over 1 second?',
            'What is the difference between <code>transition</code> and <code>animation</code> ?',
            'Write a CSS animation that moves an element down 50px and then back up.',
            'What is the use of <code>@keyframes</code> ?',
            '<strong>@keyframes:</strong> Define the stages of the animation',
            '<strong>animation-name:</strong> Name of the animation',
            '<strong>animation-duration:</strong> Time to complete one cycle',
            '<strong>animation-iteration-count:</strong> Number of cycles (e.g., <code>infinite</code> )',
            '<strong>animation-direction:</strong> Direction of animation ( <code>normal</code> , <code>reverse</code> , <code>alternate</code> )',
            '<strong>animation-timing-function:</strong> Speed curve'
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
          heading: 'Bootstrap',
          code: `<div class="container">
  <div class="row">
    <div class="col-sm-6">Left</div>
    <div class="col-sm-6">Right</div>
  </div>
</div>`
        }
      ]
    }
  }
};
