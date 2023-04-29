import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import CommonTextInput from '../components/CommonTextInput';
import CommonButton from '../components/CommonButton';
import useNavigation from '../hooks/useNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CreateYourAccountText from './components/register/CreateYourAccountText';
import WhyFocusLogo from './components/get-started/WhyFocusLogo';
import DontHaveAccount from './components/login/DontHaveAccount';
import { COLOR } from '../../lib/constants/color';

export default function Login() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  function redirectRegister(): void {
    navigation.navigate('Register');
  }

  function login(): void {
    null;
  }

  return (
    <AppLayout paddingTop={insets.top - 25}>
      <WhyFocusLogo marginTop={0} />
      <CommonTextInput marginTop={30} name="Email Address" paddingHorizontal={40} />
      <CommonTextInput name="Password" paddingHorizontal={40} secureTextEntry={true} />
      <CommonButton
        onPress={login}
        backgroundColor={COLOR.TERTIARY}
        marginTop={30}
        alignItems="center"
        paddingVertical={15}
        fullWidth={false}
        buttonWidth={'50%'}
        label="LOGIN"
      />
      <DontHaveAccount onPress={redirectRegister} marginTop={27} />
    </AppLayout>
  );
}
