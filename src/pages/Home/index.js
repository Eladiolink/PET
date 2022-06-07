import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import Categories from '../../components/categories';
import Itens from '../../components/Itens';
import PopularItens from '../../components/PopularItens'

const img = ['../../assets/cactus1.png']

const products = [
    {
        Name: "Cactu 1",
        Price: "39.90",
        Category: "Cactus",
        Image: require('../../assets/cactus1.png'),
        Region: "Interno"
    },
    {
        Name: "Cactu 2",
        Price: "29.90",
        Category: "Cactus",
        Image: require('../../assets/cactus2.png'),
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
        Name: "Flores 2",
        Price: "39.90",
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

const popular = [
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

    const [categorySelected, setCategorySelected] = useState("Todas")
    const [productsFiltered, setProductsFiltered] = useState([])
    const categories = ["Todas", "Cactus", "Flores", "Samambaia"]

    const scrollProductsRef = useRef();

    const resetScroll = () => {
        scrollProductsRef.current?.scrollTo({
            x: 0,
            y: 0,
            animated: true,
        });
    }

    useEffect(() => {
        if (categorySelected === "Todas") {
            setProductsFiltered(products)
        } else {
            setProductsFiltered(products.filter(item => item.Category === categorySelected))
        }

        resetScroll()
    }, [categorySelected])

    return (
        
        <View style={styles.Container}>
            {/* Top */}
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
        
         {/* Categories */}
            <View style={{ height: 100, marginTop: 20 }}>
                <ScrollView style={styles.Categories} showsHorizontalScrollIndicator={false} horizontal>
                    {categories.map((item, index) =>
                        <Categories
                            select={() => setCategorySelected(item)}
                            category={item}
                            checked={categorySelected === item} key={index}
                        />)}
                </ScrollView>
            </View>
           {/* Popular */}
            <View style={{ height: 210, width: '100%' }}>
                <ScrollView ref={scrollProductsRef} style={styles.Products} showsHorizontalScrollIndicator={false} horizontal scrollsToTop>
                    {productsFiltered.map((item, index) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail', { item: item })}
                            key={index}
                        >
                            <Itens data={item} img={item.Image} />
                        </TouchableOpacity>)}
                </ScrollView>
            </View>

            <Text style={{ paddingLeft: 20, marginVertical: 20, fontSize: 24, fontWeight: 'bold' }}>Popular</Text>

            <View style={{ height: 80 }}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {popular.map((item, index) =>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail', { item: item })}
                            key={index}>
                            <PopularItens data={item}/>
                        </TouchableOpacity>)}
                </ScrollView>
            </View>

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
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.6,
        elevation: 1
    },
    SearchIcon: {
        paddingRight: 10,
        paddingLeft: 5
    },
    Categories: {
        width: "100%"
    },
    Products: {
        width: "100%",
        maxWidth: '100%'
    }
})