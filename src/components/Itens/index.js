import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 

export default function Itens({data}) {
    return (
        <View style={styles.Container}>
            <Image
                source={require('../../assets/cactus1.jpg')}
                style={styles.Image}
            />
            <View style={styles.info}>
                <Text style={{color:'#D9D9D9'}}>{data.Region}</Text>
                <Text style={{color:'#FFF'}}>R${data.Price}</Text>
            </View>

            <View style={styles.info}>
                <Text style={{color:'#FFF',fontWeight:'bold', fontSize:16}}>{data.Name}</Text>
                <FontAwesome name="star" size={20} color="yellow" />
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