import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import IonIcons from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../theme/colors';
import { Caption1, Title1, Title3ColorBold } from '../components/text';
import Spacer from '../components/spacer';
import ItemHeader from '../components/itemHeader';
import { useNavigation } from '@react-navigation/native';
import { Root } from '../../App';
import AmenitiesCard from '../components/amenitiesCard';
import AppButton from '../components/appButton';

interface AmenitiesData {
    name: string,
    icon: string
}

const DetailScreen = () => {
    const navigation = useNavigation<Root>()
    const amenitiesList: AmenitiesData[] = [
        {
            name: 'Cafe',
            icon: 'fast-food-outline'
        },
        {
            name: 'Water',
            icon: 'glass-whiskey'
        },
        {
            name: 'Parking',
            icon: 'car-outline'
        },
        {
            name:'Restroom',
            icon:'restroom'
        },
        {
            name: 'Seating',
            icon:'chair'
        },
        {
            name:'Changing room',
            icon:'meeting-room'
        },
        {
            name:'Lighting',
            icon:'light'
        }
    ]
  return (
    <View style={styles.flex1} >
        <SafeAreaView style={styles.flex1}>
           
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.flex1} bounces={false}>
         <Image source={require('../assets/box_cricket.jpeg')} style={styles.imageContainer} />
         <TouchableOpacity style={styles.backcontainer} onPress={() => navigation.goBack()}>
         <IonIcons name='arrow-back' style={{margin:8}} size={25} color={AppColors.primaryColor}/>
         </TouchableOpacity>
        <Spacer height={15} />
        <View style={{marginLeft:8}}>
        <Title3ColorBold text={`\u20b91200`} />
        </View>
        <Spacer height={10} />
         <Title1 text='Box & Bounce' />
         <Spacer height={5} />
         <Caption1 text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
         <Spacer height={30} />
         <ItemHeader title='Amenities' />
         <Spacer height={20} />
         <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrollMargin} contentContainerStyle={styles.scrollPadding}>
         {amenitiesList.map((item, index)=>{
            return  <AmenitiesCard key={index} title={item.name} icon={item.icon} />
        })}
         </ScrollView>
         
        
    </ScrollView>
   
    </SafeAreaView>
    <AppButton text='Book' style={{marginHorizontal:10, marginVertical:20}} />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    scrollContainer:{marginHorizontal: 10, marginTop:10},
    imageContainer:{borderRadius: 20, width:'100%', height:400},
    backcontainer: {position: 'absolute', top:10, left:10, backgroundColor:'white', borderRadius: 40, padding:6},
    margin8:{marginRight: 8},
    scrollMargin: {marginHorizontal: -10},
    scrollPadding: {paddingHorizontal: 10},
    flex1:{flex:1}
})