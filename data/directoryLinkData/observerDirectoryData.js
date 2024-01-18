import { forestFire, weather } from "../../constants/images";
import { meteoItemsData, meteoPhenomenonData } from "../itemLinkData/observerLinkData";

export const observerDirectoryData = [
    {
        title: 'Основные метеорологические величины',
        description: 'Температура, влажность, давление и тд.',
        link: 'ItemLinkView',
        items: meteoItemsData,
        backgroundImage: forestFire
    },
    {
        title: 'Основные явления погоды',
        description: 'Дождь, туман, дымка, гроза и тд.',
        link: 'ItemLinkView',
        items: meteoPhenomenonData,
        backgroundImage: weather
    }
]