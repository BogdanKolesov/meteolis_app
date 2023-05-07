import { View, Text } from 'react-native'
import styled from 'styled-components/native';


export const CalcContainer = styled.View`
    width: 100%;
    margin-top: 15px;
`

export const CalcItem = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`

export const CalcTextContainer = styled.View`
    flex-wrap: wrap;
    width: 60%;
    flex: 1;
`

export const CalcText = styled.Text`
    width: 100%;
    font-size: ${({ result }) => result ? '20px' : '16px'};
    border-top-width: ${({ result }) => result ? '1.5px' : 0};
    border-color: #D3D3D3;
    color: #000;
    letter-spacing: 1.1px;
    padding-left: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 10px;
`