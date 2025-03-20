import { View } from "moti"

const SquareShape = () => {
  return (
    <View
      className="bg-green-300 h-32 w-32 rounded-xl"
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        type: 'timing',
        duration: 300
      }}>

    </View>
  )
}
export default SquareShape
