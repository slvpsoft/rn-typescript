import * as Constants from 'expo-constants';

const extraConfig: string | any = Constants.default.expoConfig?.extra;

export const expoConfig = {
  slug: extraConfig?.slug,
  mmkvKey: extraConfig?.mmkvKey || 'defaultKey',
};
