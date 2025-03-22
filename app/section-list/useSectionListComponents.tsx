import {useCallback} from "react";
import {SectionListRenderItemInfo} from "react-native";
import {SectionListData} from "react-native/Libraries/Lists/SectionList";
import {House} from "@/app/section-list/sections.const";
import ThemeText from "@/presentation/theme/Text";

export const useSectionListComponents = (houses: House[]) => {

  const itemComponent = useCallback(
    ({item}: SectionListRenderItemInfo<string, House>) => (
      <ThemeText
        className="py-4 px-2 mx-4 border border-pink-900 dark:border-pink-100 rounded"
        type='body'>
        {item}
      </ThemeText>
    ), []);


  const sectionHeaderComponent = useCallback(
    ({section}: { section: SectionListData<string, House> }) => (
      <ThemeText
        className='p-4 bg-pink-200 dark:bg-pink-950 text-pink-900 dark:text-pink-100 rounded-xl overflow-hidden'
        type='display'>
        {section.title}
      </ThemeText>
    ), []);

  const headerComponent = useCallback(
    () => (
      <ThemeText
        className='p-4 bg-pink-200 dark:bg-pink-950 text-pink-900 dark:text-pink-100 rounded-xl overflow-hidden'
        type='display'>
        Personajes
      </ThemeText>
    ), []);

  const footerComponent = useCallback(
    () => (
      <ThemeText
        className='p-4 bg-pink-200 dark:bg-pink-950 text-pink-900 dark:text-pink-100 rounded-xl overflow-hidden'
        type='display'>
        Total: {houses.length}
      </ThemeText>
    ), [houses.length]);

  return {
    sectionHeaderComponent,
    headerComponent,
    itemComponent,
    footerComponent
  };
};
