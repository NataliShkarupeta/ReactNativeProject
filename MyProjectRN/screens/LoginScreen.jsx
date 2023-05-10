import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export const LoginScreen = () => {
      const {register, handleSubmit, setValue} = useForm();

      const onSubmit = useCallback(formData => {
        console.log(formData);
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
                title="Зареєструватись"
                onPress={handleSubmit(onSubmit)}
                color="#FFFFFF"
              />
            </View>
            <Text style={styles.loginText}>Нема акаунта? Зареєструватись</Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
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
