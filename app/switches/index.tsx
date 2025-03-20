import ThemeView from "@/presentation/theme/View";
import {useReducer} from "react";
import ThemeSwitch from "@/presentation/theme/Switch";

const Switches = () => {
  const [isHungry, toggleHungry] = useReducer(s => !s, false);
  const [isAlive, toggleAlive] = useReducer(s => !s, true);
  const [isHappy, toggleHappy] = useReducer(s => !s, false);

  return (
    <ThemeView margin fullScreen className="my-2 gap-4">
      <ThemeSwitch isEnabled={isHungry} toggle={toggleHungry}>
        Hambriento
      </ThemeSwitch>
      <ThemeSwitch isEnabled={isAlive} toggle={toggleAlive}>
        Sobreviviendo
      </ThemeSwitch>
      <ThemeSwitch isEnabled={isHappy} toggle={toggleHappy}>
        Contento
      </ThemeSwitch>
    </ThemeView>
  );
};
export default Switches;
