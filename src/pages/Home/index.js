import { Text, View, Image, StyleSheet,TextInput } from 'react-native'
import React from 'react'

export default function Home(){
    return (
      <View style={styles.Container}>
        <View style={styles.Top}>
            <Text style={styles.TextTop}>Plantas para a sua Casa Verde</Text>
            <Image
                source={require('../../assets/Usuário.png')}
                style={styles.image}
            />
        </View>
        <View style={styles.Search}>
            <TextInput style={styles.SearchInput} placeholder='Pesquisar'/>
        </View>
      </View>
    )

}

const styles = StyleSheet.create({
    Container:{
        marginTop:50,
        flex:1,
        width:'100%',
        backgroundColor:'#F2F6FF'
    },
    TextTop:{
        fontSize:24,
        fontWeight:'bold',
        width:'60%',
    },
    Top:{
        marginTop: 15,
        flexDirection: 'row',
        justifyContent:'center'
    },
    Search:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center'
    },
    SearchInput:{
        lineHeight:20,
        padding:10,
        width:'50%',
        borderRadius:50,
        backgroundColor:'#FFF'
    },
    image:{
        width:70,
        height:70,
    },
})