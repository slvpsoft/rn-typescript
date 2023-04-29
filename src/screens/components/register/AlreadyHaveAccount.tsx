import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR } from '../../../../lib/constants/color';

type AlreadyHaveAccountProps = {
  marginTop?: number;
  onPress?: () => void;
};

export default function AlreadyHaveAccount({ marginTop = 0, onPress = (): void => undefined }: AlreadyHaveAccountProps) {
  const styles = StyleSheet.create({
    container: {
      marginTop,
    },
    textAttributes: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '700',
      color: COLOR.TERTIARY,
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <Text style={[styles.textAttributes]}>{'Already have an account? '}</Text>
    </TouchableOpacity>
  );
}
