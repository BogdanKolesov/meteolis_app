import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const AppScrollContainer = ({ children }) => {
    return (
        <ScrollContainer showsVerticalScrollIndicator={false}>
            {children}
        </ScrollContainer>
    );
}

const ScrollContainer = styled.ScrollView`
    width: 100%;
    height: 100%;
    padding-left: 3%;
    padding-right: 3%;
`

export default AppScrollContainer;
