
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Provider } from 'react-redux';
import store from './src/store/index';

import HomePage from './src/screens/HomePage';
import Search from './src/screens/SearchPage';
import Fav from './src/screens/FavPage';
import DetailPage from './src/screens/DetailPage'

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
        showLabel: false,
        activeTintColor: '#0063dc',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#313131',
          borderTopWidth: 1,
          borderColor: 'white',
        },
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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="roothome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="fav" component={Fav} />
          <Stack.Screen name="detail" component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};