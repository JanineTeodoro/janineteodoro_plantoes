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
            <Text>Home</Text>
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
            <Text>Plantões</Text>
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
            <Text>Favoritos</Text>
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
    },
    textButton: {
        backgroundColor: '#7fc7bd'
    }
})