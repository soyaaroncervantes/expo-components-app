import {useEffect} from 'react';
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useColorScheme} from "react-native";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useThemeColor} from "@/hooks/useThemeColor";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemedText from "@/presentation/shared/ThemedText";
import 'react-native-reanimated';
import './global.css';
import {Stack} from "expo-router";
import {AppRoutes} from "@/constants/Routes";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background')
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <GestureHandlerRootView style={{
      backgroundColor,
      flex: 1
    }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor },
          headerStyle: { backgroundColor },
        }}>
          <Stack.Screen
            name='index'
            options={{
              title: 'Inicio',
              headerShown: false,
            }} />

          { AppRoutes.map(({name, title}) => (
            <Stack.Screen key={name} name={name} options={{title: title}} />
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
