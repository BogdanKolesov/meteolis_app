import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { AppContainer, AppScrollContainer, CalcInput, DevLogo, Paragraph, ScreenTitle } from '../../atoms';
import { NotExistButtonText, NotExistGoBackButton } from '../NotExist/NotExist.styles';
import { Container } from '../../atoms/ViewContainer/ViewContainer.styles';
import { MetarTafDataContainer, MetarTafInput, MetarTafInputView } from './MetarTaf.styles';
const MeterTaf = () => {
    const [meteoData, setMeteoData] = useState([]);


    const [icao1, setIcao1] = useState('UAKK')
    const [icao2, setIcao2] = useState('UACC')
    const [icao3, setIcao3] = useState('UNOO')
    const [icao4, setIcao4] = useState('UAAA')

    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');


    const getMeteoData = async () => {
        setIsLoading(true);
        try {
            const response1 = await fetch(`https://metartaf.ru/${icao1}.json`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            const response2 = await fetch(`https://metartaf.ru/${icao2}.json`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            const response3 = await fetch(`https://metartaf.ru/${icao3}.json`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            const response4 = await fetch(`https://metartaf.ru/${icao4}.json`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            if (!response1.ok) {
                throw new Error(`Ошибка: ${response1.status}`);
            }
            if (!response2.ok) {
                throw new Error(`Ошибка: ${response2.status}`);
            } if (!response3.ok) {
                throw new Error(`Ошибка: ${response3.status}`);
            } if (!response4.ok) {
                throw new Error(`Ошибка: ${response4.status}`);
            }
            const result1 = await response1.json();
            const result2 = await response2.json();
            const result3 = await response3.json();
            const result4 = await response4.json();


            setMeteoData([result1, result2, result3, result4]);
            // console.log(meteoData)
        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <AppContainer>
            <AppScrollContainer>
                <DevLogo />
                <ScreenTitle>
                    Прием METAR и TAF
                </ScreenTitle>
                <MetarTafInputView>
                    <MetarTafInput
                        keyboardType='ascii-capable'
                        onChangeText={setIcao1}
                        value={(icao1)}
                    />
                    <MetarTafInput
                        keyboardType='ascii-capable'
                        onChangeText={setIcao2}
                        value={(icao2)}
                    />
                    <MetarTafInput
                        keyboardType='ascii-capable'
                        onChangeText={setIcao3}
                        value={(icao3)}
                    />
                    <MetarTafInput
                        keyboardType='ascii-capable'
                        onChangeText={setIcao4}
                        value={(icao4)}
                    />
                </MetarTafInputView>
                <NotExistGoBackButton onPress={getMeteoData}>
                    <NotExistButtonText >Приём метеоданных</NotExistButtonText>
                </NotExistGoBackButton>
                {isLoading ?
                    (<Paragraph>Приём данных...</Paragraph>)
                    :

                    meteoData.map((item, index) => (
                        <MetarTafDataContainer key={index}>
                            <Paragraph bold>{item?.icao}</Paragraph>
                            <Paragraph bold>{item?.name}</Paragraph>
                            <Paragraph>ДАННЫЕ METAR: {item?.metar}</Paragraph>
                            <Paragraph>ДАННЫЕ TAF: {item?.taf}</Paragraph>


                        </MetarTafDataContainer>
                    ))
                }

            </AppScrollContainer>
        </AppContainer>
    );
}

export default MeterTaf;
