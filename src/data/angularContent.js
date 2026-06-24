// Angular tutorial content - beginner-friendly, w3schools-style explanations.
// Each topic has a title and an array of sections. Sections support:
//   - content: array of HTML strings (paragraphs of explanation)
//   - list: array of HTML strings (reference / property bullets)
//   - code: string of example code shown in an ExampleBox
//   - example: { title, code, output, type } for the ExampleBox component
//   - heading: string shown above the section body
//
// Inside content / list items we can use inline HTML such as <code>...</code>.

export const angularContent = {
  module1: {
    'angular-intro': {
      title: 'Introduction',
      sections: [
        {
          heading: 'What is Angular?',
          content: [
            'Angular is a <strong>framework</strong> for building user interfaces in JavaScript. It was created by Google and is now open source. Unlike a library (such as React), Angular is a complete framework: it ships with everything you need to build an app — routing, forms, HTTP, state management, testing utilities, and a powerful command-line tool called the Angular CLI.',
            'Angular is used to build <strong>Single Page Applications (SPAs)</strong>. In an SPA, the browser loads a single HTML page and JavaScript updates that page dynamically as the user clicks around, instead of downloading a brand-new page for every click. The header, footer, and sidebar stay put; only the middle changes. This feels faster and more app-like.',
            'Angular is built on <strong>TypeScript</strong>, which is JavaScript with types. Types let your editor catch mistakes before you ever run the app, and they make refactoring much safer. If you have never used TypeScript, do not worry — it is a superset of JavaScript, so any valid JavaScript you already know is also valid TypeScript.',
            'A few things make Angular distinctive: it is <strong>opinionated</strong> (there is a recommended way to do everything), it uses <strong>decorators</strong> like <code>@Component()</code> and <code>@Injectable()</code> to mark classes, and it relies heavily on <strong>dependency injection</strong> to wire services into components. Learning these patterns takes a little time, but once you know them, Angular apps are very consistent and easy to navigate.'
          ],
          list: [
            'Angular is a <strong>framework</strong> for building scalable web applications.',
            'It is open source, maintained by Google.',
            'It is used to build <strong>Single Page Applications (SPAs)</strong> and responsive web pages.',
            'It is written in <strong>TypeScript</strong> — JavaScript with types.',
            'It ships with routing, forms, HTTP, testing, and the <strong>Angular CLI</strong> built in.',
            'Modern Angular (v14+) uses <strong>standalone components</strong> and does not require <code>NgModule</code> for new code.'
          ]
        }
      ]
    },
    'angular-setup': {
      title: 'Setup',
      sections: [
        {
          heading: 'Installing the tools you need',
          content: [
            'Before you write your first Angular app, you need three things on your computer: <strong>Node.js</strong> (to run the build tools), the <strong>Angular CLI</strong> (to create and serve projects), and a code editor (VS Code is the most popular).',
            'Angular is built on Node.js, so install that first. Download the <strong>LTS</strong> version from the official site and run the installer. Installing Node also installs <strong>npm</strong> (Node Package Manager), which the Angular CLI uses to download libraries.',
            'After Node is installed, install the Angular CLI <em>globally</em> with <code>npm install -g @angular/cli</code>. The <code>-g</code> flag makes the <code>ng</code> command available everywhere on your machine, so you can create new projects from any folder.',
            'On Windows, if running <code>ng</code> gives a permissions error, run PowerShell as Administrator once and execute <code>Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned</code>. This lets locally-installed npm scripts run.',
            'You only install the CLI once. After that, you create new projects with <code>ng new</code> and start them with <code>ng serve</code>.'
          ],
          list: [
            'Step 1: install <strong>Node.js LTS</strong> from <a href="https://nodejs.org/" target="_blank">nodejs.org</a>.',
            'Step 2: install the Angular CLI globally: <code>npm install -g @angular/cli</code>.',
            'Step 3: verify with <code>ng version</code> (you should see the Angular logo and version).',
            'Step 4: create a project: <code>ng new my-app</code> (accept the defaults for routing and stylesheet format).',
            'Step 5: run it: <code>cd my-app &amp;&amp; ng serve --open</code>.',
            'Windows PowerShell fix: <code>Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned</code>.'
          ],
          code: `# Check Node and npm versions
node -v
npm -v

# Install the Angular CLI globally
npm install -g @angular/cli

# Verify the install
ng version

# Create a new project (accept the prompts)
ng new payroll

# Move into the project and start the dev server
cd payroll
ng serve --open      # --open launches your browser automatically
# or
npm start`,
          example: {
            title: 'Try it Yourself',
            code: `ng new my-app
cd my-app
ng serve --open`,
            output: '** Angular Live Development Server is running **<br><br>➜  Local:   http://localhost:4200/<br>➜  watch mode enabled',
            type: 'code'
          }
        }
      ]
    },
    'commands-used': {
      title: 'Commands Used',
      sections: [
        {
          heading: 'The commands you will use every day',
          content: [
            'Angular projects are driven by a small set of npm/ng commands. You will type these constantly, so it helps to know what each one actually does:',
            '<strong><code>npm install</code></strong> reads the list of libraries in <code>package.json</code> and downloads them into <code>node_modules/</code>. You run this once after cloning a project (or any time a teammate adds a new dependency).',
            '<strong><code>ng serve</code></strong> (or <code>npm start</code>) starts the development server. It compiles your app, opens a port (4200 by default), and watches your files — every time you save, the browser reloads automatically. This is the command you run while you are writing code.',
            '<strong><code>ng build</code></strong> compiles the app for production into the <code>dist/</code> folder. The files there are small, optimized, and ready to deploy to a web server. Use <code>ng build -c production</code> (or <code>--configuration production</code>) for the optimized build.',
            '<strong><code>npm test</code></strong> runs the unit tests (Angular comes set up with Karma + Jasmine by default).',
            'If a project fails to run because of a TypeScript version mismatch, you can usually fix it by editing the <code>typescript</code> version in <code>package.json</code> and running <code>npm install</code> again.'
          ],
          list: [
            '<code>npm install</code> — download all dependencies into <code>node_modules/</code>.',
            '<code>ng serve</code> / <code>npm start</code> — start the dev server with live reload.',
            '<code>ng build</code> — compile a production build into <code>dist/</code>.',
            '<code>ng build -c production</code> — production-optimized build.',
            '<code>npm test</code> — run the unit tests.',
            'TypeScript error? Edit the <code>typescript</code> version in <code>package.json</code> and re-run <code>npm install</code>.'
          ],
          code: `npm install            # install dependencies
ng serve               # start dev server (http://localhost:4200)
npm start              # alias for the dev server
ng build               # build to dist/
ng build -c production # optimized production build
npm test               # run unit tests`
        }
      ]
    },
    'what-is-npm': {
      title: 'What is npm?',
      sections: [
        {
          heading: 'The Node Package Manager',
          content: [
            '<strong>npm</strong> stands for <strong>Node Package Manager</strong>. It does two jobs: it is the website/registry where JavaScript developers publish their libraries, and it is the command-line tool (<code>npm</code>) that downloads and manages those libraries in your project.',
            'A library on npm is called a <strong>package</strong>. When you run <code>npm install bootstrap</code>, npm downloads the Bootstrap package from the registry and places it in your project\'s <code>node_modules/</code> folder. It also records the package name and version in <code>package.json</code> so other developers get the same version when they run <code>npm install</code>.',
            'You do not need to visit the npm website to use it — the <code>npm install &lt;name&gt;</code> command does everything. But the website (<a href="https://www.npmjs.com/" target="_blank">npmjs.com</a>) is useful for searching libraries, reading their docs, and checking weekly downloads before picking one.'
          ],
          list: [
            '<strong>npm</strong> = Node Package Manager. The registry + the command-line tool.',
            'A library on npm is called a <strong>package</strong>.',
            '<code>npm install &lt;name&gt;</code> downloads a package into <code>node_modules/</code>.',
            'The version is recorded in <code>package.json</code> so everyone gets the same libraries.',
            'Browse and search packages at <a href="https://www.npmjs.com/" target="_blank">npmjs.com</a>.'
          ],
          code: `# Install a package and save it to package.json
npm install bootstrap

# Install a package as a dev-only dependency
npm install jasmine --save-dev

# Install the Angular CLI globally (available everywhere)
npm install -g @angular/cli`
        }
      ]
    },
    'new-port': {
      title: 'Run on New Port',
      sections: [
        {
          heading: 'Running on a different port',
          content: [
            'By default <code>ng serve</code> starts the dev server on port <strong>4200</strong>. Sometimes that port is already taken — by another Angular project, another app, or a system service. In that case, tell Angular to use a different port with the <code>--port</code> flag.',
            'You can pass the port every time you start the server, or you can set it permanently by editing the <code>start</code> script in <code>package.json</code>. The permanent approach is handy if you always run the same project on a specific port (for example, to match a backend CORS rule).'
          ],
          list: [
            'Default port: <strong>4200</strong>.',
            'One-off: <code>ng serve --port 4201</code>.',
            'Permanent: edit the <code>start</code> script in <code>package.json</code>.',
            'The <code>--open</code> flag opens the browser automatically: <code>ng serve --port 4201 --open</code>.'
          ],
          code: `# One-off — run on port 4201 just this time
ng serve --port 4201

# Permanent — edit package.json
"scripts": {
  "start": "ng serve --port 4201"
}

# Then just run
npm start`,
          example: {
            title: 'Try it Yourself',
            code: `ng serve --port 4201 --open`,
            output: '** Angular Live Development Server **<br>➜  Local:   http://localhost:4201/',
            type: 'code'
          }
        }
      ]
    }
  },

  module2: {
    'cli-commands': {
      title: 'CLI Commands',
      sections: [
        {
          heading: 'Generating files with the CLI',
          content: [
            'One of the biggest productivity boosts in Angular is the <strong>Angular CLI</strong>. Instead of creating files by hand, you run a command and the CLI generates a component, service, directive, or module with the right name, the right folder structure, and the right boilerplate — and (for older projects that use NgModules) it even updates the NgModule for you.',
            'The pattern is always <code>ng generate &lt;type&gt; &lt;name&gt;</code>, or the shorter alias <code>ng g &lt;type&gt; &lt;name&gt;</code>. For example, <code>ng g c signin</code> creates a <code>signin</code> component with four files: <code>signin.component.ts</code>, <code>signin.component.html</code>, <code>signin.component.scss</code>, and <code>signin.component.spec.ts</code>.',
            'The CLI knows how to generate all the main Angular building blocks. Memorize these — you will use them constantly:',
            'You can also add third-party libraries with <code>ng add</code> (not <code>npm install</code>). <code>ng add</code> installs the package <em>and</em> runs any setup scripts the package provides — for example, registering it in the app config or adding styles to <code>angular.json</code>.'
          ],
          list: [
            '<code>ng g c &lt;name&gt;</code> — generate a <strong>component</strong>.',
            '<code>ng g s &lt;name&gt;</code> — generate a <strong>service</strong>.',
            '<code>ng g d &lt;name&gt;</code> — generate a <strong>directive</strong>.',
            '<code>ng g m &lt;name&gt;</code> — generate a <strong>module</strong> (legacy / large apps).',
            '<code>ng g i &lt;name&gt;</code> — generate an <strong>interface</strong>.',
            '<code>ng g e &lt;name&gt;</code> — generate an <strong>enum</strong>.',
            '<code>ng g p &lt;name&gt;</code> — generate a <strong>pipe</strong>.',
            '<code>ng g guard &lt;name&gt;</code> — generate a <strong>route guard</strong>.',
            '<code>ng g interceptor &lt;name&gt;</code> — generate an <strong>HTTP interceptor</strong>.',
            '<code>ng g resolver &lt;name&gt;</code> — generate a <strong>route resolver</strong>.',
            '<code>ng add &lt;package&gt;</code> — install a library <em>and</em> run its setup (prefer over <code>npm install</code> for Angular libraries).'
          ],
          code: `# Long form
ng generate component signin
ng generate service auth
ng generate guard auth

# Short form (the alias most developers use)
ng g c signin
ng g s auth
ng g guard auth

# Add a library with its setup scripts
ng add @angular/pwa`,
          example: {
            title: 'Try it Yourself',
            code: `ng g c signin

# Creates:
#   src/app/signin/signin.component.ts
#   src/app/signin/signin.component.html
#   src/app/signin/signin.component.scss
#   src/app/signin/signin.component.spec.ts`,
            output: 'CREATE src/app/signin/signin.component.ts (261 bytes)<br>CREATE src/app/signin/signin.component.html (21 bytes)<br>CREATE src/app/signin/signin.component.scss (0 bytes)',
            type: 'code'
          }
        }
      ]
    },
    'main-angular-parts': {
      title: 'Main Angular Parts',
      sections: [
        {
          heading: 'Anatomy of an Angular project',
          content: [
            'When you run <code>ng new</code>, the CLI scaffolds a fixed set of files and folders. You do not need to memorize them all at once — but knowing the role of each one makes the rest of the tutorial much easier to follow.',
            'Most of your time will be spent inside <code>src/</code>, especially <code>src/app/</code>, where your components, services, and feature modules live. The configuration files at the root describe the project to the build tools and to other developers.'
          ],
          list: [
            '<strong>node_modules/</strong> — all downloaded libraries. Auto-generated by <code>npm install</code>. Never edit by hand and never commit to git.',
            '<strong>src/</strong> — your source code. This is where you work.',
            '<strong>src/app/</strong> — components, services, directives, and feature modules live here.',
            '<strong>src/assets/</strong> — images, fonts, and static files copied as-is to the build.',
            '<strong>src/index.html</strong> — the single HTML page the browser loads. Angular fills <code>&lt;app-root&gt;&lt;/app-root&gt;</code> inside it.',
            '<strong>src/main.ts</strong> — the entry point. It bootstraps the app and renders the root component.',
            '<strong>angular.json</strong> — the main Angular config: build settings, asset paths, styles, scripts.',
            '<strong>package.json</strong> — lists your dependencies (under <code>dependencies</code>) and dev-only tools (under <code>devDependencies</code>).',
            '<strong>tsconfig.json</strong> — TypeScript compiler options (target version, strict mode, paths).',
            '<strong>.gitignore</strong> — tells git which files to skip (always includes <code>node_modules</code>).'
          ],
          code: `my-app/
├── angular.json        # Angular build configuration
├── package.json        # dependencies and scripts
├── tsconfig.json       # TypeScript config
├── .gitignore
├── node_modules/       # downloaded libraries (do not edit, do not commit)
└── src/
    ├── index.html      # the single HTML page; contains <app-root></app-root>
    ├── main.ts         # bootstrap entry point
    ├── styles.scss     # global styles
    └── app/
        ├── app.component.ts
        ├── app.component.html
        ├── app.component.scss
        └── app.config.ts   # app configuration (modern Angular)`
        },
        {
          heading: 'dependencies vs. devDependencies',
          content: [
            'Open <code>package.json</code> and you will see two dependency lists. They serve different purposes:',
            '<strong>dependencies</strong> — libraries your app needs to <em>run</em> (Angular itself, Bootstrap, a chart library). These get bundled into the production build. Install with <code>npm install &lt;name&gt;</code> (or <code>--save</code>, which is now the default).',
            '<strong>devDependencies</strong> — tools you need only while <em>developing</em> (test runners, linters, type definitions). They do not ship to production. Install with <code>npm install &lt;name&gt; --save-dev</code>.',
            'Getting this right matters: a library in <code>dependencies</code> makes your production bundle bigger; a library you need at runtime but put in <code>devDependencies</code> will break in production.'
          ],
          list: [
            '<strong>dependencies</strong> — needed at runtime; shipped to users. <code>npm install &lt;name&gt;</code>.',
            '<strong>devDependencies</strong> — needed only during development; not shipped. <code>npm install &lt;name&gt; --save-dev</code>.',
            'Use <code>ng add</code> for Angular libraries — it picks the right section and runs setup.',
            '<code>package-lock.json</code> records the exact versions installed so builds are reproducible.'
          ],
          code: `# Runtime dependency
npm install bootstrap

# Dev-only dependency
npm install jasmine --save-dev

# Angular library with setup
ng add @angular/material`
        },
        {
          heading: 'A quick TypeScript primer',
          content: [
            'Angular is written in <strong>TypeScript</strong>, which is JavaScript plus optional types. Any valid JavaScript is also valid TypeScript, so you can learn the types gradually. The features that matter most for Angular:',
            '<strong>Types</strong> — declare the kind of value a variable holds: <code>let count: number = 0;</code> or <code>name: string;</code>. The compiler catches type mistakes before you run the app.<br><strong>Classes</strong> — Angular components and services are classes. A class can have instance variables, methods, and a constructor.<br><strong>Interfaces</strong> — describe the shape of an object. They are a contract: any object that "implements" the interface must have those properties.<br><strong>Generics</strong> — write code that works with any type, like <code>Array&lt;string&gt;</code> (an array of strings) or <code>Observable&lt;User&gt;</code> (a stream that emits <code>User</code> objects).',
            'Two terms that come up a lot in Angular classes:',
            '<strong>Instance variables</strong> — declared directly inside a class but outside any method. Each object gets its own copy. These are the "fields" of your component.<br><strong>Static variables</strong> — declared with the <code>static</code> keyword. There is only one copy, shared by all objects of that class. Useful for constants like <code>static COLLEGE_NAME = "IIT";</code>.'
          ],
          list: [
            '<strong>TypeScript</strong> = JavaScript + optional types. Any JS is valid TS.',
            '<strong>Types</strong> — <code>let count: number = 0;</code> catches mistakes at compile time.',
            '<strong>Classes</strong> — components and services are classes with instance variables and methods.',
            '<strong>Interfaces</strong> — a contract describing the shape of an object.',
            '<strong>Generics</strong> — <code>Array&lt;string&gt;</code>, <code>Observable&lt;User&gt;</code> — reusable, type-safe code.',
            '<strong>Instance variables</strong> — one copy per object; declared inside a class, outside methods.',
            '<strong>Static variables</strong> — one copy shared by all objects; declared with <code>static</code>.'
          ],
          code: `export class LoginComponent {
  name: string;              // instance variable — one per object
  static COLLEGE_NAME = 'IIT'; // static variable — shared by all objects

  login() {                  // method
    let count = 0;           // local variable — only exists inside this method
  }
}

// An interface describes a shape
export interface User {
  id: number;
  name: string;
  email?: string;            // ? means optional
}`
        }
      ]
    },
    'ngmodule-component': {
      title: 'NgModule & Component',
      sections: [
        {
          heading: 'What is an NgModule?',
          content: [
            'Historically, every Angular app was organized into <strong>NgModules</strong>. A module is a way to group related components, directives, pipes, and services into one unit, and to declare which other modules and services it depends on. The decorator <code>@NgModule()</code> marks a class as a module.',
            'Modern Angular (v14+) supports <strong>standalone components</strong>, which do not need an NgModule at all. For new projects, prefer standalone components — they are simpler and tree-shake better. You will still see NgModules in older codebases, so it helps to recognize them.',
            'An <code>@NgModule</code> takes an object with these key properties:'
          ],
          list: [
            '<strong>declarations</strong> — the components, directives, and pipes that belong to this module.',
            '<strong>imports</strong> — other NgModules this module needs (e.g. <code>BrowserModule</code>, <code>FormsModule</code>).',
            '<strong>providers</strong> — services available for dependency injection (in modern Angular, services use <code>providedIn: \'root\'</code> instead).',
            '<strong>bootstrap</strong> — the root component Angular creates first (only the AppModule has this).',
            '<strong>exports</strong> — what this module exposes to other modules that import it.',
            'Modern alternative: <strong>standalone components</strong> with <code>standalone: true</code> — no NgModule needed.'
          ],
          code: `@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // the root component (AppModule only)
})
export class AppModule { }`
        },
        {
          heading: 'What is a component?',
          content: [
            'A <strong>component</strong> is the fundamental building block of an Angular app. It controls a patch of the screen called a <strong>view</strong> — a piece of UI made of HTML, styles, and logic. You build an app by combining many components together, like Lego bricks.',
            'Each component is made of three parts:',
            '1. A <strong>TypeScript class</strong> — the logic and data (the "controller").<br>2. An <strong>HTML template</strong> — the markup that gets rendered (the "view").<br>3. A <strong>CSS/SCSS file</strong> — the styles, scoped to this component only.',
            'The <code>@Component()</code> decorator marks a class as a component and tells Angular how to find its parts. The most important fields are <code>selector</code> (the custom HTML tag you use to place the component), <code>templateUrl</code> or <code>template</code> (the HTML), and <code>styleUrls</code> or <code>styles</code> (the CSS).',
            'Once a component is defined, you use it like any HTML tag: <code>&lt;app-signin&gt;&lt;/app-signin&gt;</code>. Angular replaces that tag with the component\'s template. You can reuse the same component on as many pages as you want.'
          ],
          list: [
            'A <strong>component</strong> controls one patch of the screen — a reusable UI building block.',
            'Three parts: a TS class (logic), an HTML template (view), and CSS/SCSS (styles).',
            'The <code>@Component()</code> decorator marks a class as a component.',
            '<code>selector</code> — the custom HTML tag used to place it, e.g. <code>app-signin</code>.',
            '<code>templateUrl</code> / <code>template</code> — the HTML (file or inline).',
            '<code>styleUrls</code> / <code>styles</code> — the CSS, scoped to this component only.',
            'Component styles are <strong>encapsulated</strong> by default — they do not leak into other components.'
          ],
          code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',        // used as <app-signin></app-signin>
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent {
  username = '';
  password = '';

  onLogin() {
    console.log('Logging in as', this.username);
  }
}`,
          example: {
            title: 'Try it Yourself',
            code: `// signin.component.html
<form (ngSubmit)="onLogin()">
  <input [(ngModel)]="username" placeholder="Username">
  <input [(ngModel)]="password" type="password" placeholder="Password">
  <button type="submit">Login</button>
</form>

// Used elsewhere like any HTML tag:
<app-signin></app-signin>`,
            output: '<form><input placeholder="Username"><input type="password" placeholder="Password"><button>Login</button></form>',
            type: 'code'
          }
        },
        {
          heading: 'Building the app for production',
          content: [
            'When you are ready to ship your app to users, you run <code>ng build</code>. This compiles your TypeScript and templates, bundles the code, optimizes it (minify, tree-shake), and writes the result into the <code>dist/</code> folder. The files inside <code>dist/</code> are what you deploy to a web server.',
            'For a production-optimized build, use <code>ng build -c production</code> (or <code>--configuration production</code>). The production build is smaller and faster because it strips out dev-only code and runs extra optimizations.'
          ],
          list: [
            '<code>ng build</code> — compile the app into <code>dist/&lt;projectname&gt;/</code>.',
            '<code>ng build -c production</code> — production-optimized build (smaller, faster).',
            'Deploy the contents of the <code>dist/</code> folder to any static web server.',
            'The dev server (<code>ng serve</code>) is for development; <code>ng build</code> is for shipping.'
          ],
          code: `ng build
ng build -c production`
        }
      ]
    },
    'angular-course-additional-info': {
      title: 'Additional Info',
      sections: [
        {
          heading: 'Creating a new component (three ways)',
          content: [
            'There are two ways to create a component. The recommended way is to use the CLI — it generates all the files and (in NgModule projects) registers the component for you. The manual way helps you understand what the CLI is doing behind the scenes.',
            '<strong>1. Using the CLI (recommended):</strong> run <code>ng generate component signin</code> (or the shorter <code>ng g c signin</code>) from the project root. The CLI creates a folder with the four files and updates the NgModule.',
            '<strong>2. Manually:</strong> create <code>signin.component.ts</code>, <code>signin.component.html</code>, and <code>signin.component.scss</code> by hand, then add the component to the <code>declarations</code> array of the AppModule (in older projects). In modern standalone Angular, you do not need this step.',
            'If you do work manually, you can put the files inside <code>src/app/components/</code> for organization. Use <code>cd src/app/components</code> first, then <code>cd ..</code> to get back to the project root before running <code>ng serve</code>.'
          ],
          list: [
            'Recommended: <code>ng generate component signin</code> (alias <code>ng g c signin</code>).',
            'The CLI creates the TS, HTML, SCSS, and spec files and updates the NgModule.',
            'Manual: create the three files by hand, then add the component to <code>declarations</code>.',
            'Put feature components under <code>src/app/components/</code> for organization.',
            'Install the <strong>"Angular Essentials"</strong> VS Code extension by John Papa for snippets and IntelliSense.'
          ],
          code: `# CLI way (recommended)
ng generate component signin
# or
ng g c signin

# Manual way — create these files:
#   src/app/components/signin/signin.component.ts
#   src/app/components/signin/signin.component.html
#   src/app/components/signin/signin.component.scss

// Then register in the NgModule (legacy projects)
@NgModule({
  declarations: [SignInComponent],
  // ...
})
export class AppModule { }`
        },
        {
          heading: 'Changing the port (two ways)',
          content: [
            'As covered in Module 1, you can change the dev server port either as a one-off flag or permanently in <code>package.json</code>.'
          ],
          list: [
            'One-off: <code>ng serve --port 4201</code>.',
            'Permanent: edit the <code>start</code> script in <code>package.json</code>.',
            'Add <code>--open</code> to launch the browser automatically.'
          ],
          example: {
            title: 'Try it Yourself',
            code: `# One-off
ng serve --port 4201

# Permanent — package.json
"scripts": {
  "start": "ng serve --port 4201"
}`,
            output: '➜  Local:   http://localhost:4201/',
            type: 'code'
          }
        },
        {
          heading: 'What is an interface?',
          content: [
            'An <strong>interface</strong> in TypeScript is a contract that describes the shape of an object — which properties it has and what types they are. It has no implementation, just the shape. Any class or object that "implements" the interface must provide those properties.',
            'In the example, <code>OnInit</code> is an interface built into Angular. Any component that wants to run setup code after it is created can <code>implements OnInit</code> and provide a <code>ngOnInit</code> method. Angular will call that method automatically at the right moment in the component\'s lifecycle.',
            'A method with no body is called an <strong>abstract method</strong>. When a class implements an interface, it must provide a body for every abstract method — that is called <strong>overriding</strong>. Note that JavaScript/TypeScript does not support method <em>overloading</em> (two methods with the same name and different parameters) the way Java does.'
          ],
          list: [
            'An <strong>interface</strong> describes the shape of an object — properties and their types.',
            'An interface can have <strong>abstract methods</strong> (methods with no body).',
            'A class that <code>implements</code> an interface must provide a body for every abstract method — that is <strong>overriding</strong>.',
            '<code>OnInit</code> is a built-in Angular lifecycle interface; <code>ngOnInit()</code> runs once after the component is initialized.',
            'TypeScript does not support method overloading the way Java does.'
          ],
          code: `// The built-in OnInit interface
export interface OnInit {
  ngOnInit(): void;
}

// A component that implements it
export class SignInComponent implements OnInit {
  ngOnInit() {
    // runs once after the component is initialized
    console.log('Component ready');
  }
}`
        },
        {
          heading: 'Lifecycle methods (a first look)',
          content: [
            'Every Angular component goes through a <strong>lifecycle</strong> — a sequence of moments from creation to destruction. Angular calls specific methods (called <strong>hooks</strong>) at each moment, so you can run your code at the right time.',
            'The two you will use most at the start are:',
            '<strong>ngOnChanges</strong> — called when an <code>@Input()</code> property changes. Use it to react to new data from a parent.<br><strong>ngOnInit</strong> — called <em>once</em> after the component is initialized and its inputs are set. Use it for setup code (fetch data, start a timer).',
            'The full list (covered in Module 4) includes <code>ngDoCheck</code>, <code>ngAfterContentInit</code>, <code>ngAfterViewInit</code>, <code>ngAfterViewChecked</code>, and <code>ngOnDestroy</code>. For now, remember <code>ngOnInit</code> — it is the most common place to put initialization code.'
          ],
          list: [
            'A component has a <strong>lifecycle</strong>: creation → changes → destruction.',
            '<strong>ngOnChanges</strong> — runs when <code>@Input()</code> properties change.',
            '<strong>ngOnInit</strong> — runs once after initialization; the most common place for setup code.',
            'Do <strong>not</strong> put initialization in the constructor — use <code>ngOnInit</code> instead. The constructor is for dependency injection only.',
            'The full list is covered in Module 4 (Lifecycle &amp; State Management).'
          ]
        },
        {
          heading: 'JavaScript & Angular fundamentals',
          content: [
            'A few fundamentals that will make Angular easier to understand:',
            '<strong>Functions are first-class in JavaScript.</strong> You can pass them as arguments, return them, and store them in variables. Angular uses this everywhere — event handlers, callbacks, RxJS operators.',
            '<strong>Classes were added in ES6.</strong> Angular components and services are classes. A class has a <strong>constructor</strong> that runs once when an object is created — if you create 10 objects, the constructor runs 10 times. In Angular, the constructor is mainly used for <em>dependency injection</em> (receiving services).',
            '<strong>Use <code>ngOnInit</code> for initialization, not the constructor.</strong> The constructor runs before Angular has finished setting up the component (inputs, view). <code>ngOnInit</code> runs after, so it is the safe place to fetch data or read inputs.'
          ],
          list: [
            'JavaScript is functional — you can do anything with functions.',
            'Classes (ES6) are the basis of Angular components and services.',
            'The <strong>constructor</strong> runs once per object creation; in Angular it is for dependency injection.',
            'Use <code>ngOnInit</code> (not the constructor) for initialization code.',
            'If you create 10 objects, the constructor runs 10 times; <code>ngOnInit</code> runs once per component instance.'
          ]
        },
        {
          heading: 'Angular bindings (overview)',
          content: [
            'Angular connects your TypeScript code to the HTML template through <strong>bindings</strong>. There are four main shapes, each with a different syntax. This is a quick overview — each is covered in detail in Module 3.',
            '<strong>1. Interpolation — <code>{ }</code></strong> (shown here as <code>{{ }}</code> in real code) — displays a TS value in the HTML: <code>{{ name }}</code>. Good for text and simple expressions.<br><strong>2. Property binding — <code>[ ]</code></strong> — sets an HTML property from a TS value: <code>[value]="name"</code>. One-way: TS → HTML.<br><strong>3. Event binding — <code>( )</code></strong> — calls a TS method when an event fires: <code>(click)="onValidate()"</code>. One-way: HTML → TS.<br><strong>4. Two-way binding — <code>[( )]</code></strong> — combines property and event binding: <code>[(ngModel)]="name"</code>. Changes flow both directions.',
            'You can also call methods and do arithmetic inside interpolation: <code>{{ getDisplayName() }}</code>, <code>{{ person.salary + 1000 }}</code>. The special variable <code>$event</code> inside event bindings gives you the DOM event object: <code>(input)="onUpdate($event)"</code>.'
          ],
          list: [
            '<strong>Interpolation</strong> — <code>{{ name }}</code> — display a value in HTML.',
            '<strong>Property binding</strong> — <code>[value]="name"</code> — TS → HTML (one way).',
            '<strong>Event binding</strong> — <code>(click)="save()"</code> — HTML → TS (one way).',
            '<strong>Two-way binding</strong> — <code>[(ngModel)]="name"</code> — both directions (needs <code>FormsModule</code>).',
            'Inside interpolation you can call methods and do arithmetic: <code>{{ getDisplayName() }}</code>.',
            'Use <code>$event</code> in event bindings to access the DOM event.'
          ],
          code: `<!-- Interpolation -->
<h1>Hello, {{ name }}</h1>
<p>Total: {{ person.salary + 1000 }}</p>

<!-- Property binding (one way: TS → HTML) -->
<input [value]="name">

<!-- Event binding (one way: HTML → TS) -->
<button (click)="onValidate()">Save</button>
<input (input)="onUpdate($event)">

<!-- Two-way binding (both directions) -->
<input [(ngModel)]="name">`
        }
      ]
    },
    'ngif-ngtemplate-input-binding': {
      title: 'ngIf, ngTemplate, Input Binding',
      sections: [
        {
          heading: 'Showing and hiding content with *ngIf',
          content: [
            'Angular has a built-in directive called <code>*ngIf</code> that shows or hides an element based on a condition. If the condition is true, the element is rendered; if false, it is removed from the DOM entirely (not just hidden with CSS).',
            'You can also provide an <strong>else</strong> branch using <code>*ngIf="condition; else other"</code>. The "other" is a reference to an <code>&lt;ng-template&gt;</code> defined elsewhere in the file. This is much cleaner than writing two separate <code>*ngIf</code> blocks with opposite conditions.',
            'In modern Angular (v17+), the new <strong>control flow</strong> syntax <code>@if (cond) { ... } @else { ... }</code> is preferred — it is more readable and does not need <code>ng-template</code>. You will still see <code>*ngIf</code> everywhere in existing code.'
          ],
          list: [
            '<code>*ngIf="cond"</code> renders the element when <code>cond</code> is true; removes it when false.',
            '<code>*ngIf="cond; else otherRef"</code> shows the referenced template when the condition is false.',
            'The "else" template is an <code>&lt;ng-template #otherRef&gt;</code> — its content is not rendered by default.',
            'Modern Angular (v17+): prefer <code>@if (cond) { ... } @else { ... }</code> control flow.'
          ],
          code: `<div *ngIf="users.length; else noUsersContent">
  <table>...</table>
</div>

<ng-template #noUsersContent>
  No users are available.
</ng-template>

<!-- Modern Angular (v17+) -->
@if (users.length) {
  <table>...</table>
} @else {
  No users are available.
}`
        },
        {
          heading: 'What is ng-template?',
          content: [
            '<code>&lt;ng-template&gt;</code> is a special Angular element. Anything inside it is <strong>not rendered</strong> by default — it is just a definition, waiting to be used. You bring it to life by referencing it with a <strong>template reference variable</strong> (the <code>#name</code> syntax).',
            'This is what makes <code>*ngIf ... else</code> work: the "else" content lives inside an <code>&lt;ng-template&gt;</code> and is only rendered when the condition is false. The same pattern powers structural directives like <code>*ngFor</code>, <code>*ngSwitch</code>, and custom ones you might write.',
            'Because the template is defined once and referenced by name, you can reuse the same block of markup in multiple places without duplicating it.'
          ],
          list: [
            '<code>&lt;ng-template&gt;</code> is a special Angular element whose content is <strong>not rendered by default</strong>.',
            'Give it a <strong>template reference variable</strong>: <code>&lt;ng-template #myRef&gt;...&lt;/ng-template&gt;</code>.',
            'Use the reference to render it: <code>*ngIf="cond; else myRef"</code>.',
            'A template can be reused in multiple places — define once, reference many times.',
            'It powers <code>*ngIf ... else</code>, <code>*ngFor</code>, <code>*ngSwitch</code>, and custom structural directives.'
          ],
          code: `<ng-template #noUsersContent>
  <p>No users are available.</p>
</ng-template>

<!-- Reused in two places -->
<div *ngIf="users.length; else noUsersContent">...</div>
<div *ngIf="admins.length; else noUsersContent">...</div>`
        },
        {
          heading: 'Passing data with @Input()',
          content: [
            'Components are reusable, but they are only useful if you can customize them. In Angular, a parent passes data to a child using <strong>property binding</strong> on the child\'s tag, and the child receives it through an <strong>@Input()</strong> property.',
            'The flow is:',
            '1. In the child component class, mark a property with <code>@Input()</code>: <code>@Input() stockPrices: number[] = [];</code><br>2. In the parent\'s template, bind a value to that property: <code>&lt;app-users-list [stockPrices]="prices"&gt;&lt;/app-users-list&gt;</code><br>3. The child now has the parent\'s data available as <code>this.stockPrices</code>.',
            'This is the Angular equivalent of React\'s props or Vue\'s props. The binding is one-way: data flows from parent to child. If the parent\'s value changes, the child updates automatically; the child cannot change the parent\'s value directly.',
            'To send data <em>back</em> from child to parent, use <code>@Output()</code> with an <code>EventEmitter</code> — the child emits an event and the parent listens for it.'
          ],
          list: [
            'A parent passes data to a child via <strong>property binding</strong> on the child\'s tag.',
            'The child receives it through an <strong>@Input()</strong> property.',
            'One-way: parent → child. The child cannot modify the parent\'s value.',
            'For child → parent, use <strong>@Output()</strong> + <code>EventEmitter</code>.',
            'If the parent\'s value changes, the child updates automatically.'
          ],
          code: `// users-list.component.ts (child)
import { Component, Input } from '@angular/core';

export class UsersListComponent {
  @Input() stockPrices: number[] = [];
}

// user.component.ts (parent)
export class UserComponent {
  prices: number[] = [100, 200, 300];
}

// user.component.html (parent template)
<app-users-list [stockPrices]="prices"></app-users-list>`,
          example: {
            title: 'Try it Yourself — @Output() for child → parent',
            code: `// child
export class UsersListComponent {
  @Output() userSelected = new EventEmitter<User>();
  select(u: User) { this.userSelected.emit(u); }
}

// parent template
<app-users-list
  [stockPrices]="prices"
  (userSelected)="onUserSelected($event)">
</app-users-list>`,
            output: 'parent receives the selected User via onUserSelected()',
            type: 'code'
          }
        }
      ]
    }
  },

  module3: {
    'interpolation-and-binding': {
      title: 'Interpolation & Binding',
      sections: [
        {
          heading: 'Interpolation — displaying values',
          content: [
            '<strong>Interpolation</strong> is the simplest form of data binding in Angular. You write <code>{{ expression }}</code> in the template, and Angular evaluates the expression and inserts the result into the HTML. The expression can be a variable, a method call, or arithmetic.',
            'For example, <code>{{ name }}</code> displays the value of the <code>name</code> property from the component. <code>{{ person.salary + 1000 }}</code> computes a value on the fly. <code>{{ getDisplayName() }}</code> calls a method and shows the return value.',
            'Interpolation is one-way (TS → HTML) and is perfect for displaying text. Whenever the underlying value changes, Angular updates the screen automatically.'
          ],
          list: [
            'Interpolation: <code>{{ expression }}</code> in the template.',
            'The expression can be a variable: <code>{{ name }}</code>.',
            'Or a method call: <code>{{ getDisplayName() }}</code>.',
            'Or arithmetic: <code>{{ person.salary + 1000 }}</code>.',
            'One-way: TS → HTML. Updates automatically when the value changes.'
          ],
          code: `// component
export class AppComponent {
  name = 'Ada';
  person = { salary: 5000 };
  getDisplayName() { return this.name.toUpperCase(); }
}

<!-- template -->
<h1>Hello, {{ name }}!</h1>
<p>Salary + bonus: {{ person.salary + 1000 }}</p>
<p>Display name: {{ getDisplayName() }}</p>`
        },
        {
          heading: 'One-way vs. two-way binding',
          content: [
            'Beyond interpolation, Angular has two more binding shapes that move data between the component and the template:',
            '<strong>One-way property binding — <code>[ ]</code></strong> sets an HTML property or attribute from a TS value. The data flows from the component to the template only. Example: <code>&lt;input [value]="name"&gt;</code> sets the input\'s value to <code>name</code>, but typing in the input does <em>not</em> update <code>name</code>. This is great for displaying data.',
            '<strong>Two-way binding — <code>[( )]</code></strong> (the "banana in a box" syntax) flows both directions: the component value sets the input, and typing in the input updates the component value. Example: <code>&lt;input [(ngModel)]="name"&gt;</code>. To use <code>ngModel</code> you must import <code>FormsModule</code> in your app (or component, for standalone).',
            'A common beginner mistake: using <code>[value]="name"</code> when you want the input to update <code>name</code> as the user types. That is one-way — use <code>[(ngModel)]="name"</code> instead.'
          ],
          list: [
            '<strong>One-way property binding</strong>: <code>[property]="value"</code> — TS → HTML only.',
            'Example: <code>&lt;input [value]="name"&gt;</code> shows the value but does not update it on typing.',
            '<strong>Two-way binding</strong>: <code>[(ngModel)]="name"</code> — both directions.',
            'Two-way requires <strong>FormsModule</strong> in the imports.',
            'Use two-way for editable inputs; one-way for read-only display.'
          ],
          code: `// One-way property binding — display only
<input [value]="name" placeholder="Read only">

// Two-way binding — edits flow back to the component
<input [(ngModel)]="name" placeholder="Type here">
<p>You typed: {{ name }}</p>

// To use ngModel, import FormsModule (NgModule project)
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,           // <-- enables ngModel
    AppRoutingModule
  ],
  // ...
})
export class AppModule { }`
        }
      ]
    },
    'angular-forms': {
      title: 'Angular Forms',
      sections: [
        {
          heading: 'Two approaches to forms',
          content: [
            'Angular gives you two ways to build forms, each suited to different needs:',
            '<strong>1. Template-driven forms</strong> — the form is defined mostly in the HTML template, using <code>ngModel</code> and template reference variables. Angular creates the form model for you behind the scenes. This is the simplest approach and great for small forms.',
            '<strong>2. Reactive forms</strong> — the form is defined in the component class as a tree of <code>FormControl</code> and <code>FormGroup</code> objects, and the template binds to them. This gives you full control in code, is easier to unit-test, and scales to complex forms. Use this for anything non-trivial.',
            'Both approaches support the same validators (<code>required</code>, <code>minlength</code>, etc.) and the same status properties (<code>valid</code>, <code>invalid</code>, <code>dirty</code>, <code>touched</code>).',
            'Every form control has a few status flags you will use constantly:',
            '<strong>touched</strong> — true if the user has clicked into the field and then left it (blurred). Use it to avoid showing an error before the user has even touched a field.<br><strong>dirty</strong> — true if the value has been changed.<br><strong>valid</strong> / <strong>invalid</strong> — true if the field passes / fails its validators.<br><strong>pristine</strong> / <strong>untouched</strong> — the opposites of <code>dirty</code> / <code>touched</code>.',
            'To reset a form after submitting, call <code>form.reset()</code> (template-driven) or <code>formGroup.reset()</code> (reactive).'
          ],
          list: [
            '<strong>Template-driven</strong> — forms built in the HTML with <code>ngModel</code>. Simplest; good for small forms.',
            '<strong>Reactive</strong> — forms built in code with <code>FormControl</code>/<code>FormGroup</code>. Full control; good for complex forms.',
            '<code>touched</code> — user entered and left the field.',
            '<code>dirty</code> — the value has been changed.',
            '<code>valid</code> / <code>invalid</code> — passes / fails validators.',
            'Reset with <code>form.reset()</code> after submitting.',
            'Disable the submit button with <code>[disabled]="!form.valid"</code>.'
          ],
          code: `<!-- Template-driven form -->
<form #loginForm="ngForm" (ngSubmit)="onLogin(loginForm)">
  <input #username="ngModel"
         [(ngModel)]="username"
         name="username"
         required
         minlength="5">

  <div *ngIf="username.invalid && (username.dirty || username.touched)">
    <small class="text-danger">
      Username is required (min 5 chars).
    </small>
  </div>

  <button type="submit" [disabled]="!loginForm.valid">Login</button>
</form>

// component
onLogin(form: NgForm) {
  if (form.valid) {
    console.log(form.value);  // { username: '...' }
    form.reset();
  }
}`
        }
      ]
    },
    'reactive-forms': {
      title: 'Reactive Forms',
      sections: [
        {
          heading: 'Forms defined in code',
          content: [
            'Reactive forms put the form model in the component class, not the template. You create a <code>FormControl</code> for each field, optionally group them into a <code>FormGroup</code>, and bind the template to that group. This gives you full programmatic control and makes the form easy to unit-test.',
            'To use reactive forms, import <code>ReactiveFormsModule</code> in your app (or component, for standalone).',
            'A <code>FormControl</code> takes two arguments: the <strong>initial value</strong> and an array of <strong>validators</strong>. For example, <code>new FormControl(\'\', [Validators.required, Validators.minLength(4)])</code> creates a required field that must be at least 4 characters.',
            'The four building blocks:',
            '<strong>FormControl</strong> — tracks the value and validity of a single field.<br><strong>FormGroup</strong> — groups several <code>FormControl</code>s into one object; valid only if all its children are.<br><strong>FormArray</strong> — for a dynamic list of controls (e.g. a list of emails you can add/remove).<br><strong>FormBuilder</strong> — a service that gives a shorter syntax for building groups and arrays.'
          ],
          list: [
            'Import <strong>ReactiveFormsModule</strong> to use reactive forms.',
            '<strong>FormControl</strong> — one field. <code>new FormControl(initial, [validators])</code>.',
            '<strong>FormGroup</strong> — a collection of controls, valid only if all children are.',
            '<strong>FormArray</strong> — a dynamic list of controls.',
            '<strong>FormBuilder</strong> — a service for a shorter syntax.',
            'Read a control\'s status with <code>control.invalid</code>, <code>control.dirty</code>, <code>control.touched</code>, <code>control.errors</code>.'
          ],
          code: `import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

// Register the module (NgModule project)
@NgModule({
  imports: [ReactiveFormsModule],
})
export class AppModule {}

// Component
export class SignInComponent {
  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);
}

<!-- Template -->
<input [formControl]="lastName" required>

<div *ngIf="lastName.invalid && (lastName.dirty || lastName.touched)">
  <small *ngIf="lastName.errors?.['required']">Last name is required.</small>
  <small *ngIf="lastName.errors?.['minlength']">Min 4 characters.</small>
</div>`
        }
      ]
    },
    formgroup: {
      title: 'FormGroup',
      sections: [
        {
          heading: 'Grouping controls together',
          content: [
            'A single <code>FormControl</code> is fine for one field, but real forms have many. A <strong>FormGroup</strong> groups several controls into one object so you can validate and reset them as a unit — the group is valid only if every child control is valid.',
            'In the component, create a <code>FormGroup</code> with named <code>FormControl</code>s. In the template, bind a <code>&lt;form&gt;</code> to the group with <code>[formGroup]="profileForm"</code>, and bind each input with <code>formControlName="firstName"</code> (note: <code>formControlName</code>, not <code>[formControl]</code> — the name matches the key in the group).',
            'Two methods you will use constantly:',
            '<strong>setValue()</strong> — strictly sets the value of every control in the group. You must provide a value for every control or it throws an error.<br><strong>patchValue()</strong> — partially updates the group. You can provide just the fields you want to change. This is safer and more common.',
            'To get a single control from a group in code, use <code>this.profileForm.get(\'firstName\')</code>. A common pattern is a getter: <code>get firstName() { return this.profileForm.get(\'firstName\'); }</code> — then the template can use <code>firstName.invalid</code> cleanly.'
          ],
          list: [
            '<strong>FormGroup</strong> — a collection of <code>FormControl</code>s, validated as a unit.',
            "Create with <code>new FormGroup({ firstName: new FormControl('', []), ... })</code>.",
            'Bind the form: <code>[formGroup]="profileForm"</code>; each input: <code>formControlName="firstName"</code>.',
            '<strong>setValue()</strong> — sets every control; throws if you miss one.',
            '<strong>patchValue()</strong> — partial update; safer and more common.',
            "Get a control: <code>this.profileForm.get('firstName')</code> or a getter.",
            'Disable the submit button: <code>[disabled]="!profileForm.valid"</code>.'
          ],
          code: `import { FormGroup, FormControl, Validators } from '@angular/forms';

export class ProfileComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName:  new FormControl('', [Validators.required]),
  });

  // getter for clean template access
  get firstName() { return this.profileForm.get('firstName'); }

  onSubmit() {
    console.log(this.profileForm.value);  // { firstName: '...', lastName: '...' }
    this.profileForm.patchValue({ firstName: 'Nancy' });
  }
}

