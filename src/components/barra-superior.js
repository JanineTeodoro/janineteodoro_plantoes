import React from "react"
import {Text, StyleSheet, View, Dimensions, TouchableHighlight, Image} from "react-native"

export const BarraSuperior = () => (
    <View
        style={styles.BarraSuperior}>
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            onPress={() => alert('Pressed!')}>
            <Image 
            source={require("../../assets/seta.png")} 
            style={styles.imageButton}
            />
        </TouchableHighlight>
        <Text>Plantões</Text>
    </View>
)

const styles = StyleSheet.create({
    BarraSuperior: {
        flex: 0.10,
        flexDirection: "row",
        justifyContent: "space-around",
        width: Dimensions.get("window").width
    },
    imageButton: {
        width: 40,
        height: 40,
        backgroundColor: '#7fc7bd'
    }
})