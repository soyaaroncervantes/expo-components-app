import {useRef} from "react";
import {Animated, PanResponder, SafeAreaView} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null, {
        dx: pan.x,
        dy: pan.y,
      }], {
      useNativeDriver: false
    }),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false
      }).start();
    }
  })
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center items-center ">
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout()]}
          className="bg-indigo-400 h-40 w-40 rounded-xl"/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Animation102Screen;
