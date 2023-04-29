import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR } from '../../../../lib/constants/color';

export default function DontHaveAccount({ marginTop = 0, onPress = (): void => undefined }) {
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
      <Text style={[styles.textAttributes]}>{"Don't have an account?"}</Text>
    </TouchableOpacity>
  );
}
