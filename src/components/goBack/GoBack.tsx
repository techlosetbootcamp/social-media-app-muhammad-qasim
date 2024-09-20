import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useGoBack} from './useGoBack';
import {BACK} from '../../constants/Images';

const GoBack = () => {
  const {handleBack} = useGoBack();
  return (
    <TouchableOpacity onPress={handleBack}>
      <Image source={BACK} />
    </TouchableOpacity>
  );
};

export default GoBack;
