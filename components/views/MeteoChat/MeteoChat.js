import React from 'react';
import { View } from 'react-native';
import { AppContainer, AppScrollContainer, DevLogo, ScreenTitle } from '../../atoms';

const MeteoChat = () => {
    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <ScreenTitle>
                    Метеорологический Чат
                </ScreenTitle>
            </AppScrollContainer>
        </AppContainer>
    );
}

export default MeteoChat;
