import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../themes/appTheme';

const AlertScreen = () => {
  const showTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );

  const showThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
        style: 'cancel',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const showPrompt = () => {
    //   Esto es solo para iOS (clase 202)
    // Alert.prompt(
    //   '¿Nombre?',
    //   'Escriba su nombre completo',
    //   (value: string) => {
    //     console.log({value});
    //   },
    //   'plain-text',
    //   'default value',
    //   'number-pad',
    // );

    prompt(
      'Email',
      'Enter your email',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'default',
        cancelable: false,
        // defaultValue: 'test',
        placeholder: 'Email',
      },
    );
  };

  return (
    <View style={styles.globalPaddingHorizontal}>
      <HeaderTitle title="Alerts" />
      <View style={{marginVertical: 15}}>
        <Button title="Mostrar Alerta 2 Botones" onPress={showTwoButtonAlert} />
      </View>
      <View style={{marginVertical: 15}}>
        <Button
          title="Mostrar Alerta 3 Botones"
          onPress={showThreeButtonAlert}
        />
      </View>
      <View style={{marginVertical: 15}}>
        <Button title="Mostrar Prompt" onPress={showPrompt} />
      </View>
    </View>
  );
};

export default AlertScreen;
