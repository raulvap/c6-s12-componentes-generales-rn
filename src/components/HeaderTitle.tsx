import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../themes/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
}

const HeaderTitle = ({title}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 15, marginBottom: 20}}>
      <Text style={{...styles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
