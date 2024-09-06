import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTab from './AppTab';
import WelcomeScreen from './screens/WelcomeScreen';
import WebModal from './screens/WebModal';
import FiendUser from './screens/FiendUser';


export type RootStackParamList = {
    WelcomeScreen: undefined;
    AppTab: undefined;
    WebModal: undefined;
    fiendUser: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen" >
                <Stack.Group>
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
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="WebModal" options={{ title: 'Products' }} component={WebModal} />
                    <Stack.Screen name="fiendUser" options={{ title: 'Fiend User' }} component={FiendUser} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;
