import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';

import {Posts} from './PostsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CreatePost} from './CreatePostsScreen';
import {Profile} from './ProfileScreen';
import FeatherIcons from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export const AllPostsScreen = () => {
  return (
    <>
      <View style={styles.tabBar}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              if (route.name === 'HomePage') {
                return (
                  <View style={styles.cub}>
                    <Button title="">
                      <FeatherIcons name="grid" color="#BDBDBD" size={24} />
                    </Button>
                  </View>
                );
              } else if (route.name === 'CreatePosts') {
                return (
                  <View style={styles.centralBut}>
                    <Button title="+" color={'white'} />
                  </View>
                );
              } else if (route.name === 'Profile') {
                return (
                  <View style={styles.cub}>
                    <Button title="">
                      <FeatherIcons name="user" color="#BDBDBD" size={24} />
                    </Button>
                  </View>
                );
              }
            },
          })}>
          <Tab.Screen name="HomePage" component={Posts} />
          <Tab.Screen name="CreatePosts" component={CreatePost} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </View>
    </>
  );
};
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
    flex: 1,
    flexDirection: 'row',
    gap: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#BDBDBD',
    height: 83,
  },
});
