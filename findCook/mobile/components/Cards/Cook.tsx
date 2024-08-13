import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { cookData } from '@/constants/CookData'


const Cook = (singleCook) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
        </View>
    )
}

export default Cook

const styles = StyleSheet.create({})