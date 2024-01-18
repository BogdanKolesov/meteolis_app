import styled from 'styled-components/native';
import { TouchableOpacity, Image, Text, View } from 'react-native';

export const DirectorySubLinkContainer = styled(TouchableOpacity)`
    flex-direction: column;
    width: 80%;
    height: 60px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
    margin-top: 10px;
    margin-left: 20px;
    
    /* padding: 5px; */
`

export const DirectorySubLinkBackgroundImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const DirectorySubLinkText = styled(View)`
    flex-direction: column;
    /* align-items: center; */
    padding: 5px;
    height: 100%;
    width: 100%;
    z-index: 3;
`

export const DirectorySubLinkTitle = styled(Text)`
    font-size: 20px;
    color: #fff;
    font-family: Roboto_100Thin;
    letter-spacing: 1.5px;
    margin-bottom: 5px;
    text-shadow: 4px 4px 23px rgba(0, 0, 0, 1);
`

export const DirectorySubLinkDescription = styled(Text)`
    font-size: 12px;
    color: #fff;
    letter-spacing: 1.2px;
    text-shadow: 4px 4px 23px rgba(0, 0, 0, 1);
    font-family: Roboto_400Regular;
    line-height: 20px;
`

export const DarkBackground = styled(View)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.15);
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
`