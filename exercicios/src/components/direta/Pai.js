import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'


export default props => {

    return (
        <>
            <Filho a={10} ></Filho>
            <Filho b={110} ></Filho>
        </>
    )
}