import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

const UserName = () => {
  return (
    <View style={[styles.nameContainer, styles.childMargin]}>
      <Image source={require('../../assets/images/lock.png')} />
      <Text style={styles.name}>jacob_w</Text>
    </View>
  );
};

export default UserName;

const styles = StyleSheet.create({
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
});
