import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import Categories from '../../components/categories';
import Itens from '../../components/Itens';

export default function Home() {
    return (
        <View style={styles.Container}>
            <View style={styles.Top}>
                <Text style={styles.TextTop}>Plantas para a sua Casa Verde</Text>
                <Image
                    source={require('../../assets/user.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.Top}>
                <View style={styles.SectionStyle}>
                    <MaterialIcons name='search' size={32} color='#D9D9D9' style={styles.SearchIcon} />
                    <TextInput style={{ flex: 1, color: '#D9D9D9', fontSize: 20 }} placeholder="Pesquisar" underlineColor="transparent" />

                </View>

                <TouchableOpacity style={styles.Filter}>
                    <MaterialIcons
                        name='filter-list'
                        size={40}
                        color='#fff'
                    />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.Categories} horizontal={true}>
                <View style={{flexDirection:'row',height:0}}>
                    <Categories category='Todes' checked={true} />
                    <Categories category='Cactus' checked={false} />
                    <Categories category='Flores' checked={false} />
                </View>

            </ScrollView>

            <ScrollView horizontal={true}>
                <Itens />
                <Itens />
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    Categories: {
        marginBottom: 0,
        padding: 0,
        paddingVertical: 20,
        height: 0,
        borderColor: '#000'
    },
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
    Search: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    SearchInput: {
        lineHeight: 20,
        padding: 10,
        width: '50%',
        borderRadius: 50,
        color: '#D9D9D9',
        backgroundColor: '#FFF'
    },
    image: {
        width: 60,
        height: 60,
    },
    Filter: {
        backgroundColor: '#181818',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',
        height: 60,
        width: '60%',
        borderRadius: 20,
    },
    SearchIcon: {
        paddingRight: 10,
        paddingLeft: 5
    }
})