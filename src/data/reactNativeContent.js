// Auto-generated from trinits-web-angular tutorial sources
// Generated: 2026-06-13T02:26:18.130Z

export const reactNativeContent = {
  module1: {
    'environment-setup': {
      title: 'Environment Setup',
      sections: [
        {
          heading: 'Environment Setup',
          content: [
            '<strong>Common Setup Issues:</strong> • Android emulator not detected? Check AVD Manager and ANDROID_HOME path • iOS build fails? Ensure Xcode Command Line Tools are installed • Metro bundler issues? Clear cache with <code>npx react-native start --reset-cache</code> • Use <code>npx react-native doctor</code> for automated troubleshooting'
          ],
          list: [
            '<span class="badge bg-primary me-2">Essential</span> Install <strong>Node.js (LTS)</strong> from <a href="https://nodejs.org" target="_blank">nodejs.org</a> for best compatibility and package management.',
            '<strong>Watchman</strong> (macOS): <code>brew install watchman</code> - Improves file watching performance during development.',
            '<strong>Xcode</strong> (macOS): Download from App Store, install Command Line Tools, and configure iOS simulator for iOS development.',
            '<strong>Android Studio</strong> : Install with Android Virtual Device (AVD) and SDK tools. Set ANDROID_HOME environment variable.',
            '<strong>JDK 11+</strong> : Required for Android builds. Use <code>brew install openjdk@11</code> on macOS.',
            '<span class="badge bg-success me-2">CLI Tools</span> <strong>Install CLI:</strong> <code>npm install -g react-native-cli</code> (for legacy projects; prefer <code>npx</code> for new projects).',
            '<strong>Create App:</strong> <code>npx react-native init MyApp</code> - Creates a new React Native project.',
            '<strong>Run Android:</strong> <code>npx react-native run-android</code> - Builds and runs on Android device/emulator.',
            '<strong>Run iOS:</strong> <code>npx react-native run-ios</code> (macOS only) - Builds and runs on iOS simulator.',
            '<strong>Health Check:</strong> <code>npx react-native doctor</code> - Diagnoses common setup issues.',
            '<span class="badge bg-warning text-dark me-2">Alternative</span> <strong>Expo CLI:</strong> For rapid prototyping, use <code>npm install -g expo-cli</code> and <code>expo init MyApp</code> (no native code access).',
            '<strong>Version Control:</strong> Use proper <code>.gitignore</code> to exclude <code>node_modules</code> , <code>android/build</code> , <code>ios/build</code> .'
          ],
          code: `npx react-native init MyApp
cd MyApp
npx react-native run-android  # or run-ios`
        }
      ]
    },
    'hello-world': {
      title: 'Hello World',
      sections: [
        {
          heading: 'Hello World',
          list: [
            '<span class="badge bg-success me-2">Objective</span> <strong>Goal:</strong> Display a basic message using React Native components and understand the basic structure.',
            '<strong>View Component:</strong> Acts like a container (similar to <code><div></code> in HTML) for layout and styling.',
            '<strong>Text Component:</strong> Used to display textual content. All text must be wrapped in <code><Text></code> components.',
            '<strong>JSX Structure:</strong> Use HTML-like syntax in JavaScript. Must return a single parent element.',
            '<span class="badge bg-warning text-dark me-2">Important</span> <strong>Export Default:</strong> Use <code>export default App;</code> to make your component the main entry point.'
          ],
          code: `import { View, Text } from 'react-native';

const App = () => (
  <View>
    <Text>Hello, React Native!</Text>
  </View>
);

export default App;`
        }
      ]
    },
    'core-components': {
      title: 'Core Components',
      sections: [
        {
          heading: 'Core Components',
          content: [
            '<strong>💡 Core Concept:</strong> React Native provides pre-built components that map to native platform UI elements. Core components work across platforms, while Native components are platform-specific for enhanced functionality.'
          ],
          list: [
            '<span class="badge bg-primary me-2">Essential</span> <strong>View:</strong> The fundamental building block - like a <code><div></code> in HTML. Used for layout, styling, and grouping other components.',
            '<strong>Text:</strong> Displays text content. All text must be wrapped in <code><Text></code> components. Supports nesting and styling.',
            '<strong>Image:</strong> Displays local and remote images with resize modes and lazy loading capabilities.',
            '<span class="badge bg-success me-2">Input</span> <strong>TextInput:</strong> Handles user text input with keyboard types, validation, and formatting options.',
            '<strong>ScrollView:</strong> Makes content scrollable when it exceeds screen boundaries. Use for small lists.',
            '<strong>FlatList:</strong> High-performance list component for large datasets with virtualization and lazy loading.',
            '<span class="badge bg-warning text-dark me-2">Interactive</span> <strong>Button:</strong> Basic button component with platform-specific styling and press handling.',
            '<strong>TouchableOpacity:</strong> Wrapper for making any component touchable with opacity feedback.',
            '<strong>Modal:</strong> Displays content overlay above the main interface for dialogs and popups.',
            '<span class="badge bg-info text-dark me-2">Status</span> <strong>ActivityIndicator:</strong> Shows loading spinner with customizable size and color.',
            '<span class="badge bg-danger me-2">iOS Only</span> <strong>ActionSheetIOS:</strong> Native iOS action sheet for presenting choices to users.',
            '<strong>DatePickerIOS:</strong> iOS-specific date and time picker component.',
            '<span class="badge bg-success me-2">Android Only</span> <strong>DrawerLayoutAndroid:</strong> Android-specific drawer navigation component.',
            '<strong>ProgressBarAndroid:</strong> Android-style progress indicator with different modes.',
            '<span class="badge bg-primary me-2">Cross-Platform</span> <strong>Switch:</strong> Toggle switch component that adapts to platform design guidelines.',
            '<strong>Slider:</strong> Adjustable value selector that follows platform conventions.',
            '<strong>Picker:</strong> Dropdown selection component (deprecated in favor of community alternatives).',
            '<strong>View:</strong> Container/Layout (like HTML div)',
            '<strong>Text:</strong> Text Content (like HTML span/p)',
            '<strong>Image:</strong> Media Display (like HTML img)',
            '<strong>TextInput:</strong> User Input (like HTML input)',
            '<strong>ScrollView:</strong> Scrollable Container (like CSS overflow: scroll)',
            '<strong>FlatList:</strong> Optimized List (like virtualized table)',
            '<span class="badge bg-info text-dark me-2">Performance</span> <strong>Native Driver:</strong> Components support native driver for 60fps animations without JS bridge overhead.',
            '<strong>Ref Access:</strong> Use refs to directly access native component methods and properties.',
            '<strong>Event Handling:</strong> All components support gesture and touch events with synthetic event objects.',
            `<span class="badge bg-warning text-dark me-2">Styling</span> <strong>Style Inheritance:</strong> Limited inheritance compared to web; styles don't cascade down automatically.`,
            '<strong>Platform Adaptation:</strong> Components automatically adapt to platform design patterns and behaviors.',
            '<strong>Accessibility:</strong> Built-in accessibility support with <code>accessible</code> , <code>accessibilityLabel</code> , and <code>accessibilityRole</code> props.',
            '<strong>Performance:</strong> Use FlatList for large datasets instead of ScrollView with map',
            '<strong>Accessibility:</strong> Always provide accessibilityLabel for interactive components',
            '<strong>Platform Consistency:</strong> Let native components handle platform-specific styling',
            '<strong>Memory Management:</strong> Use keys for list items and avoid inline functions in render',
            '<strong>Image Optimization:</strong> Specify dimensions for images to prevent layout shifts',
            '<strong>Input Validation:</strong> Implement proper validation and error states for TextInput',
            '<strong>Touch Feedback:</strong> Use TouchableOpacity for better user experience than Button',
            '<strong>Modal Usage:</strong> Always provide a way to close modals and handle Android back button',
            `<strong>Q:</strong> What's the difference between View and ScrollView?`,
            '<strong>A:</strong> View is a static container; ScrollView makes content scrollable but renders all items',
            '<strong>Q:</strong> When to use FlatList vs ScrollView?',
            '<strong>A:</strong> FlatList for large datasets (virtualized), ScrollView for small content',
            '<strong>Q:</strong> How do you handle platform-specific components?',
            '<strong>A:</strong> Use Platform.OS checks or create separate .ios.js and .android.js files',
            '<strong>Q:</strong> What are the performance implications of inline functions in render?',
            '<strong>A:</strong> Creates new function instances on every render, causing unnecessary re-renders'
          ],
          code: `import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  ActivityIndicator,
  Switch,
  FlatList,
  StyleSheet,
} from 'react-native';

// Basic Component Usage
const BasicComponents = () => {
  const [text, setText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isEnabled, setEnabled] = useState(false);

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const handlePress = () => {
    Alert.alert('Button Pressed', 'Hello from React Native!');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <Text style={styles.listItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Basic View and Text */}
      <View style={styles.section}>
        <Text style={styles.heading}>Core Components Demo</Text>
        <Text style={styles.subtext}>
          This demonstrates essential React Native components
        </Text>
      </View>

      {/* Image Component */}
      <View style={styles.section}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/local-image.png')}
          style={styles.localImage}
        />
      </View>

      {/* TextInput Component */}
      <View style={styles.section}>
        <Text style={styles.label}>Enter your name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type here..."
          value={text}
          onChangeText={setText}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <Text style={styles.output}>You typed: {text}</Text>
      </View>

      {/* Button and TouchableOpacity */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Custom Button</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Show Modal</Text>
        </TouchableOpacity>
      </View>

      {/* Switch Component */}
      <View style={styles.section}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Enable notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={setEnabled}
            value={isEnabled}
          />
        </View>
      </View>

      {/* ActivityIndicator */}
      <View style={styles.section}>
        {isLoading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        <TouchableOpacity
          style={styles.loadingButton}
          onPress={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 2000);
          }}
        >
          <Text style={styles.buttonText}>Start Loading</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList Component */}
      <View style={styles.section}>
        <Text style={styles.label}>FlatList Example:</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />
      </View>

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Modal Example</Text>
            <Text style={styles.modalText}>
              This is a modal overlay that demonstrates the Modal component.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

// Platform-Specific Component Example
import { Platform } from 'react-native';

const PlatformSpecificComponents = () => {
  if (Platform.OS === 'ios') {
    return (
      <View>
        <Text>iOS-specific components here</Text>
        {/* Use ActionSheetIOS, DatePickerIOS, etc. */}
      </View>
    );
  } else {
    return (
      <View>
        <Text>Android-specific components here</Text>
        {/* Use DrawerLayoutAndroid, ProgressBarAndroid, etc. */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  output: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 16,
  },
  localImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  modalButton: {
    backgroundColor: '#34C759',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  loadingButton: {
    backgroundColor: '#FF9500',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatList: {
    maxHeight: 150,
    marginTop: 8,
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 6,
    minWidth: 100,
    alignItems: 'center',
  },
});`
        }
      ]
    },
    'native-components': {
      title: 'Native Components',
      sections: [
        {
          heading: '3. Core & Native Components',
          content: [
            '<strong>💡 Core Concept:</strong> React Native provides pre-built components that map to native platform UI elements. Core components work across platforms, while Native components are platform-specific for enhanced functionality.'
          ],
          list: [
            '<span class="badge bg-primary me-2">Essential</span> <strong>View:</strong> The fundamental building block - like a <code><div></code> in HTML. Used for layout, styling, and grouping other components.',
            '<strong>Text:</strong> Displays text content. All text must be wrapped in <code><Text></code> components. Supports nesting and styling.',
            '<strong>Image:</strong> Displays local and remote images with resize modes and lazy loading capabilities.',
            '<span class="badge bg-success me-2">Input</span> <strong>TextInput:</strong> Handles user text input with keyboard types, validation, and formatting options.',
            '<strong>ScrollView:</strong> Makes content scrollable when it exceeds screen boundaries. Use for small lists.',
            '<strong>FlatList:</strong> High-performance list component for large datasets with virtualization and lazy loading.',
            '<span class="badge bg-warning text-dark me-2">Interactive</span> <strong>Button:</strong> Basic button component with platform-specific styling and press handling.',
            '<strong>TouchableOpacity:</strong> Wrapper for making any component touchable with opacity feedback.',
            '<strong>Modal:</strong> Displays content overlay above the main interface for dialogs and popups.',
            '<span class="badge bg-info text-dark me-2">Status</span> <strong>ActivityIndicator:</strong> Shows loading spinner with customizable size and color.',
            '<span class="badge bg-danger me-2">iOS Only</span> <strong>ActionSheetIOS:</strong> Native iOS action sheet for presenting choices to users.',
            '<strong>DatePickerIOS:</strong> iOS-specific date and time picker component.',
            '<span class="badge bg-success me-2">Android Only</span> <strong>DrawerLayoutAndroid:</strong> Android-specific drawer navigation component.',
            '<strong>ProgressBarAndroid:</strong> Android-style progress indicator with different modes.',
            '<span class="badge bg-primary me-2">Cross-Platform</span> <strong>Switch:</strong> Toggle switch component that adapts to platform design guidelines.',
            '<strong>Slider:</strong> Adjustable value selector that follows platform conventions.',
            '<strong>Picker:</strong> Dropdown selection component (deprecated in favor of community alternatives).',
            '<strong>View:</strong> Container/Layout (like HTML div)',
            '<strong>Text:</strong> Text Content (like HTML span/p)',
            '<strong>Image:</strong> Media Display (like HTML img)',
            '<strong>TextInput:</strong> User Input (like HTML input)',
            '<strong>ScrollView:</strong> Scrollable Container (like CSS overflow: scroll)',
            '<strong>FlatList:</strong> Optimized List (like virtualized table)',
            '<span class="badge bg-info text-dark me-2">Performance</span> <strong>Native Driver:</strong> Components support native driver for 60fps animations without JS bridge overhead.',
            '<strong>Ref Access:</strong> Use refs to directly access native component methods and properties.',
            '<strong>Event Handling:</strong> All components support gesture and touch events with synthetic event objects.',
            `<span class="badge bg-warning text-dark me-2">Styling</span> <strong>Style Inheritance:</strong> Limited inheritance compared to web; styles don't cascade down automatically.`,
            '<strong>Platform Adaptation:</strong> Components automatically adapt to platform design patterns and behaviors.',
            '<strong>Accessibility:</strong> Built-in accessibility support with <code>accessible</code> , <code>accessibilityLabel</code> , and <code>accessibilityRole</code> props.',
            '<strong>Performance:</strong> Use FlatList for large datasets instead of ScrollView with map',
            '<strong>Accessibility:</strong> Always provide accessibilityLabel for interactive components',
            '<strong>Platform Consistency:</strong> Let native components handle platform-specific styling',
            '<strong>Memory Management:</strong> Use keys for list items and avoid inline functions in render',
            '<strong>Image Optimization:</strong> Specify dimensions for images to prevent layout shifts',
            '<strong>Input Validation:</strong> Implement proper validation and error states for TextInput',
            '<strong>Touch Feedback:</strong> Use TouchableOpacity for better user experience than Button',
            '<strong>Modal Usage:</strong> Always provide a way to close modals and handle Android back button',
            `<strong>Q:</strong> What's the difference between View and ScrollView?`,
            '<strong>A:</strong> View is a static container; ScrollView makes content scrollable but renders all items',
            '<strong>Q:</strong> When to use FlatList vs ScrollView?',
            '<strong>A:</strong> FlatList for large datasets (virtualized), ScrollView for small content',
            '<strong>Q:</strong> How do you handle platform-specific components?',
            '<strong>A:</strong> Use Platform.OS checks or create separate .ios.js and .android.js files',
            '<strong>Q:</strong> What are the performance implications of inline functions in render?',
            '<strong>A:</strong> Creates new function instances on every render, causing unnecessary re-renders'
          ],
          code: `import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  ActivityIndicator,
  Switch,
  FlatList,
  StyleSheet,
} from 'react-native';

// Basic Component Usage
const BasicComponents = () => {
  const [text, setText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isEnabled, setEnabled] = useState(false);

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const handlePress = () => {
    Alert.alert('Button Pressed', 'Hello from React Native!');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <Text style={styles.listItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Basic View and Text */}
      <View style={styles.section}>
        <Text style={styles.heading}>Core Components Demo</Text>
        <Text style={styles.subtext}>
          This demonstrates essential React Native components
        </Text>
      </View>

      {/* Image Component */}
      <View style={styles.section}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/local-image.png')}
          style={styles.localImage}
        />
      </View>

      {/* TextInput Component */}
      <View style={styles.section}>
        <Text style={styles.label}>Enter your name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type here..."
          value={text}
          onChangeText={setText}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <Text style={styles.output}>You typed: {text}</Text>
      </View>

      {/* Button and TouchableOpacity */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Custom Button</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Show Modal</Text>
        </TouchableOpacity>
      </View>

      {/* Switch Component */}
      <View style={styles.section}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Enable notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={setEnabled}
            value={isEnabled}
          />
        </View>
      </View>

      {/* ActivityIndicator */}
      <View style={styles.section}>
        {isLoading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        <TouchableOpacity
          style={styles.loadingButton}
          onPress={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 2000);
          }}
        >
          <Text style={styles.buttonText}>Start Loading</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList Component */}
      <View style={styles.section}>
        <Text style={styles.label}>FlatList Example:</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />
      </View>

      {/* Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Modal Example</Text>
            <Text style={styles.modalText}>
              This is a modal overlay that demonstrates the Modal component.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

// Platform-Specific Component Example
import { Platform } from 'react-native';

const PlatformSpecificComponents = () => {
  if (Platform.OS === 'ios') {
    return (
      <View>
        <Text>iOS-specific components here</Text>
        {/* Use ActionSheetIOS, DatePickerIOS, etc. */}
      </View>
    );
  } else {
    return (
      <View>
        <Text>Android-specific components here</Text>
        {/* Use DrawerLayoutAndroid, ProgressBarAndroid, etc. */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  output: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 16,
  },
  localImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  modalButton: {
    backgroundColor: '#34C759',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  loadingButton: {
    backgroundColor: '#FF9500',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatList: {
    maxHeight: 150,
    marginTop: 8,
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 6,
    minWidth: 100,
    alignItems: 'center',
  },
});`
        }
      ]
    },
    jsx: {
      title: 'JSX',
      sections: [
        {
          heading: 'JSX',
          list: [
            '<span class="badge bg-info text-dark me-2">Syntax</span> <strong>JSX:</strong> HTML-like syntax inside JavaScript, compiled to React.createElement() function calls.',
            '<strong>JavaScript Expressions:</strong> Wrap JavaScript code inside <code>{}</code> curly braces for dynamic content.',
            '<strong>Single Root Element:</strong> JSX expressions must return exactly one parent element or use React Fragments.',
            '<strong>Naming Convention:</strong> Use camelCase for attributes (e.g., <code>onPress</code> , <code>backgroundColor</code> ).',
            '<strong>React Fragments:</strong> Use <code><></></code> for grouping elements without adding extra DOM nodes.',
            '<span class="badge bg-warning text-dark me-2">Best Practice</span> Use JSX comments <code>{/* ... */}</code> for documentation and conditional rendering with ternary operators.'
          ],
          code: `const App = () => (
  <View>
    <Text>Hello</Text>
    {isLoggedIn ? <Text>Welcome!</Text> : <Text>Please log in</Text>}
  </View>
);`
        }
      ]
    },
    props: {
      title: 'Props',
      sections: [
        {
          heading: 'Props',
          list: [
            '<span class="badge bg-primary me-2">Definition</span> <strong>Props:</strong> Short for "properties", used to pass data from parent to child components. Think of them as function parameters.',
            '<strong>Read-Only/Immutable:</strong> Props are immutable in the child component and follow one-way data flow from parent to child.',
            '<strong>Custom Props:</strong> You can define and use custom props in your component. Use TypeScript interfaces for type safety.',
            '<span class="badge bg-success me-2">Best Practice</span> <strong>Destructuring:</strong> Preferred way to access props inside functional components for cleaner code.',
            '<strong>Default Props:</strong> Use default parameters or <code>defaultProps</code> to provide fallback values when props are not passed.',
            '<strong>Prop Types:</strong> Use TypeScript or PropTypes for runtime type checking and better development experience.',
            '<span class="badge bg-warning text-dark me-2">Performance</span> <strong>Props Drilling:</strong> Avoid passing props through multiple levels. Use Context API or state management for deep nesting.',
            '<strong>Children Prop:</strong> Special prop that allows passing JSX elements as children to components for composition.'
          ],
          code: `// Basic Props Usage
const Greeting = ({name, age = 18}) => {
  return (
    <View>
      <Text>Hello, {name}!</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};

// TypeScript Interface
interface GreetingProps {
  name: string;
  age?: number;
  isVip?: boolean;
}

const TypedGreeting: React.FC<GreetingProps> = ({name, age = 18, isVip}) => (
  <View>
    <Text style={{fontWeight: isVip ? 'bold' : 'normal'}}>
      Hello, {name}! Age: {age}
    </Text>
  </View>
);

// Usage with Children
<Greeting name="React Native">
  <Text>This is a child component</Text>
</Greeting>`
        }
      ]
    },
    state: {
      title: 'State',
      sections: [
        {
          heading: 'State',
          list: [
            '<span class="badge bg-primary me-2">Core Concept</span> <strong>State:</strong> A built-in object that stores component data that may change over time and affects rendering.',
            '<strong>useState Hook:</strong> A React Hook used to manage local component state in functional components.',
            '<strong>Triggers Re-render:</strong> Updating state causes the component to re-render and update the UI accordingly.',
            '<span class="badge bg-success me-2">Encapsulation</span> <strong>Component Level:</strong> Each component manages its own state independently of other components.',
            '<strong>State Updates:</strong> Always use setter functions; never mutate state directly. State updates are asynchronous.',
            '<strong>Complex State:</strong> Use <code>useReducer</code> for complex state logic with multiple sub-values or dependencies.',
            '<span class="badge bg-warning text-dark me-2">Performance</span> <strong>Optimization:</strong> Use <code>useCallback</code> and <code>useMemo</code> to prevent unnecessary re-renders.',
            '<strong>State Lifting:</strong> Move state up to parent component when multiple children need to share the same data.'
          ],
          code: `import React, { useState, useReducer, useCallback } from 'react';

// Basic useState example
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={increment} />
    </View>
  );
};

// Complex state with useReducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', text });
    setText('');
  };

  return (
    <View>
      {/* Render todos and input */}
    </View>
  );
};`
        }
      ]
    }
  },
  module2: {
    'handling-text-input': {
      title: 'Handling Text Input',
      sections: [
        {
          heading: 'Handling Text Input',
          list: [
            '<span class="badge bg-primary me-2">Core Component</span> <strong>TextInput:</strong> Essential component for receiving user input in React Native applications.',
            '<strong>Controlled Component:</strong> Use state to manage the value of the input for two-way data binding.',
            '<strong>onChangeText:</strong> Primary event handler for tracking text changes (recommended over onChange).',
            '<span class="badge bg-success me-2">UX</span> <strong>Placeholder:</strong> Use placeholder text to provide hints and improve user experience.',
            '<strong>Keyboard Types:</strong> Use appropriate <code>keyboardType</code> props (numeric, email-address, phone-pad, etc.).',
            '<strong>Validation:</strong> Implement real-time validation with error states and user feedback.',
            '<span class="badge bg-warning text-dark me-2">Accessibility</span> <strong>Accessibility:</strong> Use <code>accessibilityLabel</code> and <code>accessibilityHint</code> for screen readers.',
            '<strong>Security:</strong> Use <code>secureTextEntry</code> for passwords and sensitive data input.',
            '<strong>Performance:</strong> Debounce text changes for expensive operations like API calls.'
          ],
          code: `import React, { useState, useCallback } from 'react';
import { TextInput, Text, View } from 'react-native';

const MyInput = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Type something"
        onChangeText={(value) => setText(value)}
        value={text}
        style={{ borderWidth: 1, padding: 10 }}
      />
      <Text>You typed: {text}</Text>
    </View>
  );
};`
        }
      ]
    },
    scrollview: {
      title: 'ScrollView',
      sections: [
        {
          heading: 'ScrollView',
          list: [
            '<strong>ScrollView:</strong> A generic scrolling container that can hold multiple components and views.',
            'Useful when the content is larger than the screen and you want to scroll vertically or horizontally.',
            'Not recommended for large lists; use FlatList instead for better performance.',
            '<strong>Props:</strong> <code>horizontal</code> , <code>showsVerticalScrollIndicator</code> , <code>refreshControl</code> , etc.'
          ],
          code: `import { ScrollView, Text } from 'react-native';

const MyScroll = () => (
  <ScrollView>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
    {/* Add more items here */}
  </ScrollView>
);`
        }
      ]
    },
    'listview-flatlist': {
      title: 'ListView / FlatList',
      sections: [
        {
          heading: 'ListView / FlatList',
          content: [
            '<strong>🎯 Performance Focus:</strong> FlatList is the go-to component for rendering large, scrollable lists efficiently. It uses virtualization to render only visible items, making it essential for performance-critical applications.'
          ],
          list: [
            '<span class="badge bg-primary me-2">High Performance</span> <strong>Virtualization:</strong> Only renders visible items plus a small buffer, dramatically improving performance for large datasets.',
            '<strong>Memory Efficiency:</strong> Automatically recycles item views as user scrolls, preventing memory bloat with thousands of items.',
            '<strong>Built-in Features:</strong> Pull-to-refresh, infinite scrolling, separator components, empty state handling, and more.',
            '<span class="badge bg-success me-2">Cross-Platform</span> <strong>Platform Optimized:</strong> Uses native list components (UITableView on iOS, RecyclerView on Android) for optimal performance.',
            '<strong>Flexible Layout:</strong> Supports vertical/horizontal scrolling, multi-column grids, and custom item layouts.',
            '<strong>data:</strong> Array of items to render. Must be an array-like structure.',
            '<strong>renderItem:</strong> Function that returns JSX for each item. Receives <code>{item, index}</code> .',
            '<strong>keyExtractor:</strong> Function to generate unique keys. Critical for performance and state management.',
            '<span class="badge bg-warning text-dark me-2">Performance</span> <strong>getItemLayout:</strong> Pre-calculate item dimensions for better scroll performance.',
            '<strong>horizontal:</strong> Enable horizontal scrolling. Useful for carousels and image galleries.',
            '<strong>numColumns:</strong> Create grid layouts with multiple columns.',
            '<strong>onEndReached:</strong> Triggered when user scrolls near the end. Perfect for pagination.',
            '<strong>refreshControl:</strong> Add pull-to-refresh functionality with RefreshControl component.',
            '<strong>ListView:</strong> Deprecated since React Native 0.60+. No longer maintained or recommended.',
            '<strong>Migration:</strong> All ListView functionality is available in FlatList with better performance.',
            '<strong>Replacement:</strong> Use FlatList for simple lists, SectionList for grouped data.',
            '<strong>Performance Gain:</strong> FlatList typically performs 2-5x better than old ListView implementation.',
            '<span class="badge bg-danger me-2">Critical</span> <strong>getItemLayout:</strong> Pre-define item dimensions for instant scrolling and better performance. <code> getItemLayout=(data, index) => {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index} </code>',
            '<strong>removeClippedSubviews:</strong> Remove off-screen views from native view hierarchy. Set to <code>true</code> for large lists.',
            '<strong>keyExtractor:</strong> Use stable, unique keys. Avoid array indices. Use item IDs or unique properties.',
            '<span class="badge bg-warning text-dark me-2">Memory</span> <strong>maxToRenderPerBatch:</strong> Control batch size (default: 10). Smaller values = smoother scrolling.',
            '<strong>windowSize:</strong> Number of screen lengths to render (default: 21). Reduce for memory optimization.',
            '<strong>initialNumToRender:</strong> Items to render initially (default: 10). Balance between performance and blank screens.',
            '<span class="badge bg-info text-dark me-2">Render</span> <strong>useCallback:</strong> Wrap renderItem and keyExtractor in useCallback to prevent unnecessary re-renders.',
            `<strong>React.memo:</strong> Memoize item components to prevent re-renders when props haven't changed.`,
            '<strong>Data Structure:</strong> Use immutable data updates. Always create new arrays/objects for state changes',
            '<strong>Key Management:</strong> Use stable, unique keys. Never use array indices for dynamic lists',
            '<strong>Item Components:</strong> Keep item components lightweight. Move heavy logic outside render',
            '<strong>Image Optimization:</strong> Use proper image dimensions and caching for better scroll performance',
            '<strong>Pagination:</strong> Implement infinite scrolling with onEndReached for large datasets',
            '<strong>Empty States:</strong> Always provide ListEmptyComponent for better UX',
            '<strong>Error Handling:</strong> Wrap data fetching in try-catch and show error states',
            '<strong>Accessibility:</strong> Add proper accessibility labels and roles for screen readers',
            `<strong>Inline Functions:</strong> Don't use inline functions in renderItem - they break memoization`,
            '<strong>Array Index Keys:</strong> Using index as key causes rendering issues with dynamic data',
            `<strong>Heavy Rendering:</strong> Don't put expensive operations in renderItem`,
            '<strong>Missing Keys:</strong> Always provide keyExtractor for proper list item identification',
            '<strong>ScrollView for Large Lists:</strong> Never use ScrollView for long lists - it renders all items',
            '<strong>Nested FlatLists:</strong> Avoid nested scrollable components without proper configuration',
            '<strong>Missing Loading States:</strong> Always show loading indicators during data fetching',
            '<strong>Q:</strong> How does FlatList optimize performance compared to ScrollView?',
            '<strong>A:</strong> FlatList uses virtualization - only renders visible items plus buffer, recycles views',
            `<strong>Q:</strong> What's the purpose of keyExtractor in FlatList?`,
            `<strong>A:</strong> Provides unique keys for React's reconciliation, crucial for performance and state management`,
            '<strong>Q:</strong> How would you implement infinite scrolling?',
            '<strong>A:</strong> Use onEndReached with onEndReachedThreshold, manage loading states and pagination',
            `<strong>Q:</strong> What's getItemLayout and when should you use it?`,
            '<strong>A:</strong> Pre-calculates item dimensions, enables instant scrolling to any position, use for fixed-height items',
            '<strong>Q:</strong> How do you handle empty states in FlatList?',
            '<strong>A:</strong> Use ListEmptyComponent prop to show custom empty state UI'
          ],
          code: `import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Alert,
} from 'react-native';

// Sample data structure
const generateSampleData = (count = 50) => {
  return Array.from({ length: count }, (_, index) => ({
    id: \`item-\${index + 1}\`,
    title: \`Item \${index + 1}\`,
    subtitle: \`Description for item \${index + 1}\`,
    avatar: \`https://picsum.photos/50/50?random=\${index}\`,
    price: (Math.random() * 100).toFixed(2),
    category: ['Electronics', 'Clothing', 'Books', 'Home'][index % 4],
    isPopular: Math.random() > 0.7,
  }));
};

// Basic FlatList Example
const BasicFlatListExample = () => {
  const [data, setData] = useState(() => generateSampleData(20));
  const [refreshing, setRefreshing] = useState(false);

  // Pull to refresh handler
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData(generateSampleData(20));
      setRefreshing(false);
    }, 1500);
  }, []);

  // Item renderer with proper key optimization
  const renderItem = useCallback(({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => Alert.alert('Pressed', \`You tapped \${item.title}\`)}
      activeOpacity={0.7}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.itemContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <View style={styles.itemFooter}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.price}>\${item.price}</Text>
          {item.isPopular && (
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>🔥 Popular</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  ), []);

  // Optimized key extractor
  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={() => (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No items found</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={true} // Performance optimization
      maxToRenderPerBatch={10} // Render batch size
      updateCellsBatchingPeriod={50} // Update frequency
      initialNumToRender={10} // Initial render count
      windowSize={10} // Viewport multiplier
    />
  );
};

// Advanced FlatList with Pagination
const PaginatedFlatListExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Load initial data
  useEffect(() => {
    loadData(1, true);
  }, []);

  const loadData = async (pageNum, isRefresh = false) => {
    if (loading) return;
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newData = generateSampleData(20);
      
      if (isRefresh) {
        setData(newData);
        setPage(2);
        setHasMore(true);
      } else {
        setData(prevData => [...prevData, ...newData]);
        setPage(pageNum + 1);
        // Simulate end of data after 5 pages
        if (pageNum >= 5) setHasMore(false);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    loadData(1, true);
  };

  const onEndReached = () => {
    if (hasMore && !loading) {
      loadData(page);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color="#007AFF" />
        <Text style={styles.loadingText}>Loading more...</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5} // Trigger when 50% from bottom
      ListFooterComponent={renderFooter}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      // Performance optimizations
      removeClippedSubviews={true}
      maxToRenderPerBatch={15}
      updateCellsBatchingPeriod={100}
      initialNumToRender={15}
      windowSize={21}
    />
  );
};

// Horizontal FlatList (Carousel)
const HorizontalFlatListExample = () => {
  const carouselData = generateSampleData(10);

  const renderCarouselItem = ({ item, index }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.avatar }} style={styles.carouselImage} />
      <Text style={styles.carouselTitle}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={carouselData}
      renderItem={renderCarouselItem}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToInterval={150} // Snap to item width
      decelerationRate="fast"
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      contentContainerStyle={styles.carouselContainer}
    />
  );
};

// Grid Layout with numColumns
const GridFlatListExample = () => {
  const gridData = generateSampleData(20);

  const renderGridItem = ({ item }) => (
    <TouchableOpacity style={styles.gridItem}>
      <Image source={{ uri: item.avatar }} style={styles.gridImage} />
      <Text style={styles.gridTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.gridPrice}>\${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={gridData}
      renderItem={renderGridItem}
      keyExtractor={item => item.id}
      numColumns={2}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      columnWrapperStyle={styles.gridRow} // Style for each row
      contentContainerStyle={styles.gridContainer}
    />
  );
};

const styles = StyleSheet.create({
  // Basic list styles
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 12,
    color: '#007AFF',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  popularBadge: {
    backgroundColor: '#FF5722',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  popularText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  
  // Pagination styles
  footerLoader: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  
  // Carousel styles
  carouselContainer: {
    paddingHorizontal: 16,
  },
  carouselItem: {
    width: 120,
    alignItems: 'center',
  },
  carouselImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  carouselTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  
  // Grid styles
  gridContainer: {
    padding: 16,
  },
  gridRow: {
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  gridImage: {
    width: '100%',
    height: 120,
    borderRadius: 6,
    marginBottom: 8,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  gridPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});`
        }
      ]
    },
    sectionlist: {
      title: 'SectionList',
      sections: [
        {
          heading: 'SectionList',
          list: [
            '<strong>SectionList:</strong> Used for grouped list views with section headers.',
            'Good for contact lists, categorized menus, or grouped data.',
            '<strong>Props:</strong> <code>sections</code> , <code>renderItem</code> , <code>renderSectionHeader</code> .',
            'Highly performant and optimized for large sections.'
          ],
          example: {
            title: 'Example',
            code: `import { SectionList, Text, View } from 'react-native';

const DATA = [
  {
    title: 'Fruits',
    data: ['Apple', 'Banana', 'Orange'],
  },
  {
    title: 'Vegetables',
    data: ['Carrot', 'Tomato'],
  },
];

const MySectionList = () => (
  <SectionList
    sections={DATA}
    keyExtractor={(item, index) => item + index}
    renderItem={({ item }) => <Text>{item}</Text>}
    renderSectionHeader={({ section }) => (
      <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
    )}
  />
);`,
            output: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxExamples = () => {
  return (
    <View style={styles.container}>
      {/* Horizontal Layout */}
      <View style={styles.row}>
        <View style={styles.box}><Text>1</Text></View>
        <View style={styles.box}><Text>2</Text></View>
        <View style={styles.box}><Text>3</Text></View>
      </View>

      {/* Centered Content */}
      <View style={styles.centered}>
        <Text>Perfectly Centered</Text>
      </View>

      {/* Space Distribution */}
      <View style={styles.spaceAround}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </View>

      {/* Flexible Items */}
      <View style={styles.flexItems}>
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Text>Flex: 1</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: 'green' }}>
          <Text>Flex: 2</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text>Flex: 1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  
  // Horizontal row layout
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  // Perfect centering
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginBottom: 20,
  },
  
  // Space distribution
  spaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'lightgreen',
    marginBottom: 20,
  },
  
  // Flexible items
  flexItems: {
    flexDirection: 'row',
    height: 100,
    marginBottom: 20,
  },
  
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Common responsive patterns
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
  },
  
  sidebar: {
    flexDirection: 'row',
    flex: 1,
  },
  
  sidebarMenu: {
    width: 200,
    backgroundColor: '#333',
  },
  
  mainContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  // Card layout
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  
  cardContent: {
    flex: 1,
  },
  
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

// Common Flexbox Patterns
const CommonLayouts = () => (
  <View>
    {/* Header with logo and menu */}
    <View style={styles.header}>
      <Text>Logo</Text>
      <Text>Menu</Text>
    </View>
    
    {/* Sidebar layout */}
    <View style={styles.sidebar}>
      <View style={styles.sidebarMenu}>
        <Text>Menu Items</Text>
      </View>
      <View style={styles.mainContent}>
        <Text>Main Content</Text>
      </View>
    </View>
    
    {/* Card with image, content, and actions */}
    <View style={styles.card}>
      <View style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text>Card Title</Text>
        <Text>Card Description</Text>
      </View>
      <View style={styles.cardActions}>
        <Text>Action</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  }
});

<Text style={styles.title}>Styled Text</Text>

import { Image } from 'react-native';

<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 200, height: 200 }}
  resizeMode="cover"
