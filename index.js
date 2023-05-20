// const clients = ['Mark' , 'Tom' , 'Jery'];

// clients[3] = 'Kiwi'; //изменение элемента масcива

// console.table(clients);

// console.log(clients[2]); // обращение к элементам масcива

// const lastIndex = clients.length - 1; // последний индекс
// console.log(lastIndex);

// const a = [1, 2, 3];
// const b = a; //ссылка на масcив

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b); //true сравнение происходит по адресу памяти не по значению для сложных типов
// console.log([1, 2, 3] === [1, 2, 3]); //false не равно потому что разные ссылки

// const clients = ["Mango", "Ajax", "Poly"];
// console.table(clients);

// const lastIndex = clients.length - 1;

// for (let i = 0; i <= lastIndex ; i += 1) {
// console.table(clients[i]);
// }

// for (let i = 0; i <= lastIndex ; i += 1) {
// clients[i] += '-1';   // если необходимо изменить элемент масcива используем цикл for
//     }
//     console.table(clients);

// for (const client of clients) {
//   console.log(client);
// } // цикл (имя локальной переменной но оно должно быть в одиночном числе client значит clients). Этот цикл используется если не нужен доступ к индексу или не нужно изменять элемент масcива

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// TASK 1
// // Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];

// // 2. сделать переменную total до цикла

// let total = 0;

// // // 1. перебераем массивым чтобы получить доступ к элементам (знак < потому что хотим получить индекс от 0 до 7 не включительно)

// // for (let i = 0; i < cart.length; i += 1) {
// // console.log(cart[i]);

// // // 3. каждый элемент приплюсовать к total

// // total += cart[i];
// // }

// // console.log('Total: ', total);

// for (const value of cart) {
//     total += value; // не нужен доступ к счетчику и не нужно перезаписывать элемент массива
// }

// console.log('Total: ', total);

// TASK 2

// Напишите скрипт который подсчитывает сумму всех четных чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// // 1. задать переменную total
// let total = 0;

// // 2. перебрать массив
// // for (let i = 0; i < numbers.length; i += 1) {
// //     console.log(numbers[i]);
// // // 3. на каждой итерации проверить элемент на четность
// //     if (numbers[i] % 2 === 0) {
// //         console.log('четное');
// //         // 4. если четный плюсуем к тоталу
// //         total += numbers[i];
// //     }
// // }

// // console.log('Total: ', total);

// for (const number of numbers) {
//     // console.log(number);
//     // 3. на каждой итерации проверить элемент на четность
//     if (number % 2 === 0) {
//         console.log(`${number} - четное`);
//         // 4. если четный плюсуем к тоталу
//         total += number;
//     }
// }

// console.log('Total: ', total);

// TASK 3

// Напиши скрипт поиска логина

// 1. Если логина нет, вывести сообщение 'Пользователь (логин) не найден'
// 2. Если нашли логин, вывести сообщение 'Пользователь (логин) найден'

// сначало через for
// потом через for .... of
// потом логика break
// потом метод includes() с тренарным оператором

// const logins = ["Marog", "Peter", "Anna", "Andrew"];
// const loginToFind = "Peter";
// // let message = `Пользователь ${loginToFind} не найден`; // с includes() не нужно

// // for (let i = 0; i < logins.length; i += 1) {
// //     const login = logins[i];

// //     if (login === loginToFind) {
// //         message = `Пользователь ${loginToFind} найден`;
// //         break;
// //     }

// // }

// // console.log(message);

// // for (const login of logins) {
// //   if (login === loginToFind) {
// //     message = `Пользователь ${loginToFind} найден`;
// //     break;
// //   }
// // }
// // console.log(message);

// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// TASK 4

// const numbers = [56, 14, 2, 87, 23, 16, 56];
// let maxNumber = numbers[0];

// for (const number of numbers) {
//     if (number > maxNumber) {
//         maxNumber = number;
//     }
// }

// console.log(maxNumber);

// TASK 5

// const friends = ['Marina', 'Povlo', 'Maks', 'Roma']

// const string = friends.join('-');

// console.log(string);
// console.log(friends);

// TASK 6

// Напиши скрипт который заменяет регистр каждого символа на противоположный
// Например, если строка 'JavaScript', то в выходе должна быть строка "jAVAsCRIPT"

// const string = 'JavaScript'
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//     // if (letter === letter.toLowerCase()){
//     //     invertedString += letter.toUpperCase();
//     // }
//     // else {invertedString += letter.toLowerCase();
//     // }
        
//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);
