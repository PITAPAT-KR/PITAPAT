import { View, Text, StyleSheet } from "react-native";

export default function Mypage() {
  return (
    <View style={styles.container}>
      <Text>마이페이지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
