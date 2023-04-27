import { View, Text } from 'react-native';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import CommonTextInput from '../components/CommonTextInput';
import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  function redirectRegister(): void {
    navigation.navigate('Register');
  }

  function redirectHome(): void {
    navigation.navigate('Dashboard');
  }

  return (
    <AppLayout>
      <View className="items-center flex-1">
        <Text className="mt-20 text-xl">Login</Text>
        <CommonTextInput marginTop={20} />
        <CommonTextInput marginTop={20} />
        <CommonButton onPress={redirectRegister} label="Continue" marginTop={20} />
        <CommonButton onPress={redirectHome} label="Dashboard" marginTop={40} />
      </View>
    </AppLayout>
  );
}
