import {StyleSheet} from 'react-native';
import colors from '../../../../../../public/themes/colors';

export default styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.AvatarBackgroundColor,
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: colors.AvatarBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: colors.phoneNumber,
  },
  logo: {
    width: 55,
    height: 55,
    alignSelf: 'center',
    borderRadius: 27.5,
  },
});
