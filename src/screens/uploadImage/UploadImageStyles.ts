import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    position: 'absolute',
    left: 12,
  },
  headerImage: {
    flexDirection: 'row',
    gap: 9.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: COLORS.darkBlack,
  },
  headerImageText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: COLORS.darkBlack,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 19,
    paddingTop: 15,
  },
  uploadImageContainer: {
    width: '100%',
    marginBottom: 15,
  },
  uploadImage: {
    borderWidth: 1,
    borderColor: COLORS.darkBlack,
    borderStyle: 'dashed',
    width: '100%',
    height: 362,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadImageText: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  uploadText: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: COLORS.black,
  },
  descContainer: {
    flex: 1,
  },
  desc: {
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.black,
    marginBottom: 8,
  },
  uploadedImage: {
    width: '100%',
    height: 362,
    resizeMode: 'contain',
  },
});

export default styles;
