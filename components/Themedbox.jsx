import { TextInput, StyleSheet } from "react-native";
import React, { forwardRef } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Themedbox = forwardRef(({ style, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      style={[styles.input, style]}
      keyboardType="number-pad"
      maxLength={1}
      textAlign="center"
      {...props}
    />
  );
});

export default Themedbox;

const styles = StyleSheet.create({
  input: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    color: "#081C15",
    borderColor: "#1B4332",
    fontSize: 18,
  },
});
