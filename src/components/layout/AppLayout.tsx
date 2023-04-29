import { ScrollView, StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { useDarkmodeStore, UseDarkmodeStoreType } from '../../store/useDarkmodeStore';
import { COLOR } from '../../../lib/constants/color';

type AppLayoutProps = {
  children: ReactNode;
  paddingTop?: number;
};

export default function AppLayout({ children, paddingTop = 0 }: AppLayoutProps) {
  const darkmode = useDarkmodeStore((state: UseDarkmodeStoreType) => state.darkmode);
  console.log({ darkmode });

  const styles = StyleSheet.create({
    theme: {
      backgroundColor: darkmode ? COLOR.DARK : COLOR.LIGHT,
    },
  });
  return <ScrollView style={[{ flex: 1, paddingTop }, styles.theme]}>{children}</ScrollView>;
}
