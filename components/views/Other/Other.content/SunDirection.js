
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput, Paragraph } from '../../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../../atoms/CalcComponents';
import CalcView from '../../../organismes/CalcView';
import { CalcViewTitle } from '../../../organismes/CalcView/CalcView.styles';
import { NotExistGoBackButton } from '../../NotExist/NotExist.styles';
import { NotExistButtonText } from '../../NotExist/NotExist.styles';
import SunCalc from 'suncalc';

const SunDirection = ({ navigation }) => {
    const collapsContent = `
    Для определения азимута солнца по времени, дате и координатам можно использовать формулу, называемую "формулой азимута". Она основана на расчете солнечных углов и требует знания широты и времени наблюдения.
    `
    const [latitude, setLatitude] = useState(''); // Широта
    const [longitude, setLongitude] = useState(''); // Долгота
    const [date, setDate] = useState(''); // Дата
    const [time, setTime] = useState(''); // Время

    const sunClaculate = () => {
        const parsedDate = new Date(`${date}T${time}`);
        const parsedLatitude = parseFloat(latitude);
        const parsedLongitude = parseFloat(longitude);

        if (isNaN(parsedLatitude) || isNaN(parsedLongitude) || isNaN(parsedDate)) {
            console.log('Некорректные данные');
            return;
        }

        const sunPosition = SunCalc.getPosition(parsedDate, parsedLatitude, parsedLongitude);
        const times = SunCalc.getTimes(parsedDate, parsedLatitude, parsedLongitude);

        const sunrise = times.sunrise.toLocaleTimeString();
        const sunset = times.sunset.toLocaleTimeString();
        const dawn = times.dawn.toLocaleTimeString();
        const dusk = times.dusk.toLocaleTimeString();

        return (
            <>
                <Paragraph>
                    Азимут Солнца: {sunPosition.azimuth}
                </Paragraph>
                <Paragraph>
                    Восход: {sunrise}
                </Paragraph>
                <Paragraph>
                    Рассвет: {dawn}
                </Paragraph>
                <Paragraph>
                    Заход: {sunset}
                </Paragraph>
                <Paragraph>
                    Сумерки: {dusk}
                </Paragraph>
            </>
        )

    };
    const content = (
        <>
            <CalcContainer>
                <CalcItem>
                    <CalcInput
                        onChangeText={setLatitude}
                        value={Number(latitude)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - широта
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setLongitude}
                        value={Number(longitude)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - долгота
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setDate}
                        value={Number(date)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - дата в формате YYYY-MM-DD (Например, 2023-02-12)
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setTime}
                        value={Number(time)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - время в UTC (от 0 до 23)
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <NotExistGoBackButton
                    onPress={sunClaculate}
                >
                    <NotExistButtonText>Расчёт азимута</NotExistButtonText>
                </NotExistGoBackButton>
                {sunClaculate}
            </CalcContainer>


        </>
    )


    return (
        <CalcView
            title='Расчёт азимута Солнца'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default SunDirection;
