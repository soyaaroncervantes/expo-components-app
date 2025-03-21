import {View, ViewProps} from "react-native";

interface Props extends ViewProps {
  shadow?: boolean;
  compact?: boolean;
}

const ThemeCard = ({children, compact = false, shadow = false, className, ...props}: Props) => {
  return (
    <View
      className={[
        "bg-purple-100 dark:bg-purple-900 rounded-lg",
        shadow && 'shadow',
        !compact && 'p-4',
        className,
      ].join(' ')}
      {...props}>
      {children}
    </View>
  )
}
export default ThemeCard
