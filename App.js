import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/categories-screen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
