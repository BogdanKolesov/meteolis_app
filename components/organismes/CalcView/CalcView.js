import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CalcViewTitle, GoBackButton, AppCalcContainer, CalcContent } from './CalcView.styles';
import Entypo from 'react-native-vector-icons/Entypo'
import { AppScrollContainer, DevLogo } from '../../atoms';
import CollapsView from '../../molecules/CollapsView/CollapsView';


const CalcView = ({ content, collapsContent, title, navigation }) => {
    return (
        <AppCalcContainer>
            <AppScrollContainer>
                <DevLogo />
                <CalcViewTitle>{title}</CalcViewTitle>
                <CollapsView collapsContent={collapsContent} />
                <CalcContent>
                    {content}
                </CalcContent>
            </AppScrollContainer>
            <GoBackButton onPress={() => navigation.goBack()}>
                <Entypo name='chevron-thin-left' style={{ fontSize: 20, color: '#000' }} />
            </GoBackButton>
        </AppCalcContainer>
    );
}

const styles = StyleSheet.create({})

export default CalcView;
