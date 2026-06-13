// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.663Z

export const cssQuestions = {
  questions: [
    {
      question: 'How many are there to import the CSS?',
      answer: `<div>There are three ways of inserting a style sheet</div>
              <ol>
                <li>
                  <b>External CSS:</b>
                  If styles are common for multiple pages, then we should use the external styles.
                </li>
                <li>
                  <b>Internal CSS:</b>
                  If styles are used multiple times within the page, then we should be internal
                  styles.
                </li>
                <li>
                  <b>Inline CSS:</b>
                  If style is going to use only once then we can use internal css.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What are CSS selectors?',
      answer: `<ol>
                Mainly below css selectors are available in CSS:
                <li>
                  <b class="text-primary">Simple selectors</b>
                  <ol>
                    <li>Name selector</li>
                    <li>Class selector</li>
                    <li>Id selector</li>
                  </ol>
                </li>
                <li>
                  <b class="text-primary">Combination selectors</b>
                  <ol>
                    <li>descendant selector (space)</li>
                    <li>child selector (>)</li>
                    <li>adjacent sibling selector (+)</li>
                    <li>general sibling selector (~)</li>
                  </ol>
                </li>
                <li>
                  <b class="text-primary">Pseudo class selectors:</b>
                  A pseudo-class is used to define a special state of an element.
                  <div>
                    <code>:hover, :active, :focus, :link, :first-child</code>
                  </div>
                </li>
                <li>
                  <b class="text-primary">Pseudo elements:</b>
                  A CSS pseudo-element is used to style specified parts of an element.
                  <div>Pseudo elements denoted by double colons(::)</div>
                  <div>
                    <code>::first-line, ::after, ::before</code>
                  </div>
                </li>
                <li>
                  <b class="text-primary">Attribute selectors:</b>
                  The [attribute] selector is used to select elements with a specified attribute.
                  <div>
                    <code>
                      a[target="_blank"] {
                      <br>
                      background-color: yellow;
                      <br>
                      }
                    </code>
                  </div>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What are CSS positions?',
      answer: `<ol>
                The position property specifies the type of positioning method used for an element.
                <li>
                  <b>static</b>
                  <ol>
                    <li>HTML elements are positioned static by default.</li>
                    <li>
                      Static positioned elements are not affected by the top, bottom, left, and
                      right properties.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>relative</b>
                  <ol>
                    <li>
                      An element with position: relative; is positioned relative to its normal
                      position.
                    </li>
                    <li>
                      Setting the top, right, bottom, and left properties of a relatively-positioned
                      element will cause it to be adjusted away from its normal position.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>fixed</b>
                  <ol>
                    <li>
                      An element with position: fixed; is positioned relative to the viewport.
                    </li>
                    <li>
                      A fixed element does not leave a gap in the page where it would normally have
                      been located.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>absolute</b>
                  <ol>
                    <li>
                      An element with position: absolute; is positioned relative to the nearest
                      positioned ancestor.
                    </li>
                    <li>
                      if an absolute positioned element has no positioned ancestors, it uses the
                      document body, and moves along with page scrolling.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>sticky</b>
                  <ol>
                    <li>
                      A sticky element toggles between relative and fixed, depending on the scroll
                      position.
                    </li>
                    <li>
                      It is positioned relative until a given offset position is met in the viewport
                      - then it "sticks" in place
                    </li>
                  </ol>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: `If element has absolute position what it's parent element position type?`,
      answer: `<div>
                Parent element should be positioned. Else it will be viewport will be parent
                positioned item.
              </div>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is z-index?',
      answer: `<ol>
                <li>The z-index property specifies the stack order of an element.</li>
                <li>z-index will work only if item is positioned item.</li>
                <li>When elements are positioned, they can overlap other elements.</li>
                <li>
                  An element can have a positive or negative z-index number. Highest z-index number
                  will high preference
                </li>
                <li>
                  Eg:
                  <code>z-index: -1;</code>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is Box model?',
      answer: `<div>All HTML elements can be considered as boxes.</div>
              <ol>
                <li>
                  <b>Content</b>
                  - The content of the box, where text and images appear
                </li>
                <li>
                  <b>Padding</b>
                  - Padding is available inside the border and around the content box.
                </li>
                <li>
                  <b>Border</b>
                  - A border that goes around the padding and content
                </li>
                <li>
                  <b>Margin</b>
                  - Margin is available outside of the border.
                </li>
              </ol>
              <div>
                <img src="assets/images/box-model.png" alt="Box model">
              </div>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What are the differences between padding and margin?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">padding</th>
                    <th scope="col">margin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Padding is available inside the border and around the content box.</td>
                    <td>Margin is available outside of the border.</td>
                  </tr>
                  <tr>
                    <td>If we want space between the content and borders, we can use padding</td>
                    <td>If we want space between the 2 elements, then we should use margin</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is difference the visibility and hidden in css?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Display:none</th>
                    <th scope="col">Visibility:hidden</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>It will remove the element from the DOM</td>
                    <td>An element will be hidden.</td>
                  </tr>
                  <tr>
                    <td>It doesn't occupy any space.</td>
                    <td>
                      Even though component is hidden, It will occupy the same space in the page.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Layouts will be changed since elements is removed and doesn't occupy the
                      space.
                    </td>
                    <td>Layouts will not be changed since elememt occupies the same space.</td>
                  </tr>
                  <tr>
                    <td>
                      If we have a parent div with display:none and a nested child div with
                      display:block, then no divs will be displayed.
                      <div>
                        <code>
                          <div id="parent" style="display:none;">
                          <br>
                          <div id="child" style="display:block;""></div>
                          <br>
                          </div>
                        </code>
                      </div>
                    </td>
                    <td>
                      If we have a parent div with visibility:hidden and a nested child div with
                      visibility:visible, Then the child div will be visible whereas the parent div
                      will not be shown.
                      <div>
                        <code>
                          <div id="parent" style="visibility:hidden;"<
                          <br>
                          <div id="child" style="visibility:visible;"></div>
                          <br>
                          </div>
                        </code>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What are the differences between relative and absolute?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">relative</th>
                    <th scope="col">absolute</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      An element with position: relative; is positioned relative to its normal
                      position.
                    </td>
                    <td>
                      An element with position: absolute; is positioned relative to the nearest
                      positioned ancestor (instead of positioned relative to the viewport, like
                      fixed)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Setting the top, right, bottom, and left properties of a relatively-positioned
                      element will cause it to be adjusted away from its normal position. Other
                      content will not be adjusted to fit into any gap left by the element.
                    </td>
                    <td>
                      However; if an absolute positioned element has no positioned ancestors, it
                      uses the document body, and moves along with page scrolling.
                    </td>
                  </tr>
                  <tr>
                    <td>relative elements will be in normal flow.</td>
                    <td>
                      Absolute positioned elements are removed from the normal flow, and can overlap
                      elements.
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'Difference between sticky and fixed positions ?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Sticky</th>
                    <th scope="col">Fixed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      An element with position: sticky; is positioned based on the user's scroll
                      position.
                    </td>
                    <td>
                      An element with position: fixed; is positioned relative to the viewport, which
                      means it always stays in the same place even if the page is scrolled.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      A sticky element toggles between relative and fixed, depending on the scroll
                      position. It is positioned relative until a given offset position is met in
                      the viewport - then it "sticks" in place (like position:fixed).
                    </td>
                    <td>
                      The top, right, bottom, and left properties are used to position the element.
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is Media query?',
      answer: `<ol>
                <li>
                  Media query is a CSS technique introduced in CSS3. It is used to create a
                  responsive web design.
                </li>

                <li>
                  It uses the
                  <b>@media</b>
                  rule to include a block of CSS properties only if a certain condition is true.
                </li>
                <code>
                  /* Extra small devices (phones, 600px and down) */
                  <br>
                  @media only screen and (max-width: 600px) {
                  <br>
                  //write styles for mobile/small devices.
                  <br>
                  }
                </code>
                <li>
                  Using media queries we can develop web pages differently for each device based on
                  screen or media types.
                </li>
                <li>
                  Media queries can be used to check many things:
                  <ul>
                    <li>width and height of the viewport</li>
                    <li>width and height of the device</li>
                    <li>Orientation</li>
                    <li>Resolution</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is flex layout and what are the flex properties?',
      answer: `<ol>
                <li>
                  Using the Flexible Box Layout, we can design flexible responsive layout structure
                  without using float or positioning.
                </li>
                <li>
                  The flex container properties are:
                  <ul>
                    <li>
                      flex-direction: defines in which direction the container wants to stack the
                      flex items
                    </li>
                    <li>flex-wrap: specifies whether the flex items should wrap or not.</li>
                    <li>flex-flow: Shorthand property for direction and wrap.</li>
                    <li>justify-content: property is used to align the flex items:</li>
                    <li>align-items: property is used to align the flex items.</li>
                    <li>align-content: property is used to align the flex lines.</li>
                  </ul>
                </li>
                <img src="assets/images/flex-align.jpg">
                <img src="assets/images/flex-justify.jpg">
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is grid layout and what are the grid properties?',
      answer: `<ol>
                <li>
                  The CSS Grid Layout Module offers a grid-based layout system, with rows and
                  columns, making it easier to design web pages without having to use floats and
                  positioning.
                </li>
                <img src="assets/images/grid-overview.jpg" alt="">
                <img src="assets/images/grid-cheatsheet.jpg" alt="">
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is BOOTSTRAP?',
      answer: `<ol>
                <li>bootstrap is open-source css library</li>
                <li>It is responsive css library</li>
                <li>
                  Bootstrap has multiple utility class and components. eg: For padding: p-1, margin:
                  m-1
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'Explain about BOOTSTRAP grid?',
      answer: `<ol>
                <li>Bootstrap grid is mainly divided in to 12 columns.</li>
                <li>Each screen can be divided using the col-12 class.</li>
                <li>col-sm-12 refers for small devices like mobiles</li>
                <li>col-md-12 refers for medium devices like laptops</li>
                <li>col-lg-12 refers for large devices like tv</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'Components in css?',
      answer: `<ol>
                <li>
                  <b>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors"></a>
                    Selector/media query:
                  </b>
                  <ol>
                    <li>selector by tag name</li>
                    <li>selector by class</li>
                    <li>selector by attribute</li>
                    <li>selector by pseudo selectors</li>
                    <li>selector by pseudo elements</li>
                  </ol>
                </li>
                <li>
                  <b>property:</b>
                  property name in css like background, font-size, color, border
                </li>
                <li>
                  <b>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"></a>
                    value:
                  </b>
                  value of the property in css, it may be number or length or percents
                  <br>
                  <b>units:</b>
                  em, rem, %, px, in, cm, etc.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is SCSS?',
      answer: `<ol>
                <li>
                  <b>SASS</b>
                  Sass stands for Syntactically Awesome Stylesheet. Sass is an extension to CSS
                </li>
                <li>Sass is a CSS pre-processor</li>
                <li>Sass reduces repetition of CSS and therefore saves time</li>
                <li>
                  Main features of SCSS are:
                  <ol>
                    <li>
                      Variables
                      <code class="d-block">
                        /* define variables for the primary colors */
                        <br>
                        \$primary_1: #a2b9bc;
                        <br>
                        <br>

                        .main-header {
                        <br>
                        background-color: \$primary_1;
                        <br>
                        }
                        <br>
                      </code>
                    </li>
                    <li>
                      <b>Nested rules</b>
                      : Sass lets you nest CSS selectors in the same way as HTML.
                      <div>
                        <img src="assets/images/scss-nested-rules.png" alt="Nested rules">
                      </div>
                    </li>
                    <li>
                      <b>mixins</b>
                      : The @mixin directive lets you create CSS code that is to be reused
                      throughout the website.
                      <div>
                        <img src="assets/images/scss-mixins.png" alt="mixins">
                      </div>
                    </li>
                    <li><b>imports</b></li>
                    <li>
                      <b>inheritance</b>
                      : The @extend directive lets you share a set of CSS properties from one
                      selector to another.
                      <div>
                        <img src="assets\\images/scss-inheritance.png" alt="inheritance">
                      </div>
                    </li>
                    <li><b>built-in functions</b></li>
                  </ol>
                </li>
                <li>
                  A browser does not understand Sass code. Therefore, you will need a Sass
                  pre-processor to convert Sass code into standard CSS. This process is called
                  transpiling. So, you need to give a transpiler (some kind of program) some Sass
                  code and then get some CSS code back.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What style will be used when there is more than one style specified for an HTML element?',
      answer: `<div>
                All the styles in a page will "cascade" into a new "virtual" style sheet by the
                following rules, where number one has the highest priority:
              </div>
              <ol>
                <li>Inline style (inside an HTML element)</li>
                <li>External or internal style sheets (based on order in the head section)</li>
                <li>Browser default</li>
              </ol>
              Note:- When we comparing id, class and tag name selectors, order will be id, class and
              tagname`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'How to import Css styles? or How to link external CSS styles page to the html document ?',
      answer: `<ol>
                <li>
                  External styles can be imported using the
                  <b>link</b>
                  tag.
                </li>
                <li>
                  Eg:
                  <br>
                  <code>
                    &lt;head&gt;
                    <br>
                    &lt;link rel="stylesheet" href="mystyle.css"&gt;
                    <br>
                    &lt;/head>
                    <br>
                  </code>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What are the attributes inside LINK TAG?',
      answer: `<ol>
                <li>
                  External styles can be imported using the
                  <b>link</b>
                  tag.
                </li>
                <li>
                  Link tag has mainly 2 attributes.
                  <code>rel</code>
                  and
                  <code>href</code>
                  href is path of the stylesheet.
                  <br>
                  <code>
                    &lt;head&gt;
                    <br>
                    &lt;link rel="stylesheet" href="mystyle.css"&gt;
                    <br>
                    &lt;/head>
                    <br>
                  </code>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What are CSS Custom Properties (CSS Variables)?',
      answer: `<ol>
                <li>
                  CSS custom properties (variables) are entities defined by CSS authors that contain
                  specific values to be reused throughout a document.
                </li>
                <li>
                  They are set using custom property notation (e.g., --main-color: black;) and are
                  accessed using the var() function.
                </li>
                <li>
                  <b>Benefits:</b>
                  <ul>
                    <li>Reduce repetition and improve maintainability</li>
                    <li>Can be changed dynamically with JavaScript</li>
                    <li>Support inheritance and cascading</li>
                    <li>Enable theming and dynamic styling</li>
                  </ul>
                </li>
                <li>
                  <b>Example:</b>
                  <code class="d-block">
                    :root {
                    <br>
                    &nbsp;&nbsp;--primary-color: #3498db;
                    <br>
                    &nbsp;&nbsp;--font-size: 16px;
                    <br>
                    }
                    <br>
                    <br>
                    .button {
                    <br>
                    &nbsp;&nbsp;background-color: var(--primary-color);
                    <br>
                    &nbsp;&nbsp;font-size: var(--font-size);
                    <br>
                    }
                  </code>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is BEM methodology in CSS?',
      answer: `<ol>
                <li>
                  <b>BEM</b>
                  stands for Block, Element, Modifier - a naming convention for CSS classes.
                </li>
                <li>
                  <b>Block:</b>
                  Standalone entity that is meaningful on its own (e.g., header, container, menu)
                </li>
                <li>
                  <b>Element:</b>
                  A part of a block that has no standalone meaning (e.g., menu item, list item,
                  header title)
                </li>
                <li>
                  <b>Modifier:</b>
                  A flag on a block or element that changes appearance or behavior
                </li>
                <li>
                  <b>Naming Convention:</b>
                  <ul>
                    <li>Block: .block</li>
                    <li>Element: .block__element</li>
                    <li>Modifier: .block--modifier or .block__element--modifier</li>
                  </ul>
                </li>
                <li>
                  <b>Example:</b>
                  <code class="d-block">
                    .card { /* Block */ }
                    <br>
                    .card__title { /* Element */ }
                    <br>
                    .card__button { /* Element */ }
                    <br>
                    .card--featured { /* Modifier */ }
                    <br>
                    .card__button--disabled { /* Element with Modifier */ }
                  </code>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is CSS Specificity and how is it calculated?',
      answer: `<ol>
                <li>
                  CSS specificity determines which CSS rule is applied when multiple rules target
                  the same element.
                </li>
                <li>
                  <b>Specificity hierarchy (from highest to lowest):</b>
                  <ol>
                    <li>Inline styles (style attribute) - 1000 points</li>
                    <li>IDs - 100 points each</li>
                    <li>Classes, attributes, pseudo-classes - 10 points each</li>
                    <li>Elements and pseudo-elements - 1 point each</li>
                  </ol>
                </li>
                <li>
                  <b>Examples:</b>
                  <ul>
                    <li>div p { } = 0,0,0,2 (2 points)</li>
                    <li>.nav ul li { } = 0,0,1,2 (12 points)</li>
                    <li>#header .nav li { } = 0,1,1,1 (111 points)</li>
                    <li>style="color: red;" = 1,0,0,0 (1000 points)</li>
                  </ul>
                </li>
                <li>
                  <b>!important</b>
                  overrides specificity but should be used sparingly as it makes CSS harder to
                  maintain.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is CSS Stacking Context?',
      answer: `<ol>
                <li>
                  A stacking context is a three-dimensional conceptualization of HTML elements along
                  an imaginary z-axis relative to the user.
                </li>
                <li>
                  <b>Elements that create a new stacking context:</b>
                  <ul>
                    <li>Root element (html)</li>
                    <li>Elements with position: absolute/relative and z-index other than auto</li>
                    <li>Elements with position: fixed or sticky</li>
                    <li>Elements with opacity less than 1</li>
                    <li>
                      Elements with transform, filter, perspective, clip-path, mask properties
                    </li>
                    <li>Elements with isolation: isolate</li>
                    <li>Flex/Grid items with z-index other than auto</li>
                  </ul>
                </li>
                <li>
                  <b>Stacking order within a context:</b>
                  <ol>
                    <li>Background and borders of the root element</li>
                    <li>Descendant non-positioned blocks (in order of appearance)</li>
                    <li>Descendant positioned elements (in order of appearance)</li>
                  </ol>
                </li>
                <li>
                  Understanding stacking context helps debug z-index issues and layering problems.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is the will-change property and when should you use it?',
      answer: `<ol>
                <li>
                  The
                  <b>will-change</b>
                  property hints to browsers about what kind of changes to expect on an element, so
                  they can set up appropriate optimizations.
                </li>
                <li>
                  <b>Common values:</b>
                  <ul>
                    <li>auto (default)</li>
                    <li>scroll-position</li>
                    <li>contents</li>
                    <li>transform</li>
                    <li>opacity</li>
                    <li>left, top, etc.</li>
                  </ul>
                </li>
                <li>
                  <b>When to use:</b>
                  <ul>
                    <li>Before starting animations or transitions</li>
                    <li>For elements that will be frequently updated</li>
                    <li>To optimize performance-critical animations</li>
                  </ul>
                </li>
                <li>
                  <b>Best practices:</b>
                  <ul>
                    <li>Remove will-change after the change is complete</li>
                    <li>Don't apply to too many elements (memory overhead)</li>
                    <li>Use specific properties rather than 'auto'</li>
                  </ul>
                </li>
                <li>
                  <b>Example:</b>
                  <code class="d-block">
                    .element {
                    <br>
                    &nbsp;&nbsp;will-change: transform;
                    <br>
                    }
                    <br>
                    <br>
                    /* After animation completes */
                    <br>
                    .element {
                    <br>
                    &nbsp;&nbsp;will-change: auto;
                    <br>
                    }
                  </code>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What are CSS Transforms and how do they differ from changing position properties?',
      answer: `<ol>
                <li>
                  CSS transforms allow you to rotate, scale, skew, or translate elements without
                  affecting the document flow.
                </li>
                <li>
                  <b>Transform functions:</b>
                  <ul>
                    <li>translate() - moves element</li>
                    <li>rotate() - rotates element</li>
                    <li>scale() - resizes element</li>
                    <li>skew() - skews element</li>
                    <li>matrix() - combines all transformations</li>
                  </ul>
                </li>
                <li>
                  <b>Differences from position changes:</b>
                  <table class="table table-striped table-bordered mt-2">
                    <thead>
                      <tr>
                        <th>CSS Transforms</th>
                        <th>Position Properties</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Don't affect document flow</td>
                        <td>Can affect document flow</td>
                      </tr>
                      <tr>
                        <td>Hardware accelerated (GPU)</td>
                        <td>CPU-based rendering</td>
                      </tr>
                      <tr>
                        <td>Better performance for animations</td>
                        <td>Can cause layout recalculations</td>
                      </tr>
                      <tr>
                        <td>Don't trigger layout/reflow</td>
                        <td>May trigger layout/reflow</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <b>Example:</b>
                  <code class="d-block">
                    .element {
                    <br>
                    &nbsp;&nbsp;transform: translateX(100px) rotate(45deg) scale(1.2);
                    <br>
                    &nbsp;&nbsp;transform-origin: center center;
                    <br>
                    }
                  </code>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is Critical CSS and why is it important for performance?',
      answer: `<ol>
                <li>
                  <b>Critical CSS</b>
                  refers to the minimum CSS required to render the above-the-fold content of a
                  webpage.
                </li>
                <li>
                  <b>Purpose:</b>
                  <ul>
                    <li>Eliminate render-blocking CSS</li>
                    <li>Improve First Contentful Paint (FCP)</li>
                    <li>Reduce time to interactive</li>
                    <li>Better user experience on slow connections</li>
                  </ul>
                </li>
                <li>
                  <b>Implementation strategies:</b>
                  <ul>
                    <li>Inline critical CSS in the HTML head</li>
                    <li>Load non-critical CSS asynchronously</li>
                    <li>Use tools like Critical, Penthouse, or PurgeCSS</li>
                    <li>Implement CSS splitting in build process</li>
                  </ul>
                </li>
                <li>
                  <b>Example implementation:</b>
                  <code class="d-block">
                    &lt;head&gt;
                    <br>
                    &nbsp;&nbsp;&lt;style&gt;
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;/* Critical CSS inlined here */
                    <br>
                    &nbsp;&nbsp;&lt;/style&gt;
                    <br>
                    &nbsp;&nbsp;&lt;link rel="preload" href="non-critical.css" as="style"
                    onload="this.onload=null;this.rel='stylesheet'"&gt;
                    <br>
                    &lt;/head&gt;
                  </code>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is CSS Containment and how does it improve performance?',
      answer: `<ol>
                <li>
                  CSS Containment allows developers to isolate parts of the page from the rest,
                  enabling browsers to optimize rendering.
                </li>
                <li>
                  <b>Contain property values:</b>
                  <ul>
                    <li>
                      <b>layout:</b>
                      Element's internal layout doesn't affect external elements
                    </li>
                    <li>
                      <b>paint:</b>
                      Element's descendants can't be painted outside its bounds
                    </li>
                    <li>
                      <b>size:</b>
                      Element's size doesn't depend on its descendants
                    </li>
                    <li>
                      <b>style:</b>
                      Properties that affect more than the element don't escape
                    </li>
                    <li>
                      <b>strict:</b>
                      Equivalent to 'layout paint size'
                    </li>
                    <li>
                      <b>content:</b>
                      Equivalent to 'layout paint style'
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Performance benefits:</b>
                  <ul>
                    <li>Reduces layout calculations</li>
                    <li>Enables better browser optimizations</li>
                    <li>Improves rendering performance for large pages</li>
                    <li>Useful for virtualized lists and infinite scroll</li>
                  </ul>
                </li>
                <li>
                  <b>Example:</b>
                  <code class="d-block">
                    .card {
                    <br>
                    &nbsp;&nbsp;contain: layout style paint;
                    <br>
                    }
                    <br>
                    <br>
                    .infinite-list-item {
                    <br>
                    &nbsp;&nbsp;contain: strict;
                    <br>
                    }
                  </code>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What are CSS Logical Properties and why are they important?',
      answer: `<ol>
                <li>
                  CSS Logical Properties provide the ability to control layout through logical,
                  rather than physical, direction and dimension mappings.
                </li>
                <li>
                  <b>Physical vs Logical properties:</b>
                  <table class="table table-striped table-bordered mt-2">
                    <thead>
                      <tr>
                        <th>Physical</th>
                        <th>Logical</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>margin-left</td>
                        <td>margin-inline-start</td>
                      </tr>
                      <tr>
                        <td>margin-right</td>
                        <td>margin-inline-end</td>
                      </tr>
                      <tr>
                        <td>margin-top</td>
                        <td>margin-block-start</td>
                      </tr>
                      <tr>
                        <td>margin-bottom</td>
                        <td>margin-block-end</td>
                      </tr>
                      <tr>
                        <td>width</td>
                        <td>inline-size</td>
                      </tr>
                      <tr>
                        <td>height</td>
                        <td>block-size</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <b>Benefits:</b>
                  <ul>
                    <li>Better support for internationalization (RTL languages)</li>
                    <li>Writing mode independence</li>
                    <li>More semantic and maintainable code</li>
                    <li>Automatic adaptation to different text directions</li>
                  </ul>
                </li>
                <li>
                  <b>Example:</b>
                  <code class="d-block">
                    .card {
                    <br>
                    &nbsp;&nbsp;margin-inline: 1rem; /* left and right in LTR, right and left in RTL
                    */
                    <br>
                    &nbsp;&nbsp;padding-block: 0.5rem; /* top and bottom */
                    <br>
                    &nbsp;&nbsp;border-inline-start: 2px solid blue;
                    <br>
                    }
                  </code>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'CSS'
      ]
    },
    {
      question: 'What is the difference between CSS Transitions and Animations?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">CSS Transitions</th>
                    <th scope="col">CSS Animations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Triggered by state changes (hover, focus, etc.)</td>
                    <td>Can run automatically without triggers</td>
                  </tr>
                  <tr>
                    <td>Simple A to B animations</td>
                    <td>Complex multi-step animations with keyframes</td>
                  </tr>
                  <tr>
                    <td>Cannot loop (except with JavaScript)</td>
                    <td>Built-in looping and iteration control</td>
                  </tr>
                  <tr>
                    <td>Limited to 2 states (start and end)</td>
                    <td>Multiple intermediate states via keyframes</td>
                  </tr>
                  <tr>
                    <td>Better for UI interactions</td>
                    <td>Better for complex motion graphics</td>
                  </tr>
                  <tr>
                    <td>
                      <code>
                        .button {
                        <br>
                        &nbsp;&nbsp;transition: background-color 0.3s ease;
                        <br>
                        }
                        <br>
                        .button:hover {
                        <br>
                        &nbsp;&nbsp;background-color: blue;
                        <br>
                        }
                      </code>
                    </td>
                    <td>
                      <code>
                        @keyframes slideIn {
                        <br>
                        &nbsp;&nbsp;0% { transform: translateX(-100%); }
                        <br>
                        &nbsp;&nbsp;100% { transform: translateX(0); }
                        <br>
                        }
                        <br>
                        .element {
                        <br>
                        &nbsp;&nbsp;animation: slideIn 0.5s ease-in-out;
                        <br>
                        }
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'CSS'
      ]
    }
  ]
};
