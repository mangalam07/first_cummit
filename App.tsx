// ----- import react
import React from 'react';

// ----- import react navigation lib
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ----- import Main Screen component
import SplashScreen from './src/Screens/SplashScreen';
import Onboarding_screen_01 from './src/Screens/Onboarding_screen_01';
import Onboarding_screen_02 from './src/Screens/Onboarding_screen_02';
import Onboarding_screen_03 from './src/Screens/Onboarding_screen_03';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';

// ----- navigation conatiner
const Stack = createNativeStackNavigator();

// ----- Main Component
const App = () => {
  // ----- Main View
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Splash Screen */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        {/* First Onboarding Screen */}
        <Stack.Screen name="Onboarding_food" component={Onboarding_screen_01} />

        {/* Second Onboarding Screen */}
        <Stack.Screen
          name="Onboarding_payment"
          component={Onboarding_screen_02}
        />

        {/* Third Onboarding */}
        <Stack.Screen
          name="Onboarding_delivery"
          component={Onboarding_screen_03}
        />

        {/* User Login Screen */}
        <Stack.Screen name="Login" component={Login} />

        {/* Home Screen */}
        <Stack.Screen name="Home" component={Home} />

        {/* Product details */}
        <Stack.Screen name='Product_Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
