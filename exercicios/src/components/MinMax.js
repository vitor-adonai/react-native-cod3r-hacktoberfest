import React from 'react'
import style from './estilo'
import { Text, View} from 'react-native'

export default function MinMax(props) {
    return (
        <Text style={style.fontG}>
            {props.max} é maior que {props.min}
        </Text>
    )
}