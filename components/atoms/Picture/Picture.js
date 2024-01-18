import { Image } from 'react-native';
import styled from 'styled-components/native';


export const Picture = styled(Image)`
    padding-top: ${props => props.pt ? props.pt : '0px'};
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : '250px'};
    object-fit: contain;
    margin:0;
    padding: 0;
`