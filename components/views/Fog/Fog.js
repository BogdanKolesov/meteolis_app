import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, AppScrollContainer, DevLogo, ScreenTitle } from '../../atoms';
import ItemPreviewlist from '../../organismes/ItemPreviewList/ItemPreviewList';
import { fogList } from '../../../data/fogList';

const Fog = () => {
    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <ScreenTitle>
                    Численные методы прогнозирования туманов
                </ScreenTitle>
                <ItemPreviewlist itemList={fogList} />
            </AppScrollContainer>
        </AppContainer>
    );
}


export default Fog;
