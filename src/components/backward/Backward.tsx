import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useBackward} from './useBackward';
import {back} from '../../constants/Images';

const Backward = () => {
  const {handleBack} = useBackward();
  return (
    <TouchableOpacity onPress={handleBack}>
      <Image source={back} />
    </TouchableOpacity>
  );
};

export default Backward;
