import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import {useProfile} from './useProfile';
import LoadingOverlay from '../../components/loading/Loading';

const Profile = () => {
  const {profileState} = useProfile();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={[styles.nameContainer, styles.childMargin]}>
          <Image source={require('../../assets/images/lock.png')} />
          <Text style={styles.name}>{profileState.profileData?.username}</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileOutline}>
            <ProfilePicture
              imageUri={profileState.profileData?.profilePicture}
            />
          </View>
          <Text style={styles.profileName}>
            {profileState.profileData?.name}
          </Text>
          <Text style={styles.profileDesc}>
            {profileState.profileData?.bio}
          </Text>
          <TouchableOpacity style={styles.editProfile}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridSection}>
          <Image
            source={require('../../assets/images/grid.png')}
            style={styles.grid}
          />
        </View>
        <View style={styles.gallerySection}>
          {profileState.profileData?.images?.map((image, index) => (
            <Image key={index} source={{uri: image}} style={styles.gallery} />
          ))}
        </View>
      </View>
      <LoadingOverlay visible={profileState.status === 'loading'} />
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
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  name: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: Colors.darkBlack,
  },
  childMargin: {
    marginTop: 11,
    marginBottom: 11,
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
  profileOutline: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 96,
    height: 96,
    marginBottom: 14,
  },
  profileName: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: Colors.darkBlack,
  },
  profileDesc: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    color: Colors.darkBlack,
    textAlign: 'center',
    marginTop: 1,
    maxWidth: '70%',
  },
  gridSection: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.grey,
    padding: 8,
    borderTopColor: Colors.lightGrey,
    borderTopWidth: 1,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
  grid: {
    width: 25,
    height: 25,
  },
  gallerySection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gallery: {
    width: '33%',
    height: '100%',
    aspectRatio: 1,
    marginVertical: 1,
  },
});
