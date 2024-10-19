import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { RootStackParamList } from './types'; 
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>(); 

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

// Có 3 screen: Login, Sign Up, Home
// Vào sẽ init là screen Login
// Chuyển trang giữa các screen(goBack, goBack custom)
// Đặt title cho screen
// Chỉnh style cho title
// Khi nhấn vào button Login để chuyển sang Home sẽ có phần gửi dữ liệu là username và password
// Bên screen Home sẽ hiện thông tin username và password(sử dụng route)