<!-- template -->
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <input formControlName="firstName" placeholder="First name">
  <input formControlName="lastName"  placeholder="Last name">
  <button type="submit" [disabled]="!profileForm.valid">Save</button>
</form>`
        },
        {
          heading: 'FormArray for dynamic lists',
          content: [
            'When the number of controls is not fixed — for example, a list of email fields the user can add to or remove from — use a <strong>FormArray</strong> instead of a <code>FormGroup</code>. A <code>FormArray</code> holds a variable number of controls and you can <code>push()</code> new ones or <code>removeAt(i)</code> existing ones.'
          ],
          list: [
            '<strong>FormArray</strong> — for a dynamic list of controls (length can change).',
            "Add a control: <code>array.push(new FormControl(''))</code>.",
            'Remove a control: <code>array.removeAt(index)</code>.',
            'Valid only if every control in the array is valid.'
          ]
        },
        {
          heading: 'FormBuilder — shorter syntax',
          content: [
            "Writing <code>new FormGroup({ ... new FormControl('', [Validators.required]) })</code> for every field gets verbose. The <strong>FormBuilder</strong> service gives you a shorter, cleaner syntax. Inject it into your component and use <code>fb.group({ ... })</code>, where each control is an array <code>[initialValue, validators]</code>.",
            'This is pure sugar — the result is exactly the same <code>FormGroup</code> as if you wrote it by hand. Use <code>FormBuilder</code> for any form with more than a couple of fields.'
          ],
          list: [
            'Inject <strong>FormBuilder</strong> in the constructor: <code>constructor(private fb: FormBuilder) {}</code>.',
            "Create the form: <code>this.fb.group({ name: ['', Validators.required] })</code>.",
            'Each control is an array <code>[initialValue, validators]</code>.',
            'The result is a normal <code>FormGroup</code> — same APIs as the manual version.'
          ],
          code: `import { FormBuilder, Validators } from '@angular/forms';

