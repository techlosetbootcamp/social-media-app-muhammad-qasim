import {Image} from 'react-native';
import React from 'react';
import {ProfilePictureProps} from '../../types/types';
import styles from './ProfilePictureStyles';
import {PROFILE} from '../../constants/Images';

const ProfilePicture = ({
  width = 86,
  height = 86,
  imageUri,
}: ProfilePictureProps) => {
  return (
    <Image
      source={imageUri ? {uri: imageUri} : PROFILE}
      style={[styles.profilePicture, {width, height}]}
    />
  );
};

export default ProfilePicture;
