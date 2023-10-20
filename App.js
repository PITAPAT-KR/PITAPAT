import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.navbar}>
      <Text>Home</Text>
      <Text>chat</Text>
      <Text>community</Text>
      <Text>Mypage</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {},
});
