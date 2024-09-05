import React from 'react';
import { Button, Text, View } from 'react-native';

const Web = ({ navigation }: { navigation: any }): JSX.Element => {
    navigation.addListener('tabPress', (/*e*/) => {
        // Prevent default action
        // e.preventDefault();
    });

    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E0E6EC' }}>
                <Text  style={{ fontSize: 30, color: '#000000' }}>This is the home screen!</Text>
                <Button
                    onPress={() => navigation.navigate('WebModal')}
                    title="Open Modal"
                />
            </View>
        </>
    );
};

export default Web;
