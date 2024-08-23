import {useNavigation} from '@react-navigation/native';

export const useBackward = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return {handleBack};
};
