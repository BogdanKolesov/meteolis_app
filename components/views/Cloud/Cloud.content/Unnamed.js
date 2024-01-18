
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput } from '../../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../../atoms/CalcComponents/CalcComponents';
import CalcView from '../../../organismes/CalcView';

const Unnamed = ({ navigation }) => {
    const collapsContent = `
    Для определения высоты нижней границы облачности заметную
    популярность получили формулы, выведенные с помощью экспериментов:
    формула без автора: = 122 ∗ ( T − Td)-m,
    T – температура воздуха у земной поверхности (°С);
    Td – температура точки росы у земной поверхности, (°С);
    m – коэффициент, связанный с наличием осадков.
    При мороси m = 80, при других видах осадков m = 50 и при непоявлении осадков.
    При m = 0 формула преобразуется в формулу Ферреля).
    `

    const [t, setT] = useState(0);
    const [td, setTd] = useState(0);
    const [m, setM] = useState(0);

    let vngo
    const calcVngoFormula = () => {
        vngo = 122 * (Number(t) - Number(td)) - Number(m)
        return `Высота нижней границы облаков = ${vngo}`
    }
    let res = calcVngoFormula()

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
                            - Температура точки росы у земли
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setM}
                        value={Number(m)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Коэффициент m
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
            </CalcContainer>
            <CalcText result>Результат: {res}</CalcText>
        </>
    )


    return (
        <CalcView
            title='Формула неизвестного автора'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default Unnamed;
