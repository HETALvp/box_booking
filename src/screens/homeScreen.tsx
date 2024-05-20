import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppColors } from '../theme/colors'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import RadiusContainer from '../components/radiusContainer';
import IonIcons from 'react-native-vector-icons/Ionicons';

import Card from '../components/card';
import { BodyColor, Callout800, Caption1Color, Caption2Color, Title1, Title3, Title3Color } from '../components/text';
import ItemHeader from '../components/itemHeader';
import Spacer from '../components/spacer';
import ShadowContainer from '../components/shadowContainer';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../navigation/routes';
import { Root } from '../../App';


const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>()
  const navigation = useNavigation<Root>()
  const categoryList = ['Cricket', 'Pickle ball', 'Basket ball', 'Volley ball', 'Football', 'Lawn tennis', 'Table tennis']

  
  return (
    <SafeAreaView>
      {/* main Container */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
         {/* intro section */}
         <View style={styles.introContainer}>
        <View style={styles.gap8}>
      <Title3Color  text='Welcome Ishaan'/>
      <View style={styles.locationContainer}>
      <FontAwesomeIcons name="map-marker" color={AppColors.primaryColor} size={14}/>
      <Caption1Color text='Rajkot' />
      </View>
      </View>
      <RadiusContainer radius={10} children={
        <IonIcons name='notifications' size={30} color={AppColors.primaryColor}/>
      } />
      </View>
      
       {/* dialogue section */}
       <Spacer height={30} />
        <Title1 text='Find the best place to play a match . . .' />
       
        {/*search section */}
        <Spacer height={20} />
        <ShadowContainer childern={
          <RadiusContainer radius={10} children={
            <View style={styles.searchContainer}>
            <View style={styles.searchContainerCol}>
              <IonIcons name='search-outline' size={20} color={AppColors.primaryColor}/>
              <TextInput placeholder='Search....' placeholderTextColor={AppColors.primaryColor} value={searchText}  onChangeText={(text)=>{
                setSearchText(text)
              }}/>
            </View>
            <IonIcons name='filter-outline' size={20} color={AppColors.primaryColor}/>
          </View>
          } />
        } />

         {/*categories section */}
         <ItemHeader title='Categories' marginTop={30} marginBottom={10}/>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollMargin} contentContainerStyle={styles.scrollPadding}>
          {categoryList.map((item,index)=>{
            return <TouchableOpacity key={index}>
             <ShadowContainer childern={
               <View style={styles.margin8}>
               <RadiusContainer radius={12} children={
               <BodyColor text={item} />
             }/>
             </View>
             } />
            </TouchableOpacity>
          })}
         </ScrollView>

          {/*popular section */}
          <ItemHeader title='Popular' suffixText='View all' marginTop={30} marginBottom={10}/>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollMargin} contentContainerStyle={styles.scrollPadding}>
         <Card onPress={()=> navigation.navigate(routes.DETAILS)}/>
         <Card onPress={()=> navigation.navigate(routes.DETAILS)}/>
         <Card onPress={()=> navigation.navigate(routes.DETAILS)}/>
         </ScrollView>

          {/*Near by section */}
          <ItemHeader title='Near by' suffixText='View all' marginTop={30} marginBottom={10}/>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollMargin} contentContainerStyle={styles.scrollPadding}>
           <Card onPress={()=> navigation.navigate(routes.DETAILS)}/>
           <Card onPress={()=> navigation.navigate(routes.DETAILS)}/>
           <Card onPress={()=> navigation.navigate(routes.DETAILS)}/>
           
         </ScrollView>
         <Spacer height={30} />
         <Spacer height={30} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  scrollContainer:{marginHorizontal: 10, marginTop:10},
  scrollMargin: {marginHorizontal: -10},
  scrollPadding: {paddingHorizontal: 10},
  searchContainer:{flexDirection:'row', justifyContent:'space-between', marginHorizontal:8,marginVertical: 10 },
  locationContainer:{
    flexDirection: 'row',
    gap: 5
  },
  introContainer:{flexDirection: 'row', justifyContent:'space-between'},
  gap8:{gap:2},
  searchContainerCol:{flexDirection: 'row', gap: 8,},
  margin8:{marginRight: 8}
})