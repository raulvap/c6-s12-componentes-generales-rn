import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useContext, useState} from 'react';

import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';
import {styles} from '../themes/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    // Simulamos la conexión al servidor:
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      //   <Image
      //     source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      //     style={{width: '100%', height: 400, marginVertical: 5}}
      //   />

      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={styles.globalPaddingHorizontal}>
            <HeaderTitle title="Infinite Scroll View" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        // Para el loading:
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={20} color={colors.border} />
          </View>
        )}
      />
    </View>
  );
};

const stylesComp = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    height: 300,
    marginVertical: 5,
  },
});

export default InfiniteScrollScreen;
