/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {RegistrationScreen} from './screens/RegistrationScreen';

// const image = {
//   uri: 'https://etnosoft.com.ua/wp-content/uploads/2018/12/zumova-hruroda-oboi-na-telefon-9.jpg',
// };

function App() {
  return (
    <ImageBackground
      source={require('./images/PhotoBG.png')}
      resizeMode="cover"
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <RegistrationScreen />
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
