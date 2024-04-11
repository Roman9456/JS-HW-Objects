// TODO: write your code here
import sum from './basic';
import { orderByProps } from './orderByProps.js';

console.log('worked');

console.log(sum([1, 2]));
 

// Определяем объект obj и порядок сортировки sortOrder
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const sortOrder = ['name', 'level'];

// Вызываем функцию orderByProps и сохраняем результат в переменную sortedProps
const sortedProps = orderByProps(obj, sortOrder);

// Выводим результат сортировки в консоль
console.log(sortedProps);