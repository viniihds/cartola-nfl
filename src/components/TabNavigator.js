import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'


import Home from './Home';
import Team from './Team';
import Leagues from './Leagues';
import Friends from './Friends';


const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 50,
            position: "absolute",
            backgroundColor: '#0D0D0D',
            width: '100%',
            borderTopWidth: 0
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#2f3e46',
            },
            tabScreenStyle: {
              zIndex: 1,
            },
            headerTintColor:'white',
            justifyContent: 'center',
            tabBarActiveTintColor: "#cad2c5",
            tabBarInactiveTintColor: 'white',
            headerShadowVisible: false,
            headerShown:false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size, focused }) => {
                if(focused){
                    return <Ionicons name='home' size={size} color='#2EF297' />
                }
                
                return  <Ionicons name='home-outline' size={size} color='#2EF297'/>

            },
          }}
        />
        <Tab.Screen
          name="Team"
          component={Team}
          options={{
            headerStyle: {
              backgroundColor: '#2f3e46',
            },
            tabScreenStyle: {
              zIndex: 1,
            },
            headerTintColor:'white',
            justifyContent: 'center',
            tabBarActiveTintColor: "#cad2c5",
            tabBarInactiveTintColor: 'white',
            headerShadowVisible: false,
            headerShown:false,
            tabBarLabel: "Team",
            tabBarIcon: ({ color, size, focused }) => {
                if(focused){
                    return <Ionicons name='american-football' size={size} color='#2EF297' />
                }
                
                return  <Ionicons name='american-football-outline' size={size} color='#2EF297'/>

            },
          }}
        />
        <Tab.Screen
          name="Leagues"
          component={Leagues}
          options={{
            headerStyle: {
              backgroundColor: '#2f3e46',
            },
            tabScreenStyle: {
              zIndex: 1,
            },
            headerTintColor:'white',
            justifyContent: 'center',
            tabBarActiveTintColor: "#cad2c5",
            tabBarInactiveTintColor: 'white',
            headerShadowVisible: false,
            headerShown:false,
            tabBarLabel: "Leagues",
            tabBarIcon: ({ color, size, focused }) => {
                if(focused){
                    return <Ionicons name='trophy' size={size} color='#2EF297' />
                }
                
                return  <Ionicons name='trophy-outline' size={size} color='#2EF297'/>

            },
          }}
        />
        <Tab.Screen
          name="Friends"
          component={Friends}
          options={{
            headerStyle: {
              backgroundColor: '#2f3e46',
            },
            tabScreenStyle: {
              zIndex: 1,
            },
            headerTintColor:'white',
            justifyContent: 'center',
            tabBarActiveTintColor: "#cad2c5",
            tabBarInactiveTintColor: 'white',
            headerShadowVisible: false,
            headerShown:false,
            tabBarLabel: "Friends",
            tabBarIcon: ({ color, size, focused }) => {
                if(focused){
                    return <Ionicons name='people' size={size} color='#2EF297' />
                }
                
                return  <Ionicons name='people-outline' size={size} color='#2EF297'/>

            },
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export default TabNavigator;