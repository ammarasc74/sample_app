import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/Screens/Home/';
import Profile from '@/Screens/Profile';
import Settings from '@/Screens/Settings/';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          borderRadius: 25,
          marginHorizontal: '5%',
          borderWidth: 1,
          borderColor: '#fff',
          height: 60,
          position: 'absolute',
          bottom: '2%',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999,
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#000',
        headerShown: false,
        tabBarIconStyle: {
          display: 'none',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          alignSelf: 'center',
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}
