import { Paragraph } from "../../components/atoms";
import { cyklon, front, mi8, forecast, thunder } from "../../constants/images";
import { forecastsData, frontsData, synopticItemsData, mininumData } from "../itemLinkData/synopticLinkData";

export const synopticDirectoryData = [
    {
        title: 'Фронты',
        description: 'Прогнозирование фронтов',
        link: 'ItemLinkView',
        items: frontsData,
        backgroundImage: front
    },
    {
        title: 'Синоптические объекты',
        description: 'Основные понятия, погода и методы прогнозирования',
        link: 'ItemLinkView',
        items: synopticItemsData,
        backgroundImage: cyklon
    },
    // {
    //     title: 'Методы прогнозирования',
    //     description: 'Прогнозирование явлений погоды',
    //     items: forecastsData,
    //     content: (
    //         <Paragraph big >
    //             Метеорологический калькулятор Вы можете найти в моём приложении <Paragraph big bold>"Meteo calculation app"</Paragraph>
    //         </Paragraph>
    //     ),
    //     link: 'ItemLinkView',
    //     backgroundImage: thunder
    // },
    // ,
    // {
    //     title: 'Ограничения воздушных судов',
    //     description: 'Ограничения воздушных судов при обеспечении полётов',
    //     link: 'ItemLinkView',
    //     content: (
    //         <Paragraph>
    //             Ограничения по ветру, температуре, влажности и тд.
    //         </Paragraph>
    //     ),
    //     items: mininumData,
    //     backgroundImage: mi8
    // },
    // {
    //     title: 'Другое',
    //     description: 'Дополнительная информация',
    //     link: 'NotExist',
    //     backgroundImage: forecast
    // }
]
