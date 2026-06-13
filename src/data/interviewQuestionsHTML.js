// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.660Z

export const htmlQuestions = {
  questions: [
    {
      question: 'What is a tag?',
      answer: `<ol>
                <li>A tag is an element which is defined using the angle (&lt;&gt;) brackets.</li>
                <li>
                  <code>&lt;span&gt;&lt;/span&gt;</code>
                  Here span is a tag. span is defined in between the angle brackets.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What are empty tags? or Tell me some tags with no ending tags?',
      answer: `<ol>
                <li>Tags which don't have the ending tags are called empty tags or void tags.</li>
                <li>
                  The below are some of the tags with no ending tags:
                  <ul>
                    <li><code>&lt;br&gt;</code></li>
                    <li><code>&lt;hr&gt;</code></li>
                    <li><code>&lt;img&gt;</code></li>
                    <li><code>&lt;input&gt;</code></li>
                    <li><code>&lt;link&gt;</code></li>
                    <li><code>&lt;meta&gt;</code></li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is DOCTYPE in html or how to change the html version?',
      answer: `<ol>
                <li>
                  <code><!DOCTYPE html></code>
                  declaration defines that this document is a HTML5 document
                </li>
                <li>By default DOCTYPE html means, browser will use the latest HTML version.</li>
                <li>
                  We can change the HTML version in the DOCTYPE tag as given below by using the dtd
                  url
                  <br>
                  <code>
                    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/strict.dtd">
                  </code>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is meta tag? What is the use of it?',
      answer: `<ol>
                <li>
                  The &lt;meta&gt; tag provides metadata about the HTML document that is not
                  displayed on the page but is used by browsers, search engines, and other web
                  services.
                </li>
                <li>
                  &lt;meta&gt; tags always go inside the &lt;head&gt; element and are self-closing.
                </li>
                <li>
                  <b>SEO Meta Tags:</b>
                  <code class="d-block">
                    &lt;meta name="description" content="My site providing web solutions."&gt;
                    <br>
                    &lt;meta name="keywords" content="web development, training, software"&gt;
                    <br>
                    &lt;meta name="author" content="My Company"&gt;
                  </code>
                </li>
                <li>
                  <b>Viewport Meta Tag (Responsive Design):</b>
                  <code class="d-block">
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                  </code>
                </li>
                <li>
                  <b>Character Encoding:</b>
                  <code class="d-block">&lt;meta charset="UTF-8"&gt;</code>
                </li>
                <li>
                  <b>Social Media Meta Tags (Open Graph):</b>
                  <code class="d-block">
                    &lt;meta property="og:title" content="Page Title"&gt;
                    <br>
                    &lt;meta property="og:description" content="Page description"&gt;
                    <br>
                    &lt;meta property="og:image" content="image-url.jpg"&gt;
                  </code>
                </li>
                <li>
                  <b>HTTP Equivalent Meta Tags:</b>
                  <code class="d-block">
                    &lt;meta http-equiv="refresh" content="30"&gt;
                    <br>
                    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
                  </code>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is datalist tag and how does it enhance user experience?',
      answer: `<ol>
                <li>
                  The
                  <code>&lt;datalist&gt;</code>
                  element provides a list of predefined options for an
                  <code>&lt;input&gt;</code>
                  element, creating an autocomplete dropdown that enhances user experience.
                </li>
                <li>
                  <b>Key Benefits:</b>
                  <ul>
                    <li>Improves form usability with suggestions</li>
                    <li>Reduces typos and input errors</li>
                    <li>Allows custom input while providing suggestions</li>
                    <li>Native browser implementation (no JavaScript required)</li>
                  </ul>
                </li>
                <li>
                  <b>Implementation:</b>
                  The datalist's
                  <code>id</code>
                  attribute must match the input's
                  <code>list</code>
                  attribute.
                </li>
                <li>
                  <b>Browser Autocomplete Example:</b>
                  <pre><code>&lt;label for="browser"&gt;Choose your browser:&lt;/label&gt;
&lt;input list="browsers" name="browser" id="browser" placeholder="Type to search..."&gt;

&lt;datalist id="browsers"&gt;
  &lt;option value="Chrome"&gt;Google Chrome&lt;/option&gt;
  &lt;option value="Firefox"&gt;Mozilla Firefox&lt;/option&gt;
  &lt;option value="Safari"&gt;Apple Safari&lt;/option&gt;
  &lt;option value="Edge"&gt;Microsoft Edge&lt;/option&gt;
  &lt;option value="Opera"&gt;Opera Browser&lt;/option&gt;
&lt;/datalist&gt;</code></pre>
                </li>
                <li>
                  <b>Practical Use Cases:</b>
                  <ul>
                    <li>Country/city selection</li>
                    <li>Product search with suggestions</li>
                    <li>Email domain suggestions</li>
                    <li>Tag input with predefined options</li>
                  </ul>
                </li>
                <li>
                  <b>Fallback:</b>
                  In unsupported browsers, functions as a regular input field
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is a block-level element?',
      answer: `<ol>
                <li>Block-level elements always start on a new line.</li>
                <li>They occupy the full width available.</li>
                <li>Top and bottom margins apply.</li>
                <li>The next element appears below it.</li>
                <li>Width and height can be set.</li>
                <li>Examples of block-level elements:</li>
                <code>
                  &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;
                  <br>
                  &lt;p&gt;
                  <br>
                  &lt;div&gt;
                  <br>
                  &lt;ol&gt;, &lt;ul&gt;, &lt;dl&gt;, &lt;li&gt;
                  <br>
                </code>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is an inline-level element?',
      answer: `<ol>
                <li>Inline elements always start on the same line.</li>
                <li>They occupy only the required width.</li>
                <li>Top and bottom margins do not apply.</li>
                <li>The next element appears on the same line.</li>
                <li>Width and height cannot be set.</li>
                <li>Examples of inline-level elements:</li>
                <code>
                  &lt;a&gt;
                  <br>
                  &lt;button&gt;
                  <br>
                  &lt;span&gt;
                  <br>
                  &lt;label&gt;
                  <br>
                </code>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What are Semantic and Non-Semantic elements?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Semantic Elements</th>
                    <th scope="col">Non-Semantic Elements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      A semantic element clearly describes its meaning to both the browser and the
                      developer, making the code more readable and accessible.
                    </td>
                    <td>A non-semantic element tells nothing about its content or purpose.</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Examples:</b>
                      &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;,
                      &lt;section&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;form&gt;,
                      &lt;table&gt;, &lt;figure&gt;, &lt;figcaption&gt;, &lt;time&gt;,
                      &lt;mark&gt;
                    </td>
                    <td>
                      <b>Examples:</b>
                      &lt;div&gt;, &lt;span&gt; - Generic containers that don't convey meaning
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Benefits:</b>
                      <ul>
                        <li>Better SEO ranking</li>
                        <li>Improved accessibility for screen readers</li>
                        <li>Easier maintenance and debugging</li>
                        <li>Better code structure and readability</li>
                      </ul>
                    </td>
                    <td>
                      <b>Use cases:</b>
                      <ul>
                        <li>Styling purposes with CSS</li>
                        <li>JavaScript manipulation</li>
                        <li>Layout containers without semantic meaning</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'Inline Vs Block elements ?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Inline</th>
                    <th>Inline-block</th>
                    <th>Block</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Inline elements will occupy only required width.</td>
                    <td>Inline-block elements will occupy only required width.</td>
                    <td>
                      The block elements always start on a new line. They will also take space of an
                      entire row or width.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Examples
                      <code>span</code>
                    </td>
                    <td>It has no tag examples as it can be applied to any tag using CSS.</td>
                    <td>
                      Examples:
                      <code>div, p, li, main</code>
                      etc.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      CSS property:
                      <code>display:inline</code>
                    </td>
                    <td>
                      CSS property:
                      <code>display:inline-block</code>
                    </td>
                    <td>
                      CSS property:
                      <code>display:block</code>
                    </td>
                  </tr>
                  <tr>
                    <td>width, height, top and bottom margins & paddings are not respected.</td>
                    <td>width, height, top and bottom margins & paddings are respected.</td>
                    <td>width, height, top and bottom margins & paddings are respected.</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What are the new features and semantic tags introduced in HTML5?',
      answer: `<ol>
                <li>
                  HTML5 introduces semantic elements, multimedia support, enhanced forms, and modern
                  APIs for building interactive web applications.
                </li>
                <li>
                  <b>Semantic HTML5 Elements:</b>
                  <ul>
                    <li>
                      <code>&lt;header&gt;</code>
                      - Page/section header
                    </li>
                    <li>
                      <code>&lt;nav&gt;</code>
                      - Navigation links
                    </li>
                    <li>
                      <code>&lt;main&gt;</code>
                      - Main content area
                    </li>
                    <li>
                      <code>&lt;article&gt;</code>
                      - Standalone content
                    </li>
                    <li>
                      <code>&lt;section&gt;</code>
                      - Thematic grouping
                    </li>
                    <li>
                      <code>&lt;aside&gt;</code>
                      - Sidebar content
                    </li>
                    <li>
                      <code>&lt;footer&gt;</code>
                      - Page/section footer
                    </li>
                    <li>
                      <code>&lt;figure&gt;</code>
                      &
                      <code>&lt;figcaption&gt;</code>
                      - Media with captions
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Multimedia Elements:</b>
                  <ul>
                    <li>
                      <code>&lt;video&gt;</code>
                      with controls, autoplay, loop attributes
                    </li>
                    <li>
                      <code>&lt;audio&gt;</code>
                      for sound content
                    </li>
                    <li>
                      <code>&lt;canvas&gt;</code>
                      for 2D/3D graphics
                    </li>
                    <li>
                      <code>&lt;svg&gt;</code>
                      for scalable vector graphics
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Enhanced Form Elements:</b>
                  <ul>
                    <li>Input types: email, url, tel, number, date, color, range</li>
                    <li>Attributes: required, pattern, placeholder, autofocus</li>
                    <li>
                      <code>&lt;datalist&gt;</code>
                      for autocomplete options
                    </li>
                    <li>
                      <code>&lt;output&gt;</code>
                      for calculation results
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Interactive Elements:</b>
                  <ul>
                    <li>
                      <code>&lt;details&gt;</code>
                      &
                      <code>&lt;summary&gt;</code>
                      - Collapsible content
                    </li>
                    <li>
                      <code>&lt;dialog&gt;</code>
                      - Modal dialogs
                    </li>
                    <li>
                      <code>&lt;progress&gt;</code>
                      &
                      <code>&lt;meter&gt;</code>
                      - Progress indicators
                    </li>
                  </ul>
                </li>
                <li>
                  <b>New APIs:</b>
                  Geolocation, Web Storage, Web Workers, WebSockets, Drag & Drop
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is iframe?',
      answer: `<ol>
                <li>An HTML iframe is used to display a web page within a web page.</li>
                <li>
                  <code>iframe src="url" title="description"</code>
                </li>
                <li>
                  In our project, we are using the iframes to display the Youtube videos in our
                  site.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is Canvas and when should you use it?',
      answer: `<ol>
                <li>
                  The HTML
                  <code>&lt;canvas&gt;</code>
                  element provides a 2D drawing surface that can be manipulated using JavaScript for
                  creating graphics, animations, and interactive visualizations.
                </li>
                <li>
                  <b>Key Features:</b>
                  <ul>
                    <li>Bitmap-based (raster) graphics</li>
                    <li>Immediate mode rendering</li>
                    <li>Pixel manipulation capabilities</li>
                    <li>Event handling through coordinates</li>
                  </ul>
                </li>
                <li>
                  <b>Common Use Cases:</b>
                  <ul>
                    <li>Data visualizations and charts</li>
                    <li>Image editing and filters</li>
                    <li>Game development</li>
                    <li>Real-time graphics and animations</li>
                  </ul>
                </li>
                <li>
                  <b>Basic Example:</b>
                  <pre><code>&lt;canvas id="myCanvas" width="200" height="100"&gt;&lt;/canvas&gt;
&lt;script&gt;
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(0, 0, 150, 75);
&lt;/script&gt;</code></pre>
                </li>
                <li>
                  <b>Performance:</b>
                  Better for complex scenes with many objects, but not scalable like SVG
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is SVG and how does it differ from Canvas?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">SVG</th>
                    <th scope="col">Canvas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Type</b></td>
                    <td>Vector-based graphics</td>
                    <td>Raster/bitmap-based graphics</td>
                  </tr>
                  <tr>
                    <td><b>DOM Integration</b></td>
                    <td>Part of DOM, each element is individually accessible</td>
                    <td>Single DOM element, content is not individually accessible</td>
                  </tr>
                  <tr>
                    <td><b>Scalability</b></td>
                    <td>Infinitely scalable without quality loss</td>
                    <td>Fixed resolution, pixelated when scaled</td>
                  </tr>
                  <tr>
                    <td><b>Event Handling</b></td>
                    <td>Events on individual elements</td>
                    <td>Events on canvas element, coordinates required</td>
                  </tr>
                  <tr>
                    <td><b>Performance</b></td>
                    <td>Better for simple graphics, slower with many elements</td>
                    <td>Better for complex scenes and animations</td>
                  </tr>
                  <tr>
                    <td><b>Styling</b></td>
                    <td>CSS styling supported</td>
                    <td>Styling through JavaScript API</td>
                  </tr>
                  <tr>
                    <td><b>Use Cases</b></td>
                    <td>Icons, logos, simple animations, illustrations</td>
                    <td>Games, image editing, complex visualizations</td>
                  </tr>
                </tbody>
              </table>
              <ol>
                <li>
                  <b>SVG Example:</b>
                  <pre><code>&lt;svg width="100" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /&gt;
&lt;/svg&gt;</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'Attribute vs Property',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Attribute</th>
                    <th scope="col">Property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ol>
                        <li>Attributes provide additional information about elements/tags</li>
                        <li>Attributes are always specified in the start tag</li>
                        <li>Attributes usually come in name/value pairs like: name="value"</li>
                        <li>
                          Attribute values must be written inside the double quotes or single
                          quotes.
                        </li>
                      </ol>
                    </td>
                    <td>
                      <ol>
                        <li>JavaScript object will have properties and methods.</li>
                        <li>Each property will hold the value</li>
                      </ol>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;a href="login.html" target="_blank"&gt;Login&lt;/a></code>
                      <br>
                      Here
                      <b>href</b>
                      and
                      <b>target</b>
                      are the attributes
                    </td>
                    <td>ex: { key: 'some value' } => here key is property</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is meant by idempotent in HTTP and where does it apply?',
      answer: `<ol>
                <li>
                  <strong>Idempotent</strong> means the same request produces the same result
                  regardless of how many times you call it. The server state is the same after
                  1 call or 100 calls.
                </li>
                <li>
                  <b>Idempotent HTTP Methods:</b>
                  <ul>
                    <li><code>GET</code> — Retrieve a resource (idempotent: multiple calls return same data)</li>
                    <li><code>HEAD</code> — Same as GET but headers only (idempotent)</li>
                    <li><code>PUT</code> — Replace a resource at a specific URI (idempotent: same result on repeat)</li>
                    <li><code>DELETE</code> — Remove a resource (idempotent: deleting twice has same effect as once)</li>
                    <li><code>OPTIONS</code> — Describe communication options (idempotent)</li>
                  </ul>
                </li>
                <li>
                  <b>Non-Idempotent HTTP Methods:</b>
                  <ul>
                    <li><code>POST</code> — Create a new resource (NOT idempotent: each call creates new resource)</li>
                    <li><code>PATCH</code> — Apply partial modifications (NOT idempotent: depends on current state)</li>
                  </ul>
                </li>
                <li>
                  <b>Why it matters in HTML forms:</b>
                  <ul>
                    <li>Browsers can safely retry <code>GET</code> requests if a user clicks back/forward</li>
                    <li><code>POST</code> requests may show a "resubmit form?" dialog because they create resources</li>
                    <li>Idempotency keys help APIs safely retry <code>POST</code> requests (e.g., payment processing)</li>
                  </ul>
                </li>
                <li>
                  <b>Real-world example:</b>
                  A <code>DELETE /users/123</code> call removes user 123. Calling it 10 times still
                  results in "user 123 doesn't exist" — the end state is the same, so it's idempotent.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'HTML', 'HTTP', 'Forms'
      ]
    },
    {
      question: 'What is HTTP and HTTPS?',
      answer: `<div class="text-primary font-weight-bold">HTTP</div>
              <ol>
                <li>HTTP stands for Hyper Text Transfer Protocol.</li>
                <li>HTTP is the protocol used to transfer data over the web.</li>
                <li>
                  It is an application layer protocol. It is the protocol over which information is
                  sent from a user’s web browser to the server.
                </li>
              </ol>

              <div class="text-primary font-weight-bold">HTTPS</div>
              <ol>
                <li>HTTPS stands for Hyper Text Transfer Protocol Secure</li>
                <li>It is used for secure communication over a computer network.</li>
              </ol>

              <div>
                In the HTTP protocol mainly we have the methods to communicate with the server.
              </div>
              <ol>
                <li>
                  <b>GET</b>
                  :- To get the data from server
                </li>
                <li>
                  <b>POST</b>
                  :- To save data to the server
                </li>
                <li>
                  <b>PUT</b>
                  :- To update data to the server
                </li>
                <li>
                  <b>DELETE</b>
                  :- To delete the data from server
                </li>
                <li>
                  <b>PATCH</b>
                  :- To update the partial data to the server
                </li>
                <li>TRACE</li>
                <li>HEAD</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What are the differences between GET and POST?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">GET</th>
                    <th scope="col">POST</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GET request will send the data through the browser url</td>
                    <td>POST request will send the data using body.</td>
                  </tr>
                  <tr>
                    <td>GET request can send only up to the 2048 characters.</td>
                    <td>
                      Since POST request is sending data through body, it can send unlimited data to
                      the server.
                    </td>
                  </tr>

                  <tr>
                    <td>Since data is sending through URL, GET request is not secure.</td>
                    <td>Since POST request is sending data through body, it is secured.</td>
                  </tr>
                  <tr>
                    <td>
                      GET request should be used only for non secure use cases. Eg: Searching for
                      content, we can use the GET type.
                    </td>
                    <td>POST should be used to send the form data to the server.</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'Tell me important tags and attributes in HTML forms?',
      answer: `<ol>
                <li>
                  <b><code>&lt;form&gt;</code></b>
                  - Container for form elements to collect user input.
                </li>
                <li>
                  <b>action attribute</b>
                  - Defines the URL where form data is submitted.
                </li>
                <li>
                  <b>method attribute</b>
                  - HTTP method (GET/POST) for submitting form data.
                </li>
                <li>
                  <b>Input Elements:</b>
                  <ul>
                    <li>
                      <code>&lt;input type="text" name="username" required&gt;</code>
                      - Text input with validation
                    </li>
                    <li>
                      <code>&lt;input type="email" name="email"&gt;</code>
                      - Email validation
                    </li>
                    <li>
                      <code>&lt;input type="password" name="pwd"&gt;</code>
                      - Password field
                    </li>
                    <li>
                      <code>&lt;input type="number" min="1" max="100"&gt;</code>
                      - Number with range
                    </li>
                    <li>
                      <code>&lt;input type="file" accept="image/*"&gt;</code>
                      - File upload
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Form Controls:</b>
                  <ul>
                    <li>
                      <code>&lt;textarea rows="4" cols="50"&gt;</code>
                      - Multi-line text
                    </li>
                    <li>
                      <code>&lt;select&gt;&lt;option&gt;</code>
                      - Dropdown selection
                    </li>
                    <li>
                      <code>&lt;button type="submit"&gt;</code>
                      - Submit button
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Accessibility & Labels:</b>
                  <ul>
                    <li>
                      <code>&lt;label for="username"&gt;</code>
                      - Associates label with input
                    </li>
                    <li>
                      <code>&lt;fieldset&gt;&lt;legend&gt;</code>
                      - Groups related form elements
                    </li>
                  </ul>
                </li>
                <li>
                  <b>HTML5 Validation Attributes:</b>
                  <ul>
                    <li>
                      <code>required</code>
                      - Field must be filled
                    </li>
                    <li>
                      <code>pattern="[A-Za-z]{3}"</code>
                      - Regex validation
                    </li>
                    <li>
                      <code>minlength="6" maxlength="20"</code>
                      - Length constraints
                    </li>
                    <li>
                      <code>placeholder="Enter your name"</code>
                      - Hint text
                    </li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'Difference of html and HTML5?',
      answer: `<table class="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <th>HTML</th>
                    <th>HTML5</th>
                  </tr>
                  <tr>
                    <td>
                      Hypertext Markup Language is an acronym for HTML, which is a primary language
                      for developing web pages.
                    </td>
                    <td>
                      HTML5 is the new version of HTML, which has new functionalities with Markup
                      language as the core technology to interact with internet technologies for
                      structuring and presenting the content.
                    </td>
                  </tr>
                  <tr>
                    <td>HTML doesn’t have support for video and audio in the language</td>
                    <td>
                      HTML5 has the support for video and audio as they are integrated into it.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      HTML has the support of tracking users location who are visiting the site, but
                      the process is cumbersome and difficult to find the users location when logged
                      from mobile devices.
                    </td>
                    <td>
                      HTML5 has using JavaScript Geolocation API, which can be used to identify the
                      location of any user who is accessing the website.
                    </td>
                  </tr>
                  <tr>
                    <td>HTML uses browser cache memory as temporary storage</td>
                    <td>
                      HTML5 has multiple storage options such as application cache, SQL database,
                      and web storage. We can JavaScript in the background with the help of JS API
                      available in HTML5 for storing
                    </td>
                  </tr>
                  <tr>
                    <td>
                      In HTML, Communication between client and server was done through streaming
                      and long pooling as it doesn’t have socket support.
                    </td>
                    <td>
                      In HTML5, it has support for web sockets which allows full-duplex
                      communication between client and server.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      HTML is compatible with almost all browsers as it exists for a long time, and
                      browsers did enough modification to support all features in HTML
                    </td>
                    <td>
                      In HTML5, we have many new tags, elements and removed/modified few tags
                      elements, so only a few browsers are fully compatible with HTML5 as of now.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      In HTML, Vector Graphics support is possible with the help of other tools such
                      as Silverlight, Adobe Flash, VML etc.
                    </td>
                    <td>
                      In HTML5, Vector Graphics is supported by default as it has canvas and SVG
                      inbuilt.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      In HTML, the Browser interface with which the user interacts and JavaScript
                      are running in the same thread, which will lead to performance issue.
                    </td>
                    <td>
                      In HTML5, It has JavaScript web worker API, which allows JavaScript and
                      Browser interface to run in different threads.
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is Web Accessibility and ARIA attributes?',
      answer: `<ol>
                <li>
                  <b>Web Accessibility:</b>
                  Ensures websites are usable by people with disabilities, including visual,
                  auditory, motor, and cognitive impairments.
                </li>
                <li>
                  <b>ARIA (Accessible Rich Internet Applications):</b>
                  Provides semantic information about elements to assistive technologies.
                </li>
                <li>
                  <b>Important ARIA Attributes:</b>
                  <ul>
                    <li>
                      <code>aria-label="Close dialog"</code>
                      - Accessible name for elements
                    </li>
                    <li>
                      <code>aria-describedby="help-text"</code>
                      - References descriptive text
                    </li>
                    <li>
                      <code>aria-expanded="false"</code>
                      - State of collapsible elements
                    </li>
                    <li>
                      <code>aria-hidden="true"</code>
                      - Hides decorative elements from screen readers
                    </li>
                    <li>
                      <code>role="button"</code>
                      - Defines element's purpose
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Semantic HTML for Accessibility:</b>
                  <ul>
                    <li>Use proper heading hierarchy (h1-h6)</li>
                    <li>Associate labels with form inputs</li>
                    <li>Provide alt text for images</li>
                    <li>Use focus management and skip links</li>
                  </ul>
                </li>
                <li>
                  <b>Testing Tools:</b>
                  WAVE, axe-core, Lighthouse accessibility audit
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'How do you optimize HTML for SEO?',
      answer: `<ol>
                <li>
                  <b>Title Tag:</b>
                  Unique, descriptive titles (50-60 characters)
                  <code class="d-block">
                    &lt;title&gt;Best Web Development Training | My site&lt;/title>
                  </code>
                </li>
                <li>
                  <b>Meta Description:</b>
                  Compelling summaries (150-160 characters)
                  <code class="d-block">
                    &lt;meta name="description" content="Learn web development with expert
                    trainers..."&gt;
                  </code>
                </li>
                <li>
                  <b>Heading Structure:</b>
                  Logical hierarchy with one H1 per page
                  <code class="d-block">
                    &lt;h1&gt;Main Topic&lt;/h1>&lt;h2&gt;Subtopic&lt;/h2>
                  </code>
                </li>
                <li>
                  <b>Image Optimization:</b>
                  <ul>
                    <li>Descriptive alt attributes</li>
                    <li>Optimized file sizes and modern formats (WebP)</li>
                    <li>Responsive images with srcset</li>
                  </ul>
                </li>
                <li>
                  <b>Structured Data:</b>
                  Schema.org markup for rich snippets
                  <code class="d-block">
                    &lt;script type="application/ld+json"&gt;...&lt;/script>
                  </code>
                </li>
                <li>
                  <b>Internal Linking:</b>
                  Meaningful anchor text and site structure
                </li>
                <li>
                  <b>Page Speed:</b>
                  Minimize HTML, compress images, use CDN
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What are Progressive Web Apps (PWA) and their HTML requirements?',
      answer: `<ol>
                <li>
                  <b>Progressive Web App:</b>
                  Web applications that provide native app-like experience using modern web
                  capabilities.
                </li>
                <li>
                  <b>Web App Manifest:</b>
                  <code class="d-block">&lt;link rel="manifest" href="/manifest.json"&gt;</code>
                  Defines app metadata, icons, and display options.
                </li>
                <li>
                  <b>Service Worker Registration:</b>
                  <pre><code>&lt;script&gt;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
&lt;/script&gt;</code></pre>
                </li>
                <li>
                  <b>Key PWA Features:</b>
                  <ul>
                    <li>Offline functionality</li>
                    <li>Push notifications</li>
                    <li>Add to home screen</li>
                    <li>Background sync</li>
                  </ul>
                </li>
                <li>
                  <b>Meta Tags for PWA:</b>
                  <code class="d-block">
                    &lt;meta name="theme-color" content="#000000"&gt;
                    <br>
                    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
                  </code>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What are Web Components and Custom Elements?',
      answer: `<ol>
                <li>
                  <b>Web Components:</b>
                  Set of standards for creating reusable custom elements with encapsulated
                  functionality.
                </li>
                <li>
                  <b>Four Main Technologies:</b>
                  <ul>
                    <li>
                      <b>Custom Elements:</b>
                      Define new HTML elements
                    </li>
                    <li>
                      <b>Shadow DOM:</b>
                      Encapsulated DOM and styling
                    </li>
                    <li>
                      <b>HTML Templates:</b>
                      Reusable markup with &lt;template&gt;
                    </li>
                    <li>
                      <b>ES Modules:</b>
                      JavaScript module imports
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Custom Element Example:</b>
                  <pre><code>&lt;script&gt;
class MyButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '&lt;button&gt;Click me&lt;/button&gt;';
  }
}
customElements.define('my-button', MyButton);
&lt;/script&gt;
&lt;my-button&gt;&lt;/my-button&gt;</code></pre>
                </li>
                <li>
                  <b>Benefits:</b>
                  <ul>
                    <li>Reusable across frameworks</li>
                    <li>Encapsulated styling and behavior</li>
                    <li>Native browser support</li>
                    <li>Framework-agnostic</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What are HTML5 Web APIs and modern browser features?',
      answer: `<ol>
                <li>
                  <b>Geolocation API:</b>
                  <code class="d-block">
                    navigator.geolocation.getCurrentPosition(success, error);
                  </code>
                </li>
                <li>
                  <b>Local Storage & Session Storage:</b>
                  <code class="d-block">
                    localStorage.setItem('key', 'value');
                    <br>
                    sessionStorage.getItem('key');
                  </code>
                </li>
                <li>
                  <b>IndexedDB:</b>
                  Client-side database for storing large amounts of structured data.
                </li>
                <li>
                  <b>Web Workers:</b>
                  Background JavaScript execution
                  <code class="d-block">const worker = new Worker('worker.js');</code>
                </li>
                <li>
                  <b>Fetch API:</b>
                  Modern alternative to XMLHttpRequest
                  <code class="d-block">
                    fetch('/api/data').then(response => response.json())
                  </code>
                </li>
                <li>
                  <b>WebRTC:</b>
                  Real-time communication (video/audio/data)
                </li>
                <li>
                  <b>Notification API:</b>
                  Browser notifications
                  <code class="d-block">
                    new Notification('Hello!', { body: 'Message text' });
                  </code>
                </li>
                <li>
                  <b>Intersection Observer API:</b>
                  Efficiently observe element visibility changes
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'How do you optimize HTML performance?',
      answer: `<ol>
                <li>
                  <b>Minimize HTML:</b>
                  Remove whitespace, comments, and unnecessary attributes in production.
                </li>
                <li>
                  <b>Resource Hints:</b>
                  <ul>
                    <li>
                      <code>&lt;link rel="preload" href="critical.css" as="style"&gt;</code>
                      - Preload critical resources
                    </li>
                    <li>
                      <code>&lt;link rel="prefetch" href="next-page.html"&gt;</code>
                      - Prefetch future resources
                    </li>
                    <li>
                      <code>&lt;link rel="dns-prefetch" href="//example.com"&gt;</code>
                      - DNS resolution
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Critical CSS:</b>
                  Inline critical styles and defer non-critical CSS
                  <code class="d-block">
                    &lt;link rel="stylesheet" href="styles.css" media="print"
                    onload="this.media='all'"&gt;
                  </code>
                </li>
                <li>
                  <b>Image Optimization:</b>
                  <ul>
                    <li>Use appropriate formats (WebP, AVIF)</li>
                    <li>
                      Implement lazy loading with
                      <code>loading="lazy"</code>
                    </li>
                    <li>Responsive images with srcset and sizes</li>
                  </ul>
                </li>
                <li>
                  <b>Script Optimization:</b>
                  <ul>
                    <li>
                      <code>&lt;script defer&gt;</code>
                      for non-critical scripts
                    </li>
                    <li>
                      <code>&lt;script async&gt;</code>
                      for independent scripts
                    </li>
                    <li>Place scripts at the end of body</li>
                  </ul>
                </li>
                <li>
                  <b>Reduce HTTP Requests:</b>
                  Combine files, use CSS sprites, inline small assets
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What is the difference between Local Storage, Session Storage, and Cookies?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Local Storage</th>
                    <th scope="col">Session Storage</th>
                    <th scope="col">Cookies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Storage Limit</b></td>
                    <td>5-10 MB</td>
                    <td>5-10 MB</td>
                    <td>4 KB</td>
                  </tr>
                  <tr>
                    <td><b>Persistence</b></td>
                    <td>Until manually cleared</td>
                    <td>Until tab/window closes</td>
                    <td>Until expiration date</td>
                  </tr>
                  <tr>
                    <td><b>Server Access</b></td>
                    <td>Client-side only</td>
                    <td>Client-side only</td>
                    <td>Sent with every HTTP request</td>
                  </tr>
                  <tr>
                    <td><b>API</b></td>
                    <td>localStorage.setItem(), getItem()</td>
                    <td>sessionStorage.setItem(), getItem()</td>
                    <td>document.cookie</td>
                  </tr>
                  <tr>
                    <td><b>Use Cases</b></td>
                    <td>User preferences, shopping cart</td>
                    <td>Form data, temporary state</td>
                    <td>Authentication, tracking</td>
                  </tr>
                  <tr>
                    <td><b>Security</b></td>
                    <td>Vulnerable to XSS</td>
                    <td>Vulnerable to XSS</td>
                    <td>Can be HttpOnly, Secure</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What are Critical Rendering Path and Page Loading Optimization?',
      answer: `<ol>
                <li>
                  <b>Critical Rendering Path:</b>
                  Sequence of steps browser takes to render a page - DOM construction, CSSOM
                  construction, render tree, layout, and paint.
                </li>
                <li>
                  <b>Above-the-fold Content:</b>
                  Prioritize loading content visible without scrolling
                  <ul>
                    <li>Inline critical CSS</li>
                    <li>Defer non-critical resources</li>
                    <li>Optimize images in viewport</li>
                  </ul>
                </li>
                <li>
                  <b>Resource Loading Strategies:</b>
                  <ul>
                    <li>
                      <code>&lt;link rel="preload"&gt;</code>
                      - High priority resources
                    </li>
                    <li>
                      <code>&lt;link rel="modulepreload"&gt;</code>
                      - ES modules
                    </li>
                    <li>
                      <code>&lt;script type="module"&gt;</code>
                      - Modern JavaScript
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Performance Metrics:</b>
                  <ul>
                    <li>First Contentful Paint (FCP)</li>
                    <li>Largest Contentful Paint (LCP)</li>
                    <li>Cumulative Layout Shift (CLS)</li>
                    <li>First Input Delay (FID)</li>
                  </ul>
                </li>
                <li>
                  <b>Tools:</b>
                  Lighthouse, WebPageTest, Chrome DevTools Performance tab
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'How do you handle Cross-Browser Compatibility and Feature Detection?',
      answer: `<ol>
                <li>
                  <b>Feature Detection:</b>
                  Check if browser supports specific features before using them
                  <pre><code>if ('serviceWorker' in navigator) {
  // Use service worker
}
if (CSS.supports('display', 'grid')) {
  // Use CSS Grid
}</code></pre>
                </li>
                <li>
                  <b>Progressive Enhancement:</b>
                  Start with basic functionality, add enhancements for capable browsers
                </li>
                <li>
                  <b>Graceful Degradation:</b>
                  Ensure core functionality works on older browsers
                </li>
                <li>
                  <b>Polyfills and Fallbacks:</b>
                  <ul>
                    <li>Use polyfills for missing APIs</li>
                    <li>Provide CSS fallbacks for newer properties</li>
                    <li>Alternative image formats with &lt;picture&gt; element</li>
                  </ul>
                </li>
                <li>
                  <b>Testing Tools:</b>
                  <ul>
                    <li>BrowserStack, Sauce Labs for real browser testing</li>
                    <li>Can I Use website for feature support</li>
                    <li>Autoprefixer for CSS vendor prefixes</li>
                  </ul>
                </li>
                <li>
                  <b>Modern Approach:</b>
                  Use @supports CSS rule and feature queries
                  <pre><code>@supports (display: grid) {
  .container { display: grid; }
}</code></pre>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'HTML'
      ]
    },
    {
      question: 'What are important HTML security considerations and best practices?',
      answer: `<ol>
                <li>
                  <b>Content Security Policy (CSP):</b>
                  HTTP header that prevents XSS attacks
                  <code class="d-block">
                    &lt;meta http-equiv="Content-Security-Policy" content="default-src 'self';
                    script-src 'self'"&gt;
                  </code>
                </li>
                <li>
                  <b>XSS Prevention:</b>
                  <ul>
                    <li>Always escape user input in HTML</li>
                    <li>Use textContent instead of innerHTML for user data</li>
                    <li>Validate and sanitize all inputs</li>
                    <li>Set HttpOnly and Secure flags on cookies</li>
                  </ul>
                </li>
                <li>
                  <b>HTTPS Enforcement:</b>
                  <ul>
                    <li>Use Strict-Transport-Security header</li>
                    <li>
                      Upgrade insecure requests:
                      <code>
                        &lt;meta http-equiv="Content-Security-Policy"
                        content="upgrade-insecure-requests"&gt;
                      </code>
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Safe Link Practices:</b>
                  <ul>
                    <li>
                      Use
                      <code>rel="noopener noreferrer"</code>
                      for external links
                    </li>
                    <li>Validate URLs before using in href attributes</li>
                    <li>
                      Be cautious with
                      <code>target="_blank"</code>
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Form Security:</b>
                  <ul>
                    <li>Use CSRF tokens</li>
                    <li>Implement proper form validation</li>
                    <li>Use autocomplete="off" for sensitive fields</li>
                  </ul>
                </li>
                <li>
                  <b>Iframe Security:</b>
                  Use sandbox attribute to restrict iframe capabilities
                  <code class="d-block">
                    &lt;iframe src="content.html" sandbox="allow-scripts
                    allow-same-origin"&gt;&lt;/iframe>
                  </code>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'HTML'
      ]
    }
  ]
};
