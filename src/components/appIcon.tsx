import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    icon: string,
    size: number,
    color: string
}

const AppIcon = ({icon, size, color}:Props) => {

    const getIcon = () => {
        switch (icon) {
            case 'fast-food-outline':
            case 'car-outline':
               return <IonIcons name={icon} size={size} color={color} />
            case 'glass-whiskey':
            case 'restroom':
               return <FontAwesome5 name={icon} size={size} color={color} />
            case 'chair':
            case 'meeting-room':
            case 'light':
                return <MaterialIcons name={icon} size={size} color={color} />
            default:
                break
        }
    }

  return (
   <>
   {getIcon()}</>
  )
}

export default AppIcon

const styles = StyleSheet.create({})