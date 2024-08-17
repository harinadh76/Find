import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const chat = () => {
    return (
        <View style={styles.container}>
            <Text>chat feature comming soon </Text>
        </View>
    )
}

export default chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
})