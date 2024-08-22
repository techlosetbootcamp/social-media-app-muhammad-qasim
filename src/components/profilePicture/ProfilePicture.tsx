import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {ProfilePictureProps} from '../../types/types';

const ProfilePicture = ({
  width = 86,
  height = 86,
  imageUri,
}: ProfilePictureProps) => {
  return (
    <Image
      source={
        imageUri ? {uri: imageUri} : require('../../assets/images/profile.png')
      }
      style={[styles.profilePicture, {width, height}]}
    />
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  profilePicture: {
    borderRadius: 50,
  },
});
