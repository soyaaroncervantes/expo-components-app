import ThemeButton from "@/presentation/theme/Button";
import ThemeView from "@/presentation/theme/View";
import SquareShapeMoti from "@/presentation/animations/SquareShapeMoti";
import {AnimatePresence, View} from "moti";
import {useAnimation} from "@/presentation/animations/hooks/useAnimation";
import SquareShape from "@/presentation/animations/SquareShape";
import {Easing} from "react-native-reanimated";

const Animation101Screen = () => {
  const {
    animationOpacity,
    animationTranslateY,
    fadeIn,
    fadeOut,
    translateUp,
    moti
  } = useAnimation();

  return (
    <ThemeView className="flex-1 items-center justify-center gap-8">
      <View className="w-full h-40 justify-center items-center gap-8 flex-row">
        <AnimatePresence>
          {moti.visible && <SquareShapeMoti/>}
        </AnimatePresence>
        <SquareShape
          opacity={animationOpacity}
          translateY={animationTranslateY}/>
      </View>
      <View className="flex-row gap-4">
        <ThemeButton
          bordered
          color='primary'
          onPress={() => {
            moti.toggle();
            fadeIn({});
            translateUp({
              easing: Easing.bounce,
              duration: 700
            });
          }}>
          Fade In
        </ThemeButton>
        <ThemeButton
          bordered
          onPress={() => {
            moti.toggle();
            fadeOut({});
          }}>
          Fade Out
        </ThemeButton>
      </View>
    </ThemeView>

  );
}

export default Animation101Screen;
