import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Web = ({ navigation }: { navigation: any }): JSX.Element => {
    navigation.addListener('tabPress', (/*e*/) => {
        // Prevent default action
        // e.preventDefault();
    });

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.primaryTest}>This is the home screen!</Text>
                <Button
                    onPress={() => navigation.navigate('WebModal')}
                    title="Open Modal"
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0E6EC',
    },
    primaryTest: {
        fontSize: 30,
        color: '#000000',
    },
});

export default Web;
