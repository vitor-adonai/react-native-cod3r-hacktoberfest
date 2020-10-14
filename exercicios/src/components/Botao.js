import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default function Aleatorio(props) {
    let executar1 = function () {
        console.warn('Executando 1')
    }

    function executar2() {
        return function() {
            console.warn('Executando 2')
        }
    }
    // FORMAS DE FAZER A FUNÇÃO FUNCIONAR, NO SEGUNDO MODO A EXECUÇÃO É AUTOMÁTICA, POR ISSO TENHO QUE RETORNAR OUTRA FUNÇÃO
    return (
        <View style={estilo.view}>
            <Button title="Executar!" onPress={executar1} color="green"></Button>
            {/* Vai executar a função */}
            <Button title="Executar!" onPress={executar2()} color="orange" ></Button>
            <Button title="Executar!" onPress={
                function() {
                    console.warn('Executar 3')
                }} color="blue">

            </Button>
        </View>
    )
    
}
const estilo = StyleSheet.create({
    view: {
        backgroundColor: '#fff',
        marginTop: -200,
    }
})