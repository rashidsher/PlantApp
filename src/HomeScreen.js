import * as React from 'react';
import {
  AsyncStorage,
   Button, 
   Text,
   SafeAreaView,
   StyleSheet,
   View,
   Image,
   TextInput,

  ScrollView,
  ImageBackground} from 'react-native';
import {AuthContext} from './utils'
import {CustomHeader} from './CustomHeader';


export function HomeScreen({navigation}) {
  const {signOut} = React.useContext(AuthContext);
    const {container} = styles;

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <ImageBackground
        source={require('../images/ironing.jpg')}
        style={styles.Image}>
        <View style={styles.text}>
          <Text
            style={{fontSize: 22, fontWeight: 'bold'}}
            onPress={() => navigation.navigate('Product')}>
            Dry Cleaning
          </Text>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../images/ironing.jpg')}
        style={styles.Image}>
        <View style={styles.text}>
          <Text
            style={{fontSize: 22, fontWeight: 'bold'}}
            onPress={() => navigation.navigate('Product')}>
            Ironing
          </Text>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../images/was.jpg')}
        style={styles.Image}>
        <View style={styles.text}>
          <Text
            style={{fontSize: 22, fontWeight: 'bold'}}
            onPress={() => navigation.navigate('Product')}>
            Washing & Ironing
          </Text>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../images/was.jpg')}
        style={styles.Image}>
        <View style={styles.text}>
          <Text
            style={{fontSize: 22, fontWeight: 'bold'}}
            onPress={() => navigation.navigate('Product')}>
            Duvet Cleaning
          </Text>
        </View>
      </ImageBackground>
      {/* <Text>Home Screen!</Text>
      <Button title="Sign out" onPress={signOut} />
      <Button
        title="Sign out"
        onPress={() => navigation.navigate('Home Detail')}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  text: {
    width: 200,
    height: 120,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
  
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

});