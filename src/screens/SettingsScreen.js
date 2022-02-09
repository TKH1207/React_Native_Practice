import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as StorageHelpers from '../helper/StorageHelper';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { changeName2 } from '../redux/action';

export default function SettingsScreen(props) {

    const [name, setName] = useState('')
    const myNewName = useMappedState(state => state.newName)
    const disPatch = useDispatch()

    useEffect(() => {
        loadStorage()
        console.log('useEffect')
    }, [])

    const loadStorage = async () => {
        let nameGet = await StorageHelpers.getSetting('name')
        console.log('loadStorage')
        if (nameGet) {  // if (nameGet !== null)
            setName(nameGet)
        }
    }

    const changeName = async () => {
        try {
            await StorageHelpers.setSetting('name', name)
        } catch {
            console.log('error')
        }

    }

    return (
        <View style={styles.container}>
            <Text>Settings</Text>

            <TextInput
                maxLength={10}
                style={styles.textInputStyle}
                onChangeText={(text) => setName(text)}
                value={name}
            />

            {/* storage應用 */}
            <Button
                title='Set your name'
                onPress={() => changeName()}
            />
            <Text>Name：{name}</Text>

            {/* redux應用 */}
            <Button
                title='redux 設定名字'
                onPress={() => disPatch(changeName2(name))}
            />
            <Text>Test：{myNewName}</Text>

            {/* stack換頁 */}
            <Button
                title='Go to Settings Detail'
                onPress={() => props.navigation.push('SettingsDetails')}
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
    textInputStyle: {
        height: 32,
        width: 200,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'darkgray',
        marginTop: 8,
        marginBottom: 8,
        padding: 5,
        fontSize: 15,
    },
});
