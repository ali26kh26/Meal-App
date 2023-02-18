import { FlatList, StyleSheet } from "react-native";
import CategoryItem from "../components/category-item";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => {
        return <CategoryItem category={item} />;
      }}
      keyExtractor={(item) => item.id}
      style={styles.container}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
  },
});

export default CategoriesScreen;
