import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Push Settings Screen" color="#710ce3" />
      <StatusBar style="auto" />
    </View>
  );
}

App.options = {
  topBar: {
    background: {
      color: "#4d089a"
    },
    title: {
      text: "Home",
      color: "white"
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
