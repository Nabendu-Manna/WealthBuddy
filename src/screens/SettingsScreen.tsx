import { Button, Text, View } from 'react-native';
import React from 'react';
import { decrement, increment } from '../store/counter/counterSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const SettingsScreen = ({ navigation }: { navigation: any }): React.JSX.Element => {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E0E6EC' }}>
            <Button
                onPress={() => dispatch(decrement())}
                title="Decrement"
            />
            <Text style={{ fontSize: 30, color: '#000000' }}>{count}</Text>
            <Button
                onPress={() => dispatch(increment())}
                title="Increment"
            />
        </View>
    );
};

export default SettingsScreen;
