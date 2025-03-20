import {Pressable, PressableProps, Switch, SwitchProps} from 'react-native'
import ThemeText from "@/presentation/theme/Text";
import TwColors from "tailwindcss/colors";

interface Props extends SwitchProps {
  isEnabled: boolean;
  toggle: () => void;
  children?: string;
  containerProps?: PressableProps;
}

const ThemeSwitch = ({isEnabled, toggle, children, containerProps, ...rest}: Props) => {
  return (
    <Pressable
      onPress={toggle}
      className='flex flex-row items-center justify-between gap-4 active:opacity-80 bg-purple-100 dark:bg-purple-900 p-2 px-4 rounded-lg'
      {...containerProps}>
      <ThemeText type='body'>{children}</ThemeText>
      <Switch
        trackColor={{
          true: TwColors.purple[400],
          false: TwColors.purple[200]
        }}
        thumbColor={isEnabled ? TwColors.purple[700] : TwColors.purple[300]}
        ios_backgroundColor={isEnabled ? TwColors.purple[700] : TwColors.purple[300]}
        value={isEnabled}
        onValueChange={toggle}
        {...rest}/>
    </Pressable>
  )
}
export default ThemeSwitch
