import sortHeroes from '../src/sortHeroes.js';

describe('sortHeroes', () => {
    test('сортирует героев по убыванию здоровья', () => {
        const input = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];

        const expected = [
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 },
        ];

        expect(sortHeroes(input)).toEqual(expected);
    });

    test('toBe не работает для объектов', () => {
        const obj = { name: 'маг', health: 100 };
        expect(obj).not.toBe({ name: 'маг', health: 100 }); 
        expect(obj).toEqual({ name: 'маг', health: 100 }); 
    });
});