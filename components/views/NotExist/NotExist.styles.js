import styled from 'styled-components/native';
import { View, TouchableOpacity, Text } from 'react-native'

export const NotExistContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const NotExistTitle = styled.Text`
    font-size: 20px;
    letter-spacing: 0.5px;
    text-align: center;
    font-family: Roboto_100Thin;
    margin-bottom: 20px;
`

export const NotExistGoBackButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-width: 1px;
    border-color: #000;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const NotExistButtonText = styled.Text`
    font-size: 16px;
    letter-spacing: 0.2px;
    color: #000;
`