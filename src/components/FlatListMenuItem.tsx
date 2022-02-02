import React, {useContext} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {MenuItem} from '../interfaces/interfaces';
// import {styles} from '../themes/appTheme';

interface Props {
  item: MenuItem;
}

const FlatListMenuItem = ({item}: Props) => {
  const navigation = useNavigation();

  // Para obtener los colores del tema por default: (clase 228)
  // const {colors} = useTheme();

  // Usaremos los colores del Context definidos por el Theme Dark o Light: (clase 232)
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate<any>(item.component)}>
      <View style={stylesComp.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
          <Icon
            name={item.icon}
            size={30}
            style={{color: colors.primary, marginRight: 10}}
          />
          <Text style={{color: colors.text}}>{item.name}</Text>
          {/* **** También se puede crear un componente de "spacer": (clase 190, min 7:50) **** */}
          {/* <View style={{flex: 1}} /> */}
        </View>
        <Icon name="chevron-forward-outline" size={30} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const stylesComp = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default FlatListMenuItem;
