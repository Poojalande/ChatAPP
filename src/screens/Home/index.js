import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const index = ({navigation}) => {
  const Data = [
    {id: 1, name: 'pooja lande'},
    {id: 2, name: 'kanak kakad'},
    {id: 3, name: 'Minakshi Deshmukh'},
    {id: 4, name: 'pranita ubhad'},
    {id: 5, name: 'anu bhorpe'},
    {id: 6, name: 'aishwarya bavne'},
    {id: 7, name: 'chiku lande'},
    {id: 8, name: 'pari lande'},
    {id: 9, name: 'payal lande'},
    {id: 3, name: 'Minakshi Deshmukh'},
    {id: 2, name: 'kanak kakad'},
    {id: 8, name: 'pari lande'},
  ];

  return (
    <View style={styles.container}>
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
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqqq3hB65nUNOn79Pa676ooImAqXWBb93jA&usqp=CAU',
            }}
          />
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
            Pooja lande
          </Text>
        </View>
        <Text style={{fontSize: 18, color: '#EF6D6D', fontWeight: 'bold'}}>
          Logout
        </Text>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleColor}>Contact List</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={Data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat', {name: item.name})}
              style={styles.contactView}>
              <View style={styles.leftView}>
                <Text style={styles.leftText}>{item.name.slice(0, 1)}</Text>
              </View>
              <View>
                <Text style={styles.nameText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E3C9',

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
    backgroundColor: '#ACB992',
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  leftView: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E3C9',
    marginVertical: 5,
    marginRight: 10,
  },
  leftText: {
    fontWeight: '900',
    fontSize: 20,
  },
  nameText: {
    fontSize: 20,
    color: 'black',
  },
});
export default index;
