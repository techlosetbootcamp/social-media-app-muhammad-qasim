import {
  ForgotPasswordData,
  LoginData,
  ResetPasswordData,
  SignUpData,
  SubmitImageData,
  UserData,
} from '../types/types';

export const validateSignUpData = (data: SignUpData) => {
  const errors: {[key: string]: string} = {};
  if (!data.userName.trim()) {
    errors.userName = 'UserName is required';
  } else if (data.userName.length < 3) {
    errors.userName = 'UserName must be at least 3 characters long';
  } else if (data.userName.length > 20) {
    errors.userName = 'UserName must be at most 20 characters long';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Invalid email address';
  }
  if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export const validateLoginData = (data: LoginData) => {
  const errors: {[key: string]: string} = {};
  const identifier = data.identifier.trim();
  if (identifier.length < 3) {
    errors.identifier = 'Email/Username must be at least 3 characters long';
  } else if (identifier.length > 50) {
    errors.identifier = 'Email/Username must be at most 50 characters long';
  } else {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const isUsername = /^[a-zA-Z0-9_ \-!@#$%^&*()+=~`|,.<>?]+$/.test(
      identifier,
    );
    if (!isEmail && !isUsername) {
      errors.identifier = 'Must be a valid email or username';
    }
  }
  if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
};

export const validateForgotPasswordData = (data: ForgotPasswordData) => {
  const errors: {[key: string]: string} = {};
  const email = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export const validateResetPasswordData = (data: ResetPasswordData) => {
  const errors: {[key: string]: string} = {};
  if (!data.oldPassword || !data.newPassword || !data.confirmPassword) {
    errors.emptyFields = 'All password fields are required';
    return errors;
  }
  if (data.oldPassword.length < 6) {
    errors.oldPassword = 'Password must be at least 6 characters long';
  }
  if (data.newPassword.length < 6) {
    errors.newPassword = 'Password must be at least 6 characters long';
  }

  if (data.confirmPassword.length < 6) {
    errors.confirmPassword = 'Password must be at least 6 characters long';
  }
  if (data.newPassword !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  if (data.newPassword === data.oldPassword) {
    errors.newPassword = 'New password must be different from the old one';
    errors.confirmPassword = 'New password must be different from the old one';
  }

  return errors;
};

export const validateSubmitImageData = (data: SubmitImageData) => {
  const errors: {[key: string]: string} = {};
  if (!data.imageUri || data.imageUri.trim() === '') {
    errors.imageUri = 'Please select an image';
  }
  if (data.description.trim().length < 1) {
    errors.description = 'Please write something about the image';
  }
  return errors;
};

export const validateUserData = (data: UserData) => {
  const errors: {[key: string]: string} = {};
  if (!data.username || data.username.trim().length < 3) {
    errors.username = 'UserName must be at least 3 characters long';
  } else if (data.username.trim().length > 20) {
    errors.username = 'UserName must be at most 20 characters long';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Invalid email address';
  }
  if (data.name && data.name.trim().length > 30) {
    errors.name = 'Name must be at most 30 characters long';
  }
  if (data.bio && data.bio.trim().length > 200) {
    errors.bio = 'Bio must be at most 200 characters long';
  }
  const isValidUrl = (url: string) => {
    return (
      url.startsWith('http://') ||
      url.startsWith('https://') ||
      url.startsWith('file://')
    );
  };

  if (data.profilePicture && !isValidUrl(data.profilePicture.trim())) {
    errors.profilePicture = 'Invalid URL for profile picture';
  }

  if (data.website) {
    const trimmedWebsite = data.website.trim();
    if (!isValidUrl(trimmedWebsite) || trimmedWebsite.includes(' ')) {
      errors.website = 'Invalid URL for website';
    }
  }
  if (data.location && !/^[a-zA-Z, ]+$/.test(data.location.trim())) {
    errors.location = 'Invalid location';
  }
  if (data.phone && !/^[0-9+\- ]{6,20}$/.test(data.phone.trim())) {
    errors.phone = 'Invalid phone number';
  }
  if (data.gender) {
    const validGenders = ['male', 'female', 'other'];
    const normalizedGender = data.gender.trim().toLowerCase();
    if (!validGenders.includes(normalizedGender)) {
      errors.gender = 'Gender must be one of: male, female, other';
    }
  }
  return errors;
};
