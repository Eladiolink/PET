import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons } from '@expo/vector-icons'

import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorito from './pages/Favorito';
import Perfil from './pages/Perfil';
import Carrinho from './pages/Carrinho';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="Detail" component={Detail} options={{ 
                    title:'',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor:"#181818",
                        color:"#FFF"
                    }
                }}/>
                 <Stack.Screen name="Favorito" component={Favorito}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#000",
                tabBarStyle: [
                    { color: "#D9D9D9" }
                ]
            }}
        >


            <Tab.Screen
                name="ínicio"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={Favorito}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="star-border" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Carrinho"
                component={Carrinho}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="shopping-cart" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="person" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
