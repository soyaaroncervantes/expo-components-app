import {useRef} from "react";
import {Animated, View} from 'react-native';
import ThemeButton from "@/presentation/theme/Button";
import ThemeView from "@/presentation/theme/View";

const Animation101Screen = () => {
  const animationOpacity = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(animationOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
  const fadeOut = () => {
    Animated.timing(animationOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }
  return (
    <ThemeView className="flex-1 items-center justify-center gap-8">
      <Animated.View
        style={{opacity: animationOpacity}}
        className="bg-green-300 h-32 w-32 rounded-xl" />
      <View className="flex-row gap-4">
        <ThemeButton
          bordered
          color='primary'
          onPress={fadeIn}>Fade In</ThemeButton>
        <ThemeButton
          bordered
          onPress={fadeOut}>Fade Out</ThemeButton>
      </View>
    </ThemeView>

  );
}

export default Animation101Screen;
