import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const ScreenTitle = ({ children }) => {
    return (
        <Title>
            {children}
        </Title>
    );
}

const Title = styled.Text`
    padding-top: 10px;
    padding-bottom: 20px;
    font-size: 30px;
    letter-spacing: 0.7px;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    font-family: Roboto_100Thin;
`

export default ScreenTitle;
