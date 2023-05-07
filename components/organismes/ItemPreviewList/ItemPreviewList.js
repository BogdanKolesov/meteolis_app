import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemPreview from '../../molecules/ItemPerview';

const ItemPreviewlist = ({ itemList, navigation }) => {
    return (
        <>
            {
                itemList.map((item, index) => {
                    return (
                        <View key={index}>
                            <ItemPreview link={item.link} title={item.title} />
                        </View>
                    )
                })
            }
        </>
    );
}


export default ItemPreviewlist;
