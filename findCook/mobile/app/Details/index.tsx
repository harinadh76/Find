import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import CookDetails from '@/components/Cards/CookDetails'
// import { router, useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { API_URL } from '@/environments';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Error from '@/components/Cards/Error';
import NoData from '@/components/Cards/NoData';


const index = () => {
    const [token, setToken] = useState('');
    const [cook, setCook] = useState({});
    const params = useLocalSearchParams();

    useEffect(() => {
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
                        setCook(res.data);
                    }
                }).catch((err) => console.log(err));
            }
        });
    }, [])

    return (
        <View>
            {/* {!Object.values(cook).length ? <NoData /> : <Text> Cook Details card</Text>} */}

            <Text> Cook Details card</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})