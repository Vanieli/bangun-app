import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import bangun from "./bangun";
const bangunDatar = bangun[0];

import BoardingItems from "./component/BoardingItem";
import { DivAtas } from "./component/DivAtas";

export default function App({ route, navigation }) {
  const { data, name } = route.params;

  return (
    <View style={style.container}>
      <DivAtas style={{flex: .2, backgroundColor: '#FFF', borderBottomEndRadius: 100, borderBottomStartRadius: 100}} text={name} />
      <View style={style.divBawah}>
        <FlatList
          data={data}
          renderItem={({ item }) => <BoardingItems props={item} style={{marginHorizontal: 25, marginBottom: 120, }} data={item} navigation={navigation} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(key) => key.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}

          contentContainerStyle={style.flatlist}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
  },
  divBawah: {
    // backgroundColor: "#FFF",
    flex: 0.8,
    // height: '100%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingTop: 40,
    // gap: 40,
    // elevation: 30,
    alignItems: "center",
  },
  flatlist: {
    // backgroundColor: "#FaF",
    paddingTop: 50,
    // gap: 60,
    // height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    // flexWrap: "wrap",
  },
});
