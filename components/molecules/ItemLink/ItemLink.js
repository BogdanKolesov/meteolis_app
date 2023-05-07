import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ItemLinkContainer, ItemLinkTitle } from './ItemLink.styles';

const ItemLink = ({ item }) => {
    const navigation = useNavigation()


    return (
        <ItemLinkContainer
            activeOpacity={0.5}
            onPress={() => navigation.navigate(item.link, { title: item.title, content: item.content, items: item.items })}
        >
            <ItemLinkTitle>
                {item.title}
            </ItemLinkTitle>
        </ItemLinkContainer>
    );
}


export default ItemLink;
