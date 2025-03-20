import {Href, Link} from "expo-router";
import {AppRoute} from "@/constants/Routes";
import {View, ViewProps} from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface Props extends ViewProps {
  route: AppRoute;
  color?: 'primary' | 'base'
  bordered?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

const ThemeLink = ({
                      route,
                      bordered,
                      color = 'base',
                      isFirst = false,
                      isLast = false,
                      children,
                      className
                    }: Props) => {
  const [routeName] = route.name.split('/');
  return (
    <View>
      <Link
        href={routeName as Href}
        className={
          [
            'py-3 px-4 rounded-xl',
            color === 'base' && 'border-purple-50',
            !(isFirst || isLast) && color === 'primary' && 'bg-purple-100 dark:bg-purple-950',
            isFirst && 'bg-green-100 dark:bg-green-900',
            isLast && 'bg-emerald-100 dark:bg-emerald-900',
            bordered && 'border',
            bordered && color === 'primary' && 'border-purple-400',
            className
          ].join(' ')
        }
        key={`${route.name}-${route.title}`}>
        <View className="flex-row gap-4 items-center">
          <Ionicons name={route.icon} size={30} className="text-purple-900 dark:text-purple-100" />
          {children}
        </View>
      </Link>
    </View>
  )
}
export default ThemeLink
