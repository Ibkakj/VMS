import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import loginpics from "../../assets/img/Login Pics.png";

//components
import ThemedView from "../../components/ThemedView.jsx";
import ThemedText from "../../components/ThemedText.jsx";
import ThemedInputText from "../../components/ThemedInputText.jsx";
import ThemedButton from "../../components/ThemedButton.jsx";
import { Colors } from "../../constant/color.js";
import { Link } from "expo-router";

const Login = () => {
  return (
    <ThemedView>
      <Image source={loginpics} style={styles.img} />

      <ThemedText weight="Bold" fontSize={24}>
        Welcome
      </ThemedText>

      <ThemedText weight={400} fontSize={14} style={{ marginTop: 10 }}>
        Username
      </ThemedText>

      <ThemedInputText
        style={{ marginTop: 10 }}
        placeholder="Enter your Username"
        placeholderTextColor="#8e8a8aff"
      />
      <ThemedText weight={400} fontSize={14} style={{ marginTop: 10 }}>
        Password
      </ThemedText>
      <ThemedInputText
        style={{ marginTop: 10 }}
        placeholder="***********"
        placeholderTextColor="#8e8a8aff"
      />
      <Link
        href="/forgotpassword"
        style={{
          marginTop: 19,
          textAlign: "right",
          textDecorationLine: "underline",
        }}
      >
        <ThemedText fontSize={12} weight={400}>
          Forgot Password?
        </ThemedText>
      </Link>
      <ThemedButton style={{ marginTop: 10 }}>
        <ThemedText
          fontSize={16}
          weight="SemiBold"
          style={{ color: Colors.primary, textAlign: "center" }}
        >
          LOGIN
        </ThemedText>
      </ThemedButton>
      <ThemedText
        fontSize={14}
        weight={400}
        style={{ textAlign: "center", marginTop: 10 }}
      >
        Don't have an account?,{" "}
        <Link href="/signup">
          <ThemedText
            fontSize={14}
            weight="SemiBold"
            style={{ textAlign: "center", color: Colors.span }}
          >
            Sign Up
          </ThemedText>
        </Link>
      </ThemedText>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 320,
    resizeMode: "contain",
    marginTop: 30,
    marginBottom: 20,
    alignSelf: "center",
  },
});
