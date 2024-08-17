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
