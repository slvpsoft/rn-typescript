import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR } from '../../../../lib/constants/color';

type CreateYourAccountTextProps = {
  marginTop?: number;
};

export default function CreateYourAccountText({ marginTop = 0 }: CreateYourAccountTextProps) {
  const styles = StyleSheet.create({
    text1Attributes: {
      fontSize: 40,
      fontWeight: 'bold',
      color: COLOR.PRIMARY,
    },
    text2Attributes: {
      fontSize: 40,
      fontWeight: 'bold',
      color: COLOR.SECONDARY,
    },
  });
  return (
    <>
      <View style={[{ marginTop }]}>
        <Text className="text-center" style={[styles.text1Attributes]}>
          {'Create your'}
        </Text>
        <Text className="text-center" style={[styles.text2Attributes]}>
          {'account'}
        </Text>
      </View>
    </>
  );
}
