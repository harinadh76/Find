import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogOut from '@/components/LogOut'
import CustomHeader from '@/components/Cards/CustomHeader'
import Cook from '@/components/Cards/Cook'
import { cookData } from '@/constants/CookData'

const home = () => {
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
                <LogOut />
            </View>
        </View>
    )
}

export default home

const styles = StyleSheet.create({})