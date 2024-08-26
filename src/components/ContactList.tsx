import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [{
        uid: 1,
        name: 'Nabendu Manna',
        status: '👑Just an extra ordinary developer',
        imageUrl: 'https://avatars.githubusercontent.com/u/69715068?v=4',
    }, {
        uid: 2,
        name: 'Rakesh Bag',
        status: 'I ❤️ To Code and Teach!',
        imageUrl: 'https://avatars.githubusercontent.com/u/123535441?v=4',
    }, {
        uid: 3,
        name: 'Joydeep Bhattacharjee',
        status: 'Making your app smooth 🚀',
        imageUrl: 'https://avatars.githubusercontent.com/u/70678132?v=4',
    }, {
        uid: 4,
        name: 'Sahabaz',
        status: 'Building secure application 🔐',
        imageUrl: 'https://avatars.githubusercontent.com/u/117567239?v=4',
    }, {
        uid: 5,
        name: 'Subodh Paramanik',
        status: 'I love coding 🧑‍💻',
        imageUrl: 'https://avatars.githubusercontent.com/u/125429258?v=4',
    },]

    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#39393E',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})