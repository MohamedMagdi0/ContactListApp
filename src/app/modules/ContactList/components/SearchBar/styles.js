import {Platform, StyleSheet} from 'react-native';
import colors from '../../../../../../public/themes/colors';

export default styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: '#f0eded',
    paddingVertical: Platform.OS === 'android' ? 10 : 15,
    borderWidth: 1,
    borderColor: colors.AvatarBackgroundColor,
    borderRadius: 45 / 2,
    height: 45,
    backgroundColor: colors.grey,
    width: '95%',
    paddingLeft: 30,
    alignSelf: 'center',
  },
});
