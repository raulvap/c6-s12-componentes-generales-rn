import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from '../themes/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  // Clase 208: hacemos la funcionalidad de pull to refresh
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>('');

  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);

  // Método para cargar datos:
  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Cargado');
      setData('Hola Mundo');
      setRefreshing(false);
    }, 2500);
  };

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          // Para android:
          progressViewOffset={30}
          progressBackgroundColor={colors.border}
          colors={['white', 'aqua', 'purple']}
          // Para iOS:
          //   style={{backgroundColor: 'purple'}}
          tintColor={dark ? 'white' : 'black'}
          title="Cargando..."
          titleColor={dark ? 'white' : 'black'}
        />
      }>
      <View style={styles.globalPaddingHorizontal}>
        <HeaderTitle title="Pull To Refresh" />
        <Text style={{fontSize: 30, color: colors.text}}>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