export class ProfileComponent {
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName:  ['', Validators.required],
  });
}`
        }
      ]
    },
    'angular-validations': {
      title: 'Validations',
      sections: [
        {
          heading: 'Built-in validators',
          content: [
            'Angular ships with a set of built-in <strong>validators</strong> you can attach to a form control. A validator is just a function that looks at the control\'s value and returns <code>null</code> (valid) or an object describing the error (invalid).',
            'There are two kinds:',
            '<strong>Sync validators</strong> — run immediately and return <code>null</code> or an error object. These cover almost everything: required, min, max, email, pattern, minLength, maxLength.<br><strong>Async validators</strong> — return a <code>Promise</code> or <code>Observable</code> and check something that takes time, like "is this username already taken?" by calling a server.',
            'The most common built-in validators (from <code>Validators</code>):'
          ],
          list: [
            '<code>Validators.required</code> — the field must have a value.',
            '<code>Validators.requiredTrue</code> — must be <code>true</code> (good for checkboxes).',
            '<code>Validators.min(n)</code> / <code>Validators.max(n)</code> — numeric range.',
            '<code>Validators.minLength(n)</code> / <code>Validators.maxLength(n)</code> — string length.',
            '<code>Validators.email</code> — must be a valid email format.',
            '<code>Validators.pattern(regexp)</code> — must match a regular expression.',
            '<code>Validators.nullValidator</code> — always valid (placeholder).',
            '<code>Validators.compose([v1, v2])</code> — combine multiple validators.',
            'Async validators go in the third argument of <code>new FormControl()</code>.'
          ],
          code: `import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

