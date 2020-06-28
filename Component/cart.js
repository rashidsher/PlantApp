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
import flatlistData from '../data/cartData';
import cartsPromotion from '../data/cartsPromotion';
import cartsAccount from '../data/cartsAccount';

class FlatlistItem extends React.Component {
  render() {
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 14,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* <Image
            source={{uri: this.props.item.imageUrl}}
            style={{width: 100, height: 100, margin: 5}}
          /> */}
            <Text
              style={{
                color: '#1e474c',
                fontSize: 15,

                fontWeight: 'bold',
              }}>
              2x
            </Text>

            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#898b8c',
                  fontSize: 15,

                  marginLeft: 25,
                  fontWeight: 'bold',
                }}>
                {this.props.item.name}
              </Text>
            </View>
            <Text
              style={{
                color: '#898b8c',
                justifyContent: 'center',
                alignItems: 'center',

                fontSize: 15,

                fontWeight: 'bold',
              }}>
              {this.props.item.order}
            </Text>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: '#898b8c',
              marginLeft: 10,
              marginRight: 10,
            }}
          />
        </View>
      </View>
    );
  }
}

class FlatlistItem2 extends React.Component {
  render() {
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={{
              height: 1,
              backgroundColor: '#898b8c',
              alignContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <View
            style={{
              flex: 1,

              backgroundColor: 'white',
              padding: 54,
            }}>
            {/* <Image
              source={{uri: this.props.item.imageUrl}}
              style={{width: 100, height: 100, margin: 5}}
            /> */}
            <Text
              style={{
                color: '#1e474c',
                fontSize: 16,

                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {this.props.item.name}
            </Text>

            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#898b8c',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                {this.props.item.Description}
              </Text>
            </View>
            <Text
              style={{
                color: '#1e474c',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 15,

                fontWeight: 'bold',
              }}>
              {this.props.item.order}
            </Text>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: '#898b8c',
              marginLeft: 10,
              marginRight: 10,
            }}
          />
        </View>
      </View>
    );
  }
}
class FlatlistItem3 extends React.Component {
  render() {
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={{
              height: 1,
              backgroundColor: '#898b8c',
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'white',
              padding: 10,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* <Image
              source={{uri: this.props.item.imageUrl}}
              style={{width: 100, height: 100, margin: 5}}
            /> */}

            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#898b8c',
                  fontSize: 15,
                  marginTop: 10,
                  marginLeft: 25,
                  fontWeight: 'bold',
                }}>
                {this.props.item.name}
              </Text>
              <Text
                style={{
                  color: '#898b8c',
                  fontSize: 15,
                  marginTop: 10,
                  marginLeft: 25,
                  fontWeight: 'bold',
                }}>
                {this.props.item.Description}
              </Text>
              <Text
                style={{
                  color: '#898b8c',
                  fontSize: 15,
                  marginTop: 10,
                  marginLeft: 25,
                  fontWeight: 'bold',
                }}>
                {this.props.item.order}
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#898b8c',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginRight: 10,
                  marginTop: 10,
                }}>
                {this.props.item.subtotal}
              </Text>
              <Text
                style={{
                  color: '#898b8c',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginRight: 10,
                  marginTop: 10,
                }}>
                {this.props.item.discount}
              </Text>
              <Text
                style={{
                  color: '#898b8c',

                  fontSize: 15,

                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginRight: 10,
                  marginTop: 10,
                }}>
                {this.props.item.total}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#898b8c',
            marginLeft: 10,
            marginRight: 10,
          }}
        />
      </View>
    );
  }
}

export default class basicflatlist extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 3,
          marginTop: 22,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 20,
        }}>
        <FlatList
          data={flatlistData}
          renderItem={({item, index}) => {
            return <FlatlistItem item={item} index={index} />;
          }}
        />
        <FlatList
          data={cartsPromotion}
          renderItem={({item, index}) => {
            return <FlatlistItem2 item={item} index={index} />;
          }}
        />
        <FlatList
          data={cartsAccount}
          renderItem={({item, index}) => {
            return <FlatlistItem3 item={item} index={index} />;
          }}
        />
        <Text
          style={{
            color: '#1e474c',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 3,

            textAlign: 'center',
          }}>
          Choose Expected Delivery Date
        </Text>
        <Text
          style={{
            color: '#1e474c',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          5/09/2020
        </Text>
        <Button title="Select Address" color="#1e474c" marginBottom="20" />
      </View>
    );
  }
}
