import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

import Produtor from './Produtor'
import useProdutores from '../../../hooks/useProdutores';
import useTextos from "../../../hooks/useTextos";

export default function Produtores({ topo: Topo, melhoresProdutores = true }) {
    const navigation = useNavigation();
    const route = useRoute();

    const [ exibeMensagem, setExibeMensagem ] = useState(false);

    const [titulo, lista] = useProdutores();
    const { tituloProdutores, mensagemCompra } = useTextos();

    const nomeCompra = route.params?.compra.nome;
    const timestampCompra = route.params?.compra.timestamp;
    const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

    useEffect(() => {
        setExibeMensagem(!!nomeCompra);
        let timeout;

        if (nomeCompra){
            timeout = setTimeout(() => {
                setExibeMensagem(false);
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [timestampCompra]);

    const TopoLista = () => {
        return <>
            <Topo />

            { exibeMensagem &&  <Text style={estilos.compra}>{ mensagemCompleta }</Text> }
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>
    }

    // return <Text>{ titulo }</Text>
    return <FlatList 
        data={lista}
        renderItem={({ item }) => <Produtor {...item}
        aoPressionar={() => {
            navigation.navigate('Produtor', item);
        }}
        />}
        keyExtractor={({nome}) => nome }
        ListHeaderComponent={TopoLista}
         />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },
    compra:{
        backgroundColor: '#EAF5F3',
        padding: 16,
        color: '#464646',
        fontSize: 16,
        lineHeight: 26,
    },
})