import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import {useProfile} from './useProfile';
import LoadingOverlay from '../../components/loading/Loading';
import UserName from '../../components/userName/UserName';
import UserDescription from '../../components/userDescription/UserDescription';
import Grid from '../../components/grid/Grid';

const Profile = ({navigation}: any) => {
  const {profileState} = useProfile();

  const renderGalleryItem = ({item}: {item: string}) => (
    <Image key={item} source={{uri: item}} style={styles.galleryImage} />
  );

  const renderHeader = () => (
    <View style={styles.container}>
      <UserName username={profileState.profileData?.username} />
      <View style={styles.profileContainer}>
        <View style={styles.profileOutline}>
          <ProfilePicture imageUri={profileState.profileData?.profilePicture} />
        </View>
        <UserDescription
          name={profileState.profileData?.name}
          bio={profileState.profileData?.bio}
        />
        <TouchableOpacity
          style={styles.editProfile}
          onPress={() => navigation.navigate('ProfileEdit')}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <Grid />
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={profileState?.profileData?.images}
      renderItem={renderGalleryItem}
      keyExtractor={item => item}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No images available</Text>
        </View>
      }
      ListFooterComponent={
        <LoadingOverlay visible={profileState.status === 'loading'} />
      }
      numColumns={3}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

export default Profile;

const styles = StyleSheet.create({
  flatListContent: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: Colors.white,
  },
  profileContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
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
  galleryImage: {
    width: '33.33%',
    height: 100,
    aspectRatio: 1,
    margin: 0.5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: Colors.lightBlack2,
  },
});
