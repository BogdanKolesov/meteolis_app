import styled from 'styled-components/native';
import { TouchableOpacity, View, Text } from 'react-native'

export const CollapsViewContainer = styled.TouchableOpacity`
    border-width: 1px;
    border-color: #000;
    border-top-right-radius: 10px;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
`
export const CollapsViewTitle = styled.Text`
    font-size: 20px;
    color: #000;
    letter-spacing: 0.4px;
    text-align: center;
`
export const CollapsContent = styled.Text`
    font-size: 14px;
    letter-spacing: 0.1px;
    color: #000;
`