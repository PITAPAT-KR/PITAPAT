import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Feed } from './components/feed';
import Navbar from "./components/navbar";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Feed />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '12%',   
  },
});
