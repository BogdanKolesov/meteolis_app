import { Paragraph, Picture } from "../../components/atoms";
import { cumuloNimbus } from "../../constants/images";
import { ColdFrontOne, ColdFrontTwo, HeightFront, OcclusionFront, SecondFront, WarmFront } from "../contentData/synopticContentData/frontData";
import { Antizyclon, Ziclon } from "../contentData/synopticContentData/synopticObjectsData";

export const frontsData = [
    {
        title: 'Тёплый фронт',
        link: 'ArticleView',
        content: (<WarmFront />)
    },
    {
        title: 'Холодный фронт 1-го рода',
        link: 'ArticleView',
        content: (<ColdFrontOne />)
    },
    {
        title: 'Холодный фронт 2-го рода',
        link: 'ArticleView',
        content: (<ColdFrontTwo />)
    },
    {
        title: 'Фронт окклюзии',
        link: 'ArticleView',
        content: (<OcclusionFront />)
    },
    {
        title: 'Вторичный фронт',
        link: 'ArticleView',
        content: (<SecondFront />)
    },
    {
        title: 'Высотный фронт',
        link: 'ArticleView',
        content: (<HeightFront />)
    },
]

export const synopticItemsData = [
    {
        title: 'Циклон',
        link: 'ArticleView',
        content: (<Ziclon />)
    },
    // {
    //     title: 'Барическая ложбина',
    //     link: 'coldFront'
    // },
    {
        title: 'Антициклон',
        link: 'ArticleView',
        content: (<Antizyclon />)
    },
    // {
    //     title: 'Гребень антициклона',
    //     link: 'coldFront'
    // },
    // {
    //     title: 'Седловина',
    //     link: 'coldFront'
    // }
]

export const forecastsData = [
    {
        title: 'Прогноз гроз',
        link: 'coldFront'
    },
    {
        title: 'Прогноз туманов',
        link: 'coldFront'
    },
    {
        title: 'Прогноз осадков',
        link: 'coldFront'
    },
    {
        title: 'Прогноз температуры',
        link: 'coldFront'
    },
    {
        title: 'Прогноз обледенения',
        link: 'coldFront'
    },
    {
        title: 'Прогноз ветра',
        link: 'coldFront'
    },
]

export const mininumData = [
    {
        title: 'Самолёты',
        link: 'coldFront'
    },
    {
        title: 'Ветролёты',
        link: 'coldFront'
    },
    {
        title: 'Беспилотники',
        link: 'coldFront'
    }
]