import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useNavigation from './useNavigation';
import {View, Image} from 'react-native';
import {COLORS} from '../constants/Colors';
import ProfilePicture from '../components/profilePicture/ProfilePicture';
import {TAB_SCREENS} from '../constants/NavigationRoutes';

const Tab = createBottomTabNavigator();
function BottomTabNavigation() {
  const currentUser = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        animation: 'slide_from_right',
        tabBarIcon: ({focused}) => {
          if (route?.name === 'Profile') {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.darkBlack,
                  borderRadius: 50,
                  width: 27,
                  height: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ProfilePicture
                  width={24}
                  height={24}
                  imageUri={currentUser?.photoURL}
                />
              </View>
            );
          }
          const tabScreen = TAB_SCREENS.find(
            screen => screen?.name === route?.name,
          );
          return (
            <Image
              source={tabScreen?.icon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.darkBlack : COLORS.black,
              }}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
          display: route?.name === 'UploadImage' ? 'none' : 'flex',
        },
      })}>
      {TAB_SCREENS?.map(screen => (
        <Tab.Screen
          key={screen?.name}
          name={screen?.name}
          component={screen?.component}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
