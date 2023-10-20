import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Feed } from './components/feed';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
