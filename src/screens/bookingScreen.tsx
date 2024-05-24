import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Root } from '../../App'
import AppIcon, { IconProvider } from '../components/appIcon'
import { AppColors } from '../theme/colors'
import { CalloutColor, CalloutColor800, Caption1Color, Caption2Color, Title1Bold, Title1BoldColor } from '../components/text'
import { HP, WP, mobileWidth } from '../utils/responsive'
import Spacer from '../components/spacer'
import RadiusContainer from '../components/radiusContainer'
import DatePicker from 'react-native-date-picker'

const dateList = [
  'Today', 'Tomorrow', 'Pick'
]

const timeList = [
  { title: 'Morning', time: '7:00am-12:00pm' }, { title: 'Afternoon', time: '12:00pm-6:00pm' }, { title: 'Night', time: '6:00pm-01:00am' }
]

const legendsList = [
  {
    title: 'Selected',
    color: AppColors.green
  },
  {
    title: 'Booked',
    color: AppColors.grey
  },
  {
    title: 'Available',
    color: AppColors.textColor
  },
]



const BookingScreen = () => {
  const navigation = useNavigation<Root>()

  const [selectedDateContainer, setSelectedDateContainer] = useState<number>()
  const [selectedTimeContainer, setSelectedTimeContainer] = useState<number>()

  const [date, setDate] = useState<Date>()
  const [open, setOpen] = useState(false)


  return (
    <SafeAreaView>
      <View style={styles.containerPadding}>

        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backcontainer} onPress={() => navigation.goBack()}>
            <AppIcon icon='arrow-back' iconProvider={IconProvider.ionIcons} color={AppColors.primaryColor} size={25} />
          </TouchableOpacity>
          <View style={styles.headingStyle}>
            <Title1BoldColor text='Schedule' color={AppColors.primaryColor} />
          </View>
        </View>

        <ScrollView>
          <Spacer height={20} />
          <View style={styles.sliderContainerBase}>
            <View style={styles.sliderValueContainer} />
          </View>

          <Spacer height={30} />
          <View style={styles.timeRow}>
            {dateList.map((item, index) => {
              const containerColor = selectedDateContainer === index ? AppColors.primaryColor : 'white'
              const textColor = selectedDateContainer === index ? 'white' : AppColors.primaryColor
              const text = index === 2 ? <View style={{ alignItems: 'center' }}><View style={{ flexDirection: 'row', gap: 8 }}>
                <AppIcon icon='calendar' iconProvider={IconProvider.antDesign} size={16} color={textColor} />
                <CalloutColor800 text={item} color={textColor} />
              </View>
                {!!date && <Caption2Color text={date!.toDateString()} color={textColor} />}
              </View> : <CalloutColor800 text={item} color={textColor} />

              return <TouchableOpacity style={[styles.flex1]} onPress={() => {
                setSelectedDateContainer(index)
                if (index == 2) {
                  index === 2 && setOpen(true)
                } else {
                  setDate(undefined)
                }


              }}>
                <RadiusContainer radius={WP(2)} style={[styles.flex1, { backgroundColor: containerColor }]}  >
                  <View style={[styles.timeContainer]}>
                    {text}
                  </View>
                </RadiusContainer>
              </TouchableOpacity>
            })}
          </View>

          <Spacer height={30} />
          <View style={styles.timeRow}>
            {timeList.map((item, index) => {
              const containerColor = selectedTimeContainer === index ? AppColors.primaryColor : 'white'
              const textColor = selectedTimeContainer === index ? 'white' : AppColors.primaryColor
              return <TouchableOpacity style={[styles.flex1]} onPress={() => setSelectedTimeContainer(index)}>
                <RadiusContainer radius={WP(2)} style={[styles.flex1, { backgroundColor: containerColor }]}  >
                  <View style={[styles.timeContainer,]}>
                    <CalloutColor800 text={item.title} color={textColor} />
                    <Caption2Color text={item.time} color={textColor} />
                  </View>
                </RadiusContainer>
              </TouchableOpacity>
            })}
          </View>
          <Spacer height={20} />


          <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center' }} >
            {legendsList.map((item, index) => {
              return <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <View style={{ borderRadius: 10, padding: 8, backgroundColor: index === 2 ? 'white' : item.color, borderColor: item.color, borderWidth: 1 }} />
                <Caption1Color text={item.title} color={item.color} />
              </View>
            })}
          </View>



          <DatePicker
            modal
            open={open}
            mode='date'
            date={new Date()}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  containerPadding: { paddingHorizontal: 15 },
  headingStyle: { alignSelf: 'center', flex: 1, marginRight: 49 },
  headerContainer: { flexDirection: 'row', alignItems: 'center', },
  backcontainer: { backgroundColor: 'white', borderRadius: 40, padding: 12 },
  sliderContainerBase: {
    borderColor: AppColors.grey,
    borderRadius: 20,
    width: mobileWidth - 30,
    height: HP(0.9),
    backgroundColor: AppColors.grey
  },
  sliderValueContainer: {
    borderRadius: 20,
    width: mobileWidth / 3,
    height: HP(0.9),
    backgroundColor: AppColors.primaryColor
  },
  flex1: { flex: 1 },
  timeRow: { flexDirection: 'row', flex: 1, gap: 10, },
  timeContainer: { height: HP(6), alignItems: 'center', justifyContent: 'center', flex: 1 },
  calendarPickerStyle: { flexDirection: 'row', gap: 8 }
})