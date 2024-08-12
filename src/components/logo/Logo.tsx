import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {LogoProps} from '../../types/types';

const Logo = ({
  marginBottom = 39,
  marginTop = 0,
  width = 182,
  height = 49,
}: LogoProps) => {
  return (
    <Image
      style={[styles.logoImage, {marginBottom, width, height, marginTop}]}
      source={require('../../assets/images/instagramLogo.png')}
    />
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoImage: {
    resizeMode: 'contain',
  },
});
