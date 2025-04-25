import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { vars } from 'nativewind'

import './global.css';
import HomePage from 'components/HomePage';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    'main-font': require('./assets/fonts/NovaSlim-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View className='flex-1  justify-center items-center'>
      <View className='border border-solid'>
        <Text className="text-primary ">Access as a theme value</Text>
        <Text className="text-[--color-rgb]">Or the variable directly</Text>

        <Text className='bg-mint-500 ' >
          SIUUU
        </Text>
      </View>
        <HomePage></HomePage>
    </View>
  );
}
