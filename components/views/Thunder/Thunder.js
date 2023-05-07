import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, AppScrollContainer, DevLogo, ScreenTitle } from '../../atoms';
import ItemPreviewlist from '../../organismes/ItemPreviewList/ItemPreviewList';
import { thunderList } from '../../../data/thunderList';

const Thunder = ({ navigation }) => {
    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <ScreenTitle>
                    Численные методы прогнозирования гроз
                </ScreenTitle>
                <ItemPreviewlist itemList={thunderList} />
            </AppScrollContainer>
        </AppContainer>
    );
}


export default Thunder;
