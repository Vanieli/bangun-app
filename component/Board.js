// Membuat papan untuk menampilkan komponen 'bangun ruang-datar'
import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import BoardingItems from "./BoardingItem";

const Board = ({ bangunData, boardName, navigation }) => {
  return (
    <View
      style={{
        height: 200,
        // flex: 0.25,
        // alignItems: 'center'
        // backgroundColor: '#0FD',
        alignItems: "center",
        // justifyContent: 'center'
      }}
    >
      <TouchableOpacity
      onPress={() => navigation.navigate('ShowList', {data: bangunData, name: boardName})}

        style={{
          // backgroundColor: "#FAF",
          width: "82%",
          height: 25,
          // marginLeft: 30,
          marginTop: 25,
          // position: "absolute",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 15,
            paddingStart: 15,
            borderLeftWidth: 2,
            borderLefttColor: "#F0F",
            letterSpacing: 0.3,
            // backgroundColor: '#F0F',
            // top: 0
          }}
        >
          {boardName}
        </Text>

        <View
          style={{
            position: "absolute",
            right: 0,
            width: 90,
            // alignItems: 'flex-end',
          }}
        >
          <Text
            style={{
              // position: 'absolute',
              fontWeight: "200",
              fontSize: 14,
              // top: 0
            }}
          >
            Lihat Semua
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              position: "absolute",
              right: 0,
            }}
          >
            >
          </Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={bangunData}
        renderItem={({ item }) => <BoardingItems props={item} data={item} navigation={navigation} bangun={boardName} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(key) => key.id}
        // bounces={false}

        contentContainerStyle={{ gap: 50, paddingHorizontal: 40 }}
      />
    </View>
  );
};

export default Board;
