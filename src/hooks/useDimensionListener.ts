import React from 'react';
import { Dimensions } from 'react-native';
import { useDimensionsStore } from '../store/useDimensionsStore';

export default function useDimensionListener() {
  const setScreen = useDimensionsStore((state) => state.setScreen);
  const setWindow = useDimensionsStore((state) => state.setWindow);

  Dimensions.addEventListener('change', ({ screen, window }) => {
    setScreen(screen.width, screen.height);
    setWindow(window.width, window.height);
  });
}
