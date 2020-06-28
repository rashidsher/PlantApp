import * as React from 'react';
import { AsyncStorage, Button, Text, StyleSheet, SafeAreaView, View } from 'react-native';
import {AuthContext} from './utils';
import {CustomHeader} from './CustomHeader'

export function More({navigation}) {
    const { container } = styles;
      const {signOut} = React.useContext(AuthContext);

    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader title="More" isHome={true} navigation={navigation} />
        <View style={styles.main}>
          <Text>More Info!</Text>
          <Button title="Sign out" onPress={signOut} />
        </View>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});