import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Navbar({ handleButtonPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleButtonPress("feed")}
        style={styles.button}
      >
        <FontAwesome name="paper-plane" size={24} color="black" />
        <Text style={styles.buttonText}>피드</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleButtonPress("community")}
        style={styles.button}
      >
        <FontAwesome name="users" size={24} color="black" />
        <Text style={styles.buttonText}>커뮤니티</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleButtonPress("home")}
        style={styles.button}
      >
        <FontAwesome name="home" size={24} color="black" />
        <Text style={styles.buttonText}>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleButtonPress("chat")}
        style={styles.button}
      >
        <FontAwesome name="wechat" size={24} color="black" />
        <Text style={styles.buttonText}>채팅</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleButtonPress("myPage")}
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
