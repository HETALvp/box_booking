import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import BottomTabNavigation from './src/navigation/bottomTabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/screens/detailScreen';
import { routes } from './src/navigation/routes';

const App = () => {
 
  const Stack = createStackNavigator();
  return <NavigationContainer>
<Stack.Navigator initialRouteName={routes.BOTTOM_TAB}>
  <Stack.Screen name={routes.BOTTOM_TAB} options={{
    headerShown:false
  }} component={BottomTabNavigation} />
  <Stack.Screen name={routes.DETAILS} component={DetailScreen}/>
</Stack.Navigator>
  </NavigationContainer>
}

export default App;