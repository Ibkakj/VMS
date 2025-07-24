import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRef, useState } from "react";
import ForgotPasswordImg from "../../assets/img/Forgotpassw.png";

// component
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Themedbox from "../../components/Themedbox";

const ResetPassword = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const cleanText = text.replace(/[^0-9]/g, "");
    const newPin = [...pin];
    newPin[index] = cleanText;
    setPin(newPin);

    if (cleanText && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
  const key = e.nativeEvent.key;

  if (key === "Backspace") {
    const newPin = [...pin];

    if (pin[index] !== "") {
      // If current input has value, clear it
      newPin[index] = "";
      setPin(newPin);
    } else if (index > 0) {
      // If current input is empty, move focus back and clear previous
      inputRefs.current[index - 1]?.focus();
      newPin[index - 1] = "";
      setPin(newPin);
    }
  }
};

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
          />
        ))}
      </View>
    </ThemedView>
  );
};

export default ResetPassword;

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
