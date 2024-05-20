import { StyleSheet, Text, View } from 'react-native'
import React, {ReactNode } from 'react'
import { AppColors } from '../theme/colors';


interface Props {
    children: ReactNode;
    radius: number,
    backgroundColor?: string,
  }

const RadiusContainer = ({children, radius, backgroundColor}:Props) => {
  return (
    <View style={[styles.container, {borderRadius: radius, backgroundColor: backgroundColor ??'white'}]}>
    {children}
    </View>
  )
}

export default RadiusContainer

const styles = StyleSheet.create({
    container: {paddingHorizontal: 8, paddingVertical: 5},
    
})