import { StyleSheet, Text, View, Image, Button, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '@/environments'
import axios from 'axios'
import LogOut from '@/components/LogOut'
import { ICook } from '@/constants/Enums'
import DropDownPicker from 'react-native-dropdown-picker'

const profile = () => {
    const [cookData, setCookData] = useState<ICook>()
    const [showProfile, setShowProfile] = useState(false)

    // UseState for form 
    const [typeOpen, setTypeOpen] = useState(false);
    const [typeValue, setTypeValue] = useState(cookData?.type);
    const [typeItems, setTypeItems] = useState([
        { label: 'Chef', value: 'chef' },
        { label: 'Home Cook', value: 'homeCook' },
        { label: 'Specialist', value: 'specialist' },
    ]);

    const [statusOpen, setStatusOpen] = useState(false);
    const [statusValue, setStatusValue] = useState(cookData?.status);
    const [statusItems, setStatusItems] = useState([
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
    ]);
    //

    const handleChange = (field: any, value: any) => {
        setCookData((prevState: any) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        h
    }

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
        <View style={{ flex: 1 }}>
            <View style={styles.imageDiv}>
                <Image source={require('@/assets/images/react-logo.png')} />
                <Text>Welcome {cookData?.name}</Text>
                <Text>Your Rating {cookData?.cookRating ?? 0 / (cookData?.cookRatingCount ?? 1)}</Text>
                <Text>Your Status</Text>
                <Button title='Update Profile' color='red' onPress={() => setShowProfile(!showProfile)} />
            </View>
            {showProfile &&
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.label}>Name:</Text>
                        <TextInput
                            style={styles.input}
                            value={cookData?.name}
                            onChangeText={(value) => handleChange('name', value)}
                            placeholder="Enter name"
                        />

                        <Text style={styles.label}>Email:</Text>
                        <TextInput
                            style={styles.input}
                            value={cookData?.email}
                            onChangeText={(value) => handleChange('email', value)}
                            placeholder="Enter email"
                            keyboardType="email-address"
                        />

                        <Text style={styles.label}>Password:</Text>
                        <TextInput
                            style={styles.input}
                            value={cookData?.password}
                            onChangeText={(value) => handleChange('password', value)}
                            placeholder="Enter password"
                            secureTextEntry={true}
                        />

                        <Text style={styles.label}>Phone:</Text>
                        <TextInput
                            style={styles.input}
                            value={cookData?.phone}
                            onChangeText={(value) => handleChange('phone', value)}
                            placeholder="Enter phone number"
                            keyboardType="phone-pad"
                        />

                        <Text style={styles.label}>Address:</Text>
                        <TextInput
                            style={styles.input}
                            value={cookData?.address}
                            onChangeText={(value) => handleChange('address', value)}
                            placeholder="Enter address"
                        />

                        <Text style={styles.label}>City:</Text>
                        <TextInput
                            style={styles.input}
                            value={cookData?.city}
                            onChangeText={(value) => handleChange('city', value)}
                            placeholder="Enter city"
                        />

                        <Text style={styles.label}>Description:</Text>
                        <TextInput
                            style={styles.input}
                            value={cookData?.description}
                            onChangeText={(value) => handleChange('description', value)}
                            placeholder="Enter description"
                            multiline={true}
                        />

                        <Text style={styles.label}>Cook Rating:</Text>
                        <TextInput
                            style={styles.input}
                            value={String(cookData?.cookRating)}
                            onChangeText={(value) => handleChange('cookRating', parseFloat(value))}
                            placeholder="Enter cook rating"
                            keyboardType="numeric"
                        />

                        <Text style={styles.label}>Cook Rating Count:</Text>
                        <TextInput
                            style={styles.input}
                            value={String(cookData?.cookRatingCount)}
                            onChangeText={(value) => handleChange('cookRatingCount', parseInt(value))}
                            placeholder="Enter rating count"
                            keyboardType="numeric"
                        />

                        <Text style={styles.label}>Type:</Text>
                        <DropDownPicker
                            open={typeOpen}
                            value={typeValue}
                            items={typeItems}
                            setOpen={setTypeOpen}
                            setValue={(value) => {
                                setTypeValue(value);
                                handleChange('type', value);
                            }}
                            setItems={setTypeItems}
                            style={styles.dropdown}
                            placeholder="Select type"
                        />

                        <Text style={styles.label}>Experience (years):</Text>
                        <TextInput
                            style={styles.input}
                            value={String(cookData?.experience)}
                            onChangeText={(value) => handleChange('experience', parseInt(value))}
                            placeholder="Enter years of experience"
                            keyboardType="numeric"
                        />

                        <Text style={styles.label}>Price Per Month ($):</Text>
                        <TextInput
                            style={styles.input}
                            value={String(cookData?.pricePerMonth)}
                            onChangeText={(value) => handleChange('pricePerMonth', parseFloat(value))}
                            placeholder="Enter price per month"
                            keyboardType="numeric"
                        />

                        <Text style={styles.label}>Price Per Serving ($):</Text>
                        <TextInput
                            style={styles.input}
                            value={String(cookData?.pricePerServing)}
                            onChangeText={(value) => handleChange('pricePerServing', parseFloat(value))}
                            placeholder="Enter price per serving"
                            keyboardType="numeric"
                        />

                        <Text style={styles.label}>Status:</Text>
                        <DropDownPicker
                            open={statusOpen}
                            value={statusValue}
                            items={statusItems}
                            setOpen={setStatusOpen}
                            setValue={(value) => {
                                setStatusValue(value);
                                handleChange('status', value);
                            }}
                            setItems={setStatusItems}
                            style={styles.dropdown}
                            placeholder="Select status"
                        />

                        <Button title="Update Profile" onPress={handleSubmit} color="#4CAF50" />
                    </View>
                </ScrollView>
            }
            <Text>Past Hirings</Text>

            <LogOut />
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    // },
    image: {
        width: 100,
        height: 100,
    },
    imageDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    form: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    dropdown: {
        height: 40,
        marginBottom: 20,
    }
})