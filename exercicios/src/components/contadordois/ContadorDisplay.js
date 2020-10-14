import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'
export default props => {

    return (
        <View style={style.view}>
            <Text style={[Estilo.fontG, style.displayText]}>
                {props.num}
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    view: {
        backgroundColor: '#000',
        padding: 20,
        width: 100,

    },
    displayText: {
        color: 'white'
    }
})