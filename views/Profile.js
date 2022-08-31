import {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {MainContext} from '../components/contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const {isLoggedIn, setIsLoggedIn, user} = useContext(MainContext);

  console.log('Profile', isLoggedIn);

  const logOut = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Text>
        User: {user.username} (id: {user.user_id})
      </Text>
      <Text>Email: {user.email}</Text>
      <Text>Full name: {user.full_name}</Text>
      <Text>User since: {user.time}</Text>
      <Button title={'Logout'} onPress={logOut} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;
