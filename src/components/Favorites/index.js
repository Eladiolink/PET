import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Favorites({ data, navigation, img }) {

    let local = require(`../../assets/samambaia.png`)

    return (
        <View >
            <TouchableOpacity style={styles.Container}>
                <View style={styles.ContainerImage}>
                    <Image
                        source={local}
                        style={styles.Image}
                    />
                </View>

                <View style={styles.ContainerInfo}>
                    <View style={styles.info}>
                        <Text style={{ color: '#848484' }}>interna</Text>
                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 24 }}>Flores1</Text>
                    </View>

                    <View style={styles.price}>
                        <Text style={{ color: '#848484' }}>Preço</Text>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>R$23</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#FFF',
        width: '95%',
        flexDirection: 'row',
        margin: 10,
        shadowColor: '#470000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 1
    },
    ContainerInfo: {
        flexDirection: 'row',
        width: "60%",
        justifyContent: 'space-between'
    },
    ContainerImage: {
        backgroundColor: "#000",
        borderRadius: 20,
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: 80,
        height: 100,

    },
    info: {
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    price: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
})