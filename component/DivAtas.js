import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
const size = 100;

export const DivAtas = (props) => {
  const headerText = props.text;

  console.log(typeof headerText);
  console.log(headerText);
  return (
    <View style={[style.divAtas, props.style]}>
      {typeof headerText == "undefined" && (
        <Image
          source={require("../assets/logo.png")}
          style={{ width: size, height: size }}
        />
      )}
      {typeof headerText !== "undefined" && (
        <Text
          style={{
            fontSize: 19,
            fontWeight: "600",
            transform: [{ translateY: 10 }],
            letterSpacing: 7
          }}
        >
          {headerText}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  divAtas: {
    //   backgroundColor: "#F0F",
    flex: 0.3,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
