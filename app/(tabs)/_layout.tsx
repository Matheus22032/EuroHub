import { Tabs, useSegments } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.darkGunmetal,
          borderColor: 'transparent',
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
          height: 80,
          position: 'absolute',
        },
        tabBarActiveTintColor: Colors.cultured,
        headerShown: false,
        tabBarLabel: () => null,
      }}
      >
        <Tabs.Screen
        name="index"
        options={{
          href: null,
          title: 'Home',
          tabBarStyle: {
            display: 'none',
          }
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubble' : 'chatbubble-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="treinamento/treinamento"
        options={{
          href: null,
          title: 'Treinamento',
          tabBarStyle: {
            display: 'none',
          }
        }}
        
      />
      
      
    </Tabs>
  );
}
