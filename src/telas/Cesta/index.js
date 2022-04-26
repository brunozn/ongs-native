import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import Texto from "../../componentes/Texto";


import Topo from "../Cesta/componenetes/Topo";

import Detalhe from "./componenetes/Detalhes";
import Item from "./componenetes/Item";


export default function Cesta({topo, detalhes, itens}) {
    return (
    <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={ ({ nome }) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhe {...detalhes}/>
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />

    </>

    )    
}


const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta :{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

});