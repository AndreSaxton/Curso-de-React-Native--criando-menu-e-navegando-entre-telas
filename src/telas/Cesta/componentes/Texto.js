import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }){
    // Aplica o estilo padrão
    let estilo = estilos.texto;
    // Aplica o textoNegrito se for bold
    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito;
    }

    return <Text style={[ style, estilo ]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegulas",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})
