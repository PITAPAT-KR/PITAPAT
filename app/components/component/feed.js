import { View, Text, StyleSheet } from "react-native";

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text>피드</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
