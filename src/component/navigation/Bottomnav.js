import Home from '../Home/Home';
import Signup from '../authentication/signup/Signup';
import Login1 from '../authentication/Login1';
import Error from '../unavailable/Error';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IMAGES from '../../Assets';
import {Image, View} from 'react-native';
const Bottomnav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderTopWidth: 1,
          borderTopColor: 'blue',
        },
        tabBarLabelStyle: {
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: {color: 'red'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{borderTopColor: 'green', borderTopWidth: 3}}>
                <Image
                  source={IMAGES.CART}
                  style={{height: 35, width: 35, objectFit: 'contain'}}
                />
              </View>
            ) : (
              <Image
                source={IMAGES.CART}
                style={{height: 35, width: 35, objectFit: 'contain'}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Login1"
        component={Login1}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: {color: 'red'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{borderTopColor: 'green', borderTopWidth: 3}}>
                <Image
                  source={IMAGES.CART}
                  style={{height: 35, width: 35, objectFit: 'contain'}}
                />
              </View>
            ) : (
              <Image
                source={IMAGES.CART}
                style={{height: 35, width: 35, objectFit: 'contain'}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomnav;
