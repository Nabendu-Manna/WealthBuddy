import React from 'react';

//screens
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppStack from './AppStack';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, // '#E0E0E0'
  };


  return (
    <Provider store={store}>
      <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
        <StatusBar
          animated={true}
          backgroundColor={'#FFFFFF'}
          barStyle={'dark-content'}
          showHideTransition={'slide'}
          translucent={false}
        />
        <AppStack />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
