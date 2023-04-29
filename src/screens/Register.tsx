import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import CommonTextInput from '../components/CommonTextInput';
import CommonButton from '../components/CommonButton';
import useNavigation from '../hooks/useNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CreateYourAccountText from './components/register/CreateYourAccountText';
import { COLOR } from '../../lib/constants/color';
import AlreadyHaveAccount from './components/register/AlreadyHaveAccount';

export default function Register() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  function redirectLogin(): void {
    navigation.navigate('Login');
  }

  function submit(): void {
    null;
  }

  return (
    <AppLayout paddingTop={insets.top}>
      <CreateYourAccountText marginTop={50} />
      <CommonTextInput marginTop={30} name="Email Address" paddingHorizontal={40} />
      <CommonTextInput name="Password" paddingHorizontal={40} secureTextEntry={true} />
      <CommonButton
        onPress={submit}
        backgroundColor={COLOR.TERTIARY}
        marginTop={30}
        alignItems="center"
        paddingVertical={15}
        fullWidth={false}
        buttonWidth={'50%'}
        label="SUBMIT"
      />
      <AlreadyHaveAccount onPress={redirectLogin} marginTop={27} />
    </AppLayout>
  );
}
