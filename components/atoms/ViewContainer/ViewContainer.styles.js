import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.ScrollView`
    width: 100%;
    height: auto;
    padding: 5%;
    padding-top: 2%;
    background-color: #fff;
    min-height: ${windowHeight}px;
    position: relative;
`