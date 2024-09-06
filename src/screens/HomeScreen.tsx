import { ScrollView /* , useColorScheme,StyleSheet, Platfor */  } from 'react-native';
import React from 'react';

import FlatCards from '../components/FlatCards';
import AppForm from '../components/AppForm';
import ElevatedCards from '../components/ElevatedCards';
import FancyCard from '../components/FancyCard';
import ContactList from '../components/ContactList';

const HomeScreen = (): React.JSX.Element => {
    // const isDarkMode = useColorScheme() === 'dark'
    return (
        <ScrollView>
            {/* <View style={styles.container}>
                <Button
                    title="Go to details"
                    // onPress={() => navigation.navigate("Details", {
                    //     productId: "86"
                    // })}
                    // onPress={() => navigation.navigate("Details")}
                    onPress={() => navigation.push('Details', {
                        productId: '86',
                    })}
                />
                <Button
                    title="Web View"
                    onPress={() => navigation.push('Web')}
                />
            </View> */}

            <FlatCards />
            <ElevatedCards />
            <AppForm />
            <FancyCard />
            <ContactList />
            {/* <View style={{backgroundColor: 'dodgerblue', width: 150, height: 70}}>
            </View>
            <View>
            <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello World !</Text>
            </View>
            <View>
            <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello World !</Text>
            </View> */}
        </ScrollView>
    );
};

export default HomeScreen;
