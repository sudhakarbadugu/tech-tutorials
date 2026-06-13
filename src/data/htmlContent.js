// Auto-generated from trinits-web-angular tutorial sources
// Generated: 2026-06-13T02:26:18.126Z

export const htmlContent = {
  module1: {
    introduction: {
      title: 'HTML Introduction',
      sections: [
        {
          heading: 'HTML Introduction',
          content: [
            'HTML (HyperText Markup Language) is the standard language for creating web pages.'
          ],
          example: {
            title: 'Example',
            code: `<html>
<HTML>`,
            output: `<p>This is a paragraph.</p>
<img src="image.jpg" alt="Description" />
<a href="https://example.com">Link</a>

.html
.htm
.HTML

<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
</body>
</html>`,
            type: 'code'
          }
        },
        {
          heading: 'Example:',
          code: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
</body>
</html>`
        }
      ]
    },
    editors: {
      title: 'HTML Editors',
      sections: [
        {
          heading: 'HTML Editors',
          content: [
            'Use text editors like VS Code, Sublime Text, or Notepad++ to write HTML.',
            '<h3 class="font-semibold">Example:</h3> <p> Install VS Code and create a file named <code>index.html</code> . </p>'
          ]
        },
        {
          heading: 'Example:',
          content: [
            'Install VS Code and create a file named <code>index.html</code> .'
          ]
        }
      ]
    },
    'tag-doctype': {
      title: 'Tag',
      sections: [
        {
          heading: 'Tag',
          example: {
            title: 'Example',
            code: `<h1></h1>
<span></span>`,
            output: '<h1>Header element</h1>',
            type: 'code'
          }
        },
        {
          heading: 'DOCTYPE',
          example: {
            title: 'Example',
            code: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/strict.dtd">',
            output: `<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>My First Heading</h1>
    </body>
</html>`,
            type: 'code'
          }
        }
      ]
    },
    'html-structure': {
      title: 'HTML Structure',
      sections: [
        {
          heading: 'HTML Structure',
          example: {
            title: 'Example',
            code: `<html>
    head
        - title
        - scripts imports
        - internal styles - css
        - To import the external styles.
        - favicon
        - meta data
            - Search engines and browser
    body
</html>`,
            output: `<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>Welcome to my website</h1>
        <p>This is the home page.</p>
    </body>
</html>`,
            type: 'code'
          }
        },
        {
          heading: '1. Head',
          list: [
            `Set the page title using the <code><title></code> tag. The <code><title></code> element specifies a title for the HTML page (shown in the browser's title bar or tab).`,
            'Write internal CSS using the <code><style></code> tag.',
            'Import external CSS files using the <code><link></code> tag.',
            'Write internal JavaScript using the <code><script></code> tag.',
            'Import external JavaScript files using the <code><script></code> tag.',
            'Add a favicon icon (represents the brand/company) using the <code> <link rel="icon" type="image/x-icon" href="favicon.ico"> </code> tag.',
            'Add metadata about the website and browser information using the <code><meta></code> tag.'
          ]
        },
        {
          heading: '2. Body',
          content: [
            `<p> The <code><body></code> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. </p>`
          ]
        },
        {
          heading: 'Example Structure:',
          code: `<html>
    head
        - title
        - scripts imports
        - internal styles - css
        - To import the external styles.
        - favicon
        - meta data
            - Search engines and browser
    body
</html>`
        },
        {
          heading: 'Full Example:',
          code: `<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>Welcome to my website</h1>
        <p>This is the home page.</p>
    </body>
</html>`
        }
      ]
    },
    elements: {
      title: 'HTML Elements',
      sections: [
        {
          heading: 'HTML Elements',
          content: [
            'HTML elements are building blocks defined by a start tag, content, and end tag.'
          ],
          code: '<p>This is a paragraph.</p>'
        },
        {
          heading: 'Example:',
          code: '<p>This is a paragraph.</p>'
        }
      ]
    },
    attributes: {
      title: 'HTML Attributes',
      sections: [
        {
          heading: 'HTML Attributes',
          content: [
            'Attributes provide additional information about elements.'
          ],
          code: '<a href="https://example.com">Link</a>'
        },
        {
          heading: 'Example:',
          code: '<a href="https://example.com">Link</a>'
        }
      ]
    },
    'html-attributes-detailed': {
      title: 'HTML Attributes (Detailed)',
      sections: [
        {
          heading: 'HTML Attributes (Detailed)',
          code: `<a href="login.html" target="_blank">Login</a>
<img src="logo.jpg">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">`
        },
        {
          heading: 'Example:',
          content: [
            'In the above example, we have the <code>href</code> , <code>target</code> , <code>name</code> , and <code>content</code> attributes.'
          ],
          code: `<a href="login.html" target="_blank">Login</a>
<img src="logo.jpg">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">`
        }
      ]
    },
    'meta-tag': {
      title: 'Meta tag',
      sections: [
        {
          heading: 'Meta tag',
          example: {
            title: 'Example',
            code: '<meta name="description" content="Trinits is a product based company.">',
            output: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
            type: 'code'
          }
        },
        {
          heading: 'Example (description):',
          code: '<meta name="description" content="Trinits is a product based company.">'
        },
        {
          heading: 'Example (viewport for responsiveness):',
          code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
        }
      ]
    }
  },
  module2: {
    'headings-paragraphs-block': {
      title: 'HTML Headings',
      sections: [
        {
          heading: 'HTML Headings',
          example: {
            title: 'Example',
            code: `<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>`,
            output: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

h1, h2, h3, h4, h5, h6
p
div
ol, ul, dl, li
header
footer
section
article
form
table`,
            type: 'code'
          }
        },
        {
          heading: 'Example:',
          code: `<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>`
        },
        {
          heading: 'Paragraph',
          example: {
            title: 'Example',
            code: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`,
            output: `h1, h2, h3, h4, h5, h6
p
div
ol, ul, dl, li
header
footer
section
article
form
table`,
            type: 'code'
          }
        },
        {
          heading: 'Example:',
          code: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
        },
        {
          heading: 'Block Level Element',
          code: `h1, h2, h3, h4, h5, h6
p
div
ol, ul, dl, li
header
footer
section
article
form
table`
        }
      ]
    },
    comments: {
      title: 'HTML Comments',
      sections: [
        {
          heading: 'HTML Comments',
          content: [
            'Comments are not displayed in browsers.'
          ],
          code: '<!-- This is a comment -->'
        },
        {
          heading: 'Example:',
          code: '<!-- This is a comment -->'
        }
      ]
    },
    styles: {
      title: 'HTML Styles',
      sections: [
        {
          heading: 'HTML Styles',
          content: [
            'Styles can be added using the <code>style</code> attribute.'
          ],
          code: '<p style="color: blue;">Blue text</p>'
        },
        {
          heading: 'Example:',
          code: '<p style="color: blue;">Blue text</p>'
        }
      ]
    },
    'styles-inline-internal-external': {
      title: 'HTML Styles: Inline, Internal, and External',
      sections: [
        {
          heading: 'HTML Styles: Inline, Internal, and External',
          example: {
            title: 'Example',
            code: '<h1 style="text-align:center;background-color:blue;">Login</h1>',
            output: `<head>
    <style>
        h1 {
            text-align:center;
            background-color:blue;
        |
    </style>
</head>
<h1>Login</h1>

<head>
    <link rel="stylesheet" href="styles.css">
</head>
<h1>Login</h1>

h1 {
    text-align:center;
    background-color:blue;
    color: white;
|`,
            type: 'code'
          }
        },
        {
          heading: '1. Inline style',
          list: [
            'Styles written in the starting tag using the <code>style</code> attribute are called inline styles.',
            'Inline styles have the highest preference.',
            'The <code>style</code> attribute value can have multiple CSS properties.',
            'Each CSS property has a property name and value, separated by a colon ( <code>:</code> ).',
            'When using multiple CSS properties, separate each property with a semicolon ( <code>;</code> ).',
            'Use inline styles only when needed once in the HTML file. For repeated use, prefer internal styles.'
          ],
          code: '<h1 style="text-align:center;background-color:blue;">Login</h1>'
        },
        {
          heading: '2. Internal styles',
          list: [
            'Styles written in the <code><head></code> tag using the <code><style></code> tag are called internal styles.',
            'Use internal styles when the same style is needed multiple times in a single page.',
            'CSS rules are written inside the <code><style></code> tag.'
          ],
          code: `<head>
    <style>
        h1 {
            text-align:center;
            background-color:blue;
        |
    </style>
</head>
<h1>Login</h1>`
        },
        {
          heading: '3. External styles',
          list: [
            '<strong>Selector:</strong> (e.g., <code>h1</code> is a tag name selector)',
            '<strong>{|</strong> curly brackets define the scope of the rules',
            '<strong>CSS properties:</strong> Properties are applied inside the curly brackets',
            'background-color',
            'color',
            'font-size',
            'font-family: verdana;',
            'text-align',
            'width',
            'height',
            'Styles written inside a separate CSS file are called external styles.',
            'Use external styles when the same styles are needed across multiple pages.',
            'Import the external CSS file inside the <code><head></code> element using the <code><link></code> tag.'
          ],
          example: {
            title: 'Example',
            code: `<head>
    <link rel="stylesheet" href="styles.css">
</head>
<h1>Login</h1>`,
            output: `h1 {
    text-align:center;
    background-color:blue;
    color: white;
|`,
            type: 'code'
          }
        }
      ]
    },
    'text-formatting': {
      title: 'HTML Text Formatting',
      sections: [
        {
          heading: 'HTML Text Formatting',
          content: [
            'Tags like <code><b></code> , <code><i></code> , and <code><strong></code> format text.'
          ],
          code: '<b>Bold</b> <i>Italic</i>'
        },
        {
          heading: 'Example:',
          code: '<b>Bold</b> <i>Italic</i>'
        }
      ]
    },
    quotations: {
      title: 'HTML Quotation and Citation Elements',
      sections: [
        {
          heading: 'HTML Quotation and Citation Elements',
          content: [
            'Use <code><blockquote></code> and <code><cite></code> for quotations.'
          ],
          code: '<blockquote cite="https://example.com">Quote here</blockquote>'
        },
        {
          heading: 'Example:',
          code: '<blockquote cite="https://example.com">Quote here</blockquote>'
        }
      ]
    },
    colors: {
      title: 'HTML Colors',
      sections: [
        {
          heading: 'HTML Colors',
          content: [
            'Colors can be specified using names, HEX, or RGB.'
          ],
          code: '<p style="color: #FF0000;">Red text</p>'
        },
        {
          heading: 'Example:',
          code: '<p style="color: #FF0000;">Red text</p>'
        }
      ]
    }
  },
  module3: {
    css: {
      title: 'HTML Styles - CSS',
      sections: [
        {
          heading: 'HTML Styles - CSS',
          content: [
            'CSS can be applied inline, internally, or externally.'
          ],
          code: `<style>
p { color: green; |
</style>`
        },
        {
          heading: 'Example:',
          code: `<style>
p { color: green; |
</style>`
        }
      ]
    },
    links: {
      title: 'HTML Links',
      sections: [
        {
          heading: 'HTML Links',
          content: [
            'Links are created with the <code><a></code> tag.'
          ],
          code: '<a href="https://example.com">Visit Example</a>'
        },
        {
          heading: 'Example:',
          code: '<a href="https://example.com">Visit Example</a>'
        }
      ]
    },
    'links-detailed': {
      title: 'HTML Links <a> Tag (Detailed)',
      sections: [
        {
          heading: 'HTML Links <a> Tag (Detailed)',
          example: {
            title: 'Example',
            code: `<head>
    <style>
        h2 {
            height: 200px;
            border: 2px solid black;
        }
    </style>
</head>
<a href="#food-menu">Go to food menu</a>

<h2>Chapter 1</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 2</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 3</h2>
<p>This chapter explains ba bla bla</p>

<h2 id="C4">Chapter 4</h2>
<p>This chapter explains ba bla bla</p>

<h1 id="food-menu">Food menu</h1>
<p>This chapter explains ba bla bla</p>`,
            output: `<a href="/html/signin.html">Signin</a>
<a href="D://html/signin.html">Signin</a>
<a href="https://trinitstechnologies.com/trinits-web-ang/assets/images/ssstockalerts.jpg">Image</a>

<a href="signin.html" target="_blank">Go to ssstockalerts</a>

<a href="abc">Send email</a>

<button> <a href="https://trinitstechnologies.com/trinits-web-ang/#/home">HTML Tutorial</a></button>
<p><a href="https://trinitstechnologies.com/trinits-web-ang/#/home">HTML tutorial</a></p>

<a>
<button>
<span>`,
            type: 'code'
          }
        },
        {
          heading: 'Inline Elements',
          list: [
            'Inline elements always start on the same line.',
            'They occupy only the required width.',
            'Margin top and bottom are not applicable.',
            'Width and height are not applicable.'
          ],
          code: `<a>
<button>
<span>`
        }
      ]
    },
    images: {
      title: 'Images',
      sections: [
        {
          heading: 'Images',
          content: [
            '-------',
            '	1. src - Specifies the source path to the image',
            '	2. alt',
            '		- This attribute provides an alternate text for an image, if the user for some reason cannot view it.',
            '		- This attribute value will be used by screen readers.',
            'Note:- Make sure that images are also available in the same director where html files are available.',
            'Tooltips:-',
            '--------',
            '	<button title="This downloads the csv format data">Download</button>'
          ],
          list: [
            'Images are displayed in the html using the <img> tag.',
            'It can display different types of images in the browser like jpg, png, jpeg, gif formats.',
            '<img> tag has mainly below attributes:',
            'using "title" attribute we can define tooltip for html tags.',
            'Tooltips provides the description about the elements.'
          ]
        },
        {
          heading: 'Example',
          code: `<h1>Image demo</h1>
	<img src="logo.jpg" alt="This is sample login page image.">`
        }
      ]
    },
    favicon: {
      title: 'Favicon',
      sections: [
        {
          heading: 'Favicon',
          content: [
            '	<link rel="icon" type="image/x-icon" href="favicon.ico">'
          ],
          list: [
            'A favicon is a small image displayed next to the page title. Favicon icon represents the brand name of a company.',
            'We can use the <link> tag to add the favicon icon in the head section.'
          ]
        }
      ]
    },
    marquee: {
      title: 'Marquee Tag',
      sections: [
        {
          heading: 'Marquee Tag',
          code: `<marquee width="60%" direction="up" height="100px" scrollamount="1">
    This is a sample scrolling text that scrolls in the upper direction.
</marquee>`
        }
      ]
    },
    containers: {
      title: 'Containers: div and span',
      sections: [
        {
          heading: 'Containers: div and span',
          example: {
            title: 'Example',
            code: `<div>Header</div>
<div>Main body</div>
<div>Footer</div>`,
            output: 'Hello <span style="font-weight:bold;">Trinits</span>',
            type: 'code'
          }
        },
        {
          heading: '1. Div',
          list: [
            '<code><div></code> is a <strong>block-level</strong> container.',
            'Occupies the full width of its parent.',
            'Starts on a new line.',
            'Margin top and bottom are applicable.',
            'Next items are placed below.',
            'Width and height are applicable.'
          ],
          code: `<div>Header</div>
<div>Main body</div>
<div>Footer</div>`
        },
        {
          heading: '2. Span',
          list: [
            '<code><span></code> is an <strong>inline</strong> container.',
            'Starts on the same line as surrounding content.',
            'Occupies only the required width.',
            'Margin top and bottom are not applicable.',
            'Width and height are not applicable.'
          ],
          code: 'Hello <span style="font-weight:bold;">Trinits</span>'
        }
      ]
    }
  },
  module4: {
    tables: {
      title: 'Tables',
      sections: [
        {
          heading: 'Tables',
          example: {
            title: 'Example',
            code: `<head>
    <style>
        table,
        th,
        td {
            border: 1px solid rgb(20, 194, 145);
            border-collapse: collapse;
        }
        tr:nth-child(even) {
            background-color: #D6EEEE;
        }
        tr:hover {background-color: #D6EEEE;}
    </style>
</head>
<table>
    <colgroup>
        <col span="2" style="background-color:lightblue ;">
    </colgroup>
    <tr>
        <th colspan="2">Name</th>
        <th>Estimation</th>
    </tr>
    <tr>
        <td rowspan="2">SS</td>
        <td>Prepare header</td>
        <td>4hours</td>
    </tr>
    <tr>
        <td>Prepare footer</td>
        <td>4hours</td>
    </tr>
    <tr>
        <td>SS</td>
        <td>Prepare center screen</td>
        <td>14hours</td>
    </tr>
</table>`,
            output: `<table>
    <tr>
        <th style="width:50%">Company</th>
        <th>Contact</th>
        <th>Country</th>
    </tr>
    <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
    </tr>
    <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
    </tr>
</table>

table {
    border-spacing: 30px;
}

<th style="width:50%">Company</th>`,
            type: 'code'
          }
        }
      ]
    },
    'css-simple-selectors': {
      title: 'CSS Simple Selectors',
      sections: [
        {
          heading: '- In CSS simple selectors are mainly 3 types:',
          content: [
            '	- Based on the tag name, style will be applied.',
            '		h1 {',
            '			background-color: blue;',
            '		}',
            '		<h1>Tag name selector</h1>',
            '	- Based on the id, style will be applied.',
            '	- In css, # should be used to represent class based selector.',
            '		#id1 {',
            '			color: blue;',
            '		}',
            '		<h1 id="id1">Id selector</h1>',
            '	- Based on the class, style will be applied.',
            '	- In css, . should be used to represent class based selector.',
            '		.pr-1 {',
            '			color: red;',
            '		}',
            '		<h1 class="pr-1">Class selector</h1>'
          ],
          list: [
            'Tag name selector',
            'Id selector',
            'class selector'
          ]
        }
      ]
    },
    'html5-features': {
      title: 'HTML5 Features',
      sections: [
        {
          heading: 'HTML5 Features',
          example: {
            title: 'Example',
            code: `<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(20, 20, 150, 50);
</script>`,
            output: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<input type="email" required>
<input type="number" min="1" max="10">
<input type="search">
<input type="url">
<input type="tel">
<input type="date">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>
<input list="browsers">

// Store data
localStorage.setItem("username", "John");
// Retrieve data
var user = localStorage.getItem("username");

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});

<div draggable="true" ondragstart="drag(event)">Drag me</div>
<script>
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
</script>

<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="jobTitle">Web Developer</span>
</div>

var socket = new WebSocket("ws://example.com/socket");
socket.onopen = function() {
  socket.send("Hello Server!");
};
socket.onmessage = function(event) {
  console.log("Message from server ", event.data);
};

var worker = new Worker("worker.js");
worker.postMessage("Start");
worker.onmessage = function(e) {
  console.log(e.data);
};`,
            type: 'code'
          }
        },
        {
          heading: '1. Semantic Elements',
          list: [
            '<code><header></code> : Represents the introductory content or a set of navigational links for a section or page.',
            '<code><footer></code> : Defines the footer for a section or page, typically containing copyright, contact info, or related links.',
            '<code><nav></code> : Indicates a section of navigation links.',
            '<code><section></code> : Represents a standalone section of content, often with its own heading.',
            '<code><article></code> : Used for self-contained content that could be distributed or reused independently (e.g., blog post, news article).',
            '<code><aside></code> : Contains content tangentially related to the main content (e.g., sidebars, pull quotes).',
            '<code><figure></code> and <code><figcaption></code> : Used for images, diagrams, or code examples with optional captions.'
          ]
        },
        {
          heading: '2. Canvas',
          code: `<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(20, 20, 150, 50);
</script>`
        },
        {
          heading: '3. SVG (Scalable Vector Graphics)',
          code: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>`
        },
        {
          heading: '4. Video and Audio',
          code: `<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`
        },
        {
          heading: '5. New Form Controls',
          code: `<input type="email" required>
<input type="number" min="1" max="10">
<input type="search">
<input type="url">
<input type="tel">
<input type="date">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>
<input list="browsers">`
        },
        {
          heading: '6. Local Storage',
          code: `// Store data
localStorage.setItem("username", "John");
// Retrieve data
var user = localStorage.getItem("username");`
        },
        {
          heading: '7. Geolocation',
          code: `navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});`
        },
        {
          heading: '8. Drag and Drop',
          code: `<div draggable="true" ondragstart="drag(event)">Drag me</div>
<script>
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
</script>`
        },
        {
          heading: '9. Microdata',
          code: `<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="jobTitle">Web Developer</span>
</div>`
        },
        {
          heading: '10. WebSockets',
          code: `var socket = new WebSocket("ws://example.com/socket");
socket.onopen = function() {
  socket.send("Hello Server!");
};
socket.onmessage = function(event) {
  console.log("Message from server ", event.data);
};`
        },
        {
          heading: '11. Web Workers',
          code: `var worker = new Worker("worker.js");
worker.postMessage("Start");
worker.onmessage = function(e) {
  console.log(e.data);
};`
        }
      ]
    }
  },
  module5: {
    forms: {
      title: 'HTML Forms',
      sections: [
        {
          heading: 'HTML Forms',
          content: [
            '<div> <strong>Forms</strong> are essential for collecting user input in web applications, enabling interactions like sign-ins, searches, and data submissions. </div> <div> The <code><form></code> tag is the container for form elements and supports several key attributes to control its behavior. </div>'
          ]
        },
        {
          heading: 'Action Attribute',
          code: `<form action="/signin">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'Target Attribute',
          code: `<form action="/signin" target="_blank">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'Method Attribute',
          code: `<form action="/signin" method="post">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'Novalidate Attribute',
          code: `<form action="/signin" novalidate>
    <input type="email" name="email">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'Autocomplete Attribute',
          code: `<form action="/signin" autocomplete="on">
    <input type="text" name="username">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'Name Attribute',
          code: `<form name="userForm">
    <input type="text" name="username">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'Form Submission Checklist',
          code: `<form action="/sign" method="post">
    <fieldset>
        <legend>Personal Details</legend>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </fieldset>
    <input type="submit" value="Save User">
</form>`
        },
        {
          heading: 'Example Form',
          code: `Example form
    <form action="/sign" method="post">
        <fieldset>
            <legend>Searchable states</legend>
            <input type="text" list="states" name="states" required>
            <datalist id="states">
                <option>Andra</option>
                <option>Tamilnadu</option>
                <option>Telangana</option>
                <option>Kerala</option>
            </datalist>
            <input type="hidden" value="Trinits" name="loggedinuser" required>
        </fieldset>
        <fieldset>
            <legend>Personal details</legend>
            <div style="margin-bottom: 5px">
                <label style="width:30%; display: inline-block;">Search by name:</label>
                <input type="search" style="width:65%" autofocus>
            </div>
            <div style="margin-bottom: 5px">
                <label style="width:30%; display: inline-block;">Username:</label>
                <input type="text" style="width:65%">
            </div>
            <div style="margin-bottom: 5px">
                <label style="width:30%; display: inline-block;">Password:</label>
                <input type="password" style="width:65%">
            </div>
        </fieldset>
        <fieldset>
            <legend>Other details</legend>
            <div>
                Courses: <input type="checkbox" id="htmlCourse"><label for="htmlCourse"> HTML</label>
                <input type="checkbox"> CSS
                <input type="checkbox"> Angular
            </div>
            <div>
                Gender: <input type="radio" name="gender" id="maleGender">
                <label for="maleGender"> Male </label>
                <input type="radio" name="gender" id="feGender"> <label for="feGender"> Female </label>
                <input type="radio" name="gender" id="othGender"><label for="othGender"> Other </label>
            </div>
            <div>
                Email: <input type="email">
            </div>
            <div>
                Age: <input type="number" min="0" max="120" step="5">
            </div>
            <div>
                Salary range: <input type="range" min="0" max="120" value="20">
            </div>
            <div>
                DOB: <input type="date"> <input type="time">
            </div>
            <div>
                Color: <input type="color">
            </div>
            <div>
                File: <input type="file" multiple>
            </div>
            <div>
                State:
                <select>
                    <option>Andra</option>
                    <option selected>Tamilnadu</option>
                    <option>Tela</option>
                </select>
            </div>
            <div>
                Message: <textarea name="message"></textarea>
            </div>
        </fieldset>
        <div>
            <input type="button" value="Validate">
            <button type="submit">Validate form</button>
            <input type="submit" value="Save user">
            <input type="reset" value="Clear">
        </div>
    </form>`
        },
        {
          heading: 'Example form',
          content: [
            '<form action="/sign" method="post"> <fieldset> <legend>Searchable states</legend> <input type="text" list="states" name="states" required> <datalist id="states"> <option>Andra</option> <option>Tamilnadu</option> <option>Telangana</option> <option>Kerala</option> </datalist> <input type="hidden" value="Trinits" name="loggedinuser" required> </fieldset> <fieldset> <legend>Personal details</legend> <div style="margin-bottom: 5px"> <label style="width:30%; display: inline-block;">Search by name:</label> <input type="search" style="width:65%" autofocus> </div> <div style="margin-bottom: 5px"> <label style="width:30%; display: inline-block;">Username:</label> <input type="text" style="width:65%"> </div> <div style="margin-bottom: 5px"> <label style="width:30%; display: inline-block;">Password:</label> <input type="password" style="width:65%"> </div> </fieldset> <fieldset> <legend>Other details</legend> <div> Courses: <input type="checkbox" id="htmlCourse"><label for="htmlCourse"> HTML</label> <input type="checkbox"> CSS <input type="checkbox"> Angular </div> <div> Gender: <input type="radio" name="gender" id="maleGender"> <label for="maleGender"> Male </label> <input type="radio" name="gender" id="feGender"> <label for="feGender"> Female </label> <input type="radio" name="gender" id="othGender"><label for="othGender"> Other </label> </div> <div> Email: <input type="email"> </div> <div> Age: <input type="number" min="0" max="120" step="5"> </div> <div> Salary range: <input type="range" min="0" max="120" value="20"> </div> <div> DOB: <input type="date"> <input type="time"> </div> <div> Color: <input type="color"> </div> <div> File: <input type="file" multiple> </div> <div> State: <select> <option>Andra</option> <option selected>Tamilnadu</option> <option>Tela</option> </select> </div> <div> Message: <textarea name="message"></textarea> </div> </fieldset> <div> <input type="button" value="Validate"> <button type="submit">Validate form</button> <input type="submit" value="Save user"> <input type="reset" value="Clear"> </div> </form>'
          ]
        }
      ]
    },
    'form-elements': {
      title: 'HTML Form Elements',
      sections: [
        {
          heading: 'HTML Form Elements',
          content: [
            '<div> HTML provides several elements to create interactive forms, each serving a specific purpose in collecting user input. </div>'
          ]
        },
        {
          heading: 'Input Element',
          example: {
            title: 'Example',
            code: `<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">`,
            output: `<input type="text" placeholder="Enter text">
<input type="email" placeholder="Enter email">
<input type="submit" value="Submit">`,
            type: 'code'
          }
        },
        {
          heading: 'Label Element',
          code: `<label for="username">Username:</label>
<input type="text" id="username" name="username">`
        },
        {
          heading: 'Select Element',
          code: `State:
    <select name="state">
        <option>Andhra</option>
        <option selected>Tamilnadu</option>
        <option>Tela</option>
    </select>`
        },
        {
          heading: 'Textarea Element',
          code: '<textarea name="message" rows="4" cols="50"></textarea>'
        },
        {
          heading: 'Button Element',
          code: `<button type="submit">Submit</button>
<button type="reset">Reset</button>`
        },
        {
          heading: 'Fieldset and Legend Elements',
          code: `<fieldset>
    <legend>Personal Details</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
</fieldset>`
        },
        {
          heading: 'Datalist Element',
          code: `Choose your browser:
<input list="browsers" name="browser" id="browser">
<datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
</datalist>`
        },
        {
          heading: 'Input Tag Attributes',
          content: [
            '<div> The <code><input></code> element supports various attributes to control its behavior and appearance. </div>'
          ]
        },
        {
          heading: 'Value Attribute',
          code: '<input type="text" value="Default Text">'
        },
        {
          heading: 'Readonly Attribute',
          code: '<input type="text" value="Read-only" readonly>'
        },
        {
          heading: 'Disabled Attribute',
          code: '<input type="text" value="Disabled" disabled>'
        },
        {
          heading: 'Maxlength Attribute',
          code: '<input type="text" maxlength="10">'
        },
        {
          heading: 'Min and Max Attributes',
          code: '<input type="number" min="0" max="100">'
        },
        {
          heading: 'Multiple Attribute',
          code: '<input type="file" multiple>'
        },
        {
          heading: 'Pattern Attribute',
          code: '<input type="text" pattern="[A-Za-z]{3}" title="Three letters only">'
        },
        {
          heading: 'Placeholder Attribute',
          code: '<input type="text" placeholder="Enter your name">'
        },
        {
          heading: 'Required Attribute',
          code: '<input type="text" required>'
        },
        {
          heading: 'Step Attribute',
          code: '<input type="number" step="5">'
        },
        {
          heading: 'Autofocus Attribute',
          code: '<input type="text" autofocus>'
        },
        {
          heading: 'List Attribute',
          code: `<input type="text" list="states">
<datalist id="states">
    <option>Andra</option>
    <option>Tamilnadu</option>
</datalist>`
        },
        {
          heading: 'Autocomplete Attribute',
          code: '<input type="text" autocomplete="off">'
        }
      ]
    }
  }
};
