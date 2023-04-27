import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR } from '../../lib/constants/color';
import { useDimensionsStore } from '../store/useDimensionsStore';

export default function CommonButton({
  label = 'Button',
  onPress = (): void => undefined,
  marginHorizontal = 20,
  marginTop = 0,
  marginBottom = 0,
}) {
  const screenWidth = useDimensionsStore((state) => state.screenWidth);
  return (
    <View className="">
      <TouchableOpacity onPress={onPress}>
        <View
          className="w-full items-center justify-center p-3 rounded-md"
          style={{
            backgroundColor: COLOR.PRIMARY,
            marginTop,
            marginBottom,
          }}
        >
          <View style={{ marginHorizontal: marginHorizontal }}>
            <Text className="text-white">{label}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
