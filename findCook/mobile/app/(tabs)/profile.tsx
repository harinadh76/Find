import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from '../../environments';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';


const profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        gender: '',
    });
    const [token, setToken] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(profile.gender);
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ]);

    const handleChange = (name, value) => {
        setProfile({
            ...profile,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(profile);
        axios.post(API_URL + '/auth/update', profile, { headers: { Authorization: token } }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        AsyncStorage.getItem('token').then((token) => {
            if (!token) {
                router.push('/');
            }
            if (token) {
                setToken(token);
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
        <View style={styles.container}>
            <Text>Welcome {profile.name}</Text>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={profile.name}
                onChangeText={(value) => handleChange('name', value)}
                placeholder="Enter your name"
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={profile.email}
                onChangeText={(value) => handleChange('email', value)}
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Text style={styles.label}>Phone:</Text>
            <TextInput
                style={styles.input}
                value={profile.phone}
                onChangeText={(value) => handleChange('phone', value)}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
            />

            <Text style={styles.label}>Address:</Text>
            <TextInput
                style={styles.input}
                value={profile.address}
                onChangeText={(value) => handleChange('address', value)}
                placeholder="Enter your address"
            />
            <Text style={styles.label}>City:</Text>
            <TextInput
                style={styles.input}
                value={profile.city}
                onChangeText={(value) => handleChange('city', value)}
                placeholder="Enter City"
            />

            <Text style={styles.label}>Gender:</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={(selectedValue) => {
                    setValue(selectedValue);
                    handleChange('gender', selectedValue);
                }}
                setItems={setItems}
                style={styles.dropdown}
                placeholder="Select your gender"
            />

            <Button title="Update Profile" onPress={handleSubmit} color="#4CAF50" />
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        margin: 20,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 20,
    },
    dropdown: {
        height: 40,
        marginBottom: 20,
    },
});