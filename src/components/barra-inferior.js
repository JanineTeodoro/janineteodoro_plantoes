 import React from "react"
import {Text, StyleSheet, View, Dimensions, Image, TouchableOpacity} from "react-native"
export const BarraInferior = () => (
    <View
        style={{...styles.BarraInferior, ...styles.button}}
    >
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            onPress={() => alert('Home')}>
           <View>
            <Image 
            source={require("../../assets/home-cinza.png")} 
            style={styles.imageButton}
            />
            <Text
                style={styles.textButton}
            >Home</Text>
            </View>
            </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            onPress={() => alert('Plantões')}>
            <View>
            <Image 
            source={require("../../assets/plantoes-verde.png")} 
            style={styles.imageButton}
            />
            <Text
                style={styles.plantoesButton}
            >Plantões</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            onPress={() => alert('Favoritos')}>
            <View>
            <Image 
            source={require("../../assets/cards-heart-outline-cinza.png")} 
            style={styles.imageButton}
            />
            <Text
                style={styles.textButton}
            >Favoritos</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#7fc7bd"
            onPress={() => alert('Minha conta')}>
            <View>
            <Image 
            source={require("../../assets/account-cinza.png")} 
            style={styles.imageButton}
            />
            <Text
                style={styles.textButton}
            >Minha conta</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    BarraInferior: {
        flex: 0,
        backgroundColor: "white",
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
        backgroundColor: 'white',
        alignSelf: "center"
    },
    textButton: {
        width: 98,
        height: 40,
        marginBottom: -15,
        textAlign: "center",
        backgroundColor: 'white',
        fontSize: 14,
        fontWeight: "700",
        color: "#6d7a78"
    },
    plantoesButton: {
        width: 98,
        height: 40,
        marginBottom: -15,
        textAlign: "center",
        backgroundColor: 'white',
        fontSize: 14,
        fontWeight: "700",
        color: "#006557"
    }
})