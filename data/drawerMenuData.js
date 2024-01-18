import Map from '../components/views/Map'
import NotExist from '../components/views/NotExist'
import Home from '../components/views/Home'
import Fateev from '../components/views/Thunder/Thunder.content/Fateev'
import Baily from '../components/views/Thunder/Thunder.content/Baily'
import Waiting from '../components/views/Thunder/Thunder.content/Waiting'
import Sweat from '../components/views/Thunder/Thunder.content/Sweat'
import Ki from '../components/views/Thunder/Thunder.content/Ki'
import Ferrel from '../components/views/Cloud/Cloud.content/Ferrel'
import Ippolitov from '../components/views/Cloud/Cloud.content/Ippolitov'
import Unnamed from '../components/views/Cloud/Cloud.content/Unnamed'
import TurbulenceFly from '../components/views/Turbulence/Turbulence.content/TurbulenceFly'
import Synoptic from '../components/views/Synoptic'
import Observer from '../components/views/Observer'
import Common from '../components/views/Common'
import HelloView from '../components/views/HelloView'
import Fog from '../components/views/Fog'
import Thunder from '../components/views/Thunder'
import Turbulence from '../components/views/Turbulence'
import Ice from '../components/views/Ice'

import CloudAtlas from '../components/views/CloudAtlas/'
import Article from '../components/views/Article'
import ArticleView from '../components/views/ArticleView'
import CloudSubAtlas from '../components/views/CloudSubAtlas'
import ItemLinkView from '../components/views/ItemLinkView'
import Preasure from '../components/views/Preasure'
import FootMeters from '../components/views/FootMeters'
import Speed from '../components/views/Speed'
import Other from '../components/views/Other/Other'
import Fire from '../components/views/Fire'
import SideWind from '../components/views/Other/Other.content/SideWind'
import SunDirection from '../components/views/Other/Other.content/SunDirection'


export const DrawerMenuData = [
    {
        name: 'Home',
        component: Home,
        options: { headerShown: false }
    },
    {
        name: 'HelloView',
        component: HelloView,
        options: { headerShown: false }
    },
    {
        name: 'NotExist',
        component: NotExist,
        options: { headerShown: false }
    },
    //Разделы статей
    {
        name: 'Synoptic',
        component: Synoptic,
        options: { headerShown: false }
    },
    {
        name: 'Observer',
        component: Observer,
        options: { headerShown: false },
    },
    {
        name: 'Common',
        component: Common,
        options: { headerShown: false }
    },
    //Разделы расчетов
    {
        name: 'Fog',
        component: Fog,
        options: { headerShown: false }
    },
    {
        name: 'Other',
        component: Other,
        options: { headerShown: false }
    },
    {
        name: 'Thunder',
        component: Thunder,
        options: { headerShown: false }
    },
    {
        name: 'Turbulence',
        component: Turbulence,
        options: { headerShown: false }
    },
    {
        name: 'Ice',
        component: Ice,
        options: { headerShown: false }
    },
    //Данные из вкладки "Грозы"
    {
        name: 'ThunderBaily',
        component: Baily,
        options: { headerShown: false }
    },
    {
        name: 'ThunderFateev',
        component: Fateev,
        options: { headerShown: false }
    },
    {
        name: 'ThunderWaiting',
        component: Waiting,
        options: { headerShown: false }
    },
    {
        name: 'ThunderSweat',
        component: Sweat,
        options: { headerShown: false }
    },
    {
        name: 'ThunderKi',
        component: Ki,
        options: { headerShown: false }
    },
    //Данные из вкладки "ВНГО"
    {
        name: 'VngoFerrel',
        component: Ferrel,
        options: { headerShown: false }
    },
    {
        name: 'VngoIppolitov',
        component: Ippolitov,
        options: { headerShown: false }
    },
    {
        name: 'VngoUnnamed',
        component: Unnamed,
        options: { headerShown: false }
    },
    //Данные из вкладки "Болтанка"
    {
        name: 'TurbuleneFly',
        component: TurbulenceFly,
        options: { headerShown: false }
    },
    //Данные из вкладки "Туманы"

    //FROM METEO DIRECTORY APP


    {
        name: 'ItemLinkView',
        component: ItemLinkView,
        options: { headerShown: false }
    },
    {
        name: 'CloudAtlas',
        component: CloudAtlas,
        options: { headerShown: false }
    },
    {
        name: 'CloudSubAtlas',
        component: CloudSubAtlas,
        options: { headerShown: false }
    },
    {
        name: 'ArticleView',
        component: ArticleView,
        options: { headerShown: false }
    },
    {
        name: 'Article',
        component: Article,
        options: { headerShown: false }
    },

    //FROM METEO CALC SMALL
    {
        name: 'Preasure',
        component: Preasure,
        options: { headerShown: false }
    }, {
        name: 'FootMeters',
        component: FootMeters,
        options: { headerShown: false }
    }, {
        name: 'Speed',
        component: Speed,
        options: { headerShown: false }
    }, {
        name: 'Fire',
        component: Fire,
        options: { headerShown: false }
    },
    //NEW
    {
        name: 'SideWind',
        component: SideWind,
        options: { headerShown: false }
    },
    {
        name: 'SunDirection',
        component: SunDirection,
        options: { headerShown: false }
    },
]