/>

<Image
  source={require('./assets/local-image.png')}
  style={{ width: 100, height: 100 }}
/>

import { Button, View } from 'react-native';

<Button
  title="Click Me"
  onPress={() => alert('Button Pressed')}
  color="#6200EE"
/>

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native';

// TouchableOpacity Examples
const TouchableOpacityExamples = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* Basic Button */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => Alert.alert('Success', 'Button pressed!')}
        activeOpacity={0.7} // Custom opacity
      >
        <Text style={styles.buttonText}>Primary Button</Text>
      </TouchableOpacity>

      {/* Counter Button */}
      <TouchableOpacity
        style={styles.counterButton}
        onPress={() => setCount(count + 1)}
        activeOpacity={0.8}
      >
        <Text style={styles.counterText}>Tap Count: {count}</Text>
      </TouchableOpacity>

      {/* Card with Image */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => Alert.alert('Card', 'Card tapped!')}
        activeOpacity={0.9}
      >
        <Image
          source={{ uri: 'https://picsum.photos/60/60' }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Interactive Card</Text>
          <Text style={styles.cardSubtitle}>Tap to see action</Text>
        </View>
      </TouchableOpacity>

      {/* Disabled State */}
      <TouchableOpacity
        style={[styles.primaryButton, styles.disabledButton]}
        disabled={true}
        onPress={() => console.log('This will not be called')}
      >
        <Text style={[styles.buttonText, styles.disabledText]}>
          Disabled Button
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// TouchableHighlight Examples
const TouchableHighlightExamples = () => {
  const listData = [
    { id: 1, title: 'Item 1', subtitle: 'First item description' },
    { id: 2, title: 'Item 2', subtitle: 'Second item description' },
    { id: 3, title: 'Item 3', subtitle: 'Third item description' },
  ];

  const handleItemPress = (item) => {
    Alert.alert('Item Selected', \`You selected \${item.title}\`);
  };

  return (
    <View style={styles.container}>
      {listData.map((item) => (
        <TouchableHighlight
          key={item.id}
          style={styles.listItem}
          underlayColor="#E3F2FD" // Light blue highlight
          onPress={() => handleItemPress(item)}
          onShowUnderlay={() => console.log('Highlight shown')}
          onHideUnderlay={() => console.log('Highlight hidden')}
        >
          <View style={styles.listItemContent}>
            <Text style={styles.listItemTitle}>{item.title}</Text>
            <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

// Pressable Examples (Modern Approach)
const PressableExamples = () => {
  const [isLongPressed, setIsLongPressed] = useState(false);

  return (
    <View style={styles.container}>
      {/* Dynamic Styling with Function */}
      <Pressable
        style={({ pressed }) => [
          styles.pressableButton,
          {
            backgroundColor: pressed ? '#0056b3' : '#007bff',
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
        onPress={() => Alert.alert('Pressable', 'Modern button pressed!')}
      >
        {({ pressed }) => (
          <Text style={styles.pressableText}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>

      {/* Long Press Example */}
      <Pressable
        style={[
          styles.longPressButton,
          isLongPressed && styles.longPressActive,
        ]}
        onPress={() => Alert.alert('Quick Tap', 'Short press detected')}
        onLongPress={() => {
          setIsLongPressed(true);
          Alert.alert('Long Press', 'Long press detected!');
          setTimeout(() => setIsLongPressed(false), 1000);
        }}
        delayLongPress={800} // 800ms for long press
      >
        <Text style={styles.longPressText}>
          {isLongPressed ? 'Long Pressed!' : 'Long Press Me'}
        </Text>
      </Pressable>

      {/* Advanced Hit Area */}
      <Pressable
        style={styles.smallButton}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // Larger hit area
        pressRetentionOffset={{ top: 30, bottom: 30, left: 30, right: 30 }}
        onPress={() => Alert.alert('Hit Area', 'Large hit area worked!')}
      >
        <Text style={styles.smallButtonText}>Small Button</Text>
      </Pressable>

      {/* Platform-specific Android Ripple */}
      <Pressable
        style={styles.rippleButton}
        android_ripple={{
          color: 'rgba(255, 255, 255, 0.3)',
          borderless: false,
          radius: 100,
        }}
        onPress={() => Alert.alert('Ripple', 'Android ripple effect!')}
      >
        <Text style={styles.rippleText}>Android Ripple</Text>
      </Pressable>
    </View>
  );
};

// Custom Touchable with Animation
const AnimatedTouchableExample = () => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => Alert.alert('Animated', 'Custom animation!')}
    >
      <Animated.View
        style={[
          styles.animatedButton,
          { transform: [{ scale: scaleValue }] },
        ]}
      >
        <Text style={styles.animatedButtonText}>Animated Button</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

// Accessibility Example
const AccessibleTouchableExample = () => {
  return (
    <TouchableOpacity
      style={styles.accessibleButton}
      onPress={() => Alert.alert('Accessible', 'Accessible button pressed!')}
      accessible={true}
      accessibilityLabel="Save document button"
      accessibilityHint="Double tap to save your current document"
      accessibilityRole="button"
      accessibilityState={{ disabled: false }}
    >
      <Text style={styles.accessibleButtonText}>Save Document</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  
  // TouchableOpacity Styles
  primaryButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  counterButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  counterText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  disabledButton: {
    backgroundColor: '#6c757d',
    opacity: 0.6,
  },
  disabledText: {
    color: '#adb5bd',
  },
  
  // TouchableHighlight Styles
  listItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
    overflow: 'hidden', // Important for highlight effect
  },
  listItemContent: {
    padding: 16,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  listItemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  
  // Pressable Styles
  pressableButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  pressableText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  longPressButton: {
    backgroundColor: '#fd7e14',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  longPressActive: {
    backgroundColor: '#e8590c',
  },
  longPressText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallButton: {
    backgroundColor: '#6c757d',
    padding: 8,
    borderRadius: 6,
    marginBottom: 16,
    alignItems: 'center',
  },
  smallButtonText: {
    color: 'white',
    fontSize: 14,
  },
  rippleButton: {
    backgroundColor: '#6f42c1',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  rippleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Animation Styles
  animatedButton: {
    backgroundColor: '#dc3545',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  animatedButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // Accessibility Styles
  accessibleButton: {
    backgroundColor: '#20c997',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  accessibleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

// Stack Navigation Example
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
</NavigationContainer>

import { Platform, Text } from 'react-native';

const PlatformExample = () => (
  <Text>
    {Platform.OS === 'ios' ? 'Running on iOS' : 'Running on Android'}
  </Text>
);

import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async () => {
  try {
    await AsyncStorage.setItem('username', 'JohnDoe');
  } catch (e) {
    console.error('Saving error', e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('username');
    if (value !== null) {
      console.log('Stored value:', value);
    }
  } catch (e) {
    console.error('Reading error', e);
  }
};

// Using react-native-keychain
import * as Keychain from 'react-native-keychain';

const saveSecureData = async () => {
  await Keychain.setGenericPassword('username', 'secret_password');
};

const loadSecureData = async () => {
  const credentials = await Keychain.getGenericPassword();
  if (credentials) {
    console.log('Username:', credentials.username);
  }
};

import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';

const FadeInView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>;
};

// store.js
import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import * as Linking from 'expo-linking';

const url = Linking.createURL('profile/42'); // opens deep route

Linking.openURL(url);

const loginUser = async () => {
  const response = await fetch('https://api.example.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (data.token) {
    await AsyncStorage.setItem('token', data.token);
  }
};

// Enable logs
console.log('Debug log');

// Show Dev Menu on Android manually
import { DevSettings } from 'react-native';
DevSettings.reload();

// Example Native Module (Android - Java)
@ReactModule(name = "MyNativeModule")
public class MyNativeModule extends ReactContextBaseJavaModule {
  @ReactMethod
  public void showToast(String message) {
    Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
  }
}`,
            type: 'code'
          }
        }
      ]
    },
    flexbox: {
      title: 'Flexbox',
      sections: [
        {
          heading: 'Flexbox',
          list: [
            '<strong>Main Axis:</strong> Primary direction (flexDirection)',
            '<strong>Cross Axis:</strong> Perpendicular to main axis',
            '<strong>justifyContent:</strong> Controls main axis alignment',
            '<strong>alignItems:</strong> Controls cross axis alignment',
            'Use <code>flex: 1</code> to make components take available space',
            'Combine <code>justifyContent</code> and <code>alignItems</code> for perfect centering',
            `Use <code>flexDirection: 'row'</code> for horizontal layouts`,
            `Apply <code>flexWrap: 'wrap'</code> for responsive grids`,
            'Use <code>alignSelf</code> to override alignment for specific items',
            'Test layouts on different screen sizes and orientations',
            'Avoid fixed dimensions; use flex properties for responsiveness',
            `<span class="badge bg-primary me-2">Core Concept</span> <strong>Flexbox:</strong> React Native uses Flexbox for layout, positioning, and distribution of elements. It's the primary layout system.`,
            '<strong>Default Direction:</strong> Default <code>flexDirection</code> is <code>column</code> (vertical), unlike web which defaults to <code>row</code> (horizontal).',
            '<span class="badge bg-info text-dark me-2">Flex Container</span> <strong>flex:</strong> Defines how a component should grow/shrink. <code>flex: 1</code> takes available space.',
            '<strong>flexDirection:</strong> Sets primary axis - <code>row</code> , <code>column</code> , <code>row-reverse</code> , <code>column-reverse</code> .',
            '<strong>justifyContent:</strong> Aligns children along main axis - <code>flex-start</code> , <code>center</code> , <code>flex-end</code> , <code>space-between</code> , <code>space-around</code> , <code>space-evenly</code> .',
            '<span class="badge bg-success me-2">Cross Axis</span> <strong>alignItems:</strong> Aligns children along cross axis - <code>stretch</code> , <code>center</code> , <code>flex-start</code> , <code>flex-end</code> , <code>baseline</code> .',
            `<strong>alignSelf:</strong> Overrides parent's alignItems for individual child components.`,
            '<strong>flexWrap:</strong> Controls wrapping - <code>nowrap</code> (default), <code>wrap</code> , <code>wrap-reverse</code> .',
            `<span class="badge bg-warning text-dark me-2">Advanced</span> <strong>alignContent:</strong> Aligns wrapped lines. Only works when <code>flexWrap: 'wrap'</code> .`,
            '<strong>flexBasis:</strong> Sets initial size before free space is distributed. Similar to width/height but flex-aware.',
            '<strong>flexGrow & flexShrink:</strong> Control how items grow and shrink. <code>flexGrow: 1</code> expands, <code>flexShrink: 0</code> prevents shrinking.',
            '<span class="badge bg-danger me-2">Common Patterns</span> <strong>Responsive Design:</strong> Use flex values and percentages for responsive layouts that work on all screen sizes.'
          ],
          code: `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxExamples = () => {
  return (
    <View style={styles.container}>
      {/* Horizontal Layout */}
      <View style={styles.row}>
        <View style={styles.box}><Text>1</Text></View>
        <View style={styles.box}><Text>2</Text></View>
        <View style={styles.box}><Text>3</Text></View>
      </View>

      {/* Centered Content */}
      <View style={styles.centered}>
        <Text>Perfectly Centered</Text>
      </View>

      {/* Space Distribution */}
      <View style={styles.spaceAround}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </View>

      {/* Flexible Items */}
      <View style={styles.flexItems}>
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Text>Flex: 1</Text>
        </View>
        <View style={{ flex: 2, backgroundColor: 'green' }}>
          <Text>Flex: 2</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text>Flex: 1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  
  // Horizontal row layout
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  // Perfect centering
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginBottom: 20,
  },
  
  // Space distribution
  spaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'lightgreen',
    marginBottom: 20,
  },
  
  // Flexible items
  flexItems: {
    flexDirection: 'row',
    height: 100,
    marginBottom: 20,
  },
  
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Common responsive patterns
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
  },
  
  sidebar: {
    flexDirection: 'row',
    flex: 1,
  },
  
  sidebarMenu: {
    width: 200,
    backgroundColor: '#333',
  },
  
  mainContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  // Card layout
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  
  cardContent: {
    flex: 1,
  },
  
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

// Common Flexbox Patterns
const CommonLayouts = () => (
  <View>
    {/* Header with logo and menu */}
    <View style={styles.header}>
      <Text>Logo</Text>
      <Text>Menu</Text>
    </View>
    
    {/* Sidebar layout */}
    <View style={styles.sidebar}>
      <View style={styles.sidebarMenu}>
        <Text>Menu Items</Text>
      </View>
      <View style={styles.mainContent}>
        <Text>Main Content</Text>
      </View>
    </View>
    
    {/* Card with image, content, and actions */}
    <View style={styles.card}>
      <View style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text>Card Title</Text>
        <Text>Card Description</Text>
      </View>
      <View style={styles.cardActions}>
        <Text>Action</Text>
      </View>
    </View>
  </View>
);`
        }
      ]
    },
    styling: {
      title: 'Styling',
      sections: [
        {
          heading: 'Styling',
          list: [
            '<strong>StyleSheet:</strong> React Native provides <code>StyleSheet.create()</code> for defining styles.',
            '<strong>Inline Styles:</strong> You can also apply styles directly inside the component.',
            '<strong>Units:</strong> All dimensions are unitless and represent density-independent pixels.',
            '<strong>Multiple Styles:</strong> You can combine styles using array syntax: <code>[style1, style2]</code> .',
            '<strong>Style Inheritance:</strong> Limited; not as deep as CSS in web.'
          ],
          code: `const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  }
});

<Text style={styles.title}>Styled Text</Text>`
        }
      ]
    },
    images: {
      title: 'Images',
      sections: [
        {
          heading: 'Images',
          list: [
            '<strong>Image Component:</strong> Displays both local and remote images.',
            '<strong>Source:</strong> Use <code>require()</code> for local or URI for remote images.',
            '<strong>Style Required:</strong> Must define width and height in styles.',
            '<strong>Resize Mode:</strong> Controls image scaling — <code>cover</code> , <code>contain</code> , <code>stretch</code> , etc.'
          ],
          example: {
            title: 'Example',
            code: `import { Image } from 'react-native';

<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 200, height: 200 }}
  resizeMode="cover"
/>

<Image
  source={require('./assets/local-image.png')}
  style={{ width: 100, height: 100 }}
/>`,
            output: `import { Button, View } from 'react-native';

<Button
  title="Click Me"
  onPress={() => alert('Button Pressed')}
  color="#6200EE"
/>

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native';

// TouchableOpacity Examples
const TouchableOpacityExamples = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* Basic Button */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => Alert.alert('Success', 'Button pressed!')}
        activeOpacity={0.7} // Custom opacity
      >
        <Text style={styles.buttonText}>Primary Button</Text>
      </TouchableOpacity>

      {/* Counter Button */}
      <TouchableOpacity
        style={styles.counterButton}
        onPress={() => setCount(count + 1)}
        activeOpacity={0.8}
      >
        <Text style={styles.counterText}>Tap Count: {count}</Text>
      </TouchableOpacity>

      {/* Card with Image */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => Alert.alert('Card', 'Card tapped!')}
        activeOpacity={0.9}
      >
        <Image
          source={{ uri: 'https://picsum.photos/60/60' }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Interactive Card</Text>
          <Text style={styles.cardSubtitle}>Tap to see action</Text>
        </View>
      </TouchableOpacity>

      {/* Disabled State */}
      <TouchableOpacity
        style={[styles.primaryButton, styles.disabledButton]}
        disabled={true}
        onPress={() => console.log('This will not be called')}
      >
        <Text style={[styles.buttonText, styles.disabledText]}>
          Disabled Button
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// TouchableHighlight Examples
const TouchableHighlightExamples = () => {
  const listData = [
    { id: 1, title: 'Item 1', subtitle: 'First item description' },
    { id: 2, title: 'Item 2', subtitle: 'Second item description' },
    { id: 3, title: 'Item 3', subtitle: 'Third item description' },
  ];

  const handleItemPress = (item) => {
    Alert.alert('Item Selected', \`You selected \${item.title}\`);
  };

  return (
    <View style={styles.container}>
      {listData.map((item) => (
        <TouchableHighlight
          key={item.id}
          style={styles.listItem}
          underlayColor="#E3F2FD" // Light blue highlight
          onPress={() => handleItemPress(item)}
          onShowUnderlay={() => console.log('Highlight shown')}
          onHideUnderlay={() => console.log('Highlight hidden')}
        >
          <View style={styles.listItemContent}>
            <Text style={styles.listItemTitle}>{item.title}</Text>
            <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

// Pressable Examples (Modern Approach)
const PressableExamples = () => {
  const [isLongPressed, setIsLongPressed] = useState(false);

  return (
    <View style={styles.container}>
      {/* Dynamic Styling with Function */}
      <Pressable
        style={({ pressed }) => [
          styles.pressableButton,
          {
            backgroundColor: pressed ? '#0056b3' : '#007bff',
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
        onPress={() => Alert.alert('Pressable', 'Modern button pressed!')}
      >
        {({ pressed }) => (
          <Text style={styles.pressableText}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>

      {/* Long Press Example */}
      <Pressable
        style={[
          styles.longPressButton,
          isLongPressed && styles.longPressActive,
        ]}
        onPress={() => Alert.alert('Quick Tap', 'Short press detected')}
        onLongPress={() => {
          setIsLongPressed(true);
          Alert.alert('Long Press', 'Long press detected!');
          setTimeout(() => setIsLongPressed(false), 1000);
        }}
        delayLongPress={800} // 800ms for long press
      >
        <Text style={styles.longPressText}>
          {isLongPressed ? 'Long Pressed!' : 'Long Press Me'}
        </Text>
      </Pressable>

      {/* Advanced Hit Area */}
      <Pressable
        style={styles.smallButton}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // Larger hit area
        pressRetentionOffset={{ top: 30, bottom: 30, left: 30, right: 30 }}
        onPress={() => Alert.alert('Hit Area', 'Large hit area worked!')}
      >
        <Text style={styles.smallButtonText}>Small Button</Text>
      </Pressable>

      {/* Platform-specific Android Ripple */}
      <Pressable
        style={styles.rippleButton}
        android_ripple={{
          color: 'rgba(255, 255, 255, 0.3)',
          borderless: false,
          radius: 100,
        }}
        onPress={() => Alert.alert('Ripple', 'Android ripple effect!')}
      >
        <Text style={styles.rippleText}>Android Ripple</Text>
      </Pressable>
    </View>
  );
};

// Custom Touchable with Animation
const AnimatedTouchableExample = () => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => Alert.alert('Animated', 'Custom animation!')}
    >
      <Animated.View
        style={[
          styles.animatedButton,
          { transform: [{ scale: scaleValue }] },
        ]}
      >
        <Text style={styles.animatedButtonText}>Animated Button</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

// Accessibility Example
const AccessibleTouchableExample = () => {
  return (
    <TouchableOpacity
      style={styles.accessibleButton}
      onPress={() => Alert.alert('Accessible', 'Accessible button pressed!')}
      accessible={true}
      accessibilityLabel="Save document button"
      accessibilityHint="Double tap to save your current document"
      accessibilityRole="button"
      accessibilityState={{ disabled: false }}
    >
      <Text style={styles.accessibleButtonText}>Save Document</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  
  // TouchableOpacity Styles
  primaryButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  counterButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  counterText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  disabledButton: {
    backgroundColor: '#6c757d',
    opacity: 0.6,
  },
  disabledText: {
    color: '#adb5bd',
  },
  
  // TouchableHighlight Styles
  listItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
    overflow: 'hidden', // Important for highlight effect
  },
  listItemContent: {
    padding: 16,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  listItemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  
  // Pressable Styles
  pressableButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  pressableText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  longPressButton: {
    backgroundColor: '#fd7e14',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  longPressActive: {
    backgroundColor: '#e8590c',
  },
  longPressText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallButton: {
    backgroundColor: '#6c757d',
    padding: 8,
    borderRadius: 6,
    marginBottom: 16,
    alignItems: 'center',
  },
  smallButtonText: {
    color: 'white',
    fontSize: 14,
  },
  rippleButton: {
    backgroundColor: '#6f42c1',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  rippleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Animation Styles
  animatedButton: {
    backgroundColor: '#dc3545',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  animatedButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // Accessibility Styles
  accessibleButton: {
    backgroundColor: '#20c997',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  accessibleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

// Stack Navigation Example
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
</NavigationContainer>

import { Platform, Text } from 'react-native';

const PlatformExample = () => (
  <Text>
    {Platform.OS === 'ios' ? 'Running on iOS' : 'Running on Android'}
  </Text>
);

import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async () => {
  try {
    await AsyncStorage.setItem('username', 'JohnDoe');
  } catch (e) {
    console.error('Saving error', e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('username');
    if (value !== null) {
      console.log('Stored value:', value);
    }
  } catch (e) {
    console.error('Reading error', e);
  }
};

// Using react-native-keychain
import * as Keychain from 'react-native-keychain';

const saveSecureData = async () => {
  await Keychain.setGenericPassword('username', 'secret_password');
};

const loadSecureData = async () => {
  const credentials = await Keychain.getGenericPassword();
  if (credentials) {
    console.log('Username:', credentials.username);
  }
};

import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';

const FadeInView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>;
};

// store.js
import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import * as Linking from 'expo-linking';

const url = Linking.createURL('profile/42'); // opens deep route

Linking.openURL(url);

const loginUser = async () => {
  const response = await fetch('https://api.example.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (data.token) {
    await AsyncStorage.setItem('token', data.token);
  }
};

// Enable logs
console.log('Debug log');

// Show Dev Menu on Android manually
import { DevSettings } from 'react-native';
DevSettings.reload();

// Example Native Module (Android - Java)
@ReactModule(name = "MyNativeModule")
public class MyNativeModule extends ReactContextBaseJavaModule {
  @ReactMethod
  public void showToast(String message) {
    Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
  }
}`,
            type: 'code'
          }
        }
      ]
    }
  },
  module3: {
    buttons: {
      title: 'Buttons',
      sections: [
        {
          heading: 'Buttons',
          list: [
            '<strong>Button:</strong> A basic component used for user actions.',
            '<strong>Props:</strong> <code>title</code> , <code>onPress</code> , <code>color</code> , and <code>disabled</code> .',
            'Platform-specific styling; limited customization options.',
            'For custom design, use <code>TouchableOpacity</code> or <code>Pressable</code> with <code>Text</code> .'
          ],
          code: `import { Button, View } from 'react-native';

<Button
  title="Click Me"
  onPress={() => alert('Button Pressed')}
  color="#6200EE"
/>`
        }
      ]
    },
    touchables: {
      title: 'Touchables',
      sections: [
        {
          heading: 'Touchables',
          content: [
            `<strong>🎯 Core Concept:</strong> Touchable components make any element interactive by wrapping it with touch handling capabilities. They're essential for creating buttons, cards, and any tappable UI elements with proper user feedback.`
          ],
          list: [
            '<span class="badge bg-primary me-2">Core Purpose</span> <strong>Touch Handling:</strong> Wrap any component to make it interactive with proper touch feedback and gesture recognition.',
            '<strong>User Experience:</strong> Provide visual and haptic feedback to users when they interact with UI elements.',
            '<strong>Accessibility:</strong> Built-in accessibility support for screen readers and assistive technologies.',
            '<span class="badge bg-success me-2">Flexibility</span> <strong>Wrapper Nature:</strong> Can wrap any child components - Text, View, Image, or complex layouts.',
            '<strong>Platform Adaptation:</strong> Automatically adapts touch behavior to platform conventions (iOS vs Android).',
            '<strong>🔘 TouchableOpacity:</strong> Most popular. Reduces opacity (0.2) when pressed. Simple and effective feedback.',
            '<strong>🎯 TouchableHighlight:</strong> Shows highlight color when pressed. Good for list items and cards.',
            '<span class="badge bg-warning text-dark me-2">Minimal</span> <strong>👻 TouchableWithoutFeedback:</strong> No visual feedback. Use sparingly for custom feedback implementations.',
            '<span class="badge bg-danger me-2">Modern</span> <strong>🚀 Pressable:</strong> New recommended component. More flexible with advanced gesture handling and state-based styling.',
            '<strong>📱 TouchableNativeFeedback:</strong> Android-only. Provides material design ripple effects.',
            '<strong>Feedback:</strong> Fades to specified opacity (default 0.2) when pressed',
            '<strong>Use Cases:</strong> Buttons, cards, menu items, any general interactive element',
            '<strong>Props:</strong> <code>activeOpacity</code> , <code>onPress</code> , <code>onPressIn</code> , <code>onPressOut</code> , <code>disabled</code>',
            '<strong>Performance:</strong> Lightweight and efficient, works well for most use cases',
            '<strong>Feedback:</strong> Shows background color overlay when pressed',
            '<strong>Use Cases:</strong> List items, table rows, cards where highlight effect is desired',
            '<strong>Props:</strong> <code>underlayColor</code> , <code>onShowUnderlay</code> , <code>onHideUnderlay</code>',
            '<strong>Limitation:</strong> Can only have one child element (must wrap in View if multiple children)',
            '<span class="badge bg-success me-2">Modern</span> <strong>Advantages:</strong> More flexible, better performance, function-based styling',
            '<strong>Dynamic Styling:</strong> Style prop can be a function that receives press state',
            '<strong>Advanced Gestures:</strong> Better long press, hover (web), and focus handling',
            '<strong>Press Rect:</strong> Configure hit area with <code>pressRetentionOffset</code> and <code>hitSlop</code>',
            `<span class="badge bg-danger me-2">Critical</span> <strong>Avoid Inline Functions:</strong> Don't use inline functions in onPress. Use useCallback or class methods to prevent re-renders.`,
            '<strong>TouchableWithoutFeedback:</strong> Use sparingly. Only when you need custom feedback implementation.',
            '<strong>Pressable vs TouchableOpacity:</strong> Pressable offers better performance and more control for complex interactions.',
            '<span class="badge bg-warning text-dark me-2">Memory</span> <strong>Event Handlers:</strong> Always clean up event listeners and timers in useEffect cleanup or componentWillUnmount.',
            '<strong>Animation Performance:</strong> Use native driver for animations when possible (transform, opacity).',
            '<strong>Component Choice:</strong> Use Pressable for new code, TouchableOpacity for simple cases',
            '<strong>Hit Areas:</strong> Ensure touchable areas are at least 44x44 points for good UX',
            '<strong>Feedback:</strong> Always provide visual feedback to user interactions',
            '<strong>Accessibility:</strong> Use proper accessibility labels and roles for screen readers',
            '<strong>Disabled States:</strong> Style disabled states clearly and prevent interaction',
            '<strong>Performance:</strong> Use useCallback for event handlers to prevent unnecessary re-renders',
            '<strong>Platform Consistency:</strong> Consider platform-specific behaviors (Android ripple effects)',
            '<strong>Long Press:</strong> Implement long press for secondary actions when appropriate',
            '• Buttons and CTAs',
            '• Menu items',
            '• Cards and tiles',
            '• Icon buttons',
            '• Simple interactions',
            '• Complex interactions',
            '• Dynamic styling needs',
            '• Long press actions',
            '• Custom animations',
            '• New projects',
            '• List items',
            '• Table rows',
            '• Selection interfaces',
            '• When highlight effect is desired',
            '• Custom feedback implementation',
            '• Dismissing modals/keyboards',
            '• Areas where no visual feedback is needed',
            '• Accessibility-first designs',
            `<strong>Q:</strong> What's the difference between TouchableOpacity and Pressable?`,
            '<strong>A:</strong> Pressable is newer, more flexible with function-based styling, better performance, and advanced gesture handling',
            '<strong>Q:</strong> When would you use TouchableWithoutFeedback?',
            '<strong>A:</strong> When implementing custom feedback, dismissing overlays, or when no visual feedback is desired',
            '<strong>Q:</strong> How do you make a touchable area larger without changing visual size?',
            '<strong>A:</strong> Use hitSlop prop to extend the touchable area beyond the visual bounds',
            `<strong>Q:</strong> What's the recommended minimum touch target size?`,
            '<strong>A:</strong> 44x44 points (iOS) or 48x48 dp (Android) for good accessibility and usability',
            '<strong>Q:</strong> How do you prevent multiple rapid taps on a button?',
            '<strong>A:</strong> Use debouncing, disable the button temporarily, or track press state'
          ],
          code: `import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native';

// TouchableOpacity Examples
const TouchableOpacityExamples = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* Basic Button */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => Alert.alert('Success', 'Button pressed!')}
        activeOpacity={0.7} // Custom opacity
      >
        <Text style={styles.buttonText}>Primary Button</Text>
      </TouchableOpacity>

      {/* Counter Button */}
      <TouchableOpacity
        style={styles.counterButton}
        onPress={() => setCount(count + 1)}
        activeOpacity={0.8}
      >
        <Text style={styles.counterText}>Tap Count: {count}</Text>
      </TouchableOpacity>

      {/* Card with Image */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => Alert.alert('Card', 'Card tapped!')}
        activeOpacity={0.9}
      >
        <Image
          source={{ uri: 'https://picsum.photos/60/60' }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Interactive Card</Text>
          <Text style={styles.cardSubtitle}>Tap to see action</Text>
        </View>
      </TouchableOpacity>

      {/* Disabled State */}
      <TouchableOpacity
        style={[styles.primaryButton, styles.disabledButton]}
        disabled={true}
        onPress={() => console.log('This will not be called')}
      >
        <Text style={[styles.buttonText, styles.disabledText]}>
          Disabled Button
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// TouchableHighlight Examples
const TouchableHighlightExamples = () => {
  const listData = [
    { id: 1, title: 'Item 1', subtitle: 'First item description' },
    { id: 2, title: 'Item 2', subtitle: 'Second item description' },
    { id: 3, title: 'Item 3', subtitle: 'Third item description' },
  ];

  const handleItemPress = (item) => {
    Alert.alert('Item Selected', \`You selected \${item.title}\`);
  };

  return (
    <View style={styles.container}>
      {listData.map((item) => (
        <TouchableHighlight
          key={item.id}
          style={styles.listItem}
          underlayColor="#E3F2FD" // Light blue highlight
          onPress={() => handleItemPress(item)}
          onShowUnderlay={() => console.log('Highlight shown')}
          onHideUnderlay={() => console.log('Highlight hidden')}
        >
          <View style={styles.listItemContent}>
            <Text style={styles.listItemTitle}>{item.title}</Text>
            <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

// Pressable Examples (Modern Approach)
const PressableExamples = () => {
  const [isLongPressed, setIsLongPressed] = useState(false);

  return (
    <View style={styles.container}>
      {/* Dynamic Styling with Function */}
      <Pressable
        style={({ pressed }) => [
          styles.pressableButton,
          {
            backgroundColor: pressed ? '#0056b3' : '#007bff',
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
        onPress={() => Alert.alert('Pressable', 'Modern button pressed!')}
      >
        {({ pressed }) => (
          <Text style={styles.pressableText}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>

      {/* Long Press Example */}
      <Pressable
        style={[
          styles.longPressButton,
          isLongPressed && styles.longPressActive,
        ]}
        onPress={() => Alert.alert('Quick Tap', 'Short press detected')}
        onLongPress={() => {
          setIsLongPressed(true);
          Alert.alert('Long Press', 'Long press detected!');
          setTimeout(() => setIsLongPressed(false), 1000);
        }}
        delayLongPress={800} // 800ms for long press
      >
        <Text style={styles.longPressText}>
          {isLongPressed ? 'Long Pressed!' : 'Long Press Me'}
        </Text>
      </Pressable>

      {/* Advanced Hit Area */}
      <Pressable
        style={styles.smallButton}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // Larger hit area
        pressRetentionOffset={{ top: 30, bottom: 30, left: 30, right: 30 }}
        onPress={() => Alert.alert('Hit Area', 'Large hit area worked!')}
      >
        <Text style={styles.smallButtonText}>Small Button</Text>
      </Pressable>

      {/* Platform-specific Android Ripple */}
      <Pressable
        style={styles.rippleButton}
        android_ripple={{
          color: 'rgba(255, 255, 255, 0.3)',
          borderless: false,
          radius: 100,
        }}
        onPress={() => Alert.alert('Ripple', 'Android ripple effect!')}
      >
        <Text style={styles.rippleText}>Android Ripple</Text>
      </Pressable>
    </View>
  );
};

// Custom Touchable with Animation
const AnimatedTouchableExample = () => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => Alert.alert('Animated', 'Custom animation!')}
    >
      <Animated.View
        style={[
          styles.animatedButton,
          { transform: [{ scale: scaleValue }] },
        ]}
      >
        <Text style={styles.animatedButtonText}>Animated Button</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

// Accessibility Example
const AccessibleTouchableExample = () => {
  return (
    <TouchableOpacity
      style={styles.accessibleButton}
      onPress={() => Alert.alert('Accessible', 'Accessible button pressed!')}
      accessible={true}
      accessibilityLabel="Save document button"
      accessibilityHint="Double tap to save your current document"
      accessibilityRole="button"
      accessibilityState={{ disabled: false }}
    >
      <Text style={styles.accessibleButtonText}>Save Document</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  
  // TouchableOpacity Styles
  primaryButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  counterButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  counterText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  disabledButton: {
    backgroundColor: '#6c757d',
    opacity: 0.6,
  },
  disabledText: {
    color: '#adb5bd',
  },
  
  // TouchableHighlight Styles
  listItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
    overflow: 'hidden', // Important for highlight effect
  },
  listItemContent: {
    padding: 16,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  listItemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  
  // Pressable Styles
  pressableButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  pressableText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  longPressButton: {
    backgroundColor: '#fd7e14',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  longPressActive: {
    backgroundColor: '#e8590c',
  },
  longPressText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallButton: {
    backgroundColor: '#6c757d',
    padding: 8,
    borderRadius: 6,
    marginBottom: 16,
    alignItems: 'center',
  },
  smallButtonText: {
    color: 'white',
    fontSize: 14,
  },
  rippleButton: {
    backgroundColor: '#6f42c1',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  rippleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Animation Styles
  animatedButton: {
    backgroundColor: '#dc3545',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  animatedButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // Accessibility Styles
  accessibleButton: {
    backgroundColor: '#20c997',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  accessibleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});`
        }
      ]
    },
    navigation: {
      title: 'Navigation',
      sections: [
        {
          heading: 'Navigation',
          list: [
            '<strong>React Navigation:</strong> Standard library for routing and navigation in React Native apps.',
            '<strong>Installation:</strong> <code>npm install @react-navigation/native</code> and dependencies like <code>react-native-screens</code> , <code>react-native-safe-area-context</code> , etc.',
            '<strong>Navigator Types:</strong> Stack, Tab, Drawer, and Nested navigators.',
            '<strong>Stack Navigator:</strong> Push/pop screens like a browser history.',
            '<strong>Tab Navigator:</strong> Bottom or top tab navigation.',
            '<strong>Drawer Navigator:</strong> Slide-out side menu navigation.'
          ],
          code: `// Stack Navigation Example
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
</NavigationContainer>`
        }
      ]
    },
    'platform-specific-code': {
      title: 'Platform Specific Code',
      sections: [
        {
          heading: 'Platform Specific Code',
          list: [
            '<strong>Platform API:</strong> Used to write code that behaves differently on Android and iOS.',
            `<code>Platform.OS</code> returns either <code>'ios'</code> or <code>'android'</code> .`,
            '<strong>Platform-specific imports:</strong> You can use <code>.ios.js</code> or <code>.android.js</code> file extensions to isolate platform-specific logic.',
            '<strong>Responsive behavior:</strong> Use <code>Platform.select()</code> to conditionally apply values.'
          ],
          code: `import { Platform, Text } from 'react-native';

const PlatformExample = () => (
  <Text>
    {Platform.OS === 'ios' ? 'Running on iOS' : 'Running on Android'}
  </Text>
);`
        }
      ]
    },
    'async-storage': {
      title: 'AsyncStorage',
      sections: [
        {
          heading: 'AsyncStorage',
          list: [
            '<strong>AsyncStorage:</strong> Used for simple key-value persistent data storage.',
            'Not suitable for large data or complex storage needs. Use only for lightweight needs like settings, tokens, flags, etc.',
            'Use <code>@react-native-async-storage/async-storage</code> library.',
            'All methods are asynchronous and return Promises: <code>setItem</code> , <code>getItem</code> , <code>removeItem</code> .'
          ],
          code: `import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async () => {
  try {
    await AsyncStorage.setItem('username', 'JohnDoe');
  } catch (e) {
    console.error('Saving error', e);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('username');
    if (value !== null) {
      console.log('Stored value:', value);
    }
  } catch (e) {
    console.error('Reading error', e);
  }
};`
        }
      ]
    },
    'secure-storage': {
      title: 'Secure Storage',
      sections: [
        {
          heading: 'Secure Storage',
          list: [
            '<strong>Secure Storage:</strong> Used to store sensitive data like tokens, passwords, and credentials.',
            'More secure than AsyncStorage; encrypted and backed by platform-specific secure systems.',
            '<strong>Libraries:</strong> Popular ones include <code>react-native-keychain</code> , <code>react-native-encrypted-storage</code> .',
            'Supports biometric protection and authentication (Face ID, fingerprint).'
          ],
          code: `// Using react-native-keychain
import * as Keychain from 'react-native-keychain';

const saveSecureData = async () => {
  await Keychain.setGenericPassword('username', 'secret_password');
};

const loadSecureData = async () => {
  const credentials = await Keychain.getGenericPassword();
  if (credentials) {
    console.log('Username:', credentials.username);
  }
};`
        }
      ]
    },
    animations: {
      title: 'Animations',
      sections: [
        {
          heading: 'Animations',
          list: [
            '<strong>Animated API:</strong> Used for declarative, performant animations in React Native.',
            'Supports animated values like opacity, scale, translate, rotate, etc.',
            'Common methods include <code>Animated.timing</code> , <code>Animated.spring</code> , and <code>Animated.loop</code> .',
            'Always wrap animatable properties inside <code>Animated.View</code> or <code>Animated.Text</code> .',
            '<strong>Reanimated:</strong> For complex animations and gesture-based interactions, use <code>react-native-reanimated</code> .'
          ],
          code: `import { Animated } from 'react-native';
import { useRef, useEffect } from 'react';

const FadeInView = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>;
};`
        }
      ]
    }
  },
  module4: {
    hooks: {
      title: 'React Hooks',
      sections: [
        {
          heading: 'React Hooks',
          list: [
            '<span class="badge bg-primary me-2">Core Concept</span> <strong>State:</strong> A built-in object that stores component data that may change over time and affects rendering.',
            '<strong>useState Hook:</strong> A React Hook used to manage local component state in functional components.',
            '<strong>Triggers Re-render:</strong> Updating state causes the component to re-render and update the UI accordingly.',
            '<span class="badge bg-success me-2">Encapsulation</span> <strong>Component Level:</strong> Each component manages its own state independently of other components.',
            '<strong>State Updates:</strong> Always use setter functions; never mutate state directly. State updates are asynchronous.',
            '<strong>Complex State:</strong> Use <code>useReducer</code> for complex state logic with multiple sub-values or dependencies.',
            '<span class="badge bg-warning text-dark me-2">Performance</span> <strong>Optimization:</strong> Use <code>useCallback</code> and <code>useMemo</code> to prevent unnecessary re-renders.',
            '<strong>State Lifting:</strong> Move state up to parent component when multiple children need to share the same data.'
          ],
          code: `import React, { useState, useReducer, useCallback } from 'react';

// Basic useState example
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={increment} />
    </View>
  );
};

// Complex state with useReducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', text });
    setText('');
  };

  return (
    <View>
      {/* Render todos and input */}
    </View>
  );
};`
        }
      ]
    },
    networking: {
      title: 'Networking & APIs',
      sections: [
        {
          heading: 'Networking & APIs',
          list: [
            '<strong>Authentication:</strong> Securely identify users using login/signup forms, tokens, and backend APIs.',
            'Use form validation libraries (like <code>Formik</code> + <code>Yup</code> ) for managing forms.',
            'Securely store access tokens using <code>AsyncStorage</code> or <code>SecureStorage</code> .',
            'Use JWT (JSON Web Tokens) for session-based authentication.',
            'You can integrate social auth (Google, Facebook) using Firebase or OAuth providers.'
          ],
          code: `const loginUser = async () => {
  const response = await fetch('https://api.example.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (data.token) {
    await AsyncStorage.setItem('token', data.token);
  }
};`
        }
      ]
    },
    performance: {
      title: 'Performance Optimization',
      sections: [
        {
          heading: 'Performance Optimization',
          list: [
            '<span class="badge bg-danger me-2">Critical</span> <strong>getItemLayout:</strong> Pre-define item dimensions for instant scrolling and better performance. <code> getItemLayout=(data, index) => {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index} </code>',
            '<strong>removeClippedSubviews:</strong> Remove off-screen views from native view hierarchy. Set to <code>true</code> for large lists.',
            '<strong>keyExtractor:</strong> Use stable, unique keys. Avoid array indices. Use item IDs or unique properties.',
            '<span class="badge bg-warning text-dark me-2">Memory</span> <strong>maxToRenderPerBatch:</strong> Control batch size (default: 10). Smaller values = smoother scrolling.',
            '<strong>windowSize:</strong> Number of screen lengths to render (default: 21). Reduce for memory optimization.',
            '<strong>initialNumToRender:</strong> Items to render initially (default: 10). Balance between performance and blank screens.',
            '<span class="badge bg-info text-dark me-2">Render</span> <strong>useCallback:</strong> Wrap renderItem and keyExtractor in useCallback to prevent unnecessary re-renders.',
            `<strong>React.memo:</strong> Memoize item components to prevent re-renders when props haven't changed.`
          ]
        }
      ]
    },
    redux: {
      title: 'Redux',
      sections: [
        {
          heading: 'Redux',
          list: [
            '<strong>Redux:</strong> A predictable state container for global app state management.',
            'Common in large-scale apps with complex data flows.',
            '<strong>Core Concepts:</strong> Store, Reducers, Actions, Dispatch, and Middleware.',
            'Works well with <code>react-redux</code> for connecting UI to state.',
            '<strong>Setup:</strong> Requires boilerplate but is powerful for cross-component communication.'
          ],
          code: `// store.js
import { createStore } from 'redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;`
        }
      ]
    },
    'context-api': {
      title: 'Context API',
      sections: [
        {
          heading: 'Context API',
          list: [
            '<strong>Context API:</strong> Native solution for state sharing across components without prop drilling.',
            'Good for themes, auth, language settings, and other global values.',
            'Consists of <code>createContext</code> , <code>Provider</code> , and <code>useContext</code> .',
            'Simpler than Redux for basic state needs, no external packages needed.'
          ],
          example: {
            title: 'Example',
            code: `import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);`,
            output: `import * as Linking from 'expo-linking';

const url = Linking.createURL('profile/42'); // opens deep route

Linking.openURL(url);

const loginUser = async () => {
  const response = await fetch('https://api.example.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (data.token) {
    await AsyncStorage.setItem('token', data.token);
  }
};

// Enable logs
console.log('Debug log');

// Show Dev Menu on Android manually
import { DevSettings } from 'react-native';
DevSettings.reload();

// Example Native Module (Android - Java)
@ReactModule(name = "MyNativeModule")
public class MyNativeModule extends ReactContextBaseJavaModule {
  @ReactMethod
  public void showToast(String message) {
    Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
  }
}`,
            type: 'code'
          }
        }
      ]
    },
    'deep-linking': {
      title: 'Deep Linking',
      sections: [
        {
          heading: 'Deep Linking',
          list: [
            '<strong>Deep Linking:</strong> Allows your app to respond to custom URLs or open specific screens directly.',
            'Useful for opening screens from notifications, emails, or external links.',
            '<strong>React Navigation:</strong> Supports deep linking via config in <code>linking</code> prop of <code>NavigationContainer</code> .',
            '<strong>Custom Schemes:</strong> Define in native code for iOS and Android.',
            'Use <code>Linking.openURL()</code> to open external or in-app URLs.'
          ],
          code: `import * as Linking from 'expo-linking';

const url = Linking.createURL('profile/42'); // opens deep route

Linking.openURL(url);`
        }
      ]
    },
    authentication: {
      title: 'Authentication',
      sections: [
        {
          heading: 'Authentication',
          list: [
            '<strong>Authentication:</strong> Securely identify users using login/signup forms, tokens, and backend APIs.',
            'Use form validation libraries (like <code>Formik</code> + <code>Yup</code> ) for managing forms.',
            'Securely store access tokens using <code>AsyncStorage</code> or <code>SecureStorage</code> .',
            'Use JWT (JSON Web Tokens) for session-based authentication.',
            'You can integrate social auth (Google, Facebook) using Firebase or OAuth providers.'
          ],
          code: `const loginUser = async () => {
  const response = await fetch('https://api.example.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (data.token) {
    await AsyncStorage.setItem('token', data.token);
  }
};`
        }
      ]
    }
  },
  module5: {
    security: {
      title: 'Security Best Practices',
      sections: [
        {
          heading: 'Security Best Practices',
          list: [
            '<strong>Secure Storage:</strong> Used to store sensitive data like tokens, passwords, and credentials.',
            'More secure than AsyncStorage; encrypted and backed by platform-specific secure systems.',
            '<strong>Libraries:</strong> Popular ones include <code>react-native-keychain</code> , <code>react-native-encrypted-storage</code> .',
            'Supports biometric protection and authentication (Face ID, fingerprint).'
          ],
          code: `// Using react-native-keychain
import * as Keychain from 'react-native-keychain';

const saveSecureData = async () => {
  await Keychain.setGenericPassword('username', 'secret_password');
};

const loadSecureData = async () => {
  const credentials = await Keychain.getGenericPassword();
  if (credentials) {
    console.log('Username:', credentials.username);
  }
};`
        }
      ]
    },
    'dev-menu': {
      title: 'Dev Menu & Debugging',
      sections: [
        {
          heading: 'Dev Menu & Debugging',
          list: [
            '<strong>Dev Menu:</strong> Access with ⌘D (iOS), Ctrl+M or Shake (Android).',
            '<strong>Remote Debugging:</strong> Enables debugging via Chrome or React DevTools.',
            '<strong>Fast Refresh:</strong> Automatically reloads updated components without full reload.',
            '<strong>Console Logs:</strong> Output to Metro bundler terminal or debug console.',
            '<strong>Reactotron / Flipper:</strong> Third-party tools for inspecting Redux, async storage, navigation, etc.'
          ],
          code: `// Enable logs
console.log('Debug log');

// Show Dev Menu on Android manually
import { DevSettings } from 'react-native';
DevSettings.reload();`
        }
      ]
    },
    'native-modules': {
      title: 'Native Modules',
      sections: [
        {
          heading: 'Native Modules',
          list: [
            '<strong>Native Modules:</strong> Used to access native platform APIs not available in JavaScript by default.',
            'You can write native code in Java (Android) or Objective-C/Swift (iOS) and expose it to JavaScript.',
            '<strong>Common Use Cases:</strong> Sensors, Bluetooth, background services, file system access, etc.',
            '<strong>Bridge:</strong> Communication happens over a “bridge” between JavaScript and native code.',
            '<strong>Libraries:</strong> Many third-party libraries use native modules internally (e.g., camera, location, biometrics).'
          ],
          code: `// Example Native Module (Android - Java)
@ReactModule(name = "MyNativeModule")
public class MyNativeModule extends ReactContextBaseJavaModule {
  @ReactMethod
  public void showToast(String message) {
    Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
  }
}`
        }
      ]
    },
    'interview-questions': {
      title: 'Interview Questions',
      sections: [
        {
          heading: 'Interview Questions',
          list: [
            '<span class="badge bg-primary me-2">Fundamental</span> What is the difference between React and React Native?',
            'How does React Native handle rendering UI on different platforms?',
            'What are the benefits and limitations of using React Native?',
            '<span class="badge bg-success me-2">Components</span> Explain the difference between <code>FlatList</code> and <code>ScrollView</code> .',
            'What are native modules? When should you use them?',
            'How would you persist data in a React Native app?',
            '<span class="badge bg-warning text-dark me-2">Advanced</span> Explain how navigation works in React Native.',
            'How can you secure user authentication and tokens?',
            'What are the performance considerations in React Native?',
            'How do you debug React Native applications?',
            '<span class="badge bg-info text-dark me-2">Expert</span> Explain the React Native bridge and how it works.',
            'How would you implement code splitting in React Native?',
            'What strategies would you use for handling offline functionality?',
            'How do you handle deep linking and universal links?',
            'Explain the difference between Expo and React Native CLI.',
            '<span class="badge bg-danger me-2">Scenario</span> How would you optimize a React Native app for performance?',
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
          heading: 'Project Examples',
          list: [
            '<span class="badge bg-success me-2">Beginner</span> <strong>To-Do App:</strong> CRUD operations with local storage, form validation, and list management.',
            '<strong>Calculator App:</strong> Mathematical operations with state management and responsive design.',
            '<strong>Weather App:</strong> API integration, location services, and data visualization.',
            '<span class="badge bg-warning text-dark me-2">Intermediate</span> <strong>Login + Registration:</strong> Authentication flow with JWT, form validation, and secure storage.',
            '<strong>News Reader:</strong> REST API integration with infinite scroll, search, and offline reading.',
            '<strong>Photo Gallery:</strong> Camera integration, image manipulation, and cloud storage.',
            '<strong>Music Player:</strong> Audio playback, playlist management, and media controls.',
            '<span class="badge bg-danger me-2">Advanced</span> <strong>E-commerce App:</strong> Product catalog, cart management, payment integration, and order tracking.',
            '<strong>Social Media App:</strong> User profiles, posts, comments, real-time updates, and media sharing.',
            '<strong>Chat Application:</strong> Real-time messaging with WebSockets, file sharing, and push notifications.',
            '<strong>Fitness Tracker:</strong> Health data integration, GPS tracking, charts, and wearable device connectivity.',
            '<span class="badge bg-info text-dark me-2">Enterprise</span> <strong>Banking App:</strong> Biometric authentication, transaction history, QR payments, and security features.',
            '<strong>Learning Management System:</strong> Video streaming, progress tracking, quizzes, and offline content.',
            '<strong>Delivery App:</strong> Real-time tracking, maps integration, route optimization, and driver management.'
          ]
        }
      ]
    },
    'best-practices': {
      title: 'Best Practices & Tips',
      sections: [
        {
          heading: 'Best Practices & Tips',
          list: [
            '<span class="badge bg-info text-dark me-2">TypeScript</span> <strong>Type Safety:</strong> Use <code>npx react-native init MyApp --template react-native-template-typescript</code> for better development experience.',
            '<strong>Type Definitions:</strong> Define <code>Props</code> and <code>State</code> interfaces. Use <code>React.FC</code> and <code>useState<Type></code> .',
            '<span class="badge bg-success me-2">Testing</span> <strong>Testing Tools:</strong> Use <code>Jest</code> for unit tests and <code>React Native Testing Library</code> for component testing.',
            '<strong>Test Coverage:</strong> Write tests for all business logic, UI components, and API integrations. Mock external dependencies.',
            '<strong>Debugging Tools:</strong> Use <code>console.log</code> , React Native Debugger, and Flipper for comprehensive debugging.'
          ]
        }
      ]
    }
  }
};
