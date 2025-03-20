import {Pressable, PressableProps} from 'react-native'
import ThemedText from "@/presentation/theme/Text";

interface Props extends PressableProps {
  onPress: () => void;
  bordered?: boolean;
  color?: 'primary' | 'base';
  children: string;
}

const ThemeButton = ({
                       color = 'base',
                       onPress,
                       bordered,
                       children,
                       className
                     }: Props) => {
  return (
    <Pressable
      className={[
        'py-2 px-4 rounded-xl active:opacity-80',
        bordered ? 'border border-purple-900' : undefined,
        color === 'base' ? 'bg-transparent border-purple-900' : undefined,
        color === 'primary' ? 'bg-purple-100 dark:bg-purple-900' : undefined,
        className,
      ].join(' ')}
      onPress={onPress}>
      <ThemedText type='body'>{children}</ThemedText>
    </Pressable>
  )
}
export default ThemeButton
