import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Texto from './Texto';
import Botao from './Botao';
import useTextos from "../../../hooks/useTextos";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }){
    const navigation = useNavigation();
    const { botaoComprar } = useTextos();

    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricao}> { descricao } </Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>

        <TouchableOpacity 
            style={estilos.botao} 
            onPress = {() => navigation.navigate('HomeScreen', { 
                compra: { nome, timestamp: + new Date() }
            })} >
            <Texto style={estilos.botao}>{ botaoComprar }</Texto>
        </TouchableOpacity>

    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        // fontFamily: "MontserratBold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        // fontFamily: "MontserratRegular",
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight:26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop: 16,
    },
})