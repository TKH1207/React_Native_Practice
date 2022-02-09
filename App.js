import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import HomeDetailsScreen from './src/screens/HomeDetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SettingsDetailsScreen from './src/screens/SettingsDetailsScreen';
import ListScreen from './src/screens/ListScreen';
import ListDetailsScreen from './src/screens/ListDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// for redux
import configureStore from './src/redux/store';
import { StoreContext } from 'redux-react-hook';
const store = configureStore();


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerBackTitle: '返回',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeDetails" component={HomeDetailsScreen} />
    </Stack.Navigator>
  );
}
function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName='Settings'
      screenOptions={{
        headerBackTitle: '返回',
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="SettingsDetails" component={SettingsDetailsScreen} />
    </Stack.Navigator>
  );
}
function ListStack() {
  return (
    <Stack.Navigator
      initialRouteName='List'
      screenOptions={{
        headerBackTitle: '返回',
      }}
    >
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="ListDetails" component={ListDetailsScreen} />
    </Stack.Navigator>);

}

function App() {

  return (

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: '#F1C40F',
          headerShown: false,
        }}

      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={'home-outline'} size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="List"
          component={ListStack}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={'list-outline'} size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={'settings-outline'} size={size} color={color} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer >

  );
}

export default MyApp = () => (
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
