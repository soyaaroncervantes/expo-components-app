import {animationMenuRoutes, menuRoutes, uiMenuRoutes} from "@/constants/Routes";
import ThemeText from "@/presentation/theme/Text";
import ThemeMenu from "@/presentation/theme/Menu";
import ThemeView from "@/presentation/theme/View";

const ComponentsApp = () => {
  return (
    <ThemeView safe margin fullScreen className="p-4 gap-8">
      <ThemeText type='display'>Components App</ThemeText>
      <ThemeMenu routes={animationMenuRoutes}/>
      <ThemeMenu routes={uiMenuRoutes}/>
      <ThemeMenu routes={menuRoutes}/>
    </ThemeView>
  );
};
export default ComponentsApp;
