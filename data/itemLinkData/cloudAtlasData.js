import { View } from "react-native";
import { Paragraph, Picture } from "../../components/atoms";
import { altoCumulus, altoCumulusAtlas, altoCumulusFloccus, altoCumulusLenticularis, altoCumulusTranslucidus, altoStratusOpacus, altoStratusTranslucidus, cirroCumulusCumuliformis, cirroCumulusUndulatus, cirroStratusFibr, cirroStratusFibratus, cirrus, cirrusFibratus, cirrusIntortus, cirrusIntortusNebulosus, cirrusSpissatus, cirrusTraktus, cirrusUncinus, cirrusVertebratus, cumuloNimbus, cumuloNimbusAtlas, cumulusCongestus, cumulusHumilis, cumulusMediocris, fog, forecastClouds, fractoNimbus, meteo, orographClouds, stratoCumulusDiurnalis, stratoCumulusOpacus, stratoCumulusTranslucidus, stratuCumulusVesperalis, stratusNebulosus, stratusUndulatus } from "../../constants/images";
import { CirroCumulusCumuliformis, CirroCumulusUndulatus, CirroStratusFibr, CirroStratusFibratus, CirroStratusNebulosus, CirrusFibratus, CirrusIntortus, CirrusSpissatus, CirrusTraktus, CirrusUncinus, CirrusVertebratus } from "../contentData/cloudContentData/heightClouds";
import { CumulusHumilis, FractoNimbus, OrographClouds, StratoCumulusDiurnalis, StratoCumulusOpacus, StratoCumulusTransludius, StratoCumulusVesperalis, StratusNebulosus, StratusUndulatus } from "../contentData/cloudContentData/lowClouds";
import { AltoCumulus, AltoCumulusFloccus, AltoCumulusLenticularis, AltoCumulusTranslucidus, AltoStratusOpacus, AltoStratusTranlucidus } from "../contentData/cloudContentData/middleClouds";
import { CumuloNumbus, CumulusCongestus, CumulusMediocris } from "../contentData/cloudContentData/verticalClouds";

