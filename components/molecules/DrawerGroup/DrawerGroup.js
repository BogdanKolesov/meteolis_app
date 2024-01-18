import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { DrawerGroupStyled, DrawerGroupTitle, DrawerSubItem, DrawerSubItemText } from '../../organismes/CustomDrawer/CustomDrawer.styles';
import { useNavigation } from '@react-navigation/native';

const DrawerGroup = ({ item }) => {
    const navigation = useNavigation()
    const [isVisible, setIsVisible] = useState(false);
    return (

        <>
            {
                item.title === 'Главная' ? <DrawerGroupStyled item={item}>
                    <DrawerGroupTitle onPress={() => navigation.navigate('Home')}>{item.title}</DrawerGroupTitle>
                </DrawerGroupStyled> : (
                    <DrawerGroupStyled item={item}>
                        <DrawerGroupTitle onPress={() => setIsVisible(!isVisible)}>{item.title} {isVisible ? '-' : '+'}</DrawerGroupTitle>
                        {
                            item.items.map((subItem, index) => (
                                <DrawerSubItem
                                    onPress={() => navigation.navigate(subItem.link)}
                                    isVisible={isVisible} style={{ display: isVisible ? 'flex' : 'none' }} item={subItem} key={index}>
                                    <DrawerSubItemText>
                                        <Text>{subItem.text}</Text>
                                    </DrawerSubItemText>
                                </DrawerSubItem>
                            ))
                        }
                    </DrawerGroupStyled>
                )
            }
        </>);
}

const styles = StyleSheet.create({})

export default DrawerGroup;
