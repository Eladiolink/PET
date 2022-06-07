import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import DropShadow from "react-native-drop-shadow";
import { FontAwesome } from '@expo/vector-icons';

export default function Itens({ data }) {
    return (

        <View style={styles.Container}>
                <View style={{ height: 70, justifyContent: 'center' }}>
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
        marginHorizontal: 10,
        backgroundColor: '#FFF',
        height: 80,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    ContainerImage: {
        backgroundColor: '#000',
        borderRadius: 15,
        marginRight: 10,
        marginTop: 10,
        width: 70,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: 50,
        height: 60,
    }
})