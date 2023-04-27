import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export default function useFocusHook(callback = () => undefined, deps = []): void {
  useFocusEffect(useCallback(callback, deps));
}
