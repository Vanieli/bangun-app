import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, ImageBackground } from "react-native";

export default function App({ navigation }) {
  const [secondPreview, setPreview] = useState(false);
  const size = 100;

  useEffect(() => {
    setTimeout(() => {
      setPreview(true);
    }, 1600);
    setTimeout(() => {
      return navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }, 1800 * 2);
  });

  if (!secondPreview) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#FFF",
        }}
      >
        <Image
          source={require("./assets/logo.png")}
          style={{ width: size, height: size }}
        />
      </View>
    );
  } else {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#FFF",
        }}
      >
        {/* <Image source={require('./assets/logo.png')} style={{width: size, height: size}} /> */}
        <ImageBackground
          source={require("./assets/mathabs.jpg")}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "center",
            justifyContent: "center",
            alignItems: "center",
            opacity: .07,
            position: 'absolute'
          }}
        >
        </ImageBackground>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 18,
              letterSpacing: 1,
              textAlign: "left",
              transform: "scale(.9)",
            }}
          >
            "Aplikasi menghitung bangun datar dan bangun ruang"
          </Text>
      </View>
    );
  }
}
