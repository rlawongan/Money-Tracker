import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import CoreComponents from './src/CoreComponents';
import Grid from './src/Grid';
import Main from './src/Main';
import Register from './src/screens/Register';
import UsersList from './src/components/molecules/UsersList';
import {
  Home,
  SignIn,
  SignUp,
  SplashScreen,
  Report,
  CashOnHand,
  CashOnBank,
} from './src/screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconHome, IconReport} from './src/assets/icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#02CF8E',
        inactiveTintColor: '#8D92A3',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <IconHome />,
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <IconReport />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={({route}) => ({
            headerShown: false,
            tabBarVisible: route.name === 'Home',
          })}
        />
        <Stack.Screen
          name="CashOnHand"
          component={CashOnHand}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CashOnBank"
          component={CashOnBank}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
