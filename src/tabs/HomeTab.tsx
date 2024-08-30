import React, { FunctionComponent } from 'react'

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


//screens
import HomeScreens from '../screens/HomeScreen'
import Details from '../screens/Details'
import Web from '../screens/Web'

export type RootStackParamList = {
    HomeScreen: undefined;
    Web: undefined;
    Details: { productId: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>()


const HomeTab = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreens'>
                <Stack.Screen
                    name='HomeScreens'
                    component={HomeScreens as FunctionComponent}
                    options={{
                        title: "Home",
                        headerStyle: {
                            backgroundColor: "#FFFFFF"
                        },
                        headerTintColor: "#000000",
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

export default HomeTab