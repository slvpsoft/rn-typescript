import { NavigationTypes } from '../types/navigation/NavigationTypes';
import { useNavigation as uN } from '@react-navigation/native';

export default function useNavigation() {
  return uN<NavigationTypes>();
}
