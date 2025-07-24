import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import ForgotPasswordImg from "../../assets/img/Forgotpassw.png";
import { FontAwesome5 } from "@expo/vector-icons";

//components
import ThemedInputText from "../../components/ThemedInputText";
import { Colors } from "../../constant/color";
import { Link, router } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const ForgotPassword = () => {
  const [setEmaset, setResetPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendSms = () => {
    console.log("Email sent");

    try {
      // Navigate to the reset password screen
      router.replace("/(auth)/ResetPassword"); // remove .jsx from route
    } catch (error) {
      console.error("Error navigating:", error);
    } finally {
      setLoading(false); // ✅ hide loader
    }

    // Optionally clear the field
    // setResetPassword("");
  };
  if (loading) return <Loader />;

  return (
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
        Enter the email address associated with your account and we'll send you
        a link to reset your password.
      </ThemedText>

      <ThemedInputText
        style={{ marginTop: 10 }}
        placeholder="Enter email address"
        placeholderTextColor="#8e8a8aff"
        LeftIcon={
          <FontAwesome5 name="envelope" size={20} color={Colors.iconColors} />
        }
      />

      <ThemedButton onPress={handleSendSms} style={{ marginTop: 30 }}>
        <ThemedText
          fontSize={16}
          weight="SemiBold"
          style={{ color: Colors.primary, textAlign: "center" }}
        >
          Send SMS
        </ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default ForgotPassword;

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
