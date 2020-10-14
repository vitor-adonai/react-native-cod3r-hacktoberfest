import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default function Aleatorio(props) {
    const result = parseInt(Math.random() * (props.max - props.min) + props.min)
    return (<Text style={Style.fontG}> O valor sorteado é: { result }</Text>)
}