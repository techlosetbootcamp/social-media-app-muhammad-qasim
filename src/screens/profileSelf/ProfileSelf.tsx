import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import Gallery from '../../components/gallery/Gallery';
import UserName from '../../components/userName/UserName';
import ProfileDesc from '../../components/profileDesc/ProfileDesc';
import GridSection from '../../components/gridSection/GridSection';
import PictureOutline from '../../components/pictureOutline/PictureOutline';

const ProfileSelf = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <UserName />
        <View style={styles.profileContainer}>
          <PictureOutline>
            <ProfilePicture />
          </PictureOutline>
          <ProfileDesc />
          <TouchableOpacity style={styles.editProfile}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <GridSection />
        <Gallery />
      </View>
    </ScrollView>
  );
};

export default ProfileSelf;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 11,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  profileContainer: {
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 12,
  },

  editProfile: {
    borderWidth: 1,
    borderColor: Colors.lightGrey2,
    borderRadius: 6,
    paddingVertical: 6,
    width: '100%',
    marginTop: 15,
    alignItems: 'center',
  },
  editProfileText: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 18,
    color: Colors.darkBlack,
  },
});
