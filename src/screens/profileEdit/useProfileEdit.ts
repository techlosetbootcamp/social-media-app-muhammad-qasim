import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {fetchProfile, updateProfile} from '../../store/slice/profileSlice';
import Toast from 'react-native-toast-message';
import {validateUserData} from '../../constants/FormSchema';
import {User} from '../../types/types';
import {launchImageLibrary} from 'react-native-image-picker';

export const useUploadImage = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const handleSelectImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 1,
        includeBase64: true,
      });
      if (result.didCancel) {
        Toast.show({type: 'error', text1: 'Image selection cancelled'});
        return;
      } else if (result?.assets && result?.assets?.length > 0) {
        const imageUri = result?.assets[0]?.uri;
        setImageUri(imageUri as string);
        Toast.show({type: 'success', text1: 'Image selected successfully'});
      } else {
        Toast.show({type: 'error', text1: 'No image selected'});
        return;
      }
    } catch (error) {
      Toast.show({type: 'error', text1: 'Image selection failed'});
      return;
    }
  };
  return {imageUri, handleSelectImage};
};

export const useProfileEdit = (imageUri: string | null) => {
  const dispatch = useAppDispatch();
  const profileState = useAppSelector(state => state.profile);
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    if (!profileState?.profileData) {
      dispatch(fetchProfile());
    }
  }, [dispatch, profileState?.profileData]);

  useEffect(() => {
    if (profileState?.profileData) {
      setData(profileState?.profileData);
    }
  }, [profileState?.profileData]);

  const handleChange = (field: keyof User, value: string) => {
    setData(prevData => {
      if (prevData) {
        return {
          ...prevData,
          [field]: value,
        };
      }
      return prevData;
    });
  };

  const handleSubmit = async () => {
    if (data) {
      const updatedData: User = {
        ...data,
        profilePicture: imageUri || data?.profilePicture || '',
      };
      delete updatedData.images;
      const error = validateUserData(updatedData);
      if (Object.keys(error).length > 0) {
        Object.values(error).forEach(err =>
          Toast.show({type: 'error', text1: err}),
        );
        return;
      }
      try {
        await dispatch(updateProfile(updatedData)).unwrap();
        Toast.show({type: 'success', text1: 'Profile updated successfully'});
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: (error as string) || 'Failed to update profile',
        });
      }
    }
  };

  return {data, setData, handleSubmit, profileState, handleChange};
};
