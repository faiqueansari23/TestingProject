import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNav from './DrawerNav'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator

const styles = StyleSheet.create({})