import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'
export default props => {
    let num = props.num
    return(
        <View>
            {/* Operador ternário dentro do JSX */}
            {num % 2 == 0 ?
                <Text style={Estilo.fontG}>Par</Text>
                :
                <Text style={Estilo.fontG}>Impar</Text>
            }
        </View>
        
    )
    
}