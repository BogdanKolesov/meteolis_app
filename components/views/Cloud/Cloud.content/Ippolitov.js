
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput } from '../../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../../atoms/CalcComponents';
import CalcView from '../../../organismes/CalcView';

const Ippolitov = ({ navigation }) => {
    const collapsContent = `
    Для определения высоты нижней границы облачности заметную популярность получили формулы, выведенные с помощью экспериментов: 
    формула Ипполитова: ВНГО = 24 ∗ (100 − R )
    R – относительная влажность, (%)
    `

    const [r, setR] = useState(0);

    let vngo
    const calcIppolitov = () => {
        vngo = 24 * (100 - Number(r))
        return `Высота нижней границы облаков = ${vngo}`
    }
    let res = calcIppolitov()

    const content = (
        <>
            <CalcContainer>
                <CalcItem>
                    <CalcInput
                        onChangeText={setR}
                        value={Number(r)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Относительная влажность у земли
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
            </CalcContainer>
            <CalcText result>Результат: {res}</CalcText>
        </>
    )


    return (
        <CalcView
            title='Формула Ипполитова'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default Ippolitov;
