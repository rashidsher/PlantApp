import * as React from 'react';
import {Text, View, SafeAreaView,StyleSheet, Image, TouchableOpacity} from 'react-native';
export function CustomHeader({title, isHome, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'green',
      }}>
      {isHome ? (
        <View
          style={{
            flex: 1,

            justifyContent: 'center',
            marginLeft: 5,
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../images/menuicon.png')}
            resizeMode="contain"
          />
        </View>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: 'row',

            alignItems: 'center',
            marginLeft: 5,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../images/arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      <View
        style={{
          flex: 1.5,

          justifyContent: 'center',
        }}>
        <Text style={styles.Text}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
     alignItems:'flex-end',
    
        }}>
        <Image
          style={{width: 30, height: 20}}
          source={require('../images/more.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

 var styles = StyleSheet.create({
   Text:{
     textAlign: 'center',
     fontSize:18,
     color:'white',
     fontWeight:'bold',
     justifyContent:'center',
     alignItems:'center'
     

   }
 })