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
        <ThemedView margin safe>
          <ThemedText type='display'>Hello World</ThemedText>
          <ThemedText type="headline">Hello World</ThemedText>
          <ThemedText type="title">Hello World</ThemedText>
          <ThemedText type="body">Hello World</ThemedText>
          <ThemedText type="label">Hello World</ThemedText>
        </ThemedView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
