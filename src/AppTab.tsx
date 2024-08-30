import React from 'react';

// navigation
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';

// screens
import HomeScreen from './screens/HomeScreen';
import Web from './screens/Web';
import SettingsScreen from './screens/SettingsScreen';

// icons
import HouseIcon from './components/icons/HouseIcon';
import SettingIcon from './components/icons/SettingIcon';


export interface RootTabParamList extends ParamListBase {
    HomeScreen: undefined;
    Web: undefined;
    SettingsScreen: undefined;
    // Details: { productId: string };
}
export type tabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
}

const Tab = createBottomTabNavigator<ParamListBase>();

const AppTab = () => {

    const tabConfig: any[] = [{
        name: 'Home',
        component: HomeScreen,
        icon: HouseIcon,
    }, {
        name: 'Web',
        component: Web,
        icon: SettingIcon,
    }, {
        name: 'Settings',
        component: SettingsScreen,
        icon: SettingIcon,
    }];

    const screenOptions = ({ route }: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
    }): BottomTabNavigationOptions => ({
        tabBarActiveTintColor: '#cc0001',
        tabBarInactiveTintColor: '#000000',
        tabBarLabelStyle: {
            fontSize: 14,
            paddingBottom: 4,
            fontWeight: 600,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: '#CC00002D',
        tabBarItemStyle: {
            borderRadius: 50,
        },
        tabBarIconStyle: {
            marginTop: 10,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }: tabBarIconProps): React.JSX.Element => {
            const routeConfig = tabConfig.find(config => config.name === route.name);
            return (focused ? <routeConfig.icon color={'#cc0001'} fill={'#cc0001'} /> : <routeConfig.icon color={'#000000'} />);
        },
    });

    return (
        <Tab.Navigator
            screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Web" component={Web} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default AppTab;
