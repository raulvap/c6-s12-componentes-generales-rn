import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Animation101Screen = () => {
  const {state, opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: colors.primary,
          opacity,
          transform: [{translateY: position}],
        }}
      />

      <View style={{marginVertical: 10}}>
        <Button
          title="Fade In"
          onPress={() => {
            fadeIn();
            startMovingPosition(-100);
          }}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Button title="Fade Out" onPress={fadeOut} />
      </View>

      {state && <Text style={{color: 'red'}}>Animación Terminada</Text>}
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
