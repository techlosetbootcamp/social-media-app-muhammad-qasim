import useTypeNavigation from '../../hooks/useTypeNavigationHook';

export const useBackward = () => {
  const navigation = useTypeNavigation();
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return {handleBack};
};
