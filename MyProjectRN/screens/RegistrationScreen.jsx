import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
// import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import uuid from 'react-native-uuid';
import {PostsContext} from '../postsContext';

export const RegistrationScreen = ({createUser, hasAccount}) => {
  const {register, handleSubmit, setValue} = useForm();
  const navigation = useNavigation();

  const onSubmit = useCallback(formData => {
    console.log(formData);
    // createUser(users => {
    //   const newUser = {
    //     ...formData,
    //     id: uuid.v4(),
    //   };
    //   return {...users, [newUser.id]: {...newUser}};
    // });
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
        <View style={styles.boxForPhoto}>
          <View style={styles.wrapSvg}>
            {/* <EvilIconsIcon
            name="plus"
            size={25}
            color="#FF6C00"
            borderRadius={10}
          /> */}
          </View>
        </View>
        <Text style={styles.welcome}>Реєстрація</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.containerKey}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.box}>
              <TextInput
                style={styles.input}
                autoCompleteType="text"
                placeholder="Логін"
                onChangeText={onChangeField('login')}
              />
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
              <Text
                // onPress={() => hasAccount(true)} style={styles.loginText}
                onPress={() => navigation.navigate('Login')}>
                Вже є акаунт? Увійти
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {/* </View> */}
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
  wrapSvg: {
    position: 'absolute',
    left: 100,
    top: 80,
  },
  boxForPhoto: {
    position: 'relative',
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    textAlign: 'center',
    marginTop: -60,
    borderRadius: 16,
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
    // marginTop: 263,
    marginTop: 163,
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
  image: {
    marginBottom: 20,
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

// RegistrationScreen.contextType= PostsContext;
