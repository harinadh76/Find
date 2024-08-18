import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const index = () => {
    const [token, setToken] = useState('');
    useEffect(() => {
        AsyncStorage.getItem('cookToken').then((cookToken) => {
            if (cookToken) {
                setToken(cookToken);
                router.push('/Cook/home');
            }
        });
    })
    return (
        <View>
            <Text>index</Text>
            <Link href='/Cook/Login'>Login</Link>
            <Link href='/Cook/Register'>Register</Link>
        </View>
    )
}

export default index