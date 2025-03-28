import {AppRoute} from "@/constants/Routes";
import ThemeText from "@/presentation/theme/Text";
import ThemeLink from "@/presentation/theme/Link";
import ThemeView from "./View";

interface Props {
  routes: AppRoute[];
}

const ThemeMenu = ({routes}: Props) => {
  return (
    <ThemeView className="gap-2">
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
    </ThemeView>
  )
}
export default ThemeMenu
