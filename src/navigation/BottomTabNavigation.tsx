import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useAuthNavigation from './AuthNavigation';
import {View, Image} from 'react-native';
import {Colors} from '../constants/Colors';
import ProfilePicture from '../components/profilePicture/ProfilePicture';
import {tabScreens} from '../constants/NavigationRoutes';

const Tab = createBottomTabNavigator();
function BottomTabNavigation() {
  const currentUser = useAuthNavigation();
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
                  borderColor: Colors.darkBlack,
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
          const tabScreen = tabScreens.find(
            screen => screen?.name === route?.name,
          );
          return (
            <Image
              source={tabScreen?.icon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? Colors.darkBlack : Colors.black,
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
      {tabScreens?.map(screen => (
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
