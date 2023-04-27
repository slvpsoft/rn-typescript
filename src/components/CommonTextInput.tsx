import { View, TextInput, Dimensions } from 'react-native';
import React from 'react';
import { COLOR } from '../../lib/constants/color';

export default function CommonTextInput({ marginHorizontal = 20, marginTop = 0, marginBottom = 0, paddingVertical = 10 }) {
  return (
    <View
      style={{
        width: '100%',
      }}
    >
      <TextInput
        style={{
          backgroundColor: COLOR.WHITE,
          marginHorizontal,
          marginTop,
          marginBottom,
          paddingVertical: paddingVertical,
        }}
      />
    </View>
  );
}
