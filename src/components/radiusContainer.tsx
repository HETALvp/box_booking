import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { AppColors } from '../theme/colors';


interface Props {
  children?: ReactNode;
  radius: number,
  backgroundColor?: string,
  style?: StyleProp<ViewStyle>
}

const RadiusContainer = ({ children, radius, style }: Props) => {
  return (
    <View style={[styles.container, { borderRadius: radius, backgroundColor: 'white', }, style]}>
      {children}
    </View>
  )
}

export default RadiusContainer

const styles = StyleSheet.create({
  container: { paddingHorizontal: 8, paddingVertical: 5 },

})