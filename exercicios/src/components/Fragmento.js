import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default function Aleatorio(props) {
    let componente = 1
    /*
    return (
        [
            <Text style={Style.fontG}> Componente { componente++ } </Text>,
            <Text style={Style.fontG}> Componente { componente++ } </Text>,
            <Text style={Style.fontG}> Componente { componente++ } </Text>,
        ]
    
    )
   
   return (
       <React.Fragment>
        <Text style={Style.fontG}> Componente { componente++ } </Text>
       </React.Fragment>
   )
    */
   return (
       <>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
            <Text style={Style.fontG}>Componente:  {componente++}</Text>
       </>
   )
}