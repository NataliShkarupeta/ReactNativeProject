/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {RegistrationScreen} from './screens/RegistrationScreen';
import {LoginScreen} from './screens/LoginScreen';
import {PostsScreen} from './screens/PostsScreen';

function App() {
  const [users, setUsers] = useState({});
  const [hasAccount, setHasAccount] = useState(false);
  const [user, setUser] = useState('');
  // console.log('users', users);


  return (
    <ImageBackground
      source={require('./images/PhotoBG.png')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.container}>
       
        <ScrollView>
          {user ? (
            <PostsScreen user={user} />
          ) : !hasAccount ? (
            <RegistrationScreen
              createUser={setUsers}
              hasAccount={setHasAccount}
            />
          ) : (
            <LoginScreen
              hasAccount={setHasAccount}
              allUsers={users}
              setUser={setUser}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;
