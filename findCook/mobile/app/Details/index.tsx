import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CookDetails from '@/components/Cards/CookDetails'
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';


const index = () => {
    const params = useLocalSearchParams();
    console.log(params);
    console.log(params.email);

    return (
        <View>
            <Text> Cook Details card</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})