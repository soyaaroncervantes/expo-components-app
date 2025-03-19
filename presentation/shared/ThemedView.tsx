import {View, ViewProps} from 'react-native'
import {useThemeColor} from "@/hooks/useThemeColor";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface Props extends ViewProps {
  margin?: boolean;
  safe?: boolean;
  colors?: {
    background: string;
  }
}

const ThemedView = ({className, style, margin = false, safe = false, colors, children}: Props) => {
  const backgroundColor = colors?.background ?? useThemeColor({}, 'background');
  const safeArea = useSafeAreaInsets();
  return (
    <View
      className={`bg-light-background dark:bg-dark-background ${className}`}
      style={[
        {
          backgroundColor,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style
      ]}>
      {children}
    </View>
  )
}
export default ThemedView
