import ThemeView from "@/presentation/theme/View";
import ThemeCard from "@/presentation/theme/Card";
import ThemeButton from "@/presentation/theme/Button";
import {router} from "expo-router";

const ModalScreen = () => {
  return (
    <ThemeView className="flex-1">
      <ThemeCard className="flex-1 items-center justify-center">
        <ThemeButton
          className="bg-violet-200 dark:bg-violet-500 text-violet-950 dark:text-violet-50 active:opacity-80"
          onPress={() => router.push('/modal/Modal')}>Open Modal</ThemeButton>
      </ThemeCard>
    </ThemeView>
  );
};
export default ModalScreen;
