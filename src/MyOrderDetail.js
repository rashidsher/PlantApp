import * as React from 'react';
import { AsyncStorage, Button, Text, StyleSheet, SafeAreaView } from 'react-native';


export function MyOrderDetail() {
    const { container } = styles;

    return (
        <SafeAreaView style={styles.container}>
            <Text>My Order Detail!</Text>
            <Button title="Sign out" />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});