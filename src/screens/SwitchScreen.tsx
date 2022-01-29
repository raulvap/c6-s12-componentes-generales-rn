import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../themes/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SwitchScreen = () => {
  // Custom Switch (clase 199)
  const [state, setState] = useState({
    isHappy: true,
    isHungry: true,
    isCute: true,
  });

  const {isHappy, isHungry, isCute} = state;

  // para manejar el valor del estado:
  // recordar que esta función se manda al custom switch (clase 199)
  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{...styles.globalPaddingHorizontal, flex: 1}}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Happy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Hungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Cute</Text>
        <CustomSwitch
          isOn={isCute}
          onChange={value => onChange(value, 'isCute')}
        />
      </View>

      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

export default SwitchScreen;
