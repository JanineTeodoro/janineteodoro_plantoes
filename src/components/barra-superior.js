import React from "react"
import {Text, StyleSheet, View, Dimensions, Image, TouchableWithoutFeedback} from "react-native"

export const BarraSuperior = () => (
    <View
        style={styles.BarraSuperior}>
        <TouchableWithoutFeedback
            activeOpacity={0.6}
            onPress={() => alert('Retorno')}>
                <Image 
                source={require("../../assets/arrow-left-white.png")} 
                style={styles.imageButton}
                />
        </TouchableWithoutFeedback> 
        <Text
            style={styles.textButton}
        >Plantões</Text>
    </View>
)

const styles = StyleSheet.create({
    BarraSuperior: {
        backgroundColor: "#006557",
        height: 107,
        flexDirection: "row",
        justifyContent: "space-around",
        width: Dimensions.get("window").width
    },
    imageButton: {
        width: 30,
        height: 30,
        marginTop: 65,
        marginLeft: -20
    },
    textButton: {
        width: 98,
        height: 20,
        textAlign: "center",
        fontWeight: "500",
        fontSize: 18,
        color: "white",
        marginTop: 67,
        marginRight: 110
    }
})