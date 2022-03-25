import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Container} from '../../components/container';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

const ChatScreen = ({route, navigation}) => {
  console.log('r........', route);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      database()
        .ref('/Messages')
        .on('value', snapshot => {
          console.log('Snapshot', snapshot);
          let res = snapshot?.val?.();
          console.log('res', res);

          if (res !== null) {
            console.log(res);
            console.log(Object.values(res));

            let data = Object.values(res);

            data = data.sort(function (a, b) {
              // Turn your strings into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return new Date(b.time) - new Date(a.time);
            });

            if (messageList.length != data.length) {
              console.log('Called in if.............');
              setMessageList(Object.values(data));
            }

            setLoading(false);
          }
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const sendMessage = () => {
    if (message) {
      const newReference = database().ref('/Messages').push();

      newReference
        .set({
          fromUid: route.params?.loginUserInfo?.uid,
          toUid: route.params?.data?.uid,
          message: message,
          time: new Date(),
        })
        .then(() => setMessage(''));
    }
  };

  return (
    <Container style={{flex: 1}} loading={loading}>
      <SafeAreaView style={{flex: 1}}>
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
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
              fontFamily: 'ZillaSlab-Bold',
            }}>
            {route.params.name}
          </Text>
        </View>

        {isEmpty == true && loading == false ? (
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'ZillaSlab-Medium',
                textAlign: 'center',
                marginTop: 50,
                paddingHorizontal: 20,
              }}>
              No conversion history available, please start sending messages...
            </Text>
          </View>
        ) : null}

        <FlatList
          style={{marginBottom: 70}}
          data={messageList}
          keyExtractor={(item, index) => item.time.toString()}
          renderItem={({item, index}) => {
            if (
              route.params?.loginUserInfo?.uid == item.fromUid &&
              item.toUid == route.params?.data?.uid
            ) {
              if (isEmpty == true) {
                setIsEmpty(false);
              }

              return (
                <TouchableOpacity activeOpacity={0.9} style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      paddingHorizontal: 10,
                      marginVertical: 10,
                    }}>
                    <Image
                      style={{width: 30, height: 30, borderRadius: 50}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeJIaj90AxSdQ4kugN7RK9TPBhiMcFKiiuXZ6FNw4Sj5mZ8xvPfARHTlsOyerqs8tLS4&usqp=CAU',
                      }}
                    />

                    <View
                      style={{
                        backgroundColor: '#FFA6D5',
                        width: 200,
                        borderRadius: 5,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          paddingHorizontal: 8,
                          paddingVertical: 5,
                          fontFamily: 'ZillaSlab-Medium',
                          fontSize: 15,
                        }}>
                        {item.message}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            } else if (
              route.params?.loginUserInfo?.uid == item.toUid &&
              item.fromUid == route.params?.data?.uid
            ) {
              if (isEmpty == true) {
                setIsEmpty(false);
              }

              return (
                <TouchableOpacity activeOpacity={0.9} style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                      marginVertical: 10,
                    }}>
                    <Image
                      style={{width: 30, height: 30, borderRadius: 50}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-lk-RYREmhV89n8yLwXTuOW2wkBMi_RLTg&usqp=CAU',
                      }}
                    />

                    <View
                      style={{
                        backgroundColor: '#88E0EF',
                        width: 200,
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          paddingHorizontal: 5,
                          paddingVertical: 5,
                          fontFamily: 'ZillaSlab-Medium',
                          fontSize: 15,
                        }}>
                        {item.message}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            } else {
              return <></>;
            }
          }}
        />

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
                height: 40,
                paddingHorizontal: 10,
                fontFamily: 'ZillaSlab-Medium',
              }}
              value={message}
              onChangeText={val => setMessage(val)}
              placeholder="Enter Text"
            />
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                sendMessage();
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1597E5',
                width: '28%',
                marginLeft: 5,
                borderRadius: 20,
                height: 40,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: 'ZillaSlab-Medium',
                }}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default ChatScreen;
