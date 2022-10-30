import React from "react"
import {Text, StyleSheet, View, Button, Dimensions} from "react-native"

export const BarraSuperior = () => (
    <View
        style={styles.BarraSuperior}>
        <Button
            title="Voltar"
            color="red"
            />
        <Text>Plantões</Text>
    </View>
)

const styles = StyleSheet.create({
    BarraSuperior: {
        flex: 0.10,
        flexDirection: "row",
        justifyContent: "space-around",
        width: Dimensions.get("window").width
    }
})