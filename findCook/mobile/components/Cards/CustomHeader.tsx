import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My App</Text>
        </View>
    );
}

export default CustomHeader

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 200,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',

    },
});