import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { AuthProvider } from './contexts/authContext';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
