import {Platform, StyleSheet} from 'react-native';
import colors from '../../../../../../public/themes/colors';

export default styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'android' ? 10 : 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'android' ? 10 : 15,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  SelectedNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primary,
  },
  AddParticipant: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'android' ? 10 : 15,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: 8,
  },
});
