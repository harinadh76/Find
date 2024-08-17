import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
// import CookDetails from '@/components/Cards/CookDetails'
// import { router, useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { API_URL } from '@/environments';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Error from '@/components/Cards/Error';
import NoData from '@/components/Cards/NoData';
import { cookData } from '@/constants/CookData';


const index = () => {
    const [token, setToken] = useState('');
    const [cook, setCook] = useState<any>({});
    const params = useLocalSearchParams();

    useEffect(() => {
        setCook({
            ...cook,
            ...cookData[0]
        })
        // console.log('cook', cookData[0]);
        // console.log('____', cook);
        AsyncStorage.getItem('token').then((token) => {
            if (!token) {
                <Error />
            }
            if (token) {
                setToken(token);
                axios.get(API_URL + '/cook', {
                    params: {
                        email: params.email
                    },
                    headers: {
                        Authorization: token
                    }
                }).then((res) => {
                    if (res.data) {
                        // setCook(res.data);
                    }
                }).catch((err) => console.log(err));
            }
        });
    }, [])

    useEffect(() => {
        console.log('cook', cook);
    }, [cook])

    return (
        <View>
            {/* {!Object.values(cook).length ? <NoData /> : <Text> Cook Details card</Text>} */}
            <Image source={require('@/assets/images/react-logo.png')} />
            <Text>{cook.name}</Text>
            <Text>{cook.phone}</Text>
            <Text>{cook.email}</Text>
            <Text>{cook.address}</Text>
            <Text>{cook.city}</Text>
            <Text>{cook.state}</Text>
            <Text>{cook.type}</Text>
            <Text>{cook.pricePerMonth}</Text>
            <Text>{cook.pricePerService}</Text>
            <Text>{cook.cookRating / cook.cookRatingCount}</Text>
            <Text>{cook.description}</Text>

            <Button title='show number' />
            <Button title='chat' />
            <Button title='hire' />
        </View>
    )
}

export default index

const styles = StyleSheet.create({})