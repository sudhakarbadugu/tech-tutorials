// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.500Z

export const reactNativeQuestions = {
  "questions": [
    {
      "question": "What is React Native?",
      "answer": "<ul>\n                <li>\n                  React Native is a\n                  <strong>cross-platform framework</strong>\n                  developed by Facebook (Meta) for building mobile applications\n                </li>\n                <li>\n                  Allows developers to write code once using\n                  <strong>JavaScript and React</strong>\n                  and deploy on both iOS and Android\n                </li>\n                <li>\n                  Uses\n                  <strong>native components</strong>\n                  instead of web components, providing near-native performance\n                </li>\n                <li>\n                  Follows the principle of\n                  <strong>\"Learn once, write anywhere\"</strong>\n                  rather than \"write once, run anywhere\"\n                </li>\n                <li>Compiles to native code, making apps feel truly native to users</li>\n              </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "React Native is a cross-platform framework developed by Facebook (Meta) for building mobile applications",
        "Allows developers to write code once using JavaScript and React and deploy on both iOS and Android",
        "Uses native components instead of web components, providing near-native performance"
      ]
    },
    {
      "question": "What are the key features of React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>Cross-platform development:</strong>\n                  Write once, run on both iOS and Android platforms\n                </li>\n                <li>\n                  <strong>Hot Reloading:</strong>\n                  Instantly see changes without rebuilding the entire app\n                </li>\n                <li>\n                  <strong>Native Performance:</strong>\n                  Uses native components for better performance than hybrid apps\n                </li>\n                <li>\n                  <strong>Large Community:</strong>\n                  Extensive community support with numerous third-party libraries\n                </li>\n                <li>\n                  <strong>Code Reusability:</strong>\n                  Share business logic between platforms while customizing UI per platform\n                </li>\n                <li>\n                  <strong>Live Updates:</strong>\n                  Push updates directly without app store approval (with CodePush)\n                </li>\n              </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Cross-platform development: Write once, run on both iOS and Android platforms",
        "Hot Reloading: Instantly see changes without rebuilding the entire app",
        "Native Performance: Uses native components for better performance than hybrid apps"
      ]
    },
    {
      "question": "How does React Native differ from React?",
      "answer": "<ul>\n                <li>\n                  <strong>Platform Target:</strong>\n                  React builds web applications, React Native builds mobile applications\n                </li>\n                <li>\n                  <strong>Components:</strong>\n                  React uses HTML elements (div, span), React Native uses native components (View,\n                  Text)\n                </li>\n                <li>\n                  <strong>Styling:</strong>\n                  React uses CSS, React Native uses StyleSheet with limited CSS properties\n                </li>\n                <li>\n                  <strong>Navigation:</strong>\n                  React uses React Router, React Native uses React Navigation or native navigation\n                </li>\n                <li>\n                  <strong>APIs:</strong>\n                  React Native provides mobile-specific APIs (Camera, GPS, Push Notifications)\n                </li>\n              </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Platform Target: React builds web applications, React Native builds mobile applications",
        "Components: React uses HTML elements (div, span), React Native uses native components (View, Text)",
        "Styling: React uses CSS, React Native uses StyleSheet with limited CSS properties"
      ]
    },
    {
      "question": "What is the difference between React Native and Flutter?",
      "answer": "<table border=\"1\" class=\"table table-striped\">\n                <tbody><tr>\n                  <th>Feature</th>\n                  <th>React Native</th>\n                  <th>Flutter</th>\n                </tr>\n                <tr>\n                  <td>Language</td>\n                  <td>JavaScript/TypeScript</td>\n                  <td>Dart</td>\n                </tr>\n                <tr>\n                  <td>Performance</td>\n                  <td>Good, uses native bridge</td>\n                  <td>Better, compiles to native ARM code</td>\n                </tr>\n                <tr>\n                  <td>UI Components</td>\n                  <td>Uses platform native components</td>\n                  <td>Uses custom-drawn widgets</td>\n                </tr>\n                <tr>\n                  <td>Learning Curve</td>\n                  <td>Easier for web developers</td>\n                  <td>Requires learning Dart language</td>\n                </tr>\n                <tr>\n                  <td>Community</td>\n                  <td>Large, established community</td>\n                  <td>Growing rapidly, backed by Google</td>\n                </tr>\n              </tbody></table>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Feature React Native Flutter Language JavaScript/TypeScript Dart Performance Good, uses native bridge Better, compiles to native ARM code UI Components Uses platform native components Uses custom-draw"
      ]
    },
    {
      "question": "How does React Native communicate with native modules?",
      "answer": "<ul>\n                <li>\n                  Uses a\n                  <strong>JavaScript Bridge</strong>\n                  to communicate between JS thread and native threads\n                </li>\n                <li>\n                  Bridge serializes data and passes messages asynchronously between JavaScript and\n                  native code\n                </li>\n                <li>\n                  Native modules are written in\n                  <strong>Java/Kotlin (Android)</strong>\n                  or\n                  <strong>Swift/Objective-C (iOS)</strong>\n                </li>\n                <li>\n                  New Architecture uses\n                  <strong>JSI (JavaScript Interface)</strong>\n                  for direct synchronous communication\n                </li>\n                <li>\n                  Turbo Modules and Fabric provide better performance by reducing bridge overhead\n                </li>\n              </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Uses a JavaScript Bridge to communicate between JS thread and native threads",
        "Bridge serializes data and passes messages asynchronously between JavaScript and native code",
        "Native modules are written in Java/Kotlin (Android) or Swift/Objective-C (iOS)"
      ]
    },
    {
      "question": "What are React Native components?",
      "answer": "<ul>\n                <li>\n                  <strong>Core Components:</strong>\n                  Built-in components like View, Text, Image, ScrollView, TextInput\n                </li>\n                <li>\n                  <strong>Custom Components:</strong>\n                  User-defined reusable components built using core components\n                </li>\n                <li>\n                  <strong>Native Components:</strong>\n                  Platform-specific components that require native code\n                </li>\n                <li>\n                  <strong>Third-party Components:</strong>\n                  Community-built components available via npm\n                </li>\n                <li>\n                  Components follow the same lifecycle as React components (mount, update, unmount)\n                </li>\n              </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Core Components: Built-in components like View, Text, Image, ScrollView, TextInput",
        "Custom Components: User-defined reusable components built using core components",
        "Native Components: Platform-specific components that require native code"
      ]
    },
    {
      "question": "What is the purpose of AsyncStorage in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>Persistent Storage:</strong>\n                  Stores data locally on device that persists between app sessions\n                </li>\n                <li>\n                  <strong>Key-Value Store:</strong>\n                  Simple key-value storage system similar to localStorage in web\n                </li>\n                <li>\n                  <strong>Asynchronous:</strong>\n                  All operations are asynchronous and return promises\n                </li>\n                <li>\n                  <strong>Cross-platform:</strong>\n                  Works consistently on both iOS and Android platforms\n                </li>\n                <li>\n                  <strong>Use Cases:</strong>\n                  User preferences, authentication tokens, app settings, offline data\n                </li>\n              </ul>\n              <code>\n                import AsyncStorage from '@react-native-async-storage/async-storage';\n                \n\n                // Store data\n                \n\n                const storeData = async (key, value) =&gt; {\n                \n\n                  await AsyncStorage.setItem(key, JSON.stringify(value));\n                \n\n                };\n                \n\n                // Retrieve data\n                \n\n                const getData = async (key) =&gt; {\n                \n\n                  const value = await AsyncStorage.getItem(key);\n                \n\n                  return value ? JSON.parse(value) : null;\n                \n\n                };\n              </code>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Persistent Storage: Stores data locally on device that persists between app sessions",
        "Key-Value Store: Simple key-value storage system similar to localStorage in web",
        "Asynchronous: All operations are asynchronous and return promises"
      ]
    },
    {
      "question": "How does React Native handle navigation?",
      "answer": "<ul>\n                <li>\n                  <strong>React Navigation:</strong>\n                  Most popular third-party navigation library for React Native\n                </li>\n                <li>\n                  <strong>Stack Navigation:</strong>\n                  Manages screen stack with push/pop operations\n                </li>\n                <li>\n                  <strong>Tab Navigation:</strong>\n                  Bottom or top tab-based navigation between screens\n                </li>\n                <li>\n                  <strong>Drawer Navigation:</strong>\n                  Side drawer menu for navigation\n                </li>\n                <li>\n                  <strong>Native Navigation:</strong>\n                  Platform-specific navigation using react-native-navigation\n                </li>\n              </ul>\n              <code>\n                import { NavigationContainer } from '@react-navigation/native';\n                \n\n                import { createStackNavigator } from '@react-navigation/stack';\n                \n\n                import { createBottomTabNavigator } from\n                '@react-navigation/bottom-tabs';\n                \n\n                \n\n                const Stack = createStackNavigator();\n                \n\n                const Tab = createBottomTabNavigator();\n                \n\n                \n\n                const App = () =&gt; (\n                \n\n                  &lt;NavigationContainer&gt;\n                \n\n                    &lt;Stack.Navigator initialRouteName=\"Home\"&gt;\n                \n\n                      &lt;Stack.Screen name=\"Home\"\n                component={HomeScreen} /&gt;\n                \n\n                      &lt;Stack.Screen name=\"Details\"\n                component={DetailsScreen} /&gt;\n                \n\n                    &lt;/Stack.Navigator&gt;\n                \n\n                  &lt;/NavigationContainer&gt;\n                \n\n                );\n              </code>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "React Navigation: Most popular third-party navigation library for React Native",
        "Stack Navigation: Manages screen stack with push/pop operations",
        "Tab Navigation: Bottom or top tab-based navigation between screens"
      ]
    },
    {
      "question": "What is the Box Model in React Native layouts?",
      "answer": "<ul>\n                <li>\n                  <strong>Content Area:</strong>\n                  The actual content of the component (text, image, etc.)\n                </li>\n                <li>\n                  <strong>Padding:</strong>\n                  Space between content and border, inside the component\n                </li>\n                <li>\n                  <strong>Border:</strong>\n                  Optional border around the padding area\n                </li>\n                <li>\n                  <strong>Margin:</strong>\n                  Space outside the border, separating component from others\n                </li>\n                <li>Similar to CSS box model but with React Native specific properties</li>\n                <li>Uses numeric values instead of CSS units (px, em, rem)</li>\n              </ul>\n              <code>\n                const styles = StyleSheet.create({\n                \n\n                  boxModel: {\n                \n\n                    // Content area\n                \n\n                    width: 100,\n                \n\n                    height: 100,\n                \n\n                    // Padding (inside)\n                \n\n                    padding: 10,\n                \n\n                    // Border\n                \n\n                    borderWidth: 2,\n                \n\n                    borderColor: 'black',\n                \n\n                    // Margin (outside)\n                \n\n                    margin: 15\n                \n\n                  }\n                \n\n                });\n              </code>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Content Area: The actual content of the component (text, image, etc.)",
        "Padding: Space between content and border, inside the component",
        "Border: Optional border around the padding area"
      ]
    },
    {
      "question": "What are Flexbox and its properties in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>flexDirection:</strong>\n                  Defines main axis direction (row, column, row-reverse, column-reverse)\n                </li>\n                <li>\n                  <strong>justifyContent:</strong>\n                  Aligns children along main axis (flex-start, center, flex-end, space-between,\n                  space-around)\n                </li>\n                <li>\n                  <strong>alignItems:</strong>\n                  Aligns children along cross axis (flex-start, center, flex-end, stretch)\n                </li>\n                <li>\n                  <strong>flex:</strong>\n                  Defines how component grows/shrinks relative to other components\n                </li>\n                <li>\n                  <strong>flexWrap:</strong>\n                  Controls whether children wrap to new lines (wrap, nowrap)\n                </li>\n                <li>\n                  <strong>alignSelf:</strong>\n                  Overrides alignItems for individual child components\n                </li>\n              </ul>\n              <code>\n                const styles = StyleSheet.create({\n                \n\n                  container: {\n                \n\n                    flex: 1,\n                \n\n                    flexDirection: 'column',\n                \n\n                    justifyContent: 'space-between',\n                \n\n                    alignItems: 'center',\n                \n\n                    flexWrap: 'wrap'\n                \n\n                  },\n                \n\n                  item: {\n                \n\n                    flex: 1,\n                \n\n                    alignSelf: 'stretch'\n                \n\n                  }\n                \n\n                });\n              </code>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "flexDirection: Defines main axis direction (row, column, row-reverse, column-reverse)",
        "justifyContent: Aligns children along main axis (flex-start, center, flex-end, space-between, space-around)",
        "alignItems: Aligns children along cross axis (flex-start, center, flex-end, stretch)"
      ]
    },
    {
      "question": "What is the difference between State and Props?",
      "answer": "<ul>\n                <li>\n                  <strong>State:</strong>\n                  Internal component data that can be modified using setState or useState hook\n                </li>\n                <li>\n                  <strong>Props:</strong>\n                  Read-only data passed from parent component to child component\n                </li>\n                <li>\n                  <strong>Mutability:</strong>\n                  State is mutable within component, Props are immutable in child component\n                </li>\n                <li>\n                  <strong>Ownership:</strong>\n                  State belongs to component itself, Props are owned by parent component\n                </li>\n                <li>\n                  <strong>Re-rendering:</strong>\n                  Both state and props changes trigger component re-rendering\n                </li>\n                <li>\n                  <strong>Initial Values:</strong>\n                  State can have default values, Props are passed from parent\n                </li>\n              </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "State: Internal component data that can be modified using setState or useState hook",
        "Props: Read-only data passed from parent component to child component",
        "Mutability: State is mutable within component, Props are immutable in child component"
      ]
    },
    {
      "question": "What is Fast Refresh in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>Live Reloading:</strong>\n                  Automatically reloads app when code changes are detected\n                </li>\n                <li>\n                  <strong>State Preservation:</strong>\n                  Maintains component state during reload, unlike Hot Reloading\n                </li>\n                <li>\n                  <strong>Error Recovery:</strong>\n                  Automatically recovers from syntax errors without full reload\n                </li>\n                <li>\n                  <strong>Selective Updates:</strong>\n                  Only updates changed components, not the entire app\n                </li>\n                <li>\n                  Combines benefits of Live Reload and Hot Reload for better developer experience\n                </li>\n              </ul>",
      "difficulty": "Beginner",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Live Reloading: Automatically reloads app when code changes are detected",
        "State Preservation: Maintains component state during reload, unlike Hot Reloading",
        "Error Recovery: Automatically recovers from syntax errors without full reload"
      ]
    },
    {
      "question": "How do you handle API calls in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>Fetch API:</strong>\n                  Built-in JavaScript API for making HTTP requests\n                </li>\n                <li>\n                  <strong>Axios:</strong>\n                  Popular third-party library with additional features like interceptors\n                </li>\n                <li>\n                  <strong>Error Handling:</strong>\n                  Proper try-catch blocks and error state management\n                </li>\n                <li>\n                  <strong>Loading States:</strong>\n                  Show loading indicators during API calls\n                </li>\n                <li>\n                  <strong>Network Info:</strong>\n                  Check network connectivity before making requests\n                </li>\n              </ul>\n              <code>\n                // Using Fetch API\n                \n\n                const fetchData = async () =&gt; {\n                \n\n                  try {\n                \n\n                    const response = await\n                fetch('https://api.example.com/data');\n                \n\n                    const data = await response.json();\n                \n\n                    setData(data);\n                \n\n                  } catch (error) {\n                \n\n                    console.error('API Error:', error);\n                \n\n                    setError(error.message);\n                \n\n                  }\n                \n\n                };\n              </code>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Fetch API: Built-in JavaScript API for making HTTP requests",
        "Axios: Popular third-party library with additional features like interceptors",
        "Error Handling: Proper try-catch blocks and error state management"
      ]
    },
    {
      "question": "What is React Native Gesture Handler?",
      "answer": "<ul>\n                <li>\n                  <strong>Performance:</strong>\n                  Provides native-driven gesture handling for better performance\n                </li>\n                <li>\n                  <strong>Gesture Types:</strong>\n                  Supports pan, pinch, rotation, tap, long press, and fling gestures\n                </li>\n                <li>\n                  <strong>Native Thread:</strong>\n                  Runs gestures on native thread instead of JavaScript thread\n                </li>\n                <li>\n                  <strong>Smooth Animations:</strong>\n                  Enables 60fps animations during gesture interactions\n                </li>\n                <li>Essential for complex touch interactions and smooth user experiences</li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Performance: Provides native-driven gesture handling for better performance",
        "Gesture Types: Supports pan, pinch, rotation, tap, long press, and fling gestures",
        "Native Thread: Runs gestures on native thread instead of JavaScript thread"
      ]
    },
    {
      "question": "How to debug React Native applications?",
      "answer": "<ul>\n                <li>\n                  <strong>React Native Debugger:</strong>\n                  Standalone debugging tool with Redux DevTools integration\n                </li>\n                <li>\n                  <strong>Chrome DevTools:</strong>\n                  Debug JavaScript code using Chrome's developer tools\n                </li>\n                <li>\n                  <strong>Flipper:</strong>\n                  Facebook's debugging platform with network inspector and layout tools\n                </li>\n                <li>\n                  <strong>Console Logging:</strong>\n                  Use console.log, console.warn, console.error for basic debugging\n                </li>\n                <li>\n                  <strong>React DevTools:</strong>\n                  Inspect component hierarchy and props/state\n                </li>\n                <li>\n                  <strong>Native Debugging:</strong>\n                  Use Xcode for iOS and Android Studio for Android native debugging\n                </li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "React Native Debugger: Standalone debugging tool with Redux DevTools integration",
        "Chrome DevTools: Debug JavaScript code using Chrome's developer tools",
        "Flipper: Facebook's debugging platform with network inspector and layout tools"
      ]
    },
    {
      "question": "What is the React Native Bridge and its limitations?",
      "answer": "<ul>\n                <li>\n                  <strong>Communication Layer:</strong>\n                  Facilitates communication between JavaScript and native threads\n                </li>\n                <li>\n                  <strong>Asynchronous:</strong>\n                  All bridge communications are asynchronous, causing potential delays\n                </li>\n                <li>\n                  <strong>Serialization Overhead:</strong>\n                  Data must be serialized/deserialized when crossing the bridge\n                </li>\n                <li>\n                  <strong>Performance Bottleneck:</strong>\n                  Heavy bridge usage can impact app performance\n                </li>\n                <li>\n                  <strong>New Architecture:</strong>\n                  JSI and Turbo Modules aim to reduce bridge dependency\n                </li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Communication Layer: Facilitates communication between JavaScript and native threads",
        "Asynchronous: All bridge communications are asynchronous, causing potential delays",
        "Serialization Overhead: Data must be serialized/deserialized when crossing the bridge"
      ]
    },
    {
      "question": "Explain React Native's New Architecture (Fabric and TurboModules)?",
      "answer": "<ul>\n                <li>\n                  <strong>Fabric:</strong>\n                  New rendering system that improves UI performance and enables concurrent features\n                </li>\n                <li>\n                  <strong>TurboModules:</strong>\n                  New native module system with lazy loading and better type safety\n                </li>\n                <li>\n                  <strong>JSI (JavaScript Interface):</strong>\n                  Direct synchronous communication between JS and native\n                </li>\n                <li>\n                  <strong>Concurrent Features:</strong>\n                  Enables React 18 features like Suspense and concurrent rendering\n                </li>\n                <li>\n                  <strong>Better Performance:</strong>\n                  Reduces bridge overhead and improves startup time\n                </li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Fabric: New rendering system that improves UI performance and enables concurrent features",
        "TurboModules: New native module system with lazy loading and better type safety",
        "JSI (JavaScript Interface): Direct synchronous communication between JS and native"
      ]
    },
    {
      "question": "What are React Native Hooks and commonly used ones?",
      "answer": "<ul>\n                <li>\n                  <strong>useState:</strong>\n                  Manages local component state in functional components\n                </li>\n                <li>\n                  <strong>useEffect:</strong>\n                  Handles side effects like API calls, subscriptions, and cleanup\n                </li>\n                <li>\n                  <strong>useContext:</strong>\n                  Consumes React context for global state management\n                </li>\n                <li>\n                  <strong>useCallback:</strong>\n                  Memoizes functions to prevent unnecessary re-renders\n                </li>\n                <li>\n                  <strong>useMemo:</strong>\n                  Memoizes expensive calculations to optimize performance\n                </li>\n                <li>\n                  <strong>Custom Hooks:</strong>\n                  Create reusable stateful logic across components\n                </li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "useState: Manages local component state in functional components",
        "useEffect: Handles side effects like API calls, subscriptions, and cleanup",
        "useContext: Consumes React context for global state management"
      ]
    },
    {
      "question": "How do you handle device permissions in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>react-native-permissions:</strong>\n                  Popular library for handling runtime permissions\n                </li>\n                <li>\n                  <strong>Platform-specific:</strong>\n                  Different permission systems for iOS and Android\n                </li>\n                <li>\n                  <strong>Runtime Permissions:</strong>\n                  Request permissions when needed, not at app install\n                </li>\n                <li>\n                  <strong>Permission States:</strong>\n                  Handle granted, denied, blocked, and unavailable states\n                </li>\n                <li>\n                  <strong>Graceful Degradation:</strong>\n                  Provide alternative functionality when permissions denied\n                </li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "react-native-permissions: Popular library for handling runtime permissions",
        "Platform-specific: Different permission systems for iOS and Android",
        "Runtime Permissions: Request permissions when needed, not at app install"
      ]
    },
    {
      "question": "What is Code Push and how does it work?",
      "answer": "<ul>\n                <li>\n                  <strong>Over-the-Air Updates:</strong>\n                  Deploy JavaScript and asset updates without app store\n                </li>\n                <li>\n                  <strong>Microsoft Service:</strong>\n                  Cloud service for managing and distributing updates\n                </li>\n                <li>\n                  <strong>Instant Updates:</strong>\n                  Users get updates immediately without downloading from app store\n                </li>\n                <li>\n                  <strong>Rollback Capability:</strong>\n                  Quickly rollback problematic updates\n                </li>\n                <li>\n                  <strong>Staged Rollouts:</strong>\n                  Gradually release updates to percentage of users\n                </li>\n                <li>\n                  <strong>Native Code Limitation:</strong>\n                  Cannot update native code, only JavaScript and assets\n                </li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Over-the-Air Updates: Deploy JavaScript and asset updates without app store",
        "Microsoft Service: Cloud service for managing and distributing updates",
        "Instant Updates: Users get updates immediately without downloading from app store"
      ]
    },
    {
      "question": "How do you optimize React Native app performance?",
      "answer": "<ul>\n                <li>\n                  <strong>Image Optimization:</strong>\n                  Use appropriate image formats, sizes, and caching strategies\n                </li>\n                <li>\n                  <strong>List Performance:</strong>\n                  Use FlatList/SectionList with proper keyExtractor and getItemLayout\n                </li>\n                <li>\n                  <strong>Memory Management:</strong>\n                  Remove event listeners, clear timers, and avoid memory leaks\n                </li>\n                <li>\n                  <strong>Bundle Size:</strong>\n                  Use Hermes engine, enable ProGuard, and remove unused dependencies\n                </li>\n                <li>\n                  <strong>Native Modules:</strong>\n                  Move heavy computations to native code when necessary\n                </li>\n                <li>\n                  <strong>Profiling Tools:</strong>\n                  Use React DevTools Profiler and native profiling tools\n                </li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Image Optimization: Use appropriate image formats, sizes, and caching strategies",
        "List Performance: Use FlatList/SectionList with proper keyExtractor and getItemLayout",
        "Memory Management: Remove event listeners, clear timers, and avoid memory leaks"
      ]
    },
    {
      "question": "What is Hermes and its benefits?",
      "answer": "<ul>\n                <li>\n                  <strong>JavaScript Engine:</strong>\n                  Optimized JS engine developed by Facebook for React Native\n                </li>\n                <li>\n                  <strong>Faster Startup:</strong>\n                  Precompiled bytecode reduces app startup time significantly\n                </li>\n                <li>\n                  <strong>Smaller Bundle Size:</strong>\n                  Better compression and optimization of JavaScript code\n                </li>\n                <li>\n                  <strong>Lower Memory Usage:</strong>\n                  More efficient memory management compared to other JS engines\n                </li>\n                <li>\n                  <strong>Better Performance:</strong>\n                  Optimized for mobile devices with limited resources\n                </li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "JavaScript Engine: Optimized JS engine developed by Facebook for React Native",
        "Faster Startup: Precompiled bytecode reduces app startup time significantly",
        "Smaller Bundle Size: Better compression and optimization of JavaScript code"
      ]
    },
    {
      "question": "How do you handle deep linking in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>URL Schemes:</strong>\n                  Custom URL schemes for opening app from external sources\n                </li>\n                <li>\n                  <strong>Universal Links (iOS):</strong>\n                  Associate app with web domain for seamless linking\n                </li>\n                <li>\n                  <strong>App Links (Android):</strong>\n                  Android equivalent of universal links\n                </li>\n                <li>\n                  <strong>React Navigation:</strong>\n                  Built-in deep linking support with navigation library\n                </li>\n                <li>\n                  <strong>Dynamic Links:</strong>\n                  Firebase Dynamic Links for cross-platform deep linking\n                </li>\n              </ul>",
      "difficulty": "Intermediate",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "URL Schemes: Custom URL schemes for opening app from external sources",
        "Universal Links (iOS): Associate app with web domain for seamless linking",
        "App Links (Android): Android equivalent of universal links"
      ]
    },
    {
      "question": "What are the different types of testing in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>Unit Testing:</strong>\n                  Test individual components and functions using Jest\n                </li>\n                <li>\n                  <strong>Integration Testing:</strong>\n                  Test component interactions using React Native Testing Library\n                </li>\n                <li>\n                  <strong>End-to-End Testing:</strong>\n                  Test complete user flows using Detox or Appium\n                </li>\n                <li>\n                  <strong>Snapshot Testing:</strong>\n                  Capture component output and detect unexpected changes\n                </li>\n                <li>\n                  <strong>Performance Testing:</strong>\n                  Monitor app performance, memory usage, and startup time\n                </li>\n              </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Unit Testing: Test individual components and functions using Jest",
        "Integration Testing: Test component interactions using React Native Testing Library",
        "End-to-End Testing: Test complete user flows using Detox or Appium"
      ]
    },
    {
      "question": "How do you handle offline functionality in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>Network Detection:</strong>\n                  Use @react-native-community/netinfo to detect connectivity\n                </li>\n                <li>\n                  <strong>Local Storage:</strong>\n                  Store critical data locally using AsyncStorage or SQLite\n                </li>\n                <li>\n                  <strong>Caching Strategies:</strong>\n                  Implement proper caching for API responses and images\n                </li>\n                <li>\n                  <strong>Sync Mechanisms:</strong>\n                  Queue offline actions and sync when connection restored\n                </li>\n                <li>\n                  <strong>User Feedback:</strong>\n                  Show appropriate UI states for offline/online modes\n                </li>\n              </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Network Detection: Use @react-native-community/netinfo to detect connectivity",
        "Local Storage: Store critical data locally using AsyncStorage or SQLite",
        "Caching Strategies: Implement proper caching for API responses and images"
      ]
    },
    {
      "question": "What is the difference between FlatList and ScrollView?",
      "answer": "<ul>\n                <li>\n                  <strong>Performance:</strong>\n                  FlatList renders only visible items, ScrollView renders all items at once\n                </li>\n                <li>\n                  <strong>Memory Usage:</strong>\n                  FlatList uses less memory for large datasets\n                </li>\n                <li>\n                  <strong>Use Cases:</strong>\n                  FlatList for dynamic lists, ScrollView for small static content\n                </li>\n                <li>\n                  <strong>Features:</strong>\n                  FlatList provides pull-to-refresh, infinite scrolling, and item separators\n                </li>\n                <li>\n                  <strong>Optimization:</strong>\n                  FlatList has built-in optimization for large lists\n                </li>\n              </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Performance: FlatList renders only visible items, ScrollView renders all items at once",
        "Memory Usage: FlatList uses less memory for large datasets",
        "Use Cases: FlatList for dynamic lists, ScrollView for small static content"
      ]
    },
    {
      "question": "How do you handle push notifications in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>Firebase Cloud Messaging (FCM):</strong>\n                  Cross-platform push notification service\n                </li>\n                <li>\n                  <strong>react-native-push-notification:</strong>\n                  Popular library for handling notifications\n                </li>\n                <li>\n                  <strong>Notification States:</strong>\n                  Handle foreground, background, and killed app states\n                </li>\n                <li>\n                  <strong>Deep Linking:</strong>\n                  Navigate to specific screens when notification is tapped\n                </li>\n                <li>\n                  <strong>Local Notifications:</strong>\n                  Schedule notifications locally without server\n                </li>\n                <li>\n                  <strong>Permission Handling:</strong>\n                  Request notification permissions from users\n                </li>\n              </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Firebase Cloud Messaging (FCM): Cross-platform push notification service",
        "react-native-push-notification: Popular library for handling notifications",
        "Notification States: Handle foreground, background, and killed app states"
      ]
    },
    {
      "question": "What is Metro bundler and its role in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>JavaScript Bundler:</strong>\n                  Bundles JavaScript code and assets for React Native apps\n                </li>\n                <li>\n                  <strong>Fast Refresh:</strong>\n                  Enables hot reloading and fast refresh functionality\n                </li>\n                <li>\n                  <strong>Asset Resolution:</strong>\n                  Handles image and other asset imports\n                </li>\n                <li>\n                  <strong>Code Transformation:</strong>\n                  Transforms modern JavaScript to compatible versions\n                </li>\n                <li>\n                  <strong>Development Server:</strong>\n                  Serves bundled code during development\n                </li>\n              </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "JavaScript Bundler: Bundles JavaScript code and assets for React Native apps",
        "Fast Refresh: Enables hot reloading and fast refresh functionality",
        "Asset Resolution: Handles image and other asset imports"
      ]
    },
    {
      "question": "How do you handle animations in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>Animated API:</strong>\n                  Built-in animation library for smooth animations\n                </li>\n                <li>\n                  <strong>React Native Reanimated:</strong>\n                  More powerful third-party animation library\n                </li>\n                <li>\n                  <strong>LayoutAnimation:</strong>\n                  Animate layout changes automatically\n                </li>\n                <li>\n                  <strong>Native Driver:</strong>\n                  Run animations on native thread for better performance\n                </li>\n                <li>\n                  <strong>Gesture Integration:</strong>\n                  Combine animations with gesture handlers\n                </li>\n                <li>\n                  <strong>Performance:</strong>\n                  Use native driver when possible to avoid bridge overhead\n                </li>\n              </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Animated API: Built-in animation library for smooth animations",
        "React Native Reanimated: More powerful third-party animation library",
        "LayoutAnimation: Animate layout changes automatically"
      ]
    },
    {
      "question": "What is the difference between Expo and React Native CLI?",
      "answer": "<ul>\n                <li>\n                  <strong>Development Environment:</strong>\n                  Expo provides managed workflow, CLI provides bare workflow\n                </li>\n                <li>\n                  <strong>Native Code Access:</strong>\n                  CLI allows full native code access, Expo has limitations\n                </li>\n                <li>\n                  <strong>Setup Complexity:</strong>\n                  Expo is easier to set up, CLI requires more configuration\n                </li>\n                <li>\n                  <strong>Build Process:</strong>\n                  Expo handles builds in cloud, CLI requires local build setup\n                </li>\n                <li>\n                  <strong>Third-party Libraries:</strong>\n                  CLI supports all libraries, Expo has restrictions\n                </li>\n                <li>\n                  <strong>Ejecting:</strong>\n                  Expo apps can be ejected to bare workflow when needed\n                </li>\n              </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Development Environment: Expo provides managed workflow, CLI provides bare workflow",
        "Native Code Access: CLI allows full native code access, Expo has limitations",
        "Setup Complexity: Expo is easier to set up, CLI requires more configuration"
      ]
    },
    {
      "question": "How do you handle state management in React Native?",
      "answer": "<ul>\n                <li>\n                  <strong>Local State:</strong>\n                  Use useState hook for component-level state management\n                </li>\n                <li>\n                  <strong>Context API:</strong>\n                  React Context for sharing state across component tree\n                </li>\n                <li>\n                  <strong>Redux:</strong>\n                  Predictable state container for complex applications\n                </li>\n                <li>\n                  <strong>Zustand:</strong>\n                  Lightweight state management library with minimal boilerplate\n                </li>\n                <li>\n                  <strong>MobX:</strong>\n                  Reactive state management through observables\n                </li>\n                <li>\n                  <strong>Recoil:</strong>\n                  Facebook's experimental state management library\n                </li>\n              </ul>",
      "difficulty": "Advanced",
      "tags": [
        "React Native"
      ],
      "keyPoints": [
        "Local State: Use useState hook for component-level state management",
        "Context API: React Context for sharing state across component tree",
        "Redux: Predictable state container for complex applications"
      ]
    }
  ]
}
