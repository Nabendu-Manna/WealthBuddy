import { StyleSheet, View, Text } from 'react-native'
import React from 'react'


export default function FlatCards(): JSX.Element {
    const cardList = [{
        title: 'Red',
        textColor: '#FFFFFF',
        bgColor: '#E1404D',
    }, {
        title: 'Green',
        textColor: '#000000',
        bgColor: '#1DE38A',
    }, {
        title: 'Blue',
        textColor: '#FFFFFF',
        bgColor: '#00ACDB',
    }, {
        title: 'Yellow',
        textColor: '#000000',
        bgColor: '#F4D941',
    }, {
        title: 'Purple',
        textColor: '#000000',
        bgColor: '#A667EE',
    }];

    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                {cardList.map((item) => (
                    <View style={[styles.card, { backgroundColor: item.bgColor }]} key={item.title}>
                        <Text style={{ color: item.textColor }}>{item.title}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        width: 120,
        height: 100,
        borderRadius: 4,
        margin: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})