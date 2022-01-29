import {View, Text, Button, Modal} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../themes/appTheme';
import HeaderTitle from '../components/HeaderTitle';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalPaddingHorizontal}>
      <HeaderTitle title="Modal" />

      <Button
        title="Abrir Modal"
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        {/* Background negro: */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // height: 100,
            // width: 100,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
          {/* Contenido del Modal: */}
          <View
            style={{
              paddingHorizontal: 30,
              paddingBottom: 20,
              borderRadius: 10,
              backgroundColor: 'white',

              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
            }}>
            <HeaderTitle title="Modal Title" />
            <Text>Contenido del Modal</Text>
            <Text>Contenido del Modal</Text>
            <Text>Contenido del Modal</Text>
            <View style={{marginTop: 20}}>
              <Button title="Ok" onPress={() => setIsVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
