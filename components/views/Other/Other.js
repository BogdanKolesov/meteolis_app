import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, AppScrollContainer, DevLogo, ScreenTitle } from '../../atoms';
import ItemPreviewlist from '../../organismes/ItemPreviewList/ItemPreviewList';
import { OtherList } from '../../../data/otherList';

const Other = () => {
    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <ScreenTitle>
                    Другие расчёты
                </ScreenTitle>
                <ItemPreviewlist itemList={OtherList} />
            </AppScrollContainer>
        </AppContainer>
    );
}


export default Other;
