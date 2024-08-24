import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {z} from 'zod';
import {submitImageSchema} from '../../constants/FormSchema';
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
      } else if (result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;
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
    try {
      submitImageSchema.parse({imageUri, description});
      if (imageUri) {
        await dispatch(uploadPost({imageUri, description})).unwrap();
        setDescription('');
        setImageUri(null);
        Toast.show({type: 'success', text1: 'Image uploaded successfully'});
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          Toast.show({type: 'error', text1: err.message});
        });
      } else {
        Toast.show({
          type: 'error',
          text1: (error as string) || 'An error occurred',
        });
      }
    }
  };

  return {description, setDescription, submitImageHandler, imageState};
};
