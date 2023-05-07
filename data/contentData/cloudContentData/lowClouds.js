import { Paragraph, Picture } from "../../../components/atoms"
import { cirrusFibratus, cumulusHumilis, fractoNimbus, orographClouds, stratoCumulusDiurnalis, stratoCumulusOpacus, stratoCumulusTranslucidus, stratuCumulusVesperalis, stratusNebulosus, stratusUndulatus } from "../../../constants/images"

export const StratusNebulosus = () => {
    return (
        <>
            <Picture source={stratusNebulosus} />
            <Paragraph>
                Слоистые туманообразные - Stratus nebulosus (St neb). Вполне однородный слой серого или желтоватого цвета, сходные с туманом, приподнятым над поверхностью земли. Обычно облака закрывают все небо. Высота основания в пределах 0.1 до 0.7 км., но иногда облака сливаются с наземным туманом. Иногда из облаков может выпадать морось или мелкие снежные зерна (мелкий снег), который заметно ухудшает видимость. Образуются, как правило, за счет охлаждения относительно теплого воздуха при движении его над холодной подстилающей поверхностью, или при радиационном выхолаживании нижнего слоя воздуха в течение ночи или нескольких дней подряд.
            </Paragraph>
        </>
    )
}

export const FractoNimbus = () => {
    return (
        <>
            <Picture source={fractoNimbus} />
            <Paragraph>
                Разорванно дождевые - Fractonimbus (Frnb) темно-серые облака, иногда с желтоватым или синеватым оттенком. При осадках слой облаков кажется однородным, в перерыве между осадками заметна его неоднородность и даже его волнистость. Облака закрывают все небо без просветов. Высота основания от 0.1 км до 1 км. Толщина основания колеблется в пределах 2-3км , но иногда достигает и 5 км. Солнце и луна сквозь Frnb не просвечивает и даже приблизительно нельзя отметить их местоположение. Осадки выпадают в виде обложного дождя или снега, иногда с перерывами.
            </Paragraph>
            <Paragraph>
                Основным процессом образования Frnb является охлаждение воздуха при его восходящем движении вдоль наклонной фронтальной поверхности вблизи фронта.
            </Paragraph>
        </>
    )
}

