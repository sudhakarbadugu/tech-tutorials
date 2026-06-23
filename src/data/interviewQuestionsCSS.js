// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-23T20:56:00.000Z

export const cssQuestions = {
  "questions": [
    {
      "question": "How many are there to import the CSS?",
      "answer": "<div>There are three ways of inserting a style sheet</div>\n              <ol>\n                <li>\n                  <b>External CSS:</b>\n                  If styles are common for multiple pages, then we should use the external styles.\n                </li>\n                <li>\n                  <b>Internal CSS:</b>\n                  If styles are used multiple times within the page, then we should be internal\n                  styles.\n                </li>\n                <li>\n                  <b>Inline CSS:</b>\n                  If style is going to use only once then we can use internal css.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "External CSS: shared styles across multiple pages via <link> tag.",
        "Internal CSS: styles used within a single page via <style> block.",
        "Inline CSS: style attribute for single-element, one-off styling."
      ]
    },
    {
      "question": "What are CSS selectors?",
      "answer": "<ol>\n                Mainly below css selectors are available in CSS:\n                <li>\n                  <b class=\"text-primary\">Simple selectors</b>\n                  <ol>\n                    <li>Name selector</li>\n                    <li>Class selector</li>\n                    <li>Id selector</li>\n                  </ol>\n                </li>\n                <li>\n                  <b class=\"text-primary\">Combination selectors</b>\n                  <ol>\n                    <li>descendant selector (space)</li>\n                    <li>child selector (>)</li>\n                    <li>adjacent sibling selector (+)</li>\n                    <li>general sibling selector (~)</li>\n                  </ol>\n                </li>\n                <li>\n                  <b class=\"text-primary\">Pseudo class selectors:</b>\n                  A pseudo-class is used to define a special state of an element.\n                  <div>\n                    <code>:hover, :active, :focus, :link, :first-child</code>\n                  </div>\n                </li>\n                <li>\n                  <b class=\"text-primary\">Pseudo elements:</b>\n                  A CSS pseudo-element is used to style specified parts of an element.\n                  <div>Pseudo elements denoted by double colons(::)</div>\n                  <div>\n                    <code>::first-line, ::after, ::before</code>\n                  </div>\n                </li>\n                <li>\n                  <b class=\"text-primary\">Attribute selectors:</b>\n                  The [attribute] selector is used to select elements with a specified attribute.\n                  <div>\n                    <code>\n                      a[target=\"_blank\"] {\n                      \n\n                      background-color: yellow;\n                      \n\n                      }\n                    </code>\n                  </div>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Simple selectors Name selector",
        "Combination selectors descendant selector (space)",
        "adjacent sibling selector (+)"
      ]
    },
    {
      "question": "What are CSS positions?",
      "answer": "<ol>\n                The position property specifies the type of positioning method used for an element.\n                <li>\n                  <b>static</b>\n                  <ol>\n                    <li>HTML elements are positioned static by default.</li>\n                    <li>\n                      Static positioned elements are not affected by the top, bottom, left, and\n                      right properties.\n                    </li>\n                  </ol>\n                </li>\n                <li>\n                  <b>relative</b>\n                  <ol>\n                    <li>\n                      An element with position: relative; is positioned relative to its normal\n                      position.\n                    </li>\n                    <li>\n                      Setting the top, right, bottom, and left properties of a relatively-positioned\n                      element will cause it to be adjusted away from its normal position.\n                    </li>\n                  </ol>\n                </li>\n                <li>\n                  <b>fixed</b>\n                  <ol>\n                    <li>\n                      An element with position: fixed; is positioned relative to the viewport.\n                    </li>\n                    <li>\n                      A fixed element does not leave a gap in the page where it would normally have\n                      been located.\n                    </li>\n                  </ol>\n                </li>\n                <li>\n                  <b>absolute</b>\n                  <ol>\n                    <li>\n                      An element with position: absolute; is positioned relative to the nearest\n                      positioned ancestor.\n                    </li>\n                    <li>\n                      if an absolute positioned element has no positioned ancestors, it uses the\n                      document body, and moves along with page scrolling.\n                    </li>\n                  </ol>\n                </li>\n                <li>\n                  <b>sticky</b>\n                  <ol>\n                    <li>\n                      A sticky element toggles between relative and fixed, depending on the scroll\n                      position.\n                    </li>\n                    <li>\n                      It is positioned relative until a given offset position is met in the viewport\n                      - then it \"sticks\" in place\n                    </li>\n                  </ol>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "static: default position, not affected by top/bottom/left/right.",
        "relative: positioned relative to its normal position in the flow.",
        "absolute: positioned relative to nearest positioned ancestor; removed from flow."
      ]
    },
    {
      "question": "If element has absolute position what it's parent element position type?",
      "answer": "<div>\n                Parent element should be positioned. Else it will be viewport will be parent\n                positioned item.\n              </div>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Parent element should be positioned.",
        "Else it will be viewport will be parent positioned item."
      ]
    },
    {
      "question": "What is z-index?",
      "answer": "<ol>\n                <li>The z-index property specifies the stack order of an element.</li>\n                <li>z-index will work only if item is positioned item.</li>\n                <li>When elements are positioned, they can overlap other elements.</li>\n                <li>\n                  An element can have a positive or negative z-index number. Highest z-index number\n                  will high preference\n                </li>\n                <li>\n                  Eg:\n                  <code>z-index: -1;</code>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "The z-index property specifies the stack order of an element.",
        "z-index will work only if item is positioned item.",
        "When elements are positioned, they can overlap other elements."
      ]
    },
    {
      "question": "What is Box model?",
      "answer": "<div>All HTML elements can be considered as boxes.</div>\n              <ol>\n                <li>\n                  <b>Content</b>\n                  - The content of the box, where text and images appear\n                </li>\n                <li>\n                  <b>Padding</b>\n                  - Padding is available inside the border and around the content box.\n                </li>\n                <li>\n                  <b>Border</b>\n                  - A border that goes around the padding and content\n                </li>\n                <li>\n                  <b>Margin</b>\n                  - Margin is available outside of the border.\n                </li>\n              </ol>\n              <div>\n                <img src=\"assets/images/box-model.png\" alt=\"Box model\">\n              </div>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Content - The content of the box, where text and images appear",
        "Padding - Padding is available inside the border and around the content box.",
        "Border - A border that goes around the padding and content"
      ]
    },
    {
      "question": "What are the differences between padding and margin?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">padding</th>\n                    <th scope=\"col\">margin</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Padding is available inside the border and around the content box.</td>\n                    <td>Margin is available outside of the border.</td>\n                  </tr>\n                  <tr>\n                    <td>If we want space between the content and borders, we can use padding</td>\n                    <td>If we want space between the 2 elements, then we should use margin</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Padding is inside the border, around the content.",
        "Margin is outside the border, between elements.",
        "Use padding for space inside an element, margin for space between elements."
      ]
    },
    {
      "question": "What is difference the visibility and hidden in css?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Display:none</th>\n                    <th scope=\"col\">Visibility:hidden</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>It will remove the element from the DOM</td>\n                    <td>An element will be hidden.</td>\n                  </tr>\n                  <tr>\n                    <td>It doesn't occupy any space.</td>\n                    <td>\n                      Even though component is hidden, It will occupy the same space in the page.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Layouts will be changed since elements is removed and doesn't occupy the\n                      space.\n                    </td>\n                    <td>Layouts will not be changed since elememt occupies the same space.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      If we have a parent div with display:none and a nested child div with\n                      display:block, then no divs will be displayed.\n                      <div>\n                        <code>\n                          &lt;div id=\"parent\" style=\"display:none;\"&gt;\n                          \n\n                          &lt;div id=\"child\" style=\"display:block;\"\"&gt;&lt;/div&gt;\n                          \n\n                          &lt;/div&gt;\n                        </code>\n                      </div>\n                    </td>\n                    <td>\n                      If we have a parent div with visibility:hidden and a nested child div with\n                      visibility:visible, Then the child div will be visible whereas the parent div\n                      will not be shown.\n                      <div>\n                        <code>\n                          &lt;div id=\"parent\" style=\"visibility:hidden;\"&lt;\n                          \n\n                          &lt;div id=\"child\" style=\"visibility:visible;\"&gt;&lt;/div&gt;\n                          \n\n                          &lt;/div&gt;\n                        </code>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "display:none removes element from DOM flow — no space occupied.",
        "visibility:hidden hides element but it still occupies space.",
        "Child of display:none parent is also hidden; child of visibility:hidden can be visible."
      ]
    },
    {
      "question": "What are the differences between relative and absolute?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">relative</th>\n                    <th scope=\"col\">absolute</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      An element with position: relative; is positioned relative to its normal\n                      position.\n                    </td>\n                    <td>\n                      An element with position: absolute; is positioned relative to the nearest\n                      positioned ancestor (instead of positioned relative to the viewport, like\n                      fixed)\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Setting the top, right, bottom, and left properties of a relatively-positioned\n                      element will cause it to be adjusted away from its normal position. Other\n                      content will not be adjusted to fit into any gap left by the element.\n                    </td>\n                    <td>\n                      However; if an absolute positioned element has no positioned ancestors, it\n                      uses the document body, and moves along with page scrolling.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>relative elements will be in normal flow.</td>\n                    <td>\n                      Absolute positioned elements are removed from the normal flow, and can overlap\n                      elements.\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "relative: stays in normal flow, adjusts from normal position.",
        "absolute: removed from flow, positioned relative to nearest positioned ancestor.",
        "relative elements don't overlap; absolute elements can overlap others."
      ]
    },
    {
      "question": "Difference between sticky and fixed positions ?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Sticky</th>\n                    <th scope=\"col\">Fixed</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      An element with position: sticky; is positioned based on the user's scroll\n                      position.\n                    </td>\n                    <td>\n                      An element with position: fixed; is positioned relative to the viewport, which\n                      means it always stays in the same place even if the page is scrolled.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      A sticky element toggles between relative and fixed, depending on the scroll\n                      position. It is positioned relative until a given offset position is met in\n                      the viewport - then it \"sticks\" in place (like position:fixed).\n                    </td>\n                    <td>\n                      The top, right, bottom, and left properties are used to position the element.\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "sticky: toggles between relative and fixed based on scroll position.",
        "fixed: always positioned relative to viewport, stays on scroll.",
        "sticky needs a threshold (top/bottom) to trigger the stick behavior."
      ]
    },
    {
      "question": "What is Media query?",
      "answer": "<ol>\n                <li>\n                  Media query is a CSS technique introduced in CSS3. It is used to create a\n                  responsive web design.\n                </li>\n\n                <li>\n                  It uses the\n                  <b>@media</b>\n                  rule to include a block of CSS properties only if a certain condition is true.\n                </li>\n                <code>\n                  /* Extra small devices (phones, 600px and down) */\n                  \n\n                  @media only screen and (max-width: 600px) {\n                  \n\n                  //write styles for mobile/small devices.\n                  \n\n                  }\n                </code>\n                <li>\n                  Using media queries we can develop web pages differently for each device based on\n                  screen or media types.\n                </li>\n                <li>\n                  Media queries can be used to check many things:\n                  <ul>\n                    <li>width and height of the viewport</li>\n                    <li>width and height of the device</li>\n                    <li>Orientation</li>\n                    <li>Resolution</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Media queries enable responsive design via @media rule.",
        "Can target viewport width, height, orientation, and resolution.",
        "Common breakpoints: 576px, 768px, 992px, 1200px."
      ]
    },
    {
      "question": "What is flex layout and what are the flex properties?",
      "answer": "<ol>\n                <li>\n                  Using the Flexible Box Layout, we can design flexible responsive layout structure\n                  without using float or positioning.\n                </li>\n                <li>\n                  The flex container properties are:\n                  <ul>\n                    <li>\n                      flex-direction: defines in which direction the container wants to stack the\n                      flex items\n                    </li>\n                    <li>flex-wrap: specifies whether the flex items should wrap or not.</li>\n                    <li>flex-flow: Shorthand property for direction and wrap.</li>\n                    <li>justify-content: property is used to align the flex items:</li>\n                    <li>align-items: property is used to align the flex items.</li>\n                    <li>align-content: property is used to align the flex lines.</li>\n                  </ul>\n                </li>\n                <img src=\"assets/images/flex-align.jpg\">\n                <img src=\"assets/images/flex-justify.jpg\">\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Flexbox provides flexible one-dimensional layout without float/position.",
        "Container props: flex-direction, flex-wrap, justify-content, align-items.",
        "Item props: flex (grow/shrink/basis), order, align-self."
      ]
    },
    {
      "question": "What is grid layout and what are the grid properties?",
      "answer": "<ol>\n                <li>\n                  The CSS Grid Layout Module offers a grid-based layout system, with rows and\n                  columns, making it easier to design web pages without having to use floats and\n                  positioning.\n                </li>\n                <img src=\"assets/images/grid-overview.jpg\" alt=\"\">\n                <img src=\"assets/images/grid-cheatsheet.jpg\" alt=\"\">\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "CSS Grid offers a two-dimensional layout system with rows and columns.",
        "Eliminates need for floats and positioning for page layouts.",
        "Key properties: grid-template-columns, gap, grid-column, grid-row."
      ]
    },
    {
      "question": "What is BOOTSTRAP?",
      "answer": "<ol>\n                <li>bootstrap is open-source css library</li>\n                <li>It is responsive css library</li>\n                <li>\n                  Bootstrap has multiple utility class and components. eg: For padding: p-1, margin:\n                  m-1\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Bootstrap is an open-source responsive CSS framework.",
        "Provides utility classes like p-1, m-1 for spacing.",
        "Includes pre-built components: navbar, cards, modals, alerts."
      ]
    },
    {
      "question": "Explain about BOOTSTRAP grid?",
      "answer": "<ol>\n                <li>Bootstrap grid is mainly divided in to 12 columns.</li>\n                <li>Each screen can be divided using the col-12 class.</li>\n                <li>col-sm-12 refers for small devices like mobiles</li>\n                <li>col-md-12 refers for medium devices like laptops</li>\n                <li>col-lg-12 refers for large devices like tv</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Bootstrap grid is mainly divided in to 12 columns.",
        "Each screen can be divided using the col-12 class.",
        "col-sm-12 refers for small devices like mobiles"
      ]
    },
    {
      "question": "Components in css?",
      "answer": "<ol>\n                <li>\n                  <b>\n                    <a href=\"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors\"></a>\n                    Selector/media query:\n                  </b>\n                  <ol>\n                    <li>selector by tag name</li>\n                    <li>selector by class</li>\n                    <li>selector by attribute</li>\n                    <li>selector by pseudo selectors</li>\n                    <li>selector by pseudo elements</li>\n                  </ol>\n                </li>\n                <li>\n                  <b>property:</b>\n                  property name in css like background, font-size, color, border\n                </li>\n                <li>\n                  <b>\n                    <a href=\"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units\"></a>\n                    value:\n                  </b>\n                  value of the property in css, it may be number or length or percents\n                  <br>\n                  <b>units:</b>\n                  em, rem, %, px, in, cm, etc.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Selector/media query: selector by tag name",
        "selector by pseudo selectors",
        "selector by pseudo elements"
      ]
    },
    {
      "question": "What is SCSS?",
      "answer": "<ol>\n                <li>\n                  <b>SASS</b>\n                  Sass stands for Syntactically Awesome Stylesheet. Sass is an extension to CSS\n                </li>\n                <li>Sass is a CSS pre-processor</li>\n                <li>Sass reduces repetition of CSS and therefore saves time</li>\n                <li>\n                  Main features of SCSS are:\n                  <ol>\n                    <li>\n                      Variables\n                      <code class=\"d-block\">\n                        /* define variables for the primary colors */\n                        \n\n                        $primary_1: #a2b9bc;\n                        \n\n                        \n\n\n                        .main-header {\n                        \n\n                        background-color: $primary_1;\n                        \n\n                        }\n                        \n\n                      </code>\n                    </li>\n                    <li>\n                      <b>Nested rules</b>\n                      : Sass lets you nest CSS selectors in the same way as HTML.\n                      <div>\n                        <img src=\"assets/images/scss-nested-rules.png\" alt=\"Nested rules\">\n                      </div>\n                    </li>\n                    <li>\n                      <b>mixins</b>\n                      : The @mixin directive lets you create CSS code that is to be reused\n                      throughout the website.\n                      <div>\n                        <img src=\"assets/images/scss-mixins.png\" alt=\"mixins\">\n                      </div>\n                    </li>\n                    <li><b>imports</b></li>\n                    <li>\n                      <b>inheritance</b>\n                      : The @extend directive lets you share a set of CSS properties from one\n                      selector to another.\n                      <div>\n                        <img src=\"assets\\images/scss-inheritance.png\" alt=\"inheritance\">\n                      </div>\n                    </li>\n                    <li><b>built-in functions</b></li>\n                  </ol>\n                </li>\n                <li>\n                  A browser does not understand Sass code. Therefore, you will need a Sass\n                  pre-processor to convert Sass code into standard CSS. This process is called\n                  transpiling. So, you need to give a transpiler (some kind of program) some Sass\n                  code and then get some CSS code back.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "SASS = Syntactically Awesome Stylesheet, a CSS pre-processor.",
        "Features: variables, nesting, mixins, inheritance, imports.",
        "Browsers can't read SASS — it must be transpiled to CSS."
      ]
    },
    {
      "question": "What style will be used when there is more than one style specified for an HTML element?",
      "answer": "<div>\n                All the styles in a page will \"cascade\" into a new \"virtual\" style sheet by the\n                following rules, where number one has the highest priority:\n              </div>\n              <ol>\n                <li>Inline style (inside an HTML element)</li>\n                <li>External or internal style sheets (based on order in the head section)</li>\n                <li>Browser default</li>\n              </ol>\n              Note:- When we comparing id, class and tag name selectors, order will be id, class and\n              tagname",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Inline style (inside an HTML element)",
        "External or internal style sheets (based on order in the head section)"
      ]
    },
    {
      "question": "How to import Css styles? or How to link external CSS styles page to the html document ?",
      "answer": "<ol>\n                <li>\n                  External styles can be imported using the\n                  <b>link</b>\n                  tag.\n                </li>\n                <li>\n                  Eg:\n                  <br>\n                  <code>\n                    &lt;head&gt;\n                    \n\n                    &lt;link rel=\"stylesheet\" href=\"mystyle.css\"&gt;\n                    \n\n                    &lt;/head&gt;\n                    \n\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "External styles can be imported using the link tag."
      ]
    },
    {
      "question": "What are the attributes inside LINK TAG?",
      "answer": "<ol>\n                <li>\n                  External styles can be imported using the\n                  <b>link</b>\n                  tag.\n                </li>\n                <li>\n                  Link tag has mainly 2 attributes.\n                  <code>rel</code>\n                  and\n                  <code>href</code>\n                  href is path of the stylesheet.\n                  <br>\n                  <code>\n                    &lt;head&gt;\n                    \n\n                    &lt;link rel=\"stylesheet\" href=\"mystyle.css\"&gt;\n                    \n\n                    &lt;/head&gt;\n                    \n\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "External styles can be imported using the link tag.",
        "Link tag has mainly 2 attributes. rel and href href is path of the stylesheet."
      ]
    },
    {
      "question": "What are CSS Custom Properties (CSS Variables)?",
      "answer": "<ol>\n                <li>\n                  CSS custom properties (variables) are entities defined by CSS authors that contain\n                  specific values to be reused throughout a document.\n                </li>\n                <li>\n                  They are set using custom property notation (e.g., --main-color: black;) and are\n                  accessed using the var() function.\n                </li>\n                <li>\n                  <b>Benefits:</b>\n                  <ul>\n                    <li>Reduce repetition and improve maintainability</li>\n                    <li>Can be changed dynamically with JavaScript</li>\n                    <li>Support inheritance and cascading</li>\n                    <li>Enable theming and dynamic styling</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Example:</b>\n                  <code class=\"d-block\">\n                    :root {\n                    \n\n                      --primary-color: #3498db;\n                    \n\n                      --font-size: 16px;\n                    \n\n                    }\n                    \n\n                    \n\n                    .button {\n                    \n\n                      background-color: var(--primary-color);\n                    \n\n                      font-size: var(--font-size);\n                    \n\n                    }\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "CSS custom properties are reusable values set with --name syntax.",
        "Accessed via var() function, support inheritance and cascading.",
        "Can be changed dynamically with JavaScript for theming."
      ]
    },
    {
      "question": "What is BEM methodology in CSS?",
      "answer": "<ol>\n                <li>\n                  <b>BEM</b>\n                  stands for Block, Element, Modifier - a naming convention for CSS classes.\n                </li>\n                <li>\n                  <b>Block:</b>\n                  Standalone entity that is meaningful on its own (e.g., header, container, menu)\n                </li>\n                <li>\n                  <b>Element:</b>\n                  A part of a block that has no standalone meaning (e.g., menu item, list item,\n                  header title)\n                </li>\n                <li>\n                  <b>Modifier:</b>\n                  A flag on a block or element that changes appearance or behavior\n                </li>\n                <li>\n                  <b>Naming Convention:</b>\n                  <ul>\n                    <li>Block: .block</li>\n                    <li>Element: .block__element</li>\n                    <li>Modifier: .block--modifier or .block__element--modifier</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Example:</b>\n                  <code class=\"d-block\">\n                    .card { /* Block */ }\n                    \n\n                    .card__title { /* Element */ }\n                    \n\n                    .card__button { /* Element */ }\n                    \n\n                    .card--featured { /* Modifier */ }\n                    \n\n                    .card__button--disabled { /* Element with Modifier */ }\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "BEM = Block, Element, Modifier naming convention.",
        "Block: standalone entity (.card). Element: part of block (.card__title).",
        "Modifier: variant flag (.card--featured, .card__button--disabled)."
      ]
    },
    {
      "question": "What is CSS Specificity and how is it calculated?",
      "answer": "<ol>\n                <li>\n                  CSS specificity determines which CSS rule is applied when multiple rules target\n                  the same element.\n                </li>\n                <li>\n                  <b>Specificity hierarchy (from highest to lowest):</b>\n                  <ol>\n                    <li>Inline styles (style attribute) - 1000 points</li>\n                    <li>IDs - 100 points each</li>\n                    <li>Classes, attributes, pseudo-classes - 10 points each</li>\n                    <li>Elements and pseudo-elements - 1 point each</li>\n                  </ol>\n                </li>\n                <li>\n                  <b>Examples:</b>\n                  <ul>\n                    <li>div p { } = 0,0,0,2 (2 points)</li>\n                    <li>.nav ul li { } = 0,0,1,2 (12 points)</li>\n                    <li>#header .nav li { } = 0,1,1,1 (111 points)</li>\n                    <li>style=\"color: red;\" = 1,0,0,0 (1000 points)</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>!important</b>\n                  overrides specificity but should be used sparingly as it makes CSS harder to\n                  maintain.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Specificity determines which rule wins: (inline, IDs, classes, elements).",
        "Inline = 1000, ID = 100, class/attribute = 10, element = 1.",
        "!important overrides specificity but should be used sparingly."
      ]
    },
    {
      "question": "What is CSS Stacking Context?",
      "answer": "<ol>\n                <li>\n                  A stacking context is a three-dimensional conceptualization of HTML elements along\n                  an imaginary z-axis relative to the user.\n                </li>\n                <li>\n                  <b>Elements that create a new stacking context:</b>\n                  <ul>\n                    <li>Root element (html)</li>\n                    <li>Elements with position: absolute/relative and z-index other than auto</li>\n                    <li>Elements with position: fixed or sticky</li>\n                    <li>Elements with opacity less than 1</li>\n                    <li>\n                      Elements with transform, filter, perspective, clip-path, mask properties\n                    </li>\n                    <li>Elements with isolation: isolate</li>\n                    <li>Flex/Grid items with z-index other than auto</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Stacking order within a context:</b>\n                  <ol>\n                    <li>Background and borders of the root element</li>\n                    <li>Descendant non-positioned blocks (in order of appearance)</li>\n                    <li>Descendant positioned elements (in order of appearance)</li>\n                  </ol>\n                </li>\n                <li>\n                  Understanding stacking context helps debug z-index issues and layering problems.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Stacking context is a 3D z-axis layering of elements.",
        "Created by: positioned elements with z-index, opacity < 1, transform, filter.",
        "Children stack within their context before stacking as a group."
      ]
    },
    {
      "question": "What is the will-change property and when should you use it?",
      "answer": "<ol>\n                <li>\n                  The\n                  <b>will-change</b>\n                  property hints to browsers about what kind of changes to expect on an element, so\n                  they can set up appropriate optimizations.\n                </li>\n                <li>\n                  <b>Common values:</b>\n                  <ul>\n                    <li>auto (default)</li>\n                    <li>scroll-position</li>\n                    <li>contents</li>\n                    <li>transform</li>\n                    <li>opacity</li>\n                    <li>left, top, etc.</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>When to use:</b>\n                  <ul>\n                    <li>Before starting animations or transitions</li>\n                    <li>For elements that will be frequently updated</li>\n                    <li>To optimize performance-critical animations</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Best practices:</b>\n                  <ul>\n                    <li>Remove will-change after the change is complete</li>\n                    <li>Don't apply to too many elements (memory overhead)</li>\n                    <li>Use specific properties rather than 'auto'</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Example:</b>\n                  <code class=\"d-block\">\n                    .element {\n                    \n\n                      will-change: transform;\n                    \n\n                    }\n                    \n\n                    \n\n                    /* After animation completes */\n                    \n\n                    .element {\n                    \n\n                      will-change: auto;\n                    \n\n                    }\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "will-change hints to browsers about expected element changes.",
        "Set before animation starts, remove after to avoid memory overhead.",
        "Don't apply to too many elements — it has a memory cost."
      ]
    },
    {
      "question": "What are CSS Transforms and how do they differ from changing position properties?",
      "answer": "<ol>\n                <li>\n                  CSS transforms allow you to rotate, scale, skew, or translate elements without\n                  affecting the document flow.\n                </li>\n                <li>\n                  <b>Transform functions:</b>\n                  <ul>\n                    <li>translate() - moves element</li>\n                    <li>rotate() - rotates element</li>\n                    <li>scale() - resizes element</li>\n                    <li>skew() - skews element</li>\n                    <li>matrix() - combines all transformations</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Differences from position changes:</b>\n                  <table class=\"table table-striped table-bordered mt-2\">\n                    <thead>\n                      <tr>\n                        <th>CSS Transforms</th>\n                        <th>Position Properties</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>Don't affect document flow</td>\n                        <td>Can affect document flow</td>\n                      </tr>\n                      <tr>\n                        <td>Hardware accelerated (GPU)</td>\n                        <td>CPU-based rendering</td>\n                      </tr>\n                      <tr>\n                        <td>Better performance for animations</td>\n                        <td>Can cause layout recalculations</td>\n                      </tr>\n                      <tr>\n                        <td>Don't trigger layout/reflow</td>\n                        <td>May trigger layout/reflow</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </li>\n                <li>\n                  <b>Example:</b>\n                  <code class=\"d-block\">\n                    .element {\n                    \n\n                      transform: translateX(100px) rotate(45deg) scale(1.2);\n                    \n\n                      transform-origin: center center;\n                    \n\n                    }\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Transforms (translate, rotate, scale, skew) don't affect document flow.",
        "Hardware accelerated (GPU) — better performance than position changes.",
        "Don't trigger layout/reflow, unlike changing top/left properties."
      ]
    },
    {
      "question": "What is Critical CSS and why is it important for performance?",
      "answer": "<ol>\n                <li>\n                  <b>Critical CSS</b>\n                  refers to the minimum CSS required to render the above-the-fold content of a\n                  webpage.\n                </li>\n                <li>\n                  <b>Purpose:</b>\n                  <ul>\n                    <li>Eliminate render-blocking CSS</li>\n                    <li>Improve First Contentful Paint (FCP)</li>\n                    <li>Reduce time to interactive</li>\n                    <li>Better user experience on slow connections</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Implementation strategies:</b>\n                  <ul>\n                    <li>Inline critical CSS in the HTML head</li>\n                    <li>Load non-critical CSS asynchronously</li>\n                    <li>Use tools like Critical, Penthouse, or PurgeCSS</li>\n                    <li>Implement CSS splitting in build process</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Example implementation:</b>\n                  <code class=\"d-block\">\n                    &lt;head&gt;\n                    \n\n                      &lt;style&gt;\n                    \n\n                        /* Critical CSS inlined here */\n                    \n\n                      &lt;/style&gt;\n                    \n\n                      &lt;link rel=\"preload\" href=\"non-critical.css\" as=\"style\"\n                    onload=\"this.onload=null;this.rel='stylesheet'\"&gt;\n                    \n\n                    &lt;/head&gt;\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Critical CSS is the minimum CSS needed for above-the-fold content.",
        "Inline it in <head> to eliminate render-blocking and improve FCP.",
        "Load non-critical CSS asynchronously with rel=preload."
      ]
    },
    {
      "question": "What is CSS Containment and how does it improve performance?",
      "answer": "<ol>\n                <li>\n                  CSS Containment allows developers to isolate parts of the page from the rest,\n                  enabling browsers to optimize rendering.\n                </li>\n                <li>\n                  <b>Contain property values:</b>\n                  <ul>\n                    <li>\n                      <b>layout:</b>\n                      Element's internal layout doesn't affect external elements\n                    </li>\n                    <li>\n                      <b>paint:</b>\n                      Element's descendants can't be painted outside its bounds\n                    </li>\n                    <li>\n                      <b>size:</b>\n                      Element's size doesn't depend on its descendants\n                    </li>\n                    <li>\n                      <b>style:</b>\n                      Properties that affect more than the element don't escape\n                    </li>\n                    <li>\n                      <b>strict:</b>\n                      Equivalent to 'layout paint size'\n                    </li>\n                    <li>\n                      <b>content:</b>\n                      Equivalent to 'layout paint style'\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Performance benefits:</b>\n                  <ul>\n                    <li>Reduces layout calculations</li>\n                    <li>Enables better browser optimizations</li>\n                    <li>Improves rendering performance for large pages</li>\n                    <li>Useful for virtualized lists and infinite scroll</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Example:</b>\n                  <code class=\"d-block\">\n                    .card {\n                    \n\n                      contain: layout style paint;\n                    \n\n                    }\n                    \n\n                    \n\n                    .infinite-list-item {\n                    \n\n                      contain: strict;\n                    \n\n                    }\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "CSS Containment isolates page sections for rendering optimization.",
        "contain: layout, paint, size, style, strict, content.",
        "Reduces layout calculations — useful for large lists and virtualization."
      ]
    },
    {
      "question": "What are CSS Logical Properties and why are they important?",
      "answer": "<ol>\n                <li>\n                  CSS Logical Properties provide the ability to control layout through logical,\n                  rather than physical, direction and dimension mappings.\n                </li>\n                <li>\n                  <b>Physical vs Logical properties:</b>\n                  <table class=\"table table-striped table-bordered mt-2\">\n                    <thead>\n                      <tr>\n                        <th>Physical</th>\n                        <th>Logical</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td>margin-left</td>\n                        <td>margin-inline-start</td>\n                      </tr>\n                      <tr>\n                        <td>margin-right</td>\n                        <td>margin-inline-end</td>\n                      </tr>\n                      <tr>\n                        <td>margin-top</td>\n                        <td>margin-block-start</td>\n                      </tr>\n                      <tr>\n                        <td>margin-bottom</td>\n                        <td>margin-block-end</td>\n                      </tr>\n                      <tr>\n                        <td>width</td>\n                        <td>inline-size</td>\n                      </tr>\n                      <tr>\n                        <td>height</td>\n                        <td>block-size</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </li>\n                <li>\n                  <b>Benefits:</b>\n                  <ul>\n                    <li>Better support for internationalization (RTL languages)</li>\n                    <li>Writing mode independence</li>\n                    <li>More semantic and maintainable code</li>\n                    <li>Automatic adaptation to different text directions</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Example:</b>\n                  <code class=\"d-block\">\n                    .card {\n                    \n\n                      margin-inline: 1rem; /* left and right in LTR, right and left in RTL\n                    */\n                    \n\n                      padding-block: 0.5rem; /* top and bottom */\n                    \n\n                      border-inline-start: 2px solid blue;\n                    \n\n                    }\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Logical properties use inline/block axes instead of physical left/right.",
        "Supports RTL languages and different writing modes automatically.",
        "margin-inline-start replaces margin-left, width becomes inline-size."
      ]
    },
    {
      "question": "What is the difference between CSS Transitions and Animations?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">CSS Transitions</th>\n                    <th scope=\"col\">CSS Animations</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Triggered by state changes (hover, focus, etc.)</td>\n                    <td>Can run automatically without triggers</td>\n                  </tr>\n                  <tr>\n                    <td>Simple A to B animations</td>\n                    <td>Complex multi-step animations with keyframes</td>\n                  </tr>\n                  <tr>\n                    <td>Cannot loop (except with JavaScript)</td>\n                    <td>Built-in looping and iteration control</td>\n                  </tr>\n                  <tr>\n                    <td>Limited to 2 states (start and end)</td>\n                    <td>Multiple intermediate states via keyframes</td>\n                  </tr>\n                  <tr>\n                    <td>Better for UI interactions</td>\n                    <td>Better for complex motion graphics</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <code>\n                        .button {\n                        \n\n                          transition: background-color 0.3s ease;\n                        \n\n                        }\n                        \n\n                        .button:hover {\n                        \n\n                          background-color: blue;\n                        \n\n                        }\n                      </code>\n                    </td>\n                    <td>\n                      <code>\n                        @keyframes slideIn {\n                        \n\n                          0% { transform: translateX(-100%); }\n                        \n\n                          100% { transform: translateX(0); }\n                        \n\n                        }\n                        \n\n                        .element {\n                        \n\n                          animation: slideIn 0.5s ease-in-out;\n                        \n\n                        }\n                      </code>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "CSS"
      ],
      "keyPoints": [
        "Transitions: triggered by state changes, simple A-to-B, no looping.",
        "Animations: run automatically, multi-step keyframes, built-in looping.",
        "Transitions for UI interactions; animations for complex motion."
      ]
    }
  ]
};
