import {animationMenuRoutes, menuRoutes, uiMenuRoutes} from "@/constants/Routes";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedMenu from "@/presentation/shared/ThemedMenu";

const ComponentsApp = () => {
  return (
    <ThemedView safe margin className="p-4 gap-8">
      <ThemedText type='display'>Components App</ThemedText>
      <ThemedMenu routes={animationMenuRoutes}/>
      <ThemedMenu routes={uiMenuRoutes}/>
      <ThemedMenu routes={menuRoutes}/>
    </ThemedView>
  );
};
export default ComponentsApp;
