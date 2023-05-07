import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { drawerItemsData } from '../../../data/dawerItemsData';
import DrawerGroup from '../../molecules/DrawerGroup/DrawerGroup';
import { DrawerContainer } from './CustomDrawer.styles';


const CustomSidebarMenu = (props) => {
    const { state, descriptors, navigation } = props;


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DrawerContainer>
                    {
                        drawerItemsData.map((item, index) => (
                            <DrawerGroup key={index} item={item} />
                        ))
                    }
                </DrawerContainer>
            </DrawerContentScrollView>

        </SafeAreaView>
    );
};



export default CustomSidebarMenu;