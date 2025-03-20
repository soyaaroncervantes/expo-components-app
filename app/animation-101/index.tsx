import {useReducer} from "react";
import {View} from 'react-native';
import ThemeButton from "@/presentation/theme/Button";
import ThemeView from "@/presentation/theme/View";
import SquareShape from "@/presentation/animations/SquareShape";
import {AnimatePresence} from "moti";

const Animation101Screen = () => {
  const [visible, toggle] = useReducer((s) => !s, true);

  return (
    <ThemeView className="flex-1 items-center justify-center gap-8">
      <View className="min-h-34 min-w-34">
        <AnimatePresence>
          {visible &&<SquareShape/>}
        </AnimatePresence>
      </View>
      <View className="flex-row gap-4">
        <ThemeButton
          bordered
          color='primary'
          onPress={toggle}>Fade In</ThemeButton>
        <ThemeButton
          bordered
          onPress={toggle}>Fade Out</ThemeButton>
      </View>
    </ThemeView>

  );
}

export default Animation101Screen;
