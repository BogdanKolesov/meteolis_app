
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../../atoms/CalcComponents/CalcComponents';
import CalcView from '../../../organismes/CalcView';
import { CalcInput } from '../../../atoms';

const Ferrel = ({ navigation }) => {
    const collapsContent = `
    Для определения высоты нижней границы облачности заметную
    популярность получили формулы, выведенные с помощью экспериментов:
    формула Ферреля: ВНГО = 122 ∗ ( T − Td)
    
    H– высота нижней границы облаков, (м);
    T – температура воздуха у земной поверхности (°С);
    Td – температура точки росы у земной поверхности, (°С);
    `

    const [t, setT] = useState(0);
    const [td, setTd] = useState(0);

    let vngo
    const calcFerrel = () => {
        vngo = 122 * (Number(t) - Number(td))
        return `Высота нижней границы облаков = ${vngo}м`
    }
    let res = calcFerrel()

    const content = (
        <>
            <CalcContainer>
                <CalcItem>
                    <CalcInput
                        onChangeText={setT}
                        value={Number(t)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Температура воздуха у земли
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setTd}
                        value={Number(td)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            Температура точки росы у земли
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
            </CalcContainer>
            <CalcText result>Результат: {res}</CalcText>
        </>
    )


    return (
        <CalcView
            title='Формула Ферреля'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default Ferrel;
