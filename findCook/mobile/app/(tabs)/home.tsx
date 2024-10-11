import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LogOut from '@/components/LogOut'
import CustomHeader from '@/components/Cards/CustomHeader'
import Cook from '@/components/Cards/Cook'
import { cookData } from '@/constants/CookData'
import * as Location from 'expo-location';


const home = () => {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [city, setCity] = useState<string | null>(null);

    const [errorMsg, setErrorMsg] = useState('');
    // get coordinates from user - get current location...
    const getLocation = async () => {
        // Request permission to access location
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        // Get the current location
        let location = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        });

        let reverseGeocode = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });
        if (reverseGeocode.length > 0) {
            setCity(reverseGeocode[0]?.city); // Can also extract country, region, etc.
        }
        console.log(reverseGeocode[0]);
    };

    useEffect(() => {
        getLocation(); // Automatically fetch location on component mount
    }, []);
    // getLocation()
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader />
            {/* <Cook /> */}
            <LogOut />
            <View style={{ flex: 1 }} >
                <FlatList
                    data={cookData}
                    renderItem={({ item }) => (
                        <View style={{ margin: 10, backgroundColor: '#FAEBD7' }}>
                            <Cook {...item} />
                        </View>
                    )}
                    keyExtractor={item => item.email}
                />
                <Text> {location?.latitude} {location?.longitude} </Text>
                <Text> {city} </Text>
                <LogOut />
            </View>
        </View>
    )
}

export default home

const styles = StyleSheet.create({})