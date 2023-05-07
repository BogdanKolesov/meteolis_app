import React from 'react';
import { ItemPreviewContainer, ItemPreviewText } from './ItemPreview.styles';
import { useNavigation } from '@react-navigation/native';


const ItemPreview = ({ title, link }) => {

    const navigation = useNavigation()

    return (
        <ItemPreviewContainer
            onPress={() => navigation.navigate(link)}
            activeOpacity={0.6}>
            <ItemPreviewText>
                {title}
            </ItemPreviewText>
        </ItemPreviewContainer>
    );
}



export default ItemPreview;
