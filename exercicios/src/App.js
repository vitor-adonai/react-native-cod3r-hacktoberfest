import React from 'react'
import { View, Text } from 'react-native'
import Primeiro from './components/Primeiro'
import X, { Comp1, Comp2} from './components/Multi' // importando da forma com que o react-native funciona

export default function App () {
    return (
        <View>
            <Primeiro></Primeiro>
            <X></X>
            {/* <Primeiro></Primeiro> */}
        </View>
    )
}
