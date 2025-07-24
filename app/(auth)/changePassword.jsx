import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ForgotPasswordImg from "../../assets/img/Forgotpassw.png";
import { router } from "expo-router";

// Components
import ThemedView from "../../components/ThemedView";
import ThemedInputText from "../../components/ThemedInputText";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import { Colors } from "../../constant/color.js";
import { FontAwesome5 } from "@expo/vector-icons";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleResetPassword = () => {
    if (!newPassword.trim() || !confirmPassword.trim()) {
      console.log("Please fill in both fields");
      return;
    }

    if (newPassword.trim() !== confirmPassword.trim()) {
      console.log("Passwords do not match");
      return;
    }

    // If password reset is successful, navigate to success page
    router.push("/(auth)/SuccessfulPassword");
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
            <Image source={ForgotPasswordImg} style={styles.img} />

            <ThemedText weight={400} fontSize={14} style={{ marginTop: 10 }}>
              New Password
            </ThemedText>
            <ThemedInputText
              style={{ marginTop: 5 }}
              placeholder="New Password"
              placeholderTextColor="#8e8a8aff"
              secureTextEntry={!showPassword}
              value={newPassword}
              onChangeText={setNewPassword}
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

            <ThemedText weight={400} fontSize={14} style={{ marginTop: 15 }}>
              Confirm Password
            </ThemedText>

            <ThemedInputText
              style={{ marginTop: 5 }}
              placeholder="Confirm Password"
              placeholderTextColor="#8e8a8aff"
              secureTextEntry={!showPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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

            <ThemedButton
              onPress={handleResetPassword}
              style={{ marginTop: 30 }}
            >
              <ThemedText
                fontSize={16}
                weight="SemiBold"
                style={{ color: Colors.primary, textAlign: "center" }}
              >
                Reset Password
              </ThemedText>
            </ThemedButton>
          </ThemedView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  img: {
    width: 319,
    height: 319,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 10,
  },
});
