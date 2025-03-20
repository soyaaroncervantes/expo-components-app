import {View, ViewProps} from 'react-native'
import {useThemeColor} from "@/hooks/useThemeColor";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface Props extends ViewProps {
  margin?: boolean;
  safe?: boolean;
  fullScreen?: boolean;
  colors?: {
    background: string;
  }
}

const ThemeView = ({className, style, margin = false, safe = false, fullScreen = false, colors, children}: Props) => {
  const backgroundColor = colors?.background ?? useThemeColor({}, 'background');
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
