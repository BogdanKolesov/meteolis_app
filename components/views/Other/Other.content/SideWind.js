
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput, Paragraph } from '../../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../../atoms/CalcComponents';
import CalcView from '../../../organismes/CalcView';
import { CalcViewTitle } from '../../../organismes/CalcView/CalcView.styles';

const SideWind = ({ navigation }) => {
    const collapsContent = `
    Расчёт боковой составляющей скорости ветра будем произовдить по формуле Vбок=V*sin(Направление движения ветра - Направлнение полосы)
    `

    const [pointDirection, setPointDirection] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [windDirection, setWindDirection] = useState(0);


    let calcedSideSpeed
    const calcSideSpeed = () => {
        calcedSideSpeed = Math.abs(Number(windSpeed * Math.sin(windDirection - pointDirection)).toFixed(2))
        return calcedSideSpeed
    }
    const resSideSpeed = calcSideSpeed()

    const content = (
        <>
            <CalcContainer>
                <CalcItem>
                    <CalcInput
                        onChangeText={setPointDirection}
                        value={Number(pointDirection)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Направление полосы (градусов)
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setWindDirection}
                        value={Number(windDirection)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - Направление ветра (градусов)
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setWindSpeed}
                        value={Number(windSpeed)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - скорость ветра
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <Paragraph bold big>Боковая составляющая скорости  ветра - {resSideSpeed}</Paragraph>
            </CalcContainer>


        </>
    )


    return (
        <CalcView
            title='Расчёт боковой составляющей скорости ветра'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default SideWind;
