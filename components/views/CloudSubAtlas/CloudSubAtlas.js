import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { ViewContainer, ViewTitle } from '../../atoms';
import { cloudAtlasData } from '../../../data/itemLinkData/cloudAtlasData';
import { DirectoryLink } from '../../molecules';
import { useRoute } from '@react-navigation/native';

const CloudSubAtlas = ({ route }) => {
    const { title, items } = route.params
    return (
        <View>
            <StatusBar />
            <ViewContainer>
                <ViewTitle>{title}</ViewTitle>
                {
                    items.map((item, index) => {
                        return (
                            <DirectoryLink big key={index} data={item} />
                        )
                    })
                }
            </ViewContainer>
        </View>
    );
}


export default CloudSubAtlas;
