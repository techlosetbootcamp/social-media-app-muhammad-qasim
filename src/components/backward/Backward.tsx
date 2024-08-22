import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Backward = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity onPress={handleBack}>
      <Image source={require('../../assets/images/back.png')} />
    </TouchableOpacity>
  );
};

export default Backward;
