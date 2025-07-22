import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constant/color";

function ThemedButton({ style, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.btn,
    padding: 15,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.8,
  },
});
export default ThemedButton;
