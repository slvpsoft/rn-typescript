import { View, StyleSheet } from 'react-native';
import React from 'react';
import WhyFocusLogo from './components/get-started/WhyFocusLogo';
import AppLayout from '../components/layout/AppLayout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WhyFocusDescriptionText from './components/get-started/WhyFocusDescriptionText';
import CommonButton from '../components/CommonButton';
import { COLOR } from '../../lib/constants/color';
import useNavigation from '../hooks/useNavigation';

export default function GetStarted() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      marginTop: insets.top,
    },
  });

  const loginNow = () => {
    navigation.navigate('Login');
  };

  return (
    <AppLayout>
      <View style={[styles.container]}>
        <WhyFocusLogo marginTop={40} />
        <WhyFocusDescriptionText marginTop={20} description={`Makes productivity a habit \n thru Top Down Focus`} />
        <CommonButton
          onPress={loginNow}
          backgroundColor={COLOR.TERTIARY}
          marginTop={50}
          alignItems="center"
          paddingVertical={15}
          fullWidth={false}
          buttonWidth={'60%'}
          label="START"
        />
      </View>
    </AppLayout>
  );
}
