import {Animated} from "react-native";

interface SquareShapeProps {
  opacity: Animated.Value;
  translateY: Animated.Value;
}

const SquareShape = ({opacity, translateY}: SquareShapeProps) => {
  return (
    <Animated.View
      className="bg-green-300 h-32 w-32 rounded-xl aspect-square"
      style={{
        opacity,
        transform: [{translateY}]
      }} />
  )
}
export default SquareShape
