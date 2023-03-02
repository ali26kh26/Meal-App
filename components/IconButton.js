import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet } from "react-native";
const IconButton = ({ onPress, name, color, size }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
export default IconButton;
