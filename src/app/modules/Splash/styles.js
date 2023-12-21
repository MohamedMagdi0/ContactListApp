import {StyleSheet} from 'react-native';
import colors from '../../../../public/themes/colors';

const styles = StyleSheet.create({
  SplashScreenMainImageStyle: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplashScreenIcon: {
    marginBottom: '19%',
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

export default styles;
