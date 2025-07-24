import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import successmark from "../../assets/img/successmark.png";

//components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { router } from "expo-router";

const SuccessfulPassword = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(auth)/Login"); // change this to your login page route
    }, 8000); // 8 seconds delay

    return () => clearTimeout(timeout);
  }, []);
  return (
    <ThemedView>
      <Image source={successmark} style={styles.img} />

      <ThemedText
        weight="Regular"
        fontSize={24}
        style={{ lineHeight: 38, textAlign: "center" }}
      >
        Password reset
        <ThemedText weight="ExtraBold" style={{ fontSize: 48 }}>
          {" "}
          successful
        </ThemedText>
      </ThemedText>
    </ThemedView>
  );
};

export default SuccessfulPassword;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 150,
    marginBottom: 20,
    alignSelf: "center",
  },
});
