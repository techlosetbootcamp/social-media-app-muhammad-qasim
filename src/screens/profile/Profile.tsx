import React from 'react';
import {View, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import styles from './ProfileStyles';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import {useLogoutHandler, useProfile} from './useProfile';
import LoadingOverlay from '../../components/loading/Loading';
import UserName from '../../components/userName/UserName';
import UserDescription from '../../components/userDescription/UserDescription';
import Grid from '../../components/grid/Grid';
import {LOGOUT} from '../../constants/Images';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

const Profile = () => {
  const navigation = useTypeNavigation();
  const {profileState} = useProfile();
  const {logoutHandler} = useLogoutHandler();
  const renderGalleryItem = ({item}: {item: string}) => (
    <Image key={item} source={{uri: item}} style={styles.galleryImage} />
  );

  const renderHeader = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={logoutHandler}>
          <Image source={LOGOUT} style={styles.logout} />
        </TouchableOpacity>
      </View>
      <UserName username={profileState?.profileData?.username} />
      <View style={styles.profileContainer}>
        <View style={styles.profileOutline}>
          <ProfilePicture
            imageUri={profileState?.profileData?.profilePicture}
          />
        </View>
        <UserDescription
          name={profileState?.profileData?.name}
          bio={profileState?.profileData?.bio}
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
        <LoadingOverlay visible={profileState?.status === 'loading'} />
      }
      numColumns={3}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

export default Profile;
