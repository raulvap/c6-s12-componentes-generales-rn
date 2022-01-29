import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  globalPaddingHorizontal: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#283747',
  },
  mainColor: {
    color: '#2471A3',
  },
  secondaryColor: {
    color: '#7FB3D5',
  },
  // --- SWITCHES ---
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchText: {
    color: '#283747',
    fontSize: 25,
  },
});
