import { View, Text } from 'react-native';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import CommonTextInput from '../components/CommonTextInput';
import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();

  function redirectRegister(): void {
    navigation.navigate('Register');
  }
  return (
    <AppLayout>
      <View className="items-center flex-1">
        <Text className="mt-20 text-xl">Register</Text>
        <CommonTextInput marginTop={20} />
        <CommonTextInput marginTop={20} />
        <CommonTextInput marginTop={20} />
        <CommonButton onPress={redirectRegister} label="Continue" marginTop={20} />
      </View>
    </AppLayout>
  );
}
