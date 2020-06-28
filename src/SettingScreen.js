import * as React from 'react';
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  ScrollView, Image, TouchableWithoutFeedback
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {CustomHeader} from './CustomHeader'


export function SettingScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [reEnter, setReEnter] = React.useState('');


  const { container, TxtInput } = styles;

  //   register = (username,password) =>{
  //       console.log('You Can handle api register from here')
  //   };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomHeader title="Profile" isHome={true} navigation={navigation}  />
        <View style={styles.logo}>
          <Image
            style={{width: 270, height: 90}}
            source={require('../images/logo1.png')}
          />
        </View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.TxtInput}
        />
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          style={styles.TxtInput}
        />
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          style={styles.TxtInput}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.TxtInput}
        />
        <TextInput
          placeholder="Conform Password"
          value={reEnter}
          onChangeText={setReEnter}
          secureTextEntry
          style={styles.TxtInput}
        />
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            width: 290,
            height: 50,
          }}>
          <TouchableHighlight
            onPress={() => navigation.navigate('User Updated')}>
            <Button
              title="Update"
              color="#1e474c"
              accessibilityLabel="Tap on Me"
              borderWidth="2"
            />
          </TouchableHighlight>
        </View>

        {/* onPress={() => register({username, password})} */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TxtInput: {
    height: 50,
    width: 290,
    fontSize: 18,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
  },
  bottom: {
    fontSize: 15,
    color: '#1e474c',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 20,
    marginBottom: 50
  }
});
