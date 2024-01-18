
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalcInput } from '../../atoms';
import { CalcContainer, CalcItem, CalcText, CalcTextContainer } from '../../atoms/CalcComponents';
import CalcView from '../../organismes/CalcView';

const FootsMeters = ({ navigation }) => {
    const collapsContent = `
    Перевод футов в метры, метров в футы
    1 фут = 0.3048 метров
    1 метр = 3.28084 фута
    `

    const [meters, setMeters] = useState(0);
    const [foots, setFoots] = useState(0);


    const content = (
        <>
            <CalcContainer>
                <CalcItem>
                    <CalcInput
                        onChangeText={setMeters}
                        value={Number(meters)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - метры
                        </CalcText>
                    </CalcTextContainer>
                    <CalcText result>{meters} метров = {(meters * 3.28084).toFixed(3)} фута</CalcText>
                </CalcItem>
                <CalcItem>
                    <CalcInput
                        onChangeText={setFoots}
                        value={Number(foots)}
                    />
                    <CalcTextContainer>
                        <CalcText>
                            - футы
                        </CalcText>
                    </CalcTextContainer>
                    <CalcText result>{foots} футов = {(foots * 0.3048).toFixed(3)} метров</CalcText>

                </CalcItem>
            </CalcContainer>
        </>
    )


    return (
        <CalcView
            title='Метры в футы, футы в метры'
            collapsContent={collapsContent}
            content={content}
            navigation={navigation}
        />
    );
}


export default FootsMeters;
