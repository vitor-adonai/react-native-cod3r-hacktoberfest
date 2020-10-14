import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Estilo from '../estilo'
export default props => {

    return (
        <View style={style.botoes}>
            <Button title="+" onPress={props.inc}></Button>
            <Button title="-" onPress={props.dec}></Button>
        </View>
    )
}
const style = StyleSheet.create({
    botoes: {
        flexDirection: 'row'
    }
})