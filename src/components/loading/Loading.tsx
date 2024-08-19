import React from 'react';
import {Modal, View, ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const LoadingOverlay = ({visible}: {visible: boolean}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={() => {}}>
      <View style={styles.overlay}>
        <View>
          <ActivityIndicator size="large" color={Colors.quaternary} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default LoadingOverlay;
