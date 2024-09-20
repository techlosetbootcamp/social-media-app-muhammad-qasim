import BottomTabNavigation from '../navigation/BottomTabNavigation';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import Login from '../screens/login/Login';
import OtherUserProfile from '../screens/otherUserProfile/OtherUserProfile';
import Posts from '../screens/posts/Posts';
import Profile from '../screens/profile/Profile';
import ProfileEdit from '../screens/profileEdit/ProfileEdit';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import Signup from '../screens/signup/Signup';
import UploadImage from '../screens/uploadImage/UploadImage';
import {HOME, UPLOADPAGE} from './Images';

export const AUTH_ROUTES = [
  {name: 'Home', component: BottomTabNavigation},
  {name: 'OtherUserProfile', component: OtherUserProfile},
  {name: 'ProfileEdit', component: ProfileEdit},
  {name: 'ResetPassword', component: ResetPassword},
];

export const GUEST_ROUTES = [
  {name: 'Login', component: Login},
  {name: 'Signup', component: Signup},
  {name: 'ForgotPassword', component: ForgotPassword},
];

export const TAB_SCREENS = [
  {name: 'Posts', component: Posts, icon: HOME},
  {name: 'UploadImage', component: UploadImage, icon: UPLOADPAGE},
  {name: 'Profile', component: Profile, isProfile: true},
];
