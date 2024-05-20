import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

interface Props {
    childern: ReactNode
}

const ShadowContainer = ({childern}:Props) => {
  return (
    <View style={styles.shadowStyle}>
        {childern}
    </View>
  )
}

export default ShadowContainer

const styles = StyleSheet.create({
    shadowStyle:{ shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10,}
})