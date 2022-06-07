import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }) {

    return (
        <View style={styles.Container}>
            <View style={styles.PerfilContainer}>
                <Image
                    source={require('../../assets/user.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.userInfo}>
                <Text style={{fontSize:30,color:'#848484'}}>Eládio Alves</Text>
                <Text style={{color:'#848484'}}>ELadioTest@gmai.com</Text>
            </View>
            
            <View style={styles.logout}>
            <TouchableOpacity>
                <Text style={styles.logoutButton}>Sair</Text>
            </TouchableOpacity>

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
    image: {
        width: 150,
        height: 150
    },
    PerfilContainer: {
        marginTop: 50,
        marginBottom: 20,
        alignItems: 'center'
    },
    userInfo:{
        alignItems:'center'
    },  
    logoutButton: {
        width: 100,
        backgroundColor: '#FF0000',
        color: '#FFF',
        fontSize: 14,
        borderRadius: 50,
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    logout:{
        alignItems:'center',
        padding:20
    }
})