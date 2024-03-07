import react from "react";
import { View } from "react-native";


export const SpaceV = () => {
    const heightV = 50;

    return(
        <View style={{alignItems: 'center', }}>
        <View style={{height: heightV/2, width: 30, borderBottomWidth: 1, borderColor: '#000', }}/>
        <View style={{height: heightV/2, width: 80, }}/>
        </View>
    );
}