// On a single control
lastName = new FormControl('', [
  Validators.required,
  Validators.minLength(4)
]);

// In a FormGroup
profileForm = new FormGroup({
  firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
  lastName:  new FormControl('')
});

// With FormBuilder
profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName:  ['', Validators.required]
});

// Template — show the error message
<div *ngIf="lastName.invalid && (lastName.dirty || lastName.touched)">
  <small *ngIf="lastName.errors?.['required']">Name is required.</small>
  <small *ngIf="lastName.errors?.['minlength']">Must be at least 4 characters.</small>
</div>`
        }
      ]
    }
  },

  module4: {
    'custom-validators': {
      title: 'Custom Validators',
      sections: [
        {
          heading: 'Writing your own validators',
          content: [
            'When the built-in validators are not enough — for example, "phone number must be 10 digits and start with 6, 7, 8, or 9" — you write a <strong>custom validator</strong>. A validator is just a function that takes a <code>FormControl</code> and returns <code>null</code> (valid) or an error object (invalid).',
            "The convention is to return an object whose key is the error name (e.g. <code>{ customRequired: { value: control.value } }</code>). In the template you check for that key with <code>control.errors?.['customRequired']</code> to show the right message.",
            'There are two ways to use a custom validator:',
            '<strong>1. For reactive forms</strong> — write a factory function that returns a validator function, and pass it into the <code>FormControl</code> validators array. This is the simplest and most reusable approach.<br><strong>2. For template-driven forms</strong> — wrap the validator in a <strong>directive</strong> decorated with <code>@Directive()</code>, register it in <code>NG_VALIDATORS</code>, and use the directive as an attribute on the input. This lets you write <code>&lt;input customRequired&gt;</code> in the template.'
          ],
          list: [
            'A validator is a function: <code>(control) =&gt; ValidationErrors | null</code>.',
            'Return <code>null</code> for valid, or <code>{ errorKey: { value } }</code> for invalid.',
            "<strong>Reactive</strong>: write a factory function and pass it to <code>new FormControl('', [myValidator()])</code>.",
            '<strong>Template-driven</strong>: wrap it in a <code>@Directive</code> and register in <code>NG_VALIDATORS</code>.',
            "Check the error in the template: <code>control.errors?.['errorKey']</code>.",
            'Declare the directive in the NgModule (legacy) or import it in the standalone component.'
          ],
          code: `import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// 1. A custom validator function (use with reactive forms)
