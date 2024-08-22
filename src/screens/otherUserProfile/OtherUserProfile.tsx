import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import LoadingOverlay from '../../components/loading/Loading';
import UserName from '../../components/userName/UserName';
import UserDescription from '../../components/userDescription/UserDescription';
import Grid from '../../components/grid/Grid';
import {useOtherUserProfile} from './useOtherUserProfile';

const OtherUserProfile = ({route, navigation}: any) => {
  const {id} = route.params;
  const {profileState} = useOtherUserProfile({userId: id});

  const renderGalleryItem = ({item}: {item: string}) => (
    <Image key={item} source={{uri: item}} style={styles.gallery} />
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <UserName username={profileState.profileData?.username} />
      <View style={styles.profileContainer}>
        <View style={styles.profileOutline}>
          <ProfilePicture imageUri={profileState.profileData?.profilePicture} />
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
        <LoadingOverlay visible={profileState.status === 'loading'} />
      }
      numColumns={3}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
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
  gallery: {
    width: '33.33%',
    height: 100,
    aspectRatio: 1,
    margin: 0.5,
  },
  flatListContent: {
    flexGrow: 1,
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

export default OtherUserProfile;
