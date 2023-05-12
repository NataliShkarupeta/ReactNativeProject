import {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PostsContext } from '../postsContext';

export const LoginScreen = ({hasAccount, allUsers, setUser }) => {
  const {register, handleSubmit, setValue} = useForm();
  // const [profile, setProfile] = useState(false);
  const navigation= useNavigation();


  const onSubmit = useCallback(formData => {
    console.log(formData);

    // const account = Object.values(allUsers).find(
    //   user =>
    //     user.email === formData.email && user.password === formData.password,
    // );
    // if (account) {
    //   setUser(account);
    //   navigation.navigate('Home');
    // } else {
    //   // promt('Такого користувача не існує!');
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Такого користувача не існує!',
    //   });
    // }
     navigation.navigate('Home');
  }, []);

  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    [],
  );

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>Війти</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.containerKey}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.box}>
              <TextInput
                style={styles.input}
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="адреса електроонної пошти"
                onChangeText={onChangeField('email')}
              />
              <View style={styles.boxPassword}>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  autoCompleteType="password"
                  placeholder="Пароль"
                  onChangeText={onChangeField('password')}></TextInput>
                <Text style={styles.textShow}>Показати</Text>
              </View>
              <View style={styles.buttonSubmit}>
                <Button
                  title="Війти"
                  onPress={handleSubmit(onSubmit)}
                  color="#FFFFFF"
                />
              </View>
              <Text
                // onPress={() => hasAccount(false)} style={styles.loginText}
                onPress={() => navigation.navigate('Registration')}>
                Нема акаунта? Зареєструватись
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  textShow: {
    position: 'absolute',
    left: 265,
    color: '#1B4371',
  },
  loginText: {
    color: '#1B4371',
    textAlign: 'center',
  },
  boxPassword: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 43,
  },
  containerKey: {
    flex: 1,
  },
  buttonSubmit: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.18,
    textAlign: 'center',
    height: 50,
    backgroundColor: '#FF6C00',
    width: 343,
    borderRadius: 100,
  },
  box: {
    gap: 16,
    marginBottom: 43,
  },
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 263,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 32,
    fontWeight: 500,
    lineHeight: 35,
    marginBottom: 32,
  },
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    width: 343,
    borderRadius: 8,
  },
});
// LoginScreen.contextType = PostsContext;
