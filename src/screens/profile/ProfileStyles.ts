import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  flatListContent: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: Colors.white,
  },
  header: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
  },
  logout: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  profileContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  profileOutline: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 96,
    height: 96,
    marginBottom: 14,
  },
  editProfile: {
    borderWidth: 1,
    borderColor: Colors.lightGrey2,
    borderRadius: 6,
    paddingVertical: 6,
    width: '100%',
    marginTop: 15,
    alignItems: 'center',
  },
  editProfileText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 18,
    color: Colors.darkBlack,
  },
  galleryImage: {
    width: '33.33%',
    height: 100,
    aspectRatio: 1,
    margin: 0.5,
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
    color: Colors.lightBlack2,
  },
});

export default styles;
