import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {PostsContext} from '../postsContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CreatePost} from './CreatePostsScreen';
import {Profile} from './ProfileScreen';
import {AllPostsScreen} from './Home';

const Tab = createBottomTabNavigator();

export const Posts = () => {
  //   console.log('user', user);
  return (
    <ScrollView style={styles.common}>
      <View style={styles.wrap}>
        <Text style={styles.wrapTextPosts}>Пости</Text>
        <View style={styles.boxSvg}>
          <FeatherIcons name="log-in" color="#BDBDBD" size={24} />
        </View>
      </View>
      <View style={styles.infoUser}>
        <View style={styles.photo}></View>
        <View style={styles.dataUser}>
          <Text style={styles.name}>
            {/* {user.login} */}
            QWert
          </Text>
          <Text style={styles.email}>
            {/* {user.email} */}
            QWert
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

// PostsScreen.contextType = PostsContext;

const styles = StyleSheet.create({
  cub: {
    width: 30,
    height: 30,
    backgroundColor: '#BDBDBD',
  },
  centralBut: {
    width: 70,
    height: 40,
    backgroundColor: '#FF6C00',
    borderRadius: 20,
  },
  tabBar: {
    flex: 0.5,
    flexDirection: 'row',
    gap: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#BDBDBD',
    height: 83,
  },
  common: {
    backgroundColor: '#E5E5E5',
    // flex: 1,
    flex: 5,
  },
  email: {
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 18,
    color: 'black',
  },
  name: {
    paddingTop: 3,
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 11,
    color: 'black',
  },
  dataUser: {
    // padding:,
  },
  photo: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 16,
  },
  infoUser: {
    // flex: 5,
    marginTop: 32,
    flexDirection: 'row',
    gap: 8,
    marginLeft: 16,
    // height: 10,
    alignSelf: 'stretch',
  },
  boxSvg: {
    position: 'absolute',
    left: 335,
    top: 10,
  },
  wrap: {
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: 11,
    borderColor: '#BDBDBD',
    height: 44,
    alignItems: 'center',
  },
  wrapTextPosts: {
    position: 'relative',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
  },
});
