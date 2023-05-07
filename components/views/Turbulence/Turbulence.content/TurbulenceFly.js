
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput } from '../../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../../atoms/CalcComponents';
import CalcView from '../../../organismes/CalcView';

const TurbulenceFly = ({ navigation }) => {
    const collapsContent = `
    Из РППП
    height - изобарическая поверхность
    t - температура
    td - точка росы
    vg - вертикальный градиент скорости
    `

    const [height, setHeight] = useState(0);
    const [t, setT] = useState(0);
    const [td, setTd] = useState(0);
    const [vg, setVg] = useState(0);


    const calcTurbulence = () => {
        let lk
        lk = (height == 500) ?
            -0.001 * t + 0.881 * (t - td) + 0.011 * vg - 4.524
            : (height == 700) ? 0.005 * t + 0.708 * (t - td) + 0.08 * vg - 3.876
                : (height == 300) ? 0.052 * t + 0.739 * (t - td) + 0.31 * vg - 2.685
                    : 'Введите корректную изобарическую поверхность'

        return lk < 0 ? `Болтанка ожидается в слое +- 500м от поверхности ${height} гПа`
            : 'Болтанка отсутствует'
    }
    let res = calcTurbulence()

    const content = (
        <>
            <CalcContainer>
                <CalcItem>
                    <CalcInput
                        onChangeText={setHeight}
                        value={Number(height)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Изобарическая поверхность (700, 500, 300) ГПа
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setT}
                        value={Number(t)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - температура
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
                            - точка росы
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setVg}
                        value={Number(vg)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - вертикальный градиент скорости
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
            </CalcContainer>
            <CalcText result>Результат: {res}</CalcText>
        </>
    )


    return (
        <CalcView
            title='Прогнозирование болтанки на изобарических поверхностях 700, 500, 300'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default TurbulenceFly;
