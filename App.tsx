import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookedScreen from './src/screens/bookedScreen';
import ExploreScreen from './src/screens/exploreScreen';
import HomeScreen from './src/screens/homeScreen';
import ProfileScreen from './src/screens/profileScreen';
import BottomTabNavigation from './src/navigation/bottomTabNavigation';

const App = () => {
  const Tab = createBottomTabNavigator();
  return <NavigationContainer>
 <BottomTabNavigation />
  </NavigationContainer>
}

export default App;