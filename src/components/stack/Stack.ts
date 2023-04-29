import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  GetStarted: undefined;
};

export const Stack = createStackNavigator<RootStackParamList>();
