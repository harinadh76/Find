import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from '../../environments';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const profile = () => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        AsyncStorage.getItem('token').then((token) => {
            if (!token) {
                router.push('/');
            }
            if (token) {
                axios.get(API_URL + '/auth/profile', {
                    headers: {
                        Authorization: token
                    }
                }).then((res) => {
                    console.log(res.data);
                    setProfile(res.data.user);
                }).catch((err) => {
                    console.log(err);
                });
            }
        });
    }, []);
    return (
        <View>
            <Text>profile</Text>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({})