import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledText } from './Paragraph.styles';

const Paragraph = ({ children, bold, thin, big }) => {
    return (
        <StyledText bold={bold} thin={thin} big={big}>
            {children}
        </StyledText>
    );
}

export default Paragraph;
