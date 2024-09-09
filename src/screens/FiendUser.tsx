import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setUserSearchKey } from '../store/features/user/userSlice';
import { useGetFollowersByNameQuery } from '../services/githubUser';

const FiendUser = () => {
    const [searchKey, setSearchKey] = useState('');
    const userSearchKey = useAppSelector((state) => state.user.userSearchKey);
    const dispatch = useAppDispatch();
    const [skip, setSkip] = useState(true);
    const [queryKey, setQueryKey] = useState('');
    const { data, error, isLoading, isUninitialized } = useGetFollowersByNameQuery(queryKey, { skip });

    useEffect(() => {
        if (!userSearchKey || userSearchKey === '') {
            setSkip(true);
            // setQueryKey('');
        } else {
            setSkip(false);
            setQueryKey(userSearchKey);
        }
    }, [userSearchKey]);

    useEffect(() => {
        dispatch(setUserSearchKey(searchKey));
    }, [dispatch, searchKey]);

    return (
        <ScrollView style={styles.bg}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Search Key"
                    placeholderTextColor="#000000"
                    onChangeText={inpValue => setSearchKey(inpValue)}
                    value={userSearchKey}
                />
                <Text style={styles.smallText}>Search Key: {searchKey}</Text>
                <Text style={styles.smallText}>Search Key: {userSearchKey}</Text>

                {error ? (
                    <Text style={styles.mainText}>Oh no, there was an error</Text>
                ) : isUninitialized ? (
                    <></>
                ) : isLoading ? (
                    <Text style={styles.mainText}>Loading...</Text>
                ) : data ? (
                    <View style={styles.container}>
                        <Text style={styles.mainText}>ContactList</Text>
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
            </View>
        </ScrollView>
    );
};

export default FiendUser;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#E0E6EC',
    },
    container: {
        padding: 8,
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    smallText: {
        color: '#000000',
    },
    mainText: {
        fontSize: 12,
        color: '#000000',
    },
    input: {
        color: '#000000',
        backgroundColor: '#D4D4D4',
        borderColor: '#8B8B8B',
        borderWidth: 2.5,
        height: 40,
        padding: 10,
        borderRadius: 8,
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
});
