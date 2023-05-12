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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostsContext} from './postsContext';
import {AllPostsScreen} from './screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  const [users, setUsers] = useState({});
  const [hasAccount, setHasAccount] = useState(false);
  const [user, setUser] = useState('');
  
  // console.log('users', users);

  return (
    // <PostsContext.Provider>
    // <ImageBackground
    //   source={require('./images/PhotoBG.png')}
    //   resizeMode="cover"
    //   style={styles.image}>
      <NavigationContainer>
        {/* <SafeAreaView style={styles.container}> */}

        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={AllPostsScreen} />
        </Stack.Navigator>

        {/* {user ? (
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
            )} */}

        {/* </SafeAreaView> */}
      </NavigationContainer>
    // </ImageBackground>
    // </PostsContext.Provider>
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
