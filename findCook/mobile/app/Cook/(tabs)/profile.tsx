import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '@/environments'
import axios from 'axios'
import LogOut from '@/components/LogOut'
import { ICook } from '@/constants/Enums'

const profile = () => {
    const [cookData, setCookData] = useState<ICook>()
    const [showProfile, setShowProfile] = useState(false)
    useEffect(() => {
        AsyncStorage.getItem('cookToken').then((token) => {
            if (token) {
                axios.get(API_URL + '/cook/profile', {
                    headers: {
                        Authorization: `${token}`
                    }
                }).then((res) => {
                    if (res.status !== 200) {

                    }
                    setCookData(res.data)
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err)
                })
            }
        })
    }, [])

    return (
        <View>
            <View style={styles.imageDiv}>
                <Image source={require('@/assets/images/react-logo.png')} />
                <Text>Welcome {cookData?.name}</Text>
                <Text>Your Rating {cookData?.cookRating ?? 0 / (cookData?.cookRatingCount ?? 1)}</Text>
                <Button title='Update Profile' color='red' onPress={() => setShowProfile(!showProfile)} />
            </View>
            {showProfile && <View>
                <Text>Update Profile</Text>

            </View>}
            <LogOut />
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: 100,
        height: 100,
    },
    imageDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})