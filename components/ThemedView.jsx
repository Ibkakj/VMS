import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, ...props }) => {
  const insets = useSafeAreaInsets(); // 👈 this is the missing part

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: 20,
          paddingRight: 20,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
