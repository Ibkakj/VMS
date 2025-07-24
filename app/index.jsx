import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import logo from "../assets/img/logo.png";
import ThemedText from "../components/ThemedText";
import { Colors } from "../constant/color";
import ThemedView from "../components/ThemedView";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(auth)/Login"); // change this to your login page route
    }, 8000); // 8 seconds delay

    return () => clearTimeout(timeout);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* Top section with logo and brand */}
      <View style={styles.topContainer}>
        <Image source={logo} style={styles.img} />
        <ThemedText
          weight="Bold"
          fontSize={32}
          style={{ color: Colors.brandText, letterSpacing: 5 }}
        >
          VMSP
        </ThemedText>
      </View>

      {/* Bottom section with tagline */}
      <ThemedView style={styles.bottom}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size={20} color="#40916C" />
          <ThemedText fontSize={14} style={{ marginLeft: 5 }}>
            Brandline
          </ThemedText>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  topContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -20,
  },
  bottom: {
    paddingBottom: 50,
    alignItems: "center",
  },
  img: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10,
  },
  brandText: {
    color: "#fff",
  },
});
