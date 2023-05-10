import React from 'react';
import { View } from 'react-native';
import { AppContainer, AppScrollContainer, DevLogo, Paragraph, ScreenTitle } from '../../atoms';

const HelloView = () => {
    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <ScreenTitle>
                    Приветствую в приложении проекта 'Meteolis'!
                </ScreenTitle>
                <Paragraph thin>
                    Данная версия приложения явлвяется тестовой версией в процессе разработки.
                </Paragraph>
                <Paragraph thin>
                    Многие разделы пока что отсутствуют, но в скором времени появятся.
                </Paragraph>
                <Paragraph thin>В приложении присутствуют технические ошибки. При их нахождении просьба сообщить в группу ВК 'https://vk.com/meteolis'</Paragraph>
                <Paragraph thin>
                    Также просьба писать в эту группу любые предложения касательно оформления.
                </Paragraph>
                <Paragraph bold>
                    Основные особенности данной версии:
                </Paragraph >
                <Paragraph thin>
                    -Не везде корректно работает кнопка "Назад";
                </Paragraph>
                <Paragraph thin>
                    -Отсутствует карта;
                </Paragraph>
                <Paragraph thin>
                    -Некотрые разделы закрыты временной заглушкой, их разработка ведётся.
                </Paragraph>
                <Paragraph thin>
                    -Приём METAR/TAF возможен только при записи четырех кодов ICAO.
                </Paragraph>
                <Paragraph bold big>
                    В скором времени ошибки будут исправлены и добавлены новые статьи и калькуляторы, а также функции. Следите за обновлениями. Хорошей погоды!
                </Paragraph>
                <Paragraph thin>
                    *Справочно: основное меню открывается свайпом слева на право
                </Paragraph>
                <Paragraph thin>
                    **Идея метеочата: открытая переписка метеорологов по региону (область, край и тд)
                </Paragraph>
            </AppScrollContainer>
        </AppContainer>
    );
}

export default HelloView;
