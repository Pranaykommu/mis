import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as AuthProvider } from './src/context/AuthContext';

import RegisterScreen from './src/Screens/Login/RegisterScreen';
import SignInScreen from './src/Screens/Login/SignInScreen';

import HomeScreen from './src/Screens/Main/HomeScreen';
import ProfileScreen from './src/Screens/Main/ProfileScreen';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/Screens/ResolveAuthScreen';
import Cam from './src/components/Cam';
import Fitters from './src/components/Fitters';


const loginFlow = createStackNavigator({
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
});

const mainFlow = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Cam: {
    screen: Cam,
    navigationOptions: {
      headerShown: false,
    }
  },
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: loginFlow,
 // mainFlow: mainFlow,
  Home: HomeScreen,
  Profile: ProfileScreen,
  Fitters: Fitters,
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={navigator=> {
          setNavigator(navigator);
        }}
         />
    </AuthProvider>
  )
}