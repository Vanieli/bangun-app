import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Input(props) {
  // setVariable, function
  // onChangeBoolean, function
  // fiilBool, variable onChangeBoolean
  // Name, label input

  const [txt, setTxt] = useState('');

  const setChange = (a) => {
    if (a == '') {
      props.onChangeBoolean(false);
    //   setTxt(a);
    } else {
      props.setVariable(a)
      props.onChangeBoolean(true);
    }
  };

  useEffect(() => {
    if (props.fillBool) {
        setChange(txt);
        console.log("inputed: ", txt);
    }
  }, [props.fillBool]);

  return (
    <View style={[style.container, props.style]}>
      <Text style={style.name}>{props.name}</Text>
      <TextInput
        style={style.input}
        inputMode="numeric"
        placeholder="..."
        onChangeText={(a) => {
          setTxt(a)
          setChange(a);
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 150,
    height: 30,
    // backgroundColor: '#Fa4',
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    gap: 40,
  },
  name: {
    position: "absolute",
    left: "10%",
    fontWeight: "300",
    letterSpacing: .5
  },
  input: {
    position: "absolute",
    left: "55%",
    fontWeight: "500",
    color: "#555",
  },
});
