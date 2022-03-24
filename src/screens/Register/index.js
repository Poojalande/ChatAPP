import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const index = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          position: 'absolute',
          flex: 1,

          width: '100%',
          height: '100%',
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/images/pexels-cottonbro-7120126.jpg')}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}></View>
      </View>
      <Text style={{fontSize: 30, color: 'white', marginTop: 10}}>
        Register
      </Text>
      <View
        style={{
          marginVertical: 10,
          marginTop: 150,
          marginHorizontal: 20,
        }}>
        <Text style={{marginLeft: 10, fontSize: 16, color: 'white'}}>
          Enter Name
        </Text>

        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#E7E0C9',

            marginVertical: 10,
          }}>
          <TextInput
            style={{color: 'white', fontSize: 18}}
            placeholder=" Name"
            placeholderTextColor={'white'}
          />
        </View>

        <Text style={{marginLeft: 10, fontSize: 16, color: 'white'}}>
          Enter Email
        </Text>

        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#E7E0C9',

            marginVertical: 10,
          }}>
          <TextInput
            style={{color: 'white', fontSize: 18}}
            placeholder=" Email"
            placeholderTextColor={'white'}
          />
        </View>
        <Text
          style={{marginLeft: 10, fontSize: 16, color: 'white', marginTop: 20}}>
          Enter Password
        </Text>
        <View
          style={{
            borderBottomWidth: 2,
            marginVertical: 10,
            borderBottomColor: '#E7E0C9',
          }}>
          <TextInput
            style={{color: 'white', fontSize: 18}}
            placeholder=" Password"
            placeholderTextColor={'white'}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{
            backgroundColor: '#FDEFEF',
            alignItems: 'center',
            borderRadius: 50,
            marginVertical: 30,
            paddingVertical: 10,
            width: '50%',
          }}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
