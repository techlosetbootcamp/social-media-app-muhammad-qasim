import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  flatListContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  userInfo: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  nameSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.darkBlack,
  },
  country: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: COLORS.darkBlack,
  },
  postInfo: {
    paddingHorizontal: 15,
    paddingTop: 24,
    paddingBottom: 20,
    gap: 13,
  },
  postText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.darkBlack,
  },
  date: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: COLORS.lightBlack2,
  },
  postImage: {
    width: '100%',
    height: 375,
    resizeMode: 'cover',
  },
  footerContainer: {
    alignItems: 'center',
    padding: 20,
  },
  footer: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.lightBlack2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPosts: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.lightBlack2,
  },
  verifiedIcon: {
    width: 9.8,
    height: 9.8,
  },
  moreIcon: {
    width: 14,
  },
});

export default styles;
