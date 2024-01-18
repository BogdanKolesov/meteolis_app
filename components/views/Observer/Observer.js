import React from 'react';
import { View, StatusBar } from 'react-native';
import { ViewContainer, ViewTitle } from '../../atoms';
import { observerDirectoryData } from '../../../data/directoryLinkData'
import { DirectoryLink } from '../../molecules/';

const Observer = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <ViewTitle>Статьи для метеонаблюдателей</ViewTitle>
                {
                    observerDirectoryData.map((data, index) => {
                        return (
                            <DirectoryLink key={index} data={data} />
                        )
                    })
                }
            </ViewContainer>
        </View>
    );
}


export default Observer;
