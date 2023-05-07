import React from 'react';
import { ViewContainer, ViewTitle } from '../../atoms';
import { GoBackButton } from '../../organismes/CalcView/CalcView.styles';
import Entypo from 'react-native-vector-icons/Entypo'

const ArticleView = ({ route, navigation }) => {
    const { title, content } = route.params

    return (
        <ViewContainer>
            <ViewTitle>
                {title}
            </ViewTitle>
            {content}
            <GoBackButton onPress={() => navigation.goBack()}>
                <Entypo name='chevron-thin-left' style={{ fontSize: 20, color: '#000' }} />
            </GoBackButton>
        </ViewContainer>
    );
}

export default ArticleView;
