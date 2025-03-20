import {Animated} from "react-native";
import {useReducer, useRef} from "react";
import {Easing} from "react-native-reanimated";

export const useAnimation = () => {
  const animationOpacity = useRef(new Animated.Value(0)).current;
  const animationTranslateY = useRef(new Animated.Value(0)).current;
  const [visible, toggle] = useReducer((s) => !s, true);

  const fadeIn = ({
                    duration = 300,
                    toValue = 1,
                    useNativeDriver = true,
                    easing = Easing.linear,
                    callback = () => void 0
  }) => {
    Animated.timing(animationOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing
    }).start(callback);
  }

  const fadeOut = ({
                     duration = 300,
                     toValue = 0,
                     useNativeDriver = true,
                     easing = Easing.ease,
                     callback = () => void 0
                   }) => {
    Animated.timing(animationOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  }

  const translateUp = ({
                         duration = 300,
                         toValue = 0,
                         initialPosition = -100,
                         useNativeDriver = true,
                         easing = Easing.linear,
                         callback = () => void 0
                       }) => {
    animationTranslateY.setValue(initialPosition);
    Animated.timing(animationTranslateY, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  }

  return {
    animationOpacity,
    animationTranslateY,
    fadeIn,
    fadeOut,
    translateUp,
    moti: {
      visible,
      toggle
    }
  }
}
