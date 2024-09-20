import {
  LoginFields,
  ProfileEditFields,
  ResetPasswordFields,
  SignupFields,
} from '../types/types';

export const RESET_PASSWORD = ({
  oldPassword,
  newPassword,
  confirmPassword,
}: ResetPasswordFields) => {
  const fields = [
    {
      placeholder: 'Old Password',
      key: 'oldPassword',
      value: oldPassword,
      secureTextEntry: true,
    },
    {
      placeholder: 'New Password',
      key: 'newPassword',
      value: newPassword,
      secureTextEntry: true,
    },
    {
      placeholder: 'Confirm Password',
      key: 'confirmPassword',
      value: confirmPassword,
      secureTextEntry: true,
    },
  ];
  return fields;
};

export const LOGIN = ({identifier, password}: LoginFields) => {
  const fields = [
    {
      placeholder: 'Email/Username',
      key: 'identifier',
      value: identifier,
    },
    {
      placeholder: 'Password',
      key: 'password',
      value: password,
      secureTextEntry: true,
    },
  ];
  return fields;
};

export const SIGNUP = ({
  userName,
  email,
  password,
  confirmPassword,
}: SignupFields) => {
  const fields = [
    {placeholder: 'Username', key: 'userName', value: userName},
    {placeholder: 'Email', key: 'email', value: email},
    {
      placeholder: 'Password',
      key: 'password',
      value: password,
      secureTextEntry: true,
    },
    {
      placeholder: 'Confirm Password',
      key: 'confirmPassword',
      value: confirmPassword,
      secureTextEntry: true,
    },
  ];
  return fields;
};

export const PROFILE_EDIT = (data: ProfileEditFields | null) => {
  const firstFields = [
    {
      label: 'Name',
      placeholder: 'Name',
      value: data?.name || '',
      field: 'name',
    },
    {
      label: 'Username',
      placeholder: 'Username',
      value: data?.username || '',
      field: 'username',
    },
    {
      label: 'Website',
      placeholder: 'Website',
      value: data?.website || '',
      field: 'website',
    },
    {
      label: 'Location',
      placeholder: 'Tokyo, Japan',
      value: data?.location || '',
      field: 'location',
    },
    {
      label: 'Bio',
      placeholder: 'Bio',
      value: data?.bio || '',
      field: 'bio',
      multiline: true,
      style: {borderBottomWidth: 0},
    },
  ];

  const secondFields = [
    {
      label: 'Email',
      placeholder: 'Email',
      value: data?.email || '',
      field: 'email',
      disabled: true,
    },
    {
      label: 'Phone',
      placeholder: '+92 XXXXXXXXXX',
      value: data?.phone || '',
      field: 'phone',
    },
    {
      label: 'Gender',
      placeholder: 'Male',
      value: data?.gender || '',
      field: 'gender',
    },
  ];

  return {
    firstFields,
    secondFields,
  };
};
