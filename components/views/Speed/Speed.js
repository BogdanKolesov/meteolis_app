
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput } from '../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../atoms/CalcComponents';
import CalcView from '../../organismes/CalcView';
import { CalcViewTitle } from '../../organismes/CalcView/CalcView.styles';

const Speed = ({ navigation }) => {
    const collapsContent = `
    Перевод м/с в км/ч, км/ч в м/с
    1 м/с = 3.6 км/ч
    1 км/ч = 0.277778 м/с
    `

    const [ms, setMs] = useState(0);
    const [km, setKm] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [time, setTime] = useState(0);
    const [distance, setDistance] = useState(0);

    let calcedTime
    const calcTime = () => {
        calcedTime = distance / speed
        calcedTimeToMin = calcedTime * 60
        let hours = Math.trunc(calcedTimeToMin / 60);
        let minutes = calcedTimeToMin % 60;
        return hours.toFixed(0) + ':' + minutes.toFixed(0) + 'часов' + ' ' + '(' + calcedTimeToMin + 'мин' + ')';
    }
    const resTime = calcTime()

    let calcedSpeed
    const calcSpeed = () => {
        calcedSpeed = distance / (time / 60)
        return calcedSpeed
    }
    const resSpeed = calcSpeed()

    let calcedDistance
    const calcDistance = () => {
        calcedDistance = speed * time / 60
        return calcedDistance
    }
    const resDistance = calcDistance()

    const content = (
        <>
            <CalcContainer>
                <CalcItem>
                    <CalcInput
                        onChangeText={setMs}
                        value={Number(ms)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - м/с
                        </CalcText>
                    </CalcTextContainer>
                    <CalcText result>{ms} м/с = {(ms * 3.6).toFixed(2)} км/ч</CalcText>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setKm}
                        value={Number(km)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - км/ч
                        </CalcText>
                    </CalcTextContainer>
                    <CalcText result>{km} км/ч = {(km * 0.277778).toFixed(2)} м/с</CalcText>
                </CalcItem>
                <CalcViewTitle>Расчет времени</CalcViewTitle>
                <CalcItem>
                    <CalcInput
                        onChangeText={setDistance}
                        value={Number(distance)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - км
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setSpeed}
                        value={Number(speed)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - км/ч
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcText>{distance}км со скоростью {speed} км/ч будет пройдено за {resTime}</CalcText>
                <CalcViewTitle>Расчет скорости</CalcViewTitle>
                <CalcItem>
                    <CalcInput
                        onChangeText={setDistance}
                        value={Number(distance)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - км
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
                            - мин
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcText>{distance}км за {time} минут будет пройдено при скорости {resSpeed} км/ч</CalcText>
                <CalcViewTitle>Расчет расстояния</CalcViewTitle>
                <CalcItem>
                    <CalcInput
                        onChangeText={setSpeed}
                        value={Number(speed)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - км/ч
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
                            - мин
                        </CalcText>
                    </CalcTextContainer>
                </CalcItem>
                <CalcText>За {time} минут при скорости {speed} будет пройдено {resDistance} км</CalcText>
            </CalcContainer>


        </>
    )


    return (
        <CalcView
            title='Расчет скорости, времени, расстояния'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default Speed;
