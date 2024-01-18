import React from 'react';
import { View } from 'react-native';
import { ViewContainer, ViewTitle } from '../../atoms'
import { ItemLink } from '../../molecules';

const ItemLinkView = ({ route }) => {
    const { items, title, content } = route.params

    return (
        <ViewContainer>
            <ViewTitle>
                {title}
            </ViewTitle>
            {
                content ?
                    (
                        <View>
                            {content}
                        </View>
                    ) : null
            }
            <View>
                {items.map((item, index) => {
                    return (
                        <ItemLink key={index} item={item} />
                    )
                })}
            </View>
        </ViewContainer>
    );
}


export default ItemLinkView;
