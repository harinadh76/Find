import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View>
            <Text>index</Text>
            <Link href='/Cook/Login'>Login</Link>
            <Link href='/Cook/Register'>Register</Link>
        </View>
    )
}

export default index