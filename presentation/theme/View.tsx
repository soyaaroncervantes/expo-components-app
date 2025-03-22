import {useColorScheme, View, ViewProps} from 'react-native'
import {useThemeColor} from "@/hooks/useThemeColor";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import TwColors from "tailwindcss/colors";

interface Props extends ViewProps {
  margin?: boolean;
  safe?: boolean;
  fullScreen?: boolean;
  colors?: {
    background: string;
  }
}

const ThemeView = ({className, style, margin = false, safe = false, fullScreen = false, colors, children}: Props) => {
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === 'dark' ? TwColors.neutral[900] : TwColors.neutral[100];
  const backgroundColor = colors?.background ?? bgColor;
  const safeArea = useSafeAreaInsets();
  return (
    <View
      className={[
        'bg-light-background dark:bg-dark-background',
        fullScreen && 'flex-1',
        className
      ].join(' ')}
      style={[
        {
          backgroundColor,
          paddingTop: safe ? safeArea.top : 0,
          margin: margin ? 10 : 0,
        },
        style
      ]}>
      {children}
    </View>
  )
}
export default ThemeView
