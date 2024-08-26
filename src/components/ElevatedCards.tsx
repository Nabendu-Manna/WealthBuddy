import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
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
            <ScrollView horizontal={true} style={styles.container}>
                {cardList.map((item) => (
                    <View style={[styles.card, styles.cardElevated, { backgroundColor: item.bgColor }]} key={item.title}>
                        <Text style={{ color: item.textColor }}>{item.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingVertical: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})