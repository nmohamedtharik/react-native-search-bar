import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from "./assets/pages/SearchBar";

export default function App() {
    return (
        <View style={styles.container}>
            <SearchBar placeholder={"Enter to search"}/>
            <View><Text>Body</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: "flex-start",
        justifyContent: 'flex-start',
    }
});
