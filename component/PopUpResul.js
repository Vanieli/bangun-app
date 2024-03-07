import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { Result } from "./Result";

export const PopUpResult = (props) => {
  const lsls = props.luas;
  const ksks = props.keliling;

  const [ luas, setLuas ] = useState();
  const [ keliling, setKeliling ] = useState();

  const luasS = String(lsls);
  const kelilingS = String(ksks);

  useEffect(() => {
    // Update luas if it contains a decimal point
    if (luasS.includes(".")) {
      setLuas(parseFloat(lsls).toFixed(2));
    } else {
      setLuas(lsls);
    }
    
  
    // Update keliling if it contains a decimal point
    if (kelilingS.includes(".")) {
      setKeliling(parseFloat(ksks).toFixed(2));
    }else {
      setKeliling(ksks);
    }
  })

  return (
    <View>
      {/* PopUp */}
      <Modal transparent visible={props.visible}>
        <View style={style.popup}>
          <View style={style.messagepop}>
            <Text style={style.popTitle}>Hasil</Text>
                <Result name="Luas" value={luas} />
                <Result name="Keliling" value={keliling} />
          </View>

          {/* Button Popup */}
          <View
            style={{
              width: 220,
              // height: 40,
              // backgroundColor: "#F05",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 20,
            }}
          >
            {/* <SmallButton source={require('../assets/triangle.png')} navigation={() => setPopup(false)} /> */}
            {props.children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  popup: {
    flex: 1,
    backgroundColor: "#00000044",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  messagepop: {
    width: 220,
    height: 160,
    backgroundColor: "#FFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  popTitle: {
    fontWeight: "600",
    fontSize: 18,
    position: "absolute",
    top: 20,
  },
});
