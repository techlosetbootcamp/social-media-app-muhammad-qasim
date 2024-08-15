import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

const ProfileDesc = () => {
  return (
    <>
      <Text style={styles.profileName}>Jacob West</Text>
      <Text style={styles.profileDesc}>
        Digital goodies designer
        <Text style={styles.spanTag}> @pixsellz </Text>Everything is designed.
      </Text>
    </>
  );
};

export default ProfileDesc;

const styles = StyleSheet.create({
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
  spanTag: {
    color: Colors.lightBlue,
  },
});
