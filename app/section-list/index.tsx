import ThemeView from "@/presentation/theme/View";
import ThemeCard from "@/presentation/theme/Card";
import {SectionList} from "react-native";
import {houses} from "@/app/section-list/sections.const";
import {useSectionListComponents} from "@/app/section-list/useSectionListComponents";

const SectionListScreen = () => {
  const {
    headerComponent,
    sectionHeaderComponent,
    itemComponent,
    footerComponent
  } = useSectionListComponents(houses);

  return (
    <ThemeView margin safe>
      <ThemeCard compact={true} className='rounded-xl overflow-hidden'>
        <SectionList
          sections={houses}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerClassName="gap-4"
          ListHeaderComponentClassName="bg-violet-200 dark:bg-violet-900 p-4 rounded-xl overflow-hidden"
          ListHeaderComponent={headerComponent}
          renderSectionHeader={sectionHeaderComponent}
          stickySectionHeadersEnabled
          renderItem={itemComponent}
          ListFooterComponent={footerComponent}
        />
      </ThemeCard>
    </ThemeView>
  );
};
export default SectionListScreen;
