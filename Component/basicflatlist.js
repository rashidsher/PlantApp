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
import flatlistData from '../data/flatlistData';

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
          <Image
            source={{uri: this.props.item.imageUrl}}
            style={{width: 100, height: 100, margin: 5}}
          />

          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                marginTop: 20,
                marginLeft: 15,
                fontWeight: 'bold',
              }}>
              {this.props.item.name}
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 10,
                marginLeft: 15,
                marginTop: 5,
              }}>
              {this.props.item.Description}
            </Text>
            <Text
              style={{
                color: '#1e474c',
                marginLeft: 15,
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              {this.props.item.order}
            </Text>
          </View>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
              fontSize: 15,
              marginRight: 20,
              fontWeight: 'bold',
            }}>
            40$
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

export default class basicflatlist extends React.Component {
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
