
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput } from '../../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../../atoms/CalcComponents';
import CalcView from '../../../organismes/CalcView';

const Waiting = ({ navigation }) => {
    const collapsContent = `
    Основан на расчете по данным утреннего зондирования параметра К
    К = 2Т850 –Т500 – D850 - D700
    Т – температура,  D – дефицит температуры точки росы на соответствующем уровне
    К меньше 20 - гроз ожидать не следует
    20  К больше 25 - следует ожидать изолированные грозы
    25 меньше К больше 30 - в прогнозе следует указывать отдельные грозы
    К больше 30 – грозы повсеместно
    Хорошие результаты при прогнозе гроз не по пункту, а по площади. 
	Синоптик  строит карту изолиний коэффициента К через 5 единиц, начиная со значения 20. -> Очаг с максимальным значением коэффициента переносится по потоку на 12 часов, и в том районе, где этот очаг окажется, следует указывать грозы.
    
    Метод получил достаточно широкое распространение по территории России.
    Значения коэффициента К целесообразно уточнять для каждого пункта.
    Иногда в рассчитанные значения коэффициента К вводится поправка на кривизну приземных изобар.
    `

    const [t850, setT850] = useState(0);
    const [deltatd850, setDeltatd850] = useState(0);
    const [t700, setT700] = useState(0);
    const [deltatd700, setDeltatd700] = useState(0);
    const [t500, setT500] = useState(0);

    let k
    let result
    const calcWaiting = () => {

        k = 2 * Number(t850) - Number(t500) - Number(deltatd850) - Number(deltatd700)
        if (k < 20) {
            result = 'Гроз ожидать не следует'
        } else if (k == 20 || k == 25 || (k > 20 && k < 25)) {
            result = 'Следует ожидать изолированные грозы'
        } else if (k == 30 || (k > 25 && k < 30)) {
            result = 'В прогнозе следует указать отдельные грозы'
        } else if (k > 30) {
            result = 'Грозы повсеместно'
        }
        return `k = ${k}, ${result}`
    }
    let res = calcWaiting()

    const content = (
        <>
            <CalcContainer>
                <CalcItem>
                    <CalcInput
                        onChangeText={setT850}
                        value={Number(t850)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Температура на поверхности 850 ГПа
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setDeltatd850}
                        value={Number(deltatd850)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Дефицит точки росы на поверхности 850 ГПа
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setT700}
                        value={Number(t700)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Температура на поверхности 700 ГПа
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setDeltatd700}
                        value={Number(deltatd700)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Дефицит точки росы на поверхности 700 ГПа
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setT500}
                        value={Number(t500)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Температура на поверхности 500 ГПа
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>

            </CalcContainer>
            <CalcText result>Результат: {res}</CalcText>
        </>
    )


    return (
        <CalcView
            title='Метод Вайтинга'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default Waiting;
