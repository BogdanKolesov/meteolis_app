import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native'

export const ItemPreviewContainer = styled.TouchableOpacity`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-color: black;
    border-width:1px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
`

export const ItemPreviewText = styled.Text`
    font-size: 18px;
    letter-spacing: 0.2px;
    font-family: Roboto_700Bold;
`