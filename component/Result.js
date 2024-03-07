import React from "react";
import { Text, View } from "react-native";

export const Result = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        width: 100,
        // backgroundColor: '#F04'
      }}
    >
      <Text>{props.name}:</Text>
      <Text>{props.value}</Text>
    </View>
  );
};
