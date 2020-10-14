import React, { useState } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import Style from './estilo'

// Usando destructuring para definir valor padrão na props
export default function Contador({ inicial = 0, passo = 1}) { 
    // Dessa forma o increment e decrement não repercute na interface
    //let numero = props.inicial


    const [numero, setNumero] = useState(inicial)
    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)

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