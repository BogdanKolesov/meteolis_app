import React from 'react';
import { View, StatusBar } from 'react-native';
import { Paragraph, ViewContainer, ViewTitle } from '../../atoms';
import { commonDirectoryData } from '../../../data/directoryLinkData'
import { DirectoryLink } from '../../molecules/';


const Common = () => {
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <ViewTitle>Общие статьи для синоптиков и метеонаблюдателей</ViewTitle>
                {
                    commonDirectoryData.map((data, index) => {
                        return (
                            <DirectoryLink key={index} data={data} />
                        )
                    })
                }
            </ViewContainer>
        </View>
    );
}

export default Common;