export const OrographClouds = () => {
    return (
        <>
            <Picture source={orographClouds} />
            <Paragraph>
                Орографические облака высоко-слоистые и слоисто дождевые - Altostratus и Nimbostratus (As и Ns) образуются на наветренных склонах горных хребтов. Если на горы натекает мощный поток влажноо воздуха, то образование облачности происходит главным образом на их наветренных склонах. Облака в начале преобретают форму высоко- слоистых облаков, а затем разрастаются вверх до больших высот. Дальность видимости в облаках ( горизонтальная и наклонная быстро меняется.
            </Paragraph>
        </>
    )
}

export const StratoCumulusDiurnalis = () => {
    return (
        <>
            <Picture source={stratoCumulusDiurnalis} />
            <Paragraph>
                Слоисто-кучевые дневные - Stratocumulus diurnalis (Sc diur) образуются из кучевых облаков при их растекании. Растекание происходит не среднем, а в нижнем ярусе ( под границей инверсии, расположенной довольно низко), В начальной стадии образования ясно видна их связь в Cu, отдельные вершины которых выступают из слоя Sc. Условно принимается, что видимый размер элементов Sc превышает десятикратный диаметр солнца. Облака образуются за счет волновых движений в слоях инверсии, расположенных ниже 2км на поверхностью земли.            </Paragraph>
        </>
    )
}

export const StratoCumulusVesperalis = () => {
    return (
        <>
            <Picture source={stratuCumulusVesperalis} />
            <Paragraph>
                Слоисто- кучевые растекающиеся вечерние - Stratocumulus vesperalis (Sc vesp). Возникают вечером при обычном растекании кучевых облаков в связи с ослаблением восходящих движений воздуха ( конвекции). Имеют вид плоских удлиненных гряд облаков, образующихся при оседании вершин кучевых облаков и растекании их оснований. Состоят из капель, при отрицательной температуре - из переохлажденных капель или из смеси их с кристаллами и снежинками.
            </Paragraph>
        </>
    )
}

export const StratoCumulusTransludius = () => {
    return (
        <>
            <Picture source={stratoCumulusTranslucidus} />
            <Paragraph>
                Слоисто-кучевые просвечивающие облака - Stratocumulus translucidus (Sc trans) серые облака, состоящие из крупных гряд (волн) пластин или глыб, разделенных просветами. В промежутках видетверхний слой облаков или голубое небо. Высота основания в пределах 0.5, -1, 5 км. Толшина слоя от 200 до 800 метров. Состоят из капель, при отрицательной температуре из переохлажденных капель или из смеси их с кристалами и снежинками. В большинстве случаев осадков не дают.            </Paragraph>
        </>
    )
}

export const CumulusHumilis = () => {
    return (
        <>
            <Picture source={cumulusHumilis} />
            <Paragraph>
                Кучевые плоские Сumulus humilis (Cu hum) - разбросанные по небу, довольно плотные облака с четкими горизонтальными основаниями, мало развитыми по вертикали. Наблюдаются преимущественно в теплой время года. Обычно они возникают утром, достигают наибольшего развития в околополуденные часы и к вечеру растекаются, переходя в слоисто-кучевые вечерние облака. Изредка в умеренных широтах наблюдаются зимой. Наличие Cu hum говорит об установившейся хорошей погоде и облака называются "облаками хорошей погоды"
            </Paragraph>
        </>
    )
}

export const StratoCumulusOpacus = () => {
    return (
        <>
            <Picture source={stratoCumulusOpacus} />
            <Paragraph>
                Слоисто-кучевые плотные - Stratocumulus opacus (Sc op). Слой темно серых плотных облаков, состоящих из сливающихся глыб или пластин. Облака сохраняются до тех пор, пока нижняя их поверхность достаточно отчетлива и на ней можно различить валы, гряды или отдельные пластины. Когда элементы облаков сливаются совершенно, а слой становится однородным, то облака переходят в слоисто- дождевые Ns или слоистые. Облака ( Sc op) образуются в большинстве случаев внутри однородных воздушных масс. Высота основания в пределах 0,5-1.5 км. Толшина слоя от 0,2 до 0. 8 км. Сквозь ( Sc op) небо не просвечивается, при этой форме облачности невозможно определить местоположение солнца или луны. Осадки могут выпадають в виде дождя или редкого снега.
            </Paragraph>
        </>
    )
}

export const StratusUndulatus = () => {
    return (
        <>
            <Picture source={stratusUndulatus} />
            <Paragraph>
                Слоистые волнистые - Stratus undulatus (St und), однородный по структуре серый или желтовато-серый слой облаков, на нижней поверхности которых можно различить слабо выраженные волны. Эти волны вследствие их большой длины и низкого расположения облаков иногда заметны лишь в виде правильного чередования более темных и более светлых мест в облаках. Высота основания обычно в пределах 0,2- 0,7 км. Солнце и луна сквозь облака не просвечивают. Облака состоят из капель, при низких температурах - переохлажденных.
            </Paragraph>
            <Paragraph>
                Из St возможно выпадение мороси или мелких снежных зерен, которые заметно ухудшают видимость. Образуются преимущественно внутри однородной воздушной массы Облака образуются в основном за счет охлаждения относительно теплого воздуха при движении его над Холодной подстилающей поверхностью или за счет радиационного выхолаживания нижнего слоя воздуха в течение ночи или нескольких суток подряд. Одной из причин образования St может быть перенос водяного пара турбулентными движениями вверх в подинверсионный слой и конденсация избытка пара в верхней части слоя. Возможна так же диффузия водяного пара в подинверсионный слой сверху их теплой воздушной массы, если она более влажная, чем нижний слой воздуха. Большое значение для образования имеет наличие слоя инверсии температуры, расположенного на небольшой высоте над поверхностью земли.             </Paragraph>
        </>
    )
}
