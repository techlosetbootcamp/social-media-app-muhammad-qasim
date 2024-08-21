import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import Logo from '../../components/logo/Logo';
import {Colors} from '../../constants/Colors';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import {usePosts} from './usePosts';
import LoadingOverlay from '../../components/loading/Loading';
import {Post} from '../../types/types';

const Posts = () => {
  const {
    postsState,
    handleEndReached,
    isInitialLoading,
    isLoadingMore,
    isEmpty,
    isEndOfList,
    formatDate,
  } = usePosts();

  const renderItem = useCallback(
    ({item}: {item: Post}) => (
      <View>
        <View style={styles.userInfo}>
          <View style={styles.profileInfo}>
            <ProfilePicture
              width={32}
              height={32}
              imageUri={item?.user?.profilePicture}
            />
            <View>
              <View style={styles.nameSection}>
                <Text style={styles.name}>{item?.user?.name}</Text>
                <Image
                  source={require('../../assets/images/verified.png')}
                  style={styles.verifiedIcon}
                />
              </View>
              <Text style={styles.country}>Tokyo, Japan</Text>
            </View>
          </View>
          <Image
            source={require('../../assets/images/more.png')}
            style={styles.moreIcon}
          />
        </View>
        <Image source={{uri: item?.image?.imageUrl}} style={styles.postImage} />
        <View style={styles.postInfo}>
          <Text style={styles.postText}>
            <Text style={styles.name}>{item?.user?.name}</Text>{' '}
            {item?.image?.description || 'No caption'}
          </Text>
          <Text style={styles.date}>{formatDate(item?.image?.createdAt)}</Text>
        </View>
      </View>
    ),
    [],
  );
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo marginBottom={6} marginTop={10} width={105} height={28} />
      </View>
      <FlatList
        data={postsState?.posts}
        renderItem={renderItem}
        keyExtractor={item => `${item?.user?.id}-${item?.image?.createdAt}`}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoadingMore ? (
            <View style={styles.footerContainer}>
              <Text style={styles.footer}>Loading more posts...</Text>
            </View>
          ) : isEndOfList ? (
            <View style={styles.footerContainer}>
              <Text style={styles.footer}>No more posts available.</Text>
            </View>
          ) : null
        }
        ListEmptyComponent={
          !isInitialLoading && isEmpty ? (
            <Text style={styles.noPosts}>No posts available.</Text>
          ) : null
        }
      />
      <LoadingOverlay visible={isInitialLoading} />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: Colors.grey,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  userInfo: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  nameSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 18,
    color: Colors.darkBlack,
  },
  country: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: Colors.darkBlack,
  },
  postInfo: {
    paddingHorizontal: 15,
    paddingTop: 24,
    paddingBottom: 20,
    gap: 13,
  },
  postText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: Colors.darkBlack,
  },
  date: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: Colors.lightBlack2,
  },
  postImage: {
    width: '100%',
    height: 375,
    resizeMode: 'cover',
  },
  footerContainer: {
    alignItems: 'center',
    padding: 20,
  },
  footer: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: Colors.lightBlack2,
  },
  noPosts: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: Colors.lightBlack2,
  },
  verifiedIcon: {
    width: 9.8,
    height: 9.8,
  },
  moreIcon: {
    width: 14,
  },
});
