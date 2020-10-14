import React from 'react'
import { Text } from 'react-native'

export default props => {
    // props.min = 99999 Não posso reatibuir um valor a propriedade
    const minimo = parseInt(props.min) + 200 // forma correta
    return (
        <>
            <Text>Propriedades são somente leitura. {minimo}</Text>
        </>
    )
}