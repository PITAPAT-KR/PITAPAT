import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navbar from "./components/navbar";
import { useState } from "react";
import Home from "./components/home";
import Feed from "./components/feed";
import Community from "./components/community";
import Chat from "./components/chat";
import Mypage from "./components/mypage";

export default function App() {
  const [component, setComponent] = useState("home");

  const handleButtonPress = (newComponent) => {
    setComponent(newComponent);
  };

  let content;
  if (component === "home") {
    content = <Home />;
  } else if (component === "feed") {
    content = <Feed />;
  } else if (component === "community") {
    content = <Community />;
  } else if (component === "chat") {
    content = <Chat />;
  } else if (component === "myPage") {
    content = <Mypage />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navbar handleButtonPress={handleButtonPress} />
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
