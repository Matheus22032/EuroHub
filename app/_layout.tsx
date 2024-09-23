import { store } from "@/redux/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    CabinetBlack: require("../assets/fonts/CabinetGrotesk-Black.otf"),
    CabinetBold: require("../assets/fonts/CabinetGrotesk-Bold.otf"),
    CabinetExtrabold: require("../assets/fonts/CabinetGrotesk-Extrabold.otf"),
    CabinetExtralight: require("../assets/fonts/CabinetGrotesk-Extralight.otf"),
    CabinetLight: require("../assets/fonts/CabinetGrotesk-Light.otf"),
    CabinetMedium: require("../assets/fonts/CabinetGrotesk-Medium.otf"),
    CabinetRegular: require("../assets/fonts/CabinetGrotesk-Regular.otf"),
    CabinetThin: require("../assets/fonts/CabinetGrotesk-Thin.otf"),
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
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="conteudos/conteudoScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="conteudos/confirmIdentity"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="treinamentos/treinamentoScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="conhecimento/conhecimentoScreen"
          options={{ headerShown: false }}
        />
      </Stack>
    </Provider>
  );
}
