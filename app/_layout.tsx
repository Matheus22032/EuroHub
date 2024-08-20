import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    CabinetBlack: require('../assets/fonts/CabinetGrotesk-Black.otf'),
    CabinetBold: require('../assets/fonts/CabinetGrotesk-Bold.otf'),
    CabinetExtrabold: require('../assets/fonts/CabinetGrotesk-Extrabold.otf'),
    CabinetExtralight: require('../assets/fonts/CabinetGrotesk-Extralight.otf'),
    CabinetLight: require('../assets/fonts/CabinetGrotesk-Light.otf'),
    CabinetMedium: require('../assets/fonts/CabinetGrotesk-Medium.otf'),
    CabinetRegular: require('../assets/fonts/CabinetGrotesk-Regular.otf'),
    CabinetThin: require('../assets/fonts/CabinetGrotesk-Thin.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
