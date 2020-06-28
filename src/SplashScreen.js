import * as React from 'react';
import {AsyncStorage, Button, Text, TextInput, View,Image,StyleSheet} from 'react-native';

export function SplashScreen() {
  
  return (
    <View>
      <View style= {styles.image}>
        <Image
          style={{width: 270, height: 90}}
          source={require('../images/logo1.png')}
        />
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
image:{
    justifyContent:'center',
    alignItems:'center'
}
})