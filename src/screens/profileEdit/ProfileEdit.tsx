import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './ProfileEditStyles';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import InlineInput from '../../components/inlineInput/InlineInput';
import {useProfileEdit, useUploadImage} from './useProfileEdit';
import LoadingOverlay from '../../components/loading/Loading';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

const ProfileEdit = () => {
  const navigation = useTypeNavigation();
  const {imageUri, handleSelectImage} = useUploadImage();
  const {data, profileState, handleSubmit, handleChange} =
    useProfileEdit(imageUri);

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
          <InlineInput
            label="Name"
            placeholder="Name"
            value={data?.name || ''}
            onChangeText={text => handleChange('name', text)}
          />
          <InlineInput
            label="Username"
            placeholder="Username"
            value={data?.username || ''}
            onChangeText={text => handleChange('username', text)}
          />
          <InlineInput
            label="Website"
            placeholder="Website"
            value={data?.website || ''}
            onChangeText={text => handleChange('website', text)}
          />
          <InlineInput
            label="Location"
            placeholder="Tokyo, Japan"
            value={data?.location || ''}
            onChangeText={text => handleChange('location', text)}
          />
          <InlineInput
            label="Bio"
            placeholder="Bio"
            style={{borderBottomWidth: 0}}
            multiline={true}
            value={data?.bio || ''}
            onChangeText={text => handleChange('bio', text)}
          />
        </View>
        <View>
          <Text style={styles.privateInformation}>Private Information</Text>
          <InlineInput
            label="Email"
            placeholder="Email"
            value={data?.email || ''}
            disabled={true}
            onChangeText={text => handleChange('email', text)}
          />
          <InlineInput
            label="Phone"
            placeholder="+92 XXXXXXXXXX"
            value={data?.phone || ''}
            onChangeText={text => handleChange('phone', text)}
          />
          <InlineInput
            label="Gender"
            placeholder="Male"
            value={data?.gender || ''}
            onChangeText={text => handleChange('gender', text)}
          />
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
