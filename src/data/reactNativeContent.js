// React Native tutorial content - beginner-friendly, w3schools-style explanations.
// Each topic has a title and an array of sections. Sections support:
//   - content: array of HTML strings (paragraphs of explanation)
//   - list: array of HTML strings (reference / property bullets)
//   - code: string of example code shown in an ExampleBox
//   - example: { title, code, output, type } for the ExampleBox component
//   - heading: string shown above the section body
//
// Inside content / list items we can use inline HTML such as <code>...</code>.

export const reactNativeContent = {
  module1: {
    'environment-setup': {
      title: 'Environment Setup',
      sections: [
        {
          heading: 'What is React Native, and what do you need to run it?',
          content: [
            '<strong>React Native</strong> is a framework from Meta (Facebook) that lets you build real mobile apps for iOS and Android using JavaScript and React. Instead of writing two separate codebases in Swift and Kotlin, you write one React app and React Native renders real native UI components on each platform — a <code>&lt;View&gt;</code> becomes a native <code>UIView</code> on iOS and a <code>android.view.View</code> on Android.',
            'This is different from "hybrid" frameworks like Cordova or Ionic, which wrap a web app in a webview. React Native apps look and feel native because the UI <em>is</em> native. You get near-native performance for most tasks, full access to device APIs (camera, GPS, Bluetooth), and you can reuse 80–90% of your code between iOS and Android.',
            'Because the output is a real native app, you need the native build tools installed. That means <strong>Node.js</strong> (to run the JavaScript tooling), <strong>Xcode</strong> on macOS for iOS builds, and <strong>Android Studio</strong> for Android builds. iOS development requires a Mac; Android development works on macOS, Windows, or Linux.',
            'There are two ways to start a React Native project: <strong>Expo</strong> (the simplest, recommended for beginners — no native build tools required for most work) and the <strong>React Native CLI</strong> (full control, needed if you want to add custom native code). This tutorial uses the CLI, but most of what you learn applies to both.'
          ],
          list: [
            'React Native = build <strong>real iOS and Android apps</strong> with React + JavaScript.',
            'Renders native UI — looks and feels like a native app, not a web wrapper.',
            'Reuse ~80–90% of code between iOS and Android.',
            'Needs <strong>Node.js</strong> + (Xcode on macOS for iOS, Android Studio for Android).',
            'Two ways to start: <strong>Expo</strong> (beginner-friendly, no native tools) or <strong>React Native CLI</strong> (full control).',
            'iOS builds require a Mac; Android builds work on macOS, Windows, or Linux.'
          ]
        },
        {
          heading: 'Installing the tools (step by step)',
          content: [
            'The setup is a one-time chore. Once done, you can create and run projects with two commands.',
            '<strong>1. Install Node.js (LTS)</strong> — download from <a href="https://nodejs.org" target="_blank">nodejs.org</a>. Pick the LTS version. This installs both <code>node</code> and <code>npm</code>.',
            '<strong>2. (macOS only) Install Watchman</strong> — <code>brew install watchman</code>. Watchman is Meta\'s file-watcher; it makes Hot Reload faster on macOS.',
            '<strong>3. (macOS only) Install Xcode</strong> — from the App Store. Open it once and accept the license; install the Command Line Tools (<code>xcode-select --install</code>). This gives you the iOS simulator.',
            '<strong>4. Install Android Studio</strong> — from <a href="https://developer.android.com/studio" target="_blank">developer.android.com/studio</a>. Use its SDK Manager to install an Android SDK and create an AVD (Android Virtual Device) for the emulator. Then set the <code>ANDROID_HOME</code> environment variable to the SDK path.',
            '<strong>5. (Android) Install JDK 11+</strong> — Android builds need Java. On macOS: <code>brew install openjdk@11</code>. Android Studio bundles a JDK, so this is often already covered.',
            'Run <code>npx react-native doctor</code> at any time — it checks your setup and tells you what is missing or misconfigured.'
          ],
          list: [
            'Step 1: install <strong>Node.js LTS</strong> from nodejs.org.',
            'Step 2 (macOS): <code>brew install watchman</code>.',
            'Step 3 (macOS): install <strong>Xcode</strong> + Command Line Tools.',
            'Step 4: install <strong>Android Studio</strong> + an AVD; set <code>ANDROID_HOME</code>.',
            'Step 5 (Android): ensure <strong>JDK 11+</strong> is on the PATH.',
            'Sanity check: <code>npx react-native doctor</code>.'
          ],
          code: `# Verify the install
node -v
npm -v
npx react-native doctor

# Create a new project (React Native CLI)
npx react-native init MyApp
cd MyApp

# Run on Android (emulator or connected device)
npx react-native run-android

# Run on iOS (macOS only — launches the simulator)
npx react-native run-ios

# Start the Metro bundler separately if needed
npx react-native start --reset-cache`
        },
        {
          heading: 'Common setup problems and fixes',
          content: [
            'If something does not work, the error message usually points at the cause. Here are the issues beginners hit most often:',
            '<strong>Android emulator not detected</strong> — open the AVD Manager in Android Studio and create a virtual device first. Make sure <code>ANDROID_HOME</code> points at the SDK folder (e.g. <code>~/Library/Android/sdk</code> on macOS).',
            '<strong>iOS build fails</strong> — open Xcode once, accept the license, and run <code>xcode-select --install</code> to install the Command Line Tools. Run <code>cd ios &amp;&amp; pod install</code> to install CocoaPods dependencies.',
            '<strong>Metro bundler issues</strong> — clear the cache: <code>npx react-native start --reset-cache</code>. Then rebuild.',
            '<strong>Expo alternative</strong> — if all this setup is too much, try Expo: <code>npm install -g expo-cli &amp;&amp; expo init MyApp</code>. Expo handles the native build for you, so you can develop without Xcode or Android Studio. You "eject" later if you need custom native code.'
          ],
          list: [
            'Android emulator missing? Create an AVD and set <code>ANDROID_HOME</code>.',
            'iOS build fails? Open Xcode, accept the license, run <code>pod install</code>.',
            'Metro problems? <code>npx react-native start --reset-cache</code>.',
            'Diagnose with <code>npx react-native doctor</code>.',
            'Beginner-friendly alternative: <strong>Expo</strong> — no native build tools needed.'
          ]
        }
      ]
    },
    'hello-world': {
      title: 'Hello World',
      sections: [
        {
          heading: 'Your first React Native app',
          content: [
            'A React Native app is just a React app that renders native components instead of HTML. The smallest possible app imports <code>View</code> and <code>Text</code> from <code>react-native</code>, returns some JSX, and exports it as the default. That component becomes the app\'s entry point.',
            'Two things to notice right away:',
            '1. There is no <code>&lt;div&gt;</code> or <code>&lt;p&gt;</code>. React Native uses <code>&lt;View&gt;</code> (a container, like a <code>div</code>) and <code>&lt;Text&gt;</code> (for text, like a <code>span</code> or <code>p</code>). All text <em>must</em> be wrapped in <code>&lt;Text&gt;</code> — bare text inside a <code>&lt;View&gt;</code> throws an error.<br>2. The component is exported as the default. In a real app the entry file (<code>index.js</code>) registers this component with <code>AppRegistry.registerComponent</code> (older projects) or imports it as <code>App</code> (newer setups).',
            'Run the app on a device or emulator with <code>npx react-native run-android</code> or <code>npx react-native run-ios</code>. The Metro bundler packages your JavaScript and ships it to the app — you should see "Hello, React Native!" on the screen.'
          ],
          list: [
            'A React Native app is a React app that renders native components.',
            'Use <code>&lt;View&gt;</code> as a container (like <code>&lt;div&gt;</code>) and <code>&lt;Text&gt;</code> for text.',
            'All text must be inside <code>&lt;Text&gt;</code> — bare text throws an error.',
            'Export the component as default; it becomes the app\'s entry point.',
            'Run with <code>npx react-native run-android</code> or <code>run-ios</code>.'
          ],
          code: `import { View, Text } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello, React Native!</Text>
  </View>
);

export default App;`,
          example: {
            title: 'Try it Yourself',
            code: `import { View, Text, StyleSheet } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello, React Native!</Text>
    <Text style={styles.subtitle}>My first mobile app.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title:     { fontSize: 24, fontWeight: 'bold' },
  subtitle:  { fontSize: 16, color: '#666' },
});

export default App;`,
            output: 'Hello, React Native!<br>My first mobile app.',
            type: 'code'
          }
        }
      ]
    },
    'core-components': {
      title: 'Core Components',
      sections: [
        {
          heading: 'The components you will use constantly',
          content: [
            'React Native ships with a set of <strong>core components</strong> — built-in components that map to real native UI on each platform. You import them from <code>react-native</code> and use them in JSX. These are the building blocks for everything you build:',
            "<strong>View</strong> — the basic container. Like a <code>&lt;div&gt;</code> in HTML. Use it for layout, padding, grouping other components, and as the root of a screen.<br><strong>Text</strong> — displays text. <em>All</em> text in React Native must be inside a <code>&lt;Text&gt;</code>; bare text in a <code>&lt;View&gt;</code> throws.<br><strong>Image</strong> — displays images. Use <code>source={{ uri: '...' }}</code> for remote images or <code>source={require('./local.png')}</code> for local ones.<br><strong>TextInput</strong> — user input. Like an <code>&lt;input&gt;</code> in HTML; controlled with <code>value</code> + <code>onChangeText</code>.<br><strong>ScrollView</strong> — makes content scrollable when it is taller than the screen. Renders all children at once, so use only for small content.<br><strong>FlatList</strong> — the high-performance list for large datasets. Only renders the items currently on screen (virtualization).<br><strong>Button</strong> / <strong>TouchableOpacity</strong> — clickable elements. <code>Button</code> is basic and styled by the platform; <code>TouchableOpacity</code> wraps any component and adds a fade-on-press feedback.<br><strong>Modal</strong> — an overlay above the rest of the app, for dialogs and popups.<br><strong>ActivityIndicator</strong> — a loading spinner.<br><strong>Switch</strong> — a toggle switch that adapts to platform style.",
            'There are also a few <strong>platform-specific</strong> components (e.g. <code>ActionSheetIOS</code>, <code>DrawerLayoutAndroid</code>), but for most apps you stick to the cross-platform ones above and let React Native handle the platform differences.'
          ],
          list: [
            '<strong>View</strong> — container (like <code>&lt;div&gt;</code>).',
            '<strong>Text</strong> — text. All text must be inside <code>&lt;Text&gt;</code>.',
            '<strong>Image</strong> — images; remote via <code>uri</code> or local via <code>require()</code>.',
            '<strong>TextInput</strong> — user input; controlled with <code>value</code> + <code>onChangeText</code>.',
            '<strong>ScrollView</strong> — scrollable container; renders all children (small content only).',
            '<strong>FlatList</strong> — virtualized list; for large datasets.',
            '<strong>Button</strong> / <strong>TouchableOpacity</strong> — pressable elements.',
            '<strong>Modal</strong> — overlay for dialogs.',
            '<strong>ActivityIndicator</strong> — loading spinner.',
            '<strong>Switch</strong> — toggle switch.'
          ]
        },
        {
          heading: 'A quick tour of the core components',
          content: [
            'The example below shows the most common components in one screen: a heading (<code>Text</code>), an image (<code>Image</code>), a text input (<code>TextInput</code>), a button (<code>TouchableOpacity</code>), a toggle (<code>Switch</code>), a loading spinner (<code>ActivityIndicator</code>), a list (<code>FlatList</code>), and a popup (<code>Modal</code>).',
            'Notice how state drives everything: the text input is controlled by <code>text</code>, the toggle by <code>isEnabled</code>, the spinner by <code>isLoading</code>, and the modal by <code>isModalVisible</code>. This is the React pattern you already know — just with native components.'
          ],
          code: `import React, { useState } from 'react';
import {
  View, Text, TextInput, Image, TouchableOpacity, Alert,
  Modal, ActivityIndicator, Switch, FlatList, StyleSheet
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isEnabled, setEnabled] = useState(false);

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Core Components</Text>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 80, height: 80 }}
      />

      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={setText}
      />
      <Text>You typed: {text}</Text>

      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Hi!')}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Notifications</Text>
        <Switch value={isEnabled} onValueChange={setEnabled} />
      </View>

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Modal visible={isModalVisible} transparent>
        <View style={styles.modal}>
          <Text>I'm a modal!</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container:  { flex: 1, padding: 16 },
  heading:    { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  input:      { borderWidth: 1, padding: 8, marginVertical: 8 },
  button:     { backgroundColor: '#007bff', padding: 12, borderRadius: 6 },
  buttonText: { color: 'white', textAlign: 'center' },
  listItem:   { padding: 12, borderBottomWidth: 1 },
  modal:      { backgroundColor: 'white', padding: 20, margin: 40 },
});

export default App;`
        }
      ]
    },
    'native-components': {
      title: 'Native Components',
      sections: [
        {
          heading: 'Core vs. native components',
          content: [
            'The core components (<code>View</code>, <code>Text</code>, <code>Image</code>, ...) cover most needs and work on both iOS and Android. But sometimes you need a UI element that exists on only one platform, or you want to use a platform\'s native look-and-feel directly. That is where <strong>native components</strong> come in.',
            'React Native exposes a few platform-specific components directly, like <code>ActionSheetIOS</code> (the iOS slide-up action sheet), <code>DatePickerIOS</code>, <code>DrawerLayoutAndroid</code> (the Android slide-out drawer), and <code>ProgressBarAndroid</code>. These render only on their platform — importing them on the other platform gives you nothing (or an error).',
            'For richer native UI, the React Native community publishes libraries like <strong>@react-native-community/datetimepicker</strong>, <strong>@react-native-community/picker</strong>, and <strong>react-native-paper</strong> (Material Design components). These wrap the native platform components and expose a single cross-platform API.',
            'If you need something truly custom — say, a barcode scanner or a map — you reach for a third-party native module (covered in Module 5) or write your own. Either way, the JavaScript side just renders a component; the heavy lifting happens in native code.'
          ],
          list: [
            '<strong>Core components</strong> — cross-platform, built into <code>react-native</code>.',
            '<strong>Native components</strong> — platform-specific (e.g. <code>ActionSheetIOS</code>, <code>DrawerLayoutAndroid</code>).',
            '<strong>Community libraries</strong> — wrap native UI in a cross-platform API (datetimepicker, picker, paper).',
            '<strong>Native modules</strong> — access platform APIs not exposed by default (camera, Bluetooth, sensors).',
            'Use <code>Platform.OS</code> or <code>.ios.js</code>/<code>.android.js</code> files to pick the right component per platform.'
          ],
          code: `import { Platform, Text, ActionSheetIOS, DrawerLayoutAndroid } from 'react-native';

// Use Platform.OS to pick the right component
function NativeExample() {
  if (Platform.OS === 'ios') {
    return <Text>iOS — could show an ActionSheetIOS here</Text>;
  }
  return <Text>Android — could show a DrawerLayoutAndroid here</Text>;
}`
        }
      ]
    },
    jsx: {
      title: 'JSX',
      sections: [
        {
          heading: 'JSX in React Native',
          content: [
            '<strong>JSX</strong> works in React Native exactly the same way it works in React for the web — it is JavaScript XML, a syntax extension that lets you write HTML-like markup inside JavaScript. The only difference is the tag names: instead of <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;img&gt;</code>, you use <code>&lt;View&gt;</code>, <code>&lt;Text&gt;</code>, <code>&lt;Image&gt;</code>.',
            'The same JSX rules apply:',
            '1. <strong>One parent element.</strong> A component returns a single root. Use a Fragment <code>&lt;&gt;...&lt;/&gt;</code> to group several without an extra node.<br>2. <strong>Curly braces for JavaScript.</strong> Any expression inside <code>{ }</code> is evaluated: <code>{name}</code>, <code>{2 + 2}</code>, <code>{isLoggedIn ? &lt;Welcome/&gt; : &lt;Login/&gt;}</code>.<br>3. <strong>camelCase attributes.</strong> In HTML you write <code>onclick</code>; in JSX you write <code>onPress</code>. CSS properties are camelCase too: <code>backgroundColor</code>, not <code>background-color</code>.<br>4. <strong>JSX comments</strong> are <code>{/* ... */}</code>, not <code>&lt;!-- --&gt;</code>.',
            'Browsers cannot read JSX, and neither can a phone — Metro (the bundler) compiles JSX to <code>React.createElement()</code> calls before sending it to the app.'
          ],
          list: [
            'JSX works the same as in React for the web — only the tag names change.',
            'Use <code>&lt;View&gt;</code>, <code>&lt;Text&gt;</code>, <code>&lt;Image&gt;</code> instead of <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;img&gt;</code>.',
            'One parent element (use a Fragment <code>&lt;&gt;&lt;/&gt;</code> to group several).',
            'Curly braces <code>{ }</code> for any JavaScript expression.',
            'Attributes are camelCase: <code>onPress</code>, <code>backgroundColor</code>.',
            'JSX comments: <code>{/* ... */}</code>.'
          ],
          code: `import { View, Text } from 'react-native';

const App = () => {
  const isLoggedIn = true;
  return (
    <View>
      <Text>Hello</Text>
      {isLoggedIn ? <Text>Welcome back!</Text> : <Text>Please log in</Text>}
    </View>
  );
};

export default App;`
        }
      ]
    },
    props: {
      title: 'Props',
      sections: [
        {
          heading: 'Customizing components with props',
          content: [
            '<strong>Props</strong> (short for "properties") are how a parent passes data to a child component — exactly like in React for the web. You write them as attributes on the component tag, and they arrive inside the child as the <code>props</code> argument. Think of props as function parameters for a component.',
            'Two rules to remember:',
            '1. <strong>Props are read-only.</strong> A child must never modify its own props. If a child needs to change a value, the parent passes a <em>function</em> prop the child can call.<br>2. <strong>One-way data flow.</strong> Data flows from parent to child. When the parent\'s value changes, the child re-renders with the new prop automatically.',
            'For type safety, use <strong>TypeScript</strong> and define a props interface. Then your editor catches typos and missing props before you run the app. You can also give props default values with default parameters or <code>defaultProps</code>.',
            'A common pitfall as your app grows is <strong>props drilling</strong> — passing a prop through five levels of components that do not care about it. For data many components need (the current user, the theme), reach for the Context API (Module 4) instead.'
          ],
          list: [
            'Props pass data from parent to child (like function parameters).',
            'Props are <strong>read-only</strong>; the child must not modify them.',
            'One-way: parent → child. The child re-renders when the prop changes.',
            'Use <strong>TypeScript interfaces</strong> for type-safe props.',
            'Default values: default parameters or <code>defaultProps</code>.',
            'Avoid <strong>props drilling</strong> — use Context API for app-wide data.',
            '<code>children</code> is a special prop for nesting JSX inside a component.'
          ],
          code: `import { View, Text } from 'react-native';

// Define the props with TypeScript
type GreetingProps = {
  name: string;
  age?: number;       // ? means optional
};

// Destructure props for cleaner code
const Greeting = ({ name, age = 18 }: GreetingProps) => (
  <View>
    <Text>Hello, {name}!</Text>
    <Text>Age: {age}</Text>
  </View>
);

// Usage — pass props like HTML attributes
const App = () => (
  <View>
    <Greeting name="Ada" age={30} />
    <Greeting name="Alan" />          {/* age uses the default */}
  </View>
);

export default App;`
        }
      ]
    },
    state: {
      title: 'State',
      sections: [
        {
          heading: 'Remembering data with state',
          content: [
            '<strong>State</strong> is the data a component remembers between renders — a counter, a search query, a list of users. Unlike props (which come from the parent), state lives <em>inside</em> the component and is managed by the component itself. When state changes, React re-renders the component so the UI always shows the latest data.',
            'In modern React (function components), you create state with the <strong>useState</strong> hook. It returns a pair: the current value and a setter function. You call the setter to update the value; you never modify the value directly.',
            'A few key facts:',
            '1. <strong>State updates are asynchronous.</strong> React batches them, so reading the state right after a setter may show the old value. Use the functional form <code>setCount(prev =&gt; prev + 1)</code> when the new value depends on the old one.<br>2. <strong>Each component has its own state.</strong> Two instances of the same component do not share state.<br>3. <strong>For complex state</strong> with many related fields or complex update logic, use <strong>useReducer</strong> instead of several <code>useState</code>s. It is the React equivalent of Redux\'s reducer pattern.',
            'When several components need the same state, "lift" it up to their common parent and pass it down as props (or use Context — Module 4).'
          ],
          list: [
            'State = data a component remembers between renders.',
            'Create with <strong>useState</strong>; returns <code>[value, setter]</code>.',
            'Call the setter to update; never modify the value directly.',
            'State updates are <strong>async</strong> — use the functional form for updates that depend on the previous value.',
            'Each component instance has its own independent state.',
            'For complex state, use <strong>useReducer</strong>.',
            'Share state between siblings by <strong>lifting it up</strong> to a common parent.'
          ],
          code: `import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Functional update — safe when the new value depends on the old one
  const increment = () => setCount(prev => prev + 1);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={increment} />
    </View>
  );
};

export default Counter;`,
          example: {
            title: 'Try it Yourself — useReducer for complex state',
            code: `import { useReducer, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

// A reducer is a pure function: (state, action) => newState
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case 'TOGGLE_TODO':
      return state.map(t =>
        t.id === action.id ? { ...t, done: !t.done } : t
      );
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput value={text} onChangeText={setText} placeholder="New todo" />
      <Button title="Add" onPress={() => {
        dispatch({ type: 'ADD_TODO', text });
        setText('');
      }} />
      {todos.map(t => (
        <Text key={t.id} onPress={() => dispatch({ type: 'TOGGLE_TODO', id: t.id })}>
          {t.done ? '✓' : '○'} {t.text}
        </Text>
      ))}
    </View>
  );
};`,
            output: '○ Buy milk<br>✓ Call mom<br>○ Walk dog',
            type: 'code'
          }
        }
      ]
    }
  },

  module2: {
    'handling-text-input': {
      title: 'Handling Text Input',
      sections: [
        {
          heading: 'Reading what the user types',
          content: [
            'The <code>TextInput</code> component is React Native\'s equivalent of an HTML <code>&lt;input&gt;</code>. To make it interactive, you make it <strong>controlled</strong>: store the value in state, bind it with <code>value</code>, and update it on every keystroke with <code>onChangeText</code>.',
            'The pattern is the same three lines as in React for the web:',
            "1. Declare state: <code>const [text, setText] = useState('');</code><br>2. Bind the value: <code>&lt;TextInput value={text} /&gt;</code><br>3. Update on change: <code>onChangeText={setText}</code>.",
            'Note the prop is <code>onChangeText</code>, not <code>onChange</code> — it gives you the new text directly, not an event object. (There is also <code>onChange</code> with a full event, but <code>onChangeText</code> is the simpler, more common choice.)',
            '<code>TextInput</code> has many useful props: <code>placeholder</code> (hint text), <code>keyboardType</code> (<code>"numeric"</code>, <code>"email-address"</code>, etc. — picks the right keyboard), <code>secureTextEntry</code> (for passwords), <code>multiline</code> (for textareas), <code>autoCapitalize</code>, and <code>autoCorrect</code>.'
          ],
          list: [
            '<strong>Controlled input</strong>: state holds the value, <code>value</code> binds it, <code>onChangeText</code> updates state.',
            'The change prop is <code>onChangeText</code> (gives the new text directly), not <code>onChange</code>.',
            '<code>placeholder</code> — hint text.',
            '<code>keyboardType</code> — picks the right keyboard (<code>"numeric"</code>, <code>"email-address"</code>, ...).',
            '<code>secureTextEntry</code> — masks input for passwords.',
            '<code>multiline</code> — turns the input into a textarea.',
            '<code>autoCapitalize</code>, <code>autoCorrect</code> — fine-tune typing behavior.'
          ],
          code: `import { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const NameForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>Hello, {name || 'stranger'}!</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1, padding: 8, marginVertical: 8, borderRadius: 4
  },
});

export default NameForm;`
        }
      ]
    },
    scrollview: {
      title: 'ScrollView',
      sections: [
        {
          heading: 'Making content scrollable',
          content: [
            'A phone screen is small. When your content is taller than the screen, you need it to scroll. The simplest way is to wrap the content in a <strong>ScrollView</strong> — React Native\'s basic scrollable container.',
            '<code>ScrollView</code> is easy to use: put your components inside it and they will scroll if they overflow. It works in both directions (<code>horizontal</code> prop for horizontal scrolling) and supports pinch-to-zoom with the <code>minimumZoomScale</code>/<code>maximumZoomScale</code> props.',
            'The catch: <code>ScrollView</code> renders <em>all</em> its children at once, even the ones off-screen. For a few items this is fine; for a list of 1000 items it wastes memory and startup time. For large lists, use <code>FlatList</code> (next topic) instead — it only renders the items currently visible.'
          ],
          list: [
            '<strong>ScrollView</strong> — wraps content so it scrolls when it overflows.',
            'Renders <strong>all children at once</strong> — fine for small content, bad for large lists.',
            '<code>horizontal</code> prop for horizontal scrolling.',
            '<code>minimumZoomScale</code> / <code>maximumZoomScale</code> for pinch-to-zoom.',
            'For lists of more than ~20 items, use <strong>FlatList</strong> instead.'
          ],
          code: `import { ScrollView, View, Text, StyleSheet } from 'react-native';

const App = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.heading}>A long page</Text>
    {Array.from({ length: 50 }).map((_, i) => (
      <View key={i} style={styles.card}>
        <Text>Item #{i + 1}</Text>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading:   { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  card:      { padding: 16, backgroundColor: 'white', marginBottom: 8, borderRadius: 8 },
});

export default App;`
        }
      ]
    },
    'listview-flatlist': {
      title: 'ListView / FlatList',
      sections: [
        {
          heading: 'High-performance lists with FlatList',
          content: [
            'For any list longer than a screen or two, use <strong>FlatList</strong> instead of <code>ScrollView</code>. <code>FlatList</code> uses <strong>virtualization</strong>: it renders only the items currently visible on screen (plus a small buffer), and recycles their views as you scroll. This keeps memory low and scrolling smooth even for thousands of items.',
            '<code>FlatList</code> takes three required pieces:',
            '1. <code>data</code> — the array of items to render.<br>2. <code>renderItem</code> — a function that turns one item into JSX.<br>3. <code>keyExtractor</code> — a function that returns a unique key for each item (usually <code>item.id</code>). React Native uses the key to match items across renders — without it, scrolling and state can get confused when items are added, removed, or reordered.',
            'Two performance tips: wrap <code>renderItem</code> and <code>keyExtractor</code> in <code>useCallback</code> so they keep the same reference between renders, and use a stable <code>key</code> (the item\'s id) — never the array index. For very large lists you can also tune <code>initialNumToRender</code>, <code>maxToRenderPerBatch</code>, <code>windowSize</code>, and <code>removeClippedSubviews</code>.'
          ],
          list: [
            '<strong>FlatList</strong> — virtualized list; renders only visible items.',
            'Required props: <code>data</code>, <code>renderItem</code>, <code>keyExtractor</code>.',
            '<code>keyExtractor</code> returns a unique key — use <code>item.id</code>, never the array index.',
            'Wrap <code>renderItem</code> and <code>keyExtractor</code> in <code>useCallback</code> for stable references.',
            'Tuning props: <code>initialNumToRender</code>, <code>maxToRenderPerBatch</code>, <code>windowSize</code>, <code>removeClippedSubviews</code>.',
            'For grouped/sectioned data, use <strong>SectionList</strong> instead.'
          ],
          code: `import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Buy milk' },
  { id: '2', title: 'Call mom' },
  { id: '3', title: 'Walk dog' },
];

const App = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: { padding: 16 },
  item: { padding: 16, backgroundColor: 'white', marginBottom: 8, borderRadius: 8 },
});

export default App;`
        }
      ]
    },
    sectionlist: {
      title: 'SectionList',
      sections: [
        {
          heading: 'Grouped lists with SectionList',
          content: [
            'When your data is naturally grouped — contacts by letter, settings by category, events by date — use <strong>SectionList</strong>. It is like <code>FlatList</code> but takes an array of <em>sections</em>, each with a title and an array of data. It renders a header for each section automatically.',
            'The props are similar to FlatList, with two differences:',
            '1. <code>sections</code> takes an array of <code>{ title, data }</code> objects (not a flat array).<br>2. <code>renderSectionHeader</code> renders the header for each section.',
            'Use <code>SectionList</code> for any grouped data; use <code>FlatList</code> for flat lists. The two are not interchangeable — pick the one that matches your data shape.'
          ],
          list: [
            '<strong>SectionList</strong> — for <strong>grouped</strong> data (contacts by letter, events by date).',
            '<code>sections</code> prop takes an array of <code>{ title, data }</code> objects.',
            '<code>renderItem</code> renders one item; <code>renderSectionHeader</code> renders the group header.',
            '<code>keyExtractor</code> is still required (unique per item).',
            'Use FlatList for flat lists; SectionList for grouped lists.'
          ],
          code: `import { SectionList, View, Text, StyleSheet } from 'react-native';

const sections = [
  { title: 'Fruits',  data: ['Apple', 'Banana', 'Cherry'] },
  { title: 'Veggies', data: ['Carrot', 'Potato', 'Spinach'] },
];

const App = () => (
  <SectionList
    sections={sections}
    keyExtractor={item => item}
    renderItem={({ item }) => (
      <View style={styles.item}><Text>{item}</Text></View>
    )}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={styles.header}>{title}</Text>
    )}
  />
);

const styles = StyleSheet.create({
  header: { fontSize: 18, fontWeight: 'bold', padding: 8, backgroundColor: '#eee' },
  item:   { padding: 12, borderBottomWidth: 1 },
});

export default App;`
        }
      ]
    },
    flexbox: {
      title: 'Flexbox',
      sections: [
        {
          heading: 'Layout with Flexbox',
          content: [
            'React Native uses <strong>Flexbox</strong> for layout — the same system as CSS on the web, with a few defaults flipped for mobile. Flexbox is a one-dimensional layout model: it arranges children either in a row (side by side) or a column (stacked), and distributes space between them.',
            'The most important props:',
            '<strong>flex</strong> — a number; how much space this view takes relative to its siblings. <code>flex: 1</code> means "fill all remaining space". <code>flex: 2</code> takes twice as much as a sibling with <code>flex: 1</code>.<br><strong>flexDirection</strong> — <code>"row"</code> (side by side) or <code>"column"</code> (stacked). <strong>The default in React Native is <code>column</code></strong>, opposite from the web (where it is <code>row</code>).<br><strong>justifyContent</strong> — how children are aligned along the main axis: <code>"flex-start"</code>, <code>"center"</code>, <code>"flex-end"</code>, <code>"space-between"</code>, <code>"space-around"</code>, <code>"space-evenly"</code>.<br><strong>alignItems</strong> — how children are aligned along the cross axis: <code>"flex-start"</code>, <code>"center"</code>, <code>"flex-end"</code>, <code>"stretch"</code> (fill the cross axis).',
            "A common pattern: to center content, use <code>flex: 1, justifyContent: 'center', alignItems: 'center'</code> on the parent. To make a row of equal-width items, use <code>flexDirection: 'row'</code> on the parent and <code>flex: 1</code> on each child."
          ],
          list: [
            'React Native uses <strong>Flexbox</strong> for layout (same as web CSS).',
            '<strong>flex</strong> — relative space; <code>flex: 1</code> fills remaining space.',
            '<strong>flexDirection</strong> — <code>"row"</code> or <code>"column"</code>; default is <strong>column</strong> (web default is row).',
            '<strong>justifyContent</strong> — alignment on the main axis (<code>"center"</code>, <code>"space-between"</code>, ...).',
            '<strong>alignItems</strong> — alignment on the cross axis (<code>"center"</code>, <code>"stretch"</code>, ...).',
            "Center content: <code>flex: 1, justifyContent: 'center', alignItems: 'center'</code>."
          ],
          code: `import { View, Text, StyleSheet } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <View style={styles.box1}><Text>Box 1</Text></View>
    <View style={styles.box2}><Text>Box 2</Text></View>
    <View style={styles.box3}><Text>Box 3</Text></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,                       // fill the screen
    flexDirection: 'row',          // side by side
    justifyContent: 'space-between',// spread along the row
    alignItems: 'center',           // center vertically
    padding: 16,
  },
  box1: { flex: 1, height: 80, backgroundColor: 'coral' },
  box2: { flex: 2, height: 80, backgroundColor: 'skyblue' },
  box3: { flex: 1, height: 80, backgroundColor: 'seagreen' },
});

export default App;`,
          example: {
            title: 'Try it Yourself — centering content',
            code: `// Center one child vertically and horizontally
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>I'm centered!</Text>
</View>`,
            output: 'I\'m centered! (in the middle of the screen)',
            type: 'code'
          }
        }
      ]
    },
    styling: {
      title: 'Styling',
      sections: [
        {
          heading: 'How to style components',
          content: [
            'React Native uses JavaScript for styling — no CSS files. Every component accepts a <code>style</code> prop that takes a plain JavaScript object (or an array of objects, merged left to right). The property names are camelCase versions of CSS (<code>backgroundColor</code>, <code>fontSize</code>, <code>marginTop</code>).',
            'The cleanest pattern is to define styles once with <strong>StyleSheet.create()</strong> at the bottom of the file, and reference them by name. This is faster than inline objects (the styles are sent to native once, not recreated on every render) and keeps the JSX readable.',
            'A few differences from web CSS to watch for:',
            '1. <strong>No cascading.</strong> Styles do not inherit to children the way CSS does — a <code>&lt;Text&gt;</code> inside a <code>&lt;View&gt;</code> does <em>not</em> inherit the view\'s <code>color</code>. Set text styles on the <code>&lt;Text&gt;</code> itself.<br>2. <strong>Units are numbers, not strings.</strong> <code>fontSize: 16</code>, not <code>"16px"</code>. The numbers are in <em>device-independent pixels</em> (dp).<br>3. <strong>Only a subset of CSS</strong> is supported — no <code>display: grid</code>, limited selectors, no pseudo-classes. Use conditional styles (arrays of style objects or ternaries) instead.',
            'For shared styles across files, export a <code>StyleSheet</code> from a separate <code>styles.js</code> module. For reusable styled components, wrap a component and pass <code>style</code> as a prop and merge it with <code>StyleSheet.flatten</code>.'
          ],
          list: [
            'Styles are <strong>JavaScript objects</strong> — no CSS files.',
            'Use <strong>StyleSheet.create()</strong> for performance and readability.',
            'Property names are camelCase: <code>backgroundColor</code>, <code>fontSize</code>, <code>marginTop</code>.',
            'Units are <strong>numbers</strong> (dp), not strings: <code>fontSize: 16</code>, not <code>"16px"</code>.',
            'No cascading — set text styles on the <code>&lt;Text&gt;</code>, not the parent <code>&lt;View&gt;</code>.',
            'Merge styles with arrays: <code>[styles.base, isPressed &amp;&amp; styles.pressed]</code>.',
            'Only a subset of CSS is supported — no grid, no pseudo-classes.'
          ],
          code: `import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  const isPressed = false;
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isPressed && styles.pressed]}>
        Hello
      </Text>
      <Text style={styles.subtitle}>Stylish.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title:     { fontSize: 24, fontWeight: 'bold', color: '#333' },
  subtitle:  { fontSize: 16, color: '#666', marginTop: 4 },
  pressed:   { color: 'red' },   // applied only when isPressed is true
});

export default App;`
        }
      ]
    },
    images: {
      title: 'Images',
      sections: [
        {
          heading: 'Displaying images',
          content: [
            'The <code>Image</code> component displays images. There are two ways to provide the source:',
            "<strong>1. Local images</strong> — use <code>require()</code> with a relative path. The bundler includes the file in the app, so it loads instantly and works offline. <code>&lt;Image source={require('./logo.png')} /&gt;</code>",
            "<strong>2. Remote images</strong> — use an object with a <code>uri</code>: <code>&lt;Image source={{ uri: 'https://example.com/logo.png' }} /&gt;</code>. The app downloads it at runtime, so it needs a network connection and the URL must allow CORS.",
            'Two things beginners often miss:',
            '<strong>Always set explicit dimensions.</strong> Unlike the web, a remote <code>&lt;Image&gt;</code> with no <code>style.width</code> and <code>style.height</code> shows <em>nothing</em> — there is no automatic size. Set <code>style={{ width: 100, height: 100 }}</code> (or use <code>flex</code>) so the image has a size.<br><strong>Use <code>resizeMode</code></strong> to control how the image fits its box: <code>"cover"</code> (fill, may crop), <code>"contain"</code> (fit, may letterbox), <code>"stretch"</code> (fill, may distort), <code>"repeat"</code> (tile), <code>"center"</code>.',
            'For background images, use <code>ImageBackground</code>, which lets you render children on top of an image.'
          ],
          list: [
            "<strong>Local image</strong>: <code>source={require('./logo.png')}</code> — bundled, works offline.",
            "<strong>Remote image</strong>: <code>source={{ uri: 'https://...' }}</code> — downloaded at runtime.",
            '<strong>Always set width and height</strong> — remote images with no size render nothing.',
            '<code>resizeMode</code> — <code>"cover"</code>, <code>"contain"</code>, <code>"stretch"</code>, <code>"repeat"</code>, <code>"center"</code>.',
            'For background images, use <code>ImageBackground</code>.',
            'Load images from <code>./assets/</code> — bundler includes them in the app.'
          ],
          code: `import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native';

const App = () => (
  <View style={styles.container}>
    {/* Local image — bundled at build time */}
    <Image source={require('./assets/logo.png')} style={styles.logo} />

    {/* Remote image — needs width and height! */}
    <Image
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      style={{ width: 80, height: 80 }}
      resizeMode="contain"
    />

    {/* Background image */}
    <ImageBackground source={require('./assets/bg.jpg')} style={styles.bg}>
      <Text style={styles.bgText}>Text on top of the image</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center' },
  logo:      { width: 100, height: 100, margin: 12 },
  bg:        { width: '100%', height: 200, justifyContent: 'center', alignItems: 'center' },
  bgText:    { color: 'white', fontSize: 20, fontWeight: 'bold' },
});

export default App;`
        }
      ]
    }
  },

  module3: {
    buttons: {
      title: 'Buttons',
      sections: [
        {
          heading: 'The basic Button',
          content: [
            'The <code>Button</code> component is the simplest way to make something tappable. It renders a platform-styled button (Material on Android, default on iOS) and calls an <code>onPress</code> handler when tapped.',
            '<code>Button</code> is intentionally limited — it takes a <code>title</code>, a <code>color</code> (the background on Android, the text color on iOS), an <code>onPress</code> handler, and a <code>disabled</code> flag. You cannot style its padding, border radius, or font. For anything custom, use <code>TouchableOpacity</code> (next topic) instead.',
            'A common pattern is to disable the button until a form is valid: <code>&lt;Button title="Submit" onPress={onSubmit} disabled={!isValid} /&gt;</code>.'
          ],
          list: [
            '<strong>Button</strong> — simplest pressable; renders a platform-styled button.',
            'Props: <code>title</code>, <code>onPress</code>, <code>color</code>, <code>disabled</code>.',
            'Limited styling — no custom padding, border radius, or font.',
            'For custom-styled buttons, use <strong>TouchableOpacity</strong> instead.',
            'Disable with <code>disabled={!isValid}</code> until a form is valid.'
          ],
          code: `import { View, Button, Alert } from 'react-native';

const App = () => (
  <View style={{ padding: 16 }}>
    <Button
      title="Press me"
      color="#007bff"
      onPress={() => Alert.alert('You pressed the button!')}
    />
  </View>
);

export default App;`
        }
      ]
    },
    touchables: {
      title: 'Touchables',
      sections: [
        {
          heading: 'Making any component tappable',
          content: [
            'When you want a custom-styled button (an image, a card, a row), wrap it in a <strong>Touchable</strong> component. The Touchables add a press handler and a visual feedback effect so the user knows the tap registered.',
            'The most popular is <strong>TouchableOpacity</strong> — it lowers the opacity (fades out) while pressed. It wraps any component, so you can put text, images, or a whole card inside. This is what you will use 90% of the time.',
            'Other Touchables for specific feedback:',
            '<strong>TouchableHighlight</strong> — darkens the background while pressed (good for list rows).<br><strong>TouchableWithoutFeedback</strong> — no visual feedback at all (use sparingly; feedback helps users).<br><strong>Pressable</strong> (newer, recommended) — a single component that supports all feedback styles via a function: <code>style={({ pressed }) =&gt; pressed ? styles.pressed : styles.normal}</code>. For new code, prefer <code>Pressable</code> over the older Touchables.',
            'All Touchables support <code>onPress</code>, <code>onPressIn</code>, <code>onPressOut</code>, and <code>onLongPress</code>, plus a <code>hitSlop</code> prop to make the tappable area bigger than the visual one (good for small buttons).'
          ],
          list: [
            '<strong>TouchableOpacity</strong> — fades while pressed; wraps any component. The most common choice.',
            '<strong>TouchableHighlight</strong> — darkens the background while pressed (good for list rows).',
            '<strong>TouchableWithoutFeedback</strong> — no feedback; use sparingly.',
            '<strong>Pressable</strong> (newer, recommended) — one component, any feedback style via a function.',
            'Events: <code>onPress</code>, <code>onPressIn</code>, <code>onPressOut</code>, <code>onLongPress</code>.',
            '<code>hitSlop</code> enlarges the tappable area beyond the visual one (good for small buttons).'
          ],
          code: `import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native';

// TouchableOpacity — fades while pressed
const Card = ({ title, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

// Pressable — newer, recommended for new code
const Button = ({ title, onPress }) => (
  <Pressable
    style={({ pressed }) => [
      styles.btn,
      pressed && styles.btnPressed
    ]}
    onPress={onPress}
  >
    <Text style={styles.btnText}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  card:       { padding: 16, backgroundColor: 'white', borderRadius: 8, marginBottom: 8 },
  title:      { fontSize: 16 },
  btn:        { backgroundColor: '#007bff', padding: 12, borderRadius: 6 },
  btnPressed: { backgroundColor: '#0056b3' },
  btnText:    { color: 'white', textAlign: 'center' },
});`
        }
      ]
    },
    navigation: {
      title: 'Navigation',
      sections: [
        {
          heading: 'Moving between screens',
          content: [
            'A mobile app is not a single screen — users move between screens by tapping buttons or tabs. <strong>React Navigation</strong> is the standard library for this in React Native. It handles the back button on Android, the navigation stack, transitions, and deep links.',
            'Install it with <code>npm install @react-navigation/native @react-navigation/native-stack</code> plus its peer dependencies (<code>react-native-screens</code> and <code>react-native-safe-area-context</code>). Then wrap your app in a <code>NavigationContainer</code> and define a <strong>navigator</strong> with screens.',
            'React Navigation offers several navigator types:',
            '<strong>Stack Navigator</strong> — push/pop screens like a browser history. Each new screen slides in on top. The most common pattern.<br><strong>Tab Navigator</strong> — bottom or top tabs (like Instagram).<br><strong>Drawer Navigator</strong> — a slide-out side menu (like Gmail).<br>You can nest them: a Tab Navigator where each tab contains its own Stack Navigator.',
            "To navigate from code, use the <code>navigation</code> prop that every screen receives: <code>navigation.navigate('Details', { id: 42 })</code>. To read the params in the target screen, use <code>route.params</code>. To go back, <code>navigation.goBack()</code>."
          ],
          list: [
            '<strong>React Navigation</strong> — the standard routing library for React Native.',
            'Install: <code>@react-navigation/native</code> + a navigator package (e.g. <code>native-stack</code>).',
            '<strong>Stack</strong> — push/pop screens (most common).',
            '<strong>Tab</strong> — bottom or top tabs (like Instagram).',
            '<strong>Drawer</strong> — slide-out side menu (like Gmail).',
            "Navigate: <code>navigation.navigate('Screen', params)</code>.",
            'Read params: <code>route.params</code>; go back: <code>navigation.goBack()</code>.'
          ],
          code: `import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { id: 42 })}
      />
    </View>
  );
}

function DetailsScreen({ route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details for id {route.params.id}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"    component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`
        }
      ]
    },
    'platform-specific-code': {
      title: 'Platform Specific Code',
      sections: [
        {
          heading: 'Writing code for iOS or Android only',
          content: [
            'Most of your code is shared between iOS and Android, but sometimes you need platform-specific behavior — a different color, a different component, or a different value. React Native gives you three ways to handle this.',
            '<strong>1. The <code>Platform</code> API</strong> — check <code>Platform.OS</code> (<code>"ios"</code> or <code>"android"</code>) in an <code>if</code> or ternary. Good for one-off differences.',
            '<strong>2. <code>Platform.select()</code></strong> — pick a value per platform from an object. Cleaner than a ternary when you have multiple options. Returns the value for the current platform: <code>Platform.select({ ios: 8, android: 12, default: 10 })</code>.',
            '<strong>3. Platform-specific files</strong> — name a file <code>Component.ios.js</code> or <code>Component.android.js</code> and import it as <code>./Component</code>. The bundler picks the right file for the platform. This is the cleanest approach when a whole component is platform-specific.'
          ],
          list: [
            '<strong>Platform.OS</strong> — <code>"ios"</code> or <code>"android"</code>; use in a ternary.',
            '<strong>Platform.select()</strong> — pick a value per platform: <code>Platform.select({ ios: 8, android: 12, default: 10 })</code>.',
            '<strong>Platform-specific files</strong> — <code>Component.ios.js</code> / <code>Component.android.js</code>; import as <code>./Component</code>.',
            'Use <code>Platform.Version</code> for OS version checks (e.g. Android API level).',
            'Most code should be shared — only branch when you genuinely need to.'
          ],
          code: `import { Platform, View, Text, StyleSheet } from 'react-native';

// 1. Platform.OS in a ternary
const PlatformExample = () => (
  <Text>
    {Platform.OS === 'ios' ? 'Running on iOS' : 'Running on Android'}
  </Text>
);

// 2. Platform.select — cleaner for multiple values
const padding = Platform.select({ ios: 8, android: 12, default: 10 });

// 3. Platform-specific files:
//    Component.ios.js       -> iOS implementation
//    Component.android.js   -> Android implementation
//    import Component from './Component';  // bundler picks the right one

const styles = StyleSheet.create({
  container: {
    paddingTop: padding,            // different per platform
    backgroundColor: Platform.select({ ios: '#f5f5f5', android: '#fafafa' }),
  },
});

export default PlatformExample;`
        }
      ]
    },
    'async-storage': {
      title: 'AsyncStorage',
      sections: [
        {
          heading: 'Simple persistent key-value storage',
          content: [
            '<strong>AsyncStorage</strong> is React Native\'s built-in key-value store — like <code>localStorage</code> on the web, but asynchronous. It persists data across app restarts, so it is perfect for lightweight things: a username, a theme preference, an "has seen onboarding" flag, a small cache.',
            'Install the community package: <code>npm install @react-native-async-storage/async-storage</code>. (The old <code>AsyncStorage</code> from <code>react-native</code> core is deprecated — use the community package.)',
            'All methods are <strong>async</strong> and return Promises, because reading and writing happen on the native side:',
            '<strong>setItem(key, value)</strong> — store a string value. (Objects must be <code>JSON.stringify</code>ed first.)<br><strong>getItem(key)</strong> — read a value; returns <code>null</code> if the key does not exist.<br><strong>removeItem(key)</strong> — delete one key.<br><strong>clear()</strong> — delete everything (use with care).',
            'Do not use AsyncStorage for sensitive data (tokens, passwords) — it is not encrypted. Use <strong>Secure Storage</strong> (next topic) for that. And do not use it for large or structured data — use SQLite or a proper database instead.'
          ],
          list: [
            '<strong>AsyncStorage</strong> — async key-value store; persists across app restarts.',
            'Install: <code>npm install @react-native-async-storage/async-storage</code>.',
            '<code>setItem(key, value)</code> — store; <code>getItem(key)</code> — read; <code>removeItem(key)</code> — delete.',
            'Values are strings — <code>JSON.stringify</code> objects before storing.',
            'All methods are <strong>async</strong> (return Promises).',
            'Good for: settings, flags, small cache. Not for sensitive data or large data.',
            'For secrets, use <strong>Secure Storage</strong>; for structured data, use SQLite.'
          ],
          code: `import AsyncStorage from '@react-native-async-storage/async-storage';

// Store a value (must be a string)
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('username', value);
  } catch (e) {
    console.error('Saving error', e);
  }
};

// Read a value
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('username');
    if (value !== null) {
      console.log('Stored username:', value);
    }
  } catch (e) {
    console.error('Reading error', e);
  }
};

// Store an object — JSON.stringify first
const storeUser = async (user) => {
  await AsyncStorage.setItem('user', JSON.stringify(user));
};
const loadUser = async () => {
  const raw = await AsyncStorage.getItem('user');
  return raw ? JSON.parse(raw) : null;
};`
        }
      ]
    },
    'secure-storage': {
      title: 'Secure Storage',
      sections: [
        {
          heading: 'Storing secrets safely',
          content: [
            '<strong>AsyncStorage</strong> is not encrypted — anyone with access to the device file system can read it. For secrets (auth tokens, passwords, API keys), use a <strong>secure storage</strong> library that stores data in the platform\'s secure enclave: the <strong>Keychain</strong> on iOS and the <strong>Keystore</strong> on Android.',
            'The most popular library is <code>react-native-keychain</code>. It encrypts the data, ties it to the device, and can require biometric authentication (Face ID, fingerprint) before releasing it.',
            'A simpler alternative is <code>react-native-encrypted-storage</code>, which has a similar API to AsyncStorage but encrypts the values. Pick whichever fits your needs — both are widely used and maintained.',
            'A typical auth flow: on login, the backend returns a JWT; you store it in the keychain (not AsyncStorage). On the next app launch, you read it from the keychain and use it for API calls. If the user logs out, you wipe the keychain entry.'
          ],
          list: [
            '<strong>Secure storage</strong> — encrypted, backed by iOS Keychain / Android Keystore.',
            'Use for: auth tokens, passwords, API keys — anything sensitive.',
            'Libraries: <code>react-native-keychain</code> (most popular), <code>react-native-encrypted-storage</code>.',
            'Supports biometric authentication (Face ID, fingerprint).',
            'Never store tokens in plain AsyncStorage — it is not encrypted.'
          ],
          code: `import * as Keychain from 'react-native-keychain';

// Store credentials securely
const saveCredentials = async (username, password) => {
  await Keychain.setGenericPassword(username, password, {
    accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET, // require Face ID/fingerprint
  });
};

// Read them back (may prompt for biometrics)
const loadCredentials = async () => {
  const creds = await Keychain.getGenericPassword();
  if (creds) {
    console.log('Username:', creds.username);
    return creds;
  }
  return null;
};

// Wipe on logout
const clearCredentials = async () => {
  await Keychain.resetGenericPassword();
};`
        }
      ]
    },
    animations: {
      title: 'Animations',
      sections: [
        {
          heading: 'Animating UI',
          content: [
            'Animations make an app feel polished — a button that scales when pressed, a card that fades in, a sidebar that slides in. React Native ships with the <strong>Animated</strong> API for declarative, performant animations, and the community offers <strong>Reanimated</strong> for more complex gesture-driven work.',
            'The <code>Animated</code> API works like this:',
            '1. Create an <code>Animated.Value</code> (a number that can change over time).<br>2. Run an animation with <code>Animated.timing()</code> (smooth to a value), <code>Animated.spring()</code> (physics-based), or <code>Animated.loop()</code> (repeat).<br>3. Bind the value to a style on an <code>Animated.View</code> (or <code>Animated.Text</code>, <code>Animated.Image</code>).<br>4. Set <code>useNativeDriver: true</code> when possible — it runs the animation on the native thread, which stays smooth even if JavaScript is busy.',
            'For complex animations tied to gestures (drag, swipe, pinch), use <strong>react-native-reanimated</strong>. It runs entirely on the UI thread, so gestures feel instant. It is the standard for modern, gesture-rich apps.'
          ],
          list: [
            '<strong>Animated</strong> — built-in API for declarative animations.',
            'Create an <code>Animated.Value</code>; animate with <code>Animated.timing</code> / <code>spring</code> / <code>loop</code>.',
            'Bind the value to a style on an <code>Animated.View</code> / <code>Animated.Text</code>.',
            'Use <code>useNativeDriver: true</code> to run on the native thread (60fps, no JS overhead).',
            '<strong>react-native-reanimated</strong> — for complex, gesture-driven animations.',
            '<code>Animated.timing</code> for smooth changes; <code>Animated.spring</code> for physics; <code>Animated.loop</code> to repeat.'
          ],
          code: `import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';

// Fade in a view over 2 seconds
const FadeInView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;  // start at 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,    // runs on the native thread — smooth
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

// Usage
import { Text } from 'react-native';
const App = () => (
  <FadeInView>
    <Text>I fade in!</Text>
  </FadeInView>
);

export default App;`
        }
      ]
    }
  },

  module4: {
    hooks: {
      title: 'React Hooks',
      sections: [
        {
          heading: 'The hooks you will use most',
          content: [
            '<strong>Hooks</strong> are functions that let function components "hook into" React features — state, side effects, refs, context. They are the modern way to write React (and React Native) components. Here are the ones you will use in almost every component:',
            '<strong>useState</strong> — add local state. Returns <code>[value, setter]</code>. Covered in Module 1.<br><strong>useEffect</strong> — run side effects (fetch data, subscribe, set a timer). Runs after render; the dependency array controls when it re-runs. Covered below in detail.<br><strong>useRef</strong> — hold a mutable value that does <em>not</em> trigger a re-render, or get a reference to a native component (e.g. to focus an input).<br><strong>useContext</strong> — read a Context value without prop drilling. Covered in the Context API topic.<br><strong>useReducer</strong> — an alternative to <code>useState</code> for complex state, using a reducer function. Covered in Module 1.<br><strong>useMemo / useCallback</strong> — memoize values and functions to prevent unnecessary re-renders (performance).',
            'The two rules of hooks:',
            '1. <strong>Only call hooks at the top level</strong> of a component — never inside loops, conditions, or nested functions. React relies on call order to match hooks to state.<br>2. <strong>Only call hooks from React functions</strong> — function components or custom hooks, not regular JavaScript functions.'
          ],
          list: [
            '<strong>useState</strong> — local state. Returns <code>[value, setter]</code>.',
            '<strong>useEffect</strong> — side effects (fetch, subscribe, timer). Runs after render.',
            '<strong>useRef</strong> — mutable value with no re-render, or a ref to a native component.',
            '<strong>useContext</strong> — read Context without prop drilling.',
            '<strong>useReducer</strong> — complex state via a reducer function.',
            '<strong>useMemo / useCallback</strong> — memoize values/functions for performance.',
            'Rules: top-level only, and only inside React functions (components or custom hooks).'
          ]
        },
        {
          heading: 'useEffect in detail',
          content: [
            '<code>useEffect</code> is how you run code that reaches outside the component — fetching data, subscribing to events, setting a timer, writing to storage. The basic shape is <code>useEffect(() =&gt; { ... return cleanup; }, [deps])</code>.',
            'The dependency array is the key:',
            '<strong><code>[]</code></strong> — run once on mount, cleanup on unmount. Good for one-time setup.<br><strong><code>[a, b]</code></strong> — run on mount and whenever <code>a</code> or <code>b</code> changes. Good for "do this when the value changes".<br><strong>no array</strong> — run after every render. Almost never what you want.',
            'Always return a cleanup function when you subscribe to something (a timer, a listener, a WebSocket) — otherwise you leak memory when the component unmounts or the effect re-runs. The cleanup runs before the next effect and on unmount.'
          ],
          list: [
            '<code>useEffect(fn, [])</code> — run once on mount (like componentDidMount).',
            '<code>useEffect(fn, [deps])</code> — run on mount and when a dep changes.',
            '<code>useEffect(fn)</code> — run after every render (rare).',
            'Return a cleanup function to unsubscribe, clear timers, close sockets.',
            'List every value from outside the effect in the dependency array.'
          ],
          code: `import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// Fetch data once on mount
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);  // re-fetch when userId changes

  if (!user) return <Text>Loading...</Text>;
  return <Text>{user.name}</Text>;
};

// Timer with cleanup
const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(id);   // cleanup on unmount
  }, []);
  return <Text>{count}</Text>;
};`
        }
      ]
    },
    networking: {
      title: 'Networking & APIs',
      sections: [
        {
          heading: 'Talking to a backend',
          content: [
            'Most React Native apps talk to a backend API — to log in, fetch data, save changes. The built-in <code>fetch</code> function (same as on the web) is usually all you need. For more advanced cases (interceptors, automatic JSON parsing, timeouts), use <strong>Axios</strong>.',
            'A typical flow:',
            '1. Call <code>fetch(url, options)</code> — returns a Promise of a <code>Response</code>.<br>2. Parse the body with <code>response.json()</code> (another Promise).<br>3. Use the data (set state, navigate, store a token).<br>4. Handle errors with <code>try/catch</code> — network requests fail often (no connection, server down, bad token).',
            'Wrap your fetches in <code>useEffect</code> (with the right dependency array) when you need to load data on mount, or call them from event handlers for actions like login. Always show a loading state while the request is in flight, and an error state if it fails.',
            'For auth, store the token securely (use Secure Storage, not AsyncStorage) and attach it to every request as a header. An <strong>HTTP interceptor</strong> (easy with Axios, a bit more work with fetch) lets you attach the token in one place instead of on every call.'
          ],
          list: [
            'Use the built-in <code>fetch</code> or <strong>Axios</strong> for HTTP requests.',
            '<code>fetch(url, options)</code> returns a Promise; parse the body with <code>response.json()</code>.',
            'Wrap fetches in <code>useEffect</code> for "load on mount", or call from event handlers for actions.',
            'Always show a loading state and an error state — networks fail often.',
            'Store auth tokens in <strong>Secure Storage</strong>, not AsyncStorage.',
            'Attach the token as a header on every request (an interceptor does this in one place).',
            'For REST testing, use <a href="https://www.postman.com/" target="_blank">Postman</a> to try endpoints before coding them.'
          ],
          code: `import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, []);  // run once on mount

  if (loading) return <ActivityIndicator />;
  if (error)   return <Text>Error: {error}</Text>;

  return (
    <View>
      {users.map(u => <Text key={u.id}>{u.name}</Text>)}
    </View>
  );
};

export default UserList;`
        }
      ]
    },
    performance: {
      title: 'Performance Optimization',
      sections: [
        {
          heading: 'Keeping the app smooth',
          content: [
            'A React Native app runs JavaScript on a separate thread from the native UI. When JavaScript is busy, the UI can stutter. Most performance work is about doing less on the JavaScript thread and avoiding unnecessary re-renders.',
            'The most impactful list optimizations (for <code>FlatList</code>):',
            '<strong>getItemLayout</strong> — if every item has the same height, tell FlatList the layout up front. It can then skip measuring and scroll instantly.<br><strong>removeClippedSubviews</strong> — remove off-screen views from the native hierarchy. Set to <code>true</code> for large lists.<br><strong>keyExtractor</strong> — use a stable id, never the array index. Without a stable key, React recreates items on every data change.<br><strong>windowSize</strong>, <code>maxToRenderPerBatch</code>, <code>initialNumToRender</code> — tune how many items FlatList renders ahead. Smaller = less memory; larger = fewer blank flashes during fast scroll.',
            'General re-render optimizations:',
            '<strong>useCallback</strong> for <code>renderItem</code> and other handlers passed to children — it keeps the same function reference so memoized children do not re-render.<br><strong>React.memo</strong> on list item components — skip re-rendering items whose props have not changed.<br><strong>useMemo</strong> for expensive calculations.<br>Avoid inline functions and objects in JSX (they get a new reference every render and break memo).'
          ],
          list: [
            '<strong>getItemLayout</strong> — pre-declare item sizes for instant scrolling on large lists.',
            '<strong>removeClippedSubviews</strong> — drop off-screen views from the native hierarchy.',
            '<strong>keyExtractor</strong> — stable unique id, never the array index.',
            '<strong>windowSize</strong>, <strong>maxToRenderPerBatch</strong>, <strong>initialNumToRender</strong> — tune FlatList rendering.',
            '<strong>useCallback</strong> — stable function references for handlers and <code>renderItem</code>.',
            '<strong>React.memo</strong> — skip re-rendering items whose props have not changed.',
            '<strong>useMemo</strong> — memoize expensive calculations.',
            'Avoid inline functions/objects in JSX — they break memoization.'
          ],
          code: `import { FlatList, View, Text, useCallback, StyleSheet } from 'react-native';

const ITEM_HEIGHT = 60;

const data = Array.from({ length: 1000 }).map((_, i) => ({
  id: String(i), title: \`Item \${i}\`,
}));

const ListItem = React.memo(({ item }) => (
  <View style={styles.item}><Text>{item.title}</Text></View>
));

const App = () => {
  // useCallback keeps the same function reference between renders
  const renderItem = useCallback(
    ({ item }) => <ListItem item={item} />,
    []
  );
  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={(_, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      removeClippedSubviews
      initialNumToRender={10}
      maxToRenderPerBatch={5}
      windowSize={11}
    />
  );
};

const styles = StyleSheet.create({
  item: { height: 60, justifyContent: 'center', padding: 16, borderBottomWidth: 1 },
});`
        }
      ]
    },
    redux: {
      title: 'Redux',
      sections: [
        {
          heading: 'Predictable global state',
          content: [
            'When an app grows, state that many components need (the logged-in user, a cart, a feed) gets hard to pass around with props. <strong>Redux</strong> is a predictable state container: all app state lives in one <strong>store</strong>, the only way to change it is to dispatch an <strong>action</strong>, and a <strong>reducer</strong> is a pure function that turns the current state + an action into the new state. This makes every state change traceable, testable, and undo-able.',
            'For new React Native apps, use <strong>Redux Toolkit</strong> (the official, recommended way) — it removes most of the boilerplate of classic Redux. Install: <code>npm install @reduxjs/toolkit react-redux</code>.',
            'The four classic Redux parts still apply, just with less boilerplate:',
            '<strong>Action</strong> — a plain object with a <code>type</code> and optional <code>payload</code>. With Toolkit, <code>createSlice</code> generates them for you.<br><strong>Reducer</strong> — a pure function: <code>(state, action) =&gt; newState</code>. Never mutate state.<br><strong>Store</strong> — holds the state. Created with <code>configureStore({ reducer })</code>.<br><strong>Dispatch / Selectors</strong> — <code>dispatch(action)</code> updates the store; <code>useSelector(state =&gt; state.user)</code> reads from it.',
            'Reach for Redux when the app is large and many components need the same state. For simpler needs, the Context API (next topic) is enough and adds no dependencies.'
          ],
          list: [
            '<strong>Redux</strong> — predictable state container; all state in one store.',
            'Use <strong>Redux Toolkit</strong> (<code>createSlice</code>) for new code — far less boilerplate.',
            'Install: <code>npm install @reduxjs/toolkit react-redux</code>.',
            'Four parts: <strong>Action</strong>, <strong>Reducer</strong>, <strong>Store</strong>, <strong>Dispatch/Selectors</strong>.',
            'Read state: <code>useSelector(state =&gt; state.user)</code>.',
            'Update state: <code>dispatch(action)</code>.',
            'Reach for Redux only when the app is large; otherwise Context API is enough.'
          ],
          code: `// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { username: '', isAuthenticated: false },
  reducers: {
    login: (state, action) => { state.username = action.payload; state.isAuthenticated = true; },
    logout: (state) => { state.username = ''; state.isAuthenticated = false; },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
export const store = configureStore({ reducer: { user: userReducer } });

// index.js — wrap the app in a Provider
import { Provider } from 'react-redux';
<Provider store={store}><App /></Provider>;

// In a component
import { useSelector, useDispatch } from 'react-redux';
const Header = () => {
  const { username, isAuthenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{isAuthenticated ? \`Hi, \${username}\` : 'Please log in'}</Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
};`
        }
      ]
    },
    'context-api': {
      title: 'Context API',
      sections: [
        {
          heading: 'Sharing state without prop drilling',
          content: [
            'The <strong>Context API</strong> is React\'s built-in way to share state across many components without passing props through every level. It is the simpler alternative to Redux for app-wide data: the current user, the theme, the language.',
            'The setup is three steps:',
            '1. <strong>Create</strong> a context: <code>const ThemeContext = createContext();</code><br>2. <strong>Provide</strong> it: wrap your app in <code>&lt;ThemeContext.Provider value={{ theme, setTheme }}&gt;</code>. Any descendant can now read it.<br>3. <strong>Consume</strong> it: in any child, call <code>const { theme, setTheme } = useContext(ThemeContext);</code>.',
            'Context is great for slow-changing data (theme, locale, the current user). It re-renders every consumer when the value changes, so for fast-changing data it can become a bottleneck — that is where Redux or Zustand shine.',
            'For convenience, export a custom hook (<code>useTheme</code>) that wraps <code>useContext</code> and throws a clear error if used outside the provider. This catches mistakes early.'
          ],
          list: [
            '<strong>Context API</strong> — built-in way to share state without prop drilling.',
            'Good for: theme, locale, current user — slow-changing global data.',
            'Step 1: <code>createContext()</code>.',
            'Step 2: wrap the app in <code>&lt;MyContext.Provider value={...}&gt;</code>.',
            'Step 3: read it with <code>useContext(MyContext)</code>.',
            'Every consumer re-renders when the value changes — not ideal for fast-changing data.',
            'Export a custom hook (<code>useTheme</code>) for a clean API and error checking.'
          ],
          code: `import { createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

// 1. Create the context
const ThemeContext = createContext();

// 2. Provide it
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom hook for clean consumption + error checking
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};

// Usage — any descendant can read the theme
const Header = () => {
  const { theme } = useTheme();
  return <Text style={{ color: theme === 'dark' ? 'white' : 'black' }}>Header</Text>;
};

const Settings = () => {
  const { theme, setTheme } = useTheme();
  return <Button title="Toggle" onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />;
};

// index.js
<ThemeProvider>
  <App />
</ThemeProvider>`
        }
      ]
    },
    'deep-linking': {
      title: 'Deep Linking',
      sections: [
        {
          heading: 'Opening a screen from a URL',
          content: [
            'A <strong>deep link</strong> is a URL that opens a specific screen inside your app — for example, <code>myapp://profile/42</code> opens the profile screen for user 42. Deep links are used by push notifications, emails, SMS, and other apps to send users straight to the right place.',
            'There are two URL schemes: <strong>custom schemes</strong> (<code>myapp://...</code>, which you register in the native config) and <strong>Universal Links / App Links</strong> (<code>https://example.com/...</code>, which require a verification file on your website but are more robust and survive app reinstallation).',
            'With <strong>React Navigation</strong>, deep linking is configured through the <code>linking</code> prop on <code>NavigationContainer</code>. You provide a <code>prefix</code> (your scheme) and a <code>config</code> that maps URL paths to screen names. React Navigation then parses incoming URLs and navigates automatically.',
            'To open a URL from your app (another app, the browser, the phone dialer), use <code>Linking.openURL(url)</code>. To check if an app can handle a URL first, use <code>Linking.canOpenURL(url)</code>.'
          ],
          list: [
            'A <strong>deep link</strong> opens a specific screen in the app (<code>myapp://profile/42</code>).',
            'Two schemes: <strong>custom</strong> (<code>myapp://</code>) and <strong>Universal Links / App Links</strong> (<code>https://</code>).',
            'Configure in React Navigation via the <code>linking</code> prop on <code>NavigationContainer</code>.',
            '<code>Linking.openURL(url)</code> — open an external URL or trigger a deep link.',
            '<code>Linking.canOpenURL(url)</code> — check if an app can handle the URL.',
            'Used by push notifications, emails, SMS, and other apps.'
          ],
          code: `import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      Home:    '',
      Profile: 'profile/:id',   // myapp://profile/42 -> Profile screen, params.id = '42'
      Settings: 'settings',
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home"     component={HomeScreen} />
        <Stack.Screen name="Profile"  component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Open a URL from your app
import { Linking } from 'react-native';
Linking.openURL('mailto:support@example.com');
Linking.openURL('https://example.com');`
        }
      ]
    },
    authentication: {
      title: 'Authentication',
      sections: [
        {
          heading: 'Logging users in',
          content: [
            '<strong>Authentication</strong> is how your app knows who the user is. The typical flow: the user enters credentials, your app sends them to the backend, the backend returns a <strong>token</strong> (usually a JWT), and your app includes that token in every following request to prove who the user is.',
            'A few best practices:',
            '1. <strong>Validate the form</strong> before submitting — use a library like <strong>Formik</strong> + <strong>Yup</strong> for schema validation. Show clear errors next to the fields.<br>2. <strong>Store the token securely</strong> — in the <strong>Keychain/Keystore</strong> (see Module 3 Secure Storage), <em>not</em> in AsyncStorage, which is not encrypted.<br>3. <strong>Attach the token to every request</strong> — an <strong>HTTP interceptor</strong> (easy with Axios) does this in one place. With raw <code>fetch</code>, write a small wrapper.<br>4. <strong>Handle expiry</strong> — tokens expire. Refresh them transparently, or send the user back to login when the refresh fails.',
            'For social login (Google, Facebook, Apple), use <strong>Firebase Auth</strong> or the provider\'s SDK. They handle the OAuth dance and return a token you can use the same way as a JWT.'
          ],
          list: [
            'Auth flow: credentials → backend returns a <strong>JWT token</strong> → token attached to every request.',
            'Validate forms with <strong>Formik + Yup</strong>; show clear field-level errors.',
            'Store the token in <strong>Secure Storage</strong> (Keychain/Keystore), never AsyncStorage.',
            'Attach the token to every request with an <strong>HTTP interceptor</strong> (or a fetch wrapper).',
            'Handle token expiry — refresh transparently, or send the user to login.',
            'Social login: use <strong>Firebase Auth</strong> or the provider\'s SDK.'
          ],
          code: `import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import * as Keychain from 'react-native-keychain';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    try {
      const res = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.token) {
        // Store the token securely
        await Keychain.setGenericPassword('token', data.token);
        // navigate to the main app...
      } else {
        setError('Invalid credentials');
      }
    } catch (e) {
      setError('Network error');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      <Button title="Login" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 8, borderRadius: 4 },
});`
        }
      ]
    }
  },

  module5: {
    security: {
      title: 'Security Best Practices',
      sections: [
        {
          heading: 'Keeping the app safe',
          content: [
            'Mobile apps run on devices you do not control, so security matters from day one. A few practices every production app should follow:',
            '<strong>1. Store secrets in the Keychain/Keystore, not AsyncStorage.</strong> Tokens, API keys, and passwords belong in <strong>secure storage</strong>, where they are encrypted and can require biometric authentication.<br><strong>2. Use HTTPS, always.</strong> Never send data over plain HTTP. On iOS, enable <strong>App Transport Security</strong> with no exceptions; on Android, use <code>usesCleartextTraffic="false"</code>.<br><strong>3. Never hardcode secrets in source.</strong> API keys in <code>config.js</code> ship inside the app binary — anyone can extract them. Put secrets on the backend and proxy through it, or use a secrets manager.<br><strong>4. Validate on the backend too.</strong> Client-side validation is for UX, not security. The backend must re-check everything.<br><strong>5. Obfuscate the JS bundle</strong> in production (Hermes does this automatically in modern React Native) to make reverse engineering harder.<br><strong>6. Pin certificates</strong> for highly sensitive apps to prevent man-in-the-middle attacks.',
            'For biometric login (Face ID, fingerprint), wrap the Keychain access with <code>accessControl: BIOMETRY_CURRENT_SET</code> so the device prompts the user before releasing a secret.'
          ],
          list: [
            'Store secrets in <strong>Secure Storage</strong> (Keychain/Keystore), not AsyncStorage.',
            'Use <strong>HTTPS only</strong> — never plain HTTP.',
            'Never hardcode secrets in source — they ship inside the app binary.',
            'Validate on the backend too — client validation is for UX, not security.',
            '<strong>Obfuscate</strong> the JS bundle (Hermes) to slow reverse engineering.',
            '<strong>Certificate pinning</strong> for highly sensitive apps (prevents MITM).',
            'Use biometrics (Face ID/fingerprint) to gate access to secrets.'
          ],
          code: `import * as Keychain from 'react-native-keychain';

// Store a token with biometric protection
const saveToken = async (token) => {
  await Keychain.setGenericPassword('token', token, {
    accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET,
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
  });
};

// Read it back (prompts for Face ID/fingerprint)
const readToken = async () => {
  const creds = await Keychain.getGenericPassword();
  return creds ? creds.password : null;
};

// Wipe everything on logout
const wipe = async () => {
  await Keychain.resetGenericPassword();
};`
        }
      ]
    },
    'dev-menu': {
      title: 'Dev Menu & Debugging',
      sections: [
        {
          heading: 'Tools for finding bugs',
          content: [
            'React Native gives you a set of tools for debugging. The <strong>Dev Menu</strong> is the starting point — open it with <code>⌘D</code> on the iOS simulator, <code>Ctrl+M</code> or a device shake on Android. From it you can reload the app, toggle the inspector, enable remote JS debugging, and more.',
            'The most useful debugging tools:',
            '<strong>Fast Refresh</strong> — the default; edits to your code reload instantly, keeping component state. This is what makes React Native development fast.<br><strong>React DevTools</strong> — inspect the component tree and props/state. Run <code>npx react-devtools</code> and connect.<br><strong>Flipper</strong> — a desktop app for inspecting the network traffic, the AsyncStorage contents, the layout, Redux state, and logs all in one place. The standard tool for React Native debugging.<br><strong>Reactotron</strong> — an alternative to Flipper for inspecting Redux, async storage, and navigation.<br><strong><code>console.log</code></strong> — output appears in the Metro bundler terminal (or in Flipper/Reactotron). For long objects, use <code>console.log(JSON.stringify(obj, null, 2))</code>.',
            'For crashes and freezes, the red error screen (dev) or the device logs (production) show the stack trace. To reload the app from code (e.g. after a deep config change), use <code>DevSettings.reload()</code>.'
          ],
          list: [
            'Open the <strong>Dev Menu</strong>: <code>⌘D</code> (iOS sim), <code>Ctrl+M</code> or shake (Android).',
            '<strong>Fast Refresh</strong> — instant reload with state preserved; the default dev experience.',
            '<strong>React DevTools</strong> — inspect components, props, state (<code>npx react-devtools</code>).',
            '<strong>Flipper</strong> — network, storage, layout, Redux, logs in one desktop app.',
            '<strong>Reactotron</strong> — alternative for Redux/storage/navigation inspection.',
            '<code>console.log</code> — output in the Metro terminal or Flipper/Reactotron.',
            '<code>DevSettings.reload()</code> — reload the app from code.'
          ],
          code: `import { DevSettings } from 'react-native';

// Reload the app from code (use sparingly)
const reloadApp = () => DevSettings.reload();

// Classic console debugging — shows in Metro/Flipper
const debug = (label, value) => {
  console.log(label, JSON.stringify(value, null, 2));
};

// In a component
useEffect(() => {
  debug('user on mount', user);
}, [user]);`
        }
      ]
    },
    'native-modules': {
      title: 'Native Modules',
      sections: [
        {
          heading: 'Reaching beyond JavaScript',
          content: [
            'React Native covers a lot, but sometimes you need a platform feature it does not expose — a Bluetooth API, a sensor, a background task, a third-party SDK. That is what <strong>Native Modules</strong> are for: you write a bit of native code (Java/Kotlin on Android, Objective-C/Swift on iOS), expose methods to JavaScript, and call them from your React Native code.',
            'The two halves:',
            "<strong>Native side</strong> — a class that extends <code>ReactContextBaseJavaModule</code> (Android) or implements <code>RCTBridgeModule</code> (iOS). Methods you want to call from JS are annotated with <code>@ReactMethod</code> (Android) or declared in an <code>RCT_EXTERN_METHOD</code> (iOS).<br><strong>JavaScript side</strong> — <code>NativeModules.MyModule.showToast('hello')</code> to call the native method. For most modules, the community has already published a JS wrapper that makes the API feel native.",
            'Most apps never write a native module — the community libraries on npm cover the common needs (camera, location, notifications, biometrics). You write your own when you need something truly custom or a proprietary SDK.',
            'Modern React Native also offers the <strong>new architecture (Fabric/TurboModules)</strong>, which is faster and type-safe via code generation. For new native modules, prefer the TurboModules approach.'
          ],
          list: [
            '<strong>Native Modules</strong> — call native platform code from JavaScript.',
            'Write native code in Java/Kotlin (Android) or Objective-C/Swift (iOS).',
            'Expose methods with <code>@ReactMethod</code> (Android) / <code>RCT_EXTERN_METHOD</code> (iOS).',
            'Call from JS: <code>NativeModules.MyModule.method()</code>.',
            'Most apps use community libraries instead of writing their own.',
            'Write your own only for custom/proprietary needs.',
            'New architecture (TurboModules) is faster and type-safe — prefer it for new modules.'
          ],
          code: `// ---- Android: MyNativeModule.java ----
package com.myapp;

import com.facebook.react.bridge.*;
import android.widget.Toast;

@ReactModule(name = "MyNativeModule")
public class MyNativeModule extends ReactContextBaseJavaModule {
  @ReactMethod
  public void showToast(String message) {
    Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
  }
}

// ---- iOS: MyNativeModule.m ----
#import <React/RCTBridgeModule.h>
@implementation MyNativeModule
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(showToast:(NSString *)message) {
  dispatch_async(dispatch_get_main_queue(), ^{
    // show a native iOS alert or HUD
  });
}
@end

// ---- JavaScript side ----
import { NativeModules } from 'react-native';
const { MyNativeModule } = NativeModules;

const press = () => MyNativeModule.showToast('Hello from native!');`
        }
      ]
    },
    'interview-questions': {
      title: 'Interview Questions',
      sections: [
        {
          heading: 'Common React Native interview questions',
          content: [
            'These are the questions that come up most often in React Native interviews. Try to answer each one out loud before reading the hint — explaining concepts clearly is a skill worth practicing.',
            'For each, the answer should explain <em>what</em> it is, <em>why</em> it matters, and give a quick example. Interviewers are checking whether you understand the trade-offs, not just the syntax.'
          ],
          list: [
            '<strong>Fundamental</strong> — What is the difference between React and React Native?',
            'How does React Native render native UI on different platforms?',
            'What are the benefits and limitations of React Native?',
            '<strong>Components</strong> — Explain the difference between <code>FlatList</code> and <code>ScrollView</code>.',
            'What are native modules? When should you use them?',
            'How would you persist data in a React Native app?',
            '<strong>Advanced</strong> — Explain how navigation works in React Native.',
            'How can you secure user authentication and tokens?',
            'What are the performance considerations in React Native?',
            'How do you debug React Native applications?',
            '<strong>Expert</strong> — Explain the React Native bridge and how it works.',
            'How would you implement code splitting in React Native?',
            'What strategies would you use for handling offline functionality?',
            'How do you handle deep linking and universal links?',
            'Explain the difference between Expo and React Native CLI.',
            '<strong>Scenario</strong> — How would you optimize a React Native app for performance?',
            'Describe how you would implement push notifications.',
            'How would you handle app state management in a large application?',
            'What security measures would you implement in a production app?',
            'How would you handle app updates and version management?'
          ]
        }
      ]
    },
    'project-examples': {
      title: 'Project Examples',
      sections: [
        {
          heading: 'Apps to build while you learn',
          content: [
            'The best way to learn React Native is to build apps. Each project below targets a specific set of skills — start at the top and work down. By the time you build the advanced ones, you will be job-ready.',
            'Each project lists the main concepts it teaches, so you can pick the one that fills your knowledge gaps.'
          ],
          list: [
            '<strong>Beginner</strong>',
            '<strong>To-Do App</strong> — CRUD with AsyncStorage, form validation, list management.',
            '<strong>Calculator App</strong> — state management, responsive layout with Flexbox.',
            '<strong>Weather App</strong> — fetch a REST API, location permissions, data display.',
            '<strong>Intermediate</strong>',
            '<strong>Login + Registration</strong> — auth flow with JWT, form validation, secure storage.',
            '<strong>News Reader</strong> — REST API with infinite scroll, search, offline reading.',
            '<strong>Photo Gallery</strong> — camera integration, image manipulation, cloud storage.',
            '<strong>Music Player</strong> — audio playback, playlist management, media controls.',
            '<strong>Advanced</strong>',
            '<strong>E-commerce App</strong> — catalog, cart, payment integration, order tracking.',
            '<strong>Social Media App</strong> — profiles, posts, comments, real-time updates.',
            '<strong>Chat Application</strong> — real-time messaging with WebSockets, file sharing, push notifications.',
            '<strong>Fitness Tracker</strong> — health data, GPS tracking, charts, wearable integration.',
            '<strong>Enterprise</strong>',
            '<strong>Banking App</strong> — biometric auth, transaction history, QR payments, heavy security.',
            '<strong>Learning Management System</strong> — video streaming, progress tracking, quizzes, offline content.',
            '<strong>Delivery App</strong> — real-time tracking, maps, route optimization, driver management.'
          ]
        }
      ]
    },
    'best-practices': {
      title: 'Best Practices & Tips',
      sections: [
        {
          heading: 'Habits that pay off',
          content: [
            'A few habits make React Native code more maintainable, safer, and faster — worth picking up from the start rather than unlearning bad ones later.',
            '<strong>1. Use TypeScript.</strong> Create new projects with <code>npx react-native init MyApp --template react-native-template-typescript</code> (or use the TS template in the modern CLI). Define <code>Props</code> and state with interfaces; use <code>useState&lt;Type&gt;</code>. The compiler catches a whole class of bugs before you run the app.<br><strong>2. Test your code.</strong> Use <strong>Jest</strong> for unit tests and <strong>React Native Testing Library</strong> for component tests. Aim for coverage of business logic, critical UI flows, and API integration (with the network mocked).<br><strong>3. Use the right list component.</strong> <code>ScrollView</code> for small content, <code>FlatList</code> for large lists, <code>SectionList</code> for grouped data. Wrong choice = jank or memory blowups.<br><strong>4. Keep components small and focused.</strong> One component per file; extract reusable bits into their own components or custom hooks.<br><strong>5. Name things well.</strong> <code>handleLogin</code>, not <code>fn1</code>. Self-documenting names save hours later.<br><strong>6. Handle loading and error states everywhere.</strong> A spinner while waiting; a clear message if the request fails. Users notice when an app feels broken because nobody handled the error case.'
          ],
          list: [
            '<strong>TypeScript</strong> — start new projects with the TS template; type props and state.',
            '<strong>Test</strong> with Jest + React Native Testing Library; mock the network.',
            '<strong>Pick the right list</strong>: ScrollView (small), FlatList (large), SectionList (grouped).',
            'Keep components <strong>small and focused</strong>; one per file.',
            'Extract reusable logic into <strong>custom hooks</strong>.',
            'Name things clearly — <code>handleLogin</code>, not <code>fn1</code>.',
            'Always handle <strong>loading and error states</strong> — users notice when you do not.',
            'Run <code>npx react-native doctor</code> before reporting a setup bug.'
          ],
          code: `// TypeScript props + state
type Props = { userId: string };
const Profile = ({ userId }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  // ...
};

// A custom hook — reusable, testable
import { useEffect, useState } from 'react';
const useUser = (id: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(\`/api/users/\${id}\`)
      .then(r => r.json())
      .then(u => { setUser(u); setLoading(false); });
  }, [id]);
  return { user, loading };
};

// Usage
const Header = ({ userId }) => {
  const { user, loading } = useUser(userId);
  if (loading) return <ActivityIndicator />;
  return <Text>{user.name}</Text>;
};`
        }
      ]
    }
  }
};