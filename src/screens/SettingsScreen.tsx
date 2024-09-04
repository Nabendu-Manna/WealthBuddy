import { Button, Text, View } from 'react-native';
import React from 'react';

const SettingsScreen = ({ navigation }: { navigation: any }): React.JSX.Element => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E0E6EC' }}>
            <Text style={{ fontSize: 30, color: '#000000' }}>This is the home screen!</Text>
            <Button
                onPress={() => navigation.navigate('WebModal')}
                title="Open Modal"
            />
        </View>
    );
};

export default SettingsScreen;
