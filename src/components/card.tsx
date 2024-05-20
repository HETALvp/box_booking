import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColors, windowHeight, windowWidth } from '../theme/colors'
import RadiusContainer from './radiusContainer'
import IonIcons from 'react-native-vector-icons/Ionicons';
import ShadowContainer from './shadowContainer';

interface Props {
    image?:string,
    title?: string,
    description?:string,
    price?: number,
    onPress: () => void
}

const Card = ({onPress, }:Props) => {
  return (
    <ShadowContainer childern={
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
    <Image source={require('../assets/box_cricket.jpeg')} style={styles.imageContainer} />
    <View style={{position: 'absolute', top:10, left:10}}>
    <RadiusContainer radius={12}  children={
                <View style={{flexDirection:'row', gap:3}}>
                  <IonIcons name='star' size={12} color={AppColors.primaryColor} />
              <Text style={{color:AppColors.primaryColor,fontSize:12, fontWeight:'500' }}>4.5</Text>
              </View>
            }/>
    </View>
    <View style={{position: 'absolute', bottom:0, left:0}}>
    <RadiusContainer radius={12}  children={
                <View style={{flexDirection:'row', gap:3, paddingVertical: 8, justifyContent:'space-between', alignItems:'center', width: '100%'}}>
                  
             <View>
             <Text style={{fontSize:14, fontWeight:'700' }}>Box & Bounce</Text>
             <Text style={{fontSize:12, fontWeight: '300'}}>New 150ft Ring road</Text>
             </View>
              <Text style={{fontSize:14, fontWeight:'700'}}>{'\u20b9'}1200</Text>
              </View>
            }/>
    </View>
  </View>
  </TouchableOpacity>
    } />
  )
}

export default Card

const styles = StyleSheet.create({
    container:{marginRight: 15, width:windowWidth*0.65, height: windowHeight * 0.25},
    imageContainer:{borderRadius: 20, width:'100%', height: '100%'}
})