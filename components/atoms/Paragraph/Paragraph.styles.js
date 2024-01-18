import { Text } from 'react-native';
import styled from 'styled-components/native';

export const StyledText = styled(Text)`
    font-size: ${props => props.big ? '22px' : '18px'};
    font-family: ${props => props.thin ? 'Roboto_100Thin' : 'Roboto_400Regular'};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    text-align: justify;
`