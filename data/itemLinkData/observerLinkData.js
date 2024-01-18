import { FireDanger, PreasureTend, Presure, Temperature, Visibility, Wet, Wind } from "../contentData/observerContentData/meteoItemsData"
import { Blizzard, DustStorm, Fog, Hail, Iceing, Squall, Thunderstorm } from "../contentData/observerContentData/phenomenonContentData"

export const meteoItemsData = [
    {
        title: 'Температура',
        link: 'ArticleView',
        content: (<Temperature />)
    },
    {
        title: 'Влажность',
        link: 'ArticleView',
        content: (<Wet />)
    },
    {
        title: 'Атмосферное давление',
        link: 'ArticleView',
        content: (<Presure />)
    },
    {
        title: 'Барическая тенденция',
        link: 'ArticleView',
        content: (<PreasureTend />)
    },
    {
        title: 'Скорость и направление ветра',
        link: 'ArticleView',
        content: (<Wind />)
    },
    {
        title: 'Видимость',
        link: 'ArticleView',
        content: (<Visibility />)
    },
    {
        title: 'Коэффициент пожароопасности',
        link: 'ArticleView',
        content: (<FireDanger />)
    }
]

export const meteoPhenomenonData = [
    {
        title: 'Туман и дымка',
        link: 'ArticleView',
        content: (<Fog />)
    },
    {
        title: 'Метель и позёмок',
        link: 'ArticleView',
        content: (<Blizzard />)
    },
    {
        title: 'Пыльная и песчаная буря',
        link: 'ArticleView',
        content: (<DustStorm />)
    },
    {
        title: 'Грозы',
        link: 'ArticleView',
        content: (<Thunderstorm />)
    },
    {
        title: 'Грозы',
        link: 'ArticleView',
        content: (<Thunderstorm />)
    },
    {
        title: 'Град',
        link: 'ArticleView',
        content: (<Hail />)
    },
    {
        title: 'Шквал',
        link: 'ArticleView',
        content: (<Squall />)
    },
    {
        title: 'Обледенение',
        link: 'ArticleView',
        content: (<Iceing />)
    },
]