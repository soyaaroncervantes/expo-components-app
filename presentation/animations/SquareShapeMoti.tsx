import { View } from "moti"
import {Easing} from "react-native-reanimated";

const SquareShapeMoti = () => {
  return (
    <View
      className="bg-green-300 h-32 w-32 rounded-xl aspect-square"
      from={{
        opacity: 0,
        transform: [{translateY: -200}]
      }}
      animate={{
        opacity: 1,
        transform: [{translateY: 0}]
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        type: 'timing',
        duration: 300,
        easing: Easing.bounce,
      }}>
    </View>
  )
}
export default SquareShapeMoti
