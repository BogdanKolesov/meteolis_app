
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Picture } from '../../atoms';
import { Container, Container, p, Container } from '../../atoms/CalcComponents';
import CalcView from '../../organismes/CalcView';
import { kpo1, kpo3 } from '../../../constants/images';
import { kpo2 } from '../../../constants/images';

const Fire = ({ navigation }) => {
    const collapsContent = `
    Для вычисления комплексного показателя пожарной опасности необходимы следующие данные:
- температура воздуха, точка росы (в °С), скорость ветра (в м/с) на 13 часов по местному времени или в ближайший к нему срок синхронных метеорологических наблюдений (15 ч);
- количество выпавших осадков за предыдущие сутки (в мм).
     

Комплексный показатель текущего дня (КП) определяется как сумма произведений коэффициента, учитывающего скорость ветра (Кv), на температуру воздуха (Т и разность между значением температуры воздуха и температурой точки росы (t). Расчет КП начинается после последнего дождя и проводится за каждый день. (n). Данные за каждый день суммируются нарастающим итогом. 
Коэффициент пожарной опасности Кv, учитывающий влияние скорости ветра на возникновение и распространение лесных пожаров (V - скорость ветра, м/с) 
        
`
    const [prev, setPrev] = useState(0);
    const [wind, setWind] = useState(0);
    const [kv, setKv] = useState(0);
    const [t, setT] = useState(0);
    const [td, setTd] = useState(0);





    useEffect(() => {
        if (wind == 0) {
            setKv(1.00)
        } else if (wind == 1) {
            setKv(1.02)
        } else if (wind == 2) {
            setKv(1.04)
        } else if (wind == 3) {
            setKv(1.07)
        } else if (wind == 4) {
            setKv(1.11)
        } else if (wind == 5) {
            setKv(1.16)
        } else if (wind == 6) {
            setKv(1.22)
        } else if (wind == 7) {
            setKv(1.28)
        } else if (wind == 8) {
            setKv(1.32)
        } else if (wind == 9) {
            setKv(1.36)
        } else if (wind == 10) {
            setKv(1.39)
        } else if (wind == 11) {
            setKv(1.41)
        } else if (wind == 12) {
            setKv(1.43)
        } else if (wind == 13) {
            setKv(1.45)
        } else if (wind == 14) {
            setKv(1.46)
        } else if (wind == 15) {
            setKv(1.47)
        } else if (wind == 16) {
            setKv(1.48)
        } else if (wind > 16) {
            setKv(1.48 + ((wind - 16) * 0.01))
        }
    }, [wind]);

    const calcFire = () => {
        kpo = Number(prev) + Number(kv) * Number(t) * (Number(t) - Number(td))
        return `Kv=${kv.toFixed(2)},
        Коэффициент пожароопасности за сутки = ${(kpo - prev).toFixed(0)}
        Коэффициент пожароопасности = ${kpo.toFixed(0)}`
    }
    let res = wind >= 0 ? calcFire() : 'Введите корректную скорость ветра'

    const content = (
        <>
            <Container>
                <Picture source={kpo3} />
                <Picture source={kpo1} />
                <Picture source={kpo2} />
                <Container>
                    <Input
                        onChangeText={setPrev}
                        value={Number(prev)}
                    />
                    <Container>
                        <p>
                            - Предыдущее значение КПО
                        </p>
                    </Container>
                </Container>
                <Container>
                    <Input
                        onChangeText={setWind}
                        value={Number(wind)}
                    />
                    <Container>
                        <p>
                            - Скорость ветра (м/с)
                        </p>
                    </Container>
                </Container>
                <Container>
                    <Input
                        onChangeText={setT}
                        value={Number(t)}
                    />
                    <Container>
                        <p>
                            - Температура (°С)
                        </p>
                    </Container>
                </Container>
                <Container>
                    <Input
                        onChangeText={setTd}
                        value={Number(td)}
                    />
                    <Container>
                        <p>
                            - Точка росы (°С)
                        </p>
                    </Container>
                </Container>

            </Container>
            <p result>Результат: {res}</p>
        </>
    )


    return (
        <CalcView
            title='Расчёт коэффициента пожароопасности'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default Fire;
