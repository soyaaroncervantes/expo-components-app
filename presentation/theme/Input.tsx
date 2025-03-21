import {TextInput, TextInputProps} from 'react-native'
import TwColors from "tailwindcss/colors";

interface Props extends TextInputProps {
  className?: string
}

const ThemeTextInput = ({className, ...props}: Props) => {
  return (
    <TextInput
      placeholderTextColor={TwColors.purple[300]}
      className={[
        'p-2 mx-2 text-purple-950 dark:text-purple-50',
        className,
      ].join(' ')}
      {...props}/>
  )
}
export default ThemeTextInput
