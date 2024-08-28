import {View, FlatList, Text, Image} from 'react-native';
import React from 'react';
import styles from './OtherUserProfileStyles';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import LoadingOverlay from '../../components/loading/Loading';
import UserName from '../../components/userName/UserName';
import UserDescription from '../../components/userDescription/UserDescription';
import Grid from '../../components/grid/Grid';
import {useOtherUserProfile} from './useOtherUserProfile';
import {useRoute} from '@react-navigation/native';

const OtherUserProfile = () => {
  const route = useRoute();
  const {id} = route.params as {id: string};
  const {profileState} = useOtherUserProfile({userId: id});

  const renderGalleryItem = ({item}: {item: string}) => (
    <Image key={item} source={{uri: item}} style={styles.gallery} />
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
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

export default OtherUserProfile;
