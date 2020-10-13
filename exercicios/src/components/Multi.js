import React from 'react'
import { Text } from 'react-native'

export default function Comp1() {
    return <Text>Componente 1</Text>
}

function Comp2() {
    return <Text>Componente 2</Text>
}

export function Comp3() {
    return <Text>Componente 3</Text>
}

export { Comp1, Comp2 } // importando da forma com que o react-native funciona

// Export default me permite importar atribuindo qualquer nome na importação. { Componente1, Componente2} me obriga a usar o nome Componemte1,2..