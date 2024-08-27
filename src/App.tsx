import React from 'react'

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import Home from './screens/Home'
import Details from './screens/Details'
import Web from './screens/Web'


export type RootStackParamList = {
  Home: undefined;
  Web: undefined;
  Details: { productId: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>()


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Trending Products",
            headerStyle: {
              backgroundColor: "#FF4242"
            },
            headerTintColor: "#FFFFFF",

          }}
        />
        <Stack.Screen
          name='Web'
          component={Web}
          options={{
            title: "Web"
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{
            title: "Product Details"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
