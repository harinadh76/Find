import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const LogOut = (props: any) => {
    const handleLogOut = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('cookToken')
        if (props) {
            router.push(props);
        } else {
            router.push('/');
        }
    }
    return (
        <View>
            <Button onPress={handleLogOut} title='LogOut' color='red' />
        </View>
    )
}

export default LogOut