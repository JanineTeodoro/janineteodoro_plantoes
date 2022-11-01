 import React from "react"
import {Text, StyleSheet, View, Dimensions, TouchableHighlight, Image} from "react-native"
export const BarraInferior = () => (
    <View
        style={{...styles.BarraInferior, ...styles.button}}
    >
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            onPress={() => alert('Pressed!')}>
           <View>
            <Image 
            source={require("../../assets/home-cinza.png")} 
            style={styles.imageButton}
            />
            <Text
                style={styles.textButton}
            >Home</Text>
            </View>
            </TouchableHighlight>
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            color="purple"
            onPress={() => alert('Pressed!')}>
            <View>
            <Image 
            source={require("../../assets/plantoes-verde.png")} 
            style={styles.imageButton}
            />
            <Text
                style={styles.textButton}
            >Plantões</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            color="purple"
            onPress={() => alert('Pressed!')}>
            <View>
            <Image 
            source={require("../../assets/cards-heart-outline-cinza.png")} 
            style={styles.imageButton}
            />
            <Text
                style={styles.textButton}
            >Favoritos</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            onPress={() => alert('Pressed!')}>
            <View>
            <Image 
            source={require("../../assets/account-cinza.png")} 
            style={styles.imageButton}
            />
            <Text
                style={styles.textButton}
            >Minha conta</Text>
            </View>
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    BarraInferior: {
        flex: 0,
        backgroundColor: "#7fc7bd",
        flexDirection: "row",
        width: Dimensions.get("window").width
    },
    button:{
        alignSelf: "stretch"
    },
    imageButton: {
        width: 30,
        height: 30,
        marginTop: 5,
        backgroundColor: '#7fc7bd',
        alignSelf: "center"
    },
    textButton: {
        width: 98,
        height: 40,
        marginBottom: -15,
        textAlign: "center",
        backgroundColor: '#7fc7bd',
        fontWeight: "900"
    }
})