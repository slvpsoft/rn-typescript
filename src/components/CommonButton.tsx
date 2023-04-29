import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR } from '../../lib/constants/color';
import { useDimensionsStore } from '../store/useDimensionsStore';

type CommonButtonProps = {
  label?: string;
  onPress?: () => void;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  fullWidth?: boolean;
  buttonWidth?: number | string;
  fontSize?: number;
  paddingVertical?: number | string;
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
  backgroundColor?: string;
};

export default function CommonButton({
  label = 'Button',
  onPress = (): void => undefined,
  marginHorizontal = 20,
  marginTop = 0,
  marginBottom = 0,
  fullWidth = true,
  buttonWidth = '100%',
  fontSize = 20,
  paddingVertical = 20,
  alignItems = 'baseline',
  backgroundColor = COLOR.PRIMARY,
}: CommonButtonProps) {
  const screenWidth = useDimensionsStore((state) => state.screenWidth);

  const styles = StyleSheet.create({
    outsideContainer: {
      alignItems,
    },
    container: {
      backgroundColor,
      marginTop,
      marginBottom,
      paddingVertical,
      width: fullWidth ? '100%' : buttonWidth,
    },
    text: {
      fontWeight: 'bold',
      fontSize: fontSize,
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={[styles.outsideContainer]}>
      <View className={`rounded-md`} style={[styles.container]}>
        <View style={{ marginHorizontal: marginHorizontal }}>
          <Text className="text-white text-center" style={[styles.text]}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
