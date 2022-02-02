import {Theme} from '@react-navigation/native';

// Creamos el reducer para manejar el state (clase 231)

type ThemeAction = {type: 'setLightTheme'} | {type: 'setDarkTheme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba (0,0,0,0.5)',
  colors: {
    primary: 'purple',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'rgba(0,0,0,0.5)',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba (255,255,255,0.7)',
  colors: {
    primary: 'aqua',
    background: 'black',
    card: 'green',
    text: 'white',
    border: 'rgba(255,255,255,0.5)',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'setLightTheme':
      return {...lightTheme};

    case 'setDarkTheme':
      return {...darkTheme};

    default:
      return state;
  }
};
