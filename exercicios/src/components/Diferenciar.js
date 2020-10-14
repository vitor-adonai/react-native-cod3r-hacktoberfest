import React from 'react'
import { View, Text, Platform } from 'react-native'
import Estilo from './estilo'
export default props => {
    if(Platform.OS == 'android') {
        return (
            <Text style={Estilo.fontG}>
                Você está em um Android
            </Text>
        )
    } else if(Platform.OS = 'IOS') {
        return (
            <Text style={Estilo.fontG}>
                Você está em um IOS
            </Text>
        )
    } else {
        return (
            <Text style={Estilo.fontG}>
                Plataforma não identificada
            </Text>
        )
    }
}