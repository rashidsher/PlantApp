import * as React from 'react';
import { AsyncStorage, Button, Text, TextInput, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SplashScreen ,HomeScreen,SignInScreen,RegisterScreen,
      SettingScreen,HomeDetail,SettingDetail,More,MoreDetail,
  MyOrder,MyOrderDetail} from './src'
import {AuthContext} from './src/utils'
import { ScreenStack } from 'react-native-screens';


const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <StackHome.Screen name="Home" component={HomeScreen} />
      <StackHome.Screen name="Product" component={HomeDetail} />
    </StackHome.Navigator>
  );
}

const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <StackSetting.Screen name="Profile" component={SettingScreen} />
      <StackSetting.Screen name="User Updated" component={SettingDetail} />
    </StackSetting.Navigator>
  );
}

const StackMyOrder = createStackNavigator();

function OrderStack() {
  return (
    <StackMyOrder.Navigator
      initialRouteName="MyOrder"
      screenOptions={{headerShown: false}}>
      <StackMyOrder.Screen name="MyOrder" component={MyOrder} />
      <StackMyOrder.Screen name="MyOrder Detail" component={MyOrderDetail} />
    </StackMyOrder.Navigator>
  );
}

const StackMore = createStackNavigator();

function MoreStack() {
  return (
    <StackMore.Navigator
      initialRouteName="More"
      screenOptions={{headerShown: false}}>
      <StackMore.Screen name="More" component={More} />
      <StackMore.Screen name="More Detail" component={MoreDetail} />
    </StackMore.Navigator>
  );
}


const Tab = createBottomTabNavigator();
function HomeTab(){
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          return (
            <Image
              source={
                focused
                  ? require('./images/browser2.png')
                  : require('./images/browser3.png')
              }
              style={{
                width: 25,
                height: 25,
                
              }}
            />
          );
        } else if (route.name === 'My Order') {
          return (
            <Image
              source={
                focused
                  ? require('./images/booking.png')
                  : require('./images/booking1.png')
              }
              style={{
                width: 25,
                height: 25,
              }}
            />
          );
        } else if (route.name === 'Profile') {
          return (
            <Image
              source={
                focused 
                ? require('./images/user1.png') 
                : require('./images/user.png')
              }
              style={{
                width: 25,
                height: 25,
              }}
            />
          );
        } else if (route.name === 'More') {
          return (
            <Image
              source={
                focused 
                ? require('./images/more2.png') 
                : require('./images/more1.png')
              }
              style={{
                width: 25,
                height: 25,
              }}
            />
          );
        }
        // You can return any component that you like here!
        return <Image name={iconName} resizeMode="contain" />;
      },
    })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        inactiveBackgroundColor:'green',
        activeBackgroundColor:'green',
    
      }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="My Order" component={OrderStack}/>
        <Tab.Screen name="Profile" component={SettingStack} />
      <Tab.Screen name="More" component={MoreStack} />
      </Tab.Navigator>
  
  );
}



const StackAuth = createStackNavigator();

function AuthStack(){
  return (
    <StackAuth.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <StackAuth.Screen name="SignIn" component={SignInScreen} />
      <StackAuth.Screen name="Register" component={RegisterScreen} />
    </StackAuth.Navigator>
  );
}








const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          if(action.token)
          {
            AsyncStorage.setItem('userToken',action.token);
          }
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          if(action.token){
            AsyncStorage.removeItem('userToken');
          }
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          >
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={AuthStack}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Home" component={HomeTab}  />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
