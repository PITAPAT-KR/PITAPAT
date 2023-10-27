import Home from "./component/home";
import Feed from "./component/feed";
import Community from "./component/community";
import Chat from "./component/chat";
import Mypage from "./component/mypage";
import { View, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function Main({ component }) {
  const statusBarHeight = getStatusBarHeight();

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
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
  },
});
