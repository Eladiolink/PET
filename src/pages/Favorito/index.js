import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import Favorites from '../../components/Favorites'
const favorites = [
    {
        Name: "Cactu 1",
        Price: "39.90",
        Category: "Cactus",
        Image: require('../../assets/cactus1.png'),
        Region: "Interno"
    },
    {
        Name: "Flores 1",
        Price: "19.90",
        Category: "Flores",
        Image: require('../../assets/flores1.png'),
        Region: "Interno"
    },
    {
        Name: "Samambaia 1",
        Price: "39.90",
        Category: "Samambaia",
        Image: require('../../assets/samambaia.png'),
        Region: "Externo"
    },
]

export default function Home({ navigation }) {

    return (
        <View style={styles.Container}>
            <View style={styles.Top}>
                <Text style={styles.TextTop}>Favoritos</Text>
                <MaterialIcons name="star" size={35} color={"yellow"}/>
            </View>

            <ScrollView>
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
               <Favorites />
            </ScrollView>
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

    },
    
})