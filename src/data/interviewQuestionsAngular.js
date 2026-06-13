// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.478Z

export const angularQuestions = {
  "questions": [
    {
      "question": "What is Angular?",
      "answer": "<ol>\n                <li>\n                  Angular is a component-based framework for building scalable web applications\n                </li>\n                <li>\n                  Angular is open source framework. Using Angular we can develop the single page\n                  application (SPA)\n                </li>\n                <li>Using Angular we can develop responsive web pages.</li>\n                <li>Angular uses the typescript</li>\n                <li>It provides the tools to develop and build the code.</li>\n                <li>We are using the Angular 12</li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Angular is a component-based framework for building scalable web applications",
        "Angular is open source framework. Using Angular we can develop the single page application (SPA)",
        "Using Angular we can develop responsive web pages."
      ]
    },
    {
      "question": "What is Dependency injection (DI)?",
      "answer": "<ol>\n                <li>\n                  Dependency injection, is a design pattern. Instead of we are creating objects,\n                  Angular will create the objects for us.\n                </li>\n                <li>\n                  Using Dependency injection, Angular will create the objects which are declared in\n                  the constructor arguments.\n                </li>\n                <code>constructor(private http: HttpClient){}</code>\n\n                <li>\n                  Services and other components must be decorated with\n                  <b>@Injectable</b>\n                  annotation and add them to the\n                  <b>providers</b>\n                  in App module.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Dependency injection, is a design pattern. Instead of we are creating objects, Angular will create the objects for us.",
        "Using Dependency injection, Angular will create the objects which are declared in the constructor arguments.",
        "Services and other components must be decorated with @Injectable annotation and add them to the providers in App module."
      ]
    },
    {
      "question": "What is AOT compilation?",
      "answer": "<ol>\n                <li>AOT refers ahead-of-time (AOT)</li>\n                <li>\n                  The AOT compiler converts Angular HTML and TypeScript code into JavaScript code\n                  during the build phase, before the browser downloads and runs that code.\n                </li>\n                <code>ng build --prod --aot --base-href /demo/view/ --deploy-url /demo/view/</code>\n                <li>\n                  This is the best compilation mode for production build, with decreased load time\n                  and increased performance compared to just-in-time (JIT) compilation.\n                </li>\n                <li>Using ng build command we build the angular application.</li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "AOT refers ahead-of-time (AOT)",
        "The AOT compiler converts Angular HTML and TypeScript code into JavaScript code during the build phase, before the browser downloads and runs that code.",
        "This is the best compilation mode for production build, with decreased load time and increased performance compared to just-in-time (JIT) compilation."
      ]
    },
    {
      "question": "What are the angular lifecycle methods?",
      "answer": "<ol>\n                Angular calls these hook methods in the following order:\n                <li>\n                  <b>ngOnChanges:</b>\n                  Whenever @Input() variable is changed, then ngOnChanges() will be executed.\n                </li>\n                <li>\n                  <b>ngOnInit:</b>\n                  After the first ngOnChanges, ngOnInit will be executed only once.\n                </li>\n                Note:- constructor will be executed first before any life cycle method.\n                <li>\n                  <b>ngDoCheck:</b>\n                  Developer's custom change detection.\n                </li>\n                <li>\n                  <b>ngAfterContentInit:</b>\n                  After component content initialized.\n                </li>\n                <li>\n                  <b>ngAfterContentChecked:</b>\n                  After every check of component content.\n                </li>\n                <li>\n                  <b>ngAfterViewInit:</b>\n                  After a component's views are initialized.\n                </li>\n                <li>\n                  <b>ngAfterViewChecked:</b>\n                  After every check of a component's views.\n                </li>\n                <li>\n                  <b>ngOnDestroy:</b>\n                  Just before the directive is destroyed.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "ngOnChanges: Whenever @Input() variable is changed, then ngOnChanges() will be executed.",
        "ngOnInit: After the first ngOnChanges, ngOnInit will be executed only once.",
        "ngDoCheck: Developer's custom change detection."
      ]
    },
    {
      "question": "What is Authentication?",
      "answer": "<ol>\n                <li>\n                  Authentication is the process of validating that users with passwords or otps.\n                </li>\n                <li>\n                  Example validating whether username and password is correct or not in the login\n                  page.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Authentication is the process of validating that users with passwords or otps.",
        "Example validating whether username and password is correct or not in the login page."
      ]
    },
    {
      "question": "What is Authorization?",
      "answer": "<ol>\n                <li>\n                  Authorization is the process of identifying whether particular user has\n                  permissions or not.\n                </li>\n                <li>Example whether an user has access for admin application or not .</li>\n                <li>Giving someone permission to download a particular file on a server.</li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Authorization is the process of identifying whether particular user has permissions or not.",
        "Example whether an user has access for admin application or not .",
        "Giving someone permission to download a particular file on a server."
      ]
    },
    {
      "question": "What is the difference between Authentication and Authorization?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Authentication</th>\n                    <th scope=\"col\">Authorization</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Process of validating that users with passwords or otps.</td>\n                    <td>Process of identifying whether perticular user has permissions or not.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Authentication works through passwords, one-time pins, biometric information,\n                      and other information provided or entered by the user.\n                    </td>\n                    <td>Authorization maintained by the organization.</td>\n                  </tr>\n                  <tr>\n                    <td>It is the first step of a good identity and access management process.</td>\n                    <td>Authorization will be performed after Authentication</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Authentication Authorization Process of validating that users with passwords or otps.",
        "Process of identifying whether perticular user has permissions or not."
      ]
    },
    {
      "question": "What is an interceptor? How you used in your project?",
      "answer": "<ol>\n                <li>\n                  Interceptors will be executed for each request before sending to the server.\n                </li>\n                <li>\n                  Using interceptor, we can modify the server request like adding new headers.\n                </li>\n                <li>\n                  The Interceptor can be useful for adding custom headers(\n                  <b>X-Client-Key</b>\n                  ) to the outgoing request, logging the incoming response\n                </li>\n                <li>\n                  Http Interceptors is to add the Authorization Header/any token to every request.\n                  In our project, we add auth-token header to each request.\n                </li>\n                <li>\n                  A class whichever implements HttpInterceptor interface is called interceptor. We\n                  should override intercept method.\n                </li>\n                <code>\n                  \n\n                  @Injectable()\n                  \n\n                  export class AppHttpInterceptor implements HttpInterceptor '{' }}\n                  \n\n                  intercept(req: HttpRequest, next: HttpHandler): Observable {\n                  \n\n                  //do whatever you want with the HttpRequest\n                  \n\n                  console.log(req);\n                  \n\n                  req = req.clone({ headers: req.headers.set('AppName', 'StocksApp') });\n                  \n\n\n                  return next.handle(req);\n                  \n\n                  }\n                  \n\n                  }\n                  \n\n                </code>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Interceptors will be executed for each request before sending to the server.",
        "Using interceptor, we can modify the server request like adding new headers.",
        "The Interceptor can be useful for adding custom headers( X-Client-Key ) to the outgoing request, logging the incoming response"
      ]
    },
    {
      "question": "What is subject and behaviour subject?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Subject</th>\n                    <th scope=\"col\">BehaviorSubject</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      A Subject doesn't hold a default value. When it is subscribed it doesn't\n                      provider any value immediately.\n                    </td>\n                    <td>\n                      A BehaviorSubject holds the latest/default value. When it is subscribed it\n                      emits the value immediately.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Subject doesnot takes the default value. eg:\n                      <b>new Subject()</b>\n                    </td>\n                    <td>\n                      BehaviorSubject should be created with an initial value. eg:\n                      <b>new BehaviorSubject(1)</b>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Subject providers only upcoming values. Subject gives new value to subscribers\n                      only after calling the\n                      <b>.next(value)</b>\n                      method.\n                    </td>\n                    <td>BehaviorSubject providers one previous value and upcoming values.</td>\n                  </tr>\n                </tbody>\n              </table>\n\n              <div>Subject example</div>\n              <code>\n                &lt;pre&gt;const subject = new Subject();\nsubject.next(1);\nsubject.subscribe(x =&gt; console.log(x));\t//no output\n&lt;/pre&gt;\n              </code>\n\n              <div class=\"mt-2\">BehaviorSubject example</div>\n              <code>\n                &lt;pre&gt;const subject = new BehaviorSubject(0);\nsubject.next(1);\nsubject.subscribe(x =&gt; console.log(x));//console op: 1\n&lt;/pre&gt;\n              </code>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Subject BehaviorSubject A Subject doesn't hold a default value.",
        "When it is subscribed it doesn't provider any value immediately."
      ]
    },
    {
      "question": "What is difference between constructor and onInit?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Constructor</th>\n                    <th scope=\"col\">ngOnInit</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      Constructor is part of ES6 and typescript is using es6 syntax. Constructor is\n                      a default method runs when component object is created.\n                    </td>\n                    <td>\n                      ngOnInit is component's life cycle method which runs first after constructor\n                      and ngOnChanges\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      It used to inject things like services when the component is being constructed\n                      for further use.\n                    </td>\n                    <td>It is used to perform the initalization and subscription of observables</td>\n                  </tr>\n                  <tr>\n                    <td>We use constructor to do the DI(Dependency Injection)</td>\n                    <td>We use ngOnInit to do business logic, data initialization, API calls</td>\n                  </tr>\n                </tbody>\n              </table>\n              <code>\n                export class App implements OnInit '{' }}\n                \n\n                constructor(private http: HttpClient) {\n                \n\n                // Called first time before the ngOnInit()\n                \n\n                }\n                \n\n                \n\n                ngOnInit() {\n                \n\n                // Called after the constructor and called after the first ngOnChanges()\n                \n\n                this.store.select(){} }\n                \n\n                }\n                \n\n              </code>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Constructor ngOnInit Constructor is part of ES6 and typescript is using es6 syntax.",
        "Constructor is a default method runs when component object is created."
      ]
    },
    {
      "question": "What is pipe?",
      "answer": "<ol>\n                <li>Pipes transforms data one format to another in the template expressions.</li>\n                <li>\n                  Pipes are simple functions to use in template expressions to accept an input value\n                  and return a transformed value.\n                </li>\n                <li>Pipes can declared once and can reuse entire the application.</li>\n                <li>\n                  A class which ever implments PipeTransform interface and decorated with the\n                  @Pipe() annontation is called Pipe.\n                </li>\n              </ol>\n\n              <h4 class=\"mt-2\">Pipes mainly 2 types</h4>\n              <h6>1. built in pipes (Predefined pipes)</h6>\n              <ol>\n                <li>DatePipe: Formats a date value according to locale rules. => date</li>\n                <li>TitleCasePipe</li>\n                <li>UpperCasePipe: Transforms text to all upper case.</li>\n                <li>LowerCasePipe: Transforms text to all lower case.</li>\n                <li>\n                  CurrencyPipe: Transforms a number to a currency string, formatted according to\n                  locale rules.\n                </li>\n                <li>\n                  DecimalPipe: Transforms a number into a string with a decimal point, formatted\n                  according to locale rules.\n                </li>\n                <li>\n                  PercentPipe: Transforms a number to a percentage string, formatted according to\n                  locale rules.\n                </li>\n                <li>AsyncPipe: Unwraps a value from an asynchronous primitive.</li>\n                <li>\n                  JsonPipe: Converts a value into its JSON-format representation. Useful for\n                  debugging.\n                </li>\n                <li>KeyValuePipe: Transforms Object or Map into an array of key value pairs.</li>\n              </ol>\n\n              <h6 class=\"mt-2\">2. custom pipes</h6>\n              Which are developed by users are called custom pipes.\n\n              <code>\n                &lt;pre&gt;                @Pipe({\n                  name: 'hideinfo',\n                  pure: true,\n                })\n                export class HideInfoPipe implements PipeTransform '{' }}\n\n                  transform(value: any, ...args: any[]) {\n                  let val: string = value;\n                  if (value && value.length &gt;= 10) {\n                    let lastVal = val.substring(value.length 6, value.length);\n                    val = val.replace(lastVal, \"*****\");\n                  }\n                  return val;\n                  }\n                }\n                &lt;/pre&gt;\n              </code>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Pipes transforms data one format to another in the template expressions.",
        "Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.",
        "Pipes can declared once and can reuse entire the application."
      ]
    },
    {
      "question": "What are the differences between JIT and AOT?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">JIT</th>\n                    <th scope=\"col\">AOT</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Just-in-Time compiler</td>\n                    <td>Ahead-of-Time (AOT)</td>\n                  </tr>\n                  <tr>\n                    <td>JIT compiles angular code in the browser at runtime (ng serve).</td>\n                    <td>AOT compiles angular code at build time using ng build option.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      JIT compilation is the default when you run the ng build (build only) or ng\n                      serve\n                    </td>\n                    <td>\n                      For AOT compilation, include the --aot option with the ng build or ng serve\n                      command\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Suitable for development mode</td>\n                    <td>Suitable for production mode</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Template binding errors will be identified while running the application\n                    </td>\n                    <td>\n                      Template binding errors will be identified while building with --aot option.\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "JIT AOT Just-in-Time compiler Ahead-of-Time (AOT) JIT compiles angular code in the browser at runtime (ng serve).",
        "AOT compiles angular code at build time using ng build option."
      ]
    },
    {
      "question": "How will you pass data to the other components?",
      "answer": "How will you pass data to the other components? There are multiple ways we can pass\n              the data to the other components.\n              <ol>\n                <li>\n                  \n                  <ol>\n                    <li>\n                      When we have parent to child relationship, we can pass the data to the child\n                      component using the @Input annontation.\n                    </li>\n                  </ol>\n                </li>\n                <li>\n                  <span class=\"fw-bold\">@OutPut - EventEmitter approach</span>\n                  <ol>\n                    <li>\n                      When we have parent to child relationship, we can pass the data from the child\n                      component to parent component using the @OutPut annontation and\n                      EventEmitter.\n                    </li>\n                    <li>\n                      From child component fire the event using the\n                      <b>eventEmitter.emit()</b>\n                    </li>\n                    <li>In parent component handle the event</li>\n                  </ol>\n                </li>\n\n                <li>\n                  <span class=\"fw-bold\">Using ngrx/store approch.</span>\n                  <ol>\n                    <li>We can share data between any components using the ngrx/store approch.</li>\n                    <li>There is no need of any relationship between 2 components.</li>\n                    <li>\n                      First component should fire the event using the 'store.dispatch' method.\n                    </li>\n                    <code>this.store.dispatch(new SigninAction());</code>\n                    <li>Second component should subscribe for selected property from the state</li>\n                    <code>\n                      this.store.select(fromRoot.getDisplayName()).subscribe(val =&gt; {});\n                    </code>\n                  </ol>\n                </li>\n                <li>\n                  <span class=\"fw-bold\">Using the Services approch.</span>\n                  <ol>\n                    <li>We can share data between any components using the Services approch.</li>\n                    <li>There is no need of any relationship between 2 components.</li>\n                    <li>First component should call the service method</li>\n                    <li>Second component should subscribe from the service method.</li>\n                  </ol>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "When we have parent to child relationship, we can pass the data to the child component using the @Input annontation.",
        "@OutPut - EventEmitter approach When we have parent to child relationship, we can pass the data from the child component to parent component using the @OutPut annontation and EventEmitter.",
        "From child component fire the event using the eventEmitter.emit()"
      ]
    },
    {
      "question": "What is Component?",
      "answer": "<ol>\n                <li>\n                  Component is a directive. Using @Component annotation, we can create the\n                  component\n                  <br>\n                  <code>ng generate component componentname</code>\n                </li>\n                <li>Component will display some content to the users.</li>\n                <li>Component is a fundamental buildin block of the angular application.</li>\n                <li>Component can be reused using the selector tag.</li>\n                <li>Component has mainly will 3 files.</li>\n                <ol>\n                  <li>html ==> Display purpose</li>\n                  <li>css/scss => For styling component</li>\n                  <li>ts => Acts as a controller</li>\n                </ol>\n              </ol>\n\n              <code>\n                &lt;pre&gt;                @Component({\n                selector: 'app-signin',\n                templateUrl: '',\n                styleUrls: []\n                });\n                &lt;/pre&gt;\n              </code>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Component is a directive. Using @Component annotation, we can create the component ng generate component componentname",
        "Component will display some content to the users.",
        "Component is a fundamental buildin block of the angular application."
      ]
    },
    {
      "question": "What is a Directive?",
      "answer": "<ol>\n                <li>\n                  A class which annotated with the @Directive annotation is called Directive.\n                </li>\n                <li>\n                  Directive can modify the structure of the DOM or modify attributes in the DOM and\n                  component data model.\n                </li>\n              </ol>\n\n              <div class=\"mt-2\">Directives are mainly 3 types</div>\n              <ol>\n                <li>Components directive</li>\n\n                <li>\n                  Attribute directive\n                  <div>\n                    A directive which changes the attribute value dynamically called attribute\n                    directive.\n                  </div>\n                  <div>Below are the attribute directives in the angular.</div>\n                  <ol>\n                    <li>\n                      ngClass\n                      <code>[ngClass]=\"{'selected': isSelected}\"</code>\n                    </li>\n                    <li>\n                      ngStyle\n                      <code>[ngStyle]=\"{'backGroundColor': 'white'}\"</code>\n                    </li>\n                    <li>\n                      ngModel\n                      <code>[(ngModel)]=\"username\"</code>\n                    </li>\n                  </ol>\n                </li>\n                <li>\n                  Structural directive\n\n                  <div>\n                    Directive which are changing the DOM structure by adding/removing an element\n                    dynamically called structural directives.\n                  </div>\n                  <ol>\n                    <li>\n                      <b>ngFor:</b>\n                      It is used for the iteration purpose.\n                    </li>\n                    <li>\n                      <b>ngIf:</b>\n                      It is used for the conditional statements.\n                    </li>\n                    <li>\n                      <b>ngSwitch:</b>\n                      It is used for the more than 2 conditional statements\n                    </li>\n                  </ol>\n                  <ol></ol>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "A class which annotated with the @Directive annotation is called Directive.",
        "Directive can modify the structure of the DOM or modify attributes in the DOM and component data model.",
        "Attribute directive A directive which changes the attribute value dynamically called attribute directive. Below are the attribute directives in the angular. ngClass [ngClass]=\"{'selected': isSelected}\""
      ]
    },
    {
      "question": "What are the differences between Component and Directive?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Component</th>\n                    <th scope=\"col\">Directive</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      A component is a directive which will show something to the user. It has HTML,\n                      CSS and TS files.\n                    </td>\n                    <td>\n                      Directive may change the dom behavior and it doesn't have HTML, CSS and TS\n                      files.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      For registering a component, we use\n                      <b>@Component</b>\n                      metadata annotation.\n                    </td>\n                    <td>\n                      For registering directives, we use the\n                      <b>@Directive</b>\n                      meta-data annotation.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Only one component is allowed to be present per DOM element.</td>\n                    <td>Multiple directives can be used in a per DOM element.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      All components are directives. Component extends Directive so component is\n                      child of Directive.\n                    </td>\n                    <td>But not all directives are components.</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Component Directive A component is a directive which will show something to the user.",
        "Directive may change the dom behavior and it doesn't have HTML, CSS and TS files."
      ]
    },
    {
      "question": "angular vs angularjs",
      "answer": "<table class=\"table table-bordered\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <p><strong>AngularJS</strong></p>\n                    </td>\n                    <td>\n                      <p><strong>Angular</strong></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p>\n                        AngularJS is a javascript-based open-source front-end framework that is\n                        largely used to create single-page applications on the web.\n                      </p>\n                    </td>\n                    <td>\n                      <p>\n                        Angular is a typescript based open-source web application framework designed\n                        by Google for creating mobile and desktop web applications.\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p>The code of AngularJS is written in Javascript.</p>\n                    </td>\n                    <td>\n                      <p>The code of Angular is written in Typescript.</p>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td>\n                      <p>It’s applications are not mobile friendly.</p>\n                    </td>\n                    <td>\n                      <p>The applications created by Angular are mobile friendly.</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p>AngularJS utilizes @routeProvider to provide routing information.</p>\n                    </td>\n                    <td>\n                      <p>\n                        Angular uses @Route configuration which is used to define configuration\n                        and routing information.\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <p>\n                        AngularJS is hard to handle with the increasing length of the source code.\n                      </p>\n                    </td>\n                    <td>\n                      <p>Angular code is easy to handle long code and applications.</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "AngularJS Angular AngularJS is a javascript-based open-source front-end framework that is largely used to create single-page applications on the web.",
        "Angular is a typescript based open-source web application framework designed by Google for creating mobile and desktop web applications."
      ]
    },
    {
      "question": "what is SPA?",
      "answer": "<div>\n                <ol>\n                  <li>SPA means Single page application (SPA)</li>\n                  <li>\n                    SPA is a single page where a lot of information stays the same and only data\n                    will be updated into particular place.\n                  </li>\n                  <li>\n                    For example, when we load our site, the sidebar and header remain same and only\n                    body changes based on navigation.\n                  </li>\n                  <li>If it is normal html, then whole page will be reloaded.</li>\n                </ol>\n              </div>",
      "difficulty": "Beginner",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "SPA means Single page application (SPA)",
        "SPA is a single page where a lot of information stays the same and only data will be updated into particular place.",
        "For example, when we load our site, the sidebar and header remain same and only body changes based on navigation."
      ]
    },
    {
      "question": "What is Lazy loading?",
      "answer": "<ol>\n                <li>\n                  A process that speeds up application load time by splitting the application into\n                  multiple bundles and loading them on demand.\n                </li>\n                <li>\n                  The router makes use of lazy loading to load child views only when the parent view\n                  is activated.\n                </li>\n                <code>RouterModule.forChild(routes)</code>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "A process that speeds up application load time by splitting the application into multiple bundles and loading them on demand.",
        "The router makes use of lazy loading to load child views only when the parent view is activated."
      ]
    },
    {
      "question": "What are the building blocks of Angular?",
      "answer": "The main building blocks of Angular are:\n              <ol>\n                <li>Modules.</li>\n                <li>Components.</li>\n                <li>Templates.</li>\n                <li>Metadata.</li>\n                <li>Data binding.</li>\n                <li>Directives.</li>\n                <li>Services.</li>\n                <li>Dependency injection.</li>\n                <li>Routing.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "The main building blocks of Angular are: Modules."
      ]
    },
    {
      "question": "What is Angular CLI?",
      "answer": "<p>\n                Angular CLI is command line interface tool to generate the angular building blocks.\n              </p>\n              <ol>\n                <li>Generate the component</li>\n                <code>ng generate comoponent my-component ng g c my-component</code>\n                <li>Generate the class</li>\n                <code>ng generate class</code>\n                <li>Generate directive</li>\n                <code>ng generate directive</code>\n                <li>Generate enum</li>\n                <code>ng generate enum</code>\n                <li>Generate guard/canActivate</li>\n                <code>ng generate guard</code>\n                <li>Generate interceptor</li>\n                <code>ng generate interceptor</code>\n                <li>Generate interface</li>\n                <code>ng generate interface</code>\n                <li>Generate module</li>\n                <code>ng generate module</code>\n                <li>Generate pipe</li>\n                <code>ng generate pipe</code>\n                <li>Generate resolver</li>\n                <code>ng generate resolver</code>\n                <li>Generate service</li>\n                <code>ng generate service</code>\n                <li>Add any libraries using the ng command instead of npm install</li>\n                <code>ng add @angular/pwa</code>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Generate guard/canActivate",
        "Add any libraries using the ng command instead of npm install"
      ]
    },
    {
      "question": "What is the command to generate new project?",
      "answer": "<code>\n                ng new projectname\n                \n\n                ng new sampleproject\n                \n\n              </code>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "ng new projectname ng new sampleproject"
      ]
    },
    {
      "question": "What is the command to generate new components?",
      "answer": "<code>\n                ng generate component componentname\n                \n\n              </code>\n              Using below shortcut command also\n              <br>\n              <code>\n                ng g c SignInComponent\n                \n\n              </code>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "ng generate component componentname Using below shortcut command also ng g c SignInComponent"
      ]
    },
    {
      "question": "What is npm package?",
      "answer": "<ol>\n                <li>npm package is a library management site.</li>\n                <li>It is open source.</li>\n                <li>developers can pull the packages from npm site.</li>\n                <li>using below command we can install the any package.</li>\n                <code>npm install @packagename</code>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "npm package is a library management site.",
        "developers can pull the packages from npm site.",
        "using below command we can install the any package."
      ]
    },
    {
      "question": "What are difference between jQuery and Angular?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">jQuery</th>\n                    <th scope=\"col\">Angular</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>jQuery is a Javascript-based library</td>\n                    <td>It is a Typescript-based, front-end development framework</td>\n                  </tr>\n                  <tr>\n                    <td>It is used for DOM manipulation</td>\n                    <td>It is used for creating single-page applications.</td>\n                  </tr>\n                  <tr>\n                    <td>It is suitable for small size projects</td>\n                    <td>It is suitable for large, complex projects</td>\n                  </tr>\n                  <tr>\n                    <td>It is unidirectional</td>\n                    <td>It is bi-directional (supports two-way data binding)</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "jQuery Angular jQuery is a Javascript-based library It is a Typescript-based, front-end development framework It is used for DOM manipulation It is used for creating single-page applications."
      ]
    },
    {
      "question": "What is data binding and give one example?",
      "answer": "<ol>\n                <li>\n                  Binding data with a variable in html called data binding. Here name is binded to\n                  input tag value attribute.\n                  <code>&lt;input [value]=\"name\"/&gt;</code>\n                </li>\n                <li>\n                  Databinding are mainly 2 types.\n                  <ol>\n                    <li>\n                      One way Databinding: Only Ts file changes will reflect in the html but html\n                      changes will not reflect in the ts fie.\n\n                      <code class=\"d-block\">&lt;input [value]=\"name\"/&gt;</code>\n                    </li>\n                    <li>\n                      Two way Databinding: value change will be reflect in both html and ts files.\n                      <code class=\"d-block\">&lt;input [(ngModel)]=\"name\"/&gt;</code>\n                    </li>\n                  </ol>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Binding data with a variable in html called data binding. Here name is binded to input tag value attribute.",
        "Databinding are mainly 2 types. One way Databinding: Only Ts file changes will reflect in the html but html changes will not reflect in the ts fie.",
        "Two way Databinding: value change will be reflect in both html and ts files."
      ]
    },
    {
      "question": "What is the use of NGRX Store? What is Action, Effect and Reducers?",
      "answer": "<ol>\n                <li>NGRX Store is mainly used for state management of the application.</li>\n                <li>\n                  State management means storing all data in to the one place and get the value from\n                  there in all the components. It will store the values even if the compoentns are\n                  destoryed.\n                </li>\n                <li>\n                  <b>Action:</b>\n                  A class which implements\n                  <b>Action</b>\n                  interface is called Action class. we must provide 'type' property. It is used to\n                  transfer the data from component to reducer or effects class.\n                </li>\n                <li>\n                  <b>Reducer</b>\n                  is a immutable function which returns the value from state. It is used to store\n                  all properties into the store.\n                </li>\n                <li>\n                  <b>Effects:</b>\n                  Effects are used to send the request to the server using the HttpClient class.\n                  Using createEffect(), we can create an effect method.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "NGRX Store is mainly used for state management of the application.",
        "State management means storing all data in to the one place and get the value from there in all the components. It will store the values even if the compoentns are destoryed.",
        "Action: A class which implements Action interface is called Action class. we must provide 'type' property. It is used to transfer the data from component to reducer or effects class."
      ]
    },
    {
      "question": "What is RXJS?",
      "answer": "<ol>\n                <li>RXJS is open-source light weight library.</li>\n                <li>\n                  RXJS provides many observables as operators. eg: mergeMap, switchMap, catchError,\n                  pipe, concatMap, map\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "RXJS is open-source light weight library.",
        "RXJS provides many observables as operators. eg: mergeMap, switchMap, catchError, pipe, concatMap, map"
      ]
    },
    {
      "question": "What is asyc, await?",
      "answer": "<ol>\n                <li>\n                  <b>async</b>\n                  makes a function return a Promise.\n                  <code class=\"d-block\">\n                    async function myFunction() {\n                    \n\n                    return \"Hello\";\n                    \n\n                    }\n                    \n\n                  </code>\n                </li>\n                <li>\n                  <b>await</b>\n                  makes a function wait for a Promise and returns the final value.\n                  <code class=\"d-block\">\n                    async function myDisplay() {\n                    \n\n                    let myPromise = new Promise(function(resolve, reject) {\n                    \n\n                    resolve(\"I love You !!\");\n                    \n\n                    });\n                    \n\n                    document.getElementById(\"demo\").innerHTML = await myPromise;\n                    \n\n                    }\n                    \n\n                  </code>\n                </li>\n                <li>await should be inside the async functions only.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "async makes a function return a Promise. async function myFunction() { return \"Hello\"; }",
        "await should be inside the async functions only."
      ]
    },
    {
      "question": "What is Viewchild ViewChildren?",
      "answer": "<ol>\n                <li>\n                  @ViewChild and @ViewChildren are the types of decorators used to access\n                  the child component class and its different properties into the parent component.\n                </li>\n                <li>\n                  The @ViewChild decorator is used to query a single DOM element from the DOM\n                  tree and lets you manipulate it.\n                  <code class=\"d-block\">\n                    &lt;button #myButton&gt;Test&lt;/button&gt; @ViewChild(\"myButton\", {\n                    static: false }) myButton: ElementRef;\n                  </code>\n                </li>\n                <li>\n                  Using @ViewChild decorator we can get the child element object.\n                  <code class=\"d-block\">\n                    &lt;positional #test&gt;Test&lt;/positional&gt; @ViewChild(\"test\", {\n                    static: false }) testComponent: PositionalComponent;\n                  </code>\n                </li>\n\n                <li>\n                  the @ViewChildren decorator is used to accessing multiple elements. The\n                  response of the element list will always be a QueryList\n\n                  <code class=\"d-block\">\n                    // Accessing multiple native DOM elements using QueryList\n                    \n\n                    @ViewChildren(HelloComponent) myValue: QueryList&lt;HelloComponent&gt;;\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "@ViewChild and @ViewChildren are the types of decorators used to access the child component class and its different properties into the parent component.",
        "The @ViewChild decorator is used to query a single DOM element from the DOM tree and lets you manipulate it. Test @ViewChild(\"myButton\", { static: false }) myButton: ElementRef;",
        "Using @ViewChild decorator we can get the child element object. Test @ViewChild(\"test\", { static: false }) testComponent: PositionalComponent;"
      ]
    },
    {
      "question": "How will secure the application in the Angular? What is Guard?",
      "answer": "<ol>\n                <li>Using the Angular guard classes, we can secure the Angular application.</li>\n                <li>\n                  A class which ever implements CanActivate interface is called Gurad class.\n                  <code class=\"d-block\">ng generate gurad AuthGuard</code>\n                </li>\n                <li>\n                  Inside the Guard class, check whether user has access or not based on state\n                  variable.\n                </li>\n                <li>\n                  In the router module, use canActivate property to secure routes as shown below\n                  <code class=\"d-block\">\n                    routes = [\n                    \n\n                    {path: 'positional', component: PositionalComponent, canActivate:\n                    AuthGuard}\n                    \n\n                    ]\n                    \n\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Using the Angular guard classes, we can secure the Angular application.",
        "A class which ever implements CanActivate interface is called Gurad class. ng generate gurad AuthGuard",
        "Inside the Guard class, check whether user has access or not based on state variable."
      ]
    },
    {
      "question": "What is custom pipe?",
      "answer": "<ol>\n                <li>\n                  Which are developed by users are called custom pipes. A class which ever implments\n                  PipeTransform interface and decorated with the @Pipe() annontation is called\n                  Pipe.\n                </li>\n              </ol>\n\n              <code>\n                &lt;pre&gt;      @Pipe({\n        name: 'hideinfo',\n        pure: true,\n      })\n      export class HideInfoPipe implements PipeTransform {\n\n        transform(value: any, ...args: any[]) {\n        let val: string = value;\n        if (value && value.length &gt;= 10) {\n          let lastVal = val.substring(value.length 6, value.length);\n          val = val.replace(lastVal, \"*****\");\n        }\n        return val;\n        }\n      }\n      &lt;/pre&gt;\n              </code>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Which are developed by users are called custom pipes. A class which ever implments PipeTransform interface and decorated with the @Pipe() annontation is called Pipe."
      ]
    },
    {
      "question": "What is pure pipe? What is impure pipe?",
      "answer": "<h6>Pure Pipes</h6>\n              <code>@Pipe({name: 'hideInfo', pipe: true})</code>\n              <ol>\n                <li>A pipe which declared with 'pipe' as true value called Pure pipe.</li>\n                <li>\n                  By default, pipes are defined as pure so that Angular executes the pipe only when\n                  it detects a pure change to the input value. A pure change is either a change to a\n                  primitive input value (such as String, Number, Boolean, or Symbol), or a changed\n                  object reference (such as Date, Array, Function, or Object).\n                </li>\n                <li>\n                  Angular executes the pipe whenever it detects a change for the input value or\n                  reference.\n                </li>\n                <li>\n                  A pure pipe must use a pure function, which is one that processes inputs and\n                  returns values without side effects.\n                </li>\n                <li>\n                  If given the same input, a pure function should always return the same output.\n                </li>\n                <li>\n                  Pure pipes detects the change only when object or array reference changed else it\n                  would not detect. eg: Here we are assigning the new references to the objets so\n                  pure pipes will work.\n                </li>\n                <code>names = [...names]; person = new Person('');</code>\n                <li>\n                  eg: The below case pure pipes will not work since references are not changed. Here\n                  they are changing the values inside the references. Because the array is the same,\n                  Angular does not update the display.\n                </li>\n                <code class=\"d-block\">\n                  names.push('ss');\n                  \n\n                  person.age = 40;\n                </code>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "A pipe which declared with 'pipe' as true value called Pure pipe.",
        "Angular executes the pipe whenever it detects a change for the input value or reference.",
        "A pure pipe must use a pure function, which is one that processes inputs and returns values without side effects."
      ]
    },
    {
      "question": "What is impure pipe?",
      "answer": "<h6>Impure Pipes</h6>\n              <code>@Pipe({name: 'hideInfo', pipe: false})</code>\n              <ol>\n                <li>A pipe which declared with 'pipe' as false value called Impure pipe.</li>\n                <li>\n                  If we want to detect changes with in the reference object, then we should go for\n                  the impure pipes. eg: The below case impure pipes will work since it can detectt\n                  the changes within reference object.\n                </li>\n                <li>\n                  <code>\n                    names.push('ss');\n                    \n\n                    person.age = 40;\n                    \n\n                  </code>\n                </li>\n                <li>\n                  Angular executes an impure pipe every time it detects a change with every\n                  keystroke or mouse movement.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "A pipe which declared with 'pipe' as false value called Impure pipe.",
        "If we want to detect changes with in the reference object, then we should go for the impure pipes. eg: The below case impure pipes will work since it can detectt the changes within reference object.",
        "names.push('ss'); person.age = 40;"
      ]
    },
    {
      "question": "What is routerLink? What is routerOutlet?",
      "answer": "<h6>routerLink</h6>\n              <ol>\n                <li>\n                  <b>routerLink:</b>\n                  is used to navigate between the pages in the html.\n                </li>\n                <li>\n                  <b>routerLink:</b>\n                  can be used instead of anchor tag for navigation purpose.\n                </li>\n                <li><code>routerLink=\"/positional\"</code></li>\n              </ol>\n\n              <h6>routerOutlet</h6>\n              <ol>\n                <li>\n                  <b>routerOutlet:</b>\n                  displays the current route component in the view.\n                </li>\n                <li>routerOutlet usually will be in the app compnenent.html file.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "routerLink: is used to navigate between the pages in the html.",
        "routerLink: can be used instead of anchor tag for navigation purpose.",
        "routerOutlet: displays the current route component in the view."
      ]
    },
    {
      "question": "What is hostbinding and hostlistener?",
      "answer": "<ol>\n                <li>\n                  @HostBinding: This decorator binds a class property to a property of the host\n                  element.\n                </li>\n                <li>\n                  @HostListener: This decorator binds a class method to an event of the host\n                  element.\n                </li>\n              </ol>\n              <code>\n                import { Component, HostListener, HostBinding } from '@angular/core';\n                \n\n\n                @Component({\n                \n\n                selector: 'app-root',\n                \n\n                template: `\n                &lt;p&gt;This is nice text&lt;/p&gt;\n                &lt;p&gt;\n                  `,\n                  \n\n                  })\n                  \n\n                  export class AppComponent {\n                  \n\n\n                  @HostBinding('style.color') color;\n                  \n\n\n                  @HostListener('click')\n                  \n\n                  onclick() {\n                  \n\n                  this.color = 'blue';\n                  \n\n                  }\n                  \n\n\n                  }\n                  \n\n                &lt;/p&gt;\n              </code>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "@HostBinding: This decorator binds a class property to a property of the host element.",
        "@HostListener: This decorator binds a class method to an event of the host element."
      ]
    },
    {
      "question": "What is viewchild and contentchild",
      "answer": "<ol>\n                <li>\n                  <b>ViewChild</b>\n                  <ol>\n                    <li>ViewChild is a decorator to get the child object in the ts file.</li>\n                    <li>\n                      Shadow DOM - is an internal DOM of your component that is defined by you\n                    </li>\n                    <li>\n                      @ViewChild and @ViewChildren only look at elements that are on your\n                      view template directly.\n                    </li>\n                  </ol>\n                </li>\n                <li>\n                  <b>ContentChild</b>\n                  <ol>\n                    <li>\n                      ContentChildren is a parameter decorator that is used to fetch the QueryList\n                      of elements or directives from the content DOM. The QueryList is updated\n                      whenever the child element/component is added or removed.\n                    </li>\n                    <li>\n                      Light DOM - is a DOM that an end-user of your component supply into your\n                      component.\n                    </li>\n                    <li>\n                      @ContentChild and @ContentChildren queries will return directives\n                      existing inside the\n                      <ng-content></ng-content>\n                      element of your view\n                    </li>\n                  </ol>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "ViewChild ViewChild is a decorator to get the child object in the ts file.",
        "Shadow DOM - is an internal DOM of your component that is defined by you",
        "@ViewChild and @ViewChildren only look at elements that are on your view template directly."
      ]
    },
    {
      "question": "which file is starting point of angular index.html/main.ts?",
      "answer": "index.html file is the starting point of the angular application.",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "html file is the starting point of the angular application."
      ]
    },
    {
      "question": "What is Change detection in angular?",
      "answer": "<ol>\n                <li>\n                  Angular detects the changes only when it identifies a pure change to the input\n                  value. A pure change is either a change to a primitive input value (such as\n                  String, Number, Boolean, or Symbol), or a changed object reference (such as Date,\n                  Array, Function, or Object).\n                </li>\n                <li>\n                  Angular detects the change only when object or array reference changed else it\n                  would not detect. eg: Here we are assigning the new references to the objets so\n                  pure pipes will work.\n\n                  <code class=\"d-block\">\n                    names = [...names];\n                    \n\n                    person = new Person('');\n                  </code>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Angular detects the changes only when it identifies a pure change to the input value.",
        "A pure change is either a change to a primitive input value (such as String, Number, Boolean, or Symbol), or a changed object reference (such as Date, Array, Function, or Object)."
      ]
    },
    {
      "question": "text vs property interpolation",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Text interpolation</th>\n                    <th scope=\"col\">property interpolation</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>text interpolation means directly using values to display in html page</td>\n                    <td>\n                      property interpolation means using property from ts file to bind/display in\n                      html page\n                    </td>\n                  </tr>\n                  <tr>\n                    <!-- <td>ex: &#123;&#123;1 + 'One' + 'true'&#125;&#125;</td>\n                    <td>ex: &#123;&#123;somePropertyFromTsFile + someFunctionFromTsFile()&#125;&#125;</td> -->\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Text interpolation property interpolation text interpolation means directly using values to display in html page property interpolation means using property from ts file to bind/display in html page e"
      ]
    },
    {
      "question": "in npm package what is ~/^ and split version names like MM.mm.pp(Major, Minor, Patch) what is difference between them",
      "answer": "<ol>\n                <li>\n                  <b>^</b>\n                  patch version matching\n                </li>\n                <li>\n                  <b>~</b>\n                  minor version matching\n                </li>\n                <a href=\"https://docs.npmjs.com/about-semantic-versioning\">For more information</a>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "^ patch version matching ~ minor version matching For more information"
      ]
    },
    {
      "question": "Whate are the diference between Annotation vs Decorator?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Annotation</th>\n                    <th scope=\"col\">Decorator</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Used by Traceur compiler</td>\n                    <td>Used by Typescript compiler</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Annotations are only metadata set on the class using the Reflect Metadata\n                      library.\n                    </td>\n                    <td>Decorator corresponds to a function that is called on the class.</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Annotations are used for creating an attribute annotations that stores array.\n                    </td>\n                    <td>\n                      Decorator is a function that gets the object that needs to be decorated.\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>They are Hard-coded</td>\n                    <td>They are not Hard-coded</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Exp. Imports for Annotations: import {ComponentAnnotation as\n                      Component} from ‘@angular/core’;\n                    </td>\n                    <td>\n                      Exp. Imports for Decorators: import {Component} from\n                      ‘@angular/core’;\n                    </td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Annotation Decorator Used by Traceur compiler Used by Typescript compiler Annotations are only metadata set on the class using the Reflect Metadata library.",
        "Decorator corresponds to a function that is called on the class."
      ]
    },
    {
      "question": "What is ngzone?",
      "answer": "<ol>\n                <li>An execution context for a set of asynchronous tasks.</li>\n                <li>\n                  Useful for debugging, profiling, and testing applications that include\n                  asynchronous operations such as event processing, promises, and calls to remote\n                  servers.\n                </li>\n                <li>\n                  An Angular application runs in a zone where it can respond to asynchronous events\n                  by checking for data changes\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "An execution context for a set of asynchronous tasks.",
        "Useful for debugging, profiling, and testing applications that include asynchronous operations such as event processing, promises, and calls to remote servers.",
        "An Angular application runs in a zone where it can respond to asynchronous events by checking for data changes"
      ]
    },
    {
      "question": "How to build Angular project",
      "answer": "<a target=\"_blank\" href=\"assets/pom.xml\" download=\"pom.xml\">\n                ng build --configuration production --aot --base-href /demo/view/ --deploy-url\n                /demo/view/\n              </a>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "ng build --configuration production --aot --base-href /demo/view/ --deploy-url /demo/view/"
      ]
    },
    {
      "question": "What is Reactive forms?",
      "answer": "<ol>\n                <li>\n                  <b>Reactive Forms</b>\n                  in Angular are a model-driven approach to handling form inputs, validation, and\n                  state. The form structure and logic are defined in the component TypeScript code,\n                  not in the template.\n                </li>\n                <li>\n                  Reactive forms use explicit objects like\n                  <code>FormGroup</code>\n                  ,\n                  <code>FormControl</code>\n                  , and\n                  <code>FormArray</code>\n                  to manage form state and validation, making them highly scalable and testable.\n                </li>\n                <li>\n                  They provide synchronous access to the form data, easy unit testing, and powerful\n                  custom validation capabilities.\n                </li>\n                <li>\n                  Reactive forms are preferred for complex forms, dynamic form controls, and when\n                  you need fine-grained control over validation and form state.\n                </li>\n                <li>\n                  <b>Example:</b>\n                  <pre><code>\nimport { FormGroup, FormControl, Validators } from '@angular/forms';\n\nprofileForm = new FormGroup({\n  firstName: new FormControl('', Validators.required),\n  lastName: new FormControl(''),\n});\n        </code></pre>\n                  In the template:\n                  <pre><code>\n&lt;form [formGroup]=\"profileForm\"&gt;\n  &lt;input formControlName=\"firstName\"&gt;\n  &lt;input formControlName=\"lastName\"&gt;\n&lt;/form&gt;\n        </code></pre>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Angular"
      ],
      "keyPoints": [
        "Reactive Forms in Angular are a model-driven approach to handling form inputs, validation, and state. The form structure and logic are defined in the component TypeScript code, not in the template.",
        "Reactive forms use explicit objects like FormGroup , FormControl , and FormArray to manage form state and validation, making them highly scalable and testable.",
        "They provide synchronous access to the form data, easy unit testing, and powerful custom validation capabilities."
      ]
    }
  ]
}
