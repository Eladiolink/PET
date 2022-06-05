import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Itens() {
    return (
        <View style={styles.Container}>
            <Image
                source={require('../../assets/cactus1.jpg')}
                style={styles.Image}
            />
            <View style={styles.info}>
                <Text style={{color:'#D9D9D9'}}>Interna</Text>
                <Text style={{color:'#FFF'}}>R$39,90</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        borderRadius: 20,
        padding:5,
        backgroundColor:'#000',
        height:200,
        margin:10
    },
    Image:{
        width:150,
        height:150,
        borderRadius: 20
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})