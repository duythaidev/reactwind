import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { vars } from 'nativewind'

import './global.css';
import HomePage from 'components/HomePage';
import OtherPage from 'components/OtherPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '~/types';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

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
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Other"
            component={OtherPage}
            options={{ title: 'Other page' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
