import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, AppScrollContainer, DevLogo, ScreenTitle } from '../../atoms';
import ItemPreviewlist from '../../organismes/ItemPreviewList/ItemPreviewList';
import { icingList } from '../../../data/icingList';

const Ice = () => {
    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <ScreenTitle>
                    Численные методы прогнозирования обледенения
                </ScreenTitle>
                <ItemPreviewlist itemList={icingList} />
            </AppScrollContainer>
        </AppContainer>
    );
}


export default Ice;
