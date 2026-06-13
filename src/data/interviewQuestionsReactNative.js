// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.654Z

export const reactNativeQuestions = {
  questions: [
    {
      question: 'What is React Native?',
      answer: `<ul>
                <li>
                  React Native is a
                  <strong>cross-platform framework</strong>
                  developed by Facebook (Meta) for building mobile applications
                </li>
                <li>
                  Allows developers to write code once using
                  <strong>JavaScript and React</strong>
                  and deploy on both iOS and Android
                </li>
                <li>
                  Uses
                  <strong>native components</strong>
                  instead of web components, providing near-native performance
                </li>
                <li>
                  Follows the principle of
                  <strong>"Learn once, write anywhere"</strong>
                  rather than "write once, run anywhere"
                </li>
                <li>Compiles to native code, making apps feel truly native to users</li>
              </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What are the key features of React Native?',
      answer: `<ul>
                <li>
                  <strong>Cross-platform development:</strong>
                  Write once, run on both iOS and Android platforms
                </li>
                <li>
                  <strong>Hot Reloading:</strong>
                  Instantly see changes without rebuilding the entire app
                </li>
                <li>
                  <strong>Native Performance:</strong>
                  Uses native components for better performance than hybrid apps
                </li>
                <li>
                  <strong>Large Community:</strong>
                  Extensive community support with numerous third-party libraries
                </li>
                <li>
                  <strong>Code Reusability:</strong>
                  Share business logic between platforms while customizing UI per platform
                </li>
                <li>
                  <strong>Live Updates:</strong>
                  Push updates directly without app store approval (with CodePush)
                </li>
              </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How does React Native differ from React?',
      answer: `<ul>
                <li>
                  <strong>Platform Target:</strong>
                  React builds web applications, React Native builds mobile applications
                </li>
                <li>
                  <strong>Components:</strong>
                  React uses HTML elements (div, span), React Native uses native components (View,
                  Text)
                </li>
                <li>
                  <strong>Styling:</strong>
                  React uses CSS, React Native uses StyleSheet with limited CSS properties
                </li>
                <li>
                  <strong>Navigation:</strong>
                  React uses React Router, React Native uses React Navigation or native navigation
                </li>
                <li>
                  <strong>APIs:</strong>
                  React Native provides mobile-specific APIs (Camera, GPS, Push Notifications)
                </li>
              </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is the difference between React Native and Flutter?',
      answer: `<table border="1" class="table table-striped">
                <tbody><tr>
                  <th>Feature</th>
                  <th>React Native</th>
                  <th>Flutter</th>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>JavaScript/TypeScript</td>
                  <td>Dart</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>Good, uses native bridge</td>
                  <td>Better, compiles to native ARM code</td>
                </tr>
                <tr>
                  <td>UI Components</td>
                  <td>Uses platform native components</td>
                  <td>Uses custom-drawn widgets</td>
                </tr>
                <tr>
                  <td>Learning Curve</td>
                  <td>Easier for web developers</td>
                  <td>Requires learning Dart language</td>
                </tr>
                <tr>
                  <td>Community</td>
                  <td>Large, established community</td>
                  <td>Growing rapidly, backed by Google</td>
                </tr>
              </tbody></table>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How does React Native communicate with native modules?',
      answer: `<ul>
                <li>
                  Uses a
                  <strong>JavaScript Bridge</strong>
                  to communicate between JS thread and native threads
                </li>
                <li>
                  Bridge serializes data and passes messages asynchronously between JavaScript and
                  native code
                </li>
                <li>
                  Native modules are written in
                  <strong>Java/Kotlin (Android)</strong>
                  or
                  <strong>Swift/Objective-C (iOS)</strong>
                </li>
                <li>
                  New Architecture uses
                  <strong>JSI (JavaScript Interface)</strong>
                  for direct synchronous communication
                </li>
                <li>
                  Turbo Modules and Fabric provide better performance by reducing bridge overhead
                </li>
              </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What are React Native components?',
      answer: `<ul>
                <li>
                  <strong>Core Components:</strong>
                  Built-in components like View, Text, Image, ScrollView, TextInput
                </li>
                <li>
                  <strong>Custom Components:</strong>
                  User-defined reusable components built using core components
                </li>
                <li>
                  <strong>Native Components:</strong>
                  Platform-specific components that require native code
                </li>
                <li>
                  <strong>Third-party Components:</strong>
                  Community-built components available via npm
                </li>
                <li>
                  Components follow the same lifecycle as React components (mount, update, unmount)
                </li>
              </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is the purpose of AsyncStorage in React Native?',
      answer: `<ul>
                <li>
                  <strong>Persistent Storage:</strong>
                  Stores data locally on device that persists between app sessions
                </li>
                <li>
                  <strong>Key-Value Store:</strong>
                  Simple key-value storage system similar to localStorage in web
                </li>
                <li>
                  <strong>Asynchronous:</strong>
                  All operations are asynchronous and return promises
                </li>
                <li>
                  <strong>Cross-platform:</strong>
                  Works consistently on both iOS and Android platforms
                </li>
                <li>
                  <strong>Use Cases:</strong>
                  User preferences, authentication tokens, app settings, offline data
                </li>
              </ul>
              <code>
                import AsyncStorage from '@react-native-async-storage/async-storage';
                <br>
                // Store data
                <br>
                const storeData = async (key, value) => {
                <br>
                &nbsp;&nbsp;await AsyncStorage.setItem(key, JSON.stringify(value));
                <br>
                };
                <br>
                // Retrieve data
                <br>
                const getData = async (key) => {
                <br>
                &nbsp;&nbsp;const value = await AsyncStorage.getItem(key);
                <br>
                &nbsp;&nbsp;return value ? JSON.parse(value) : null;
                <br>
                };
              </code>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How does React Native handle navigation?',
      answer: `<ul>
                <li>
                  <strong>React Navigation:</strong>
                  Most popular third-party navigation library for React Native
                </li>
                <li>
                  <strong>Stack Navigation:</strong>
                  Manages screen stack with push/pop operations
                </li>
                <li>
                  <strong>Tab Navigation:</strong>
                  Bottom or top tab-based navigation between screens
                </li>
                <li>
                  <strong>Drawer Navigation:</strong>
                  Side drawer menu for navigation
                </li>
                <li>
                  <strong>Native Navigation:</strong>
                  Platform-specific navigation using react-native-navigation
                </li>
              </ul>
              <code>
                import { NavigationContainer } from '@react-navigation/native';
                <br>
                import { createStackNavigator } from '@react-navigation/stack';
                <br>
                import { createBottomTabNavigator } from
                '@react-navigation/bottom-tabs';
                <br>
                <br>
                const Stack = createStackNavigator();
                <br>
                const Tab = createBottomTabNavigator();
                <br>
                <br>
                const App = () => (
                <br>
                &nbsp;&nbsp;<NavigationContainer>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;<Stack.Navigator initialRouteName="Home">
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Stack.Screen name="Home"
                component={HomeScreen} />
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Stack.Screen name="Details"
                component={DetailsScreen} />
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;</Stack.Navigator>
                <br>
                &nbsp;&nbsp;</NavigationContainer>
                <br>
                );
              </code>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is the Box Model in React Native layouts?',
      answer: `<ul>
                <li>
                  <strong>Content Area:</strong>
                  The actual content of the component (text, image, etc.)
                </li>
                <li>
                  <strong>Padding:</strong>
                  Space between content and border, inside the component
                </li>
                <li>
                  <strong>Border:</strong>
                  Optional border around the padding area
                </li>
                <li>
                  <strong>Margin:</strong>
                  Space outside the border, separating component from others
                </li>
                <li>Similar to CSS box model but with React Native specific properties</li>
                <li>Uses numeric values instead of CSS units (px, em, rem)</li>
              </ul>
              <code>
                const styles = StyleSheet.create({
                <br>
                &nbsp;&nbsp;boxModel: {
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;// Content area
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;width: 100,
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;height: 100,
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;// Padding (inside)
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;padding: 10,
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;// Border
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;borderWidth: 2,
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;borderColor: 'black',
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;// Margin (outside)
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;margin: 15
                <br>
                &nbsp;&nbsp;}
                <br>
                });
              </code>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What are Flexbox and its properties in React Native?',
      answer: `<ul>
                <li>
                  <strong>flexDirection:</strong>
                  Defines main axis direction (row, column, row-reverse, column-reverse)
                </li>
                <li>
                  <strong>justifyContent:</strong>
                  Aligns children along main axis (flex-start, center, flex-end, space-between,
                  space-around)
                </li>
                <li>
                  <strong>alignItems:</strong>
                  Aligns children along cross axis (flex-start, center, flex-end, stretch)
                </li>
                <li>
                  <strong>flex:</strong>
                  Defines how component grows/shrinks relative to other components
                </li>
                <li>
                  <strong>flexWrap:</strong>
                  Controls whether children wrap to new lines (wrap, nowrap)
                </li>
                <li>
                  <strong>alignSelf:</strong>
                  Overrides alignItems for individual child components
                </li>
              </ul>
              <code>
                const styles = StyleSheet.create({
                <br>
                &nbsp;&nbsp;container: {
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;flex: 1,
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;flexDirection: 'column',
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;justifyContent: 'space-between',
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;alignItems: 'center',
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;flexWrap: 'wrap'
                <br>
                &nbsp;&nbsp;},
                <br>
                &nbsp;&nbsp;item: {
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;flex: 1,
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;alignSelf: 'stretch'
                <br>
                &nbsp;&nbsp;}
                <br>
                });
              </code>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is the difference between State and Props?',
      answer: `<ul>
                <li>
                  <strong>State:</strong>
                  Internal component data that can be modified using setState or useState hook
                </li>
                <li>
                  <strong>Props:</strong>
                  Read-only data passed from parent component to child component
                </li>
                <li>
                  <strong>Mutability:</strong>
                  State is mutable within component, Props are immutable in child component
                </li>
                <li>
                  <strong>Ownership:</strong>
                  State belongs to component itself, Props are owned by parent component
                </li>
                <li>
                  <strong>Re-rendering:</strong>
                  Both state and props changes trigger component re-rendering
                </li>
                <li>
                  <strong>Initial Values:</strong>
                  State can have default values, Props are passed from parent
                </li>
              </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is Fast Refresh in React Native?',
      answer: `<ul>
                <li>
                  <strong>Live Reloading:</strong>
                  Automatically reloads app when code changes are detected
                </li>
                <li>
                  <strong>State Preservation:</strong>
                  Maintains component state during reload, unlike Hot Reloading
                </li>
                <li>
                  <strong>Error Recovery:</strong>
                  Automatically recovers from syntax errors without full reload
                </li>
                <li>
                  <strong>Selective Updates:</strong>
                  Only updates changed components, not the entire app
                </li>
                <li>
                  Combines benefits of Live Reload and Hot Reload for better developer experience
                </li>
              </ul>`,
      difficulty: 'Beginner',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How do you handle API calls in React Native?',
      answer: `<ul>
                <li>
                  <strong>Fetch API:</strong>
                  Built-in JavaScript API for making HTTP requests
                </li>
                <li>
                  <strong>Axios:</strong>
                  Popular third-party library with additional features like interceptors
                </li>
                <li>
                  <strong>Error Handling:</strong>
                  Proper try-catch blocks and error state management
                </li>
                <li>
                  <strong>Loading States:</strong>
                  Show loading indicators during API calls
                </li>
                <li>
                  <strong>Network Info:</strong>
                  Check network connectivity before making requests
                </li>
              </ul>
              <code>
                // Using Fetch API
                <br>
                const fetchData = async () => {
                <br>
                &nbsp;&nbsp;try {
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;const response = await
                fetch('https://api.example.com/data');
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;const data = await response.json();
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;setData(data);
                <br>
                &nbsp;&nbsp;} catch (error) {
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;console.error('API Error:', error);
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;setError(error.message);
                <br>
                &nbsp;&nbsp;}
                <br>
                };
              </code>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is React Native Gesture Handler?',
      answer: `<ul>
                <li>
                  <strong>Performance:</strong>
                  Provides native-driven gesture handling for better performance
                </li>
                <li>
                  <strong>Gesture Types:</strong>
                  Supports pan, pinch, rotation, tap, long press, and fling gestures
                </li>
                <li>
                  <strong>Native Thread:</strong>
                  Runs gestures on native thread instead of JavaScript thread
                </li>
                <li>
                  <strong>Smooth Animations:</strong>
                  Enables 60fps animations during gesture interactions
                </li>
                <li>Essential for complex touch interactions and smooth user experiences</li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How to debug React Native applications?',
      answer: `<ul>
                <li>
                  <strong>React Native Debugger:</strong>
                  Standalone debugging tool with Redux DevTools integration
                </li>
                <li>
                  <strong>Chrome DevTools:</strong>
                  Debug JavaScript code using Chrome's developer tools
                </li>
                <li>
                  <strong>Flipper:</strong>
                  Facebook's debugging platform with network inspector and layout tools
                </li>
                <li>
                  <strong>Console Logging:</strong>
                  Use console.log, console.warn, console.error for basic debugging
                </li>
                <li>
                  <strong>React DevTools:</strong>
                  Inspect component hierarchy and props/state
                </li>
                <li>
                  <strong>Native Debugging:</strong>
                  Use Xcode for iOS and Android Studio for Android native debugging
                </li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is the React Native Bridge and its limitations?',
      answer: `<ul>
                <li>
                  <strong>Communication Layer:</strong>
                  Facilitates communication between JavaScript and native threads
                </li>
                <li>
                  <strong>Asynchronous:</strong>
                  All bridge communications are asynchronous, causing potential delays
                </li>
                <li>
                  <strong>Serialization Overhead:</strong>
                  Data must be serialized/deserialized when crossing the bridge
                </li>
                <li>
                  <strong>Performance Bottleneck:</strong>
                  Heavy bridge usage can impact app performance
                </li>
                <li>
                  <strong>New Architecture:</strong>
                  JSI and Turbo Modules aim to reduce bridge dependency
                </li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: `Explain React Native's New Architecture (Fabric and TurboModules)?`,
      answer: `<ul>
                <li>
                  <strong>Fabric:</strong>
                  New rendering system that improves UI performance and enables concurrent features
                </li>
                <li>
                  <strong>TurboModules:</strong>
                  New native module system with lazy loading and better type safety
                </li>
                <li>
                  <strong>JSI (JavaScript Interface):</strong>
                  Direct synchronous communication between JS and native
                </li>
                <li>
                  <strong>Concurrent Features:</strong>
                  Enables React 18 features like Suspense and concurrent rendering
                </li>
                <li>
                  <strong>Better Performance:</strong>
                  Reduces bridge overhead and improves startup time
                </li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What are React Native Hooks and commonly used ones?',
      answer: `<ul>
                <li>
                  <strong>useState:</strong>
                  Manages local component state in functional components
                </li>
                <li>
                  <strong>useEffect:</strong>
                  Handles side effects like API calls, subscriptions, and cleanup
                </li>
                <li>
                  <strong>useContext:</strong>
                  Consumes React context for global state management
                </li>
                <li>
                  <strong>useCallback:</strong>
                  Memoizes functions to prevent unnecessary re-renders
                </li>
                <li>
                  <strong>useMemo:</strong>
                  Memoizes expensive calculations to optimize performance
                </li>
                <li>
                  <strong>Custom Hooks:</strong>
                  Create reusable stateful logic across components
                </li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How do you handle device permissions in React Native?',
      answer: `<ul>
                <li>
                  <strong>react-native-permissions:</strong>
                  Popular library for handling runtime permissions
                </li>
                <li>
                  <strong>Platform-specific:</strong>
                  Different permission systems for iOS and Android
                </li>
                <li>
                  <strong>Runtime Permissions:</strong>
                  Request permissions when needed, not at app install
                </li>
                <li>
                  <strong>Permission States:</strong>
                  Handle granted, denied, blocked, and unavailable states
                </li>
                <li>
                  <strong>Graceful Degradation:</strong>
                  Provide alternative functionality when permissions denied
                </li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is Code Push and how does it work?',
      answer: `<ul>
                <li>
                  <strong>Over-the-Air Updates:</strong>
                  Deploy JavaScript and asset updates without app store
                </li>
                <li>
                  <strong>Microsoft Service:</strong>
                  Cloud service for managing and distributing updates
                </li>
                <li>
                  <strong>Instant Updates:</strong>
                  Users get updates immediately without downloading from app store
                </li>
                <li>
                  <strong>Rollback Capability:</strong>
                  Quickly rollback problematic updates
                </li>
                <li>
                  <strong>Staged Rollouts:</strong>
                  Gradually release updates to percentage of users
                </li>
                <li>
                  <strong>Native Code Limitation:</strong>
                  Cannot update native code, only JavaScript and assets
                </li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How do you optimize React Native app performance?',
      answer: `<ul>
                <li>
                  <strong>Image Optimization:</strong>
                  Use appropriate image formats, sizes, and caching strategies
                </li>
                <li>
                  <strong>List Performance:</strong>
                  Use FlatList/SectionList with proper keyExtractor and getItemLayout
                </li>
                <li>
                  <strong>Memory Management:</strong>
                  Remove event listeners, clear timers, and avoid memory leaks
                </li>
                <li>
                  <strong>Bundle Size:</strong>
                  Use Hermes engine, enable ProGuard, and remove unused dependencies
                </li>
                <li>
                  <strong>Native Modules:</strong>
                  Move heavy computations to native code when necessary
                </li>
                <li>
                  <strong>Profiling Tools:</strong>
                  Use React DevTools Profiler and native profiling tools
                </li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is Hermes and its benefits?',
      answer: `<ul>
                <li>
                  <strong>JavaScript Engine:</strong>
                  Optimized JS engine developed by Facebook for React Native
                </li>
                <li>
                  <strong>Faster Startup:</strong>
                  Precompiled bytecode reduces app startup time significantly
                </li>
                <li>
                  <strong>Smaller Bundle Size:</strong>
                  Better compression and optimization of JavaScript code
                </li>
                <li>
                  <strong>Lower Memory Usage:</strong>
                  More efficient memory management compared to other JS engines
                </li>
                <li>
                  <strong>Better Performance:</strong>
                  Optimized for mobile devices with limited resources
                </li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How do you handle deep linking in React Native?',
      answer: `<ul>
                <li>
                  <strong>URL Schemes:</strong>
                  Custom URL schemes for opening app from external sources
                </li>
                <li>
                  <strong>Universal Links (iOS):</strong>
                  Associate app with web domain for seamless linking
                </li>
                <li>
                  <strong>App Links (Android):</strong>
                  Android equivalent of universal links
                </li>
                <li>
                  <strong>React Navigation:</strong>
                  Built-in deep linking support with navigation library
                </li>
                <li>
                  <strong>Dynamic Links:</strong>
                  Firebase Dynamic Links for cross-platform deep linking
                </li>
              </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What are the different types of testing in React Native?',
      answer: `<ul>
                <li>
                  <strong>Unit Testing:</strong>
                  Test individual components and functions using Jest
                </li>
                <li>
                  <strong>Integration Testing:</strong>
                  Test component interactions using React Native Testing Library
                </li>
                <li>
                  <strong>End-to-End Testing:</strong>
                  Test complete user flows using Detox or Appium
                </li>
                <li>
                  <strong>Snapshot Testing:</strong>
                  Capture component output and detect unexpected changes
                </li>
                <li>
                  <strong>Performance Testing:</strong>
                  Monitor app performance, memory usage, and startup time
                </li>
              </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How do you handle offline functionality in React Native?',
      answer: `<ul>
                <li>
                  <strong>Network Detection:</strong>
                  Use @react-native-community/netinfo to detect connectivity
                </li>
                <li>
                  <strong>Local Storage:</strong>
                  Store critical data locally using AsyncStorage or SQLite
                </li>
                <li>
                  <strong>Caching Strategies:</strong>
                  Implement proper caching for API responses and images
                </li>
                <li>
                  <strong>Sync Mechanisms:</strong>
                  Queue offline actions and sync when connection restored
                </li>
                <li>
                  <strong>User Feedback:</strong>
                  Show appropriate UI states for offline/online modes
                </li>
              </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is the difference between FlatList and ScrollView?',
      answer: `<ul>
                <li>
                  <strong>Performance:</strong>
                  FlatList renders only visible items, ScrollView renders all items at once
                </li>
                <li>
                  <strong>Memory Usage:</strong>
                  FlatList uses less memory for large datasets
                </li>
                <li>
                  <strong>Use Cases:</strong>
                  FlatList for dynamic lists, ScrollView for small static content
                </li>
                <li>
                  <strong>Features:</strong>
                  FlatList provides pull-to-refresh, infinite scrolling, and item separators
                </li>
                <li>
                  <strong>Optimization:</strong>
                  FlatList has built-in optimization for large lists
                </li>
              </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How do you handle push notifications in React Native?',
      answer: `<ul>
                <li>
                  <strong>Firebase Cloud Messaging (FCM):</strong>
                  Cross-platform push notification service
                </li>
                <li>
                  <strong>react-native-push-notification:</strong>
                  Popular library for handling notifications
                </li>
                <li>
                  <strong>Notification States:</strong>
                  Handle foreground, background, and killed app states
                </li>
                <li>
                  <strong>Deep Linking:</strong>
                  Navigate to specific screens when notification is tapped
                </li>
                <li>
                  <strong>Local Notifications:</strong>
                  Schedule notifications locally without server
                </li>
                <li>
                  <strong>Permission Handling:</strong>
                  Request notification permissions from users
                </li>
              </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is Metro bundler and its role in React Native?',
      answer: `<ul>
                <li>
                  <strong>JavaScript Bundler:</strong>
                  Bundles JavaScript code and assets for React Native apps
                </li>
                <li>
                  <strong>Fast Refresh:</strong>
                  Enables hot reloading and fast refresh functionality
                </li>
                <li>
                  <strong>Asset Resolution:</strong>
                  Handles image and other asset imports
                </li>
                <li>
                  <strong>Code Transformation:</strong>
                  Transforms modern JavaScript to compatible versions
                </li>
                <li>
                  <strong>Development Server:</strong>
                  Serves bundled code during development
                </li>
              </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How do you handle animations in React Native?',
      answer: `<ul>
                <li>
                  <strong>Animated API:</strong>
                  Built-in animation library for smooth animations
                </li>
                <li>
                  <strong>React Native Reanimated:</strong>
                  More powerful third-party animation library
                </li>
                <li>
                  <strong>LayoutAnimation:</strong>
                  Animate layout changes automatically
                </li>
                <li>
                  <strong>Native Driver:</strong>
                  Run animations on native thread for better performance
                </li>
                <li>
                  <strong>Gesture Integration:</strong>
                  Combine animations with gesture handlers
                </li>
                <li>
                  <strong>Performance:</strong>
                  Use native driver when possible to avoid bridge overhead
                </li>
              </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'What is the difference between Expo and React Native CLI?',
      answer: `<ul>
                <li>
                  <strong>Development Environment:</strong>
                  Expo provides managed workflow, CLI provides bare workflow
                </li>
                <li>
                  <strong>Native Code Access:</strong>
                  CLI allows full native code access, Expo has limitations
                </li>
                <li>
                  <strong>Setup Complexity:</strong>
                  Expo is easier to set up, CLI requires more configuration
                </li>
                <li>
                  <strong>Build Process:</strong>
                  Expo handles builds in cloud, CLI requires local build setup
                </li>
                <li>
                  <strong>Third-party Libraries:</strong>
                  CLI supports all libraries, Expo has restrictions
                </li>
                <li>
                  <strong>Ejecting:</strong>
                  Expo apps can be ejected to bare workflow when needed
                </li>
              </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React Native'
      ]
    },
    {
      question: 'How do you handle state management in React Native?',
      answer: `<ul>
                <li>
                  <strong>Local State:</strong>
                  Use useState hook for component-level state management
                </li>
                <li>
                  <strong>Context API:</strong>
                  React Context for sharing state across component tree
                </li>
                <li>
                  <strong>Redux:</strong>
                  Predictable state container for complex applications
                </li>
                <li>
                  <strong>Zustand:</strong>
                  Lightweight state management library with minimal boilerplate
                </li>
                <li>
                  <strong>MobX:</strong>
                  Reactive state management through observables
                </li>
                <li>
                  <strong>Recoil:</strong>
                  Facebook's experimental state management library
                </li>
              </ul>`,
      difficulty: 'Advanced',
      tags: [
        'React Native'
      ]
    }
  ]
};
