import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNav from './BottomNav';

const Drawer = createDrawerNavigator();


const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BottomNav" component={BottomNav} />
     </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})