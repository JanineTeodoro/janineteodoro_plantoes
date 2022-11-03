import React from "react"
import {Text, StyleSheet, Image, View, Dimensions, TouchableOpacity} from "react-native"

export const Plantoes = () => (
    <View style={{backgroundColor: "white"}}>
        <View style={styles.solicitacao}>
            <Image 
                style={styles.icone}
            source={require("../../assets/check-cinza.png")} 
            />
            <Text
                style={styles.solicitacaoText}>
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
                style={styles.professionalText}>
                <Text style={{fontWeight: "600"}}>Janine Leite Teodoro</Text>
            </Text>
                <View>
                    <TouchableOpacity style={styles.ligar}
                        activeOpacity={0.6}
                        onPress={() => alert('Ligando...')}>
                        <Image 
                        style={styles.ligacao}
                        source={require("../../assets/phone-green.png")} 
                        />
                        <Text
                        style={styles.professionalCall}>
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
                    style={styles.reportButton}
                    />
                    <Text
                        style={styles.textReport}
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
                    style={styles.avaliarButton}
                    />
                    <Text
                        style={styles.avaliarText}
                    >Avaliar</Text>
                    </View>
                </TouchableOpacity>
            </View>
    </View>

)

const styles = StyleSheet.create({
    icone: {
        marginLeft: 30,
        height: 20,
        width: 20,
        marginRight: 10
    },
    solicitacaoText: {
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
    professionalText: {
        color: "#6d7a78",
        fontWeight: "500",
        fontSize: 20,
        marginTop: 20,
        marginLeft: 40
    },
    ligar: {
        marginTop: 15,
        marginLeft: 40,
        alignItems: "flex-start",
        flexDirection: "row"
    },
    ligacao: {
        width: 25,
        height: 25
    },
    professionalCall: {
        color: "#6d7a78",
        fontWeight: "500",
        color: "#32CD32",
        fontSize: 16,
        marginLeft: 10
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
    reportButton: {
        width: 30,
        height: 30,
        marginTop: 5,
        alignSelf: "center",
        marginLeft: 110
    },
    avaliarButton: {
        width: 30,
        height: 30,
        marginTop: 5,
        alignSelf: "center",
        marginLeft: 30
    },
    textReport: {
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
    avaliarText: {
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