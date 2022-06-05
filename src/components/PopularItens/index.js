import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Itens({ data }) {
    return (
        <View style={styles.Container}>
            <View style={{height:70, justifyContent:'center'}}>
            <Image
                source={require('../../assets/cactus1.jpg')}
                style={styles.Image}
            />
            </View>
            
            <View style={styles.Info}>
                <Text style={{ color: '#D9D9D9' }}>Externa</Text>
                <Text style={{ color: '#D9D9D9', fontWeight: 'bold', }}>Flores1</Text>
                <Text style={{ color: '#FFF' }}>R$23,90</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        borderRadius: 15,
        marginHorizontal:10,
        backgroundColor: '#000',
        height: 70,
        width: 145,
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'center'
    },
    Image: {
        width: 60,
        height: 60,
        borderRadius: 15,
        marginRight:10,
    },
    Info:{
        
    }
})