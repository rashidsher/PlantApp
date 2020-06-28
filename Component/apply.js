import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  AppRegistry,
} from 'react-native';
import flatlistData from '../data/applyData';

class FlatlistItem extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text
              style={{
                color: '#1e474c',
                fontSize: 18,
                borderColor: '#1e474c',
                borderRadius: 3,
                width: 60,
                height: 30,

                textAlign: 'center',
                marginTop: 20,
                borderWidth: 1,
                marginLeft: 15,
                fontWeight: 'bold',
              }}>
              {this.props.item.nameofitem}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                marginLeft: 15,
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              {this.props.item.discount}
            </Text>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 12,
                marginTop: 5,
                marginBottom: 20,
              }}>
              {this.props.item.disc}
            </Text>
          </View>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              fontSize: 15,
              marginRight: 20,
              fontWeight: 'bold',
              color: '#1e474c',
            }}>
            APPLY
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#898b8c',
            marginLeft: 20,
            marginRight: 20,
          }}
        />
      </View>
    );
  }
}

export default class apply extends React.Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 22, marginLeft: 10, marginRight: 10}}>
        <FlatList
          data={flatlistData}
          renderItem={({item, index}) => {
            return <FlatlistItem item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}
