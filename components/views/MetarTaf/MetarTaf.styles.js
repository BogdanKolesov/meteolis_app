import { View } from 'react-native';
import styled from 'styled-components/native';
import { CalcInput } from '../../atoms';
import { Input } from '../../atoms/CalcInput/CalcInput';


export const MetarTafInputView = styled.View`
flex-direction: row;
margin-bottom: 10px;
justify-content: center;
width: 100%;
`

export const MetarTafInput = styled(Input)`
    margin: 10px;
`

export const MetarTafDataContainer = styled.View`
    margin-top: 10px;
    margin-bottom: 1px;
    padding-bottom: 2px;
    border-color: black;
    border-bottom-width: 2px;
`