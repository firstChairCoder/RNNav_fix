import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Navigation } from "react-native-navigation";

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
              options: {
                topBar: {
                  title: {
                    text: "Settings",
                  },
                },
              },
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

App.options = {
  topBar: {
    background: {
      color: "#4d089a",
    },
    title: {
      text: "Home",
      color: "white",
    },
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
