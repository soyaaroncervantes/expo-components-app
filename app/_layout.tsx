import {useEffect} from 'react';
import {useColorScheme} from "react-native";
import {Stack} from "expo-router";
import {useFonts} from 'expo-font';
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {useThemeColor} from "@/hooks/useThemeColor";
import {AppRoutes} from "@/constants/Routes";
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
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{
          headerShadowVisible: false,
          contentStyle: {backgroundColor},
          headerStyle: {backgroundColor},
        }}>
          <Stack.Screen
            name='index'
            options={{
              title: 'Inicio',
              headerShown: false,
            }}/>

          {AppRoutes.map(({name, title}) => (
            <Stack.Screen key={name} name={name} options={{title: title}}/>
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
