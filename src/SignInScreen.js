import * as React from 'react';
import {Button, TextInput, View,StyleSheet,ScrollView,Image,Text} from 'react-native';
import {AuthContext} from './utils';
import {TouchableHighlight,TouchableWithoutFeedback} from 'react-native-gesture-handler';

export  function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);
  const {container,TxtInput}= styles

  return (
    // <View style={styles.container}>
    //   <TextInput
    //     placeholder="Username"
    //     value={username}
    //     onChangeText={setUsername}
    //     style={styles.TxtInput}
    //   />
    //   <TextInput
    //     placeholder="Password"
    //     value={password}
    //     onChangeText={setPassword}
    //     secureTextEntry
    //     style={styles.TxtInput}
    //   />
    //   <Button title="Sign in" onPress={() => signIn({username, password})} />
    //   <Button title="Register" onPress={() => navigation.navigate('Register')} />
    // </View>
    <ScrollView>
      <View style={styles.container}>
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
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
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
          <TouchableHighlight onPress={() => signIn({username, password})} >
            <Button
              title="Login"
              color="#1e474c"
              accessibilityLabel="Tap on Me"
              borderWidth="2"
            />
          </TouchableHighlight>
        </View>

        {/* onPress={() => register({username, password})} */}

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.bottom}>Don't have an account? Sign Up</Text>
        </TouchableWithoutFeedback>
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
    marginBottom: 50,
  },
});