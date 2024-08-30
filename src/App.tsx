import React from 'react';

//Navigation
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//screens
import Details from './screens/Details';
import HomeScreen from './screens/HomeScreen';
import Web from './screens/Web';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

// icons
import HouseIcon from './components/icons/HouseIcon';
import SettingIcon from './components/icons/SettingIcon';
import SettingsScreen from './screens/SettingsScreen';




// export type RootStackParamList = {
//   Home: undefined;
//   Web: undefined;
//   Details: { productId: string };
// };
// const Stack = createNativeStackNavigator<RootStackParamList>();

export interface RootTabParamList extends ParamListBase {
  HomeScreen: undefined;
  Web: undefined;
  SettingsScreen: undefined;
  // Details: { productId: string };
}
const Tab = createBottomTabNavigator<ParamListBase>();

export type tabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, // '#E0E0E0'
  };
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
    <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
      <StatusBar
        animated={true}
        backgroundColor={'#FFFFFF'}
        barStyle={'dark-content'}
        showHideTransition={'slide'}
        translucent={false}
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Web" component={Web} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
