import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './ProfileEditStyles';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import InlineInput from '../../components/inlineInput/InlineInput';
import {useProfileEdit, useUploadImage} from './useProfileEdit';
import LoadingOverlay from '../../components/loading/Loading';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';
import {PROFILE_EDIT} from '../../constants/InputFields';
import {User} from '../../types/types';

const ProfileEdit = () => {
  const navigation = useTypeNavigation();
  const {imageUri, handleSelectImage} = useUploadImage();
  const {data, profileState, handleSubmit, handleChange} =
    useProfileEdit(imageUri);
  const {firstFields, secondFields} = PROFILE_EDIT(data);

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.editProfileBtn}>Edit Profile</Text>
        <TouchableOpacity>
          <Text style={styles.doneBtn} onPress={handleSubmit}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.profileSection}>
          <View style={styles.profile}>
            {imageUri ? (
              <Image source={{uri: imageUri}} style={styles.profilePicture} />
            ) : (
              <ProfilePicture
                width={95}
                height={95}
                imageUri={data?.profilePicture}
              />
            )}
            <TouchableOpacity onPress={handleSelectImage}>
              <Text style={styles.changeProfilePhotoText}>
                Change Profile Photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.editSection}>
          {firstFields?.map(field => (
            <InlineInput
              key={field?.field}
              label={field?.label}
              placeholder={field?.placeholder}
              value={field?.value}
              onChangeText={text =>
                handleChange(field?.field as keyof User, text)
              }
              multiline={field?.multiline}
              style={field?.style}
            />
          ))}
        </View>
        <View>
          <Text style={styles.privateInformation}>Private Information</Text>
          {secondFields?.map(field => (
            <InlineInput
              key={field?.field}
              label={field?.label}
              placeholder={field?.placeholder}
              value={field?.value}
              onChangeText={text =>
                handleChange(field?.field as keyof User, text)
              }
              disabled={field?.disabled}
            />
          ))}
        </View>
        <View style={styles.resetPasswordContainer}>
          <Text style={styles.changePassword}>
            Want to change your password?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.resetPassword}> Reset Password.</Text>
          </TouchableOpacity>
        </View>
        <LoadingOverlay visible={profileState?.status === 'loading'} />
      </ScrollView>
    </>
  );
};

export default ProfileEdit;
