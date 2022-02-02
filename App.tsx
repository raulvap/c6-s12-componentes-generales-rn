import 'react-native-gesture-handler';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import {Navigation} from './src/navigations/Navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// Para crear un theme para Dark y Light (clase 228)
// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: string,
//     // background: string,
//     // card: string,
//     // text: string,
//     // border: string,
//     // notification: string,
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
