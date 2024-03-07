import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Text,
} from "react-native";
import Input from "./component/Input";
import { DivAtas } from "./component/DivAtas";
import { SpaceV } from "./component/SpaceVer";
import { Result } from "./component/Result";
import { SmallButton } from "./component/SmallButton";
import { PopUpResult } from "./component/PopUpResul";

export default function App({ route, navigation }) {
  // Exported
  const { data, bangunNama } = route.params;
  const bangun = data.name;
  const buildName = data.name.toLowerCase();

  // Boolean input
  const [boolean, setBooleanInput] = useState(false);
  const onChangeBoolean = (a) => {
    console.log("exported: ", a);
    setBooleanInput(a);
  };

  // Variable
  const [luas, setLuas] = useState(0);
  const [keliling, setKeliling] = useState(0);
  const [a, setA] = useState(0);
  const [t, setT] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const pi = 3.14;

  // Boolean popUp
  const [popUp, setPopup] = useState(false);

  // Test
  console.log("database :", data);

  // Result
  // -- Switch Case
  const calculate = (buildName) => {
    switch (buildName) {
      // Bangun Datar
      case "segitiga":
        setLuas(a * t * 0.5);
        setKeliling(a + b + c);
        break;
      case "lingkaran":
        setLuas(pi * a ** 2);
        setKeliling(pi * a * 2);
        break;
      case "persegi panjang":
        setLuas(a * b);
        setKeliling(2 * (a + b));
        break;
      case "jajar genjang":
        setLuas(a * t);
        setKeliling(2 * (a + b));
        break;
      case "persegi":
        setLuas(a ** 2);
        setKeliling(a * 4);
        break;
      case "trapesium":
        setLuas(0.5 * t * (a + b));
        setKeliling(a + b + c + d);
        break;

      // Bangun Ruang
      case "kubus":
        setLuas(a**3);
        setKeliling((a**2)*6);
        break;
      case "balok":
        setLuas(a * b * c);
        setKeliling(2 * ((a*b) + (a*c) + (b*c)));
        break;
      case "bola":
        setLuas(3/4 * pi * (a**3));
        setKeliling(4 * pi * (a**2));
        break;
      case "piramida":
        setLuas(1/3 * (.5*a*b) * t);
        setKeliling((.5*a*b) + (.5*(.5*a*b)*t));
        break;
      case "tabung":
        setLuas(pi*(a**2)*t);
        setKeliling(2*pi*a* (a + t));
        break;

      default:
        break;
    }
  };

  // -- function
  const showPopUp = () => {
    if (boolean) {
      calculate(buildName);
      return setPopup(true);
    } else {
      return changeOpa();
    }
  };

  // Warning
  // -- Variable
  const [opacityVal, changeOpacity] = useState(0); 

  // -- Function
  function changeOpa() {
    let o = 0;
    for (let i = 1; i > -0.1; i -= 0.08) {
      o++;
      setTimeout(() => {
        changeOpacity(i);
      }, 6 * o);
    }
  }

  return (
    <View style={style.container}>
      {/* -- Warning */}
      <Text style={[style.warn, { opacity: opacityVal }]}>Isi input terlebih dahulu!
      </Text>

      {/* Header */}
      <DivAtas
        style={{
          flex: 0,
          backgroundColor: "#FFF",
          borderBottomEndRadius: 100,
          borderBottomStartRadius: 100,
          width: "100%",
          height: "19%",
        }}
        text={data.name}
      />

      {/* - Center: Form */}
      <View style={style.form}>
        {/* Gambar */}
        <View style={style.gambar}>
          <Image
            source={data.source}
            style={{
              resizeMode: "center",
              // backgroundColor: "#000",
              width: "100%",
              height: 100,
            }}
          />
        </View>

        {/* Form */}
        <View style={style.formInput}>
          {/* Segitiga */}
          {buildName === "segitiga" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Alas"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
              <Input
                name="Tinggi"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={t}
                setVariable={(a) => setT(Number(a))}
              />

              <SpaceV />

              {/* Keliling */}
              <Input
                name="Sisi (b)"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={b}
                setVariable={(a) => setB(Number(a))}
              />
              <Input
                name="Sisi (c)"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={c}
                setVariable={(a) => setC(Number(a))}
              />
            </View>
          )}

          {/* Lingkaran */}
          {bangun.toLowerCase() === "lingkaran" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Jari"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
            </View>
          )}

          {/* Persegi Panjang */}
          {bangun.toLowerCase() === "persegi panjang" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Panjang"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
              <Input
                name="Lebar"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={b}
                setVariable={(a) => setB(Number(a))}
              />
            </View>
          )}

          {/* Jajar Genjang */}
          {bangun.toLowerCase() === "jajar genjang" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Alas"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
              <Input
                name="Tinggi"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={t}
                setVariable={(a) => setT(Number(a))}
              />

              <SpaceV/>

              <Input
                name="Miring"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={b}
                setVariable={(a) => setB(Number(a))}
              />
            </View>
          )}

          {/* Persegi */}
          {bangun.toLowerCase() === "persegi" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Sisi"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
            </View>
          )}

          {/* Trapesium */}
          {bangun.toLowerCase() === "trapesium" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Alas"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
              <Input
                name="Sisi atas"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={b}
                setVariable={(a) => setB(Number(a))}
              />
              <Input
                name="Tinggi"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={t}
                setVariable={(a) => setT(Number(a))}
              />

              <SpaceV/>

              
              <Input
                name="Sisi (c)"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={c}
                setVariable={(a) => setC(Number(a))}
              />
              <Input
                name="Sisi (d)"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={d}
                setVariable={(a) => setD(Number(a))}
              />
            </View>
          )}






          {/* Kubus */}
          {bangun.toLowerCase() === "kubus" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Sisi"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
            </View>
          )}

          {/* Balok */}
          {bangun.toLowerCase() === "balok" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Sisi (a)"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
              <Input
                name="Sisi (b)"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={b}
                setVariable={(a) => setB(Number(a))}
              />
              <Input
                name="Tinggi"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={c}
                setVariable={(a) => setC(Number(a))}
              />
            </View>
          )}

          {/* Bola */}
          {bangun.toLowerCase() === "bola" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Jari"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
            </View>
          )}

          {/* Piramida */}
          {bangun.toLowerCase() === "piramida" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Alas (a)"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
              <Input
                name="Alas (b)"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={b}
                setVariable={(a) => setB(Number(a))}
              />
              <Input
                name="Tinggi"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={t}
                setVariable={(a) => setT(Number(a))}
              />
            </View>
          )}

          {/* Tabung */}
          {bangun.toLowerCase() === "tabung" && (
            <View style={{ alignItems: "center" }}>
              {/* Luas */}
              <Input
                name="Jari"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={a}
                setVariable={(a) => setA(Number(a))}
              />
              <Input
                name="Tinggi"
                onChangeBoolean={onChangeBoolean}
                fillBool={boolean}
                value={t}
                setVariable={(a) => setT(Number(a))}
              />
            </View>
          )}



        </View>
      </View>

      {/* Submit */}
      <View style={style.submit}>
        <TouchableOpacity style={style.touchSubmit} onPress={() => showPopUp()}>
          <Text>Calculate</Text>
          <View
            style={{
              width: 25,
              height: 25,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
              borderRadius: 50,
            }}
          >
            <Text style={{ color: "#FFF" }}>></Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* PopUp */}
      <PopUpResult visible={popUp} luas={Number(luas)} keliling={Number(keliling)} bangunNama={bangunNama}>
      <SmallButton
        source={require("./assets/return.png")}
        navigation={() => setPopup(false)}
      />
      <SmallButton
        source={require("./assets/home.png")}
        navigation={() => {
          setPopup(false)
          navigation.navigate('Home')
        }}
      />
    </PopUpResult>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
    // justifyContent: "center",
    // alignItems: "center",
    alignItems: 'center'
  },
  form: {
    width: "100%",
    height: "67%",
    opacity: 0.6,
    // backgroundColor: "#0F4",
    flexDirection: "row",
  },
  gambar: {
    width: "45%",
    // backgroundColor: '#40F',
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  formInput: {
    width: "55%",
    // backgroundColor: "#F04",
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    width: "100%",
    // backgroundColor: '#0F5',
    height: "14%",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
    opacity: 0.6,
  },
  touchSubmit: {
    width: 120,
    height: 40,
    // backgroundColor: '#B39',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    paddingHorizontal: 10,
    borderWidth: 2,
  },
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
  warn: {
    color: "#F00",
    position: "absolute",
    top: "80%",
    // left: "50%",
    // transform: [{translateX: 50}]
  },
  warnText: {
    color: "#F00",
    position: "absolute",
    // right: "50%",
    // transform: [{translateX: 50}]
  },
});
