import './css/style.css';

import './js/app';

const { orderByProps } = require('./orderByProps');
const { extractSpecialAttacks } = require('./extractSpecialAttacks');

// Пример использования orderByProps
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const orderedProps = orderByProps(obj, ['name', 'level']);
console.log(orderedProps);

// Пример использования extractSpecialAttacks
const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
        }
    ]
};

const specialAttacks = extractSpecialAttacks(character);
console.log(specialAttacks);

