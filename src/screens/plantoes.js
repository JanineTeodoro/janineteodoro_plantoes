import React from "react"
import {Text, StyleSheet, Image, View, Dimensions, TouchableOpacity} from "react-native"

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
                source={require("../../assets/professional.png")} 
                />
            </View>
            <View style={{flex:3}}>
            <Text
                style={styles.titleText2}>
                <Text style={{fontWeight: "600"}}>Janine Leite Teodoro</Text>
            </Text>
                <View style={styles.ligar}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        underlayColor="#7fc7bd"
                        onPress={() => alert('Reportar')}>
                        <Image 
                        style={styles.button3}
                        source={require("../../assets/phone-green.png")} 
                        />
                        <Text
                        style={styles.titleText3}>
                        <Text style={{fontWeight: "500"}}>Ligar para o profissional</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
            <View style={styles.buttonsCenter}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    underlayColor="#7fc7bd"
                    onPress={() => alert('Reportar')}>
                    <View>
                    <Image 
                    source={require("../../assets/alert-red.png")} 
                    style={styles.imageButton1}
                    />
                    <Text
                        style={styles.textButton1}
                    >Reportar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.6}
                    underlayColor="#7fc7bd"
                    onPress={() => alert('Avaliar')}>
                    <View>
                    <Image 
                    source={require("../../assets/star-blue.png")} 
                    style={styles.imageButton2}
                    />
                    <Text
                        style={styles.textButton2}
                    >Avaliar</Text>
                    </View>
                </TouchableOpacity>
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
        marginTop: 20,
        marginLeft: 40
    },
    ligar: {
        width:Dimensions.get("screen").width,
        marginTop: 15,
        marginLeft: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    button3: {
        width: 25,
        height: 25
    },
    titleText3: {
        color: "#6d7a78",
        fontWeight: "500",
        color: "#32CD32",
        fontSize: 16,
        marginLeft: 40
    },
    professional: {
        borderTopWidth: 0.5,
        borderColor: "#B0BEC5",
        backgroundColor: "white",
        width:Dimensions.get("screen").width,
        flexDirection: "row"
    },
    buttonsCenter: {
        width:Dimensions.get("screen").width,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: "#B0BEC5",
        padding: 10
    },
    imageButton1: {
        width: 30,
        height: 30,
        marginTop: 5,
        alignSelf: "center",
        marginLeft: 110
    },
    imageButton2: {
        width: 30,
        height: 30,
        marginTop: 5,
        alignSelf: "center",
        marginLeft: 30
    },
    textButton1: {
        width: 98,
        height: 40,
        marginBottom: -15,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "700",
        color: "red",
        marginLeft: 110,
        marginBottom: 2
    },
    textButton2: {
        width: 98,
        height: 40,
        marginBottom: -15,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "700",
        color: "#1E90FF",
        marginLeft: 30,
        marginBottom: 2
    }
})