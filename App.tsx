import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import React from 'react';
import {Navigation} from './src/navigations/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
