import React from "react";
import { Text } from "react-native";
import { Colors } from "../constant/color";

const ThemedText = ({ style, weight, fontSize, ...props }) => {
  return (
    <Text
      style={[
        {
          fontFamily: `Gilroy-${weight}`,
          fontSize: fontSize,
          color: Colors.text,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedText;
