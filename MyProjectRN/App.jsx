/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {RegistrationScreen} from './screens/RegistrationScreen';
import { LoginScreen } from './screens/LoginScreen';

// const image = {
//   uri: 'https://etnosoft.com.ua/wp-content/uploads/2018/12/zumova-hruroda-oboi-na-telefon-9.jpg',
// };

function App() {
  const [users,setUsers]=useState({})
  const[hasAccount,setHasAccount]=useState(false)
  console.log('users', users);


  return (
    <ImageBackground
      source={require('./images/PhotoBG.png')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {!hasAccount ? (
            <RegistrationScreen
              createUser={setUsers}
              hasAccount={setHasAccount}
            />
          ) : (
            <LoginScreen hasAccount={setHasAccount} />
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },

});

export default App;
