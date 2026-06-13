// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.650Z

export const angularQuestions = {
  questions: [
    {
      question: 'What is Angular?',
      answer: `<ol>
                <li>
                  Angular is a component-based framework for building scalable web applications
                </li>
                <li>
                  Angular is open source framework. Using Angular we can develop the single page
                  application (SPA)
                </li>
                <li>Using Angular we can develop responsive web pages.</li>
                <li>Angular uses the typescript</li>
                <li>It provides the tools to develop and build the code.</li>
                <li>We are using the Angular 12</li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is Dependency injection (DI)?',
      answer: `<ol>
                <li>
                  Dependency injection, is a design pattern. Instead of we are creating objects,
                  Angular will create the objects for us.
                </li>
                <li>
                  Using Dependency injection, Angular will create the objects which are declared in
                  the constructor arguments.
                </li>
                <code>constructor(private http: HttpClient){}</code>

                <li>
                  Services and other components must be decorated with
                  <b>@Injectable</b>
                  annotation and add them to the
                  <b>providers</b>
                  in App module.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is AOT compilation?',
      answer: `<ol>
                <li>AOT refers ahead-of-time (AOT)</li>
                <li>
                  The AOT compiler converts Angular HTML and TypeScript code into JavaScript code
                  during the build phase, before the browser downloads and runs that code.
                </li>
                <code>ng build --prod --aot --base-href /demo/view/ --deploy-url /demo/view/</code>
                <li>
                  This is the best compilation mode for production build, with decreased load time
                  and increased performance compared to just-in-time (JIT) compilation.
                </li>
                <li>Using ng build command we build the angular application.</li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What are the angular lifecycle methods?',
      answer: `<ol>
                Angular calls these hook methods in the following order:
                <li>
                  <b>ngOnChanges:</b>
                  Whenever @Input() variable is changed, then ngOnChanges() will be executed.
                </li>
                <li>
                  <b>ngOnInit:</b>
                  After the first ngOnChanges, ngOnInit will be executed only once.
                </li>
                Note:- constructor will be executed first before any life cycle method.
                <li>
                  <b>ngDoCheck:</b>
                  Developer's custom change detection.
                </li>
                <li>
                  <b>ngAfterContentInit:</b>
                  After component content initialized.
                </li>
                <li>
                  <b>ngAfterContentChecked:</b>
                  After every check of component content.
                </li>
                <li>
                  <b>ngAfterViewInit:</b>
                  After a component's views are initialized.
                </li>
                <li>
                  <b>ngAfterViewChecked:</b>
                  After every check of a component's views.
                </li>
                <li>
                  <b>ngOnDestroy:</b>
                  Just before the directive is destroyed.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is Authentication?',
      answer: `<ol>
                <li>
                  Authentication is the process of validating that users with passwords or otps.
                </li>
                <li>
                  Example validating whether username and password is correct or not in the login
                  page.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is Authorization?',
      answer: `<ol>
                <li>
                  Authorization is the process of identifying whether particular user has
                  permissions or not.
                </li>
                <li>Example whether an user has access for admin application or not .</li>
                <li>Giving someone permission to download a particular file on a server.</li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is the difference between Authentication and Authorization?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Authentication</th>
                    <th scope="col">Authorization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Process of validating that users with passwords or otps.</td>
                    <td>Process of identifying whether perticular user has permissions or not.</td>
                  </tr>
                  <tr>
                    <td>
                      Authentication works through passwords, one-time pins, biometric information,
                      and other information provided or entered by the user.
                    </td>
                    <td>Authorization maintained by the organization.</td>
                  </tr>
                  <tr>
                    <td>It is the first step of a good identity and access management process.</td>
                    <td>Authorization will be performed after Authentication</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is an interceptor? How you used in your project?',
      answer: `<ol>
                <li>
                  Interceptors will be executed for each request before sending to the server.
                </li>
                <li>
                  Using interceptor, we can modify the server request like adding new headers.
                </li>
                <li>
                  The Interceptor can be useful for adding custom headers(
                  <b>X-Client-Key</b>
                  ) to the outgoing request, logging the incoming response
                </li>
                <li>
                  Http Interceptors is to add the Authorization Header/any token to every request.
                  In our project, we add auth-token header to each request.
                </li>
                <li>
                  A class whichever implements HttpInterceptor interface is called interceptor. We
                  should override intercept method.
                </li>
                <code>
                  <br>
                  @Injectable()
                  <br>
                  export class AppHttpInterceptor implements HttpInterceptor '{' }}
                  <br>
                  intercept(req: HttpRequest, next: HttpHandler): Observable {
                  <br>
                  //do whatever you want with the HttpRequest
                  <br>
                  console.log(req);
                  <br>
                  req = req.clone({ headers: req.headers.set('AppName', 'StocksApp') });
                  <br>

                  return next.handle(req);
                  <br>
                  }
                  <br>
                  }
                  <br>
                </code>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is subject and behaviour subject?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">BehaviorSubject</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      A Subject doesn't hold a default value. When it is subscribed it doesn't
                      provider any value immediately.
                    </td>
                    <td>
                      A BehaviorSubject holds the latest/default value. When it is subscribed it
                      emits the value immediately.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Subject doesnot takes the default value. eg:
                      <b>new Subject()</b>
                    </td>
                    <td>
                      BehaviorSubject should be created with an initial value. eg:
                      <b>new BehaviorSubject(1)</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Subject providers only upcoming values. Subject gives new value to subscribers
                      only after calling the
                      <b>.next(value)</b>
                      method.
                    </td>
                    <td>BehaviorSubject providers one previous value and upcoming values.</td>
                  </tr>
                </tbody>
              </table>

              <div>Subject example</div>
              <code>
                <pre>const subject = new Subject();
subject.next(1);
subject.subscribe(x => console.log(x));	//no output
</pre>
              </code>

              <div class="mt-2">BehaviorSubject example</div>
              <code>
                <pre>const subject = new BehaviorSubject(0);
subject.next(1);
subject.subscribe(x => console.log(x));//console op: 1
</pre>
              </code>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is difference between constructor and onInit?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Constructor</th>
                    <th scope="col">ngOnInit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Constructor is part of ES6 and typescript is using es6 syntax. Constructor is
                      a default method runs when component object is created.
                    </td>
                    <td>
                      ngOnInit is component's life cycle method which runs first after constructor
                      and ngOnChanges
                    </td>
                  </tr>
                  <tr>
                    <td>
                      It used to inject things like services when the component is being constructed
                      for further use.
                    </td>
                    <td>It is used to perform the initalization and subscription of observables</td>
                  </tr>
                  <tr>
                    <td>We use constructor to do the DI(Dependency Injection)</td>
                    <td>We use ngOnInit to do business logic, data initialization, API calls</td>
                  </tr>
                </tbody>
              </table>
              <code>
                export class App implements OnInit '{' }}
                <br>
                constructor(private http: HttpClient) {
                <br>
                // Called first time before the ngOnInit()
                <br>
                }
                <br>
                <br>
                ngOnInit() {
                <br>
                // Called after the constructor and called after the first ngOnChanges()
                <br>
                this.store.select(){} }
                <br>
                }
                <br>
              </code>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is pipe?',
      answer: `<ol>
                <li>Pipes transforms data one format to another in the template expressions.</li>
                <li>
                  Pipes are simple functions to use in template expressions to accept an input value
                  and return a transformed value.
                </li>
                <li>Pipes can declared once and can reuse entire the application.</li>
                <li>
                  A class which ever implments PipeTransform interface and decorated with the
                  @Pipe() annontation is called Pipe.
                </li>
              </ol>

              <h4 class="mt-2">Pipes mainly 2 types</h4>
              <h6>1. built in pipes (Predefined pipes)</h6>
              <ol>
                <li>DatePipe: Formats a date value according to locale rules. => date</li>
                <li>TitleCasePipe</li>
                <li>UpperCasePipe: Transforms text to all upper case.</li>
                <li>LowerCasePipe: Transforms text to all lower case.</li>
                <li>
                  CurrencyPipe: Transforms a number to a currency string, formatted according to
                  locale rules.
                </li>
                <li>
                  DecimalPipe: Transforms a number into a string with a decimal point, formatted
                  according to locale rules.
                </li>
                <li>
                  PercentPipe: Transforms a number to a percentage string, formatted according to
                  locale rules.
                </li>
                <li>AsyncPipe: Unwraps a value from an asynchronous primitive.</li>
                <li>
                  JsonPipe: Converts a value into its JSON-format representation. Useful for
                  debugging.
                </li>
                <li>KeyValuePipe: Transforms Object or Map into an array of key value pairs.</li>
              </ol>

              <h6 class="mt-2">2. custom pipes</h6>
              Which are developed by users are called custom pipes.

              <code>
                <pre>                @Pipe({
                  name: 'hideinfo',
                  pure: true,
                })
                export class HideInfoPipe implements PipeTransform '{' }}

                  transform(value: any, ...args: any[]) {
                  let val: string = value;
                  if (value && value.length >= 10) {
                    let lastVal = val.substring(value.length 6, value.length);
                    val = val.replace(lastVal, "*****");
                  }
                  return val;
                  }
                }
                </pre>
              </code>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What are the differences between JIT and AOT?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">JIT</th>
                    <th scope="col">AOT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Just-in-Time compiler</td>
                    <td>Ahead-of-Time (AOT)</td>
                  </tr>
                  <tr>
                    <td>JIT compiles angular code in the browser at runtime (ng serve).</td>
                    <td>AOT compiles angular code at build time using ng build option.</td>
                  </tr>
                  <tr>
                    <td>
                      JIT compilation is the default when you run the ng build (build only) or ng
                      serve
                    </td>
                    <td>
                      For AOT compilation, include the --aot option with the ng build or ng serve
                      command
                    </td>
                  </tr>
                  <tr>
                    <td>Suitable for development mode</td>
                    <td>Suitable for production mode</td>
                  </tr>
                  <tr>
                    <td>
                      Template binding errors will be identified while running the application
                    </td>
                    <td>
                      Template binding errors will be identified while building with --aot option.
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'How will you pass data to the other components?',
      answer: `How will you pass data to the other components? There are multiple ways we can pass
              the data to the other components.
              <ol>
                <li>
                  
                  <ol>
                    <li>
                      When we have parent to child relationship, we can pass the data to the child
                      component using the @Input annontation.
                    </li>
                  </ol>
                </li>
                <li>
                  <span class="fw-bold">@OutPut - EventEmitter approach</span>
                  <ol>
                    <li>
                      When we have parent to child relationship, we can pass the data from the child
                      component to parent component using the @OutPut annontation and
                      EventEmitter.
                    </li>
                    <li>
                      From child component fire the event using the
                      <b>eventEmitter.emit()</b>
                    </li>
                    <li>In parent component handle the event</li>
                  </ol>
                </li>

                <li>
                  <span class="fw-bold">Using ngrx/store approch.</span>
                  <ol>
                    <li>We can share data between any components using the ngrx/store approch.</li>
                    <li>There is no need of any relationship between 2 components.</li>
                    <li>
                      First component should fire the event using the 'store.dispatch' method.
                    </li>
                    <code>this.store.dispatch(new SigninAction());</code>
                    <li>Second component should subscribe for selected property from the state</li>
                    <code>
                      this.store.select(fromRoot.getDisplayName()).subscribe(val => {});
                    </code>
                  </ol>
                </li>
                <li>
                  <span class="fw-bold">Using the Services approch.</span>
                  <ol>
                    <li>We can share data between any components using the Services approch.</li>
                    <li>There is no need of any relationship between 2 components.</li>
                    <li>First component should call the service method</li>
                    <li>Second component should subscribe from the service method.</li>
                  </ol>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is Component?',
      answer: `<ol>
                <li>
                  Component is a directive. Using @Component annotation, we can create the
                  component
                  <br>
                  <code>ng generate component componentname</code>
                </li>
                <li>Component will display some content to the users.</li>
                <li>Component is a fundamental buildin block of the angular application.</li>
                <li>Component can be reused using the selector tag.</li>
                <li>Component has mainly will 3 files.</li>
                <ol>
                  <li>html ==> Display purpose</li>
                  <li>css/scss => For styling component</li>
                  <li>ts => Acts as a controller</li>
                </ol>
              </ol>

              <code>
                <pre>                @Component({
                selector: 'app-signin',
                templateUrl: '',
                styleUrls: []
                });
                </pre>
              </code>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is a Directive?',
      answer: `<ol>
                <li>
                  A class which annotated with the @Directive annotation is called Directive.
                </li>
                <li>
                  Directive can modify the structure of the DOM or modify attributes in the DOM and
                  component data model.
                </li>
              </ol>

              <div class="mt-2">Directives are mainly 3 types</div>
              <ol>
                <li>Components directive</li>

                <li>
                  Attribute directive
                  <div>
                    A directive which changes the attribute value dynamically called attribute
                    directive.
                  </div>
                  <div>Below are the attribute directives in the angular.</div>
                  <ol>
                    <li>
                      ngClass
                      <code>[ngClass]="{'selected': isSelected}"</code>
                    </li>
                    <li>
                      ngStyle
                      <code>[ngStyle]="{'backGroundColor': 'white'}"</code>
                    </li>
                    <li>
                      ngModel
                      <code>[(ngModel)]="username"</code>
                    </li>
                  </ol>
                </li>
                <li>
                  Structural directive

                  <div>
                    Directive which are changing the DOM structure by adding/removing an element
                    dynamically called structural directives.
                  </div>
                  <ol>
                    <li>
                      <b>ngFor:</b>
                      It is used for the iteration purpose.
                    </li>
                    <li>
                      <b>ngIf:</b>
                      It is used for the conditional statements.
                    </li>
                    <li>
                      <b>ngSwitch:</b>
                      It is used for the more than 2 conditional statements
                    </li>
                  </ol>
                  <ol></ol>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What are the differences between Component and Directive?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Component</th>
                    <th scope="col">Directive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      A component is a directive which will show something to the user. It has HTML,
                      CSS and TS files.
                    </td>
                    <td>
                      Directive may change the dom behavior and it doesn't have HTML, CSS and TS
                      files.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      For registering a component, we use
                      <b>@Component</b>
                      metadata annotation.
                    </td>
                    <td>
                      For registering directives, we use the
                      <b>@Directive</b>
                      meta-data annotation.
                    </td>
                  </tr>
                  <tr>
                    <td>Only one component is allowed to be present per DOM element.</td>
                    <td>Multiple directives can be used in a per DOM element.</td>
                  </tr>
                  <tr>
                    <td>
                      All components are directives. Component extends Directive so component is
                      child of Directive.
                    </td>
                    <td>But not all directives are components.</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'angular vs angularjs',
      answer: `<table class="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <p><strong>AngularJS</strong></p>
                    </td>
                    <td>
                      <p><strong>Angular</strong></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        AngularJS is a javascript-based open-source front-end framework that is
                        largely used to create single-page applications on the web.
                      </p>
                    </td>
                    <td>
                      <p>
                        Angular is a typescript based open-source web application framework designed
                        by Google for creating mobile and desktop web applications.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>The code of AngularJS is written in Javascript.</p>
                    </td>
                    <td>
                      <p>The code of Angular is written in Typescript.</p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>It’s applications are not mobile friendly.</p>
                    </td>
                    <td>
                      <p>The applications created by Angular are mobile friendly.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>AngularJS utilizes @routeProvider to provide routing information.</p>
                    </td>
                    <td>
                      <p>
                        Angular uses @Route configuration which is used to define configuration
                        and routing information.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        AngularJS is hard to handle with the increasing length of the source code.
                      </p>
                    </td>
                    <td>
                      <p>Angular code is easy to handle long code and applications.</p>
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'what is SPA?',
      answer: `<div>
                <ol>
                  <li>SPA means Single page application (SPA)</li>
                  <li>
                    SPA is a single page where a lot of information stays the same and only data
                    will be updated into particular place.
                  </li>
                  <li>
                    For example, when we load our site, the sidebar and header remain same and only
                    body changes based on navigation.
                  </li>
                  <li>If it is normal html, then whole page will be reloaded.</li>
                </ol>
              </div>`,
      difficulty: 'Beginner',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is Lazy loading?',
      answer: `<ol>
                <li>
                  A process that speeds up application load time by splitting the application into
                  multiple bundles and loading them on demand.
                </li>
                <li>
                  The router makes use of lazy loading to load child views only when the parent view
                  is activated.
                </li>
                <code>RouterModule.forChild(routes)</code>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What are the building blocks of Angular?',
      answer: `The main building blocks of Angular are:
              <ol>
                <li>Modules.</li>
                <li>Components.</li>
                <li>Templates.</li>
                <li>Metadata.</li>
                <li>Data binding.</li>
                <li>Directives.</li>
                <li>Services.</li>
                <li>Dependency injection.</li>
                <li>Routing.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is Angular CLI?',
      answer: `<p>
                Angular CLI is command line interface tool to generate the angular building blocks.
              </p>
              <ol>
                <li>Generate the component</li>
                <code>ng generate comoponent my-component ng g c my-component</code>
                <li>Generate the class</li>
                <code>ng generate class</code>
                <li>Generate directive</li>
                <code>ng generate directive</code>
                <li>Generate enum</li>
                <code>ng generate enum</code>
                <li>Generate guard/canActivate</li>
                <code>ng generate guard</code>
                <li>Generate interceptor</li>
                <code>ng generate interceptor</code>
                <li>Generate interface</li>
                <code>ng generate interface</code>
                <li>Generate module</li>
                <code>ng generate module</code>
                <li>Generate pipe</li>
                <code>ng generate pipe</code>
                <li>Generate resolver</li>
                <code>ng generate resolver</code>
                <li>Generate service</li>
                <code>ng generate service</code>
                <li>Add any libraries using the ng command instead of npm install</li>
                <code>ng add @angular/pwa</code>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is the command to generate new project?',
      answer: `<code>
                ng new projectname
                <br>
                ng new sampleproject
                <br>
              </code>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is the command to generate new components?',
      answer: `<code>
                ng generate component componentname
                <br>
              </code>
              Using below shortcut command also
              <br>
              <code>
                ng g c SignInComponent
                <br>
              </code>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is npm package?',
      answer: `<ol>
                <li>npm package is a library management site.</li>
                <li>It is open source.</li>
                <li>developers can pull the packages from npm site.</li>
                <li>using below command we can install the any package.</li>
                <code>npm install @packagename</code>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What are difference between jQuery and Angular?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">jQuery</th>
                    <th scope="col">Angular</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>jQuery is a Javascript-based library</td>
                    <td>It is a Typescript-based, front-end development framework</td>
                  </tr>
                  <tr>
                    <td>It is used for DOM manipulation</td>
                    <td>It is used for creating single-page applications.</td>
                  </tr>
                  <tr>
                    <td>It is suitable for small size projects</td>
                    <td>It is suitable for large, complex projects</td>
                  </tr>
                  <tr>
                    <td>It is unidirectional</td>
                    <td>It is bi-directional (supports two-way data binding)</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is data binding and give one example?',
      answer: `<ol>
                <li>
                  Binding data with a variable in html called data binding. Here name is binded to
                  input tag value attribute.
                  <code>&lt;input [value]="name"/></code>
                </li>
                <li>
                  Databinding are mainly 2 types.
                  <ol>
                    <li>
                      One way Databinding: Only Ts file changes will reflect in the html but html
                      changes will not reflect in the ts fie.

                      <code class="d-block">&lt;input [value]="name"/></code>
                    </li>
                    <li>
                      Two way Databinding: value change will be reflect in both html and ts files.
                      <code class="d-block">&lt;input [(ngModel)]="name"/></code>
                    </li>
                  </ol>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is the use of NGRX Store? What is Action, Effect and Reducers?',
      answer: `<ol>
                <li>NGRX Store is mainly used for state management of the application.</li>
                <li>
                  State management means storing all data in to the one place and get the value from
                  there in all the components. It will store the values even if the compoentns are
                  destoryed.
                </li>
                <li>
                  <b>Action:</b>
                  A class which implements
                  <b>Action</b>
                  interface is called Action class. we must provide 'type' property. It is used to
                  transfer the data from component to reducer or effects class.
                </li>
                <li>
                  <b>Reducer</b>
                  is a immutable function which returns the value from state. It is used to store
                  all properties into the store.
                </li>
                <li>
                  <b>Effects:</b>
                  Effects are used to send the request to the server using the HttpClient class.
                  Using createEffect(), we can create an effect method.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is RXJS?',
      answer: `<ol>
                <li>RXJS is open-source light weight library.</li>
                <li>
                  RXJS provides many observables as operators. eg: mergeMap, switchMap, catchError,
                  pipe, concatMap, map
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is asyc, await?',
      answer: `<ol>
                <li>
                  <b>async</b>
                  makes a function return a Promise.
                  <code class="d-block">
                    async function myFunction() {
                    <br>
                    return "Hello";
                    <br>
                    }
                    <br>
                  </code>
                </li>
                <li>
                  <b>await</b>
                  makes a function wait for a Promise and returns the final value.
                  <code class="d-block">
                    async function myDisplay() {
                    <br>
                    let myPromise = new Promise(function(resolve, reject) {
                    <br>
                    resolve("I love You !!");
                    <br>
                    });
                    <br>
                    document.getElementById("demo").innerHTML = await myPromise;
                    <br>
                    }
                    <br>
                  </code>
                </li>
                <li>await should be inside the async functions only.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is Viewchild ViewChildren?',
      answer: `<ol>
                <li>
                  @ViewChild and @ViewChildren are the types of decorators used to access
                  the child component class and its different properties into the parent component.
                </li>
                <li>
                  The @ViewChild decorator is used to query a single DOM element from the DOM
                  tree and lets you manipulate it.
                  <code class="d-block">
                    <button #myButton>Test</button> @ViewChild("myButton", {
                    static: false }) myButton: ElementRef;
                  </code>
                </li>
                <li>
                  Using @ViewChild decorator we can get the child element object.
                  <code class="d-block">
                    <positional #test>Test</positional> @ViewChild("test", {
                    static: false }) testComponent: PositionalComponent;
                  </code>
                </li>

                <li>
                  the @ViewChildren decorator is used to accessing multiple elements. The
                  response of the element list will always be a QueryList

                  <code class="d-block">
                    // Accessing multiple native DOM elements using QueryList
                    <br>
                    @ViewChildren(HelloComponent) myValue: QueryList<HelloComponent>;
                  </code>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'How will secure the application in the Angular? What is Guard?',
      answer: `<ol>
                <li>Using the Angular guard classes, we can secure the Angular application.</li>
                <li>
                  A class which ever implements CanActivate interface is called Gurad class.
                  <code class="d-block">ng generate gurad AuthGuard</code>
                </li>
                <li>
                  Inside the Guard class, check whether user has access or not based on state
                  variable.
                </li>
                <li>
                  In the router module, use canActivate property to secure routes as shown below
                  <code class="d-block">
                    routes = [
                    <br>
                    {path: 'positional', component: PositionalComponent, canActivate:
                    AuthGuard}
                    <br>
                    ]
                    <br>
                  </code>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is custom pipe?',
      answer: `<ol>
                <li>
                  Which are developed by users are called custom pipes. A class which ever implments
                  PipeTransform interface and decorated with the @Pipe() annontation is called
                  Pipe.
                </li>
              </ol>

              <code>
                <pre>      @Pipe({
        name: 'hideinfo',
        pure: true,
      })
      export class HideInfoPipe implements PipeTransform {

        transform(value: any, ...args: any[]) {
        let val: string = value;
        if (value && value.length >= 10) {
          let lastVal = val.substring(value.length 6, value.length);
          val = val.replace(lastVal, "*****");
        }
        return val;
        }
      }
      </pre>
              </code>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is pure pipe? What is impure pipe?',
      answer: `<h6>Pure Pipes</h6>
              <code>@Pipe({name: 'hideInfo', pipe: true})</code>
              <ol>
                <li>A pipe which declared with 'pipe' as true value called Pure pipe.</li>
                <li>
                  By default, pipes are defined as pure so that Angular executes the pipe only when
                  it detects a pure change to the input value. A pure change is either a change to a
                  primitive input value (such as String, Number, Boolean, or Symbol), or a changed
                  object reference (such as Date, Array, Function, or Object).
                </li>
                <li>
                  Angular executes the pipe whenever it detects a change for the input value or
                  reference.
                </li>
                <li>
                  A pure pipe must use a pure function, which is one that processes inputs and
                  returns values without side effects.
                </li>
                <li>
                  If given the same input, a pure function should always return the same output.
                </li>
                <li>
                  Pure pipes detects the change only when object or array reference changed else it
                  would not detect. eg: Here we are assigning the new references to the objets so
                  pure pipes will work.
                </li>
                <code>names = [...names]; person = new Person('');</code>
                <li>
                  eg: The below case pure pipes will not work since references are not changed. Here
                  they are changing the values inside the references. Because the array is the same,
                  Angular does not update the display.
                </li>
                <code class="d-block">
                  names.push('ss');
                  <br>
                  person.age = 40;
                </code>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is impure pipe?',
      answer: `<h6>Impure Pipes</h6>
              <code>@Pipe({name: 'hideInfo', pipe: false})</code>
              <ol>
                <li>A pipe which declared with 'pipe' as false value called Impure pipe.</li>
                <li>
                  If we want to detect changes with in the reference object, then we should go for
                  the impure pipes. eg: The below case impure pipes will work since it can detectt
                  the changes within reference object.
                </li>
                <li>
                  <code>
                    names.push('ss');
                    <br>
                    person.age = 40;
                    <br>
                  </code>
                </li>
                <li>
                  Angular executes an impure pipe every time it detects a change with every
                  keystroke or mouse movement.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is routerLink? What is routerOutlet?',
      answer: `<h6>routerLink</h6>
              <ol>
                <li>
                  <b>routerLink:</b>
                  is used to navigate between the pages in the html.
                </li>
                <li>
                  <b>routerLink:</b>
                  can be used instead of anchor tag for navigation purpose.
                </li>
                <li><code>routerLink="/positional"</code></li>
              </ol>

              <h6>routerOutlet</h6>
              <ol>
                <li>
                  <b>routerOutlet:</b>
                  displays the current route component in the view.
                </li>
                <li>routerOutlet usually will be in the app compnenent.html file.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is hostbinding and hostlistener?',
      answer: `<ol>
                <li>
                  @HostBinding: This decorator binds a class property to a property of the host
                  element.
                </li>
                <li>
                  @HostListener: This decorator binds a class method to an event of the host
                  element.
                </li>
              </ol>
              <code>
                import { Component, HostListener, HostBinding } from '@angular/core';
                <br>

                @Component({
                <br>
                selector: 'app-root',
                <br>
                template: \`
                <p>This is nice text</p>
                <p>
                  \`,
                  <br>
                  })
                  <br>
                  export class AppComponent {
                  <br>

                  @HostBinding('style.color') color;
                  <br>

                  @HostListener('click')
                  <br>
                  onclick() {
                  <br>
                  this.color = 'blue';
                  <br>
                  }
                  <br>

                  }
                  <br>
                </p>
              </code>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is viewchild and contentchild',
      answer: `<ol>
                <li>
                  <b>ViewChild</b>
                  <ol>
                    <li>ViewChild is a decorator to get the child object in the ts file.</li>
                    <li>
                      Shadow DOM - is an internal DOM of your component that is defined by you
                    </li>
                    <li>
                      @ViewChild and @ViewChildren only look at elements that are on your
                      view template directly.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>ContentChild</b>
                  <ol>
                    <li>
                      ContentChildren is a parameter decorator that is used to fetch the QueryList
                      of elements or directives from the content DOM. The QueryList is updated
                      whenever the child element/component is added or removed.
                    </li>
                    <li>
                      Light DOM - is a DOM that an end-user of your component supply into your
                      component.
                    </li>
                    <li>
                      @ContentChild and @ContentChildren queries will return directives
                      existing inside the
                      <ng-content></ng-content>
                      element of your view
                    </li>
                  </ol>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'which file is starting point of angular index.html/main.ts?',
      answer: 'index.html file is the starting point of the angular application.',
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is Change detection in angular?',
      answer: `<ol>
                <li>
                  Angular detects the changes only when it identifies a pure change to the input
                  value. A pure change is either a change to a primitive input value (such as
                  String, Number, Boolean, or Symbol), or a changed object reference (such as Date,
                  Array, Function, or Object).
                </li>
                <li>
                  Angular detects the change only when object or array reference changed else it
                  would not detect. eg: Here we are assigning the new references to the objets so
                  pure pipes will work.

                  <code class="d-block">
                    names = [...names];
                    <br>
                    person = new Person('');
                  </code>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'text vs property interpolation',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Text interpolation</th>
                    <th scope="col">property interpolation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>text interpolation means directly using values to display in html page</td>
                    <td>
                      property interpolation means using property from ts file to bind/display in
                      html page
                    </td>
                  </tr>
                  <tr>
                    <!-- <td>ex: &#123;&#123;1 + 'One' + 'true'&#125;&#125;</td>
                    <td>ex: &#123;&#123;somePropertyFromTsFile + someFunctionFromTsFile()&#125;&#125;</td> -->
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'in npm package what is ~/^ and split version names like MM.mm.pp(Major, Minor, Patch) what is difference between them',
      answer: `<ol>
                <li>
                  <b>^</b>
                  patch version matching
                </li>
                <li>
                  <b>~</b>
                  minor version matching
                </li>
                <a href="https://docs.npmjs.com/about-semantic-versioning">For more information</a>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'Whate are the diference between Annotation vs Decorator?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Annotation</th>
                    <th scope="col">Decorator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Used by Traceur compiler</td>
                    <td>Used by Typescript compiler</td>
                  </tr>
                  <tr>
                    <td>
                      Annotations are only metadata set on the class using the Reflect Metadata
                      library.
                    </td>
                    <td>Decorator corresponds to a function that is called on the class.</td>
                  </tr>
                  <tr>
                    <td>
                      Annotations are used for creating an attribute annotations that stores array.
                    </td>
                    <td>
                      Decorator is a function that gets the object that needs to be decorated.
                    </td>
                  </tr>
                  <tr>
                    <td>They are Hard-coded</td>
                    <td>They are not Hard-coded</td>
                  </tr>
                  <tr>
                    <td>
                      Exp. Imports for Annotations: import {ComponentAnnotation as
                      Component} from ‘@angular/core’;
                    </td>
                    <td>
                      Exp. Imports for Decorators: import {Component} from
                      ‘@angular/core’;
                    </td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is ngzone?',
      answer: `<ol>
                <li>An execution context for a set of asynchronous tasks.</li>
                <li>
                  Useful for debugging, profiling, and testing applications that include
                  asynchronous operations such as event processing, promises, and calls to remote
                  servers.
                </li>
                <li>
                  An Angular application runs in a zone where it can respond to asynchronous events
                  by checking for data changes
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'How to build Angular project',
      answer: `<a target="_blank" href="assets/pom.xml" download="pom.xml">
                ng build --configuration production --aot --base-href /demo/view/ --deploy-url
                /demo/view/
              </a>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    },
    {
      question: 'What is Reactive forms?',
      answer: `<ol>
                <li>
                  <b>Reactive Forms</b>
                  in Angular are a model-driven approach to handling form inputs, validation, and
                  state. The form structure and logic are defined in the component TypeScript code,
                  not in the template.
                </li>
                <li>
                  Reactive forms use explicit objects like
                  <code>FormGroup</code>
                  ,
                  <code>FormControl</code>
                  , and
                  <code>FormArray</code>
                  to manage form state and validation, making them highly scalable and testable.
                </li>
                <li>
                  They provide synchronous access to the form data, easy unit testing, and powerful
                  custom validation capabilities.
                </li>
                <li>
                  Reactive forms are preferred for complex forms, dynamic form controls, and when
                  you need fine-grained control over validation and form state.
                </li>
                <li>
                  <b>Example:</b>
                  <pre><code>
import { FormGroup, FormControl, Validators } from '@angular/forms';

profileForm = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl(''),
});
        </code></pre>
                  In the template:
                  <pre><code>
<form [formGroup]="profileForm">
  &lt;input formControlName="firstName">
  &lt;input formControlName="lastName">
</form>
        </code></pre>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Angular'
      ]
    }
  ]
};
