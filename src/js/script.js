let number = 5;
const pi = 3.14;

number = 4;

let leftBoederWidth = 200;

//типы данных
// number
//string- '', "", ``
//true/false
//null- если не существует
//undefined- существует, но не имеет значения

// объект
let obj = {
    name: 'apple',
    color: 'green',
    weight: '200'
};

//symbol

// команды для взаимодействия, примеры

//alert(12345);
/* console.log(number);
confirm('Вам есть 18?'); */

/* let answer = confirm('Вам есть 18?');
console.log(answer); */

/* let answer = prompt('Вам есть 18?', '');
console.log(answer); */


// логические операции
/* let isChecked = true,
    isClose = false; */

/* console.log(isChecked && isClose); */
/* console.log(isChecked || isClose); */


// if

if (2*4==8*1){
    console.log('Верно')
} else {
    console.log('Ошибка')
};

// Можно писать так 
number = 50;
if (number < 50){
    console.log('Мало')
} else if(number > 50){
    console.log('Много')
} else{
    console.log('Верно') 
};


// цикл
for (let i=1; i<8; i++){
    console.log(i)
};

// функция
function logging(a, b){
    console.log(a + b) 
};


//вызов функции 
logging(5, 7);