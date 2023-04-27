import { Dimensions } from 'react-native';
import { create } from 'zustand';

type UseDimensionsStoreType = {
  screenWidth: number;
  screenHeight: number;
  windowWidth: number;
  windowHeight: number;
  setScreen: (width: number, height: number) => void;
  setWindow: (width: number, height: number) => void;
};

const dimensionScreen = Dimensions.get('screen');
const dimensionWindow = Dimensions.get('window');

const useDimensionsStore = create(
  (set: any) =>
    ({
      screenWidth: dimensionScreen.width,
      screenHeight: dimensionScreen.height,
      windowWidth: dimensionWindow.width,
      windowHeight: dimensionWindow.height,
      setScreen: (width: number, height: number) => set(() => ({ screenWidth: width, screenHeight: height })),
      setWindow: (width: number, height: number) => set(() => ({ windowWidth: width, windowHeight: height })),
    } as unknown as UseDimensionsStoreType)
);

export { useDimensionsStore, UseDimensionsStoreType };
