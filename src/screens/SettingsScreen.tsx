import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { decrement, increment } from '../store/features/counter/counterSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useGetFollowersByNameQuery } from '../services/githubUser';

const SettingsScreen = ({ navigation }: { navigation: any }): React.JSX.Element => {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    const { data, error, isLoading } = useGetFollowersByNameQuery('Nabendu-Manna');

    return (
        <ScrollView style={{ backgroundColor: '#E0E6EC' }}>
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

            <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={() => navigation.push('fiendUser')}>
                <Text style={styles.buttonText}>Submit (TouchableOpacity)</Text>
            </TouchableOpacity>

            {error ? (
                <Text style={{ fontSize: 12, color: '#000000' }}>Oh no, there was an error</Text>
            ) : isLoading ? (
                <Text style={{ fontSize: 12, color: '#000000' }}>Loading...</Text>
            ) : data ? (
                <View style={styles.container}>
                    <Text style={{ fontSize: 12, color: '#000000' }}>ContactList</Text>

                    {data.map(({ id, login, avatar_url }) => (
                        <View key={id} style={styles.userCard}>
                            <Image
                                source={{
                                    uri: avatar_url,
                                }}
                                style={styles.userImage}
                            />
                            <View>
                                <Text style={styles.userName}>{login}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            ) : null}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#39393E',
        padding: 8,
        borderRadius: 10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
    },
    userStatus: {
        fontSize: 12,
    },
    button: {
        backgroundColor: '#059EF7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 0,
        marginTop: 30,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default SettingsScreen;
