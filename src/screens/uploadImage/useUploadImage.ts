import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {validateSubmitImageData} from '../../constants/FormSchema';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHook';
import {uploadPost} from '../../store/slice/postsSlice';

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
  return {imageUri, setImageUri, handleSelectImage};
};

export const useSubmitImageHandler = (
  imageUri: string | null,
  setImageUri: (value: string | null) => void,
) => {
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();
  const imageState = useAppSelector(state => state.posts);

  const submitImageHandler = async () => {
    const errors = validateSubmitImageData({imageUri, description});
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(err =>
        Toast.show({type: 'error', text1: err}),
      );
      return;
    }
    try {
      if (imageUri) {
        await dispatch(uploadPost({imageUri, description})).unwrap();
        setDescription('');
        setImageUri(null);
        Toast.show({type: 'success', text1: 'Image uploaded successfully'});
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: (error as string) || 'An error occurred',
      });
    }
  };

  return {description, setDescription, submitImageHandler, imageState};
};
