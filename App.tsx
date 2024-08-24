import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  useColorScheme,
  Platform,
  ScrollView,
  TextInput
} from 'react-native'

import FlatCards from './components/FlatCards'
import AppForm from './components/AppForm'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView >
      <ScrollView>
        <FlatCards />
        <AppForm />
      </ScrollView>

      {/* <View style={{backgroundColor: 'dodgerblue', width: 150, height: 70}}>
      </View>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello World !</Text>
      </View>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello World !</Text>
      </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },
  whiteText: {
    color: '#ffffff'
  },
  blackText: {
    color: '#000000'
  }
})

export default App