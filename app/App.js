import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navbar from "./components/navbar";
import { useState } from "react";
import Main from "./components/main";

export default function App() {
  const [component, setComponent] = useState("home");

  const handleButtonPress = (newComponent) => {
    setComponent(newComponent);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navbar handleButtonPress={handleButtonPress} />
      <Main component={component} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
