import { TextInput } from "react-native";
import React from "react";
import { Colors } from "../constant/color";

const ThemedInputText = ({ style, ...props }) => {
  return (
    <TextInput
      style={[
        {
          backgroundColor: Colors.input,
          color: Colors.text,
          borderRadius: 10,
          paddingLeft: 20,
          paddingTop: 15,
          paddingBottom: 15,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedInputText;
