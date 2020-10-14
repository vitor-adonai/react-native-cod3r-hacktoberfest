import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Estilo from './estilo'
export default props => {

    const Produtos = [
        {id: 1, name: 'Cadeira Gamer'},
        {id: 2, name: 'Mesa Gamer'},
        {id: 3, name: 'Mouse Gamer'},

    ]

    return (
        <>
            <Text>Lista de produtos:</Text>
            <FlatList 
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({item: p}) => {
                    return <Text>{p.id}) {p.name} </Text>
                }}
                >
            </FlatList>
        </>
    )
}