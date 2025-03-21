import {useState} from "react";
import {RefreshControl, ScrollView} from "react-native";
import TwColors from "tailwindcss/colors";
import ThemeView from "@/presentation/theme/View";
import ThemeText from "@/presentation/theme/Text";

const PullToRefreshScreen = () => {
  const [isRefreshing, setRefresh] = useState(false);
  const handleRefresh = async () => {
    setRefresh(x => !x);
    setTimeout(() => setRefresh(x => !x), 3000)
  }

  return (
    <ScrollView
      contentContainerClassName="flex-1 justify-center items-center"
      refreshControl={
        <RefreshControl
          progressBackgroundColor={TwColors.purple[300]}
          colors={[TwColors.purple[500]]}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}/>
      }>
      <ThemeView margin>
        <ThemeText type='display'>
          {isRefreshing ? 'Refreshing...' : 'Pull down to refresh'}
        </ThemeText>
      </ThemeView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
