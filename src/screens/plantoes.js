import React from "react"
import {Text, StyleSheet} from "react-native"

export const Plantoes = () => (
    <Text
        style={styles.titleText}
    >Plantões</Text>

)

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        color: 'black',
        fontWeight: "900"
    }
})