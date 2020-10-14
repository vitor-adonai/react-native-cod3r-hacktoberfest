import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'
export default props => {

    return (
        <Text style={Estilo.fontG}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}