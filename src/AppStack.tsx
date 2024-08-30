import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTab from './AppTab';
import WelcomeScreen from './screens/WelcomeScreen';


export type RootStackParamList = {
    WelcomeScreen: undefined;
    AppTab: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();



const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen" >
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen as FunctionComponent}
                    options={{
                        headerShown: false,
                        title: 'Welcome',
                    }}
                />
                <Stack.Screen
                    name="AppTab"
                    component={AppTab}
                    options={{
                        headerShown: false,
                        title: 'Home',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;
