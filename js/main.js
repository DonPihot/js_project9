// Переменные легко копируются и становятся независимыми. Здесь для каждой переменной создаётся отдельная ячейка в памяти:


// let a = 1;
// let b = 5;
// 
// a = b;
// 
// console.log(a); // 5 
// console.log(b); // 5
// 
// a = 2;
// 
// console.log(a); // 2
// console.log(b); // 5



// Объекты напоминают систему ярлыков в питоне, где для объекта создаётся ячейка. 
// И для неё второй объект, куда копируют первый, является ярлыком. Таким образом, они оба относятся к одной ячейке.
// Они есть разные имена для одного объекта. Так же и с массивами, ибо они объекты. 


// let obj = {
// 
//     name: 'Ali',    // Кстати, ключи в объектах сохраняются именно с кавычками, просто при создании можно их не писать, да и в выводе они не всегда есть
//     city: 'Grozny'
// }
// 
// let obj2 = obj;
// 
// console.log(obj); // {name: 'Ali', city: 'Grozny'}
// console.log(obj2); // {name: 'Ali', city: 'Grozny'}
// 
// obj.age = 25;
// 
// console.log(obj); // {name: 'Ali', city: 'Grozny', age: 25}
// console.log(obj2); // {name: 'Ali', city: 'Grozny', age: 25}
// 
// let arr = [1,2,3,4,5];
// 
// let arr2 = arr;
// 
// arr2[5] = 6;
// 
// console.log(arr);
// console.log(arr2);



// SPRED-оператор: ...obj . Используется для копирования объекта или массива.
// SPRED раскрывает объект, то есть убирает все скобки и оставляет данные, поэтому он обычно не выводится:


// let obj = {
//     name: 'Ali',
//     city: 'Grozny'
// }
// 
// let obj2 = {...obj};
// 
// obj2.age = 34;
// 
// console.log(obj); // {name: 'Ali', city: 'Grozny'}
// 
// console.log(obj2); // {name: 'Ali', city: 'Grozny', age: 34}



// Можно приписывать свойства:


// let obj2 = {...obj, car: 'Mers'}
// 
// obj2.age = 34
// 
// console.log(obj2); // {name: 'Ali', city: 'Grozny', car: 'Mers', age: 34}



// Если написать так, ничего не изменится, ибо ключи одинаковые:


// let obj = {
//     name: 'Ali',
//     city: 'Grozny'
// }
//
// let obj3 = {
//     name: 'Ali',
//     city: 'Grozny'
// }
//
// let obj4 = {
//     car: 'Mers', house: 'big'
// }
//
//
// let obj2 = {...obj, ...obj3, ...obj4};
//
//console.log(obj2); // {name: 'Ali', city: 'Grozny', car: 'Mers', house: 'big'}


// ВСЁ ЭТО НАЗЫВАЕТСЯ ПОВЕРХНОСТНЫМ КОПИРОВАНИЕМ, ИБО НЕ КОПИРУЮТСЯ ВЛОЖЕННЫЕ ЭЛЕМЕНТЫ, ТО БИШЬ, НАПРИМЕР, ВЛОЖЕННЫЕ В ОБЪЕКТЫ ОБЪЕКТЫ!!!



//  В случае массива ниже можно не приписывать SPRED, а выводить его - это есть раскрытие массива:


// let arr = [1,2,3,45,66];
//
// console.log(...arr); // 1,2,3,45,66
//
// let arr2 = [...arr];
// 
// let arr2[5] = 55;
//
// console.log(arr); 1,2,3,45,66
// console.log(arr2); 1,2,3,45,66,55



// REST-оператор используется в функциях:


// function fn(...args){ // args лишь произвольное название, которое может меняться по желанию, и оно являетя массивом
//  console.log(args) или args.forEach(item => console.log(item));   // будучи массивом, к этому args можно применять методы массивов, типа forEach.
// }
//
// fn(2, 3, 4, 5, 6, 455, 45334, 6565, 4535, 34636, 463636, 77000) // Можно передавать сколько угоьдно аргументов благодаря REST
//
// Функция выведет их все!


// Также можно задавать параметры функции, котрые должны быть обязательными:


// function fn(a, b, ...args) // При этом элементы эти будут вне массива! И args должен быть последним!



// Деструктуризация:
// Можем достать ключи объекта из объекта:


// let obj = {
// name: 'Ali',
// city: 'Grozny'
// }
//
// let {name, city} = obj;
//
// console.log(name); Ali
// console.log(city); Grozny

// let arr = ['AliE', 'Groz']
//
// let [name, city] = arr;
//
// console.log(name, city); // В случае с массивами тут решает не имя переменной, а ёё очередность, то бишь номер индекса



// ДОМАШКА:


// 1:

let arr_1 = [101, 202, 303, 404, 505];

let arr_2 = [606, 707, 808, 909];

let superArr = [...arr_1, ...arr_2];

console.log(superArr);

// 2:

console.log(Math.min(...superArr));

// 3:

let obj_1 = {width: 300, heigth: 550};

let obj_2 = {...obj_1};

obj_2.area = function(){

    return this.width*this.heigth;
};

console.log(obj_2.area());

// 4:

function Sum(...count)
{
    return count.reduce((sum, item) => sum + item, 0);
}

console.log(Sum(1,434,235252));









