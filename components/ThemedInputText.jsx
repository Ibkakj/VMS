import { TextInput, View, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constant/color";

const ThemedInputText = ({ style, rightIcon, LeftIcon, ...props }) => {
  return (
    <View style={[styles.container, style]}>
      {LeftIcon && <View style={styles.icons}>{LeftIcon}</View>}
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.placeholder || "#999"}
        {...props}
      />
      {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.input,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    color: Colors.text,
    fontSize: 16,
    paddingVertical: 10,
  },
  icon: {
    paddingLeft: 10,
  },
  icons: {
    paddingRight: 5,
  },
});

export default ThemedInputText;
