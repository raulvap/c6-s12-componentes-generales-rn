import React, {createContext, useEffect, useReducer} from 'react';
import {
  Appearance,
  AppState,
  ColorSchemeName,
  useColorScheme,
} from 'react-native';
import {darkTheme, lightTheme, themeReducer, ThemeState} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

// Creamos un context para manejar el tema de la app (Clase 230)

// 1. Crear el context
export const ThemeContext = createContext({} as ThemeContextProps);

// 2. Creamos el Provider
export const ThemeProvider = ({children}: any) => {
  // Usamos un listener para el cambio del tema basado en el SO de la app: (clase 236)
  // const colorScheme: ColorSchemeName = useColorScheme();

  // usamos el useReducer: (clase 232)
  const [theme, dispatch] = useReducer(
    themeReducer,
    // colorScheme === 'dark' ? darkTheme : lightTheme,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  // Para que si cambia el ajuste del SO, cambie el tema: (clase 236)
  /* useEffect(() => {
      colorScheme === 'light' ? setLightTheme() : setDarkTheme();
      }, [colorScheme]);
  */

  // Otra opción para reaccionar al cambio de tema en el SO: (clase 236)
  useEffect(() => {
    AppState.addEventListener('change', status => {
      // console.log(status);
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'setDarkTheme'});
    console.log('Dark Theme');
  };

  const setLightTheme = () => {
    dispatch({type: 'setLightTheme'});
    console.log('Light Theme');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Agregamos el Provider dentro de App

// 4. Creamos el reducer
