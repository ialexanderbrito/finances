import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import {
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
  useFonts,
} from '@expo-google-fonts/comfortaa';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Routes />
      <StatusBar style="dark" backgroundColor="transparent" translucent />
    </>
  );
}
