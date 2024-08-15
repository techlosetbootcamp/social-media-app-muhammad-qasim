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
