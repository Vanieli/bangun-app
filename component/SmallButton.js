import React from "react";
import { TouchableOpacity, Image } from "react-native";

export const SmallButton = (props) => {
    const navigation = props.navigation;
    return(
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#FFF",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}

          onPress={navigation}
        >
          <Image
            source={props.source}
            style={{ width: "100%", resizeMode: "center" }}
          />
        </TouchableOpacity>
        );
}