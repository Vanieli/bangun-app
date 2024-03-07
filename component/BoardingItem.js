// Slot kotak untuk penampilkan 'bangun ruang-datar'
import React from "react";
import { View, StyleSheet, useWindowDimensions, TouchableOpacity, Image, Text } from "react-native";

const BoardingItems = ({ props, style, data, navigation, bangun }) => {
    // properti: style, onPress, source, name
  const { width, height } = useWindowDimensions();
  return (
    <View style={[cubeThumb.cnt, style]}>
      <TouchableOpacity
        style={[cubeThumb.cube,]}
        onPress={() => navigation.navigate("Counter", {data: data, bangunNama: bangun})}
      >
        <Image source={props.source} style={cubeThumb.image} />
      <Text style={cubeThumb.name}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BoardingItems;

const cubeThumb = StyleSheet.create({
  cube: {
    // backgroundColor: "red",
    // width: 40,
    // height: 40,
    // borderWidth: ,
    // padding: "2.5%",
    borderRadius: 10,
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: 100,
    height: 50,
    // backgroundColor: "#00F",
    position: "relative",
    resizeMode: "center",

  },
  cnt: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    // backgroundColor: "#a00",
    // flex: 0,
    // height: 10
    transform: [{translateY: -12}]
  },
  name: {
    position: "absolute",
    width: 150,
    textAlign: "center",
    bottom: -30,
    // right: -55,
    // fontWeight: '400'
    // opacity: 0,
    overflow: 'visible',
    // fontSize: '1%'
    fontWeight: '300',
  },
});
