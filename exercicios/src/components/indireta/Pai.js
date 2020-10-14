import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'


export default props => {
    // Criando o estado
    const [ valor, setValor] = useState(0)

    // Função a ser enviada para o filho
    function exibirValor(numero) {
        setValor(numero)
    }

    return (
        <>
            <Text>
                {valor}
            </Text>
            {/* Referenciando uma função para levar ao filho */}
            <Filho min={1} max={999} funcao={exibirValor}></Filho>
        </>
    )
}