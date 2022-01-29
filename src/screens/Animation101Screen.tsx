import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAnimation} from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {state, opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
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
    backgroundColor: '#6C3483',
    width: 150,
    height: 150,
  },
});
