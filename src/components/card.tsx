import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColors, windowHeight, windowWidth } from '../theme/colors'
import RadiusContainer from './radiusContainer'
import IonIcons from 'react-native-vector-icons/Ionicons';
import ShadowContainer from './shadowContainer';
import { Caption1BoldColor } from './text';

interface Props {
  image?: string,
  title?: string,
  description?: string,
  price?: number,
  onPress: () => void
}

const Card = ({ onPress, }: Props) => {
  return (
    <ShadowContainer childern={
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image source={require('../assets/box_cricket.jpeg')} style={styles.imageContainer} />
          <View style={styles.rateContainer}>
            <RadiusContainer radius={12} children={
              <View style={styles.rateStyle}>
                <IonIcons name='star' size={12} color={AppColors.primaryColor} />
                <Caption1BoldColor text='4.5' color={AppColors.primaryColor} />
              </View>
            } />
          </View>
          <View style={styles.bottomContainer}>
            <RadiusContainer radius={12} children={
              <View style={styles.textContainer}>

                <View>
                  <Text style={styles.titleStyle}>Box & Bounce</Text>
                  <Text style={styles.subtitleStyle}>New 150ft Ring road</Text>
                </View>
                <Text style={styles.fareStyle}>{'\u20b9'}1200</Text>
              </View>
            } />
          </View>
        </View>
      </TouchableOpacity>
    } />
  )
}

export default Card

const styles = StyleSheet.create({
  container: { marginRight: 15, width: windowWidth * 0.65, height: windowHeight * 0.25 },
  imageContainer: { borderRadius: 20, width: '100%', height: '100%' },
  rateContainer: { position: 'absolute', top: 10, left: 10 },
  rateStyle: { flexDirection: 'row', gap: 3 },
  bottomContainer: { position: 'absolute', bottom: 0, left: 0 },
  textContainer: { flexDirection: 'row', gap: 3, paddingVertical: 8, justifyContent: 'space-between', alignItems: 'center', width: '100%' },
  titleStyle: { fontSize: 14, fontWeight: '700' },
  subtitleStyle: { fontSize: 12, fontWeight: '300' },
  fareStyle: { fontSize: 14, fontWeight: '700' }
})