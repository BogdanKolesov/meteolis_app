import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const CalcInput = ({ onChangeText, value, keyboardType, ...props }) => {
    return (
        <Input
            keyboardType={keyboardType ? keyboardType : 'numeric'}
            onChangeText={onChangeText}
            value={value}>

        </Input>
    );
}

export const Input = styled.TextInput`
    font-size: 16px;
    padding: 5px;
    width: 20%;
    border-color: #000;
    border-width: 1px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export default CalcInput;
