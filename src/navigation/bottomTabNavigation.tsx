import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import ExploreScreen from '../screens/exploreScreen';
import BookedScreen from '../screens/bookedScreen';
import ProfileScreen from '../screens/profileScreen';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { AppColors } from '../theme/colors';
import { routes } from './routes';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import IonIcons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {

    const getTabIcon=(focused: boolean, tab: string)=>{
        const iconColor = focused ? AppColors.primaryColor : AppColors.grey
        switch (tab) {
            case routes.HOME:
                return <FeatherIcons name="home" color={iconColor} size={24}/>
            case routes.EXPLORE:
                return <FeatherIcons name="map-pin" color={iconColor} size={24}/>
            case routes.BOOKED:
                return <AntDesignIcons name="profile" color={iconColor} size={24}/>
            case routes.PROFILE:
                return <IonIcons name="person-outline" color={iconColor} size={24}/>
            default:
                break;
        }
    }

  return (
    <Tab.Navigator>
    <Tab.Screen name={routes.HOME} component={HomeScreen} options={{
        headerShown:false, 
        tabBarShowLabel:false,
    tabBarIcon: ({size,focused,color})=>{
        return getTabIcon(focused, routes.HOME)
    }}} />
    <Tab.Screen name={routes.EXPLORE} component={ExploreScreen} options={{headerShown:false, tabBarShowLabel:false,
    tabBarIcon: ({size,focused,color})=>{
        return getTabIcon(focused, routes.EXPLORE)
    }}}/>
    <Tab.Screen name={routes.BOOKED} component={BookedScreen} options={{headerShown:false, tabBarShowLabel:false,
    tabBarIcon: ({size,focused,color})=>{
        return getTabIcon(focused, routes.BOOKED)
    }}}/>
    <Tab.Screen name={routes.PROFILE} component={ProfileScreen} options={{headerShown:false,  tabBarShowLabel:false,
    tabBarIcon: ({size,focused,color})=>{
        return getTabIcon(focused, routes.PROFILE)
    }}}/>
    
  </Tab.Navigator>
  )
}

export default BottomTabNavigation