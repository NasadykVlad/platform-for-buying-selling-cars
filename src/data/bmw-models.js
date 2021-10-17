import uuid from "react-uuid";

const bmwModels = [
    {
        id: uuid(),
        model: 'M5',
        year: 2018,
        price: 101500,
        volume: 4.4,
        run: 33000,
        fuel: 'gas',
        transmission: 'Automat',
        color: 'blue',
        img_link: 'https://kolesa-uploads.ru/-/25eb6b26-5b93-464e-8a54-ff80464d1f3c/geely-gse-3s-11.jpg'
    },
    {
        id: uuid(),
        model: 'X5',
        year: 2010,
        price: 15500,
        volume: 3.000,
        run: 320000,
        fuel: 'diesel',
        transmission: 'Automat',
        color: 'grey',
        img_link: 'https://a.d-cd.net/234gcas-960.jpg'
    },
    {
        id: uuid(),
        model: '530',
        year: 2006,
        price: 10000,
        volume: 3.000,
        run: 170000,
        fuel: 'diesel',
        transmission: 'Automat',
        color: 'black',
        img_link: 'https://avtodiski.net.ua/images/news/2019-01-08/bmw-e60-diski-r19.jpg'
    }
]

export default bmwModels
