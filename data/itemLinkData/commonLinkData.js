import { Bcm1, Dvo2, Fi3, Ipvd1, Ipvu, Ivo1m, Lingom2, M110, Md20, O3, Tgba1, Tgc1 } from "../contentData/commonContentData/meteoTech";


export const meteoTechData = [
    {
        title: 'Термометры и гигрометры',
        link: 'ItemLinkView',
        items: [
            {
                title: 'ТГЦ-1',
                link: 'ArticleView',
                content: (<Tgc1 />)
            },
            {
                title: 'ТГБА-1',
                link: 'ArticleView',
                content: (<Tgba1 />)
            }
        ],
    },
    {
        title: 'Барометры',
        link: 'ItemLinkView',
        items: [
            {
                title: 'БЦМ-1',
                link: 'ArticleView',
                content: (<Bcm1 />)
            },
            {
                title: 'МД-20',
                link: 'ArticleView',
                content: (<Md20 />)
            },
            {
                title: 'ТГБА-1',
                link: 'ArticleView',
                content: (<Tgba1 />)
            },
            {
                title: 'Барометр-анероид М-110',
                link: 'ArticleView',
                content: (<M110 />)
            },
        ],
    },
    {
        title: 'Измерители параметров ветра',
        link: 'ItemLinkView',
        items: [
            {
                title: 'ИПВ-У',
                link: 'ArticleView',
                content: (<Ipvu />)
            },
            {
                title: 'ИПВД-1',
                link: 'ArticleView',
                content: (<Ipvd1 />)
            },
        ]
    },
    {
        title: 'Измерители ВНГО',
        link: 'ItemLinkView',
        items: [
            {
                title: 'ДВО-2',
                link: 'ArticleView',
                content: (<Dvo2 />)
            },
            {
                title: 'ИВО-1М',
                link: 'ArticleView',
                content: (<Ivo1m />)
            },
            {
                title: 'ЛИНГОМ-2',
                link: 'ArticleView',
                content: (<Lingom2 />)
            },
        ]
    },
    {
        title: 'Измерители МДВ',
        link: 'ItemLinkView',
        items: [
            {
                title: 'ФИ-3',
                link: 'ArticleView',
                content: (<Fi3 />)
            }
        ]
    },
    {
        title: 'Осадкомеры',
        link: 'ItemLinkView',
        items: [
            {
                title: 'Осадкомер Третьякова О-1',
                link: 'ArticleView',
                content: (<O3 />)
            }
        ]
    },
    // {
    //     title: 'Метеорологические локаторы',
    //     link: 'ItemLinkView',
    //     // items: synopticItemsData,
    // },
    // {
    //     title: 'Подвижные метеорологические станции',
    //     link: 'ItemLinkView',
    //     // items: synopticItemsData,
    // },
]