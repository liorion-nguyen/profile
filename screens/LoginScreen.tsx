import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; // Import type ở đây
import axios from 'axios';
import { AuthContext } from '../contexts/authContext';
// import { firebase } from '../firebaseConfig';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const { user, login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetch = async () => {
    const req = await axios.get('https://be-react-native.vercel.app/users');
    const data = req.data.data;
    data.map((user: any) => {
      console.log(user.email, " : ", email); 
      if (user.email == email) {
        login(user);
        Alert.alert("Dang nhap thanh cong");
        navigation.navigate('Home');
        return;
      }
    })
    Alert.alert("Dang nhap khong thanh cong");
  }

  useEffect(() => {
    if (user) {
      navigation.navigate('Home');
    }
  }, [user]);

  const handleLogin = () => {
    fetch();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail}/>
      <TextInput placeholder="Mật Khẩu" secureTextEntry style={styles.input} value={password} onChangeText={setPassword}/>
      <Button title="Đăng Nhập" onPress={handleLogin} />
      <Button title="Chuyển đến Đăng Ký" onPress={() => navigation.navigate('Sign Up')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
