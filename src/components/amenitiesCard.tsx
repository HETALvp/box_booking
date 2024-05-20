import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppColors, windowHeight, windowWidth } from '../theme/colors'
import RadiusContainer from './radiusContainer'
import ShadowContainer from './shadowContainer'
import AppIcon from './appIcon'
import { Caption2 } from './text'

interface Props {
    title:string,
    icon: string
}

const AmenitiesCard = ({title,icon}:Props) => {

  return (
  
             <ShadowContainer childern={
               <View style={styles.margin8}>
               <RadiusContainer radius={12} children={
               <View style={styles.container}>
                <View style={styles.iconContainer}>
                <AppIcon size={30} color={AppColors.primaryColor} icon={icon} />
                </View>
                <Caption2 text={title} />
               </View>
             }/>
             </View>
             } />
           
  )
}

export default AmenitiesCard

const styles = StyleSheet.create({
    margin8:{marginRight: 18},
    container: {gap: 15, paddingHorizontal:10, paddingVertical:10,alignItems:'center', width: windowWidth*.18, height: windowHeight*.12},
    iconContainer: {backgroundColor:AppColors.surfaceColor, borderRadius:20, padding: 10, }
})