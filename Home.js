import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

// Component
import Board from "./component/Board";
import { DivAtas } from "./component/DivAtas";

// Data
import bangun from "./bangun";
import { NavigationContainer } from "@react-navigation/native";
const bangunDatar = bangun[0];
const bangunRuang = bangun[1];

export default function App({ navigation}) {
  useEffect(() => {
    console.log(bangunDatar);
    console.log(bangunRuang);
  });

  return (
    <View style={style.container}>
      <DivAtas/>
      <View style={style.divBawah}>
        <Board bangunData={bangunDatar} boardName="Bangun Datar" navigation={navigation} />
        <Board bangunData={bangunRuang} boardName="Bangun Ruang" navigation={navigation} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
    // justifyContent: 'center'
  },
  divBawah: {
    backgroundColor: "#FFF",
    flex: 0.7,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 40,
    gap: 40,
    elevation: 30,
  },
});
