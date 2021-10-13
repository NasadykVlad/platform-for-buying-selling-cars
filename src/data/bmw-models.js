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
        transmission: 'automat',
        color: 'grey'
    },
    {
        id: uuid(),
        model: 'X5',
        year: 2010,
        price: 15500,
        volume: 3,
        run: 320000,
        fuel: 'diesel',
        transmission: 'automat',
        color: 'grey'
    },
    {
        id: uuid(),
        model: '530',
        year: 2006,
        price: 10000,
        volume: 3,
        run: 170000,
        fuel: 'diesel',
        transmission: 'automat',
        color: 'grey'
    }
]

export default bmwModels
