import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
    DarkBackground,
    DirectoryLinkBackgroundImage,
    DirectoryLinkContainer,
    DirectoryLinkDescription,
    DirectoryLinkText,
    DirectoryLinkTitle
} from './DirectoryLink.styles';

const DirectoryLink = ({ data, big }) => {

    const navigation = useNavigation()


    return (
        <DirectoryLinkContainer
            big={big}
            activeOpacity={0.6}
            onPress={() => navigation.navigate(data.link, { items: data.items, title: data.title, content: data.content })}>
            <DirectoryLinkBackgroundImage source={data.backgroundImage} />
            <DarkBackground />
            <DirectoryLinkText>
                <DirectoryLinkTitle>
                    {data.title}
                </DirectoryLinkTitle>
                {data.height ? (
                    <DirectoryLinkDescription>
                        Высота: {data.height}
                    </DirectoryLinkDescription>
                ) : null}
                {
                    data.description ?
                        (<DirectoryLinkDescription>
                            {data.description}
                        </DirectoryLinkDescription>)
                        : null
                }
            </DirectoryLinkText>
        </DirectoryLinkContainer>
    );
}


export default DirectoryLink;
