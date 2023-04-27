import React from 'react';
import { Stack } from './Stack';
import { TransitionPresets } from '@react-navigation/stack';
import Home from '../../screens/Home';

export default function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        ...TransitionPresets.ScaleFromCenterAndroid,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
