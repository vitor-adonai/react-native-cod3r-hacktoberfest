import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'
export default props => {

    function listar() {
        return Produtos.map(p => {
            return <Text key={p.id}>{p.name}</Text>
        })
    }

    return (
        <>
        {listar()}
        </>
    )

    /*
    // Opção 2
    return (
        <>
            // Lista sempre é bom usar key para declavar o identificador do elemento *
            {
                Produtos.map( p => {
                    return <Text key={p.id}> O {p.name} tem o valor de R${p.preco}</Text>
                })
            }
        </>
    )
    */
}