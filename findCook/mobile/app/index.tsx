import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Index() {
    const [token, setToken] = useState("");
    useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
            if (!token) {
                router.push("/");
            }
            if (token) {
                setToken(token);
                router.push("/home");
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
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Link href="/login"> Sign in  </Link>
        </View>
    );
}
