import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import Gallery from '../../components/gallery/Gallery';
import UserName from '../../components/userName/UserName';
import ProfileDesc from '../../components/profileDesc/ProfileDesc';
import GridSection from '../../components/gridSection/GridSection';
import PictureOutline from '../../components/pictureOutline/PictureOutline';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <UserName />
        <View style={styles.profileContainer}>
          <PictureOutline>
            <ProfilePicture />
          </PictureOutline>
          <ProfileDesc />
        </View>
        <GridSection />
        <Gallery />
      </View>
    </ScrollView>
  );
};

export default Profile;

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
});
