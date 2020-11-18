import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Home from './screens/home';
import Navigator from './routes/drawer'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-SemiBold': require('./assets/fonts/Raleway-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Navigator />
    );
  }
}
