import { View, Text } from 'react-native';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';

export default function Home() {
  return (
    <AppLayout>
      <View className="justify-center items-center flex-1">
        <Text className="mt-20">User Authenticated Screen</Text>
      </View>
    </AppLayout>
  );
}
