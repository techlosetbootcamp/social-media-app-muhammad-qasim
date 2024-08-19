export type LogoProps = {
  marginBottom?: number;
  marginTop?: number;
  width?: number;
  height?: number;
};

export type TextInputProps = {
  placeholder: string;
  [key: string]: unknown;
};

export type ButtonProps = {
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export type ProfilePictureProps = {
  width?: number;
  height?: number;
  imageUri?: string;
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

export type ImageState = {
  imageUri: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type User = {
  username: string;
  email: string;
  name?: string;
  bio?: string;
  profilePicture?: string;
  website?: string;
  phone?: string;
  gender?: string;
  images?: string[];
};

export type ProfileState = {
  profileData: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type FetchProfileProps = {
  uid: string;
};
export type LoginUser = {
  identifier: string;
  password: string;
};

export type UlpoadImage = {
  imageUri: string;
  description: string;
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

export type LoaderProps = {
  userStatus: string;
  text: string;
};

export type HorizontalInputProps = {
  label: string;
  placeholder: string;
  style?: ViewStyle | TextStyle;
  multiline?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
};
