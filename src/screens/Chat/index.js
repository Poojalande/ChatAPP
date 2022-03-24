import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const index = ({route, navigation}) => {
  console.log('r........', route);
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 30, height: 30, marginRight: 5}}
            source={require('../../assets/images/left-arrow-personal.png')}
          />
        </TouchableOpacity>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          {route.params.name}
        </Text>
      </View>
      <View style={{paddingHorizontal: 10}}>
        <Image />
        <View style={{backgroundColor: '#C1A3A3', width: 200}}>
          <TextInput style={{color: 'white'}} placeholder="hello pooja" />
        </View>
      </View>
    </View>
  );
};

export default index;
