import { View, Text } from 'react-native';
import React from 'react';

export type WhyFocusDescriptionTextProps = {
  description?: string;
  marginTop?: number;
};

export default function WhyFocusDescriptionText({ description = '', marginTop = 0 }: WhyFocusDescriptionTextProps) {
  return <Text className={`text-center text-2xl text-primary mt-${marginTop}`}>{description}</Text>;
}
