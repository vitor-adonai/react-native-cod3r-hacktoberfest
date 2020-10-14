import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import Primeiro from './components/Primeiro'
// import Multi, { Comp1, Comp2} from './components/Multi' // importando da forma com que o react-native funciona
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import PropsLeitura from './components/PropsLeitura'
// import Fragmento from './components/Fragmento'
//import Botao from './components/Botao'
// import Contador from './components/Contador'
import Pai from './components/direta/Pai'

export default function App () {
    return (
        <View style={style.App}>
            {/*<Primeiro></Primeiro> */}
            {/* <Multi></Multi> */}
            {/*<Primeiro></Primeiro>*/}
            {/* {3} vai fazer o parâmetro ser enviado com number e não string */}
            {/* <MinMax min={3} max={20} /> */}
            {/* <Aleatorio min={10}  max={100}></Aleatorio> */}
            {/* <PropsLeitura min="10"  max={100}></PropsLeitura> */}
            {/* <Fragmento></Fragmento> */}
            {/* <Botao /> */}
            {/* <Contador inicial={10} passo={20}></Contador> */}
            <Pai></Pai>
            
        </View>
    )
}
const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#3dffff'
    }
})
