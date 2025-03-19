import {Text, TextProps} from 'react-native'

type TextType = 'display' | 'headline' | 'title' | 'body' | 'label';

interface Props extends TextProps {
  type: TextType;
}

const ThemedText = ({type, className, children, ...rest}: Props) => {
  return (
    <Text
      className={[
        'text-light-text dark:text-dark-text',
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
export default ThemedText
