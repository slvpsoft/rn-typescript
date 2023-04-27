import React from 'react';
import { Stack } from './Stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import { TransitionPresets } from '@react-navigation/stack';
import DashboardStack from './DashboardStack';

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        gestureEnabled: false,
        ...TransitionPresets.ScaleFromCenterAndroid,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
