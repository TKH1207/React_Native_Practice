import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title='Go to Home Details'
                onPress={() => props.navigation.push('HomeDetails')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
