import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const ChatScreen = ({route, navigation}) => {
  console.log('r........', route);
  return (
    <View style={{flex: 1}}>
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
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <Image
          style={{width: 30, height: 30, borderRadius: 50}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-lk-RYREmhV89n8yLwXTuOW2wkBMi_RLTg&usqp=CAU',
          }}
        />

        <View style={{backgroundColor: '#88E0EF', width: 200, borderRadius: 5}}>
          <Text
            style={{color: 'black', paddingHorizontal: 5, paddingVertical: 5}}>
            hello pooja
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'flex-end',
        }}>
        <Image
          style={{width: 30, height: 30, borderRadius: 50}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeJIaj90AxSdQ4kugN7RK9TPBhiMcFKiiuXZ6FNw4Sj5mZ8xvPfARHTlsOyerqs8tLS4&usqp=CAU',
          }}
        />

        <View style={{backgroundColor: '#FFA6D5', width: 200, borderRadius: 5}}>
          <Text
            style={{color: 'black', paddingHorizontal: 5, paddingVertical: 5}}>
            Hello pooja
          </Text>
        </View>
      </View>

      <View style={{position: 'absolute', bottom: 10, width: '100%'}}>
        <View
          style={{
            marginHorizontal: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 30,
              width: '70%',
              paddingHorizontal: 10,
            }}
            placeholder="Enter Text"
          />
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1597E5',
              width: '28%',
              marginLeft: 5,
              borderRadius: 20,
              height: 40,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
