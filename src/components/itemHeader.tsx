import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Callout800, CalloutColor, Caption1Color } from './text'

interface Props {
    title: string,
    suffixText? : string,
    onPress?: ()=>void
}

const ItemHeader = ({title,suffixText,onPress}:Props) => {
  return (
    <View style={styles.container}>
          <Callout800 text={title} />
          {!!suffixText && <TouchableOpacity onPress={onPress}>
          <Caption1Color text={suffixText} />
          </TouchableOpacity>}
          
          </View>
  )
}

export default ItemHeader

const styles = StyleSheet.create({
    container:{flexDirection:'row', justifyContent:'space-between'}
})