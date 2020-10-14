import React, { useState } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import Style from './estilo'

export default function Contador(props) {

    // Dessa forma o increment e decrement não repercute na interface
    //let numero = props.inicial


    const [numero, setNumero] = useState(props.inicial)
    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)

    return (
       <>
            <Text style={style.text}>{numero}</Text>

            <View style={style.botoesArea}>
                <Button title="+" onPress={inc}></Button>
                <Button title="-" onPress={dec}></Button>      
            </View>
       </>
   )
}
const style = StyleSheet.create({
    botoesArea: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 50
    }
})