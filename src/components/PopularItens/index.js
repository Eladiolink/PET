import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Itens({ data }) {
    console.log(data)
    return (
        <View style={styles.Container}>
            <View style={{height:70, justifyContent:'center'}}>
            <View style={styles.ContainerImage}>
                <Image
                    source={data.Image}
                    style={styles.Image}
                />
            </View>
            </View>
            
            <View style={styles.Info}>
                <Text style={{ color: '#848484' }}>{data.Region}</Text>
                <Text style={{ color: '#000', fontWeight: 'bold', }}>{data.Name}</Text>
                <Text style={{ color: '#000' }}>R${data.Price}</Text>

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
        paddingHorizontal:20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1
    },
    ContainerImage:{
        backgroundColor: '#000',
        borderRadius: 15,
        marginRight:10,
        marginTop:10,
        width: 70,
        height: 75,
        justifyContent:'center',
        alignItems:'center'
    },
    Image: {
        width: 50,
        height: 60,
    }
})