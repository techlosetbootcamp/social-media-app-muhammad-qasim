import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import styles from './LoadingStyles';
import {Colors} from '../../constants/Colors';

const LoadingOverlay = ({visible}: {visible: boolean}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none"
      onRequestClose={() => {}}>
      <View style={styles.overlay}>
        <View>
          <ActivityIndicator size="large" color={Colors.quaternary} />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingOverlay;
