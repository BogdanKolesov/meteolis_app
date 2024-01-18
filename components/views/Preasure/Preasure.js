
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput } from '../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../atoms/CalcComponents';
import CalcView from '../../organismes/CalcView';
import { CalcChangeButton } from '../Job.styles';

const Preasure = ({ navigation }) => {
    const collapsContent = `
    Расчет барической ступени, давления над уровнем моря и давления на определённой высоте
    1 мм.рт.ст. = 0.750062 гПа
    Барическая ступень = 8000/p * (1 + (1/273 * T)) 
    (АВИАЦИОННАЯ МЕТЕОРОЛОГИЯ Методические указания  по выполнению лабораторных и контрольной работ, Ульяновск, 2009 год)
    `

    const [t, setT] = useState(0);
    const [mm, setMm] = useState(true);
    const [preasure, setPreasure] = useState(0);
    const [height, setHeight] = useState(0);
    const [aimHeight, setAimHeight] = useState(0)
    const [aimHeight2, setAimHeight2] = useState(0)
    const [aimHeight3, setAimHeight3] = useState(0)


    let q //барическая ступень
    let pSea //давление на уровне моря
    let pAim //д
    let p
    const calcPreasure = () => {
        p = mm ? preasure * 0.750062 : preasure
        q = (8000 / Number(preasure)) * (1 + (1 / 273 * t))
        pSea = (Number(preasure) + (Number(height) / Number(q)))
        pAim = (Number(pSea) - (Number(aimHeight) / Number(q)))
        pAim2 = (Number(pSea) - (Number(aimHeight2) / Number(q)))
        pAim3 = (Number(pSea) - (Number(aimHeight3) / Number(q)))

        return (
            (
                <CalcContainer>
                    <CalcText result>
                        Давление в месте наблюдения = ({mm ? `${Number(preasure).toFixed(2)} мм.рт.ст.` : `${Number(preasure).toFixed(2)} гПа`}) ({mm ? `${(preasure / 0.750062).toFixed(2)} гПа` : `${(preasure * 0.750062).toFixed(2)} мм.рт.ст.`})
                    </CalcText>
                    <CalcText result>
                        {
                            isFinite(q) ? `Барическая ступень = ${(q).toFixed(2)} м/${mm ? 'мм.рт.ст.' : 'гПа'} (${(mm ? (q * 0.750062) : q / 0.750062).toFixed(2)} м/${mm ? 'гПа' : 'мм.рт.ст.'})`
                                :
                                `Введите корректные знаечния`
                        }

                    </CalcText>
                    <CalcText result>
                        Давление на уровне моря = {(pSea).toFixed(2)} {mm ? 'мм.рт.ст.' : 'гПа'} ({(mm ? (pSea / 0.750062) : pSea * 0.750062).toFixed(2)} {mm ? 'гПа' : 'мм.рт.ст.'})
                    </CalcText>
                    <CalcText result>
                        Давление на высоте {aimHeight} м = {(pAim).toFixed(2)} {mm ? 'мм.рт.ст.' : 'гПа'} ({(mm ? (pAim / 0.750062) : (pAim * 0.750062)).toFixed(2)} {mm ? 'гПа' : 'мм.рт.ст.'})
                    </CalcText>
                    <CalcText result>
                        Давление на высоте {aimHeight2} м = {(pAim2).toFixed(2)} {mm ? 'мм.рт.ст.' : 'гПа'} ({(mm ? (pAim2 / 0.750062) : (pAim2 * 0.750062)).toFixed(2)} {mm ? 'гПа' : 'мм.рт.ст.'})
                    </CalcText>
                    <CalcText result>
                        Давление на высоте {aimHeight3} м = {(pAim3).toFixed(2)} {mm ? 'мм.рт.ст.' : 'гПа'} ({(mm ? (pAim3 / 0.750062) : (pAim3 * 0.750062)).toFixed(2)} {mm ? 'гПа' : 'мм.рт.ст.'})
                    </CalcText>
                </CalcContainer>
            )
        )
    }
    let res = calcPreasure()

    const content = (
        <>
            <CalcContainer>
                <CalcChangeButton onPress={() => setMm(!mm)}><Text style={{ fontSize: 20 }}>{mm ? 'Переключиться на гПа' : 'Переключиться на мм.рт.ст.'}</Text></CalcChangeButton>
                <CalcItem>
                    <CalcInput
                        onChangeText={setT}
                        value={Number(t)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - температура в месте наблюдения
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setPreasure}
                        value={Number(preasure)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Давление в месте наблюдения ({mm ? 'мм.рт.ст.' : 'гПа'})
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setHeight}
                        value={Number(height)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Высота места наблюдения
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setAimHeight}
                        value={Number(aimHeight)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Высота, к которой нужно привести давление в первой точке
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setAimHeight2}
                        value={Number(aimHeight2)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Высота, к которой нужно привести давление во второй точке
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setAimHeight3}
                        value={Number(aimHeight3)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Высота, к которой нужно привести давление в третьей точке
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
            </CalcContainer>
            <CalcText result>Результат: </CalcText>
            {res}
        </>
    )


    return (
        <CalcView
            title='Приведение давления'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default Preasure;
