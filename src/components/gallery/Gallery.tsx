import {View, StyleSheet, Image} from 'react-native';
import React from 'react';

const images = [
  require('../../assets/images/profileGallery1.png'),
  require('../../assets/images/profileGallery2.png'),
  require('../../assets/images/profileGallery3.png'),
  require('../../assets/images/profileGallery4.png'),
  require('../../assets/images/profileGallery5.png'),
  require('../../assets/images/profileGallery6.png'),
  require('../../assets/images/profileGallery7.png'),
  require('../../assets/images/profileGallery8.png'),
  require('../../assets/images/profileGallery9.png'),
];

const Gallery = () => {
  return (
    <View style={styles.gallerySection}>
      {images.map((image, index) => (
        <Image key={index} source={image} style={styles.gallery} />
      ))}
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  gallerySection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gallery: {
    width: '33%',
    aspectRatio: 1,
    marginVertical: 1,
  },
});
