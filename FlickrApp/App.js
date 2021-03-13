
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomePage from './src/screens/homePage';
import Search from './src/screens/searchPage';
import Fav from './src/screens/favPage';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Explore') {
            iconName = 'explore'
          } else if (route.name === 'Fav') {
            iconName = 'subscriptions'
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Explore" component={Search} />
      <Tab.Screen name="Fav" component={Fav} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="roothome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoPlayer" component={Fav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};