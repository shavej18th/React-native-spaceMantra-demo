import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });