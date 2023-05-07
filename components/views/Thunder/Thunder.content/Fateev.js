
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput } from '../../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../../atoms/CalcComponents';
import CalcView from '../../../organismes/CalcView';

const Fateev = ({ navigation }) => {
    const collapsContent = `
    Совершенствуя метод Вайтинга, Н.П. Фатеев предложил использовать для прогноза гроз параметр А, который полнее учитывает распределение влажности по высотам.
    По Н.П. Фатееву
    А = Т850 –Т500 – (D850+D700+D600+D500). Обозначения в формуле пояснений не требуют. Если по расчетам получается, что А больше 0, то в прогнозе следует указывать грозу.
    
    `

    const [t850, setT850] = useState(0);
    const [deltatd850, setDeltatd850] = useState(0);
    const [deltatd700, setDeltatd700] = useState(0);
    const [t500, setT500] = useState(0);
    const [deltatd500, setDeltatd500] = useState(0);
    const [deltatd600, setDeltatd600] = useState(0);

    let a
    let result
    const calcFateev = () => {
        a = Number(t850) - Number(t500) - (Number(deltatd850) + Number(deltatd700) + Number(deltatd600) + Number(deltatd500))
        a > 0 || a == 0 ? result = 'В прогнозе следует указывать грозу' : result = 'В прогнозе указывать грозу не следует'
        return `A = ${a}, ${result}`
    }
    let res = calcFateev()

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
                        onChangeText={setT500}
                        value={Number(t500)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Температура на поверхности 500 ГПа
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setDeltatd850}
                        value={deltatd850}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Дефицит точки росы на поверхности 850 ГПа
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
                        onChangeText={setDeltatd500}
                        value={deltatd500}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Дефицит точки росы на поверхности 500 ГПа
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setDeltatd600}
                        value={deltatd600}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Дефицит точки росы на поверхности 600 ГПа
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
            </CalcContainer>
            <CalcText result>Результат: {res}</CalcText>
        </>
    )


    return (
        <CalcView
            title='Метод Фатеева'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default Fateev;