export function customRequired(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return (!value || !value.trim().length)
      ? { customRequired: { value: control.value } }
      : null;
  };
}

// Reactive form usage
lastName = new FormControl('', [customRequired()]);

// Template
<div *ngIf="lastName.errors?.['customRequired']">Name is required.</div>

// 2. Directive version (use with template-driven forms)
import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[customRequired]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CustomRequiredDirective, multi: true }
  ]
})
export class CustomRequiredDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    return (!value || !value.trim().length)
      ? { customRequired: { value: control.value } }
      : null;
  }
}

// Template-driven usage
<input type="text" name="name" customRequired [(ngModel)]="hero.name">
<div *ngIf="name.errors?.['customRequired']">Name is required.</div>`
        }
      ]
    },
    'canactivate-guard': {
      title: 'CanActivate Guard',
      sections: [
        {
          heading: 'Protecting routes with guards',
          content: [
            'Some pages should only be shown to logged-in users — a profile page, an admin dashboard, a settings screen. Angular lets you protect a route with a <strong>route guard</strong>. The most common guard is <strong>CanActivate</strong>, which runs before the route loads and decides whether the user is allowed to see it.',
            'A guard is a class that implements the <code>CanActivate</code> interface and provides a <code>canActivate()</code> method. The method returns:',
            '<code>true</code> — the route loads.<br><code>false</code> or a <code>UrlTree</code> — the navigation is canceled (or redirected to another URL, like the login page).<br>a <code>Promise&lt;boolean&gt;</code> or <code>Observable&lt;boolean&gt;</code> — for asynchronous checks (e.g. calling an API to verify a token).',
            'The setup steps are:',
            '1. <strong>Create</strong> a guard class with <code>ng g guard auth</code> (the CLI generates the boilerplate).<br>2. <strong>Implement</strong> <code>canActivate()</code> with your auth logic (check a service, a cookie, a token).<br>3. <strong>Provide</strong> the guard (in NgModule <code>providers</code> or, in modern Angular, just <code>providedIn: \'root\'</code>).<br>4. <strong>Apply</strong> it to the route in the route config: <code>{ path: \'profile\', component: ProfileComponent, canActivate: [AuthGuard] }</code>.'
          ],
          list: [
            'A <strong>CanActivate</strong> guard decides whether a route can be loaded.',
            'Implement <code>canActivate(route, state)</code>; return <code>true</code>, <code>false</code>, a <code>UrlTree</code>, <code>Promise</code>, or <code>Observable</code>.',
            'Generate with <code>ng g guard auth</code>.',
            'Check auth (a service, token, cookie) inside <code>canActivate()</code>.',
            "Apply to a route: <code>{ path: 'profile', canActivate: [AuthGuard] }</code>.",
            'Other guards: <code>CanActivateChild</code>, <code>CanDeactivate</code>, <code>Resolve</code>, <code>CanMatch</code>.'
          ],
          code: `import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    // Not logged in — redirect to login, with a return URL
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}

