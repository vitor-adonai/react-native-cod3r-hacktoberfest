import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ContadorBotoes from './ContadorBotoes'
import ContadorDisplay from './ContadorDisplay'

export default props => {

    const [num, setNum] = useState(0)
    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text>Contador</Text>
            <ContadorDisplay num={num}></ContadorDisplay>
            <ContadorBotoes inc={inc} dec={dec}></ContadorBotoes>
        </>
    )
}