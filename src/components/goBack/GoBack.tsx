import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useGoBack} from './useGoBack';
import {back} from '../../constants/Images';

const GoBack = () => {
  const {handleBack} = useGoBack();
  return (
    <TouchableOpacity onPress={handleBack}>
      <Image source={back} />
    </TouchableOpacity>
  );
};

export default GoBack;
