import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {useSubmitImageHandler, useUploadImage} from './useUploadImage';
import Loader from '../../components/loader/Loader';

const UploadImage = () => {
  const {imageUri, setImageUri, handleSelectImage} = useUploadImage();
  const {description, setDescription, submitImageHandler, imageState} =
    useSubmitImageHandler(imageUri, setImageUri);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <View style={styles.headerImage}>
          <Text style={styles.headerImageText}>Images</Text>
          <Image source={require('../../assets/images/select.png')} />
        </View>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.uploadImageContainer}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.uploadedImage} />
          ) : (
            <TouchableOpacity
              style={styles.uploadImage}
              onPress={handleSelectImage}>
              <View style={styles.uploadImageText}>
                <Image
                  source={require('../../assets/images/upload.png')}
                  style={{width: 44, height: 48}}
                />
                <Text style={styles.uploadText}>Upload Image</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.descContainer}>
          <View style={styles.desc}>
            <View>
              <Text style={styles.label}>Post Description</Text>
              <Input
                placeholder="Add post description"
                onChangeText={setDescription}
                value={description}
              />
            </View>
            <View>
              <Button style={{marginVertical: 21}} onPress={submitImageHandler}>
                <Loader userStatus={imageState.status} text="Upload" />
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
    color: Colors.darkBlack,
  },
  headerImageText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: Colors.darkBlack,
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
    borderColor: Colors.darkBlack,
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
    color: Colors.black,
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
    color: Colors.black,
    marginBottom: 8,
  },
  uploadedImage: {
    width: '100%',
    height: 362,
    resizeMode: 'contain',
  },
});
