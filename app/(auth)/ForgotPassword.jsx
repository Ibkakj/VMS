import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import ForgotPasswordImg from "../../assets/img/Forgotpassw.png";
import { FontAwesome5 } from "@expo/vector-icons";

//components
import ThemedInputText from "../../components/ThemedInputText";
import { Colors } from "../../constant/color";
import { Link, router } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Loader from "../../components/Loader";

const ForgotPassword = () => {
  const [resetPassword, setResetPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendSms = () => {
    setLoading(true); // Show the loader

    setTimeout(() => {
      console.log("Email sent");
      router.replace("/(auth)/ResetPassword"); // Navigate after delay
      setLoading(false); // Hide the loader (optional since you're navigating)
    }, 2000); // 2 seconds delay
  };

  // try {
  //   console.log("Email sent");
  //   // Navigate to the reset password screen
  //   router.replace("/(auth)/ResetPassword"); // remove .jsx from route
  // } catch (error) {
  //   console.error("Error navigating:", error);
  // } finally {
  //   setLoading(false); // ✅ hide loader
  // }

  // Optionally clear the field
  // setResetPassword("")
  if (loading) return <Loader />;

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
            <ThemedText
              fontSize={35}
              weight="ExtraBold"
              style={{ textAlign: "center" }}
            >
              Forgot Password
            </ThemedText>
            <ThemedText
              fontSize={16}
              weight="Medium"
              style={{ textAlign: "center", marginTop: 5 }}
            >
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </ThemedText>

            <ThemedInputText
              style={{ marginTop: 20 }}
              placeholder="Enter email address"
              placeholderTextColor="#8e8a8aff"
              LeftIcon={
                <FontAwesome5
                  name="envelope"
                  size={20}
                  color={Colors.iconColors}
                />
              }
            />

            <ThemedButton onPress={handleSendSms} style={{ marginTop: 40 }}>
              <ThemedText
                fontSize={16}
                weight="SemiBold"
                style={{ color: Colors.primary, textAlign: "center" }}
              >
                Send SMS
              </ThemedText>
            </ThemedButton>
          </ThemedView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 290,
    resizeMode: "contain",
    marginTop: 30,
    marginBottom: 30,
    alignSelf: "center",
  },
});
