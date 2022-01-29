import {useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';

// Creamos un custom hook para usarlo en las animaciones: (clase 195)
export const useAnimation = () => {
  const [state, setState] = useState(false);

  // para animar, usamos useRef para evitar que vuelva a renderizar (clase 192)
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  // configuramos el fadeIn: (clase 193)
  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start(() => setState(true));

    // Creamos otro timing para el bounce: (194)
    Animated.timing(position, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setState(false));
  };

  // una nueva posición para manejar la posición: (clase 195)
  const startMovingPosition = (
    initialPosition: number,
    duration: number = 700,
  ) => {
    position.setValue(initialPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return {
    opacity,
    position,
    state,
    fadeIn,
    fadeOut,
    startMovingPosition,
  };
};