// Route config
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin',  component: AdminComponent,  canActivate: [AuthGuard] }
];`
        }
      ]
    },
    'install-bootstrap': {
      title: 'Install Bootstrap',
      sections: [
        {
          heading: 'Adding Bootstrap to an Angular project',
          content: [
            'Bootstrap is a popular CSS framework that gives you ready-made classes for buttons, forms, grids, and components. To use it in an Angular project, install the package with npm and then tell Angular to include the stylesheet in the build.',
            'The cleanest way is to add the CSS to <code>angular.json</code> under <code>architect.build.options.styles</code>. That way Bootstrap is bundled with your app globally. (You can also import it in <code>styles.scss</code>, which is simpler and works the same way.)',
            'For Angular-specific libraries (like Angular Material or PrimeNG), prefer <code>ng add</code> instead of <code>npm install</code> — it runs the package\'s setup scripts and configures everything for you.'
          ],
          list: [
            'Install: <code>npm install bootstrap</code> (or a specific version <code>npm i bootstrap@5.3.0</code>).',
            'Add the CSS to <code>angular.json</code> → <code>architect.build.options.styles</code>: <code>node_modules/bootstrap/dist/css/bootstrap.min.css</code>.',
            'Or import it in <code>styles.scss</code>: <code>@import \'bootstrap/dist/css/bootstrap.min.css\';</code>.',
            'For Angular libraries, use <code>ng add</code> (not <code>npm install</code>) so setup runs.',
            'Common Angular UI libraries: <strong>PrimeNG</strong>, <strong>ng-bootstrap</strong>, <strong>Angular Material</strong>.'
          ],
          code: `# Install Bootstrap
npm install bootstrap
# or a specific version
npm i bootstrap@5.3.0

# styles.scss (simplest approach)
@import 'bootstrap/dist/css/bootstrap.min.css';

// angular.json (alternative)
"architect": {
  "build": {
    "options": {
      "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.scss"
      ]
    }
  }
}`
        }
      ]
    },
    'npm-and-bootstrap': {
      title: 'npm & Bootstrap',
      sections: [
        {
          heading: 'What is an npm package?',
          content: [
            'An <strong>npm package</strong> is a reusable chunk of code published to the npm registry. Anyone can publish one, and anyone can install one with <code>npm install &lt;name&gt;</code>. Bootstrap, PrimeNG, and Angular itself are all npm packages.',
            'The npm website (<a href="https://www.npmjs.com/" target="_blank">npmjs.com</a>) is the place to search for packages, read their docs, and check how popular and well-maintained they are. Before adding a package, glance at its weekly downloads and last publish date — a library nobody has updated in three years is a risk.',
            'Once installed, the package is added to <code>node_modules/</code> and recorded in <code>package.json</code>. You can then import it in your code or, for CSS frameworks, include it in the build styles.'
          ],
          list: [
            'An <strong>npm package</strong> is a reusable library on the npm registry.',
            'Install with <code>npm install &lt;name&gt;</code> — it lands in <code>node_modules/</code> and is recorded in <code>package.json</code>.',
            'Browse and search at <a href="https://www.npmjs.com/" target="_blank">npmjs.com</a>.',
            'Check weekly downloads and last publish date before adding a package.',
            'Open source — anyone can publish, anyone can install.'
          ],
          code: `# Install any package
npm install @packagename

# Example: install Bootstrap
npm install bootstrap`
        },
        {
          heading: 'Useful Bootstrap text-color classes',
          content: [
            'Bootstrap ships with utility classes for common colors. You will use these everywhere in forms and alerts:'
          ],
          list: [
            '<code>text-primary</code> — blue text.',
            '<code>text-success</code> — green text (use for success messages).',
            '<code>text-danger</code> — red text (use for error messages).',
            '<code>text-warning</code> — yellow/orange text.',
            '<code>text-muted</code> — gray, low-emphasis text.',
            'Pair with <code>bg-primary</code>, <code>bg-success</code>, etc. for background colors.'
          ]
        }
      ]
    },
    'angular-lifecycle-state-management': {
      title: 'Lifecycle & State Management',
      sections: [
        {
          heading: 'The full Angular lifecycle',
          content: [
            'Every Angular component goes through a <strong>lifecycle</strong> — a sequence of moments from creation to destruction. Angular calls specific <strong>hooks</strong> (methods) at each moment so you can run your code at the right time. To use a hook, implement its interface and define the method.',
            'The hooks, in the order Angular calls them:',
            '<strong>ngOnChanges</strong> — when an <code>@Input()</code> property changes. Receives a <code>SimpleChanges</code> object with the old and new values.<br><strong>ngOnInit</strong> — once after the first <code>ngOnChanges</code>. The component is initialized and inputs are set. The most common place for setup code.<br><strong>ngDoCheck</strong> — on every change detection cycle. Use for custom change detection (rare).<br><strong>ngAfterContentInit</strong> — after projected content (ng-content) is initialized.<br><strong>ngAfterContentChecked</strong> — after projected content is checked.<br><strong>ngAfterViewInit</strong> — after the component\'s own view is initialized. Safe to manipulate the DOM via <code>@ViewChild</code>.<br><strong>ngAfterViewChecked</strong> — after the component\'s view is checked.<br><strong>ngOnDestroy</strong> — just before the component is destroyed. Clean up here: unsubscribe, clear timers, remove listeners.'
          ],
          list: [
            '<strong>ngOnChanges</strong> — when <code>@Input()</code> values change.',
            '<strong>ngOnInit</strong> — once after initialization. Use for setup code.',
            '<strong>ngDoCheck</strong> — every change detection cycle (custom detection).',
            '<strong>ngAfterContentInit</strong> — after projected content is ready.',
            '<strong>ngAfterViewInit</strong> — after the component\'s view is ready.',
            '<strong>ngAfterContentChecked</strong> / <strong>ngAfterViewChecked</strong> — after each check.',
            '<strong>ngOnDestroy</strong> — before destruction. Clean up here.'
          ],
          code: `import {
  Component, OnInit, OnDestroy, OnChanges, AfterViewInit
} from '@angular/core';

