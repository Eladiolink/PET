import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Itens({ data, navigation, img }) {

    let local = `../../assets/flores1.png`

    return (

            <View style={styles.Container}>
                <View style={[styles.ContainerImage]}>
                    <Image
                        source={data.Image}
                        style={styles.Image}
                    />
                </View>

                <View style={styles.info}>
                    <Text style={{ color: '#D9D9D9' }}>{data.Region}</Text>
                    <Text style={{ color: '#000' }}>R${data.Price}</Text>
                </View>

                <View style={styles.info}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>{data.Name}</Text>
                    <FontAwesome name="star" size={20} color="yellow" />
                </View>
            </View>
      

    )
}

const styles = StyleSheet.create({
    Container: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#FFF',
        width: 140,
        height: 180,
        margin: 10,
        index: 2,
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})