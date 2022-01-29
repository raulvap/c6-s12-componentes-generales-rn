import React from 'react';
import {View, FlatList} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {menuItems} from '../data/menuItems';
import {styles} from '../themes/appTheme';

const HomeScreen = () => {
  return (
    <View style={[{flex: 1}, styles.globalPaddingHorizontal]}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem item={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Componentes" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

export default HomeScreen;
