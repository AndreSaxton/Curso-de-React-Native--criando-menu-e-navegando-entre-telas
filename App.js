import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { AppRotas } from './src/rotas/AppRotas';

import Home from './src/telas/Home'

function App(){
  return <SafeAreaView style={estilos.tela}>
     {/* <Home /> */}
     <StatusBar />
     <AppRotas />
    </SafeAreaView>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  }
})

export default App;