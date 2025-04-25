import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


import './global.css';
import { Text, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    'NovaSlim-Regular': require('./assets/fonts/NovaSlim-Regular.ttf'),
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
    <View className='flex-1 justify-center '>
      {/* <ScreenContent title="Home" path="App.tsx" /> */}
      {/* <StatusBar style="auto" /> */}
      <View>
        <Text className='font-bold' style={{ fontFamily: 'NovaSlim-Regular' }}>
          SIUUU
        </Text>
      </View>
    </View>
  );
}
