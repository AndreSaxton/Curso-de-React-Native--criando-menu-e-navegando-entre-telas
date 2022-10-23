import React from 'react';
import Produtores from './Produtores/componentes/Produtores'
import Topo from './Produtores/componentes/Topo';

export default function MelhoresProdures() {
    return <Produtores topo={Topo} melhoresProdures={true} />
}