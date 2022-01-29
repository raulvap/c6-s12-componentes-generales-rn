import React from 'react';
import {View} from 'react-native';

export const ItemSeparator = () => {
  return (
    <View
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 5,
      }}
    />
  );
};
