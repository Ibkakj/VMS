import { Stack } from "expo-router";
import { useFonts } from "expo-font";
// import Loader from "../components/Loader"; // your splash screen component
import React, { useEffect, useState } from "react";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-SemiBold": require("../assets/fonts/Gilroy-SemiBold.ttf"),
    "Gilroy-Medium": require("../assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Light": require("../assets/fonts/Gilroy-Light.ttf"),
    "Gilroy-ExtraBold": require("../assets/fonts/Gilroy-ExtraBold.ttf"),
  });

  // const [isAppReady, setIsAppReady] = useState(false);

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     // delay to show splash screen for at least 2 seconds
  //     const timeout = setTimeout(() => {
  //       setIsAppReady(true);
  //     }, 2000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [fontsLoaded]);

  // if (!isAppReady) {
  //   return <Loader />; // show splash screen first
  // }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
