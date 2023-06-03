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



// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   };
  
//   const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
//   } = firstBook;
  
//   console.log(firstTitle); // The Last Kingdom
//   console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
  
//   const secondBook = {
//     title: "Сон смішної людини",
//   };
  
//   const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
//   } = secondBook;
  
//   console.log(secondTitle); // Сон смішної людини
//   console.log(secondCoverImage); // https://via.placeholder.com/640/480



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = Object.values(apartment);
//   console.log(values);
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   console.log(keys);


  
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const color of colors) {
//    hexColors.push(color);
//    rgbColors.push(color);
    
//     console.log(hexColors);
// console.log(rgbColors);
//   };



// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   console.log(products);
  
//   function getAllPropValues(propName) {
//     // Change code below this line
  
//   const newArray = [];
  
//     for (const product of products) {
//       if (propName in product) {
//         newArray.push(product[propName])
//       };
//     };
//   return newArray;
//     // Change code above this line
    
//   };

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
  
//   const { yesterday, today, tomorrow } = highTemperatures;

//   // Change code below this line
  
//   const numberYesterday = yesterday;
//   const numberToday = today;
//   const numberTomorrow = tomorrow;
  
// //   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;



  
// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
  
//     addPotion(newPotion) {
//       const {potions} = this;
      
//       for(const {name} of potions){
//         if (name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`; }
//       }
//       potions.push(newPotion);
//     },
    
//    removePotion(potionName) {
//       const {potions} = this;
     
//       for(let i = 0; i < potions.length; i += 1) {
//         if (potions[i].name === potionName) {
//           potions.splice(i, 1);
//         }
//       }
//     },
    
//     updatePotionName(oldName, newName) { 
//       const {potions} = this;
  
//       for (let i = 0; i < potions.length; i += 1) {
//       const potion = potions[i];
        
//         if (potion.name === oldName) {
//         potion.name = newName;
//       }
//       }       
//     },
//     // Change code above this line
//   };
  