@Component({ selector: 'app-demo', template: '<p>{{count}}</p>' })
export class DemoComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() start = 0;
  count = 0;
  private timer: any;

  ngOnChanges()   { this.count = this.start; }  // inputs changed
  ngOnInit()      { this.timer = setInterval(() => this.count++, 1000); }
  ngAfterViewInit() { console.log('View ready'); }
  ngOnDestroy()   { clearInterval(this.timer); }  // clean up!
}`
        },
        {
          heading: 'A note on state management',
          content: [
            '<strong>State</strong> is the data a component remembers between renders — a counter, a list of users, a login flag. Small pieces of state live in component properties and are fine. But as an app grows, you often need to share state across many components (the logged-in user, a shopping cart, a theme) without passing it through every level of the component tree.',
            'Angular offers several options, in order of complexity:',
            '<strong>1. Service + RxJS</strong> — a shared service holds state in a <code>BehaviorSubject</code> and exposes it as an <code>Observable</code>. Components inject the service and subscribe. This is the most common approach and works for most apps.<br><strong>2. Signals</strong> (Angular 16+) — a new, simpler reactive primitive. A <code>signal()</code> holds a value; <code>computed()</code> derives values; the template updates automatically. Great for local and shared state.<br><strong>3. NgRx</strong> — a Redux-inspired library for very large apps with complex state flows. Powerful but adds boilerplate; reach for it only when services + signals are not enough.',
            'For most apps, start with a shared service and <code>BehaviorSubject</code> or Angular Signals. Move to NgRx only if you genuinely need time-travel debugging, centralized effects, or strict unidirectional flow.'
          ],
          list: [
            '<strong>Component state</strong> — properties on the component class; fine for small local data.',
            '<strong>Shared service + BehaviorSubject</strong> — the most common approach for app-wide state.',
            '<strong>Signals</strong> (Angular 16+) — simpler reactivity; <code>signal()</code>, <code>computed()</code>.',
            '<strong>NgRx</strong> — Redux-style, for very large apps with complex state flows.',
            'Start simple (service + subject or signals); add NgRx only when you need it.'
          ],
          code: `import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user$ = new BehaviorSubject<string>('');

  login(name: string) { this.user$.next(name); }
  logout()             { this.user$.next(''); }

  get user() { return this.user$.asObservable(); }
}