export const cloudAtlasData = [
    {
        title: 'Облака верхнего яруса',
        description: 'Высота: 6-12 км',
        backgroundImage: cirrus,
        link: 'CloudSubAtlas',
        items: [
            {
                title: 'Перистые волокнистые - Cirrus fibratus (Ci fib)',
                link: 'ArticleView',
                description: 'Являются наиболее общей формой облаков верхнего яруса.',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusFibratus,
                content: (
                    <CirrusFibratus />
                )
            },
            {
                title: 'Перисто-слоистые волнистые - Cirrostratus fibratus (Cs fib)',
                link: 'ArticleView',
                description: 'Толщина слоя окло 100м',
                height: '6-8 км в умеренных широтах',
                backgroundImage: cirroStratusFibratus,
                content: (
                    <CirroStratusFibratus />
                )
            },
            {
                title: 'Перистые хребтовидные Cirrus vertebratus (Ci vert)',
                link: 'ArticleView',
                description: 'Около солнца и луны в этих облаках часто наблюдаются круги (гало) радиусом 22 и 46 градусов или части этих кругов.',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusVertebratus,
                content: (
                    <CirrusVertebratus />
                )
            },
            {
                title: 'Перистые плотные - Cirrus spissatus (Ci sp)',
                link: 'ArticleView',
                description: 'Около солнца и луны в этих облаках часто наблюдаются круги (гало) радиусом 22 и 46 градусов или части этих кругов',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusSpissatus,
                content: (
                    <CirrusSpissatus />
                )
            },
            {
                title: 'Перисто-слоистые волокнистые - Cirrostratus fibratus (Cs fibr)',
                link: 'ArticleView',
                description: 'Тонкая пелена имеющая в основании волнистый вид, частично закрывающий небо.',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirroStratusFibr,
                content: (
                    <CirroStratusFibr />
                )
            },
            {
                title: 'Перистые перепутанные - Cirrus intortus (Ci int)',
                link: 'ArticleView',
                description: 'Толщина слоя облаков может колебаться в широких пределах, от сотен метров до нескольких километров.',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusIntortus,
                content: (
                    <CirrusIntortus />
                )
            },
            {
                title: 'Перисто-слоистые туманообразные - Cirrostratus nebulosus (Cs neb)',
                link: 'ArticleView',
                description: 'Около солнца и луны в этих облаках часто наблюдаются круги ( гало) радиусом 22 и 46 градусов или части этих кругов.',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusIntortusNebulosus,
                content: (
                    <CirroStratusNebulosus />
                )
            },
            {
                title: 'Перистые когтевидные - Cirrus uncinus (Ci un)',
                link: 'ArticleView',
                description: 'Чаще всего облака наблюдаются при наличии восходящего потока воздуха при наступлении теплого фронта',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusUncinus,
                content: (
                    <CirrusUncinus />
                )
            },
            {
                title: 'Перисто-кучевые кучевообразные Cirrocumulus cumuliformis (Cс cuf)',
                link: 'ArticleView',
                description: 'Толщина слоя не превышает 200-400 метров.',
                height: '6-8 км в умеренных широтах',
                backgroundImage: cirroCumulusCumuliformis,
                content: (
                    <CirroCumulusCumuliformis />
                )
            },
            {
                title: 'Перисто-кучевые волнистые Cirrocumulus undulatus (Cc und)',
                link: 'ArticleView',
                description: 'Толщина слоя не превышает 200-400 метров. Часто могут наблюдаться перед холодным фронтом 2-го рода и перед верхним холодным фронтом.',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirroCumulusUndulatus,
                content: (
                    <CirroCumulusUndulatus />
                )
            },
            {
                title: 'Следы самолетов (конденсационные следы) - Cirrus traktus (Ci trac)',
                link: 'ArticleView',
                description: 'Следы самолетов наблюдаются на больших высотах в условиях очень низких температур, при которых вода превращается в лед, не успевая испариться.',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusTraktus,
                content: (
                    <CirrusTraktus />
                )
            },
        ]
    },
    {
        title: 'Облака среднего яруса',
        description: 'Высота: 2-6 км',
        backgroundImage: altoCumulus,
        link: 'CloudSubAtlas',
        items: [
            {
                title: 'Высоко - кучевые хлопьевидные - Altocumulus floccus (Ac fl)',
                link: 'ArticleView',
                description: 'Наличие этих облаков теплым и влажным летним утром часто предвещает о скором появлении грозовых облаков или перемене погоды.',
                height: '2-6 км в умеренных широтах',
                backgroundImage: altoCumulusFloccus,
                content: (
                    <AltoCumulusFloccus />
                )
            },
            {
                title: 'Высоко-слоистые просвечивающие - Altostratus translucidus (As trans)',
                link: 'ArticleView',
                description: 'Толщина слоя облаков Ac trans в среднем коло 1 км, изредка до 2 км',
                height: '3-5 км в умеренных широтах',
                backgroundImage: altoStratusTranslucidus,
                content: (
                    <AltoStratusTranlucidus />
                )
            },
            {
                title: 'Высоко-кучевые облака Altocumulus (Ac)',
                link: 'ArticleView',
                description: 'Наличие этих облаков теплым и влажным летним утром часто предвещает о скором появлении грозовых облаков или перемене погоды.',
                height: '2-5 км в умеренных широтах',
                backgroundImage: altoCumulusAtlas,
                content: (
                    <AltoCumulus />
                )
            },
            {
                title: 'Высоко-кучевые чечевицеобразные - Altocumulus lenticularis (Aс lent)',
                link: 'ArticleView',
                description: 'Возникают перед холодными фронтами или фронтами окклюзий.',
                height: '2-6 км в умеренных широтах',
                backgroundImage: altoCumulusLenticularis,
                content: (
                    <AltoCumulusLenticularis />
                )
            },
            {
                title: 'Высоко-кучевые просвечивающие - Altocumulus translucidus (Ac trans)',
                link: 'ArticleView',
                description: 'Обычно возникают в результате поднятия теплых воздушных масс, а также при наступлении холодного фронта',
                height: '2-6 км в умеренных широтах',
                backgroundImage: altoCumulusTranslucidus,
                content: (
                    <AltoCumulusTranslucidus />
                )
            },
            {
                title: 'Высоко-слоистые непросвечивающие - Altostratus opacus (As op)',
                link: 'ArticleView',
                description: 'Чаще всего такие облака возникают в процессе опускания и уплотнения перисто-слоистого облака.',
                height: '3-5 км в умеренных широтах',
                backgroundImage: altoStratusOpacus,
                content: (
                    <AltoStratusOpacus />
                )
            },
        ]
    },
    {
        title: 'Облака нижнего яруса',
        description: 'Высота: 0м - 2 км',
        link: 'CloudSubAtlas',
        backgroundImage: fog,
        items: [
            {
                title: 'Слоистые туманообразные - Stratus nebulosus (St neb)',
                link: 'ArticleView',
                description: 'Иногда облака сливаются с наземным туманом.',
                height: '100-700м',
                backgroundImage: stratusNebulosus,
                content: (
                    <StratusNebulosus />
                )
            },
            {
                title: 'Разорванно дождевые - Fractonimbus (Frnb)',
                link: 'ArticleView',
                description: 'Толщина основания колеблется в пределах 2-3км, но иногда достигает и 5 км.',
                height: '100-1000м',
                backgroundImage: fractoNimbus,
                content: (
                    <FractoNimbus />
                )
            },
            {
                title: 'Орографические облака высоко-слоистые и слоисто дождевые - Altostratus и Nimbostratus (As и Ns)',
                link: 'ArticleView',
                description: 'Образуются на наветренных склонах горных хребтов.',
                backgroundImage: orographClouds,
                content: (
                    <OrographClouds />
                )
            },
            {
                title: 'Слоисто-кучевые дневные - Stratocumulus diurnalis (Sc diur)',
                link: 'ArticleView',
                description: 'Образуются из кучевых облаков при их растекании.',
                height: 'ниже 2 км',
                backgroundImage: stratoCumulusDiurnalis,
                content: (
                    <StratoCumulusDiurnalis />
                )
            },
            {
                title: 'Слоисто- кучевые растекающиеся вечерние - Stratocumulus vesperalis (Sc vesp)',
                link: 'ArticleView',
                description: 'Возникают вечером при обычном растекании кучевых облаков в связи с ослаблением восходящих движений воздуха ( конвекции).',
                height: 'ниже 2 км',
                backgroundImage: stratuCumulusVesperalis,
                content: (
                    <StratoCumulusVesperalis />
                )
            },
            {
                title: 'Слоисто-кучевые просвечивающие облака - Stratocumulus translucidus (Sc trans)',
                link: 'ArticleView',
                description: 'Толшина слоя от 200 до 800 метров.',
                height: '500 - 1500м',
                backgroundImage: stratoCumulusTranslucidus,
                content: (
                    <StratoCumulusTransludius />
                )
            },
            {
                title: 'Кучевые плоские Сumulus humilis (Cu hum)',
                link: 'ArticleView',
                description: 'Наличие Cu hum говорит об установившейся хорошей погоде и облака называются "облаками хорошей погоды".',
                height: 'ниже 2 км',
                backgroundImage: cumulusHumilis,
                content: (
                    <CumulusHumilis />
                )
            },
            {
                title: 'Слоисто-кучевые плотные - Stratocumulus opacus (Sc op)',
                link: 'ArticleView',
                description: 'Толшина слоя от 0,2 до 0. 8 км.',
                height: '500-1500м',
                backgroundImage: stratoCumulusOpacus,
                content: (
                    <StratoCumulusOpacus />
                )
            },
            {
                title: 'Слоистые волнистые - Stratus undulatus (St und)',
                link: 'ArticleView',
                description: 'Образуются преимущественно внутри однородной воздушной массы.',
                height: '200-700м',
                backgroundImage: stratusUndulatus,
                content: (
                    <StratusUndulatus />
                )
            },
        ]
    },
    {
        title: 'Облака вертикального развиния',
        description: 'Нижняя раница - 200-100м, верхняя границы 3-8км',
        backgroundImage: cumuloNimbus,
        link: 'CloudSubAtlas',
        items: [
            {
                title: 'Кучевые средние облака - Cumuluc mediocris (Cu med)',
                link: 'ArticleView',
                description: ' Являются промежуточным между Cu hum и Cu cong.',
                height: '800-1500м',
                backgroundImage: cumulusMediocris,
                content: (
                    <CumulusMediocris />
                )
            },
            {
                title: 'Кучевые мощные - Cumulus congestus (Cu cong)',
                link: 'ArticleView',
                description: 'Толщина облаков в 1,5 - 2 раза превышают основание облака. ',
                // height: '200-700м',
                backgroundImage: cumulusCongestus,
                content: (
                    <CumulusCongestus />
                )
            },
            {
                title: 'Кучево-дождевые облака Cumulonimbus (Cb)',
                link: 'ArticleView',
                description: 'Вертикальная протяженность обычно до 3-4 км, но могут развиваться до тропопаузы.',
                height: '400-1000м',
                backgroundImage: cumuloNimbusAtlas,
                content: (
                    <CumuloNumbus />
                )
            },
        ]
    },
    {
        title: 'Облака, предсказывающие погоду',
        description: 'Местные признаки для прогнозов погоды',
        backgroundImage: forecastClouds,
        link: 'CloudSubAtlas',
        items: [
            {
                title: 'Перистые волокнистые - Cirrus fibratus (Ci fib)',
                link: 'ArticleView',
                description: 'Являются наиболее общей формой облаков верхнего яруса.',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusFibratus,
                content: (
                    <CirrusFibratus />
                )
            },
            {
                title: 'Перистые когтевидные - Cirrus uncinus (Ci un)',
                link: 'ArticleView',
                description: 'Чаще всего облака наблюдаются при наличии восходящего потока воздуха при наступлении теплого фронта',
                height: '7-10 км в умеренных широтах',
                backgroundImage: cirrusUncinus,
                content: (
                    <CirrusUncinus />
                )
            },
            {
                title: 'Кучевые мощные - Cumulus congestus (Cu cong)',
                link: 'ArticleView',
                description: 'Толщина облаков в 1,5 - 2 раза превышают основание облака. ',
                // height: '200-700м',
                backgroundImage: cumulusCongestus,
                content: (
                    <CumulusCongestus />
                )
            },
            {
                title: 'Высоко-кучевые облака Altocumulus (Ac)',
                link: 'ArticleView',
                description: 'Наличие этих облаков теплым и влажным летним утром часто предвещает о скором появлении грозовых облаков или перемене погоды.',
                height: '2-5 км в умеренных широтах',
                backgroundImage: altoCumulusAtlas,
                content: (
                    <AltoCumulus />
                )
            },
            {
                title: 'Высоко - кучевые хлопьевидные - Altocumulus floccus (Ac fl)',
                link: 'ArticleView',
                description: 'Наличие этих облаков теплым и влажным летним утром часто предвещает о скором появлении грозовых облаков или перемене погоды.',
                height: '2-6 км в умеренных широтах',
                backgroundImage: altoCumulusFloccus,
                content: (
                    <AltoCumulusFloccus />
                )
            },
            {
                title: 'Кучевые плоские Сumulus humilis (Cu hum)',
                link: 'ArticleView',
                description: 'Наличие Cu hum говорит об установившейся хорошей погоде и облака называются "облаками хорошей погоды".',
                height: 'ниже 2 км',
                backgroundImage: cumulusHumilis,
                content: (
                    <CumulusHumilis />
                )
            },
        ]
    }

]