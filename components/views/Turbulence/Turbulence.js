import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, AppScrollContainer, DevLogo, ScreenTitle } from '../../atoms';
import ItemPreviewlist from '../../organismes/ItemPreviewList/ItemPreviewList';
import { turbulenceList } from '../../../data/turbulenceList';

const Turbulence = () => {
    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <ScreenTitle>
                    Численные методы прогнозирования болтанки
                </ScreenTitle>
                <ItemPreviewlist itemList={turbulenceList} />
            </AppScrollContainer>
        </AppContainer>
    );
}

export default Turbulence;
