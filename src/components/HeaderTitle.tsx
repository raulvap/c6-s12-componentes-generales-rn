import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../themes/appTheme';

interface Props {
  title: string;
}

const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 15, marginBottom: 20}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
