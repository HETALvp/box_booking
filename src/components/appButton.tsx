import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { AppColors } from '../theme/colors'
import { Title3ColorBold } from './text'

interface Props {
    text:string,
    style: StyleProp<ViewStyle>
}

const AppButton = ({text, style}:Props) => {
  return (
    <View style={[styles.container, style]}> 
    <Title3ColorBold text={text} color='white' />
</View>
  )
}

export default AppButton

const styles = StyleSheet.create({
    container:{backgroundColor:AppColors.primaryColor, borderRadius: 15, height:56, alignItems:'center', justifyContent:'center'}
})