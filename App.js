// // App.js
// import React from 'react';
// import {Provider} from 'react-redux';
// import store from './src/redux/store';
// import RootNavigator from './src/navigation/RootNavigator';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <RootNavigator />
//     </Provider>
//   );
// };

// export default App;

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import RootNavigator from './src/navigation/RootNavigator';
import {StatusBar, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      {/* Wrap the navigator in SafeAreaView to handle notch devices */}
      <SafeAreaView style={{flex: 1, backgroundColor: '#FADACD'}}>
        {/* Global StatusBar setup */}
        <StatusBar
          backgroundColor="#FADACD"
          barStyle="dark-content"
          translucent={false}
        />
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
