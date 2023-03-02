import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MealItem = ({ mealData }) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("mealDetails", { mealId: mealData.id });
  };
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri: mealData.imageUrl }} />
          <Text style={styles.title}>{mealData.title}</Text>

          <View style={styles.detailContainer}>
            <Text style={styles.detailItem}>{mealData.duration}m</Text>
            <Text style={styles.detailItem}>{mealData.affordability}</Text>
            <Text style={styles.detailItem}>{mealData.complexity}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 12,
    elevation: 6,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: Platform.OS === "android" ? 0.8 : 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detailItem: {
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 14,
  },
  innerContainer: {
    overflow: "hidden",
  },
});

export default MealItem;
