import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CalcView from '../../../organismes/CalcView';

const Baily = ({ navigation }) => {
    const collapsContent = `
    Используется обычно в сочетании с другими методами.
    Если в районе выполняется хотя бы один из признаков, то гроза не ожидается:

    1. На любом уровне в слое 850 – 700 гПа дефицит температуры точки росы равен или больше 13°
    2. Сумма дефицитов температуры точки росы на уровнях 700 и 600 гПа больше или равна 28°
    3. Заметная на картах барической топографии адвекция сухого воздуха на уровнях 850 и 700 гПа
    4. Вертикальный градиент температуры в слое 850 – 500 гПа равен или меньше 0,5°/100 м.
    5. Уровень замерзания (Т= -12°С) располагается ниже высоты 3600 м. В этом случае из развивающихся облаков могут выпадать только слабые ливневые осадки.`

    const content = (
        <Text>
            ggggggggggggggggggggggggggggggggggggd
        </Text>
    )


    return (
        <CalcView
            title='Метод Бейли'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default Baily;