// any component
export class HeaderComponent {
  user = '';
  constructor(auth: AuthService) {
    auth.user.subscribe(u => this.user = u);
  }
}`
        }
      ]
    }
  },

  module5: {
    'angular-http-methods': {
      title: 'HTTP Methods',
      sections: [
        {
          heading: 'Talking to a server with HttpClient',
          content: [
            'Most Angular apps need to talk to a backend API — to load data, save changes, delete records. Angular provides the <strong>HttpClient</strong> service for exactly this. It returns <code>Observable</code>s, so you subscribe to get the response and use RxJS operators to transform it.',
            'To use <code>HttpClient</code>, add <code>provideHttpClient()</code> to your app config (modern Angular) or import <code>HttpClientModule</code> (legacy). Then inject <code>HttpClient</code> into a service and call its methods.',
            'The HTTP methods map to the standard verbs:'
          ],
          list: [
            "<strong>GET</strong> — fetch data from the server. <code>http.get&lt;User[]&gt;('/api/users')</code>.",
            "<strong>POST</strong> — create a new record. <code>http.post('/api/users', body)</code>.",
            "<strong>PUT</strong> — replace an entire record. <code>http.put('/api/users/42', body)</code>.",
            "<strong>PATCH</strong> — partially update a record. <code>http.patch('/api/users/42', { name: 'New' })</code>.",
            "<strong>DELETE</strong> — remove a record. <code>http.delete('/api/users/42')</code>.",
            'All return an <code>Observable</code> — <code>subscribe()</code> to trigger the request and get the response.',
            'Test APIs with <a href="https://www.postman.com/" target="_blank">Postman</a> before wiring them into Angular.'
          ],
          code: `import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User { id: number; name: string; }

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private api = '/api/users';

  getAll(): Observable<User[]>      { return this.http.get<User[]>(this.api); }
  get(id: number): Observable<User> { return this.http.get<User>(\`\${this.api}/\${id}\`); }
  create(u: User): Observable<User> { return this.http.post<User>(this.api, u); }
  update(u: User): Observable<User> { return this.http.put<User>(\`\${this.api}/\${u.id}\`, u); }
  remove(id: number): Observable<void> { return this.http.delete<void>(\`\${this.api}/\${id}\`); }
}

// In a component
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private service: UserService) {}
  ngOnInit() {
    this.service.getAll().subscribe(list => this.users = list);
  }
}`
        }
      ]
    },
    'angular-routing-programmatically': {
      title: 'Routing Programmatically',
      sections: [
        {
          heading: 'Navigating from code',
          content: [
            'Angular\'s <strong>Router</strong> maps URLs to components, so the browser back/forward buttons work and users can bookmark specific pages. You set up routes in a routing module (or the app config in modern Angular) and then navigate either with <code>&lt;routerLink&gt;</code> in the template or with the <code>Router</code> service in code.',
            'The route configuration is an array of objects, each with a <code>path</code> and a <code>component</code> (or a <code>loadComponent</code> for lazy loading). The empty path <code>\'\'</code> is the default route; the wildcard <code>\'**\'</code> is the 404 page and should always be last.',
            "For navigation <em>from code</em> — for example, after a successful login redirect to the dashboard — inject the <code>Router</code> service and call <code>router.navigate(['/dashboard'])</code> or <code>router.navigateByUrl('/dashboard')</code>. You can pass route parameters and query parameters as the second argument."
          ],
          list: [
            'The <strong>Router</strong> maps URLs to components; enables back/forward and bookmarks.',
            'Routes are an array of <code>{ path, component }</code> objects.',
            '<code>\'\'</code> is the default route; <code>\'**\'</code> is the 404 (always last).',
            'Template navigation: <code>&lt;a routerLink="/about"&gt;About&lt;/a&gt;</code>.',
            "Code navigation: <code>router.navigate(['/dashboard'])</code>.",
            "Read route params with <code>ActivatedRoute</code>: <code>route.snapshot.paramMap.get('id')</code>.",
            '<code>RouterModule.forRoot(routes)</code> for the root; <code>forChild(routes)</code> for feature modules.'
          ],
          code: `import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({ template: '<button (click)="go()">Login</button>' })
export class LoginComponent {
  private router = inject(Router);
  private route  = inject(ActivatedRoute);

  go() {
    // Redirect after a successful login
    this.router.navigate(['/dashboard'], {
      queryParams: { welcome: 1 }
    });
  }
}

// Route config
const routes: Routes = [
  { path: '',           component: HomeComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'user/:id',   component: UserDetailComponent },
  { path: '**',         component: NotFoundComponent }  // 404 — last!
];

// Reading a route parameter
export class UserDetailComponent {
  private route = inject(ActivatedRoute);
  userId = this.route.snapshot.paramMap.get('id');
}`
        }
      ]
    },
    'primeng-dialog': {
      title: 'PrimeNG Dialog',
      sections: [
        {
          heading: 'Showing a dialog with PrimeNG',
          content: [
            '<strong>PrimeNG</strong> is a rich UI component library for Angular — it gives you ready-made dialogs, tables, dropdowns, calendars, and many more components out of the box. Using it saves you from building complex UI from scratch.',
            'The <strong>Dialog</strong> component (<code>p-dialog</code>) is one of the most used. It shows a modal popup with content you define, and a visibility flag you toggle from your component. The typical setup:',
            '1. <strong>Install</strong> PrimeNG and its peer dependency PrimeIcons: <code>npm install primeng primeicons</code>.<br>2. <strong>Add the styles</strong> to <code>angular.json</code> or <code>styles.scss</code>: the PrimeNG theme, the PrimeIcons font.<br>3. <strong>Import</strong> <code>DialogModule</code> into your component (standalone) or NgModule.<br>4. <strong>Use</strong> <code>&lt;p-dialog&gt;</code> in the template, bound to a boolean property with <code>[(visible)]="showDialog"</code>.<br>5. <strong>Toggle</strong> that property from a button click or a menu action to open/close the dialog.',
            'The dialog supports a <code>header</code> (title), a <code>[modal]="true"</code> flag to darken the background, and content projected between the tags. You can put any Angular content inside — forms, tables, images.'
          ],
          list: [
            '<strong>PrimeNG</strong> — a rich UI component library for Angular (dialogs, tables, calendars, ...).',
            'Install: <code>npm install primeng primeicons</code>.',
            'Add styles (theme + icons) to <code>angular.json</code> or <code>styles.scss</code>.',
            'Import <code>DialogModule</code> into your component or NgModule.',
            'Use <code>&lt;p-dialog [(visible)]="show" header="Title"&gt;...content...&lt;/p-dialog&gt;</code>.',
            'Toggle the boolean property to open/close. Use <code>[modal]="true"</code> for a backdrop.',
            'Official docs: <a href="https://primeng.org/dialog" target="_blank">primeng.org/dialog</a>.'
          ],
          code: `import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [DialogModule],
  template: \`
    <button (click)="showDialog = true">Open dialog</button>

    <p-dialog [(visible)]="showDialog" header="Add User" [modal]="true">
      <p>Add a new user here.</p>
      <input placeholder="Name">
      <button (click)="save()">Save</button>
    </p-dialog>
  \`
})
export class DemoComponent {
  showDialog = false;
  save() { console.log('saved'); this.showDialog = false; }
}`
        }
      ]
    },
    'primeng-table': {
      title: 'PrimeNG Table',
      sections: [
        {
          heading: 'Displaying data with the PrimeNG Table',
          content: [
            'The PrimeNG <strong>Table</strong> (<code>p-table</code>) is a feature-rich data grid. It gives you, out of the box: sorting, filtering, pagination, selection, column resizing, lazy loading, and more — features that would take days to build by hand.',
            'The basic setup is similar to the dialog: install PrimeNG, add the styles, import <code>TableModule</code>, and use <code>&lt;p-table&gt;</code> in the template. Bind the table to your data array with <code>[value]="users"</code>, and define columns with <code>&lt;ng-template pTemplate="header"&gt;</code> and <code>pTemplate="body"</code>.',
            'Useful built-in features you can turn on with attributes:',
            '<code>[paginator]="true" [rows]="10"</code> — add pagination with 10 rows per page.<br><code>[sortable]="true"</code> — click a column header to sort.<br><code>[filterDelay]="0"</code> — add a filter input per column.<br><code>[(selection)]="selected"</code> — row selection (single or multiple).<br><code>[lazy]="true" (onLazyLoad)="load($event)"</code> — load data on demand from the server, perfect for large datasets.',
            'Because the table is so feature-rich, it is the right choice for any data-heavy screen — a list of users, orders, or products with sorting and filtering.'
          ],
          list: [
            '<strong>p-table</strong> — a feature-rich data grid from PrimeNG.',
            'Bind data: <code>&lt;p-table [value]="users"&gt;</code>.',
            'Define columns with <code>pTemplate="header"</code> and <code>pTemplate="body"</code>.',
            '<code>[paginator]="true" [rows]="10"</code> — pagination.',
            '<code>[sortable]="true"</code> — sortable columns.',
            '<code>[(selection)]="selected"</code> — row selection.',
            '<code>[lazy]="true" (onLazyLoad)="load($event)"</code> — server-side data loading.',
            'Official docs: <a href="https://primeng.org/table" target="_blank">primeng.org/table</a>.'
          ],
          code: `import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

interface User { id: number; name: string; email: string; }

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TableModule],
  template: \`
    <p-table [value]="users" [paginator]="true" [rows]="10">
      <ng-template pTemplate="header">
        <tr>
          <th pSortableColumn="name">Name</th>
          <th>Email</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-user>
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </ng-template>
    </p-table>
  \`
})
export class UserListComponent {
  users: User[] = [
    { id: 1, name: 'Ada Lovelace',  email: 'ada@example.com' },
     { id: 2, name: 'Alan Turing',   email: 'alan@example.com' },
     { id: 3, name: 'Grace Hopper',   email: 'grace@example.com' }
   ];
}`
        }
      ]
    },
    'angular-build': {
      title: 'Build',
      sections: [
        {
          heading: 'Building your app for production',
          content: [
            'During development you run <code>ng serve</code> to get a dev server with live reload. That server is great for you, but it is <em>not</em> what you ship to users — it is slow, includes lots of debug code, and serves files one at a time.',
            'For production you run <code>ng build</code>. This command does several things:',
            '1. <strong>Compiles</strong> your TypeScript and HTML templates into optimized JavaScript.<br>2. <strong>Bundles</strong> your code and its dependencies into a few files.<br>3. <strong>Optimizes</strong> — minifies the code, tree-shakes unused code, and splits the bundle into chunks for lazy loading.<br>4. <strong>Outputs</strong> the result into the <code>dist/</code> folder (usually <code>dist/&lt;projectname&gt;/</code>).',
            'The files in <code>dist/</code> are what you deploy to a web server. They are small, fast, and have no debug code — ready for real users.',
            'For a production-optimized build, use <code>ng build --configuration production</code> (or the shorter <code>ng build -c production</code>). This applies all the optimizations (minification, tree-shaking, ahead-of-time compilation). In Angular 14+, the default build is already production-optimized, but the flag is still the explicit, safe choice for CI pipelines.',
            'A few gotcha worth knowing:',
            '<strong>Base href</strong>: if your app is served from a sub-path (e.g. <code>https://example.com/payroll/</code>), set <code>--base-href /payroll/</code> on the build command (or in <code>angular.json</code>) so the router and assets use the right root path.<br><strong>Ahead-of-Time (AOT) compilation</strong>: Angular compiles templates at build time, which catches template errors early and makes the bundle smaller. AOT is the default in modern Angular; you do not need a flag.<br><strong>Lazy loading</strong>: if you split your app into lazy-loaded routes, the build produces a separate chunk per lazy route — users only download the code for the page they visit.'
          ],
          list: [
            '<code>ng build</code> — compile the app into <code>dist/&lt;projectname&gt;/</code>.',
            '<code>ng build -c production</code> — explicit production-optimized build (minify, tree-shake, AOT).',
            'Deploy the contents of the <code>dist/</code> folder to any static web server.',
            'For a sub-path deployment, use <code>--base-href /sub-path/</code>.',
            'AOT (Ahead-of-Time) compilation is the default and catches template errors at build time.',
            'Lazy-loaded routes produce separate chunks — smaller initial download.'
          ],
          code: `# Development build (not for production)
ng build

# Production build (optimized, minified)
ng build --configuration production
# or
ng build -c production

# Build with a base href (for sub-path deployment)
ng build --base-href /payroll/

# Output goes to:
#   dist/payroll/
#     ├── index.html
#     ├── main-<hash>.js
#     ├── polyfills-<hash>.js
#     ├── styles-<hash>.css
#     └── assets/`
        }
      ]
    },
    'angular-deployment': {
      title: 'Deployment',
      sections: [
        {
          heading: 'From your laptop to your users',
          content: [
            '<strong>Deployment</strong> is the process of taking your finished Angular app and making it available on a server where users can reach it. After you run <code>ng build</code>, the contents of <code>dist/&lt;projectname&gt;/</code> are static files (HTML, JS, CSS, images). You just need to put them somewhere that serves them over HTTP.',
            'There are three common ways to deploy an Angular app:',
            '<strong>1. Static hosting services</strong> — the easiest. Services like <a href="https://www.netlify.com/" target="_blank">Netlify</a>, <a href="https://vercel.com/" target="_blank">Vercel</a>, <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>, and <a href="https://firebase.google.com/hosting" target="_blank">Firebase Hosting</a> host static sites for free. Point them at your Git repository; every push triggers a build and a deploy. No server configuration required.',
            '<strong>2. Cloud hosting</strong> — more control, more setup. AWS (S3 + CloudFront), Google Cloud Storage, or Azure can serve your build folder. You configure the bucket, upload the files, and set up a CDN. Good for apps that need scaling, custom domains, or backend integration.',
            '<strong>3. Manual deployment</strong> — you copy the build folder to your own server (via FTP, SSH, or a script). Simple for small apps or internal tools, but you do all the work yourself and it is easy to make mistakes.',
            'One thing to be careful about: Angular uses client-side routing, so URLs like <code>/profile</code> do not correspond to real files on the server. You need to configure the server to <strong>rewrite all unknown paths to <code>index.html</code></strong> so Angular can handle them. Otherwise a refresh on <code>/profile</code> returns a 404. Each host has its own way: Netlify/Vercel do it automatically; on Apache you add a <code>.htaccess</code> rule; on Nginx you add a <code>try_files</code> rule.',
            'Angular also ships a handy <code>ng deploy</code> command for popular hosts. Run <code>ng add @angular/fire</code> (for Firebase) or <code>ng add @netlify-builder/deploy</code> and then <code>ng deploy</code> — the CLI builds and uploads for you.'
          ],
          list: [
            '<strong>Static hosting</strong> (Netlify, Vercel, GitHub Pages, Firebase) — easiest, often free, auto-deploys from Git.',
            '<strong>Cloud hosting</strong> (AWS S3 + CloudFront, GCP Storage) — more control, more setup, scales well.',
            '<strong>Manual deployment</strong> — copy <code>dist/</code> to your own server via FTP/SSH. Simple, more manual work.',
            'Always configure the server to <strong>rewrite unknown paths to <code>index.html</code></strong> — otherwise refresh on a client route returns 404.',
            'Use <code>ng add</code> + <code>ng deploy</code> for one-command deploys to Firebase, Netlify, GitHub Pages, etc.',
            'Set <code>--base-href /sub-path/</code> if the app is served from a sub-path.'
          ],
          code: `# 1. Build for production
ng build -c production --base-href /myapp/

# 2a. Deploy with ng deploy (after ng add @angular/fire, etc.)
ng deploy

# 2b. Or copy dist/myapp/ to your static host
scp -r dist/myapp/* user@server:/var/www/myapp/

# Apache .htaccess — rewrite unknown paths to index.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /myapp/
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /myapp/index.html [L]
</IfModule>`
        }
      ]
    },
    'angular-cicd-pipeline': {
      title: 'CI/CD Pipeline',
      sections: [
        {
          heading: 'Automate the path from code to production',
          content: [
            'A <strong>CI/CD pipeline</strong> is an automated sequence of steps that takes your code from a commit all the way to production — without anyone running commands by hand. CI stands for <strong>Continuous Integration</strong> (build and test on every commit); CD stands for <strong>Continuous Delivery/Deployment</strong> (automatically release what passes).',
            'A typical Angular pipeline has four stages:',
            '<strong>1. Source</strong> — the pipeline watches your Git repository. Every push to <code>main</code> (or every pull request) triggers a run.<br><strong>2. Build</strong> — install dependencies with <code>npm ci</code> (faster and reproducible), then <code>ng build -c production</code>.<br><strong>3. Test</strong> — run the unit tests (<code>ng test --watch=false</code>), lint (<code>ng lint</code> if configured), and any end-to-end tests. If anything fails, the pipeline stops and the code does not deploy.<br><strong>4. Deploy</strong> — copy the <code>dist/</code> folder to the server (staging first, then production after approval).',
            '<strong>Jenkins</strong> is a popular open-source automation server for building such pipelines. It integrates with Git (and SVN, Mercurial), runs the build and tests on every commit, and can copy the build to your server when it passes. <strong>GitHub Actions</strong>, <strong>GitLab CI</strong>, and <strong>CircleCI</strong> are cloud-based alternatives that do the same thing with less infrastructure to manage.',
            'The benefits are big: more frequent and predictable releases, fewer human errors, faster time-to-market, and a clear audit trail of what was deployed when. For Angular specifically, the slow part of a pipeline is usually the production build (AOT compilation is CPU-intensive), so CI runners with more CPUs speed up the build noticeably.'
          ],
          list: [
            '<strong>CI/CD</strong> = Continuous Integration / Continuous Delivery (or Deployment).',
            'Four stages: source → build → test → deploy.',
            'Use <code>npm ci</code> (not <code>npm install</code>) in CI for fast, reproducible installs.',
            'Build with <code>ng build -c production</code>; test with <code>ng test --watch=false</code>.',
            '<strong>Jenkins</strong> — popular open-source automation server; integrates with Git.',
            'Cloud alternatives: GitHub Actions, GitLab CI, CircleCI.',
            'Every push triggers a build; failing tests stop the pipeline.',
            'Benefits: fewer manual errors, faster releases, an audit trail.'
          ],
          code: `# A typical Angular pipeline script (GitHub Actions, simplified)

name: CI/CD
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # 1. Source — check out the code
      - uses: actions/checkout@v4

      # 2. Build — install deps and build for production
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: ng build -c production

      # 3. Test — run the unit tests
      - run: ng test --watch=false --browsers=ChromeHeadless

      # 4. Deploy — copy dist/ to the server (only on main)
      - name: Deploy
        run: scp -r dist/myapp/* user@server:/var/www/myapp/`
        }
      ]
    }
  }
};