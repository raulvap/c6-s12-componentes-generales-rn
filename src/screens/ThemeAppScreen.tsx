import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from '../themes/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ThemeAppScreen = () => {
  const [isOn, setIsOn] = useState(false);

  // Para sacar los valores del context:
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);

  useEffect(() => {
    if (isOn) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [isOn]);

  return (
    <View style={styles.globalPaddingHorizontal}>
      <HeaderTitle title="Global Theme App" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
          paddingRight: 10,
        }}>
        <Text style={{fontSize: 18, color: colors.text}}> Dark Theme</Text>
        <TouchableOpacity>
          <CustomSwitch isOn={isOn} onChange={setIsOn} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThemeAppScreen;
