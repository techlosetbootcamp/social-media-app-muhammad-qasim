import {z} from 'zod';

export const signUpSchema = z.object({
  userName: z
    .string()
    .trim()
    .min(3, {message: 'UserName must be at least 3 characters long'})
    .max(20, {message: 'UserName must be at most 20 characters long'}),
  email: z.string().trim().email({message: 'Invalid email address'}),
  password: z
    .string()
    .min(6, {message: 'Password must be at least 6 characters long'}),
  confirmPassword: z.string().min(1, {message: 'Please confirm your password'}),
});

export const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(3, {message: 'Must be at least 3 characters long'})
    .max(50, {message: 'Must be at most 50 characters long'})
    .refine(
      value => {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isUsername = /^[a-zA-Z0-9_ \-!@#$%^&*()+=~`|,.<>?]+$/.test(value);
        return isEmail || isUsername;
      },
      {
        message: 'Must be a valid email or username',
      },
    ),
  password: z
    .string()
    .min(6, {message: 'Password must be at least 6 characters long'}),
});

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email({message: 'Invalid email address'}),
});

export const resetPasswordSchema = z.object({
  oldPassword: z
    .string()
    .min(6, {message: 'Password must be at least 6 characters long'}),
  newPassword: z
    .string()
    .min(6, {message: 'Password must be at least 6 characters long'}),
  confirmPassword: z
    .string()
    .min(6, {message: 'Password must be at least 6 characters long'}),
});

export const submitImageSchema = z.object({
  imageUri: z
    .string()
    .min(1, {message: 'Please select an image'})
    .nullable()
    .refine(value => value !== null, {message: 'Please select an image'}),
  description: z
    .string()
    .min(1, {message: 'Please write something about the image'}),
});

export const userSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, {message: 'UserName must be at least 3 characters long'})
    .max(20, {message: 'UserName must be at most 20 characters long'}),
  email: z.string().trim().email({message: 'Invalid email address'}),
  name: z
    .string()
    .trim()
    .max(30, {message: 'Name must be at most 30 characters long'})
    .optional(),
  bio: z
    .string()
    .trim()
    .max(200, {message: 'Bio must be at most 200 characters long'})
    .optional(),
  profilePicture: z
    .string()
    .url({message: 'Invalid URL for profile picture'})
    .optional(),
  website: z
    .string()
    .trim()
    .url({message: 'Invalid URL for website'})
    .refine(val => !val || !val.includes(' '), {
      message: 'Website URL cannot contain spaces',
    })
    .optional(),
  phone: z
    .string()
    .optional()
    .transform(val => val?.trim() || undefined)
    .refine(val => !val || /^[0-9+\- ]{6,20}$/.test(val), {
      message: 'Invalid phone number',
    }),
  gender: z
    .string()
    .optional()
    .transform(val => val?.trim().toLowerCase() || undefined)
    .refine(val => !val || ['male', 'female', 'other'].includes(val), {
      message: 'Gender must be one of: male, female, other',
    }),
});
