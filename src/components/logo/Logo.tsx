import {Image} from 'react-native';
import React from 'react';
import {LogoProps} from '../../types/types';
import styles from './LogoStyles';
import {INSTAGRAMLOGO} from '../../constants/Images';

const Logo = ({
  marginBottom = 39,
  marginTop = 0,
  width = 182,
  height = 49,
}: LogoProps) => {
  return (
    <Image
      style={[styles.logoImage, {marginBottom, width, height, marginTop}]}
      source={INSTAGRAMLOGO}
    />
  );
};

export default Logo;
