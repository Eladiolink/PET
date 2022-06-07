import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Itens({ data }) {
    return (
        <View style={styles.Container}>
            <View style={{height:70, justifyContent:'center'}}>
            <View style={styles.ContainerImage}>
                <Image
                    source={require('../../assets/cactus1.png')}
                    style={styles.Image}
                />
            </View>
            </View>
            
            <View style={styles.Info}>
                <Text style={{ color: '#848484' }}>Externa</Text>
                <Text style={{ color: '#000', fontWeight: 'bold', }}>Flores1</Text>
                <Text style={{ color: '#000' }}>R$23,90</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        borderRadius: 15,
        marginHorizontal:10,
        backgroundColor: '#FFF',
        height: 80,
        width: 145,
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'center',
    },
    ContainerImage:{
        backgroundColor: '#000',
        borderRadius: 15,
        marginRight:10,
        marginTop:5,
        width: 70,
        height: 70,
        justifyContent:'center',
        alignItems:'center'
    },
    Image: {
        width: 50,
        height: 60,
    }
})