import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import BottomTabNavigation from './src/navigation/bottomTabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/screens/detailScreen';
import BookingScreen from './src/screens/bookingScreen';

export type RootParamList = {
  BottomTabBar: undefined,
  DetailScreen: undefined,
  BookingScreen: undefined
}

export type Root = {
  navigate: any,
  goBack: any,
  dispatch: any,
  replace: any,
  push: any
}

// const App = () => {

//   const Stack = createStackNavigator<RootParamList>();
//   return <NavigationContainer>
//     <Stack.Navigator initialRouteName={'BottomTabBar'}>
//       <Stack.Screen name={'BottomTabBar'} options={{
//         headerShown: false
//       }} component={BottomTabNavigation} />
//       <Stack.Screen name={'DetailScreen'} options={{
//         headerShown: false
//       }} component={DetailScreen} />
//       <Stack.Screen name={'BookingScreen'} options={{
//         headerShown: false
//       }} component={BookingScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// }

// export default App;

const AppAgain = () => {
  const Stack = createStackNavigator<RootParamList>();
  return <NavigationContainer>
    <Stack.Navigator initialRouteName={'BottomTabBar'}>
      <Stack.Screen name={'BottomTabBar'} options={{
        headerShown: false
      }} component={BottomTabNavigation} />
      <Stack.Screen name={'DetailScreen'} options={{
        headerShown: false
      }} component={DetailScreen} />
      <Stack.Screen name={'BookingScreen'} options={{
        headerShown: false
      }} component={BookingScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  // }
};

export default AppAgain;