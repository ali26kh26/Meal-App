import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/meal-item";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
  console.group(displayedMeals);
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item }) => <MealItem mealData={item} />}
      />
    </View>
  );
};

export default MealsOverviewScreen;
