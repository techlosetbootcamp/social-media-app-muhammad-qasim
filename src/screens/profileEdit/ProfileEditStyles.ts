import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: Colors.grey,
  },
  cancelBtn: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: Colors.darkBlack,
  },
  editProfileBtn: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: Colors.black,
  },
  doneBtn: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: Colors.blue,
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 13,
  },
  profile: {
    alignItems: 'center',
    gap: 12,
  },
  changeProfilePhotoText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 21,
    color: Colors.blue,
  },
  editSection: {
    borderTopWidth: 0.5,
    borderTopColor: Colors.lightGrey,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightGrey,
  },
  privateInformation: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    color: Colors.black,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  profilePicture: {
    width: 95,
    height: 95,
    borderRadius: 50,
  },
  resetPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 45,
    paddingHorizontal: 20,
  },
  changePassword: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.lightBlack2,
    textAlign: 'center',
  },
  resetPassword: {
    color: Colors.quaternary,
    fontSize: 14,
    lineHeight: 16,
  },
});

export default styles;
