import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import IonIcons from 'react-native-vector-icons/Ionicons';
import { AppColors } from '../theme/colors';
import { BodyColor, Caption1, Caption1Color, Title1, Title1Bold, Title1BoldColor, Title1Color, Title3Color, Title3ColorBold } from '../components/text';
import Spacer from '../components/spacer';
import ItemHeader from '../components/itemHeader';
import { useNavigation } from '@react-navigation/native';
import { Root } from '../../App';
import AmenitiesCard from '../components/amenitiesCard';
import AppButton from '../components/appButton';
import AppIcon, { IconProvider } from '../components/appIcon';
import ShadowContainer from '../components/shadowContainer';
import RadiusContainer from '../components/radiusContainer';
import { routes } from '../navigation/routes';

export interface AmenitiesData {
    name: string,
    icon: string,
    iconProvider: IconProvider
}

const DetailScreen = () => {
    const navigation = useNavigation<Root>()
    const amenitiesList: AmenitiesData[] = [
        {
            name: 'Cafe',
            icon: 'fast-food-outline',
            iconProvider: IconProvider.ionIcons
        },
        {
            name: 'Water',
            icon: 'glass-whiskey',
            iconProvider: IconProvider.fontAwesome5
        },
        {
            name: 'Parking',
            icon: 'car-outline',
            iconProvider: IconProvider.ionIcons
        },
        {
            name: 'Restroom',
            icon: 'restroom',
            iconProvider: IconProvider.fontAwesome5
        },
        {
            name: 'Seating',
            icon: 'chair',
            iconProvider: IconProvider.materialIcons
        },
        {
            name: 'Changing room',
            icon: 'meeting-room',
            iconProvider: IconProvider.materialIcons
        },
        {
            name: 'Lighting',
            icon: 'light',
            iconProvider: IconProvider.materialIcons
        }
    ]

    return (
        <View style={styles.flex1}>
            <View style={styles.flex1}>
                {/* Header */}
                <Image source={require('../assets/box_cricket.jpeg')} style={styles.imageContainer} />
                <TouchableOpacity style={styles.backcontainer} onPress={() => navigation.goBack()}>
                    <AppIcon icon='arrow-back' iconProvider={IconProvider.ionIcons} color={AppColors.primaryColor} size={25} />
                </TouchableOpacity>

                {/* Content */}
                <ScrollView style={styles.scrollContainer} bounces={false}>

                    <View style={styles.additionalInfoRow}>
                        <RadiusContainer radius={16} children={
                            <View style={styles.additionalInfoContainer}>
                                <AppIcon icon='fire' iconProvider={IconProvider.fontAwesome5} size={12} color={AppColors.primaryColor} />
                                <Caption1 text='Popular' />

                            </View>
                        } />
                        <RadiusContainer radius={16} children={
                            <View style={styles.additionalInfoContainer}>
                                <AppIcon icon='star' iconProvider={IconProvider.ionIcons} size={12} color={AppColors.primaryColor} />
                                <Caption1 text='4.5' />

                            </View>
                        } />
                    </View>
                    <Spacer height={10} />
                    <Title1Bold text='Box & Bounce' />
                    <Spacer height={5} />
                    <View style={styles.locationContainer}>
                        <AppIcon icon='map-marker' iconProvider={IconProvider.fontAwesome5} color={AppColors.primaryColor} size={14} />
                        <Caption1Color text='150ft ring road' />
                    </View>
                    <Spacer height={20} />
                    <Caption1 text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                    <Spacer height={30} />
                    <ItemHeader title='Amenities' />
                    <Spacer height={20} />
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrollMargin} contentContainerStyle={styles.scrollPadding}>
                        {amenitiesList.map((item, index) => {
                            return <AmenitiesCard key={index} icon={item.icon} iconProvider={item.iconProvider} name={item.name} />
                        })}
                    </ScrollView>
                </ScrollView>
            </View>
            {/* Bottom Bar */}
            <View style={styles.bottomBarContainer}>
                <View style={styles.bottomBarStyle}>
                    <View style={styles.rateStyle}>
                        <Title1BoldColor text={`\u20b9750`} color='white' />
                        <BodyColor text='/hr' color='white' />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(routes.BOOKING)} >
                        <View style={styles.bookBtn}>
                            <Title3Color text='Book now' color={AppColors.primaryColor} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    scrollContainer: { flex: 1, padding: 15 },
    imageContainer: { width: '100%', height: 300, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 },
    backcontainer: { position: 'absolute', top: 56, left: 10, backgroundColor: 'white', borderRadius: 40, padding: 12 },
    margin8: { marginRight: 8 },
    scrollMargin: { marginHorizontal: -10, },
    scrollPadding: { paddingHorizontal: 10 },
    flex1: { flex: 1 },
    additionalInfoRow: { flexDirection: 'row', gap: 20, justifyContent: 'flex-end' },
    additionalInfoContainer: { flexDirection: 'row', gap: 8, padding: 5 },
    locationContainer: {
        flexDirection: 'row',
        gap: 5
    },
    buttomMargin: { marginHorizontal: 10, marginVertical: 20 },
    bottomBarContainer: { backgroundColor: AppColors.primaryColor, borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40 },
    bottomBarStyle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    rateStyle: { flexDirection: 'row', alignItems: 'baseline', gap: 1 },
    bookBtn: { borderRadius: 25, backgroundColor: 'white', paddingHorizontal: 50, paddingVertical: 10, alignItems: 'center', justifyContent: 'center' }
})