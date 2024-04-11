import { extractSpecialAttacks } from '../extractSpecialAttacks';

test('Extract special attacks with default description', () => {
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
                // Описание отсутствует, будет использоваться значение по умолчанию
            }
        ]
    };

    const result = extractSpecialAttacks(character);

    expect(result).toEqual([
        {
            id: 8,
            name: 'Двойной выстрел',
            description: 'Двойной выстрел наносит двойной урон',
            icon: 'http://...'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            description: 'Описание недоступно', // Описание отсутствует, используется значение по умолчанию
            icon: 'http://...'
        }
    ]);
});