import * as React from 'react';
import {
  AsyncStorage,
  View,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,Image
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {CustomHeader} from './CustomHeader'

export function SettingDetail({navigation}) {
  const {container} = styles;

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Profile Updated"
       
        navigation={navigation}
      />
      <View style={styles.logo}>
        <Image
          style={{width: 270, height: 90}}
          source={require('../images/logo1.png')}
        />
      </View>
      <Text style={styles.text}>
        User Profile has been Successfully Updated
      </Text>
      <View
        style={{
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
          width: 290,
          height: 50,
        }}>
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Button
            title="Go Back To Home"
            color="#1e474c"
            accessibilityLabel="Tap on Me"
            borderWidth="2"
          />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 50,
    color: 'green',
  },
});
