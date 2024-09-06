import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppStack';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>
const WelcomeScreen = ({ navigation }: HomeProps) => {
    // navigation.replace('AppTab');
    return (
        <View style={styles.container}>
            <Text style={styles.primaryTest}>
                Welcome
            </Text>
            <Button
                title="Next ->"
                onPress={() => navigation.replace('AppTab')}
            />
        </View>
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

export default WelcomeScreen;
