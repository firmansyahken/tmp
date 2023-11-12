import { StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Account, Detail, Forum, Home, Post } from './pages';
import { BottomNavigator } from './components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <>
      <StatusBar hidden={true}/>
      <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="Post" component={Post} options={{ headerShown: false }}/>
        <Tab.Screen name="Forum" component={Forum} options={{ headerShown: false }}/>
        <Tab.Screen name="Account" component={Account} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App
