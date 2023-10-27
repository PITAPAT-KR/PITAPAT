import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>홈화면입니다</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
