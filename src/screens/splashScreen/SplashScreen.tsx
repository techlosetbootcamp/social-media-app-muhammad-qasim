import {Animated, StyleSheet, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFillObject]}>
        <LinearGradient
          colors={['#c837ab', '#e74967', '#e7513c', '#f6d456']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          locations={[0, 0.33, 0.67, 1]}
          style={StyleSheet.absoluteFillObject}
        />
      </Animated.View>
      <Image source={require('../../assets/images/instagramWhiteLogo.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
