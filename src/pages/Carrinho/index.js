import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import CarrinhoComponent from '../../components/CarrinhoComponent'

export default function Home({ navigation }) {

    return (
        <View style={styles.Container}>
            <View style={styles.Top}>
                <Text style={styles.TextTop}>Carrinho</Text>
                <MaterialIcons name="shopping-cart" size={35} color={"#D9D9D9"}/>
            </View>
            
            <CarrinhoComponent />
    
        </View>
    )

}

const styles = StyleSheet.create({
    Container: {
        marginTop: 50,
        flex: 1,
        width: '100%',
        backgroundColor: '#F2F6FF',
    },
    TextTop: {
        fontSize: 24,
        fontWeight: 'bold',
        width: '60%',
    },
    Top: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
   image: {
        width: 60,
        height: 60,

    }
})