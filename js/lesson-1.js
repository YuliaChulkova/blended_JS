

// const age = Number(prompt("введіть вік"));

// if (age >= 18) {
//     console.log('Доступ разрешен!');

// } else {
//   console.log('Доступ запрещен!');
// }


// const number = Number(prompt('введіть число'));
// if (number % 2 === 0) {
//     console.log('Число четное');
// } else {
//     console.log('Число нечетное');
// }

// const userParol = prompt('введіть пароль');
// let adminParol = 'admin123';
// if (adminParol === userParol) {
//     console.log('Доступ разрешен!');
// } else {
//     console.log('Неправильный пароль!');
// }


// const number = Number(prompt('введіть оцінку від  0-100'));

// if (number >= 90) {
//     console.log('Отлично!');
// } else if (number >= 70) {
//     console.log('Хорошо');
// } else if (number >= 50) {
//     console.log('Удовлетворительно');
// } else {
//  console.log('Неудовлетворительно');
// }


// const hours = Number(prompt('введіть години від  0-23'));

// if (hours >= 0 && hours <= 5) {
//     console.log('Ночь');
// } else if (hours >= 6 && hours <= 11) {
//     console.log('Утро');
// } else if (hours >= 12 && hours <= 17) {
//     console.log('День');
// }
// else if (hours >= 18 && hours <= 23) {
// console.log('Вечір');
// }
// else {
//     console.log('помилка, введіть години від 0-23');
// }

// const age = Number(prompt('введіть вік'));

// if (age >= 0 && age <=6) {
// console.log('Детский билет');
// } else if (age >= 7 && age <= 17) {
//     console.log('Школьный билет');
// } else if (age >= 18 && age <= 59 ) {
//         console.log('Взрослый билет');
// } else if (age >=60) {
//     console.log('Билет для пенсионеров');
// } else {
//     onsole.log('Ошибка');
//     }

// const age = Number(prompt("put your age"));
// if (age <= 6) {

//     console.log("children's ticket");
// } else if (age <= 17) {
//     console.log("teenege ticket");

// } else if (age <= 59) {
//     console.log("adult ticket");
// }


// Использование с логическими операциями

// let a = 12, b = 5, c = 20;
// let result =
//   a > b && a < c ? 'а  в пределах от в до с' : ' а  не в пределах';
// // 10 > 5 и 10 < 20;
// console.log(result);


// let person = { name: "alica", age: 30 };
// person.age = 18;
// let message = person.age >= 18 ? "adult" : " child";
// console.log(message);

// let isAdmin = false;
// console.log(isAdmin ? "admin" : "user");

// const age = Number(prompt('put your age'));
// let message = age >= 18 ? 'adult' : ' child';
// console.log(message);

// const number = Number(prompt('введіть число'));
// const result = number % 2 === 0 ? "Число четное" : "Число нечетное";
// console.log(result);

// let purchaseAmount = 1000;
// let userAmount = 1000;
// const discount = userAmount >= purchaseAmount ? userAmount * 0.9 : userAmount;
// console.log(discount);

// let totalAmount = Number(prompt('Введите сумму покупки:'));
// let finalAmount = totalAmount >= 1000 ? totalAmount * 0.9 : totalAmount;
// console.log(`Итоговая сумма: ${finalAmount}`);


// const tempo = Number(prompt('Проверка температуры'));
// if (tempo <= 0) {
//     console.log("cold");
    
// } else if (tempo > 0) {
//     console.log("warm");
// } else {
//     console.log("put a number once again");
// }


// const message = tempo > 0 ? "Warm" : "Cold";
// console.log(message);

// let weekDay = Number(prompt("Put a number of the week"));
// switch (weekDay) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("error");
// }

// const month = Number(prompt("Put a number"));

// switch (month) {
//   case 1:
//     console.log('Winter');
//     break;
//   case 2:
//     console.log('Winter');
//     break;
//   case 3:
//     console.log('Spring');
//         break;
//     case 4:
//         console.log("Spring");
//         break;
//     case 5:
//         console.log("Spring");
//         break;
//     case 6:
//         console.log("Summer");
//         break;
//     case 7:
//         console.log("Summer");
//         break;
//     case 8:
//         console.log("Summer");
//         break;
//     case 9:
//         console.log("Autumn");
//         break;
//     case 10:
//         console.log("Autumn");
//         break;
//     case 11:
//         console.log("Autumn");
//         break;
//     case 12:
//         console.log("Winter");
//         break;
//     default:
//         console.log("You are on Mars");
        
// }
// switch (weekDay){
// case 1:
//     case 2:
//         case 12:
// console.log("Winter");
// break;
// case 3:
//     case 4:
//         case 5:
// console.log("Spring");
// break;
// case 6:
//     case 7:
//         case 8:
// console.log("Summer");
// break;
// case 9:
//     case 10:
//         case 11:
// console.log("Autumn");
// break;
// default:
// console.log("error");
// }



// const num = Number(prompt('put a number'));
// const newNum = num % 2 === 0 ? 'четное' : 'нечетное';
// console.log(newNum);


// Напиши программу, которая проверяет возраст:

// Если возраст от 18 до 60, вывести "Добро пожаловать!"
// Если нет, вывести "Доступ запрещен"
// 💡 Используй &&.
// const age = Number(prompt("put your age"));
// if (age >= 18 && age <= 60) {
//     console.log("you can work");
// } else {
//     console.log("you are so young");
//  }








// ======= Завдання 1:
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

//  {
//     let message = Number(prompt("введіть число"));
  
//     if (message === 10) {
//         alert('Вірно');
//     } else {
//          alert('Невірно');
//     }
// }


// message === 10 ? alert('Вірно') : alert('Невірно');
 
// userNumber();

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().




// Завдання 2:
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"


// const min = prompt(Math.floor(Math.random() * (59 - 0) + 0));

// if (min >= 0 && min <= 14) {
//   alert(`${min} входить в першу чверть`);
// } else if (min >= 15 && min <= 29) {
//   alert(`${min} входить в другу чверть`);
// } else if (min >= 30 && min <= 44) {
//   alert(`${min} входить в третю чверть`);
// } else if (min >= 45 && min <= 59) {
//   alert(`${min} входить в четверту чверть`);
// }
// else {
//     alert('Невірно');
// }




// const min = Math.floor(Math.random() * (59 - 0) + 0);

// Завдання 3:
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.


// const num = Number(prompt("Введіть число від 1 до 4"));
// let result = "";
//     switch (num) {
//         case 1:
//             result = `зима`;
//             break;
//       case 2:
//             result = `весна`;
//             break;
//       case 3:
//          result = `літо`;
// break;
//       case 4:
//             result = `осінь`;
//             break;
//       default:
//         result =  "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//     }

// alert(result);
// console.log(result);








// Завдання 4:
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// const minutes = Number(prompt('Введіть кількість хвилин'));
//  function formateTime



// Завдання 5:
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// Завдання 6:
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// Завдання 7:
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
     
     
     
// function getNumbers(min, max) {
//     let summ = 0;
//     for (let i = max; i >= min; i -= 1);
//     console.log(i);
//     if (i % 2 === 0) {
//       summ += i;
//     }
//   return summ;
//     }


// getNumbers(2, 7);


// Завдання 8:
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// Завдання 9:
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// Завдання 10:
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
