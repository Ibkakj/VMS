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
import React from "react";
import { useRef, useState } from "react";
import ForgotPasswordImg from "../../assets/img/Forgotpassw.png";

// component
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Themedbox from "../../components/Themedbox";
import ThemedButton from "../../components/ThemedButton";
import { Colors } from "../../constant/color";
import Loader from "../../components/Loader";
import { router } from "expo-router";

const ResetPassword = () => {
  //  const [resetPassword, setResetPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [pin, setPin] = useState(["", "", "", ""]);
  const inputRefs = useRef([]); // Keep this

  const handleResetPassword = () => {
    if (pin.some((digit) => digit === "")) {
      console.log("Please fill in all fields");
      return;
    }
    console.log("Access to reset password granted");

    try {
      router.replace("/(auth)/changePassword");
    } finally {
      setLoading(false); // ✅ hide loader
    }
  };
  if (loading) return <Loader />;

  const handleChange = (text, index) => {
    const cleanText = text.replace(/[^0-9]/g, ""); // allow only digits
    const newPin = [...pin];

    if (cleanText === "") {
      // If text is cleared
      newPin[index] = "";
      setPin(newPin);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus(); // move to previous
      }
    } else {
      newPin[index] = cleanText.slice(-1); // keep only last number
      setPin(newPin);

      if (index < pin.length - 1) {
        inputRefs.current[index + 1]?.focus(); // move to next
      }
    }
  };

  const handleKeyPress = (e, index) => {
    const key = e.nativeEvent.key;

    if ((key === "Backspace" || key === "Delete") && pin[index] === "") {
      if (index > 0) {
        const newPin = [...pin];
        newPin[index - 1] = "";
        setPin(newPin);
        inputRefs.current[index - 1]?.focus();
      }
    }
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
            <ThemedText
              fontSize={35}
              weight="ExtraBold"
              style={{ textAlign: "center" }}
            >
              Forgot Password
            </ThemedText>
            <ThemedText
              fontSize={16}
              weight="Regular"
              style={{ textAlign: "center", marginTop: 5 }}
            >
              Enter the pin code sent to your mail
            </ThemedText>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              {pin.map((digit, index) => (
                <Themedbox
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  // autoFocus={index === 0}
                />
              ))}
            </View>
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

export default ResetPassword;

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 250,
    resizeMode: "contain",
    marginTop: 30,
    marginBottom: 20,
    alignSelf: "center",
  },
});
