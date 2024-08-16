export type LogoProps = {
  marginBottom?: number;
  marginTop?: number;
  width?: number;
  height?: number;
};

export type TextInputProps = {
  placeholder: string;
  [key: string]: any;
};

export type ButtonProps = {
  onPress?: () => void;
  text: string;
  marginVertical?: number;
  [key: string]: any;
};

export type ProfilePictureProps = {
  width?: number;
  height?: number;
};

export type ReduxUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
};
export type AuthState = {
  user: ReduxUser | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type LoginUser = {
  identifier: string;
  password: string;
};

export type SignupUser = {
  userName: string;
  email: string;
  password: string;
};

export type ResetPassword = {
  oldPassword: string;
  newPassword: string;
};
