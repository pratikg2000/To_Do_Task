import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import RootNavigator from './src/navigation/RootNavigator';
import {StatusBar, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FADACD'}}>
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
