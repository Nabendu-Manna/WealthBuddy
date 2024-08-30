import React from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppStack';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>
const WelcomeScreen = ({ navigation }: HomeProps) => {
    // navigation.replace('AppTab');
    return (
        <View>
            <Text style={{color:'#000000'}}>
                Welcome
            </Text>
            <Button
                title="Next ->"
                onPress={() => navigation.replace('AppTab')}
            />
        </View>
    );
};

export default WelcomeScreen;
