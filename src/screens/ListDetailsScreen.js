import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function ListDetailsScreen(props) {

    const passProps = props.route.params.passProps || 'nothing get'

    return (
        <View style={styles.container}>
            <Text>ListDetails</Text>
            <Image
                style={styles.imageStyle}
                source={{ uri: passProps.album_file }}
            />
            <Text style={{ marginBottom: 5, }}>{passProps.animal_place}</Text>
            <Text style={{ marginBottom: 5, }}>
                {passProps.animal_bodytype === 'MEDIUM' ? '中型' :
                    passProps.animal_bodytype === 'SMALL' ? '小型' : '大型'}
            </Text>
            <Text style={{ marginBottom: 5, }}>{passProps.animal_colour}的{passProps.animal_kind}</Text>
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
    imageStyle: {
        width: 150,
        height: 150,
        margin: 10,
    },
});
