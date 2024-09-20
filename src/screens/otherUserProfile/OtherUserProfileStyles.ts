import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  profileContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  profileOutline: {
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 96,
    height: 96,
    marginBottom: 14,
  },
  gallery: {
    width: '33.33%',
    height: 100,
    aspectRatio: 1,
    margin: 0.5,
  },
  flatListContent: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.lightBlack2,
  },
});

export default styles;
