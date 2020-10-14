import React from 'react'
import { View, Text, Button } from 'react-native'
export default props => {

    function gerarNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator ) + min
    }

    return (
        <>
            <Button title="Executar" onPress={
                function() {
                    {/* // Gerando o número para servir o pai */}
                    const n = gerarNumero(props.min, props.max) 
                    {/* // Enviando para o pai */}
                    props.funcao(n)
                }
            }></Button>
        </>
    )
}