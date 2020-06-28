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
import flatlistData from '../data/faqData';

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
                marginLeft: 15,
                fontSize: 13,
                marginTop: 15,
                marginBottom: 20,
              }}>
              {this.props.item.disc}
            </Text>
          </View>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              marginTop: 10,
              fontSize: 15,
              marginRight: 20,
              fontWeight: 'bold',
              color: '#1e474c',
            }}>
            >
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#898b8c',
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
