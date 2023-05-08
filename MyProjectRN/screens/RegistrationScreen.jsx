import {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export const RegistrationScreen = () => {
  const {register, handleSubmit, setValue} = useForm();
  console.log('register', register);
  console.log('handleSubmit', handleSubmit);
  console.log('setValue', setValue);

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
      <Text style={styles.welcome}>Реєстрація</Text>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCompleteType="password"
          placeholder="Логін"
          onChangeText={onChangeField('password')}
        />
        <TextInput
          style={styles.input}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="адреса електроонної пошти"
          onChangeText={onChangeField('email')}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCompleteType="password"
          placeholder="Пароль"
          onChangeText={onChangeField('password')}
        />
      </View>

      <Button
        style={styles.buttonSubmit}
        title="Зареєструватись"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonSubmit: {
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
    borderTopRightRadius:25,
    marginTop: 263,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 500,
    lineHeight: 35,
    marginBottom: 32,
  },
  image: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    marginHorizontal: 16,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    width: 343,
    borderRadius: 8,
  },
});
