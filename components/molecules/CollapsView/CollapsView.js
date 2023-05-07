import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { CollapsViewContainer, CollapsViewTitle, CollapsContent } from './CollapsView.styles'

const CollapsView = ({ collapsContent }) => {
    const [collapse, setCollapse] = useState(false);

    return (
        <CollapsViewContainer onPress={() => setCollapse(!collapse)}>
            <CollapsViewTitle>
                Теоретическая часть <Entypo name={collapse ? 'chevron-thin-up' : 'chevron-thin-down'} style={{ fontSize: 18, color: '#D3D3D3' }} />
            </CollapsViewTitle>
            <CollapsContent style={{ display: collapse ? 'flex' : 'none' }}>
                {collapsContent}
            </CollapsContent>
        </CollapsViewContainer>
    );
}



export default CollapsView;
