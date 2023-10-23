import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Alert.alert("홈페이지를 보여드릴게요")}
        style={styles.button}
      >
        <FontAwesome name="home" size={24} color="black" />
        <Text style={styles.buttonText}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert("커뮤티니를 보여드릴게요")}
        style={styles.button}
      >
        <FontAwesome name="users" size={24} color="black" />
        <Text style={styles.buttonText}>커뮤니티</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert("채팅을 보여드릴게요")}
        style={styles.button}
      >
        <FontAwesome name="wechat" size={24} color="black" />
        <Text style={styles.buttonText}>채팅</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert("마이페이지를 보여드릴게요")}
        style={styles.button}
      >
        <FontAwesome name="user" size={24} color="black" />
        <Text style={styles.buttonText}>마이페이지</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "lightgrey",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
  },
});
