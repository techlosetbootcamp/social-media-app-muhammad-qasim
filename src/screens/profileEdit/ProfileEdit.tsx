import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import HorizontalInput from '../../components/horizontalInput/HorizontalInput';

const ProfileEdit = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.editProfileBtn}>Edit Profile</Text>
        <TouchableOpacity>
          <Text style={styles.doneBtn}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profile}>
          <ProfilePicture width={95} height={95} />
          <Text style={styles.changeProfilePhotoText}>
            Change Profile Photo
          </Text>
        </View>
      </View>
      <View style={styles.editSection}>
        <HorizontalInput label="Name" placeholder="Name" />
        <HorizontalInput label="Username" placeholder="Username" />
        <HorizontalInput label="Website" placeholder="Website" />
        <HorizontalInput
          label="Bio"
          placeholder="Bio"
          style={{borderBottomWidth: 0}}
          multiline={true}
        />
      </View>
      <View>
        <Text style={styles.privateInformation}>Private Information</Text>
        <HorizontalInput label="Email" placeholder="Email" />
        <HorizontalInput label="Phone" placeholder="+92 XXXXXXXXXX" />
        <HorizontalInput label="Gender" placeholder="Male" />
      </View>
      <View>
        <Text style={styles.saveChanges}>
          Want to change your password?{' '}
          <Text style={{color: Colors.blue}}>Reset Password.</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: Colors.grey,
  },
  cancelBtn: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: Colors.darkBlack,
  },
  editProfileBtn: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: Colors.black,
  },
  doneBtn: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: Colors.blue,
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 13,
  },
  profile: {
    alignItems: 'center',
    gap: 12,
  },
  changeProfilePhotoText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 21,
    color: Colors.blue,
  },
  editSection: {
    borderTopWidth: 0.5,
    borderTopColor: Colors.lightGrey,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightGrey,
  },
  privateInformation: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    color: Colors.black,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  saveChanges: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.lightBlack2,
    textAlign: 'center',
    paddingVertical: 45,
  },
});
