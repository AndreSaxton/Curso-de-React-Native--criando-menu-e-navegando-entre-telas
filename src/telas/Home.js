import React from 'react';
import Produtores from './Produtores/componentes/Produtores';
import Topo from './Produtores/componentes/Topo';

export default function Home() {
    return <Produtores topo={Topo} melhoresProdures={false} />
}