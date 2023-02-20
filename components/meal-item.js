import { StyleSheet, Text, View } from "react-native";

const MealItem = ({ mealData }) => {
  return (
    <View>
      <Text>{mealData.title}</Text>
    </View>
  );
};

export default MealItem;
