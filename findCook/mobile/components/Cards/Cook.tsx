import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { cookData } from '@/constants/CookData'
import { router } from 'expo-router'


const Cook = (singleCook: any) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => router.push(`/Details?email=${singleCook.email}`)}>
            <View>
                <Image source={require('@/assets/images/react-logo.png')} style={{ width: 40, height: 40 }} />
                <Text>{singleCook.cookRating / singleCook.cookRatingCount}</Text>
            </View>
            <View style={{ marginLeft: 10, alignItems: 'center' }}>
                <Text>{singleCook.name} Jalak</Text>
                <Text>{singleCook.city}</Text>
                <Text>{singleCook.type}</Text>
                <Text>{singleCook.pricePerMonth}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Cook

const styles = StyleSheet.create({})