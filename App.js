import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text style={{marginTop: 100, color: 'black'}}>Hello Pooja</Text>
    </View>
  );
};

export default App;
