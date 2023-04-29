import { View, TextInput, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR } from '../../lib/constants/color';

type CommonTextInputProps = {
  name?: string;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  secureTextEntry?: boolean;
};

export default function CommonTextInput({
  name = 'Name',
  marginHorizontal = 0,
  marginTop = 0,
  marginBottom = 0,
  paddingVertical = 10,
  paddingHorizontal = 0,
  secureTextEntry = false,
}: CommonTextInputProps) {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginHorizontal,
      marginTop,
      marginBottom,
      paddingHorizontal,
      paddingVertical: paddingVertical,
    },
    text: {
      fontSize: 18,
      color: COLOR.TERTIARY,
      marginBottom: 5,
    },
    textInput: {
      backgroundColor: COLOR.WHITE,
      borderWidth: 3,
      borderColor: COLOR.PRIMARY,
      height: 42,
      borderRadius: 5,
      paddingLeft: 10,
      fontSize: 20,
    },
  });
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>{name}</Text>
      <TextInput secureTextEntry={secureTextEntry} style={[styles.textInput]} />
    </View>
  );
}
