import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
    icon: string,
    size: number,
    color: string,
    iconProvider: IconProvider
}

const AppIcon = (props: Props) => {
    const { icon, size, color, iconProvider } = props

    const getIcon = () => {
        switch (iconProvider) {
            case IconProvider.ionIcons:
                return <IonIcons name={icon} size={size} color={color} />
            case IconProvider.fontAwesome5:
                return <FontAwesome5 name={icon} size={size} color={color} />
            case IconProvider.materialIcons:
                return <MaterialIcons name={icon} size={size} color={color} />
            case IconProvider.fontisto:
                return <Fontisto name={icon} size={size} color={color} />
            case IconProvider.antDesign:
                return <AntDesign name={icon} size={size} color={color} />
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

export enum IconProvider {
    ionIcons = 'IonIcons',
    fontAwesome5 = 'FontAwesome5',
    materialIcons = 'MaterialIcons',
    fontisto = 'Fontisto',
    antDesign = 'AntDesign'
}