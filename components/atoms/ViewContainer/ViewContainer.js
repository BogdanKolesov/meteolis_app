import React from 'react';
import { View, StyleSheet } from 'react-native';
import DevLogo from '../DevLogo';
import { Container } from './ViewContainer.styles';


const ViewContainer = ({ children }) => {
    return (
        <Container contentContainerStyle={{
            flexDirection: 'column',
            paddingBottom: 40,
        }}>
            <DevLogo />
            {children}

        </Container>
    );
}

const styles = StyleSheet.create({})

export default ViewContainer;
