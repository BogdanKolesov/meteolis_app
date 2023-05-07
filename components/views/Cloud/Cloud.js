import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, AppScrollContainer, DevLogo, ScreenTitle } from '../../atoms';
import ItemPreviewlist from '../../organismes/ItemPreviewList/ItemPreviewList';
import { vngoList } from '../../../data/vngoList';

const Cloud = () => {
    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <ScreenTitle>
                    Численные методы прогнозирования высоты нижней границы облаков
                </ScreenTitle>
                <ItemPreviewlist itemList={vngoList} />
            </AppScrollContainer>
        </AppContainer>
    );
}

export default Cloud;
