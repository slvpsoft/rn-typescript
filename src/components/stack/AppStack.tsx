import React from 'react';
import { Stack } from './Stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import { TransitionPresets } from '@react-navigation/stack';
import DashboardStack from './DashboardStack';
import GetStarted from '../../screens/GetStarted';

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{
        gestureEnabled: false,
        ...TransitionPresets.ScaleFromCenterAndroid,
      }}
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
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
