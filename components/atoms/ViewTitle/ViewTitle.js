import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViewTitleText } from './ViewTitle.styles';

const ViewTitle = ({ children, variant }) => {
    return (
        <ViewTitleText variant={variant}>
            {children}
        </ViewTitleText>
    );
}

const styles = StyleSheet.create({})

export default ViewTitle;
