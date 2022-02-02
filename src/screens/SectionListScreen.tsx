import {View, Text, SectionList} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../themes/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

const SectionListScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.globalPaddingHorizontal,
        flex: 1,
      }}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        sections={casas}
        renderSectionHeader={({section}) => (
          <View>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        stickySectionHeadersEnabled
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        // ItemSeparatorComponent={() => <ItemSeparator />}
        // SectionSeparatorComponent={() => <ItemSeparator />}

        renderSectionFooter={({section}) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        ListFooterComponent={() => (
          <View style={{marginBottom: 100}}>
            <HeaderTitle title={'Total Casas: ' + casas.length} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SectionListScreen;
