import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'
export default props => {

    return (
        <>
            {/* Vai listar os filhos que estão no dentro da chamada do componente */}
            {props.children}
        </>
    )
}