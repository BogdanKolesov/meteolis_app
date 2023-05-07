import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native'
import { AppContainer, ScreenTitle } from '../../atoms';

export const CalcViewTitle = styled(ScreenTitle)`
    font-size: 20px;
`
export const AppCalcContainer = styled(AppContainer)`
    position: relative;
`

export const GoBackButton = styled.TouchableOpacity`
    position: absolute;
    height: 40px;
    width: 40px;
    bottom: 1%;
    right: 5%;
    border-width: 1.5px;
    border-radius: 100px;
    border-color: #000;
    justify-content: center;
    align-items: center;
`

export const CalcContent = styled.View`
    width: 100%;
`