import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './UploadImageStyles';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {useSubmitImageHandler, useUploadImage} from './useUploadImage';
import Loader from '../../components/loader/Loader';
import {select, upload} from '../../constants/Images';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

const UploadImage = () => {
  const navigation = useTypeNavigation();
  const {imageUri, setImageUri, handleSelectImage} = useUploadImage();
  const {description, setDescription, submitImageHandler, imageState} =
    useSubmitImageHandler(imageUri, setImageUri);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <View style={styles.headerImage}>
          <Text style={styles.headerImageText}>Images</Text>
          <Image source={select} />
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
                <Image source={upload} style={{width: 44, height: 48}} />
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
