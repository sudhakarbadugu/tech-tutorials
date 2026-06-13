// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.487Z

export const htmlQuestions = {
  "questions": [
    {
      "question": "What is a tag?",
      "answer": "<ol>\n                <li>A tag is an element which is defined using the angle (&lt;&gt;) brackets.</li>\n                <li>\n                  <code>&lt;span&gt;&lt;/span&gt;</code>\n                  Here span is a tag. span is defined in between the angle brackets.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "A tag is an element which is defined using the angle (<>) brackets.",
        "Here span is a tag. span is defined in between the angle brackets."
      ]
    },
    {
      "question": "What are empty tags? or Tell me some tags with no ending tags?",
      "answer": "<ol>\n                <li>Tags which don't have the ending tags are called empty tags or void tags.</li>\n                <li>\n                  The below are some of the tags with no ending tags:\n                  <ul>\n                    <li><code>&lt;br&gt;</code></li>\n                    <li><code>&lt;hr&gt;</code></li>\n                    <li><code>&lt;img&gt;</code></li>\n                    <li><code>&lt;input&gt;</code></li>\n                    <li><code>&lt;link&gt;</code></li>\n                    <li><code>&lt;meta&gt;</code></li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Tags which don't have the ending tags are called empty tags or void tags.",
        "The below are some of the tags with no ending tags:"
      ]
    },
    {
      "question": "What is DOCTYPE in html or how to change the html version?",
      "answer": "<ol>\n                <li>\n                  <code>&lt;!DOCTYPE html&gt;</code>\n                  declaration defines that this document is a HTML5 document\n                </li>\n                <li>By default DOCTYPE html means, browser will use the latest HTML version.</li>\n                <li>\n                  We can change the HTML version in the DOCTYPE tag as given below by using the dtd\n                  url\n                  <br>\n                  <code>\n                    &lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n                    \"http://www.w3.org/TR/html4/strict.dtd\"&gt;\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "declaration defines that this document is a HTML5 document",
        "By default DOCTYPE html means, browser will use the latest HTML version.",
        "We can change the HTML version in the DOCTYPE tag as given below by using the dtd url"
      ]
    },
    {
      "question": "What is meta tag? What is the use of it?",
      "answer": "<ol>\n                <li>\n                  The &lt;meta&gt; tag provides metadata about the HTML document that is not\n                  displayed on the page but is used by browsers, search engines, and other web\n                  services.\n                </li>\n                <li>\n                  &lt;meta&gt; tags always go inside the &lt;head&gt; element and are self-closing.\n                </li>\n                <li>\n                  <b>SEO Meta Tags:</b>\n                  <code class=\"d-block\">\n                    &lt;meta name=\"description\" content=\"My site providing web solutions.\"&gt;\n                    \n\n                    &lt;meta name=\"keywords\" content=\"web development, training, software\"&gt;\n                    \n\n                    &lt;meta name=\"author\" content=\"My Company\"&gt;\n                  </code>\n                </li>\n                <li>\n                  <b>Viewport Meta Tag (Responsive Design):</b>\n                  <code class=\"d-block\">\n                    &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n                  </code>\n                </li>\n                <li>\n                  <b>Character Encoding:</b>\n                  <code class=\"d-block\">&lt;meta charset=\"UTF-8\"&gt;</code>\n                </li>\n                <li>\n                  <b>Social Media Meta Tags (Open Graph):</b>\n                  <code class=\"d-block\">\n                    &lt;meta property=\"og:title\" content=\"Page Title\"&gt;\n                    \n\n                    &lt;meta property=\"og:description\" content=\"Page description\"&gt;\n                    \n\n                    &lt;meta property=\"og:image\" content=\"image-url.jpg\"&gt;\n                  </code>\n                </li>\n                <li>\n                  <b>HTTP Equivalent Meta Tags:</b>\n                  <code class=\"d-block\">\n                    &lt;meta http-equiv=\"refresh\" content=\"30\"&gt;\n                    \n\n                    &lt;meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"&gt;\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "The tag provides metadata about the HTML document that is not displayed on the page but is used by browsers, search engines, and other web services.",
        "tags always go inside the element and are self-closing.",
        "Viewport Meta Tag (Responsive Design):"
      ]
    },
    {
      "question": "What is datalist tag and how does it enhance user experience?",
      "answer": "<ol>\n                <li>\n                  The\n                  <code>&lt;datalist&gt;</code>\n                  element provides a list of predefined options for an\n                  <code>&lt;input&gt;</code>\n                  element, creating an autocomplete dropdown that enhances user experience.\n                </li>\n                <li>\n                  <b>Key Benefits:</b>\n                  <ul>\n                    <li>Improves form usability with suggestions</li>\n                    <li>Reduces typos and input errors</li>\n                    <li>Allows custom input while providing suggestions</li>\n                    <li>Native browser implementation (no JavaScript required)</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Implementation:</b>\n                  The datalist's\n                  <code>id</code>\n                  attribute must match the input's\n                  <code>list</code>\n                  attribute.\n                </li>\n                <li>\n                  <b>Browser Autocomplete Example:</b>\n                  <pre><code>&lt;label for=\"browser\"&gt;Choose your browser:&lt;/label&gt;\n&lt;input list=\"browsers\" name=\"browser\" id=\"browser\" placeholder=\"Type to search...\"&gt;\n\n&lt;datalist id=\"browsers\"&gt;\n  &lt;option value=\"Chrome\"&gt;Google Chrome&lt;/option&gt;\n  &lt;option value=\"Firefox\"&gt;Mozilla Firefox&lt;/option&gt;\n  &lt;option value=\"Safari\"&gt;Apple Safari&lt;/option&gt;\n  &lt;option value=\"Edge\"&gt;Microsoft Edge&lt;/option&gt;\n  &lt;option value=\"Opera\"&gt;Opera Browser&lt;/option&gt;\n&lt;/datalist&gt;</code></pre>\n                </li>\n                <li>\n                  <b>Practical Use Cases:</b>\n                  <ul>\n                    <li>Country/city selection</li>\n                    <li>Product search with suggestions</li>\n                    <li>Email domain suggestions</li>\n                    <li>Tag input with predefined options</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Fallback:</b>\n                  In unsupported browsers, functions as a regular input field\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "The element provides a list of predefined options for an element, creating an autocomplete dropdown that enhances user experience.",
        "Key Benefits: Improves form usability with suggestions",
        "Reduces typos and input errors"
      ]
    },
    {
      "question": "What is a block-level element?",
      "answer": "<ol>\n                <li>Block-level elements always start on a new line.</li>\n                <li>They occupy the full width available.</li>\n                <li>Top and bottom margins apply.</li>\n                <li>The next element appears below it.</li>\n                <li>Width and height can be set.</li>\n                <li>Examples of block-level elements:</li>\n                <code>\n                  &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;\n                  \n\n                  &lt;p&gt;\n                  \n\n                  &lt;div&gt;\n                  \n\n                  &lt;ol&gt;, &lt;ul&gt;, &lt;dl&gt;, &lt;li&gt;\n                  \n\n                </code>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Block-level elements always start on a new line.",
        "They occupy the full width available.",
        "Top and bottom margins apply."
      ]
    },
    {
      "question": "What is an inline-level element?",
      "answer": "<ol>\n                <li>Inline elements always start on the same line.</li>\n                <li>They occupy only the required width.</li>\n                <li>Top and bottom margins do not apply.</li>\n                <li>The next element appears on the same line.</li>\n                <li>Width and height cannot be set.</li>\n                <li>Examples of inline-level elements:</li>\n                <code>\n                  &lt;a&gt;\n                  \n\n                  &lt;button&gt;\n                  \n\n                  &lt;span&gt;\n                  \n\n                  &lt;label&gt;\n                  \n\n                </code>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Inline elements always start on the same line.",
        "They occupy only the required width.",
        "Top and bottom margins do not apply."
      ]
    },
    {
      "question": "What are Semantic and Non-Semantic elements?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Semantic Elements</th>\n                    <th scope=\"col\">Non-Semantic Elements</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      A semantic element clearly describes its meaning to both the browser and the\n                      developer, making the code more readable and accessible.\n                    </td>\n                    <td>A non-semantic element tells nothing about its content or purpose.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <b>Examples:</b>\n                      &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;,\n                      &lt;section&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;form&gt;,\n                      &lt;table&gt;, &lt;figure&gt;, &lt;figcaption&gt;, &lt;time&gt;,\n                      &lt;mark&gt;\n                    </td>\n                    <td>\n                      <b>Examples:</b>\n                      &lt;div&gt;, &lt;span&gt; - Generic containers that don't convey meaning\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <b>Benefits:</b>\n                      <ul>\n                        <li>Better SEO ranking</li>\n                        <li>Improved accessibility for screen readers</li>\n                        <li>Easier maintenance and debugging</li>\n                        <li>Better code structure and readability</li>\n                      </ul>\n                    </td>\n                    <td>\n                      <b>Use cases:</b>\n                      <ul>\n                        <li>Styling purposes with CSS</li>\n                        <li>JavaScript manipulation</li>\n                        <li>Layout containers without semantic meaning</li>\n                      </ul>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Improved accessibility for screen readers",
        "Easier maintenance and debugging",
        "Better code structure and readability"
      ]
    },
    {
      "question": "Inline Vs Block elements ?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Inline</th>\n                    <th>Inline-block</th>\n                    <th>Block</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Inline elements will occupy only required width.</td>\n                    <td>Inline-block elements will occupy only required width.</td>\n                    <td>\n                      The block elements always start on a new line. They will also take space of an\n                      entire row or width.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Examples\n                      <code>span</code>\n                    </td>\n                    <td>It has no tag examples as it can be applied to any tag using CSS.</td>\n                    <td>\n                      Examples:\n                      <code>div, p, li, main</code>\n                      etc.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      CSS property:\n                      <code>display:inline</code>\n                    </td>\n                    <td>\n                      CSS property:\n                      <code>display:inline-block</code>\n                    </td>\n                    <td>\n                      CSS property:\n                      <code>display:block</code>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>width, height, top and bottom margins & paddings are not respected.</td>\n                    <td>width, height, top and bottom margins & paddings are respected.</td>\n                    <td>width, height, top and bottom margins & paddings are respected.</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Inline Inline-block Block Inline elements will occupy only required width.",
        "Inline-block elements will occupy only required width."
      ]
    },
    {
      "question": "What are the new features and semantic tags introduced in HTML5?",
      "answer": "<ol>\n                <li>\n                  HTML5 introduces semantic elements, multimedia support, enhanced forms, and modern\n                  APIs for building interactive web applications.\n                </li>\n                <li>\n                  <b>Semantic HTML5 Elements:</b>\n                  <ul>\n                    <li>\n                      <code>&lt;header&gt;</code>\n                      - Page/section header\n                    </li>\n                    <li>\n                      <code>&lt;nav&gt;</code>\n                      - Navigation links\n                    </li>\n                    <li>\n                      <code>&lt;main&gt;</code>\n                      - Main content area\n                    </li>\n                    <li>\n                      <code>&lt;article&gt;</code>\n                      - Standalone content\n                    </li>\n                    <li>\n                      <code>&lt;section&gt;</code>\n                      - Thematic grouping\n                    </li>\n                    <li>\n                      <code>&lt;aside&gt;</code>\n                      - Sidebar content\n                    </li>\n                    <li>\n                      <code>&lt;footer&gt;</code>\n                      - Page/section footer\n                    </li>\n                    <li>\n                      <code>&lt;figure&gt;</code>\n                      &\n                      <code>&lt;figcaption&gt;</code>\n                      - Media with captions\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Multimedia Elements:</b>\n                  <ul>\n                    <li>\n                      <code>&lt;video&gt;</code>\n                      with controls, autoplay, loop attributes\n                    </li>\n                    <li>\n                      <code>&lt;audio&gt;</code>\n                      for sound content\n                    </li>\n                    <li>\n                      <code>&lt;canvas&gt;</code>\n                      for 2D/3D graphics\n                    </li>\n                    <li>\n                      <code>&lt;svg&gt;</code>\n                      for scalable vector graphics\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Enhanced Form Elements:</b>\n                  <ul>\n                    <li>Input types: email, url, tel, number, date, color, range</li>\n                    <li>Attributes: required, pattern, placeholder, autofocus</li>\n                    <li>\n                      <code>&lt;datalist&gt;</code>\n                      for autocomplete options\n                    </li>\n                    <li>\n                      <code>&lt;output&gt;</code>\n                      for calculation results\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Interactive Elements:</b>\n                  <ul>\n                    <li>\n                      <code>&lt;details&gt;</code>\n                      &\n                      <code>&lt;summary&gt;</code>\n                      - Collapsible content\n                    </li>\n                    <li>\n                      <code>&lt;dialog&gt;</code>\n                      - Modal dialogs\n                    </li>\n                    <li>\n                      <code>&lt;progress&gt;</code>\n                      &\n                      <code>&lt;meter&gt;</code>\n                      - Progress indicators\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>New APIs:</b>\n                  Geolocation, Web Storage, Web Workers, WebSockets, Drag & Drop\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "HTML5 introduces semantic elements, multimedia support, enhanced forms, and modern APIs for building interactive web applications.",
        "Semantic HTML5 Elements: - Page/section header",
        "Multimedia Elements: with controls, autoplay, loop attributes"
      ]
    },
    {
      "question": "What is iframe?",
      "answer": "<ol>\n                <li>An HTML iframe is used to display a web page within a web page.</li>\n                <li>\n                  <code>iframe src=\"url\" title=\"description\"</code>\n                </li>\n                <li>\n                  In our project, we are using the iframes to display the Youtube videos in our\n                  site.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "An HTML iframe is used to display a web page within a web page.",
        "iframe src=\"url\" title=\"description\"",
        "In our project, we are using the iframes to display the Youtube videos in our site."
      ]
    },
    {
      "question": "What is Canvas and when should you use it?",
      "answer": "<ol>\n                <li>\n                  The HTML\n                  <code>&lt;canvas&gt;</code>\n                  element provides a 2D drawing surface that can be manipulated using JavaScript for\n                  creating graphics, animations, and interactive visualizations.\n                </li>\n                <li>\n                  <b>Key Features:</b>\n                  <ul>\n                    <li>Bitmap-based (raster) graphics</li>\n                    <li>Immediate mode rendering</li>\n                    <li>Pixel manipulation capabilities</li>\n                    <li>Event handling through coordinates</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Common Use Cases:</b>\n                  <ul>\n                    <li>Data visualizations and charts</li>\n                    <li>Image editing and filters</li>\n                    <li>Game development</li>\n                    <li>Real-time graphics and animations</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Basic Example:</b>\n                  <pre><code>&lt;canvas id=\"myCanvas\" width=\"200\" height=\"100\"&gt;&lt;/canvas&gt;\n&lt;script&gt;\n  const canvas = document.getElementById('myCanvas');\n  const ctx = canvas.getContext('2d');\n  ctx.fillStyle = '#FF0000';\n  ctx.fillRect(0, 0, 150, 75);\n&lt;/script&gt;</code></pre>\n                </li>\n                <li>\n                  <b>Performance:</b>\n                  Better for complex scenes with many objects, but not scalable like SVG\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "The HTML element provides a 2D drawing surface that can be manipulated using JavaScript for creating graphics, animations, and interactive visualizations.",
        "Key Features: Bitmap-based (raster) graphics",
        "Pixel manipulation capabilities"
      ]
    },
    {
      "question": "What is SVG and how does it differ from Canvas?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Feature</th>\n                    <th scope=\"col\">SVG</th>\n                    <th scope=\"col\">Canvas</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><b>Type</b></td>\n                    <td>Vector-based graphics</td>\n                    <td>Raster/bitmap-based graphics</td>\n                  </tr>\n                  <tr>\n                    <td><b>DOM Integration</b></td>\n                    <td>Part of DOM, each element is individually accessible</td>\n                    <td>Single DOM element, content is not individually accessible</td>\n                  </tr>\n                  <tr>\n                    <td><b>Scalability</b></td>\n                    <td>Infinitely scalable without quality loss</td>\n                    <td>Fixed resolution, pixelated when scaled</td>\n                  </tr>\n                  <tr>\n                    <td><b>Event Handling</b></td>\n                    <td>Events on individual elements</td>\n                    <td>Events on canvas element, coordinates required</td>\n                  </tr>\n                  <tr>\n                    <td><b>Performance</b></td>\n                    <td>Better for simple graphics, slower with many elements</td>\n                    <td>Better for complex scenes and animations</td>\n                  </tr>\n                  <tr>\n                    <td><b>Styling</b></td>\n                    <td>CSS styling supported</td>\n                    <td>Styling through JavaScript API</td>\n                  </tr>\n                  <tr>\n                    <td><b>Use Cases</b></td>\n                    <td>Icons, logos, simple animations, illustrations</td>\n                    <td>Games, image editing, complex visualizations</td>\n                  </tr>\n                </tbody>\n              </table>\n              <ol>\n                <li>\n                  <b>SVG Example:</b>\n                  <pre><code>&lt;svg width=\"100\" height=\"100\"&gt;\n  &lt;circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"green\" stroke-width=\"4\" fill=\"yellow\" /&gt;\n&lt;/svg&gt;</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Feature SVG Canvas Type Vector-based graphics Raster/bitmap-based graphics DOM Integration Part of DOM, each element is individually accessible Single DOM element, content is not individually accessib"
      ]
    },
    {
      "question": "Attribute vs Property",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Attribute</th>\n                    <th scope=\"col\">Property</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <ol>\n                        <li>Attributes provide additional information about elements/tags</li>\n                        <li>Attributes are always specified in the start tag</li>\n                        <li>Attributes usually come in name/value pairs like: name=\"value\"</li>\n                        <li>\n                          Attribute values must be written inside the double quotes or single\n                          quotes.\n                        </li>\n                      </ol>\n                    </td>\n                    <td>\n                      <ol>\n                        <li>JavaScript object will have properties and methods.</li>\n                        <li>Each property will hold the value</li>\n                      </ol>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <code>&lt;a href=\"login.html\" target=\"_blank\"&gt;Login&lt;/a&gt;</code>\n                      <br>\n                      Here\n                      <b>href</b>\n                      and\n                      <b>target</b>\n                      are the attributes\n                    </td>\n                    <td>ex: { key: 'some value' } => here key is property</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Attributes provide additional information about elements/tags",
        "Attributes are always specified in the start tag",
        "Attributes usually come in name/value pairs like: name=\"value\""
      ]
    },
    {
      "question": "What is meant by idempotent in HTTP and where does it apply?",
      "answer": "<ol>\n                <li>\n                  <strong>Idempotent</strong> means the same request produces the same result\n                  regardless of how many times you call it. The server state is the same after\n                  1 call or 100 calls.\n                </li>\n                <li>\n                  <b>Idempotent HTTP Methods:</b>\n                  <ul>\n                    <li><code>GET</code> — Retrieve a resource (idempotent: multiple calls return same data)</li>\n                    <li><code>HEAD</code> — Same as GET but headers only (idempotent)</li>\n                    <li><code>PUT</code> — Replace a resource at a specific URI (idempotent: same result on repeat)</li>\n                    <li><code>DELETE</code> — Remove a resource (idempotent: deleting twice has same effect as once)</li>\n                    <li><code>OPTIONS</code> — Describe communication options (idempotent)</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Non-Idempotent HTTP Methods:</b>\n                  <ul>\n                    <li><code>POST</code> — Create a new resource (NOT idempotent: each call creates new resource)</li>\n                    <li><code>PATCH</code> — Apply partial modifications (NOT idempotent: depends on current state)</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Why it matters in HTML forms:</b>\n                  <ul>\n                    <li>Browsers can safely retry <code>GET</code> requests if a user clicks back/forward</li>\n                    <li><code>POST</code> requests may show a \"resubmit form?\" dialog because they create resources</li>\n                    <li>Idempotency keys help APIs safely retry <code>POST</code> requests (e.g., payment processing)</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Real-world example:</b>\n                  A <code>DELETE /users/123</code> call removes user 123. Calling it 10 times still\n                  results in \"user 123 doesn't exist\" — the end state is the same, so it's idempotent.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "HTML",
        "HTTP",
        "Forms"
      ],
      "keyPoints": [
        "Idempotent means the same request produces the same result regardless of how many times you call it. The server state is the same after 1 call or 100 calls.",
        "Idempotent HTTP Methods: GET — Retrieve a resource (idempotent: multiple calls return same data)",
        "HEAD — Same as GET but headers only (idempotent)"
      ]
    },
    {
      "question": "What is HTTP and HTTPS?",
      "answer": "<div class=\"text-primary font-weight-bold\">HTTP</div>\n              <ol>\n                <li>HTTP stands for Hyper Text Transfer Protocol.</li>\n                <li>HTTP is the protocol used to transfer data over the web.</li>\n                <li>\n                  It is an application layer protocol. It is the protocol over which information is\n                  sent from a user’s web browser to the server.\n                </li>\n              </ol>\n\n              <div class=\"text-primary font-weight-bold\">HTTPS</div>\n              <ol>\n                <li>HTTPS stands for Hyper Text Transfer Protocol Secure</li>\n                <li>It is used for secure communication over a computer network.</li>\n              </ol>\n\n              <div>\n                In the HTTP protocol mainly we have the methods to communicate with the server.\n              </div>\n              <ol>\n                <li>\n                  <b>GET</b>\n                  :- To get the data from server\n                </li>\n                <li>\n                  <b>POST</b>\n                  :- To save data to the server\n                </li>\n                <li>\n                  <b>PUT</b>\n                  :- To update data to the server\n                </li>\n                <li>\n                  <b>DELETE</b>\n                  :- To delete the data from server\n                </li>\n                <li>\n                  <b>PATCH</b>\n                  :- To update the partial data to the server\n                </li>\n                <li>TRACE</li>\n                <li>HEAD</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "HTTP stands for Hyper Text Transfer Protocol.",
        "HTTP is the protocol used to transfer data over the web.",
        "It is an application layer protocol. It is the protocol over which information is sent from a user’s web browser to the server."
      ]
    },
    {
      "question": "What are the differences between GET and POST?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">GET</th>\n                    <th scope=\"col\">POST</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>GET request will send the data through the browser url</td>\n                    <td>POST request will send the data using body.</td>\n                  </tr>\n                  <tr>\n                    <td>GET request can send only up to the 2048 characters.</td>\n                    <td>\n                      Since POST request is sending data through body, it can send unlimited data to\n                      the server.\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td>Since data is sending through URL, GET request is not secure.</td>\n                    <td>Since POST request is sending data through body, it is secured.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      GET request should be used only for non secure use cases. Eg: Searching for\n                      content, we can use the GET type.\n                    </td>\n                    <td>POST should be used to send the form data to the server.</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "GET POST GET request will send the data through the browser url POST request will send the data using body.",
        "GET request can send only up to the 2048 characters."
      ]
    },
    {
      "question": "Tell me important tags and attributes in HTML forms?",
      "answer": "<ol>\n                <li>\n                  <b><code>&lt;form&gt;</code></b>\n                  - Container for form elements to collect user input.\n                </li>\n                <li>\n                  <b>action attribute</b>\n                  - Defines the URL where form data is submitted.\n                </li>\n                <li>\n                  <b>method attribute</b>\n                  - HTTP method (GET/POST) for submitting form data.\n                </li>\n                <li>\n                  <b>Input Elements:</b>\n                  <ul>\n                    <li>\n                      <code>&lt;input type=\"text\" name=\"username\" required&gt;</code>\n                      - Text input with validation\n                    </li>\n                    <li>\n                      <code>&lt;input type=\"email\" name=\"email\"&gt;</code>\n                      - Email validation\n                    </li>\n                    <li>\n                      <code>&lt;input type=\"password\" name=\"pwd\"&gt;</code>\n                      - Password field\n                    </li>\n                    <li>\n                      <code>&lt;input type=\"number\" min=\"1\" max=\"100\"&gt;</code>\n                      - Number with range\n                    </li>\n                    <li>\n                      <code>&lt;input type=\"file\" accept=\"image/*\"&gt;</code>\n                      - File upload\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Form Controls:</b>\n                  <ul>\n                    <li>\n                      <code>&lt;textarea rows=\"4\" cols=\"50\"&gt;</code>\n                      - Multi-line text\n                    </li>\n                    <li>\n                      <code>&lt;select&gt;&lt;option&gt;</code>\n                      - Dropdown selection\n                    </li>\n                    <li>\n                      <code>&lt;button type=\"submit\"&gt;</code>\n                      - Submit button\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Accessibility & Labels:</b>\n                  <ul>\n                    <li>\n                      <code>&lt;label for=\"username\"&gt;</code>\n                      - Associates label with input\n                    </li>\n                    <li>\n                      <code>&lt;fieldset&gt;&lt;legend&gt;</code>\n                      - Groups related form elements\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>HTML5 Validation Attributes:</b>\n                  <ul>\n                    <li>\n                      <code>required</code>\n                      - Field must be filled\n                    </li>\n                    <li>\n                      <code>pattern=\"[A-Za-z]{3}\"</code>\n                      - Regex validation\n                    </li>\n                    <li>\n                      <code>minlength=\"6\" maxlength=\"20\"</code>\n                      - Length constraints\n                    </li>\n                    <li>\n                      <code>placeholder=\"Enter your name\"</code>\n                      - Hint text\n                    </li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "- Container for form elements to collect user input.",
        "action attribute - Defines the URL where form data is submitted.",
        "method attribute - HTTP method (GET/POST) for submitting form data."
      ]
    },
    {
      "question": "Difference of html and HTML5?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <tbody>\n                  <tr>\n                    <th>HTML</th>\n                    <th>HTML5</th>\n                  </tr>\n                  <tr>\n                    <td>\n                      Hypertext Markup Language is an acronym for HTML, which is a primary language\n                      for developing web pages.\n                    </td>\n                    <td>\n                      HTML5 is the new version of HTML, which has new functionalities with Markup\n                      language as the core technology to interact with internet technologies for\n                      structuring and presenting the content.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>HTML doesn’t have support for video and audio in the language</td>\n                    <td>\n                      HTML5 has the support for video and audio as they are integrated into it.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      HTML has the support of tracking users location who are visiting the site, but\n                      the process is cumbersome and difficult to find the users location when logged\n                      from mobile devices.\n                    </td>\n                    <td>\n                      HTML5 has using JavaScript Geolocation API, which can be used to identify the\n                      location of any user who is accessing the website.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>HTML uses browser cache memory as temporary storage</td>\n                    <td>\n                      HTML5 has multiple storage options such as application cache, SQL database,\n                      and web storage. We can JavaScript in the background with the help of JS API\n                      available in HTML5 for storing\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      In HTML, Communication between client and server was done through streaming\n                      and long pooling as it doesn’t have socket support.\n                    </td>\n                    <td>\n                      In HTML5, it has support for web sockets which allows full-duplex\n                      communication between client and server.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      HTML is compatible with almost all browsers as it exists for a long time, and\n                      browsers did enough modification to support all features in HTML\n                    </td>\n                    <td>\n                      In HTML5, we have many new tags, elements and removed/modified few tags\n                      elements, so only a few browsers are fully compatible with HTML5 as of now.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      In HTML, Vector Graphics support is possible with the help of other tools such\n                      as Silverlight, Adobe Flash, VML etc.\n                    </td>\n                    <td>\n                      In HTML5, Vector Graphics is supported by default as it has canvas and SVG\n                      inbuilt.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      In HTML, the Browser interface with which the user interacts and JavaScript\n                      are running in the same thread, which will lead to performance issue.\n                    </td>\n                    <td>\n                      In HTML5, It has JavaScript web worker API, which allows JavaScript and\n                      Browser interface to run in different threads.\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "HTML HTML5 Hypertext Markup Language is an acronym for HTML, which is a primary language for developing web pages.",
        "HTML5 is the new version of HTML, which has new functionalities with Markup language as the core technology to interact with internet technologies for structuring and presenting the content."
      ]
    },
    {
      "question": "What is Web Accessibility and ARIA attributes?",
      "answer": "<ol>\n                <li>\n                  <b>Web Accessibility:</b>\n                  Ensures websites are usable by people with disabilities, including visual,\n                  auditory, motor, and cognitive impairments.\n                </li>\n                <li>\n                  <b>ARIA (Accessible Rich Internet Applications):</b>\n                  Provides semantic information about elements to assistive technologies.\n                </li>\n                <li>\n                  <b>Important ARIA Attributes:</b>\n                  <ul>\n                    <li>\n                      <code>aria-label=\"Close dialog\"</code>\n                      - Accessible name for elements\n                    </li>\n                    <li>\n                      <code>aria-describedby=\"help-text\"</code>\n                      - References descriptive text\n                    </li>\n                    <li>\n                      <code>aria-expanded=\"false\"</code>\n                      - State of collapsible elements\n                    </li>\n                    <li>\n                      <code>aria-hidden=\"true\"</code>\n                      - Hides decorative elements from screen readers\n                    </li>\n                    <li>\n                      <code>role=\"button\"</code>\n                      - Defines element's purpose\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Semantic HTML for Accessibility:</b>\n                  <ul>\n                    <li>Use proper heading hierarchy (h1-h6)</li>\n                    <li>Associate labels with form inputs</li>\n                    <li>Provide alt text for images</li>\n                    <li>Use focus management and skip links</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Testing Tools:</b>\n                  WAVE, axe-core, Lighthouse accessibility audit\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Web Accessibility: Ensures websites are usable by people with disabilities, including visual, auditory, motor, and cognitive impairments.",
        "ARIA (Accessible Rich Internet Applications): Provides semantic information about elements to assistive technologies.",
        "Important ARIA Attributes: aria-label=\"Close dialog\" - Accessible name for elements"
      ]
    },
    {
      "question": "How do you optimize HTML for SEO?",
      "answer": "<ol>\n                <li>\n                  <b>Title Tag:</b>\n                  Unique, descriptive titles (50-60 characters)\n                  <code class=\"d-block\">\n                    &lt;title&gt;Best Web Development Training | My site&lt;/title&gt;\n                  </code>\n                </li>\n                <li>\n                  <b>Meta Description:</b>\n                  Compelling summaries (150-160 characters)\n                  <code class=\"d-block\">\n                    &lt;meta name=\"description\" content=\"Learn web development with expert\n                    trainers...\"&gt;\n                  </code>\n                </li>\n                <li>\n                  <b>Heading Structure:</b>\n                  Logical hierarchy with one H1 per page\n                  <code class=\"d-block\">\n                    &lt;h1&gt;Main Topic&lt;/h1&gt;&lt;h2&gt;Subtopic&lt;/h2&gt;\n                  </code>\n                </li>\n                <li>\n                  <b>Image Optimization:</b>\n                  <ul>\n                    <li>Descriptive alt attributes</li>\n                    <li>Optimized file sizes and modern formats (WebP)</li>\n                    <li>Responsive images with srcset</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Structured Data:</b>\n                  Schema.org markup for rich snippets\n                  <code class=\"d-block\">\n                    &lt;script type=\"application/ld+json\"&gt;...&lt;/script&gt;\n                  </code>\n                </li>\n                <li>\n                  <b>Internal Linking:</b>\n                  Meaningful anchor text and site structure\n                </li>\n                <li>\n                  <b>Page Speed:</b>\n                  Minimize HTML, compress images, use CDN\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Title Tag: Unique, descriptive titles (50-60 characters) Best Web Development Training | My site",
        "Meta Description: Compelling summaries (150-160 characters)",
        "Heading Structure: Logical hierarchy with one H1 per page Main Topic Subtopic"
      ]
    },
    {
      "question": "What are Progressive Web Apps (PWA) and their HTML requirements?",
      "answer": "<ol>\n                <li>\n                  <b>Progressive Web App:</b>\n                  Web applications that provide native app-like experience using modern web\n                  capabilities.\n                </li>\n                <li>\n                  <b>Web App Manifest:</b>\n                  <code class=\"d-block\">&lt;link rel=\"manifest\" href=\"/manifest.json\"&gt;</code>\n                  Defines app metadata, icons, and display options.\n                </li>\n                <li>\n                  <b>Service Worker Registration:</b>\n                  <pre><code>&lt;script&gt;\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js');\n}\n&lt;/script&gt;</code></pre>\n                </li>\n                <li>\n                  <b>Key PWA Features:</b>\n                  <ul>\n                    <li>Offline functionality</li>\n                    <li>Push notifications</li>\n                    <li>Add to home screen</li>\n                    <li>Background sync</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Meta Tags for PWA:</b>\n                  <code class=\"d-block\">\n                    &lt;meta name=\"theme-color\" content=\"#000000\"&gt;\n                    \n\n                    &lt;meta name=\"apple-mobile-web-app-capable\" content=\"yes\"&gt;\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Progressive Web App: Web applications that provide native app-like experience using modern web capabilities.",
        "Web App Manifest: Defines app metadata, icons, and display options.",
        "Service Worker Registration: if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js'); }"
      ]
    },
    {
      "question": "What are Web Components and Custom Elements?",
      "answer": "<ol>\n                <li>\n                  <b>Web Components:</b>\n                  Set of standards for creating reusable custom elements with encapsulated\n                  functionality.\n                </li>\n                <li>\n                  <b>Four Main Technologies:</b>\n                  <ul>\n                    <li>\n                      <b>Custom Elements:</b>\n                      Define new HTML elements\n                    </li>\n                    <li>\n                      <b>Shadow DOM:</b>\n                      Encapsulated DOM and styling\n                    </li>\n                    <li>\n                      <b>HTML Templates:</b>\n                      Reusable markup with &lt;template&gt;\n                    </li>\n                    <li>\n                      <b>ES Modules:</b>\n                      JavaScript module imports\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Custom Element Example:</b>\n                  <pre><code>&lt;script&gt;\nclass MyButton extends HTMLElement {\n  connectedCallback() {\n    this.innerHTML = '&lt;button&gt;Click me&lt;/button&gt;';\n  }\n}\ncustomElements.define('my-button', MyButton);\n&lt;/script&gt;\n&lt;my-button&gt;&lt;/my-button&gt;</code></pre>\n                </li>\n                <li>\n                  <b>Benefits:</b>\n                  <ul>\n                    <li>Reusable across frameworks</li>\n                    <li>Encapsulated styling and behavior</li>\n                    <li>Native browser support</li>\n                    <li>Framework-agnostic</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Web Components: Set of standards for creating reusable custom elements with encapsulated functionality.",
        "Four Main Technologies: Custom Elements: Define new HTML elements",
        "Shadow DOM: Encapsulated DOM and styling"
      ]
    },
    {
      "question": "What are HTML5 Web APIs and modern browser features?",
      "answer": "<ol>\n                <li>\n                  <b>Geolocation API:</b>\n                  <code class=\"d-block\">\n                    navigator.geolocation.getCurrentPosition(success, error);\n                  </code>\n                </li>\n                <li>\n                  <b>Local Storage & Session Storage:</b>\n                  <code class=\"d-block\">\n                    localStorage.setItem('key', 'value');\n                    \n\n                    sessionStorage.getItem('key');\n                  </code>\n                </li>\n                <li>\n                  <b>IndexedDB:</b>\n                  Client-side database for storing large amounts of structured data.\n                </li>\n                <li>\n                  <b>Web Workers:</b>\n                  Background JavaScript execution\n                  <code class=\"d-block\">const worker = new Worker('worker.js');</code>\n                </li>\n                <li>\n                  <b>Fetch API:</b>\n                  Modern alternative to XMLHttpRequest\n                  <code class=\"d-block\">\n                    fetch('/api/data').then(response =&gt; response.json())\n                  </code>\n                </li>\n                <li>\n                  <b>WebRTC:</b>\n                  Real-time communication (video/audio/data)\n                </li>\n                <li>\n                  <b>Notification API:</b>\n                  Browser notifications\n                  <code class=\"d-block\">\n                    new Notification('Hello!', { body: 'Message text' });\n                  </code>\n                </li>\n                <li>\n                  <b>Intersection Observer API:</b>\n                  Efficiently observe element visibility changes\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Geolocation API: navigator.geolocation.getCurrentPosition(success, error);",
        "Local Storage & Session Storage: localStorage.setItem('key', 'value'); sessionStorage.getItem('key');",
        "IndexedDB: Client-side database for storing large amounts of structured data."
      ]
    },
    {
      "question": "How do you optimize HTML performance?",
      "answer": "<ol>\n                <li>\n                  <b>Minimize HTML:</b>\n                  Remove whitespace, comments, and unnecessary attributes in production.\n                </li>\n                <li>\n                  <b>Resource Hints:</b>\n                  <ul>\n                    <li>\n                      <code>&lt;link rel=\"preload\" href=\"critical.css\" as=\"style\"&gt;</code>\n                      - Preload critical resources\n                    </li>\n                    <li>\n                      <code>&lt;link rel=\"prefetch\" href=\"next-page.html\"&gt;</code>\n                      - Prefetch future resources\n                    </li>\n                    <li>\n                      <code>&lt;link rel=\"dns-prefetch\" href=\"//example.com\"&gt;</code>\n                      - DNS resolution\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Critical CSS:</b>\n                  Inline critical styles and defer non-critical CSS\n                  <code class=\"d-block\">\n                    &lt;link rel=\"stylesheet\" href=\"styles.css\" media=\"print\"\n                    onload=\"this.media='all'\"&gt;\n                  </code>\n                </li>\n                <li>\n                  <b>Image Optimization:</b>\n                  <ul>\n                    <li>Use appropriate formats (WebP, AVIF)</li>\n                    <li>\n                      Implement lazy loading with\n                      <code>loading=\"lazy\"</code>\n                    </li>\n                    <li>Responsive images with srcset and sizes</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Script Optimization:</b>\n                  <ul>\n                    <li>\n                      <code>&lt;script defer&gt;</code>\n                      for non-critical scripts\n                    </li>\n                    <li>\n                      <code>&lt;script async&gt;</code>\n                      for independent scripts\n                    </li>\n                    <li>Place scripts at the end of body</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Reduce HTTP Requests:</b>\n                  Combine files, use CSS sprites, inline small assets\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Minimize HTML: Remove whitespace, comments, and unnecessary attributes in production.",
        "Resource Hints: - Preload critical resources",
        "- Prefetch future resources"
      ]
    },
    {
      "question": "What is the difference between Local Storage, Session Storage, and Cookies?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Feature</th>\n                    <th scope=\"col\">Local Storage</th>\n                    <th scope=\"col\">Session Storage</th>\n                    <th scope=\"col\">Cookies</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><b>Storage Limit</b></td>\n                    <td>5-10 MB</td>\n                    <td>5-10 MB</td>\n                    <td>4 KB</td>\n                  </tr>\n                  <tr>\n                    <td><b>Persistence</b></td>\n                    <td>Until manually cleared</td>\n                    <td>Until tab/window closes</td>\n                    <td>Until expiration date</td>\n                  </tr>\n                  <tr>\n                    <td><b>Server Access</b></td>\n                    <td>Client-side only</td>\n                    <td>Client-side only</td>\n                    <td>Sent with every HTTP request</td>\n                  </tr>\n                  <tr>\n                    <td><b>API</b></td>\n                    <td>localStorage.setItem(), getItem()</td>\n                    <td>sessionStorage.setItem(), getItem()</td>\n                    <td>document.cookie</td>\n                  </tr>\n                  <tr>\n                    <td><b>Use Cases</b></td>\n                    <td>User preferences, shopping cart</td>\n                    <td>Form data, temporary state</td>\n                    <td>Authentication, tracking</td>\n                  </tr>\n                  <tr>\n                    <td><b>Security</b></td>\n                    <td>Vulnerable to XSS</td>\n                    <td>Vulnerable to XSS</td>\n                    <td>Can be HttpOnly, Secure</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "setItem(), getItem() sessionStorage."
      ]
    },
    {
      "question": "What are Critical Rendering Path and Page Loading Optimization?",
      "answer": "<ol>\n                <li>\n                  <b>Critical Rendering Path:</b>\n                  Sequence of steps browser takes to render a page - DOM construction, CSSOM\n                  construction, render tree, layout, and paint.\n                </li>\n                <li>\n                  <b>Above-the-fold Content:</b>\n                  Prioritize loading content visible without scrolling\n                  <ul>\n                    <li>Inline critical CSS</li>\n                    <li>Defer non-critical resources</li>\n                    <li>Optimize images in viewport</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Resource Loading Strategies:</b>\n                  <ul>\n                    <li>\n                      <code>&lt;link rel=\"preload\"&gt;</code>\n                      - High priority resources\n                    </li>\n                    <li>\n                      <code>&lt;link rel=\"modulepreload\"&gt;</code>\n                      - ES modules\n                    </li>\n                    <li>\n                      <code>&lt;script type=\"module\"&gt;</code>\n                      - Modern JavaScript\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Performance Metrics:</b>\n                  <ul>\n                    <li>First Contentful Paint (FCP)</li>\n                    <li>Largest Contentful Paint (LCP)</li>\n                    <li>Cumulative Layout Shift (CLS)</li>\n                    <li>First Input Delay (FID)</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Tools:</b>\n                  Lighthouse, WebPageTest, Chrome DevTools Performance tab\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Critical Rendering Path: Sequence of steps browser takes to render a page - DOM construction, CSSOM construction, render tree, layout, and paint.",
        "Above-the-fold Content: Prioritize loading content visible without scrolling Inline critical CSS",
        "Defer non-critical resources"
      ]
    },
    {
      "question": "How do you handle Cross-Browser Compatibility and Feature Detection?",
      "answer": "<ol>\n                <li>\n                  <b>Feature Detection:</b>\n                  Check if browser supports specific features before using them\n                  <pre><code>if ('serviceWorker' in navigator) {\n  // Use service worker\n}\nif (CSS.supports('display', 'grid')) {\n  // Use CSS Grid\n}</code></pre>\n                </li>\n                <li>\n                  <b>Progressive Enhancement:</b>\n                  Start with basic functionality, add enhancements for capable browsers\n                </li>\n                <li>\n                  <b>Graceful Degradation:</b>\n                  Ensure core functionality works on older browsers\n                </li>\n                <li>\n                  <b>Polyfills and Fallbacks:</b>\n                  <ul>\n                    <li>Use polyfills for missing APIs</li>\n                    <li>Provide CSS fallbacks for newer properties</li>\n                    <li>Alternative image formats with &lt;picture&gt; element</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Testing Tools:</b>\n                  <ul>\n                    <li>BrowserStack, Sauce Labs for real browser testing</li>\n                    <li>Can I Use website for feature support</li>\n                    <li>Autoprefixer for CSS vendor prefixes</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Modern Approach:</b>\n                  Use @supports CSS rule and feature queries\n                  <pre><code>@supports (display: grid) {\n  .container { display: grid; }\n}</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Feature Detection: Check if browser supports specific features before using them if ('serviceWorker' in navigator) { // Use service worker } if (CSS.supports('display', 'grid')) { // Use CSS Grid }",
        "Progressive Enhancement: Start with basic functionality, add enhancements for capable browsers",
        "Graceful Degradation: Ensure core functionality works on older browsers"
      ]
    },
    {
      "question": "What are important HTML security considerations and best practices?",
      "answer": "<ol>\n                <li>\n                  <b>Content Security Policy (CSP):</b>\n                  HTTP header that prevents XSS attacks\n                  <code class=\"d-block\">\n                    &lt;meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self';\n                    script-src 'self'\"&gt;\n                  </code>\n                </li>\n                <li>\n                  <b>XSS Prevention:</b>\n                  <ul>\n                    <li>Always escape user input in HTML</li>\n                    <li>Use textContent instead of innerHTML for user data</li>\n                    <li>Validate and sanitize all inputs</li>\n                    <li>Set HttpOnly and Secure flags on cookies</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>HTTPS Enforcement:</b>\n                  <ul>\n                    <li>Use Strict-Transport-Security header</li>\n                    <li>\n                      Upgrade insecure requests:\n                      <code>\n                        &lt;meta http-equiv=\"Content-Security-Policy\"\n                        content=\"upgrade-insecure-requests\"&gt;\n                      </code>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Safe Link Practices:</b>\n                  <ul>\n                    <li>\n                      Use\n                      <code>rel=\"noopener noreferrer\"</code>\n                      for external links\n                    </li>\n                    <li>Validate URLs before using in href attributes</li>\n                    <li>\n                      Be cautious with\n                      <code>target=\"_blank\"</code>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Form Security:</b>\n                  <ul>\n                    <li>Use CSRF tokens</li>\n                    <li>Implement proper form validation</li>\n                    <li>Use autocomplete=\"off\" for sensitive fields</li>\n                  </ul>\n                </li>\n                <li>\n                  <b>Iframe Security:</b>\n                  Use sandbox attribute to restrict iframe capabilities\n                  <code class=\"d-block\">\n                    &lt;iframe src=\"content.html\" sandbox=\"allow-scripts\n                    allow-same-origin\"&gt;&lt;/iframe&gt;\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "HTML"
      ],
      "keyPoints": [
        "Content Security Policy (CSP): HTTP header that prevents XSS attacks",
        "XSS Prevention: Always escape user input in HTML",
        "Use textContent instead of innerHTML for user data"
      ]
    }
  ]
}
