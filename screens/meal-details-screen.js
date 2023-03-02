import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <IconButton
          color="white"
          name="star"
          size={22}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, mealId]);
  return (
    <ScrollView style={styles.rootConatiner}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title} </Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailItem}>{selectedMeal.affordability}</Text>
        <Text style={styles.detailItem}>{selectedMeal.complexity}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.subtitle}>Ingredients</Text>
          {selectedMeal.ingredients.map((ingredient) => (
            <Text style={styles.listItem} key={ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>
        <View>
          <Text style={styles.subtitle}>Steps</Text>
          {selectedMeal.steps.map((step) => (
            <Text style={styles.listItem} key={step}>
              {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  rootConatiner: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailContainer: {
    backgroundColor: "#e2b497",
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detailItem: {
    color: "#351401",
    fontSize: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 8,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginBottom: 6,
  },
  bottomContainer: {
    padding: 10,
  },
  listItem: {
    backgroundColor: "#e2b497",
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 6,
    borderRadius: 6,
    color: "#351401",
  },
});
export default MealDetailsScreen;
