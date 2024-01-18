import React from 'react';
import { DirectoryLinkTitle } from '../DirectoryLink/DirectoryLink.styles';
import { DirectorySubLinkBackgroundImage, DirectorySubLinkContainer, DirectorySubLinkDescription, DirectorySubLinkText } from './DirectorySubLink.styles';

const DirectorySubLink = () => {
    return (
        <DirectorySubLinkContainer
            activeOpacity={0.6}
            onPress={() => navigation.navigate(data.link, { items: data.items, title: data.title, content: data.content })}>
            <DirectorySubLinkBackgroundImage source={data.backgroundImage} />
            <DarkBackground />
            <DirectorySubLinkText>
                <DirectoryLinkTitle>
                    {data.title}
                </DirectoryLinkTitle>
                <DirectorySubLinkDescription>
                    {data.description}
                </DirectorySubLinkDescription>
            </DirectorySubLinkText>
        </DirectorySubLinkContainer>
    );
}


export default DirectorySubLink;
