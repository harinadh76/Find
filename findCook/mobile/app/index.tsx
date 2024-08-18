import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function Index() {
    const [token, setToken] = useState("");
    useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
            // if (!token) {
            //     router.push("/");
            // }
            if (token) {
                setToken(token);
                router.push("/home");
            }
        });
        AsyncStorage.getItem('cookToken').then((cookToken) => {
            if (cookToken) {
                setToken(cookToken);
                router.push('/Cook/home');
            }
        });
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={styles.title}>Find Cook</Text>
            <Link href="/login"> Sign in  </Link>
            <Link href="/Cook"> Get Started as Cook </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 10,
    },
    button: {
        width: "80%",
        padding: 10,
        backgroundColor: "blue",
        color: "white",
    },
    link: {
        color: "blue",
    },
});
