import {View} from 'react-native'
import {AppRoute} from "@/constants/Routes";
import ThemeText from "@/presentation/theme/Text";
import ThemeLink from "@/presentation/theme/Link";

interface Props {
  routes: AppRoute[];
}

const ThemeMenu = ({routes}: Props) => {
  return (
    <View className="gap-2">
      {
        routes.map((route, index) => (
          <ThemeLink
            bordered
            color='primary'
            route={route}
            key={`${route.name}-${route.title}-${index}`}
            isFirst={index === 0}
            isLast={index === routes.length - 1}>
            <ThemeText type='title'>{route.title}</ThemeText>
          </ThemeLink>
        ))
      }
    </View>
  )
}
export default ThemeMenu
