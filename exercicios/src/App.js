import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Primeiro from './components/Primeiro'
import Multi, { Comp1, Comp2} from './components/Multi' // importando da forma com que o react-native funciona
import Estilo from './components/estilo'

export default function App () {
    return (
        <View style={style.App}>
            {/*<Primeiro></Primeiro> */}
            {/* <Multi></Multi> */}
            <Primeiro></Primeiro>
        </View>
    )
}
const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
