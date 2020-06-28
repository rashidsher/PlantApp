import * as React from 'react';
import { AsyncStorage, Button, Text, StyleSheet, SafeAreaView, View } from 'react-native';
import {CustomHeader} from './CustomHeader'

export function MoreDetail() {
    const { container } = styles;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Detail Info!</Text>
          <Button title="Sign out" />
        </View>
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