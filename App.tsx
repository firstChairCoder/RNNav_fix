import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Navigation } from "react-native-navigation";

import { mainRoot } from "./index"

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: "Settings",
            },
          })
        }
      />
    </View>
  );
}

// Settings screen declaration - this is the screen we'll be pushing into the stack
export const SettingsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <Text>Settings Screen</Text>
    </View>
  );
};

export const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Button
        title="Login"
        color="#710ce3"
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};

App.options = {
  topBar: {
    title: {
      text: "Home",
      color: "white",
    },
  },
  bottomTab: {
    text: "Home",
  },
};

SettingsScreen.options = {
  topBar: {
    title: {
      text: "Settings",
      color: "white",
    },
  },
  bottomTab: {
    text: "Settings",
  },
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
});
