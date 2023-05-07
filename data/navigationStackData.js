import Home from '../components/views/Home'
import NotExist from '../components/views/NotExist'
import Fateev from '../components/views/Thunder/Thunder.content/Fateev'
import Baily from '../components/views/Thunder/Thunder.content/Baily'
import Waiting from '../components/views/Thunder/Thunder.content/Waiting'
import Sweat from '../components/views/Thunder/Thunder.content/Sweat'
import Ki from '../components/views/Thunder/Thunder.content/Ki'
import Ferrel from '../components/views/Cloud/Cloud.content/Ferrel'
import Ippolitov from '../components/views/Cloud/Cloud.content/Ippolitov'
import Unnamed from '../components/views/Cloud/Cloud.content/Unnamed'
import TurbulenceFly from '../components/views/Turbulence/Turbulence.content/TurbulenceFly'

export const navigationStackData = [
    {
        name: 'Home',
        component: Home,
        options: { headerShown: false }
    },
    {
        name: 'NotExist',
        component: NotExist,
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
]
