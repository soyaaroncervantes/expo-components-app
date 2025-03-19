import {View, Text} from 'react-native'
import {AppRoute, uiMenuRoutes} from "@/constants/Routes";
import ThemedLink from "@/presentation/shared/ThemedLink";
import ThemedText from "@/presentation/shared/ThemedText";

interface Props {
  routes: AppRoute[];
}

const ThemedMenu = ({routes}: Props) => {
  return (
    <View className="gap-2">
      {
        routes.map((route, index) => (
          <ThemedLink
            bordered
            color='primary'
            route={route}
            key={`${route.name}-${route.title}-${index}`}
            isFirst={index === 0}
            isLast={index === routes.length - 1}>
            <ThemedText type='title'>{route.title}</ThemedText>
          </ThemedLink>
        ))
      }
    </View>
  )
}
export default ThemedMenu
