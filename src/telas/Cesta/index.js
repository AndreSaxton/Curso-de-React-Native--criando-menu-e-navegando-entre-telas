import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from './componentes/Texto';
 
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import { useRoute } from '@react-navigation/native';

export default function Cesta() {
    const route = useRoute();

    const { topo, detalhes, itens } = route.params;

    return <>
     <FlatList
       data = {itens.lista}
       renderItem = {Item}
       keyExtractor = {({ nome }) => nome }
       ListHeaderComponent={() =>{
        return <>
         <Topo {...topo} />
         <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
         </View>
        </>
       }}
     />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fonSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
