import React from "react"
import {Text, StyleSheet, View, Button, Dimensions, TouchableHighlight, Image} from "react-native"
export const BarraInferior = () => (
    <View
        style={{...styles.BarraInferior, ...styles.button}}
    >
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            onPress={() => alert('Pressed!')}>
            <Image 
            source={require("../../assets/home.png")} 
            style={styles.imageButton}
            />
        </TouchableHighlight>
        <Button
            title="Plantões"
            color="#7fc7bd"
        />
        <Button
            title="Favoritos"
            color="#7fc7bd"
        />
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            onPress={() => alert('Pressed!')}>
            <Image 
            source={require("../../assets/seta.png")} 
            style={styles.imageButton}
            />
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    BarraInferior: {
        flex: 0,
        flexDirection: "row",
        width: Dimensions.get("window").width
    },
    button:{
        alignSelf: "stretch"
    },
    imageButton: {
        width: 40,
        height: 40,
        backgroundColor: '#7fc7bd'
    }
})