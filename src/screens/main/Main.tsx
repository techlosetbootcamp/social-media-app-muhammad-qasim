import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import Logo from '../../components/logo/Logo';
import {Colors} from '../../constants/Colors';

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo marginBottom={6} marginTop={10} width={105} height={28} />
      </View>
      <ScrollView>
        {/* User Info apply map here */}
        <View>
          <View style={styles.userInfo}>
            <View style={styles.profileInfo}>
              <View>
                <Image
                  style={styles.userImage}
                  source={require('../../assets/images/user.png')}
                />
              </View>
              <View>
                <View style={styles.nameSection}>
                  <Text style={styles.name}>joshua_l</Text>
                  <Image
                    source={require('../../assets/images/verified.png')}
                    style={{width: 9.8, height: 9.8}}
                  />
                </View>
                <Text style={styles.country}>Tokyo, Japan</Text>
              </View>
            </View>
            <View>
              <Image
                source={require('../../assets/images/more.png')}
                style={{width: 14}}
              />
            </View>
          </View>
          <View>
            <Image
              source={require('../../assets/images/post.png')}
              style={{width: '100%'}}
            />
          </View>
          <View style={styles.postInfo}>
            <Text style={styles.postText}>
              <Text style={styles.name}>joshua_l</Text> The game in Japan was
              amazing and I want to share some photos
            </Text>
            <Text style={styles.date}>September 19</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Main;

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
  userImage: {
    width: 32,
    height: 32,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: Colors.lightGrey,
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
});
