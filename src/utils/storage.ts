import { MMKV } from 'react-native-mmkv';
import { expoConfig } from '../constants/expoConfig';

export const storage = new MMKV({
  id: expoConfig.slug,
  encryptionKey: expoConfig.mmkvKey,
});
