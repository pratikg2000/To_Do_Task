# To-Do & Notes (React Native)

A small To-Do & Notes app demonstrating:

- UI (FlatList, forms, navigation)
- State management (local state + AsyncStorage persistence)
- API integration (JSONPlaceholder seed)
- Structure & best practices

Features:

- Tasks: list, add/edit, toggle complete, delete
- Search + filter (All / Pending / Completed)
- Simple animations on toggle/delete (LayoutAnimation)
- Notes tab: free-form text with autosave

Tech:

- React Navigation (Bottom Tabs + Native Stack)
- AsyncStorage for persistence
- React Native core components only

## Getting Started

1. Initialize a React Native app (if you don't already have one):
   npx react-native init TodoNotesApp

2. Copy files from this repo into your project root:

   - index.js
   - app.json
   - App.js
   - src/\*\*

3. Install dependencies:
   npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
   npm install @react-native-async-storage/async-storage
   npm install react-native-screens react-native-safe-area-context

   iOS only:
   npx pod-install ios

4. Android only (for animations):
   LayoutAnimation is enabled in index.js for Android.

5. Run:
   npx react-native run-android
   npx react-native run-ios

## Notes

- On first launch, tasks are seeded from https://jsonplaceholder.typicode.com/todos.
- Title is required when saving a task.
- Delete/toggle use LayoutAnimation for simple feedback.

## Improvements

- Unit tests and E2E (Jest/Detox)
- Offline/online sync strategy
- Better theming and icons
- Reanimated for richer animations
