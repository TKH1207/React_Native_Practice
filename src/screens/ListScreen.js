import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

var MOCKED_DATA = [
    {
        id: '1',
        note: '測試1',
        date: '2021/01/21',
        imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png',
    },
    {
        id: '2',
        note: '測試2',
        date: '2021/02/21',
        imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png',
    },
    {
        id: '3',
        note: '測試3',
        date: '2021/03/21',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/8ZZNSej9H2oqYzpa5K422b-1200-80.jpg',
    },
    {
        id: '4',
        note: '測試4',
        date: '2021/04/21',
        imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png',
    },
    {
        id: '5',
        note: '測試5',
        date: '2021/05/21',
        imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png',
    },
    {
        id: '6',
        note: '測試6',
        date: '2021/06/21',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/8ZZNSej9H2oqYzpa5K422b-1200-80.jpg',
    },
    {
        id: '7',
        note: '測試7',
        date: '2021/07/21',
        imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png',
    },
    {
        id: '8',
        note: '測試8',
        date: '2021/08/21',
        imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png',
    },
    {
        id: '9',
        note: '測試9',
        date: '2021/09/21',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/8ZZNSej9H2oqYzpa5K422b-1200-80.jpg',
    },
    {
        id: '10',
        note: '測試10',
        date: '2021/10/21',
        imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png',
    },
    {
        id: '11',
        note: '測試11',
        date: '2021/11/21',
        imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png',
    },
    {
        id: '12',
        note: '測試12',
        date: '2021/12/21',
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/8ZZNSej9H2oqYzpa5K422b-1200-80.jpg',
    },
]


export default function ListScreen(props) {

    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        // var book = MOCKED_DATA
        // setDataSource(book)
        fetchData()

    }, [])

    const fetchData = () => {
        const REQUEST_URL = 'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL'
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                setDataSource(responseData)
            })
            .catch((err) => {
                console.log('error')
            })
    }

    const showListDetails = (cases) => {
        props.navigation.push('ListDetails', { passProps: cases })
    }

    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showListDetails(cases)}>
                <View>
                    <View style={styles.mainView}>
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: cases.album_file }}
                        />

                        <View style={{ flex: 1 }}>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ fontSize: 15, marginBottom: 5, }}>
                                {cases.animal_place}
                            </Text>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ fontSize: 13, marginBottom: 5, }}>
                                {cases.animal_bodytype === 'MEDIUM' ? '中型' :
                                    cases.animal_bodytype === 'SMALL' ? '小型' : '大型'} / {cases.animal_colour}的{cases.animal_kind}
                            </Text>
                        </View>
                        <Ionicons name='chevron-forward-outline' size={40} color={'#CCD1D1'} />
                    </View>
                    <View style={styles.seperator} />

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>

            <FlatList
                data={dataSource}
                renderItem={cases => renderBook(cases.item)}
                keyExtractor={cases => cases.id}
                style={{}}
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
    mainView: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    seperator: {
        height: 1,
        backgroundColor: 'darkgray',
    },
    imageStyle: {
        width: 60,
        height: 60,
        margin: 10,
    },
});
