import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
    // const navigation = useNavigation<HomeScreenNavigationProp>();
  // const handleLogout = () => {
  //   firebase.auth().signOut()
  //     .then(() => {
  //       // navigation.replace('Login');
  //     })
  //     .catch((error: any) => {
  //       console.error('Logout Error:', error.message);
  //     });
  // };

  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      {/* <Button title="Logout" onPress={handleLogout} /> */}
    </View>
  );
};

export default HomeScreen;