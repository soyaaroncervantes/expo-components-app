import ThemeView from "@/presentation/theme/View";
import {Switch, View} from "react-native";
import {useReducer} from "react";
import ThemeText from "@/presentation/theme/Text";


const Switches = () => {
  const [isEnabled, toggle] = useReducer(s => !s, true);
  return (
    <ThemeView margin fullScreen className="my-2">
      <View className='flex-row items-center gap-4d'>
        <ThemeText type='label'>Enabled something</ThemeText>
        <Switch
          value={isEnabled}
          onValueChange={toggle}/>
      </View>
    </ThemeView>
  );
};
export default Switches;
