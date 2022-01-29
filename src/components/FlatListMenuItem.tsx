import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/interfaces';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../themes/appTheme';

interface Props {
  item: MenuItem;
}

const FlatListMenuItem = ({item}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate<any>(item.component)}>
      <View style={stylesComp.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 5}}>
          <Icon
            name={item.icon}
            size={30}
            style={{...styles.mainColor, marginRight: 10}}
          />
          <Text style={styles.mainColor}>{item.name}</Text>
          {/* **** También se puede crear un componente de "spacer": (clase 190, min 7:50) **** */}
          {/* <View style={{flex: 1}} /> */}
        </View>
        <Icon name="chevron-forward-outline" size={30} color="#2471A3" />
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
