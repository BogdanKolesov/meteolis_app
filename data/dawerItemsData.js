export const drawerItemsData = [
    {
        title: 'Главная',
        isVisible: false,
        items: []
    },
    {
        title: 'Статьи',
        isVisible: false,
        items: [
            {
                text: 'Для синоптиков',
                link: 'Synoptic'
            },
            {
                text: 'Для наблюдателей',
                link: 'Observer'
            },
            {
                text: 'Общие',
                link: 'Common'
            }
        ]
    },
    {
        title: 'Калькуляторы',
        isVisible: false,
        items: [
            {
                text: 'Туманы',
                link: 'Fog'
            },
            {
                text: 'Грозы',
                link: 'Thunder'
            },
            {
                text: 'Болтанка',
                link: 'Turbulence'
            },
            {
                text: 'Обледенение',
                link: 'Ice'
            },
            {
                text: 'Другое',
                link: 'Other'
            },
        ]
    },
    ,
    {
        title: 'Коды',
        isVisible: false,
        items: [
            {
                text: 'Metar/Taf',
                link: 'NotExist'
            },
            {
                text: 'КН-01 (SYNOP)',
                link: 'NotExist'
            },
            {
                text: 'КМИ-85',
                link: 'NotExist'
            }
        ]
    }
]