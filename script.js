// ## Задание 1. Angry Birds

// Напишите следующую программу, которая работает по следующему принципу:

// - Пользователь должен попасть по птичке путем ввода правильного числа угла наклона, под которым он попадет в птицу.
// - У пользователя есть 2 попытки;
// - Если пользователь выбрал в первой попытке число больше правильного, то вывести сообщение `"Промах, возьмите чутка выше."`. Если наоборот меньше выбрал, то `"Промах, возьмите чутка ниже."`



// ************************************************************ РЕШЕНИЕ*********************************************************



// let rightAnswer = 3
// let completed = false
// let userAnswer = +prompt("Введите угол наклона? (От 0 до 5)")

// if (userAnswer === rightAnswer) {
//     alert("Поздравляем, вы попали!")
//     completed = true
// } else if (userAnswer < rightAnswer) {
//     alert("Промах, возьмите чутка выше.")
// } else if (userAnswer > rightAnswer) {
//     alert("Промах, возьмите чутка ниже.")
// }

// if (!completed) {

//     userAnswer = +prompt("Введите угол наклона? (От 0 до 5)")

//         if (userAnswer === rightAnswer) {
//             alert("Поздравляем, вы попали!")
//             completed = true
//         } else { 
//             alert(`К сожалению, опять промах. Правильное число было ${rightAnswer}`)
//             completed = true
//         }
// }




//**********************************************************************ВОПРОС***************************************************
// Правильный ответ в условии задачи постоянный?
// Если да, то можно переменную rightAnswer сделать константой.
// Если нет, и правильный ответ каждый раз рандомится случайно в пределах допустимых значений (от 0 до 5), то я понятия не имею, как это написать.






//********************************************* */ Задание 2. Викторина *******************************************************************


// Ваша задача реализовать игру-викторину. Количество и сами вопросы на ваше усмотрение. То есть сначала пользователю задаются вопросы и возможность ввести ответ. Если ответ правильный, то показываем сообщение `"Правильный ответ"`, иначе `"Неправильный ответ"`.

// В конце показываем пользователю, на сколько правильных вопросов, он ответил.

// Пример результата: [https://codepen.io/amidf/full/OJjGLmK](https://codepen.io/amidf/full/OJjGLmK) <--------------- *ссылка не на тот пример*

// ## Примечания

// - Для сравнения строк во 2 задании используйте метод у строк `toLowerCase()`:

// ```jsx
// "HELLO".toLowerCase() // "hello"
// ```


// *****************************************************Решение*************************************************************

// let rightAnswersCount = 0
// let userAnswer 


// userAnswer = prompt("Как называется южнокорейский фильм, который получил 4 оскара в 2020 году")

// if (userAnswer.toLowerCase() === "паразиты") {
//   alert("Правильно")
//   rightAnswersCount++
// } else {
//   alert("Не правильно")
// }

// userAnswer = prompt("Ночь, улица, фонарь ....")

// if (userAnswer.toLowerCase() === "аптека") {
//   alert("Правильно")
//   rightAnswersCount++
// } else {
//   alert("Не правильно")
// }

// userAnswer = prompt("Инфекционное заболевание (COVID-19)")

// if (userAnswer.toLowerCase() === "коронавирус") {
//   alert("Правильно")
//   rightAnswersCount++
// } else {
//   alert("Не правильно")
// }

// userAnswer = prompt("Хотите один балл за просто так? Да или нет?")

// if (userAnswer.toLowerCase() === "да") {
//   alert("Ай хитрюга")
//   rightAnswersCount++
// } else {
//   alert("Ну и не очень-то и хотелось")
// }

// alert(`У меня очень плохо с фантазией в 4 утра. Количество правильных ответов: ${rightAnswersCount}`)