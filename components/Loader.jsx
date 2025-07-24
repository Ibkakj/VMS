import React, { useEffect } from "react";
import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router"; // if using expo-router
import logo from "../assets/img/logo.png";
import { Colors } from "../constant/color";
import ThemedText from "../components/ThemedText";

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={logo} style={styles.img} />
        <ThemedText weight="Bold" fontSize={28}>
          VMSP
        </ThemedText>
      </View>

      <View style={styles.bottom}>
        <ActivityIndicator size={15} color="#fff" />
        <ThemedText fontSize={14}>Loading...</ThemedText>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    alignItems: "center",
    marginBottom: 40,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
