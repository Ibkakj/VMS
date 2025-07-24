import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import loginpics from "../../assets/img/Login Pics.png";
import { FontAwesome5 } from "@expo/vector-icons";

// components
import ThemedView from "../../components/ThemedView.jsx";
import ThemedText from "../../components/ThemedText.jsx";
import ThemedInputText from "../../components/ThemedInputText.jsx";
import ThemedButton from "../../components/ThemedButton.jsx";
import { Colors } from "../../constant/color.js";
import { Link } from "expo-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {
    console.log("Login button pressed");
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <ThemedView>
            <StatusBar style="auto" />
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
              keyboardType="email-address"
            />

            <ThemedText weight={400} fontSize={14} style={{ marginTop: 10 }}>
              Password
            </ThemedText>

            <ThemedInputText
              style={{ marginTop: 10 }}
              placeholder="***********"
              placeholderTextColor="#8e8a8aff"
              secureTextEntry={!showPassword}
              rightIcon={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <FontAwesome5
                    name={showPassword ? "eye" : "eye-slash"}
                    size={20}
                    color={Colors.iconColors}
                  />
                </TouchableOpacity>
              }
            />

            <Link
              href="/(auth)/ForgotPassword"
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

            <ThemedButton onPress={handleSubmit} style={{ marginTop: 10 }}>
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
