import React from "react"
import {Text, StyleSheet, Image, View, Dimensions} from "react-native"

export const Plantoes = () => (
    <View>
        <View style={styles.solicitacao}>
            <Image 
                style={styles.button1}
            source={require("../../assets/check-cinza.png")} 
            />
            <Text
                style={styles.titleText1}>
                <Text>Solicitação </Text> 
                <Text style={{fontWeight: "600"}}>aceita</Text>
            </Text>
        </View>
        <View style={styles.professional}>
            <View style={{flex:1}}>
                <Image 
                style={styles.button2}
                source={require("../../assets/professional.jpg")} 
                />
            </View>
            <View style={{flex:3}}>
            <Text
                style={styles.titleText2}>
                <Text style={{fontWeight: "600"}}>Janine Leite Teodoro</Text>
            </Text>
            <Text
                style={styles.titleText3}>
                <Text style={{fontWeight: "500"}}>Ligar para o profissional</Text>
            </Text>
            </View>
        </View>
    </View>

)

const styles = StyleSheet.create({
    button1: {
        marginLeft: 30,
        height: 20,
        width: 20,
        marginRight: 10
    },
    titleText1: {
        fontSize: 30,
        color: "#6d7a78",
        fontWeight: "300",
        fontSize: 18
    },
    solicitacao: {
        backgroundColor: "white",
        width:Dimensions.get("screen").width,
        flexDirection: "row",
        paddingTop: 20,
        alignItems: "center",
        paddingBottom: 10
    },
    button2: {
        marginTop: 20,
        marginBottom: 20,
        width: 30,
        height: 30,
        alignSelf: "stretch",
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 30
    },
    titleText2: {
        color: "#6d7a78",
        fontWeight: "500",
        fontSize: 20,
        alignSelf: "center"
    },
    titleText3: {
        color: "#6d7a78",
        fontWeight: "500",
        color: "green",
        fontSize: 16,
        alignSelf: "center"
    },
    professional: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: "#B0BEC5",
        backgroundColor: "white",
        width:Dimensions.get("screen").width,
        flexDirection: "row"
    }
})