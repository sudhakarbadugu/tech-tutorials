// HTML tutorial content - beginner-friendly, w3schools-style explanations
// Each topic has a title and an array of sections. Sections support:
//   - content: array of HTML strings (paragraphs of explanation)
//   - list: array of HTML strings (reference / property bullets)
//   - code: string of example code shown in an ExampleBox
//   - example: { title, code, output, type } for the ExampleBox component
//   - heading: string shown above the section body
//
// Inside content / list items we can use inline HTML such as <code>...</code>.

export const htmlContent = {
  module1: {
    introduction: {
      title: 'HTML Introduction',
      sections: [
        {
          heading: 'What is HTML?',
          content: [
            'HTML stands for <strong>HyperText Markup Language</strong>. It is the standard markup language used to create the structure and content of web pages. Every website you have ever visited was built using HTML.',
            'HTML is not a programming language — it does not have logic, loops, or variables. It is a <em>markup</em> language, which means its job is to label and organize content so the browser knows what each piece of content is: a heading, a paragraph, an image, a link, and so on.',
            'The current version of HTML is <strong>HTML5</strong>. Older versions like HTML 4.01 and XHTML are no longer recommended for new projects. Browsers today all support HTML5.'
          ]
        },
        {
          heading: 'A Simple HTML Document',
          content: [
            'Every HTML document starts with a <code>&lt;!DOCTYPE html&gt;</code> declaration, which tells the browser that this is an HTML5 document. After that, the entire page lives inside an <code>&lt;html&gt;</code> element, which is split into a <code>&lt;head&gt;</code> (information about the page) and a <code>&lt;body&gt;</code> (the visible content).',
            'You can save this file with a <code>.html</code> extension and open it in any web browser to see the rendered page.'
          ],
          code: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
</body>
</html>`,
          example: {
            title: 'Try it Yourself',
            code: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
</body>
</html>`,
            output: '<h1>Welcome</h1><p>This is a paragraph.</p>',
            type: 'code'
          }
        },
        {
          heading: 'Common HTML Tags You Will See',
          content: [
            'Here are the three most common tags used in nearly every HTML page. As you go through the rest of this tutorial, you will learn many more.'
          ],
          list: [
            '<code>&lt;p&gt;</code> — defines a paragraph of text.',
            '<code>&lt;a&gt;</code> — defines a hyperlink (a clickable link to another page).',
            '<code>&lt;img&gt;</code> — embeds an image on the page.'
          ]
        }
      ]
    },

    editors: {
      title: 'HTML Editors',
      sections: [
        {
          heading: 'What is an HTML Editor?',
          content: [
            'An HTML editor is the program you use to write and edit HTML files. You <em>can</em> technically use any plain text editor, but a proper code editor will highlight your tags, auto-complete common words, and catch mistakes before you open the file in a browser.',
            'On Windows, the built-in <strong>Notepad</strong> works in a pinch. On macOS, <strong>TextEdit</strong> works if you save files in plain text mode. But for real projects, a code editor will save you a lot of time.'
          ]
        },
        {
          heading: 'Recommended Code Editors',
          content: [
            'These editors are free, popular, and used by most web developers. Pick one — there is no single "right" answer.'
          ],
          list: [
            '<strong>Visual Studio Code (VS Code)</strong> — free, made by Microsoft, with the largest collection of extensions.',
            '<strong>Sublime Text</strong> — very fast, lightweight, and has a clean interface.',
            '<strong>Notepad++</strong> — Windows only, simple, and a long-time favorite.',
            '<strong>WebStorm / PhpStorm</strong> — paid, but very powerful, made by JetBrains.'
          ]
        },
        {
          heading: 'Your First HTML File in VS Code',
          content: [
            'The workflow is the same in every editor: create a new file, write HTML, save it with a <code>.html</code> extension, and double-click the file to open it in your browser. That is it — no compiler, no setup, no special tools needed.'
          ],
          code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, world!</h1>
</body>
</html>`,
          example: {
            title: 'Try it Yourself',
            code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, world!</h1>
</body>
</html>`,
            output: '<h1>Hello, world!</h1>',
            type: 'code'
          }
        }
      ]
    },

    'tag-doctype': {
      title: 'HTML Tags and the DOCTYPE Declaration',
      sections: [
        {
          heading: 'What is an HTML Tag?',
          content: [
            'An HTML tag is a keyword wrapped in angle brackets (<code>&lt;</code> and <code>&gt;</code>). Tags are how you mark up your content. Most tags come in pairs: an <strong>opening tag</strong> and a <strong>closing tag</strong>, with the content between them.',
            'The closing tag looks the same as the opening tag, but with a forward slash before the tag name. For example, <code>&lt;p&gt;</code> opens a paragraph, and <code>&lt;/p&gt;</code> closes it. Some tags, like <code>&lt;img&gt;</code> or <code>&lt;br&gt;</code>, do not need a closing tag — these are called <strong>void elements</strong> or <strong>self-closing</strong> tags.'
          ],
          code: `<h1>Header element</h1>
<p>This is a paragraph element.</p>`,
          example: {
            title: 'Example',
            code: `<h1>Header element</h1>
<p>This is a paragraph element.</p>`,
            output: '<h1>Header element</h1><p>This is a paragraph element.</p>',
            type: 'code'
          }
        },
        {
          heading: 'The DOCTYPE Declaration',
          content: [
            'The <code>&lt;!DOCTYPE html&gt;</code> declaration is not actually an HTML tag — it is an <em>instruction</em> to the browser. It tells the browser: "this document is written in HTML5".',
            'The DOCTYPE must be the very first line of your HTML file, before the <code>&lt;html&gt;</code> tag. Without it, the browser may render your page in <strong>quirks mode</strong>, which can cause unpredictable styling. With it, the browser uses <strong>standards mode</strong> and follows the modern HTML5 rules.',
            'In older versions of HTML, the DOCTYPE was long and complicated, referencing a DTD (Document Type Definition) file. In HTML5, it is just the single short string <code>&lt;!DOCTYPE html&gt;</code>.'
          ],
          code: `<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>My First Heading</h1>
    </body>
</html>`,
          example: {
            title: 'Example',
            code: `<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>My First Heading</h1>
    </body>
</html>`,
            output: '<h1>My First Heading</h1>',
            type: 'code'
          }
        }
      ]
    },

    'html-structure': {
      title: 'HTML Page Structure',
      sections: [
        {
          heading: 'The Three Main Parts of an HTML Page',
          content: [
            'Every HTML page has three main building blocks: the <code>&lt;!DOCTYPE html&gt;</code> declaration, the <code>&lt;html&gt;</code> root element, and inside it, the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> elements. The head holds information <em>about</em> the page, while the body holds the page content itself.',
            'You will see this same skeleton on every HTML page you ever write or read, so it is worth memorizing.'
          ]
        },
        {
          heading: '1. The <head> Element',
          content: [
            'The <code>&lt;head&gt;</code> element is a container for metadata — information about the page that is not displayed on the screen. Search engines, browsers, and social media sites read the head to learn the page title, description, and styling.',
            'Common things to put inside the <code>&lt;head&gt;</code>:'
          ],
          list: [
            '<strong>Title</strong> — the <code>&lt;title&gt;</code> tag sets the text shown in the browser tab and used by search engines.',
            '<strong>Internal CSS</strong> — the <code>&lt;style&gt;</code> tag holds CSS rules for the page.',
            '<strong>External CSS</strong> — the <code>&lt;link&gt;</code> tag imports a separate CSS file.',
            '<strong>JavaScript</strong> — the <code>&lt;script&gt;</code> tag holds inline JS or imports a JS file.',
            '<strong>Favicon</strong> — the <code>&lt;link rel="icon"&gt;</code> tag sets the small icon shown in the browser tab.',
            '<strong>Meta tags</strong> — <code>&lt;meta&gt;</code> tags provide metadata like the page description, character set, and viewport settings.'
          ]
        },
        {
          heading: '2. The <body> Element',
          content: [
            'The <code>&lt;body&gt;</code> element holds everything that is <em>visible</em> on the page: headings, paragraphs, images, links, tables, lists, and so on. Anything you want the user to see in the browser window goes inside the body.',
            'The body can only be used once per page, and it always comes after the head.'
          ]
        },
        {
          heading: 'Full HTML Page Example',
          content: [
            'Here is what a complete HTML page looks like. Notice the order: <code>DOCTYPE</code> first, then <code>&lt;html&gt;</code>, then <code>&lt;head&gt;</code>, then <code>&lt;body&gt;</code>. Each opening tag has a matching closing tag.'
          ],
          code: `<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>Welcome to my website</h1>
        <p>This is the home page.</p>
    </body>
</html>`,
          example: {
            title: 'Try it Yourself',
            code: `<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>Welcome to my website</h1>
        <p>This is the home page.</p>
    </body>
</html>`,
            output: '<h1>Welcome to my website</h1><p>This is the home page.</p>',
            type: 'code'
          }
        }
      ]
    },

    elements: {
      title: 'HTML Elements',
      sections: [
        {
          heading: 'What is an HTML Element?',
          content: [
            'An HTML element is the complete unit made up of an opening tag, the content inside it, and the closing tag. When you write <code>&lt;p&gt;Hello&lt;/p&gt;</code>, the whole thing — the opening <code>&lt;p&gt;</code>, the word "Hello", and the closing <code>&lt;/p&gt;</code> — is the paragraph element.',
            'Some elements are <strong>empty</strong> (also called <strong>void</strong>), meaning they have no content and no closing tag. For example, the line break <code>&lt;br&gt;</code> and the image <code>&lt;img&gt;</code> are void elements.'
          ],
          code: `<p>This is a paragraph.</p>
<br>
<img src="cat.jpg" alt="A cat">`,
          example: {
            title: 'Example',
            code: '<p>This is a paragraph.</p>',
            output: '<p>This is a paragraph.</p>',
            type: 'code'
          }
        },
        {
          heading: 'Nested Elements',
          content: [
            'HTML elements can be <strong>nested</strong>, meaning one element can live inside another. The inner element must be closed <em>before</em> the outer element is closed, otherwise your page will render in unexpected ways.',
            'In the example below, the <code>&lt;b&gt;</code> (bold) element is nested inside the <code>&lt;p&gt;</code> element, making just one word of the paragraph bold.'
          ],
          code: `<p>This is a <b>bold</b> word inside a paragraph.</p>`,
          example: {
            title: 'Example',
            code: '<p>This is a <b>bold</b> word inside a paragraph.</p>',
            output: '<p>This is a <b>bold</b> word inside a paragraph.</p>',
            type: 'code'
          }
        }
      ]
    },

    attributes: {
      title: 'HTML Attributes',
      sections: [
        {
          heading: 'What is an HTML Attribute?',
          content: [
            'Attributes provide extra information about an element. They are always written in the <strong>opening tag</strong>, and they come in name/value pairs like <code>name="value"</code>.',
            'For example, the <code>&lt;a&gt;</code> (anchor) tag uses the <code>href</code> attribute to say where the link should go. Without that attribute, the link has no destination.',
            'A few rules to remember:',
            'Attributes go in the opening tag only (never in the closing tag).',
            'Attribute values should be wrapped in quotes (double quotes are most common).',
            'Some attributes are boolean — their mere presence is enough to "turn them on".'
          ],
          list: [
            '<code>href</code> — the URL a link points to.',
            '<code>src</code> — the path to an image, script, or other resource.',
            '<code>alt</code> — alternative text for an image (shown if the image fails to load).',
            '<code>style</code> — inline CSS for the element.',
            '<code>title</code> — extra information, often shown as a tooltip on hover.',
            '<code>lang</code> — the language of the page content.'
          ],
          code: `<a href="https://example.com">Visit Example</a>`,
          example: {
            title: 'Example',
            code: '<a href="https://example.com">Visit Example</a>',
            output: '<a href="https://example.com">Visit Example</a>',
            type: 'code'
          }
        }
      ]
    },

    'html-attributes-detailed': {
      title: 'Common HTML Attributes in Detail',
      sections: [
        {
          heading: 'Attributes You Will Use Every Day',
          content: [
            'These are the most common attributes you will see when reading and writing HTML. Each one belongs to a specific tag, but understanding them all in one place will help you remember which one to reach for.',
            'A link uses <code>href</code> to define where it goes, and <code>target</code> to decide whether to open in the same tab or a new one. An image uses <code>src</code> for the file path and <code>alt</code> for the fallback text. Meta tags use <code>name</code> and <code>content</code> in pairs to give the browser structured information about the page.'
          ],
          list: [
            '<code>href</code> — destination URL for a link.',
            '<code>target</code> — where to open the linked document (e.g., <code>_blank</code> opens in a new tab).',
            '<code>src</code> — the file path of an image, video, audio, or script.',
            '<code>alt</code> — alternative text for an image, used by screen readers and shown if the image fails.',
            '<code>name</code> — the name of a meta tag (e.g., <code>name="description"</code>).',
            '<code>content</code> — the value paired with a <code>name</code> on a meta tag.',
            '<code>charset</code> — the character encoding of the page (almost always <code>UTF-8</code>).',
            '<code>viewport</code> — controls how the page is displayed on mobile devices.'
          ],
          code: `<a href="login.html" target="_blank">Login</a>
<img src="logo.jpg" alt="Company logo">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="A short summary of this page.">`,
          example: {
            title: 'Example',
            code: `<a href="login.html" target="_blank">Login</a>
<img src="logo.jpg" alt="Company logo">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
            output: '<a href="login.html" target="_blank">Login</a>',
            type: 'code'
          }
        }
      ]
    },

    'meta-tag': {
      title: 'The HTML <meta> Tag',
      sections: [
        {
          heading: 'What is the <meta> Tag?',
          content: [
            'The <code>&lt;meta&gt;</code> tag lives inside the <code>&lt;head&gt;</code> and provides <strong>metadata</strong> about the page. Metadata is information about information — it describes the page to browsers, search engines, and social media sites, but is not shown to the user on the page itself.',
            'The <code>&lt;meta&gt;</code> tag is a void element, so it has no closing tag. It usually comes in pairs of attributes: <code>name</code> (what kind of metadata) and <code>content</code> (the value of that metadata).'
          ]
        },
        {
          heading: 'Common Meta Tags',
          content: [
            'You will end up using these three meta tags on virtually every page you build.'
          ],
          list: [
            '<strong>charset</strong> — declares the character encoding; always use <code>UTF-8</code> so the page can show every character.',
            '<strong>viewport</strong> — controls how the page is sized on mobile devices; without it, phones will render the page as if it were on a desktop and zoom out.',
            '<strong>description</strong> — a short summary of the page, often used by Google as the snippet shown in search results.'
          ],
          code: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Trinits is a product based company.">`,
          example: {
            title: 'Example: description',
            code: '<meta name="description" content="Trinits is a product based company.">',
            output: '<meta name="description" content="Trinits is a product based company.">',
            type: 'code'
          },
          example2: {
            title: 'Example: viewport for mobile responsiveness',
            code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
            output: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
            type: 'code'
          }
        }
      ]
    }
  },

  module2: {
    'headings-paragraphs-block': {
      title: 'Headings, Paragraphs, and Block Elements',
      sections: [
        {
          heading: 'HTML Headings',
          content: [
            'HTML has six levels of headings, from <code>&lt;h1&gt;</code> (the most important) down to <code>&lt;h6&gt;</code> (the least important). Headings are used to give your page structure — like the chapters and sub-chapters in a book.',
            'You should use <code>&lt;h1&gt;</code> once per page, for the main title. Use <code>&lt;h2&gt;</code> for major sections, <code>&lt;h3&gt;</code> for sub-sections, and so on. Headings are also how screen readers and search engines understand the outline of your page, so use them in the correct order rather than skipping levels just to change the font size.'
          ],
          list: [
            '<code>&lt;h1&gt;</code> — largest, used for the main page title (use once per page).',
            '<code>&lt;h2&gt;</code> — second level, used for major sections.',
            '<code>&lt;h3&gt;</code> — third level, used for sub-sections.',
            '<code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code> — deeper levels for very detailed outlines.'
          ],
          code: `<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>`,
          example: {
            title: 'Example',
            code: `<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`,
            output: '<h1>This is heading 1</h1><h2>This is heading 2</h2><h3>This is heading 3</h3>',
            type: 'code'
          }
        },
        {
          heading: 'HTML Paragraphs',
          content: [
            'The <code>&lt;p&gt;</code> tag defines a paragraph of text. Browsers automatically add some space (a margin) above and below each paragraph so the text is easy to read.',
            'You should put plain text inside <code>&lt;p&gt;</code> tags rather than just dumping text directly on the page. This gives the browser (and your CSS) a clear handle to style each paragraph as a unit.'
          ],
          code: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`,
          example: {
            title: 'Example',
            code: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`,
            output: '<p>This is a paragraph.</p><p>This is another paragraph.</p>',
            type: 'code'
          }
        },
        {
          heading: 'Block-Level Elements',
          content: [
            'A <strong>block-level element</strong> always starts on a new line and stretches out as far left and right as it can inside its parent. By default, two block elements will never sit side by side — each one is rendered in its own line.',
            'You can give block elements a width and a height, and they respect top and bottom margins. Most page structure (headings, paragraphs, lists, tables, divs) is built from block elements.'
          ],
          list: [
            '<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> — headings.',
            '<code>&lt;p&gt;</code> — paragraph.',
            '<code>&lt;div&gt;</code> — generic container for grouping content.',
            '<code>&lt;ol&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;dl&gt;</code>, <code>&lt;li&gt;</code> — ordered, unordered, and description lists.',
            '<code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> — semantic page regions.',
            '<code>&lt;form&gt;</code> — form container.',
            '<code>&lt;table&gt;</code> — data table.'
          ]
        }
      ]
    },

    comments: {
      title: 'HTML Comments',
      sections: [
        {
          heading: 'What is an HTML Comment?',
          content: [
            'An HTML comment is a note you write in the source code that the browser completely ignores — it is not displayed on the page. Comments are useful for explaining what a section of HTML does, leaving notes for other developers (or for future you), or temporarily hiding code you do not want to delete yet.',
            'An HTML comment starts with <code>&lt;!--</code> and ends with <code>--&gt;</code>. Anything in between is treated as a comment.'
          ],
          code: `<!-- This is a comment. It will not be shown on the page. -->
<p>This is a visible paragraph.</p>

<!--
You can also write
multi-line comments
like this.
-->`,
          example: {
            title: 'Example',
            code: '<!-- This is a comment -->\n<p>This is a paragraph.</p>',
            output: '<p>This is a paragraph.</p>',
            type: 'code'
          }
        },
        {
          heading: 'When to Use Comments',
          content: [
            'A good rule of thumb: comment anything that is not obvious from the code itself. For example, mark the start of a major section ("<!-- Header starts here -->") or explain why you made an unusual choice.',
            'Do not put sensitive information (passwords, secret keys, internal URLs) in HTML comments — anyone can view the page source and read them.'
          ]
        }
      ]
    },

    styles: {
      title: 'HTML Styles (Basic)',
      sections: [
        {
          heading: 'The style Attribute',
          content: [
            'Every HTML element can have a <code>style</code> attribute. Inside the attribute, you write <strong>CSS</strong> (Cascading Style Sheets) to change how the element looks — its color, font, size, background, and so on.',
            'This is called <strong>inline styling</strong> because the style is written directly in the line of HTML. It is the quickest way to test styling, but for real projects you will usually put your CSS in a separate file so it is easier to maintain and share across pages.',
            'CSS in a style attribute uses the form <code>property: value;</code> and you can stack multiple properties by separating them with semicolons.'
          ],
          list: [
            '<code>color</code> — the text color.',
            '<code>background-color</code> — the background color.',
            '<code>font-size</code> — how big the text is.',
            '<code>font-family</code> — the typeface.',
            '<code>text-align</code> — <code>left</code>, <code>center</code>, <code>right</code>, or <code>justify</code>.'
          ],
          code: '<p style="color: blue;">Blue text</p>',
          example: {
            title: 'Example',
            code: '<p style="color: blue;">Blue text</p>',
            output: '<p style="color: blue;">Blue text</p>',
            type: 'code'
          }
        }
      ]
    },

    'styles-inline-internal-external': {
      title: 'HTML Styles: Inline, Internal, and External CSS',
      sections: [
        {
          heading: 'Three Ways to Add CSS',
          content: [
            'CSS is the language that styles HTML — it controls colors, fonts, spacing, layout, and more. You can add CSS to an HTML page in three different ways, each useful in different situations.',
            'The choice between inline, internal, and external CSS usually comes down to scope: how many elements need the style, and how many pages need to share it.'
          ],
          list: [
            '<strong>Inline</strong> — style written directly on one element, using its <code>style</code> attribute.',
            '<strong>Internal</strong> — CSS rules written inside a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code>, applying to that one page only.',
            '<strong>External</strong> — CSS rules written in a separate <code>.css</code> file and linked from the <code>&lt;head&gt;</code>, sharable across many pages.'
          ]
        },
        {
          heading: '1. Inline Styles',
          content: [
            'Inline styles are written in the opening tag of an element using the <code>style</code> attribute. They have the highest priority of all three methods — an inline style will beat any rule from an internal or external stylesheet.',
            'Each CSS property is written as <code>name: value;</code>, and multiple properties are separated by semicolons. Use inline styles only for one-off tweaks, because they are hard to find and override later.'
          ],
          list: [
            'Inline styles are written using the <code>style</code> attribute on the opening tag.',
            'They have the highest specificity — they override styles from internal and external CSS.',
            'You can list multiple CSS properties in a single <code>style</code> attribute, separated by semicolons.',
            'Each property is a <code>name: value</code> pair, like <code>color: red;</code>.',
            'Use inline styles sparingly — for repeated styles, prefer internal or external CSS.'
          ],
          code: '<h1 style="text-align:center;background-color:blue;">Login</h1>',
          example: {
            title: 'Example',
            code: '<h1 style="text-align:center;background-color:blue;">Login</h1>',
            output: '<h1 style="text-align:center;background-color:blue;">Login</h1>',
            type: 'code'
          }
        },
        {
          heading: '2. Internal Styles',
          content: [
            'Internal styles are written inside a <code>&lt;style&gt;</code> tag that lives in the <code>&lt;head&gt;</code> of the page. Inside that tag, you write normal CSS rules: a <strong>selector</strong> (which element to style) followed by a <strong>declaration block</strong> (the properties to apply) wrapped in curly braces.',
            'Internal CSS is great for a single page that needs its own custom styles, but it will not be shared with other pages on your site.'
          ],
          list: [
            'Internal styles live inside the <code>&lt;head&gt;</code>, wrapped in a <code>&lt;style&gt;</code> tag.',
            'A CSS rule has a <strong>selector</strong> (e.g., <code>h1</code>) and a <strong>declaration block</strong> in <code>{ }</code>.',
            'Use internal styles when only one page needs the styles, or while you are prototyping.'
          ],
          code: `<head>
    <style>
        h1 {
            text-align: center;
            background-color: blue;
            color: white;
        }
    </style>
</head>
<h1>Login</h1>`,
          example: {
            title: 'Example',
            code: `<head>
    <style>
        h1 {
            text-align: center;
            background-color: blue;
            color: white;
        }
    </style>
</head>
<h1>Login</h1>`,
            output: '<h1>Login</h1>',
            type: 'code'
          }
        },
        {
          heading: '3. External Styles',
          content: [
            'External styles are written in a separate file with a <code>.css</code> extension, and linked from the HTML page using a <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code>. The same CSS file can be shared across many pages, which is how real websites are usually built.',
            'Using external CSS keeps your styling organized, makes pages load faster (the browser caches the CSS file), and lets multiple pages share the same look and feel.'
          ],
          list: [
            'External styles live in a separate file, usually named something like <code>styles.css</code>.',
            'The file is linked from the <code>&lt;head&gt;</code> using a <code>&lt;link rel="stylesheet"&gt;</code> tag.',
            'Use external styles when the same styles are needed across multiple pages.',
            'Common CSS properties include <code>background-color</code>, <code>color</code>, <code>font-size</code>, <code>font-family</code>, <code>text-align</code>, <code>width</code>, and <code>height</code>.'
          ],
          code: `<head>
    <link rel="stylesheet" href="styles.css">
</head>
<h1>Login</h1>`,
          example2: {
            title: 'styles.css',
            code: `h1 {
    text-align: center;
    background-color: blue;
    color: white;
}`,
            output: 'h1 {\n  text-align: center;\n  background-color: blue;\n  color: white;\n}',
            type: 'code'
          }
        }
      ]
    },

    'text-formatting': {
      title: 'HTML Text Formatting',
      sections: [
        {
          heading: 'Formatting Tags',
          content: [
            'HTML has special tags for making text <strong>bold</strong>, <em>italic</em>, <u>underlined</u>, or otherwise visually different. Some of these tags change only the <em>appearance</em> of the text (like <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code>), while others also change the <em>meaning</em> (like <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code>).',
            'A good rule: use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> for content that is genuinely important. Browsers style them like bold and italic by default, but screen readers will also emphasize them vocally. Use <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> when you only want a visual change with no extra meaning (e.g., highlighting a product name).'
          ],
          list: [
            '<code>&lt;b&gt;</code> — bold text, no extra importance.',
            '<code>&lt;strong&gt;</code> — important text, rendered bold by default.',
            '<code>&lt;i&gt;</code> — italic text, often used for technical terms or names.',
            '<code>&lt;em&gt;</code> — emphasized text, rendered italic by default.',
            '<code>&lt;u&gt;</code> — underlined text.',
            '<code>&lt;mark&gt;</code> — highlighted (yellow background by default).',
            '<code>&lt;small&gt;</code> — smaller text, often used for legal fine print.',
            '<code>&lt;del&gt;</code> — text marked as deleted, shown with a strikethrough.',
            '<code>&lt;ins&gt;</code> — text marked as inserted, shown underlined.',
            '<code>&lt;sub&gt;</code> — subscript (e.g., H<sub>2</sub>O).',
            '<code>&lt;sup&gt;</code> — superscript (e.g., X<sup>2</sup>).'
          ],
          code: '<b>Bold</b> <i>Italic</i> <strong>Strong</strong> <em>Emphasized</em>',
          example: {
            title: 'Example',
            code: '<b>Bold</b> <i>Italic</i>',
            output: '<b>Bold</b> <i>Italic</i>',
            type: 'code'
          }
        }
      ]
    },

    quotations: {
      title: 'Quotation and Citation Elements',
      sections: [
        {
          heading: 'Quoting Other People',
          content: [
            'When you quote someone on a web page, you should use a special HTML element instead of just typing quotation marks. This way, search engines, screen readers, and browsers know that the text came from somewhere else.',
            'HTML offers three quotation-related elements: <code>&lt;blockquote&gt;</code> for long, block-level quotes; <code>&lt;q&gt;</code> for short, inline quotes; and <code>&lt;cite&gt;</code> for citing a source by name or title.'
          ],
          list: [
            '<code>&lt;blockquote&gt;</code> — a long quote, displayed as an indented block of text.',
            '<code>&lt;cite&gt;</code> — the title of a work being cited (book, film, article, etc.).',
            '<code>&lt;q&gt;</code> — a short inline quote; the browser adds quotation marks around it.',
            '<code>&lt;abbr&gt;</code> — an abbreviation or acronym, with a <code>title</code> attribute for the full form.',
            '<code>&lt;address&gt;</code> — contact information for the author or owner of a page.'
          ],
          code: '<blockquote cite="https://example.com">Quote here</blockquote>',
          example: {
            title: 'Example',
            code: '<blockquote cite="https://example.com">Quote here</blockquote>',
            output: '<blockquote cite="https://example.com">Quote here</blockquote>',
            type: 'code'
          }
        }
      ]
    },

    colors: {
      title: 'HTML Colors',
      sections: [
        {
          heading: 'How to Specify Colors in HTML',
          content: [
            'Colors in HTML can be specified in three common ways. You can use a <strong>named color</strong> like <code>"red"</code> or <code>"tomato"</code> — there are about 140 of them. You can use a <strong>HEX code</strong> like <code>#FF0000</code>, which is a six-digit code for a specific shade. Or you can use an <strong>RGB value</strong> like <code>rgb(255, 0, 0)</code>, which lists the amount of red, green, and blue light.',
            'In modern CSS, you will also see <code>rgba()</code> (which adds an alpha channel for transparency) and <code>hsl()</code> (which describes colors by hue, saturation, and lightness). All of these can be used inside any CSS property that accepts a color, like <code>color</code>, <code>background-color</code>, or <code>border-color</code>.'
          ],
          list: [
            '<strong>Named colors</strong> — easy to read, e.g., <code>red</code>, <code>blue</code>, <code>tomato</code>.',
            '<strong>HEX</strong> — six-digit code starting with <code>#</code>, e.g., <code>#FF0000</code> for pure red.',
            '<strong>RGB</strong> — comma-separated red/green/blue values from 0 to 255, e.g., <code>rgb(255, 0, 0)</code>.',
            '<strong>RGBA</strong> — like RGB plus an alpha value for transparency, e.g., <code>rgba(255, 0, 0, 0.5)</code>.',
            '<strong>HSL</strong> — hue (0–360), saturation and lightness (0–100%), e.g., <code>hsl(0, 100%, 50%)</code>.'
          ],
          code: '<p style="color: #FF0000;">Red text</p>',
          example: {
            title: 'Example',
            code: '<p style="color: #FF0000;">Red text</p>',
            output: '<p style="color: #FF0000;">Red text</p>',
            type: 'code'
          }
        }
      ]
    }
  },

  module3: {
    css: {
      title: 'CSS in HTML',
      sections: [
        {
          heading: 'Adding CSS to a Page',
          content: [
            'CSS (Cascading Style Sheets) is the language that controls the visual presentation of HTML — colors, fonts, spacing, layout, animations, and more. As covered earlier, there are three ways to add CSS to a page: inline on a single element, internally in a <code>&lt;style&gt;</code> tag, or externally in a separate <code>.css</code> file.',
            'The <strong>cascade</strong> in CSS means that when multiple rules target the same element, the browser follows a specific order to decide which one wins. Generally, more specific selectors and later rules override earlier ones, and inline styles override everything else.'
          ],
          code: `<style>
p {
    color: green;
}
</style>`,
          example: {
            title: 'Example',
            code: `<style>
p {
    color: green;
}
</style>`,
            output: '<p style="color: green;">This paragraph is green.</p>',
            type: 'code'
          }
        }
      ]
    },

    links: {
      title: 'HTML Links (Basic)',
      sections: [
        {
          heading: 'Creating a Link',
          content: [
            'Links are what make the web the <em>web</em> — they let users jump from one page to another with a single click. In HTML, a link is created with the <code>&lt;a&gt;</code> (anchor) tag.',
            'The text between the opening and closing tags becomes the clickable part of the link (usually shown underlined and in blue by default). The <code>href</code> attribute on the opening tag tells the browser <em>where</em> the link should go — it can be another web page, an image, a PDF, an email address, or a spot on the same page.'
          ],
          code: '<a href="https://example.com">Visit Example</a>',
          example: {
            title: 'Example',
            code: '<a href="https://example.com">Visit Example</a>',
            output: '<a href="https://example.com">Visit Example</a>',
            type: 'code'
          }
        }
      ]
    },

    'links-detailed': {
      title: 'The HTML <a> Tag in Detail',
      sections: [
        {
          heading: 'What Can a Link Point To?',
          content: [
            'The <code>&lt;a&gt;</code> tag is more flexible than you might think. The <code>href</code> attribute can be a full URL (like <code>https://google.com</code>), a relative path to another HTML file in the same project (like <code>signin.html</code>), a file on your computer (like <code>D:/html/signin.html</code>), an email address, a phone number, or a fragment of the current page starting with <code>#</code>.',
            'The <code>target</code> attribute controls <em>where</em> the linked page opens. <code>_blank</code> opens the link in a new tab, which is useful for external links so the user does not leave your site.'
          ],
          list: [
            '<strong>Absolute URL</strong> — a full web address, e.g., <code>href="https://example.com/page.html"</code>.',
            '<strong>Relative URL</strong> — a path relative to the current page, e.g., <code>href="signin.html"</code>.',
            '<strong>Anchor link</strong> — jumps to an <code>id</code> on the same page, e.g., <code>href="#section2"</code>.',
            '<strong>Email link</strong> — opens the user&#39;s mail client, e.g., <code>href="mailto:[email protected]"</code>.',
            '<strong>target="_blank"</strong> — opens the link in a new browser tab or window.'
          ],
          code: `<a href="/html/signin.html">Signin</a>
<a href="https://example.com/article">Read article</a>
<a href="signin.html" target="_blank">Go to Signin (new tab)</a>
<a href="mailto:[email protected]">Send email</a>`,
          example: {
            title: 'Example',
            code: `<a href="signin.html" target="_blank">Go to Signin</a>`,
            output: '<a href="signin.html" target="_blank">Go to Signin</a>',
            type: 'code'
          }
        },
        {
          heading: 'Anchor Links — Jumping to a Section on the Same Page',
          content: [
            'If you have a long page, you can let users jump straight to a specific section. Add an <code>id</code> attribute to the element you want to jump <em>to</em>, and an <code>href</code> starting with <code>#</code> on the link you want to jump <em>from</em>. The browser will scroll to that element when the user clicks the link.'
          ],
          code: `<a href="#food-menu">Go to food menu</a>

<h2>Chapter 1</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 2</h2>
<p>This chapter explains ba bla bla</p>

<h2>Chapter 3</h2>
<p>This chapter explains ba bla bla</p>

<h1 id="food-menu">Food menu</h1>
<p>This is the food menu section.</p>`,
          example: {
            title: 'Example',
            code: `<a href="#food-menu">Go to food menu</a>
<h1 id="food-menu">Food menu</h1>`,
            output: '<a href="#food-menu">Go to food menu</a><h1 id="food-menu">Food menu</h1>',
            type: 'code'
          }
        },
        {
          heading: 'Inline Elements',
          content: [
            'The <code>&lt;a&gt;</code> tag is an <strong>inline element</strong>. Inline elements sit on the same line as the surrounding text, take up only as much width as they need, and do not accept width, height, or top/bottom margins. Other common inline elements are <code>&lt;button&gt;</code> and <code>&lt;span&gt;</code>.'
          ],
          list: [
            'Inline elements always start on the same line as the content around them.',
            'They occupy only the width they need.',
            'Top and bottom margins do not apply (left and right do).',
            'Width and height properties do not apply.',
            'Examples of inline elements: <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;span&gt;</code>.'
          ]
        }
      ]
    },

    images: {
      title: 'Images',
      sections: [
        {
          heading: 'Adding an Image to a Page',
          content: [
            'The <code>&lt;img&gt;</code> tag is used to embed an image on a page. It is a void element (no closing tag), and it requires at least two attributes: <code>src</code> (the path to the image file) and <code>alt</code> (alternative text describing the image).',
            'The <code>alt</code> attribute is shown in place of the image if it fails to load, and is read aloud by screen readers so visually impaired users know what the image shows. Always write a meaningful <code>alt</code> — never leave it empty unless the image is purely decorative.'
          ],
          list: [
            '<code>src</code> — the file path or URL of the image (required).',
            '<code>alt</code> — alternative text shown if the image fails to load, and read by screen readers (required).',
            '<code>width</code> and <code>height</code> — set the display size in pixels.',
            '<code>title</code> — shows a tooltip when the user hovers over the image.',
            '<code>loading="lazy"</code> — defers loading the image until it is near the viewport (great for performance).'
          ]
        },
        {
          heading: 'Image Example',
          content: [
            'Make sure the image file lives somewhere the browser can find it — usually the same folder as your HTML file, or a subfolder like <code>images/</code>. If the path is wrong, the image will not show and the <code>alt</code> text will appear instead.'
          ],
          code: `<h1>Image demo</h1>
<img src="logo.jpg" alt="This is the company logo.">`,
          example: {
            title: 'Example',
            code: '<img src="logo.jpg" alt="Company logo">',
            output: '<img src="logo.jpg" alt="Company logo">',
            type: 'code'
          }
        },
        {
          heading: 'Tooltips with the title Attribute',
          content: [
            'The <code>title</code> attribute is not specific to images — it can be used on almost any element. When the user hovers over the element, the browser shows a small tooltip with the <code>title</code> text. This is a quick way to add a short explanation without cluttering the page.'
          ],
          code: '<button title="This downloads the csv format data">Download</button>'
        }
      ]
    },

    favicon: {
      title: 'Favicon',
      sections: [
        {
          heading: 'What is a Favicon?',
          content: [
            'A favicon is the small icon you see in the browser tab, next to the page title. It usually contains a company logo or a single character that represents the brand. It is also shown in bookmarks, history, and on the home screen of mobile devices.',
            'You add a favicon to your page with a <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code>. The <code>rel</code> attribute must be <code>"icon"</code>, the <code>type</code> should match the file format, and the <code>href</code> points to the image file.'
          ],
          list: [
            'A favicon is a small image shown next to the page title in the browser tab.',
            'It helps users recognize your site at a glance and is part of your brand.',
            'Add it with a <code>&lt;link&gt;</code> tag inside the <code>&lt;head&gt;</code> element.',
            'Common formats are <code>.ico</code>, <code>.png</code>, and <code>.svg</code>.'
          ],
          code: '<link rel="icon" type="image/x-icon" href="favicon.ico">',
          example: {
            title: 'Example',
            code: '<link rel="icon" type="image/x-icon" href="favicon.ico">',
            output: '<link rel="icon" type="image/x-icon" href="favicon.ico">',
            type: 'code'
          }
        }
      ]
    },

    marquee: {
      title: 'Marquee Tag',
      sections: [
        {
          heading: 'Scrolling Text with <marquee>',
          content: [
            'The <code>&lt;marquee&gt;</code> tag is an older HTML element that scrolls text or images across the page. It was popular in the early days of the web for news tickers and banner-style announcements.',
            'Today, <code>&lt;marquee&gt;</code> is <strong>deprecated</strong> — browsers still support it, but it is no longer part of the HTML standard and should be avoided in new projects. The same effect can be achieved with modern CSS animations, which give you much finer control.',
            'The attributes below are the ones you will see on older pages:'
          ],
          list: [
            '<code>direction</code> — <code>left</code>, <code>right</code>, <code>up</code>, or <code>down</code>.',
            '<code>width</code> and <code>height</code> — the size of the marquee box.',
            '<code>scrollamount</code> — how many pixels the content moves per step (higher = faster).',
            '<code>behavior</code> — <code>scroll</code> (continuous), <code>slide</code> (once), or <code>alternate</code> (bounce back and forth).'
          ],
          code: `<marquee width="60%" direction="up" height="100px" scrollamount="1">
    This is a sample scrolling text that scrolls in the upper direction.
</marquee>`,
          example: {
            title: 'Example',
            code: `<marquee width="60%" direction="up" height="100px" scrollamount="1">
    This is sample scrolling text.
</marquee>`,
            output: '<marquee direction="up">This is sample scrolling text.</marquee>',
            type: 'code'
          }
        }
      ]
    },

    containers: {
      title: 'Containers: <div> and <span>',
      sections: [
        {
          heading: 'Generic Containers',
          content: [
            'When there is no semantic tag that fits, HTML gives you two generic containers: <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>. They have no meaning on their own — their job is to group other elements so you can style them together with CSS or manipulate them with JavaScript.',
            'The difference is that <code>&lt;div&gt;</code> is a <strong>block-level</strong> container (it starts a new line) and <code>&lt;span&gt;</code> is an <strong>inline</strong> container (it stays on the same line).'
          ]
        },
        {
          heading: '1. <div> — The Block Container',
          content: [
            'A <code>&lt;div&gt;</code> is a block-level element: it always starts on a new line, takes up the full width of its parent, and accepts width, height, and vertical margin. Use it to group larger sections of a page — the header, the sidebar, the footer, and so on.'
          ],
          list: [
            '<code>&lt;div&gt;</code> is a <strong>block-level</strong> container.',
            'It starts on a new line and takes up the full width of its parent.',
            'Top and bottom margins are applicable.',
            'Width and height properties work.',
            'Use it to group larger chunks of a page, like header, main, and footer.'
          ],
          code: `<div>Header</div>
<div>Main body</div>
<div>Footer</div>`,
          example: {
            title: 'Example',
            code: `<div>Header</div>
<div>Main body</div>
<div>Footer</div>`,
            output: '<div>Header</div><div>Main body</div><div>Footer</div>',
            type: 'code'
          }
        },
        {
          heading: '2. <span> — The Inline Container',
          content: [
            'A <code>&lt;span&gt;</code> is an inline element: it sits on the same line as surrounding text, takes up only the width it needs, and does <em>not</em> accept width, height, or vertical margin. Use it to style a small piece of text inside a paragraph — for example, to highlight a single word in a different color.'
          ],
          list: [
            '<code>&lt;span&gt;</code> is an <strong>inline</strong> container.',
            'It starts on the same line as the surrounding content.',
            'It occupies only the width it needs.',
            'Top and bottom margins are not applicable.',
            'Width and height properties are not applicable.',
            'Use it to style a small piece of text inside a larger block of text.'
          ],
          code: 'Hello <span style="font-weight:bold;">Trinits</span>',
          example: {
            title: 'Example',
            code: 'Hello <span style="font-weight:bold;">Trinits</span>',
            output: 'Hello <span style="font-weight:bold;">Trinits</span>',
            type: 'code'
          }
        }
      ]
    }
  },

  module4: {
    tables: {
      title: 'HTML Tables',
      sections: [
        {
          heading: 'Displaying Data in a Table',
          content: [
            'An HTML table is a grid of rows and columns, like a spreadsheet. Tables are meant for displaying <strong>tabular data</strong> — information that naturally fits into rows and columns, like a list of products, a class roster, or a price list. They were once abused for page layout, but today CSS is used for layout and tables are used only for data.',
            'A table is built row by row. Each row (<code>&lt;tr&gt;</code>) contains cells, which can be either header cells (<code>&lt;th&gt;</code>) or data cells (<code>&lt;td&gt;</code>).'
          ],
          list: [
            '<code>&lt;table&gt;</code> — the container for the whole table.',
            '<code>&lt;tr&gt;</code> — a single table row.',
            '<code>&lt;th&gt;</code> — a table header cell (bold and centered by default).',
            '<code>&lt;td&gt;</code> — a table data cell.',
            '<code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> — semantic groupings of rows.',
            '<code>&lt;colgroup&gt;</code> and <code>&lt;col&gt;</code> — apply styles to entire columns.',
            '<code>colspan</code> — make one cell span multiple columns.',
            '<code>rowspan</code> — make one cell span multiple rows.'
          ],
          code: `<table>
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
</table>`,
          example: {
            title: 'Example',
            code: `<table border="1">
  <tr>
    <th>Company</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds</td>
    <td>Germany</td>
  </tr>
</table>`,
            output: '<table><tr><th>Company</th><th>Country</th></tr><tr><td>Alfreds</td><td>Germany</td></tr></table>',
            type: 'code'
          }
        },
        {
          heading: 'Styling a Table with CSS',
          content: [
            'Plain HTML tables look quite plain. With a few lines of CSS you can add borders, padding, striped rows, hover effects, and spacing. The example below uses <code>border-collapse</code> to merge adjacent borders, <code>:nth-child(even)</code> to color every other row, and <code>:hover</code> to highlight the row under the mouse.'
          ],
          code: `<head>
    <style>
        table, th, td {
            border: 1px solid rgb(20, 194, 145);
            border-collapse: collapse;
        }
        tr:nth-child(even) {
            background-color: #D6EEEE;
        }
        tr:hover {
            background-color: #D6EEEE;
        }
    </style>
</head>`,
          example: {
            title: 'Example: spacing between cells',
            code: `table {
    border-spacing: 30px;
}`,
            output: 'table { border-spacing: 30px; }',
            type: 'code'
          }
        },
        {
          heading: 'A Larger Table Example',
          content: [
            'This example uses <code>colspan</code> (to make one cell span multiple columns), <code>rowspan</code> (to make one cell span multiple rows), and a <code>&lt;colgroup&gt;</code> to style the first two columns as a group.'
          ],
          code: `<table>
    <colgroup>
        <col span="2" style="background-color:lightblue;">
    </colgroup>
    <tr>
        <th colspan="2">Name</th>
        <th>Estimation</th>
    </tr>
    <tr>
        <td rowspan="2">SS</td>
        <td>Prepare header</td>
        <td>4 hours</td>
    </tr>
    <tr>
        <td>Prepare footer</td>
        <td>4 hours</td>
    </tr>
    <tr>
        <td>SS</td>
        <td>Prepare center screen</td>
        <td>14 hours</td>
    </tr>
</table>`
        }
      ]
    },

    'css-simple-selectors': {
      title: 'CSS Simple Selectors',
      sections: [
        {
          heading: 'What is a CSS Selector?',
          content: [
            'A CSS selector is the part of a CSS rule that says <em>which</em> HTML elements the rule should apply to. The browser reads the selector, finds all matching elements in the page, and applies the styles to them.',
            'The three "simple" selectors you will use 90% of the time are the <strong>tag selector</strong>, the <strong>id selector</strong>, and the <strong>class selector</strong>. Once you know these three, you can style almost anything.'
          ],
          list: [
            '<strong>Tag selector</strong> — matches elements by their tag name (e.g., <code>h1</code> matches every <code>&lt;h1&gt;</code>).',
            '<strong>Id selector</strong> — matches the single element with that id. Use a <code>#</code> in CSS, e.g., <code>#id1</code>.',
            '<strong>Class selector</strong> — matches every element that has that class. Use a <code>.</code> in CSS, e.g., <code>.pr-1</code>.'
          ]
        },
        {
          heading: '1. Tag (Element) Selector',
          content: [
            'The tag selector matches every element of a given type on the page. It is the simplest and least specific selector. Use it for global defaults like "all paragraphs should be 16px" or "all headings should be the same color".'
          ],
          code: `h1 {
    background-color: blue;
}`,
          example: {
            title: 'Example',
            code: 'h1 { background-color: blue; }',
            output: '<h1 style="background-color: blue;">Tag name selector</h1>',
            type: 'code'
          }
        },
        {
          heading: '2. Id Selector',
          content: [
            'An <code>id</code> is a unique identifier for a single element on a page — no two elements should share the same id. In CSS, you write the id selector with a <code>#</code> followed by the id name. Because ids are unique, the rule will only ever match one element.'
          ],
          code: `#id1 {
    color: blue;
}`,
          example: {
            title: 'Example',
            code: '#id1 { color: blue; }',
            output: '<h1 id="id1" style="color: blue;">Id selector</h1>',
            type: 'code'
          }
        },
        {
          heading: '3. Class Selector',
          content: [
            'A <code>class</code> is a label you can put on as many elements as you want. In CSS, you write the class selector with a <code>.</code> followed by the class name. Classes are the workhorse of CSS — you will use them constantly to apply the same style to multiple elements.'
          ],
          code: `.pr-1 {
    color: red;
}`,
          example: {
            title: 'Example',
            code: '.pr-1 { color: red; }',
            output: '<h1 class="pr-1" style="color: red;">Class selector</h1>',
            type: 'code'
          }
        }
      ]
    },

    'html5-features': {
      title: 'HTML5 Features',
      sections: [
        {
          heading: 'What is New in HTML5?',
          content: [
            'HTML5 was a major update to the HTML language, finalized in 2014. It added many new features that previously required plugins like Flash or Java applets — things like native video and audio playback, drawing on a canvas, drag and drop, and local storage. It also introduced a set of <strong>semantic elements</strong> that describe what content <em>means</em>, not just how it looks.',
            'The list below is a tour of the most important HTML5 features. You do not need to learn them all on day one — pick the ones you need and come back for the rest later.'
          ]
        },
        {
          heading: '1. Semantic Elements',
          content: [
            'Semantic elements are tags that describe the role of a section of the page, rather than just grouping content. They make your HTML easier to read, help search engines understand your page, and are essential for accessibility.'
          ],
          list: [
            '<code>&lt;header&gt;</code> — introductory content or navigation for a section or page.',
            '<code>&lt;footer&gt;</code> — closing content for a section or page (copyright, links, contact info).',
            '<code>&lt;nav&gt;</code> — a block of major navigation links.',
            '<code>&lt;section&gt;</code> — a standalone section of related content, usually with its own heading.',
            '<code>&lt;article&gt;</code> — self-contained content that could be reused independently (blog post, news article, card).',
            '<code>&lt;aside&gt;</code> — content tangentially related to the main content (sidebars, pull quotes).',
            '<code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> — an image, diagram, or code example with an optional caption.'
          ]
        },
        {
          heading: '2. Canvas — Drawing with JavaScript',
          content: [
            'The <code>&lt;canvas&gt;</code> element is a blank rectangle on the page that you can draw on using JavaScript. It is used for games, charts, image editors, animations, and any other custom graphics.',
            'You give the canvas an <code>id</code>, grab it from JavaScript with <code>getElementById</code>, ask for a "2d" drawing context, and then call methods like <code>fillRect</code> to draw shapes.'
          ],
          code: `<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(20, 20, 150, 50);
</script>`,
          example: {
            title: 'Example',
            code: `<canvas id="myCanvas" width="200" height="100"></canvas>`,
            output: '<canvas id="myCanvas" width="200" height="100"></canvas>',
            type: 'code'
          }
        },
        {
          heading: '3. SVG — Scalable Vector Graphics',
          content: [
            'SVG is an XML-based format for drawing shapes that stay sharp at any size. Unlike a normal image, an SVG is made up of tags like <code>&lt;circle&gt;</code>, <code>&lt;rect&gt;</code>, and <code>&lt;path&gt;</code>, so you can style and animate parts of it with CSS or JavaScript.'
          ],
          code: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>`,
          example: {
            title: 'Example',
            code: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>`,
            output: '<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="blue" /></svg>',
            type: 'code'
          }
        },
        {
          heading: '4. Video and Audio',
          content: [
            'HTML5 added native <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> tags, so you no longer need a plugin to play media. The <code>controls</code> attribute gives users a play/pause button and a volume slider for free, and you can provide multiple <code>&lt;source&gt;</code> files in different formats for browser compatibility.'
          ],
          code: `<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`,
          example: {
            title: 'Example',
            code: '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>',
            output: '<video controls><source src="movie.mp4" type="video/mp4"></video>',
            type: 'code'
          }
        },
        {
          heading: '5. New Form Controls',
          content: [
            'HTML5 added many new <code>type</code> values for the <code>&lt;input&gt;</code> element. Browsers can now validate emails, numbers, URLs, and dates for you, and the right keyboard (numeric keypad, @ symbol) appears automatically on mobile devices.'
          ],
          list: [
            '<code>type="email"</code> — validates that the input looks like an email address.',
            '<code>type="number"</code> — only allows numeric input, with optional <code>min</code>, <code>max</code>, and <code>step</code>.',
            '<code>type="url"</code> — validates that the input is a URL.',
            '<code>type="tel"</code> — for phone numbers (no built-in validation, but the right keyboard on mobile).',
            '<code>type="search"</code> — a search field, often with a clear "x" button.',
            '<code>type="date"</code>, <code>type="time"</code> — pickers for date and time.',
            '<code>type="range"</code> — a slider control.',
            '<code>type="color"</code> — a color picker.'
          ],
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
          content: [
            'Local storage lets a web page save small pieces of data (key/value pairs) in the user&#39;s browser, and read them back later — even after the page is closed and reopened. It replaces the older, more limited <code>cookies</code> for many uses.',
            'Data is stored as strings, and you usually have around 5–10 MB per origin.'
          ],
          code: `// Store data
localStorage.setItem("username", "John");
// Retrieve data
var user = localStorage.getItem("username");`
        },
        {
          heading: '7. Geolocation',
          content: [
            'The Geolocation API lets a web page ask the user for their current location (with their permission). It returns latitude and longitude coordinates, which you can then use to show a map, find nearby stores, and so on.'
          ],
          code: `navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});`
        },
        {
          heading: '8. Drag and Drop',
          content: [
            'HTML5 added native drag and drop. Make an element draggable by setting the <code>draggable="true"</code> attribute, and listen for events like <code>dragstart</code>, <code>dragover</code>, and <code>drop</code> on the source and target elements.'
          ],
          code: `<div draggable="true" ondragstart="drag(event)">Drag me</div>
<script>
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
</script>`
        },
        {
          heading: '9. Microdata',
          content: [
            'Microdata is a way to add structured, machine-readable labels to your HTML using attributes like <code>itemscope</code>, <code>itemtype</code>, and <code>itemprop</code>. It helps search engines understand that "John Doe" is a person&#39;s name, and "Web Developer" is their job title, for example.'
          ],
          code: `<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="jobTitle">Web Developer</span>
</div>`
        },
        {
          heading: '10. WebSockets',
          content: [
            'A WebSocket is a persistent, two-way connection between the browser and the server. Unlike normal HTTP requests (where the browser asks and the server answers once), a WebSocket stays open so the server can push updates to the browser at any time. It is the technology behind chat apps, live scoreboards, and real-time dashboards.'
          ],
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
          content: [
            'JavaScript normally runs on a single "main" thread, which can freeze the page if you do heavy computation. A Web Worker lets you run a script in a background thread, so the user interface stays responsive.'
          ],
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
          heading: 'What is a Form?',
          content: [
            'A form is a section of a page where the user can type in information, choose options, or take an action. Forms are how you build login screens, search boxes, contact pages, checkout flows, surveys — basically any time the page needs to collect input from the user.',
            'A form is created with the <code>&lt;form&gt;</code> tag. Inside it, you put form elements (mostly <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;button&gt;</code>) that collect the user&#39;s input. When the user clicks the submit button, the form sends all of that input to a server.'
          ]
        },
        {
          heading: 'The action Attribute',
          content: [
            'The <code>action</code> attribute says <em>where</em> the form data should be sent when the user submits it. Usually this is a server URL that will process the data — for example, a login endpoint that checks the username and password.'
          ],
          code: `<form action="/signin">
    <input type="submit" value="Submit">
</form>`,
          example: {
            title: 'Example',
            code: `<form action="/signin">
  <input type="submit" value="Submit">
</form>`,
            output: '<form><input type="submit" value="Submit"></form>',
            type: 'code'
          }
        },
        {
          heading: 'The target Attribute',
          content: [
            'By default, the response from the form replaces the current page. The <code>target</code> attribute can change that — for example, <code>target="_blank"</code> opens the response in a new tab or window. This is the same <code>target</code> used on links.'
          ],
          code: `<form action="/signin" target="_blank">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'The method Attribute',
          content: [
            'The <code>method</code> attribute says <em>how</em> the form data should be sent. There are two common values: <code>get</code> (the default) appends the data to the URL, and is fine for searches and non-sensitive data; <code>post</code> sends the data in the body of the request, which is required for logins, payments, and other sensitive submissions.'
          ],
          code: `<form action="/signin" method="post">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'The novalidate Attribute',
          content: [
            'By default, browsers will check that required fields are filled in and that the data looks correct (e.g., a real email address in an email field) before submitting the form. If you want to do all the validation yourself in JavaScript, add the <code>novalidate</code> attribute to the <code>&lt;form&gt;</code> tag to turn off the browser&#39;s built-in checks.'
          ],
          code: `<form action="/signin" novalidate>
    <input type="email" name="email">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'The autocomplete Attribute',
          content: [
            'The <code>autocomplete</code> attribute controls whether the browser is allowed to remember what the user has typed and offer to fill it in next time. Set it to <code>"on"</code> to allow it (the default) or <code>"off"</code> to disable it — useful for sensitive fields like credit card numbers.'
          ],
          code: `<form action="/signin" autocomplete="on">
    <input type="text" name="username">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'The name Attribute on <form>',
          content: [
            'Adding a <code>name</code> attribute to the <code>&lt;form&gt;</code> tag itself lets you reference the form from JavaScript (for example, with <code>document.forms["userForm"]</code>). The inputs inside the form should also each have their own <code>name</code> attribute, because the input&#39;s name is what gets sent to the server with its value.'
          ],
          code: `<form name="userForm">
    <input type="text" name="username">
    <input type="submit" value="Submit">
</form>`
        },
        {
          heading: 'A Complete Form Example',
          content: [
            'This form uses <code>&lt;fieldset&gt;</code> to group related fields, <code>&lt;legend&gt;</code> to give each group a caption, and <code>&lt;label&gt;</code> tags to connect each input with a description. The <code>required</code> attribute marks fields that must be filled in.'
          ],
          code: `<form action="/sign" method="post">
    <fieldset>
        <legend>Personal Details</legend>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </fieldset>
    <input type="submit" value="Save User">
</form>`,
          example: {
            title: 'Example',
            code: `<form action="/sign" method="post">
  <input type="text" name="username" required>
  <input type="submit" value="Save">
</form>`,
            output: '<form><input type="text" name="username" required><input type="submit" value="Save"></form>',
            type: 'code'
          }
        },
        {
          heading: 'A Larger Real-World Form',
          content: [
            'This example puts together many of the form elements at once: text and password inputs, a search field, checkboxes, radio buttons, a number, a range slider, a date and time picker, a color picker, a file upload, a dropdown, a textarea, and the three button types (button, submit, reset). Save it as an <code>.html</code> file and open it in a browser to see it work.'
          ],
          code: `<form action="/sign" method="post">
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
        <div>
            <label>Search by name:</label>
            <input type="search" autofocus>
        </div>
        <div>
            <label>Username:</label>
            <input type="text">
        </div>
        <div>
            <label>Password:</label>
            <input type="password">
        </div>
    </fieldset>
    <fieldset>
        <legend>Other details</legend>
        <div>
            Courses:
            <input type="checkbox" id="htmlCourse">
            <label for="htmlCourse">HTML</label>
            <input type="checkbox"> CSS
            <input type="checkbox"> Angular
        </div>
        <div>
            Gender:
            <input type="radio" name="gender" id="maleGender">
            <label for="maleGender">Male</label>
            <input type="radio" name="gender" id="feGender">
            <label for="feGender">Female</label>
            <input type="radio" name="gender" id="othGender">
            <label for="othGender">Other</label>
        </div>
        <div>Email: <input type="email"></div>
        <div>Age: <input type="number" min="0" max="120" step="5"></div>
        <div>Salary range: <input type="range" min="0" max="120" value="20"></div>
        <div>DOB: <input type="date"> <input type="time"></div>
        <div>Color: <input type="color"></div>
        <div>File: <input type="file" multiple></div>
        <div>
            State:
            <select>
                <option>Andra</option>
                <option selected>Tamilnadu</option>
                <option>Tela</option>
            </select>
        </div>
        <div>Message: <textarea name="message"></textarea></div>
    </fieldset>
    <div>
        <input type="button" value="Validate">
        <button type="submit">Validate form</button>
        <input type="submit" value="Save user">
        <input type="reset" value="Clear">
    </div>
</form>`
        }
      ]
    },

    'form-elements': {
      title: 'HTML Form Elements',
      sections: [
        {
          heading: 'Overview of Form Elements',
          content: [
            'HTML provides a small set of elements for building forms. Each one has a specific job: some collect text, some let the user pick from a list, some are buttons, and some group other elements together. Knowing which one to reach for is most of the battle.',
            'The most important form element is <code>&lt;input&gt;</code>, which is actually many different controls depending on its <code>type</code> attribute. The list below shows every <code>type</code> you can use.'
          ]
        },
        {
          heading: 'Input Element',
          content: [
            'The <code>&lt;input&gt;</code> element is a void element that becomes a different control depending on its <code>type</code> attribute. With no <code>type</code> at all, it defaults to a single-line text input. Here is a list of every input type and what it does.'
          ],
          list: [
            '<code>type="text"</code> — a single-line text input (the default).',
            '<code>type="password"</code> — a text input that hides the characters as the user types.',
            '<code>type="email"</code> — a text input that must look like an email address.',
            '<code>type="number"</code> — a numeric input, with optional <code>min</code>, <code>max</code>, and <code>step</code>.',
            '<code>type="tel"</code> — for phone numbers.',
            '<code>type="url"</code> — must look like a URL.',
            '<code>type="search"</code> — a search field, often with a clear button.',
            '<code>type="checkbox"</code> — a single on/off toggle (checkboxes can be checked together).',
            '<code>type="radio"</code> — a single option in a group; only one radio in a group can be checked at a time.',
            '<code>type="file"</code> — a file picker; add <code>multiple</code> to allow more than one file.',
            '<code>type="range"</code> — a slider control.',
            '<code>type="color"</code> — a color picker.',
            '<code>type="date"</code>, <code>type="time"</code>, <code>type="datetime-local"</code>, <code>type="month"</code>, <code>type="week"</code> — date and time pickers.',
            '<code>type="submit"</code> — a button that submits the form.',
            '<code>type="reset"</code> — a button that clears the form.',
            '<code>type="button"</code> — a plain button with no default behavior (you wire it up with JavaScript).',
            '<code>type="image"</code> — an image that submits the form when clicked.',
            '<code>type="hidden"</code> — an invisible field that still gets sent with the form.'
          ],
          code: `<input type="text" placeholder="Enter text">
<input type="email" placeholder="Enter email">
<input type="submit" value="Submit">`,
          example: {
            title: 'Example',
            code: '<input type="text" placeholder="Enter text">',
            output: '<input type="text" placeholder="Enter text">',
            type: 'code'
          }
        },
        {
          heading: 'Label Element',
          content: [
            'A <code>&lt;label&gt;</code> is a caption for an input. Clicking the label is the same as clicking the input, which is a big help for checkboxes and small radio buttons. Use the <code>for</code> attribute on the label to point at the <code>id</code> of the input it describes.'
          ],
          code: `<label for="username">Username:</label>
<input type="text" id="username" name="username">`
        },
        {
          heading: 'Select Element',
          content: [
            'A <code>&lt;select&gt;</code> shows a dropdown list of options. Each option is a <code>&lt;option&gt;</code> tag inside it. Add the <code>selected</code> attribute to one option to make it the default choice.'
          ],
          code: `State:
<select name="state">
    <option>Andhra</option>
    <option selected>Tamilnadu</option>
    <option>Tela</option>
</select>`,
          example: {
            title: 'Example',
            code: `<select name="state">
  <option>Andhra</option>
  <option selected>Tamilnadu</option>
</select>`,
            output: '<select name="state"><option>Andhra</option><option selected>Tamilnadu</option></select>',
            type: 'code'
          }
        },
        {
          heading: 'Textarea Element',
          content: [
            'A <code>&lt;textarea&gt;</code> is a multi-line text input — perfect for comments, messages, and other long text. The <code>rows</code> and <code>cols</code> attributes set the visible size, but it can be resized by the user and grows with CSS.'
          ],
          code: '<textarea name="message" rows="4" cols="50"></textarea>'
        },
        {
          heading: 'Button Element',
          content: [
            'The <code>&lt;button&gt;</code> element creates a clickable button. The <code>type</code> attribute decides what it does: <code>submit</code> (default) submits the form, <code>reset</code> clears it, and <code>button</code> does nothing on its own — you wire it up with JavaScript.'
          ],
          code: `<button type="submit">Submit</button>
<button type="reset">Reset</button>`
        },
        {
          heading: 'Fieldset and Legend Elements',
          content: [
            'A <code>&lt;fieldset&gt;</code> draws a box around a group of related form fields, and a <code>&lt;legend&gt;</code> inside it gives the group a caption. They are great for breaking a long form into visual sections (e.g., "Personal Details" and "Shipping Address").'
          ],
          code: `<fieldset>
    <legend>Personal Details</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
</fieldset>`
        },
        {
          heading: 'Datalist Element',
          content: [
            'A <code>&lt;datalist&gt;</code> provides a list of suggested values for a text input. The user can still type anything they want, but the browser will offer the options as auto-complete suggestions. Link the input to the datalist with a <code>list</code> attribute whose value is the datalist&#39;s <code>id</code>.'
          ],
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
          heading: 'Input Attributes',
          content: [
            'The <code>&lt;input&gt;</code> element supports many attributes that control its behavior. Some, like <code>value</code>, are common across most types. Others, like <code>min</code> and <code>max</code>, only make sense for certain types (number, date, range). The list below is a quick reference.'
          ],
          list: [
            '<code>value</code> — the initial value of the input.',
            '<code>readonly</code> — the user can see and select the text but cannot change it.',
            '<code>disabled</code> — the input is grayed out and not submitted with the form.',
            '<code>maxlength</code> — the maximum number of characters the user can type.',
            '<code>min</code> and <code>max</code> — the lowest and highest allowed values (for numbers, dates, ranges).',
            '<code>multiple</code> — allow more than one value (for files and emails).',
            '<code>pattern</code> — a regular expression the value must match.',
            '<code>placeholder</code> — gray hint text shown when the input is empty.',
            '<code>required</code> — the field must be filled in before the form can be submitted.',
            '<code>step</code> — how much the value changes when using the spinner or slider.',
            '<code>autofocus</code> — put the cursor in this field automatically when the page loads.',
            '<code>autocomplete</code> — <code>on</code> or <code>off</code>, controls browser auto-fill behavior.'
          ]
        },
        {
          heading: 'Value Attribute',
          content: [
            'The <code>value</code> attribute sets the initial value of the input. For text inputs, the value is shown in the box. For submit buttons, the value is the text on the button. When the form is submitted, the value is what gets sent to the server.'
          ],
          code: '<input type="text" value="Default Text">'
        },
        {
          heading: 'Readonly Attribute',
          content: [
            'A <code>readonly</code> input looks normal and the user can select and copy the text, but they cannot type in it. Use it for fields that the user should be able to see but not change, like a generated order number.'
          ],
          code: '<input type="text" value="Read-only" readonly>'
        },
        {
          heading: 'Disabled Attribute',
          content: [
            'A <code>disabled</code> input is grayed out, cannot be focused or edited, and is <em>not</em> sent to the server when the form is submitted. Use it to make a field unavailable until some other action happens.'
          ],
          code: '<input type="text" value="Disabled" disabled>'
        },
        {
          heading: 'Maxlength Attribute',
          content: [
            'The <code>maxlength</code> attribute limits the number of characters the user can type into a text input. Once they hit the limit, the browser will not accept any more keystrokes.'
          ],
          code: '<input type="text" maxlength="10">'
        },
        {
          heading: 'Min and Max Attributes',
          content: [
            'For numeric inputs (and date and range inputs), <code>min</code> and <code>max</code> set the lowest and highest allowed values. The browser will not let the user go outside that range.'
          ],
          code: '<input type="number" min="0" max="100">'
        },
        {
          heading: 'Multiple Attribute',
          content: [
            'Add the <code>multiple</code> attribute to a file input (or an email input) to let the user pick more than one value.'
          ],
          code: '<input type="file" multiple>'
        },
        {
          heading: 'Pattern Attribute',
          content: [
            'The <code>pattern</code> attribute lets you require the value to match a regular expression. The example below requires exactly three letters. The <code>title</code> attribute is used as the error message if the value does not match.'
          ],
          code: '<input type="text" pattern="[A-Za-z]{3}" title="Three letters only">'
        },
        {
          heading: 'Placeholder Attribute',
          content: [
            'The <code>placeholder</code> attribute is a short hint shown inside the input in light gray. It disappears as soon as the user starts typing. Use it to give an example of what to type, not as a replacement for a real <code>&lt;label&gt;</code>.'
          ],
          code: '<input type="text" placeholder="Enter your name">'
        },
        {
          heading: 'Required Attribute',
          content: [
            'Adding the <code>required</code> attribute to an input makes the form refuse to submit until that field has a value. The browser will show a small message pointing the user to the missing field.'
          ],
          code: '<input type="text" required>'
        },
        {
          heading: 'Step Attribute',
          content: [
            'For numeric and range inputs, <code>step</code> sets the size of each "tick". The example below only allows values that go up in 5s: 0, 5, 10, 15, and so on.'
          ],
          code: '<input type="number" step="5">'
        },
        {
          heading: 'Autofocus Attribute',
          content: [
            'The <code>autofocus</code> attribute puts the cursor in the input as soon as the page loads, so the user can start typing immediately. Use it on at most one input per page.'
          ],
          code: '<input type="text" autofocus>'
        },
        {
          heading: 'List Attribute',
          content: [
            'The <code>list</code> attribute on an input connects it to a <code>&lt;datalist&gt;</code> with the same <code>id</code>. The datalist provides auto-complete suggestions without restricting what the user can type.'
          ],
          code: `<input type="text" list="states">
<datalist id="states">
    <option>Andra</option>
    <option>Tamilnadu</option>
</datalist>`
        },
        {
          heading: 'Autocomplete Attribute',
          content: [
            'The <code>autocomplete</code> attribute on an individual input overrides the form-level setting. Set it to <code>"off"</code> to stop the browser from suggesting values for that one field — useful for one-time codes or sensitive data.'
          ],
          code: '<input type="text" autocomplete="off">'
        }
      ]
    }
  }
};
