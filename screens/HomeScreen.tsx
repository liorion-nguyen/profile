import React, { useContext, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext } from '../contexts/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  }
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('user');
      return token;
    } catch (error) {
      console.error('Failed to get token', error);
      return null;
    }
  };
  const handleUser = () => {
    console.log(getToken());
  }
  useEffect(() => {
    if (!user) {
      navigation.navigate('Login');
    }
  }, [user]);
  return (
    <View>
      {
        user && <>
          <Text>Welcome to the Home Screen</Text>
          <Text>{user.fullName}</Text>
          <Button title="user" onPress={handleUser} />
          
          <Button title="Logout" onPress={handleLogout} />
        </>
      }
    </View>
  );
};

export default HomeScreen;