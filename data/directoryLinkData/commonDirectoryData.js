import { cloudAtlas, codes, dove, meteo } from "../../constants/images";
import { synoptikLinkData } from "../itemLinkData";
import { meteoTechData } from "../itemLinkData/commonLinkData";
import { synopticItemsData } from "../itemLinkData/synopticLinkData";

export const commonDirectoryData = [
    {
        title: 'Атлас облаков',
        description: 'Виды, форма и классификация облаков',
        link: 'CloudAtlas',
        backgroundImage: cloudAtlas
    },
    // {
    //     title: 'Орнитологический атлас',
    //     description: 'Пособие для определения вида птиц',
    //     link: 'NotExist',
    //     items: synoptikLinkData,
    //     backgroundImage: dove
    // },
    {
        title: 'Технические средства метеослужбы',
        description: 'Термометры, гигрометры, барометры и тд.',
        link: 'ItemLinkView',
        items: meteoTechData,
        backgroundImage: meteo
    },
    //  {
    //     title: 'Метеорологические коды',
    //     description: 'КН-01, КН-04, METAR, TAF, КМИ-85 и тд.',
    //     link: 'ItemLinkView',
    //     items: synoptikLinkData,
    //     backgroundImage: codes
    // }
]