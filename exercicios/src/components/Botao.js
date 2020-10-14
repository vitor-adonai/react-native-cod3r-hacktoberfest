import React from 'react'
import { Button, StyleSheet } from 'react-native'

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
        <>
            <Button title="Executar!" onPress={executar1} style={estiloo.botao}></Button>
            {/* Vai executar a função */}
            <Button title="Executar!" onPress={executar2()} style={estiloo.botao}></Button>
            <Button title="Executar!" onPress={
                function() {
                    console.warn('Executar 3')
                }} style={estiloo.botao}>

            </Button>
        </>
    )
    
}
const estiloo = StyleSheet.create({
    botao: {
        backgroundColor: '#000',
        color: '#000',
        top: -20,
        paddingTop: 900,
        borderRadius: 9000
    }
})