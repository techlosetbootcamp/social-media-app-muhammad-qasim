import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import Logo from '../../components/logo/Logo';
import styles from './PostsStyles';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import {usePosts} from './usePosts';
import LoadingOverlay from '../../components/loading/Loading';
import {Post} from '../../types/types';
import {more, verified} from '../../constants/Images';
import useTypeNavigation from '../../hooks/useTypeNavigationHook';

const Posts = () => {
  const navigation = useTypeNavigation();
  const {
    postsState,
    handleEndReached,
    isInitialLoading,
    isLoadingMore,
    isEmpty,
    isEndOfList,
    formatDate,
    refreshing,
    refresh,
  } = usePosts();

  const renderItem = useCallback(
    ({item}: {item: Post}) => (
      <View>
        <View style={styles.userInfo}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('OtherUserProfile', {id: item?.user?.id})
            }>
            <View style={styles.profileInfo}>
              <ProfilePicture
                width={32}
                height={32}
                imageUri={item?.user?.profilePicture}
              />
              <View>
                <View style={styles.nameSection}>
                  <Text style={styles.name}>{item?.user?.name}</Text>
                  <Image source={verified} style={styles.verifiedIcon} />
                </View>
                <Text style={styles.country}>{item?.user?.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Image source={more} style={styles.moreIcon} />
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
    [navigation, formatDate],
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
        refreshing={refreshing}
        onRefresh={refresh}
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
            <View style={styles.emptyContainer}>
              <Text style={styles.noPosts}>No posts available.</Text>
            </View>
          ) : null
        }
        contentContainerStyle={styles.flatListContent}
      />
      <LoadingOverlay visible={postsState?.status === 'loading'} />
    </View>
  );
};

export default Posts;
