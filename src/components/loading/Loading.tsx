import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import styles from './LoadingStyles';
import {COLORS} from '../../constants/Colors';

const LoadingOverlay = ({visible}: {visible: boolean}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="none"
      onRequestClose={() => {}}>
      <View style={styles.overlay}>
        <View>
          <ActivityIndicator size="large" color={COLORS.quaternary} />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingOverlay;
