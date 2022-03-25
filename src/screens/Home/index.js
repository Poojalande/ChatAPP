import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Container} from '../../components/container';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getMarker = async () => {
    const snapshot = await firestore().collection('Users').get();
    const data = snapshot.docs.map(doc => doc.data());
    console.log('data', data);
    if (data?.length > 0) {
      setUsers(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMarker();
  }, []);

  const logoutUser = () => {
    auth()
      .signOut()
      .then(() => {
        Toast.show('Successfully logged out!', Toast.SHORT, [
          'RCTModalHostViewController',
        ]);
        navigation.navigate('Login')})
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Container style={styles.container} loading={loading}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            paddingHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 50, marginRight: 10}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdeISxwuZFqn8vs5k6d000EhssO8_edPRKf8W3NUwevXrh-s5FPwLQk2GPZywaYjRhZJ8&usqp=CAU',
              }}
            />
            <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
              Pooja lande
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              logoutUser();
            }}>
            <Text style={{fontSize: 18, color: '#EF6D6D', fontWeight: 'bold'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleColor}>Contact List</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={users}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Chat', {name: item.name,data:item})}
                style={styles.contactView}>
                <View style={styles.leftView}>
                  <Text
                    style={{...styles.leftText, textTransform: 'uppercase'}}>
                    {item.name.slice(0, 1)}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{...styles.nameText, textTransform: 'capitalize'}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  titleView: {
    paddingHorizontal: 10,
  },
  titleColor: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  contactView: {
    backgroundColor: '#A2D2FF',
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    paddingLeft: 10,
  },
  leftView: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E3C9',
    marginVertical: 5,
    marginRight: 10,
  },
  leftText: {
    fontWeight: '900',
    fontSize: 16,
  },
  nameText: {
    fontSize: 16,
    color: 'black',
  },
});
export default Home;
