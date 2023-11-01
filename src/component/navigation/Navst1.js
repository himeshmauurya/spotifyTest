
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Home/Home';
import Signup from '../authentication/signup/Signup';
import Login1 from '../authentication/Login1';
import Error from '../unavailable/Error';
// import Drawernav from './Drawernav';
import Bottomnav from './Bottomnav';
import Dob from '../authentication/signup/Dob';
function Navst1() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerShown: false,
        }}>
       
        <Stack.Screen name="Main" component={Bottomnav} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login1" component={Login1} />  
        <Stack.Screen name="Error" component={Error} />
        <Stack.Screen name="Dob" component={Dob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navst1;
