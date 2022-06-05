import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Detail from './pages/Detail';

//const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ínicio"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                />
                
                <Stack.Screen
                    name="User"
                    component={Detail}
                />
                <Stack.Screen
                    name="Perfil"
                    component={Detail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
