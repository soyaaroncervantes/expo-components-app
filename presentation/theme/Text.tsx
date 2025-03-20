import {Text, TextProps} from 'react-native'

type TextType = 'display' | 'headline' | 'title' | 'body' | 'label';

interface Props extends TextProps {
  type: TextType;
}

const ThemeText = ({type, className, children, ...rest}: Props) => {
  return (
    <Text
      className={[
        'text-purple-950 dark:text-purple-100',
        type === 'display' && 'text-4xl font-light',
        type === 'headline' && 'text-2xl font-medium',
        type === 'title' && 'text-xl font-medium',
        type === 'body' && 'text-base',
        type === 'label' && 'text-sm font-bold',
        className
      ].join(' ')} {...rest}>
      {children}
    </Text>
  )
}
export default ThemeText
