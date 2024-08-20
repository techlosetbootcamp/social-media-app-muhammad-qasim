import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import Logo from '../../components/logo/Logo';
import {Colors} from '../../constants/Colors';
import ProfilePicture from '../../components/profilePicture/ProfilePicture';
import {usePost} from './usePost';
import LoadingOverlay from '../../components/loading/Loading';

const Post = () => {
  const {postState} = usePost();
  const renderItem = useCallback(
    ({item}: {item: any}) => (
      <View>
        <View style={styles.userInfo}>
          <View style={styles.profileInfo}>
            <ProfilePicture
              width={32}
              height={32}
              imageUri={item.user.profilePicture}
            />
            <View>
              <View style={styles.nameSection}>
                <Text style={styles.name}>{item.user.name}</Text>
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
        <Image source={{uri: item.image.imageUrl}} style={styles.postImage} />
        <View style={styles.postInfo}>
          <Text style={styles.postText}>
            <Text style={styles.name}>{item.user.name}</Text>{' '}
            {item.image.description || 'No caption'}
          </Text>
          <Text style={styles.date}>{item.image.createdAt}</Text>
        </View>
      </View>
    ),
    [],
  );

  const handleEndReached = useCallback(() => {}, []);

  const isLoading = postState.status === 'loading';
  const isEmpty = postState.status === 'idle' && postState.posts.length === 0;
  const isEndOfList = postState.status === 'idle' && postState.posts.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo marginBottom={6} marginTop={10} width={105} height={28} />
      </View>
      <FlatList
        data={postState.posts}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item.user.id ? item.user.id.toString() : index.toString()
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          !isLoading && !isEndOfList ? (
            <View style={styles.footerContainer}>
              <Text style={styles.noMorePosts}>No more posts available.</Text>
            </View>
          ) : null
        }
        ListEmptyComponent={
          isLoading ? null : isEmpty ? (
            <Text style={styles.noMorePosts}>No posts available.</Text>
          ) : null
        }
      />
      <LoadingOverlay visible={isLoading} />
    </View>
  );
};

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
  noMorePosts: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: Colors.darkBlack,
  },
  verifiedIcon: {
    width: 9.8,
    height: 9.8,
  },
  moreIcon: {
    width: 14,
  },
});

export default Post;
