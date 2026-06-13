// Auto-generated from trinits-web-angular tutorial sources
// Generated: 2026-06-13T02:26:18.129Z

export const angularContent = {
  module1: {
    'angular-intro': {
      title: 'Introduction',
      sections: [
        {
          heading: 'Angular Introduction',
          content: [
            'Before installing the node or angular version, check the below page for correct node versions:',
            '<a target="_blank" href="https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3"> https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3 </a>'
          ],
          list: [
            'Angular is a component-based framework for building scalable web applications.',
            'Angular is open source framework. Using Angular we can develop the single page application (SPA).',
            'Using Angular we can develop response web pages.',
            'Angular uses the typescript',
            'It provides the tools to help you develop, build, test, and update your code',
            'We are using the Angular 14'
          ]
        }
      ]
    },
    'angular-setup': {
      title: 'Setup',
      sections: [
        {
          heading: 'Setup',
          list: [
            '<strong>Node installation (14.17)</strong> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div> <p class="mb-1">How to check the node version?</p> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div> <p class="mb-1">How to check the npm version?</p> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div>',
            '<strong>Angular cli installation</strong> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div> <p class="mb-1">How to check the angular version?</p> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div> <p class="mb-1">Run this command admin windows powershell</p> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div>',
            '<strong>Create a new project using angular cli</strong> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div>',
            '<strong>Run the project using the angular command.</strong> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div> <p class="mb-1">- Run the project using the angular command.</p> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div> <p class="mt-2" style="color: #666"> <small> Note:- When we run the npm start, it will go to the package.json and get the scripts value then it will execute the "start" value property. </small> </p>'
          ],
          example: {
            title: 'Example',
            code: 'https://nodejs.org/en/download/',
            output: `node -v

npm -v

https://angular.io/cli

npm install -g @angular/cli

ng version

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

ng new projectname

ng new payroll

ng serve --open

npm start`,
            type: 'code'
          }
        }
      ]
    },
    'commands-used': {
      title: 'Commands Used',
      sections: [
        {
          heading: 'Commands used in the project',
          content: [
            `<small> Note:- If project is failing to run the application because of typescript error then change the typescript version in package.json to '4.4.2' </small>`
          ],
          list: [
            '<strong>npm install</strong> <ul class="list-unstyled ms-3"> <li> - To install the all dependency libraries. It will create the node_modules folder. </li> </ul>',
            '<strong>ng serve</strong> <ul class="list-unstyled ms-3"> <li>- To start the project</li> </ul>',
            '<strong>npm start</strong> <ul class="list-unstyled ms-3"> <li> - TO start project this command can be used. npm start internally runs the "ng server" command. </li> </ul>',
            '<strong>ng build</strong> <ul class="list-unstyled ms-3"> <li>- To build the application.</li> <li>eg: To build the app in production mode.</li> </ul> <div class="bg-dark text-light p-3 rounded mb-2" style="font-family: monospace"> </div>'
          ],
          code: 'ng build my-app -c production'
        }
      ]
    },
    'what-is-npm': {
      title: 'What is npm?',
      sections: [
        {
          heading: 'What is npm?',
          list: [
            '- Node package manager',
            '- It is open source library management site.',
            '- all node package are available there.',
            '- Each library is called as a package.'
          ]
        }
      ]
    },
    'new-port': {
      title: 'Run on New Port',
      sections: [
        {
          heading: 'How to run angular app in a new port?',
          code: 'ng serve --port 4201'
        }
      ]
    }
  },
  module2: {
    'cli-commands': {
      title: 'CLI Commands',
      sections: [
        {
          heading: 'Angular CLI Commands',
          list: [
            '<strong>Generate the component</strong> <div class="bg-dark text-light p-3 rounded mt-2" style="font-family: monospace"> </div> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate the class</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate directive</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate enum</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate guard/canActivate</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate interceptor</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate interface</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate module</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate pipe</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate resolver</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Generate service</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>',
            '<strong>Add any libraries using the ng command instead of npm install</strong> <div class="bg-dark text-light p-3 rounded mt-2 mb-2" style="font-family: monospace"> </div>'
          ],
          example: {
            title: 'Example',
            code: 'ng generate component my-component',
            output: `ng g c my-component

ng generate class

ng generate directive

ng generate enum

ng generate guard

ng generate interceptor

ng generate interface

ng generate module

ng generate pipe

ng generate resolver

ng generate service

ng add @angular/pwa`,
            type: 'code'
          }
        }
      ]
    },
    'main-angular-parts': {
      title: 'Main Angular Parts',
      sections: [
        {
          heading: 'Explanation about each Main Parts of the Angular Application',
          list: [
            `<strong>node_modules folder</strong> <ul class="list-unstyled ms-3"> <li>- All project dependency libraries will be available here.</li> <li> - This folder will be auto generated by running the "npm install" command, so this folder can be deleted. </li> <li>- Don't add this folder to git. It is not required in git.</li> </ul>`,
            '<strong>src folder</strong> <ul class="list-unstyled ms-3"> <li>- All project source files are available.</li> <li> src/assets/ <ul class="list-unstyled ms-3"> <li> - All project related images, offline js files can be placed in the assets folder. </li> </ul> </li> </ul>',
            '<strong>angular.json</strong> <ul class="list-unstyled ms-3"> <li> - Angular project main configuration file. It contains information about the project, build information. </li> </ul>',
            '<strong>package.json</strong> <ul class="list-unstyled ms-3"> <li> - All project related dependencies information will be available in the package.json </li> <li>- Mainly 2 types of dependencies are available:</li> <ol type="a"> <li> <strong>dependencies</strong> <ul class="list-unstyled ms-3"> <li> - Libraries which are required for project running, those are called dependencies. </li> <li> - Libraries can be installed using the npm command as shown below to add them as dependencies. </li> <li> <div class="bg-dark text-light p-2 rounded mb-2" style="font-family: monospace"> </div> </li> </ul> </li> <li> <strong>dev dependencies</strong> <ul class="list-unstyled ms-3"> <li> - Libraries which are required for project developing but not for running the projects, those are called dev dependencies. </li> <li> - Libraries can be installed using the npm command as shown below to add them as dev dependencies. </li> <li> <div class="bg-dark text-light p-2 rounded mb-2" style="font-family: monospace"> </div> </li> <li> - Here --save-dev option adds the library to the dev dependencies section. </li> </ul> </li> </ol> </ul>',
            '<strong>package.lock.json</strong> <ul class="list-unstyled ms-3"> <li>- This is auto generated file from package.json.</li> <li>- This file can be removed while cleaning the libraries.</li> </ul>',
            '<strong>typescript.config.ts</strong> <ul class="list-unstyled ms-3"> <li>- This file contains the typescript configuration for the project.</li> </ul>',
            '- Typescript is a superset of javascript',
            '- Whatever the features are available in javascript all available in Typescript also new features available in typescript',
            '- Types',
            '- Generics',
            '- A variables which are declared directly inside the class and outside of the methods and constructors are called install variables.',
            '- A separate copy will be available for each object.',
            '- A variables which are declared directly inside the class and outside of the methods and constructors with static keyword are called static variables.',
            '- Only one copy will be available all objects.'
          ],
          example: {
            title: 'Example',
            code: 'npm install bootstrap',
            output: `npm install bootstrap --save

npm install bootstrap --save-dev

export class LoginComponent {
    name: string; //instance variable.

    login() {   // method.
        let count = 0;   //local variable with function scope.
    }
}

export class LoginComponent {
    name: string; //instance variable.
    static COLLEGE_NAME: string; //static variable.

    login() {   // method.
        let count = 0;   //local variable with function scope.
    }
}`,
            type: 'code'
          }
        }
      ]
    },
    'ngmodule-component': {
      title: 'NgModule & Component',
      sections: [
        {
          heading: 'What is NgModule?',
          content: [
            '- NgModule has an input objects which has below properties.'
          ],
          list: [
            '- Module is a group of classes to single unit.',
            '- Using @NgModule annotation, we can create the module.',
            '- <strong>declarations</strong> <span class="ms-3">- All components must register here.</span>',
            '- <strong>imports</strong> <span class="ms-3">- To import other ng modules</span>',
            '- <strong>providers</strong> <span class="ms-3">- services to injected.</span>',
            '- <strong>bootstrap</strong> <span class="ms-3">- Starting component.</span>'
          ],
          code: `@NgModule({
  declarations: [],
  imports:[],
  providers: [],
  bootstrap: [],
})`
        },
        {
          heading: 'What is a component?',
          list: [
            '- Component is a directive.',
            '- Which will display some content to the users.',
            '- Component is a fundamental building block of the angular application.',
            '- html ==> view',
            '- css/scss => styles',
            '- ts => controller',
            '- Component can be reused using the selector tag.',
            '- Component is a directive which will show something to the user.'
          ],
          example: {
            title: 'Example',
            code: `@Component({
  selector: 'app-signin',
  templateUrl: '',
  styleUrls: []
});`,
            output: '<app-signin></app-signin>',
            type: 'code'
          }
        },
        {
          heading: 'How to build the angular application?',
          content: [
            '- Output files will be generated in the dist\projectname'
          ],
          code: 'ng build'
        }
      ]
    },
    'angular-course-additional-info': {
      title: 'Additional Info',
      sections: [
        {
          heading: 'How to create a new component?',
          content: [
            '<b>First move to the components folder using the below command</b> :',
            'Or create manually using below approach:',
            '<strong>Note:</strong> Once components are created, go back to the project root folder using the below command. Here <code>..</code> refers parent directory.'
          ],
          list: [
            'ng generate component signin',
            'ng g c signin',
            'cd src/app/components',
            'ng generate component signin',
            '<b>Create html, scss and ts files</b> <ul> <li>signing.component.ts</li> <li>signing.component.scss</li> <li>signing.component.html</li> </ul>',
            '<b>Declare that component in app module ts in declarations array.</b>',
            'cd ..',
            'Search for "Angular essentials" => Install plugin developed by John Papa.',
            'Plugin only helps for Angular development purpose.'
          ],
          code: `@NgModule({
  declarations: [SignInComponent],
  imports:[],
  providers: [],
  bootstrap: [],
})`
        },
        {
          heading: 'How to change the Angular port?',
          content: [
            '<b>2 ways we can change the port</b> :'
          ],
          list: [
            'ng serve --port portnumber',
            'ng serve --port 4201',
            '<b> Go to <code>package.json</code> </b>',
            '<b>Run the below command directly.</b>'
          ],
          example: {
            title: 'Example',
            code: `scripts: {
  "start": "ng serve --port 4201"
}`,
            output: 'ng serve --port 4201',
            type: 'code'
          }
        },
        {
          heading: 'What is an interface?',
          content: [
            `A method which doesn't have a body is called an abstract method.`,
            '<strong>Note:</strong> Overloading is not possible in TypeScript/JavaScript.'
          ],
          list: [
            'Interface is a specification.',
            'Interface will have only variables and abstract methods.',
            'OnInit',
            'OnInit is a lifecycle interface.',
            'ngOnInit will be executed only once after component is initialized.',
            'If child method is not satisfied with the parent class implementation, then child can override the method.',
            'Writing the same method in the child class is called overriding.',
            'Whenever a class implements any interface, it must provide body for all abstract methods of that interface.'
          ],
          example: {
            title: 'Example',
            code: `export interface OnInit {
  ngOnInit();
}`,
            output: `export class SiginComponent implements OnInit {
  ngOnInit(){
    //implementation.
  }
}// eg: Here ngOnInit() is overridden method.`,
            type: 'code'
          }
        },
        {
          heading: 'Lifecycle methods',
          list: [
            'ngOnChanges',
            'ngOnInit'
          ]
        },
        {
          heading: 'JavaScript & Angular Fundamentals',
          content: [
            'Whenever object is created constructor will be executed. - To perform the initialization for variables.'
          ],
          list: [
            'JavaScript is a functional programming language. We can achieve anything in JavaScript using functions.',
            'Classes are introduced in ES6.',
            'constructor will be executed once for each object creation. If we have 10 objects, then constructor will be executed for 10 times.',
            'ngOnInit will be executed only once component is initialized.'
          ]
        },
        {
          heading: 'Angular Bindings',
          content: [
            'Mainly 2 types of binding available:',
            'To bind any value from ts file to html, then use the below property binding approach.',
            'In angular, to handle the events we should use the <span style="font-family: monospace">()</span> brackets. Inside the brackets we should write the event name.'
          ],
          list: [
            'Interpolation',
            'Property Bindings <ol type="a"> <li>One way binding</li> <li>Two way binding</li> </ol>',
            'If we want to display the value from ts file to html file then we can use the string interpolation.',
            '<span style="font-family: monospace">{}</span>',
            '<span style="font-family: monospace">{name}</span>',
            'In the interpolation, we can call the methods, do arithmetic operation.',
            'eg:',
            '<code>{getDisplayName()}</code>',
            '<span style="font-family: monospace">[]</span>',
            '<span style="font-family: monospace">[value]="name"</span>',
            'If person is an object, then we can use the object notation as a string.',
            '<span style="font-family: monospace">{person.name}</span>',
            '<span style="font-family: monospace">()</span> &rarr; event handling',
            '<span style="font-family: monospace">(input)="onUpdate($event)"</span>',
            'eg: Here we are handling the input event. <span style="font-family: monospace">$event</span> is special object.',
            'If we want to handle the click event then we should write the below code.',
            '<span style="font-family: monospace">(click)="onValidate()"</span>'
          ],
          code: '{person.salary + 1000}'
        }
      ]
    },
    'ngif-ngtemplate-input-binding': {
      title: 'ngIf, ngTemplate, Input Binding',
      sections: [
        {
          heading: `How to write the
              *ngIf
              with
              else
              condition in the HTML file?`,
          list: [
            '- <code>*ngIf</code> with <code>else</code> should be used to avoid multiple if conditions.',
            '<b>Syntax:</b>'
          ],
          code: `<div *ngIf="users.length; else noUsersContent">
  <table></table>
</div>

<ng-template #noUsersContent>
  No users are available.
</ng-template>`
        },
        {
          heading: `What is
              ng-template
              and its use?`,
          list: [
            '- <code>ng-template</code> is a special Angular directive.',
            '- By default, the content inside <code>ng-template</code> is not rendered in the UI.',
            '- It must be referenced using a template variable (e.g. <code>#noUsersContent</code> ) to be displayed.',
            '- The content declared inside <code>ng-template</code> can be reused multiple times.'
          ]
        },
        {
          heading: 'How to pass data between two components?',
          content: [
            'Here, <code>user.component.html</code> is the parent component and <code><users-list></code> is the child component. - The parent is passing the data to the child using <strong>property binding</strong> .'
          ],
          list: [
            '- Use the <code>@Input()</code> annotation to pass data from the parent component to the child component.'
          ],
          code: `// users-list.component.ts
export class UsersListComponent {
  @Input() stockPrices: number[] = [];
}

// user.component.ts
export class UserComponent {
  prices: number[] = [];
}

// user.component.html
<users-list [stockPrices]="prices"></users-list>`
        }
      ]
    }
  },
  module3: {
    'interpolation-and-binding': {
      title: 'Interpolation & Binding',
      sections: [
        {
          heading: 'What is interpolation?',
          list: [
            'Displaying a ts file value in the html using the <code>{}</code> called interpolation',
            '<code>{name}</code>',
            'In the interpolation, we can call the methods, do arithmetic operation.',
            'eg:',
            '<code>{getDisplayName()}</code>'
          ],
          code: '{person.salary + 1000}'
        },
        {
          heading: 'What are the binding available in Angular?',
          content: [
            'There are 2 binding are available.'
          ],
          list: [
            '<strong>One way binding</strong> Retrieving ts file value in the html and assigning to any property/attribute. In the below example we are doing one way binding with value attribute. Whatever the value is available in the ts file, it will reflect in the html file but html modifications will not be sent to the ts file. So input modifications will not reflect in the name property. <code><input [value]=\"name\"></code>',
            '<strong>Two way binding</strong> When we use 2 way binding, property value will be reflected in html and html modifications will be reflected in the ts file also. <code><input [(ngModel)]=\"name\"></code> <ul> <li> <code>ngModel</code> is an attribute directive </li> <li> To use the ngModel, we must import the FormsModule in AppModule imports property. </li> </ul>'
          ],
          code: `@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [], //dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }`
        }
      ]
    },
    'angular-forms': {
      title: 'Angular Forms',
      sections: [
        {
          heading: 'Forms – Two Types',
          content: [
            '- Use form control states and local references to show custom messages.',
            '- A user-defined function used to validate form fields with custom rules.',
            '- A custom directive extends HTML with your own behavior.',
            '- Use <code>@Directive</code> to create a class that modifies element behavior or appearance.',
            '<strong>Note:</strong> The <code>[disabled]</code> attribute expects a boolean. Logic is needed to track the form state.',
            '<strong>ngModel Properties:</strong>'
          ],
          list: [
            '<strong>Template-driven Forms</strong> <ul> <li> Use <code>ngModel</code> attribute directive </li> </ul>',
            '<strong>Reactive Forms</strong> <ul> <li> <code>FormControl</code> – Single field </li> <li> <code>FormGroup</code> – Group multiple FormControls </li> <li> <code>FormBuilder</code> – For concise form building </li> </ul>',
            'Use the <code>disabled</code> attribute with property binding.',
            'Use the <code>ngForm</code> object to check form validity.',
            '<code>touched</code> : True if user clicked and blurred the field',
            '<code>dirty</code> : True if input value was changed',
            '<code>valid</code> : True if input is valid',
            '<code>invalid</code> : True if input is invalid',
            'Use <code>NgForm.reset()</code> after submitting form data.',
            '<strong>Reactive Forms:</strong> Direct access and full control via code',
            '<strong>Template-driven Forms:</strong> Use Angular directives in template'
          ],
          example: {
            title: 'Example',
            code: `<form #loginForm="ngForm" (ngSubmit)="onLogin(loginForm)">

  <button type="submit" [disabled]="!loginForm.valid">Submit</button>
  <!-- OR -->
  <button type="submit" [disabled]="loginForm.invalid">Submit</button>

</form>`,
            output: `<input #usernamectl="ngModel" [(ngModel)]="username" required>

<div *ngIf="!usernamectl.valid || (usernamectl.touched || usernamectl.dirty)">
  <span class="text-danger">User name is required</span>
</div>

<input #usernamectl="ngModel" [(ngModel)]="username" required>

<div *ngIf="(!usernamectl.valid || !usernamectl.value.trim()) || 
            (usernamectl.touched || usernamectl.dirty)">
  <span class="text-danger">User name is required</span>
</div>

<form #loginForm="ngForm" (ngSubmit)="onLogin(loginForm)">
  <input #usernamectl="ngModel" [(ngModel)]="username" required>

  <button type="submit" [disabled]="!loginForm.valid">Submit</button>
</form>

onLoginForm(loginForm: NgForm) {
  // Validations
  // Submit data to server

  if (loginForm) {
    loginForm.reset(); // Reset the form
  }
}`,
            type: 'code'
          }
        }
      ]
    },
    'reactive-forms': {
      title: 'Reactive Forms',
      sections: [
        {
          heading: 'Reactive Forms',
          content: [
            '<a href="https://angular.io/guide/reactive-forms" target="_blank"> Official Angular Docs – Reactive Forms </a>',
            'Reactive forms provide a <strong>model-driven approach</strong> to handling form inputs whose values change over time.',
            'Register the <code>ReactiveFormsModule</code> in your application to use reactive form directives:',
            '- First argument is the <strong>initial value</strong> . - Second argument is an array of <strong>validators</strong> .',
            '<strong>Note:</strong> The form control <code>otp</code> must be declared and bound in the component class like:'
          ],
          list: [
            '<strong>FormControl</strong> : Tracks the value and validation status of a single form field.',
            '<strong>FormGroup</strong> : Tracks the same for a collection of form controls.',
            '<strong>FormArray</strong> : Tracks values and status for an array of controls.',
            '<strong>FormBuilder</strong> : A service with methods to easily create controls, groups, and arrays.'
          ],
          example: {
            title: 'Example',
            code: `@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule
  ],
})`,
            output: `lastName: FormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(4)
]);

<input [formControl]="lastName" required>

<div *ngIf="otp.invalid && (otp.dirty || otp.touched)" class="text-danger">
  <small *ngIf="otp.errors?.['customRequired']">OTP is required.</small><br>
  <small *ngIf="otp.errors?.['minlength']">OTP should be 4 digits.</small>
</div>

otp = new FormControl('', [
  Validators.required,
  Validators.minLength(4)
]);`,
            type: 'code'
          }
        }
      ]
    },
    formgroup: {
      title: 'FormGroup',
      sections: [
        {
          heading: 'FormGroup',
          content: [
            'If we want to handle more than one form control, we use the FormGroup approach.',
            'The individual form controls are now collected within a group.'
          ],
          list: [
            '<strong>setValue()</strong> - Strictly sets new value adhering to the form group structure.',
            '<strong>patchValue()</strong> - Partially updates any properties you provide:'
          ],
          example: {
            title: 'Example',
            code: `profileForm = new FormGroup({
  firstName: new FormControl('', []),
  lastName: new FormControl('', []),
});`,
            output: `<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <label for="first-name">First Name:</label>
  <input id="first-name" type="text" formControlName="firstName">

  <label for="last-name">Last Name:</label>
  <input id="last-name" type="text" formControlName="lastName">

  <button type="submit" [disabled]="!profileForm.valid">Submit</button>
</form>

<div *ngIf="otp.invalid && (otp.dirty || otp.touched)" class="text-danger">
  <small *ngIf="otp.errors?.['customRequired']">OTP is required.</small><br>
  <small *ngIf="otp.errors?.['minlength']">OTP should be 4 digits.</small>
</div>

this.email.setValue('abc.com');

this.profileForm.patchValue({
  firstName: 'Nancy',
  address: {
    street: '123 Drew Street'
  }
});

export class ReactiveFormComponent implements OnInit {
  sampleForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void { }

  get email() {
    return this.sampleForm.get('email');
  }

  setName() {
    // this.email.setValue('abc.com');
    this.sampleForm.patchValue({
      email: 'abc@gmail.com',
      password: 'asdfsdf'
    });
  }
}`,
            type: 'code'
          }
        },
        {
          heading: 'FormArray',
          content: [
            'If you want to handle an array of controls, use FormArray (example not included here).'
          ]
        },
        {
          heading: 'FormBuilder',
          content: [
            'To simplify form creation:',
            'The <code>group()</code> method creates a FormGroup object, where each control is defined as an array with the initial value as the first item.'
          ],
          list: [
            'Inject <code>FormBuilder</code> in the constructor:',
            'Create form with the <code>group()</code> method:'
          ],
          example: {
            title: 'Example',
            code: 'constructor(private fb: FormBuilder) { }',
            output: `profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
});

<div *ngIf="otp.invalid && (otp.dirty || otp.touched)" class="text-danger">
  <small *ngIf="otp.errors?.['customRequired']">OTP is required.</small><br>
  <small *ngIf="otp.errors?.['minlength']">OTP should be 4 digits.</small>
</div>`,
            type: 'code'
          }
        }
      ]
    },
    'angular-validations': {
      title: 'Validations',
      sections: [
        {
          heading: 'Form Validations',
          content: [
            'Official Docs: <a href="https://angular.io/guide/form-validation" target="_blank"> https://angular.io/guide/form-validation </a>',
            'OR using FormGroup:',
            'OR using FormBuilder:'
          ],
          list: [
            '<strong>Sync Validators</strong> : Functions that take a control and immediately return validation errors or <code>null</code> .',
            '<strong>Async Validators</strong> : Functions that return a <code>Promise</code> or <code>Observable</code> and emit validation errors or <code>null</code> .',
            '<code>min(min: number)</code>',
            '<code>max(max: number)</code>',
            '<code>required(control: AbstractControl)</code>',
            '<code>requiredTrue(control: AbstractControl)</code>',
            '<code>email(control: AbstractControl)</code>',
            '<code>minLength(minLength: number)</code>',
            '<code>maxLength(maxLength: number)</code>',
            '<code>pattern(pattern: string | RegExp)</code>',
            '<code>nullValidator(control: AbstractControl)</code>',
            '<code>compose(validators[])</code> or <code>null</code>',
            '<code>composeAsync(validators: AsyncValidatorFn[])</code>'
          ],
          example: {
            title: 'Example',
            code: `lastName: FormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);`,
            output: `profileForm = new FormGroup({
  firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
  lastName: new FormControl('')
});

profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required]
});

get lastName() { return this.profileForm.get('lastName'); }

<div *ngIf="lastName.invalid && (lastName.dirty || lastName.touched)" class="alert">

  <div *ngIf="lastName.errors?.['required']">
    Name is required.
  </div>

  <div *ngIf="lastName.errors?.['minlength']">
    Name must be at least 4 characters long.
  </div>

</div>`,
            type: 'code'
          }
        }
      ]
    }
  },
  module4: {
    'custom-validators': {
      title: 'Custom Validators',
      sections: [
        {
          heading: 'Custom Validators in Angular Forms',
          content: [
            'Writing our own validation logic is called a custom validator.',
            'Custom directives are used to create validators for template-driven forms.'
          ],
          list: [
            'Write a simple function',
            'Return a function using ES6 arrow syntax or standard JS',
            'Write the logic for the custom validation',
            'Use the custom validator in a form control',
            'Handle the error in the HTML',
            'Create a directive and decorate it with <code>@Directive()</code>',
            'Override the <code>validate()</code> method',
            'Write validation logic inside <code>validate()</code>',
            'Declare the directive in <code>@NgModule</code>',
            'Use the directive and handle the error in the HTML'
          ],
          example: {
            title: 'Example',
            code: `export function customRequired(): ValidatorFn {

}`,
            output: `export function customRequired(): ValidatorFn {
  return (control: AbstractControl) => {

  };
}

export function customRequired(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let value = control.value;
    return (!value || !value.trim().length)
      ? { customRequired: { value: control.value } } 
      : null;
  };
}

lastName: FormControl = new FormControl('', [customRequired()]);

<div *ngIf="lastName.errors?.['customRequired']">
  Name is required.
</div>

@Directive({
  selector: '[customRequired]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CustomRequiredValidatorDirective, multi: true }
  ]
})
export class CustomRequiredValidatorDirective implements Validator {
}

export class CustomRequiredValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    // logic goes here
  }

}

export class CustomRequiredValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    let value = control.value;
    return (!value || !value.trim().length)
      ? { customRequired: { value: control.value } } 
      : null;
  }

}

@NgModule({
  declarations: [
    CustomRequiredValidatorDirective
  ]
})

<input type="text" id="name" name="name" class="form-control"
  required minlength="4" customRequired
  [(ngModel)]="hero.name" #name="ngModel">

<div *ngIf="name.errors?.['customRequired']">
  Name is required.
</div>`,
            type: 'code'
          }
        }
      ]
    },
    'canactivate-guard': {
      title: 'CanActivate Guard',
      sections: [
        {
          heading: 'CanActivate & Route Protection in Angular',
          content: [
            '<strong>CanActivate</strong> is an interface in Angular used to protect routes by determining if a route can be activated.'
          ],
          list: [
            'If all guards return <code>true</code> , the route activates.',
            'If any guard returns <code>false</code> , the navigation is canceled.',
            'The return value can be <code>boolean</code> , <code>Observable<boolean></code> , <code>Promise<boolean></code> , or a <code>UrlTree</code> .',
            '<strong>Create a class implementing CanActivate</strong>',
            '<strong>Override the canActivate method</strong>',
            '<strong>Write logic for authorization</strong>',
            '<strong>Register the guard in the AppModule</strong>',
            '<strong>Apply the guard in route config</strong>'
          ],
          example: {
            title: 'Example',
            code: `@Injectable()
class AuthenctionGuard implements CanActivate {
  constructor() {}
}`,
            output: `@Injectable()
class CanActivateTeam implements CanActivate {
  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Return boolean or UrlTree
  }
}

@Injectable()
class AuthenctionGuard implements CanActivate {
  private isAuthenticated: boolean = false;

  constructor(private store\$: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.store\$.select(fromRoot.getAuthenticationStatus())
      .subscribe(status => {
        this.isAuthenticated = status;
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAuthenticated;
  }
}

@NgModule({
  providers: [AuthenctionGuard]
})

{
  path: 'my-profile',
  component: ComponentName,
  canActivate: [AuthenctionGuard]
}`,
            type: 'code'
          }
        }
      ]
    },
    'install-bootstrap': {
      title: 'Install Bootstrap',
      sections: [
        {
          heading: 'Installing Bootstrap in Angular Project',
          content: [
            'Use the npm package manager to install Bootstrap:',
            'To install a specific version:'
          ],
          list: [
            'The package is added to the <code>node_modules</code> folder.',
            'The dependency is recorded in <code>package.json</code> .',
            '<strong>bootstrap</strong> Use Bootstrap classes like <code>btn</code> , text colors.',
            '<strong>font-awesome</strong> Use icons from Font Awesome.',
            '<strong>prime-ng</strong> Create UI components like dialogs.',
            '<strong>ngx-bootstrap</strong> Create Bootstrap-based dropdowns, modals, etc.'
          ],
          example: {
            title: 'Example',
            code: `npm install bootstrap
  or
npm i bootstrap`,
            output: 'npm i bootstrap@4.6.0',
            type: 'code'
          }
        }
      ]
    },
    'npm-and-bootstrap': {
      title: 'npm & Bootstrap',
      sections: [
        {
          heading: 'What is an npm Package?',
          list: [
            '<strong>npm package</strong> is a library management site for JavaScript and Node.js.',
            'It is <strong>open source</strong> , allowing developers to share and reuse code.',
            'Developers can <strong>pull packages</strong> (download libraries) from the npm registry website.',
            'To install any package, use the command:',
            '<code>text-primary</code> — renders text in <span style="color: blue">blue</span>',
            '<code>text-success</code> — renders text in <span style="color: green">green</span>',
            '<code>text-danger</code> — renders text in <span style="color: red">red</span>'
          ],
          code: 'npm install @packagename'
        }
      ]
    },
    'angular-lifecycle-state-management': {
      title: 'Lifecycle & State Management',
      sections: [
        {
          heading: 'Angular Lifecycle Methods',
          content: [
            'Angular provides lifecycle hooks that give visibility into key moments in the component lifecycle:'
          ],
          list: [
            '<strong>ngOnChanges</strong> – Called when input properties change.',
            '<strong>ngOnInit</strong> – Called once after the component is initialized.',
            '<strong>ngOnDestroy</strong> – Called just before the component is destroyed.'
          ]
        }
      ]
    }
  },
  module5: {
    'angular-http-methods': {
      title: 'HTTP Methods',
      sections: [
        {
          heading: 'What HTTP Methods Are Available?',
          content: [
            'Using <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer"> Postman </a> , we can test REST API changes.',
            '<code>HttpClient</code> methods:'
          ],
          list: [
            '<strong>GET</strong> - To get the data from server.',
            '<strong>POST</strong> - To create/save data to the server.',
            '<strong>PUT</strong> - To update data to the server.',
            '<strong>DELETE</strong> - To delete data to the server.',
            '<strong>PATCH</strong> - To update a particular value in the object.',
            '<strong>TRACE</strong>',
            '<strong>LOCATE</strong>',
            '<code>get(url)</code>',
            '<code>post(url, payload)</code>',
            '<code>put(url, payload)</code>',
            '<code>delete(url)</code>',
            'In the component, whenever a button is clicked, an Action is fired. <strong>Example:</strong> On form submit button click:',
            'The Effects class listens for the Action using <code>ofType()</code> . Inside the effect method, use <code>HttpClient</code> to fetch or save data to the server.'
          ],
          code: 'this.store.dispatch(new SaveUserAction(usermodel));'
        }
      ]
    },
    'angular-routing-programmatically': {
      title: 'Routing Programmatically',
      sections: [
        {
          heading: 'Angular Routing',
          content: [
            'Angular routing helps navigate between different views or components based on URL changes. It is part of the Angular Router module.'
          ],
          list: [
            'Create a separate routing module for each feature module when organizing large applications.',
            'By default, <code>app-routing.module.ts</code> is available for the root routing configuration.',
            'Official Docs: <a href="https://angular.io/guide/router" target="_blank">Angular Router Guide</a>',
            '<code>RouterModule.forRoot(routes)</code> is used in the main (root) routing module.',
            'Use <code>RouterModule.forChild(routes)</code> for feature module routing.',
            'Define your route paths inside the <code>routes</code> array.'
          ],
          code: `import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = []; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`
        }
      ]
    },
    'primeng-dialog': {
      title: 'PrimeNG Dialog',
      sections: [
        {
          heading: 'Class 11',
          content: [
            '---------',
            'Adding primeng library'
          ],
          list: [
            'How to show the prime ng dialog?'
          ]
        }
      ]
    },
    'primeng-table': {
      title: 'PrimeNG Table',
      sections: [
        {
          heading: 'Class 12',
          content: [
            '---------',
            'Using primeng library'
          ],
          list: [
            'How to show the table using prime ng integration?'
          ]
        }
      ]
    }
  }
};
