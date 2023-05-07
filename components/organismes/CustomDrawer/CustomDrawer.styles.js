import styled from 'styled-components/native';
import { TouchableOpacity, Text, View } from 'react-native';

export const DrawerGroupStyled = styled.TouchableOpacity`
    margin-bottom: 10px
`

export const DrawerGroupTitle = styled.Text`
    color: black;
    font-size: 30px;
    letter-spacing: 1.5px;
`

export const DrawerSubItem = styled.TouchableOpacity`
    color: black;
    /* display: props => props.isVisible ? 'flex' : 'none'; */


`

export const DrawerSubItemText = styled.Text`
    font-size: 22px;

`

export const DrawerContainer = styled.View`
    padding: 10px
`