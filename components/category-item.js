import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryItem = ({ category }) => {
  return (
    <View style={[styles.container, { backgroundColor: category.color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
      >
        <View style={styles.innerConntainer}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    flex: 1,
    borderRadius: 10,
    margin: 16,
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    // fontWeight: "700",
    letterSpacing: 1,
  },
  innerConntainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default CategoryItem;
