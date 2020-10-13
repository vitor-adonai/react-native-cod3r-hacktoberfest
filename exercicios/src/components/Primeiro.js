import React from 'react'
import {View, Text} from 'react-native'
import Estilo from './estilo'

export default function Primeiro () {
    console.warn('OPAA!')
    return (
        <View>
            <Text style={Estilo.fontG}>Primeiro</Text>
        </View>
    )
}