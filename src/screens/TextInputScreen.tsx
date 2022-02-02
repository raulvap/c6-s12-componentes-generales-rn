import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../themes/appTheme';
import {useForm} from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {
  const {
    theme: {colors, dark},
  } = useContext(ThemeContext);

  // Usamos un custom hook para manejar el form
  const {handleChange, form, isSubscribed} = useForm({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.globalPaddingHorizontal}>
              <HeaderTitle title="Text Inputs" />
              <View>
                <TextInput
                  style={{
                    ...stylesComp.inputStyle,
                    borderColor: colors.border,
                    color: colors.text,
                  }}
                  placeholderTextColor={colors.border}
                  onChangeText={value => handleChange(value, 'name')}
                  placeholder="Nombre:"
                  autoCorrect={false}
                  autoCapitalize="words"
                  keyboardAppearance={dark ? 'dark' : 'default'}
                />
                <TextInput
                  style={{
                    ...stylesComp.inputStyle,
                    borderColor: colors.border,
                    color: colors.text,
                  }}
                  placeholderTextColor={colors.border}
                  onChangeText={value => handleChange(value, 'lastname')}
                  placeholder="Apellido:"
                  autoCorrect={false}
                  autoCapitalize="words"
                  keyboardAppearance={dark ? 'dark' : 'default'}
                />
                <TextInput
                  style={{
                    ...stylesComp.inputStyle,
                    borderColor: colors.border,
                    color: colors.text,
                  }}
                  placeholderTextColor={colors.border}
                  onChangeText={value => handleChange(value, 'email')}
                  placeholder="Correo:"
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  keyboardAppearance={dark ? 'dark' : 'default'}
                />
                <TextInput
                  style={{
                    ...stylesComp.inputStyle,
                    borderColor: colors.border,
                    color: colors.text,
                  }}
                  placeholderTextColor={colors.border}
                  onChangeText={value => handleChange(value, 'phone')}
                  placeholder="Celular:"
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  keyboardAppearance={dark ? 'dark' : 'default'}
                />
              </View>
              <View style={styles.switchRow}>
                <Text style={{...styles.switchText, color: colors.text}}>
                  Suscribirme
                </Text>

                {/* Clase 207: para manejar el tipado de un switch: */}
                <CustomSwitch
                  isOn={isSubscribed}
                  onChange={value => handleChange(value, 'isSubscribed')}
                />
              </View>
              <Text style={{marginTop: 40, fontSize: 25, color: colors.text}}>
                {JSON.stringify(form, null, 3)}
              </Text>
            </View>
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesComp = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default TextInputScreen;
