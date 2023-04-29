import { View, StyleSheet } from 'react-native';
import React from 'react';
import WhyFocusLogoSVG from '../../../../assets/svg/Why_focus.svg';
import { useDimensionsStore } from '../../../store/useDimensionsStore';

export type WhyFocusProps = {
  marginTop?: number;
};

export default function WhyFocusLogo({ marginTop = 20 }: WhyFocusProps) {
  const LOGO_SIZE = 250;
  const screeWidth = useDimensionsStore((state) => state.screenWidth);

  const styles = StyleSheet.create({
    container: {
      marginTop,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <>
      <View style={[styles.container]}>
        <WhyFocusLogoSVG width={screeWidth <= 450 ? screeWidth - 40 : '70%'} height={LOGO_SIZE} />
      </View>
    </>
  );
}
