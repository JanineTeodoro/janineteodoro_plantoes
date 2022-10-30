import React from "react"
import {Text, StyleSheet, View, Button, Dimensions} from "react-native"

export const BarraInferior = () => (
    <View
        style={{...styles.BarraInferior, ...styles.button}}
    >
        <Button
            title="Home"
            color="#7fc7bd"
        />
        <Button
            title="Plantões"
            color="#7fc7bd"
        />
        <Button
            title="Favoritos"
            color="#7fc7bd"
        />
        <Button
            title="Minha conta"
            color="#7fc7bd"
        />
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
    }
})