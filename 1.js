/*
let variable 

const PASSWORD = 333;

let object = {
    variable: 1,
    PASSWORD: 'Any String'
}

console.log(object.PASSWORD)
console.log(PASSWORD)



const object1 = {
    newVariable: 3,
    newFunction: function() {
        this.newVariable = 2;
    }
}

const object2 = {
    newVariable: 3,
    newFunction() {
        this.newVariable = 2;
    }
}




globalThis.console.log(JSON.stringify(object1))

globalThis.console.log(JSON.parse(JSON.stringify(object1)))




object2.newFunction()

globalThis.console.log(object2.n
    
*/
/*
const object1 = {
    newVariable: 0,
    newFunction: function() {
        this.newVariable = 1;
    }
}

const object = Object.assign({}, object1) // вложенные объекты сохраняют свои ссылки, то есть их можно случайно изменить

globalThis.console.log(object.newVariable)

object1.newFunction()
globalThis.console.log(object.newVariable)
*/

//object.newFunction()
//globalThis.console.log(object.newVariable)

// еще один способ копирования объектов без отсутствия запрета на вложенные мутации

//const oneMoreObject = {...object1} // ссылки на вложенные объекты сохраняются 

//без мутаций через двойную конвертацию

//const newObject = JSON.parse(JSON.stringify(object1)) // ссылки на вложенные объекты не сохраняются

//Variable = 5

//console.log(Variable)


//globalThis.console.log(sqrt(1))
//-----------------------------------------------------//
//const CONST_VARIABLE = 101;
//console.log(CONST_VARIABLE)

/*
const objectX = {
    prop1: true,
    prop2: true,
}

delete objectX["propX"];

console.log(objectX)
*/

/*
let arg = 8
function func1(param) {
    return param
}
func1(arg)
console.log(func1(arg))

globalThis.console.log()
*/
/*
function firstFunction() {
    console.log("9")
    return secondFunction()
}

function secondFunction(firstFunction) {
    return 8
}

firstFunction()
*/
/*
function f1() {
    b = true
    function f2() {
        a = false
    }
    f2()
}

f1()
 
console.log(b)
console.log(a)
*/
/*
let a = 0;
console.log(a++)
console.log(++a)
*/

//typeof 8.8

//console.log(!!typeof 0)



//выполнение функции в зависимости от других переменных
/*
let varTrue = 1;
let varFalse = 0;

varTrue && console.log('done')
varFalse && console.log('done')
*/

/*
obj1 = {
    prop1: 1,
    prop2: 2,
}

obj2 = {
    ...obj1,
    prop3: 3,
    prop4: 4,
    prop5: 5,
}

console.table(obj2)
*/

//шаблонные строки

/*
function function1() {
    a = true
    
}
function1()


console.log(`${function1}`)


let string = '${' + `${a}` + '}' + `                            ${1} -  + $     ${2}    ` + " " + '${}' + `         +  ${function1}`

console.log(string)
*/


/*
const fn = (a, b) => {
    return a + b
}



setTimeout(() => {
    console.log("message ")
}, 3000)

const fnX = a => a*a

console.log(fnX(5))

//setTimeout(a => a*a, 2000)



//-------

const newPost = (post, date = Date()) => ({
    ...post,
    date, //date: date
})

const post = {
    id: 1,
    author: 'none'
}

console.log(newPost(post))

*/


//-----------------------
//exceptions

/*
try {
    throw new Error("custom error's text")
}
catch(error) {
    console.error(error)
}
*/

//инструкции (let a) (выполняет действие)

//есть выражения а есть инструкции


//выражение не может быть аргументом функции



//массивы----------------------------

/*

const array1 = [1, 'abc', true]

const array2 = new Array(1, 'abc', true)

console.log(array1)
console.log('-----------')
console.log(array2)
//console.log('-----------')
//console.log(new Object(array1[1]))

// это объект со свойствами в виде содержимого


array1

globalThis.console.log(array1 != array2)

//массив так как это объект – ссылочный

*/

/*
array = new Array(1, 'abc', true)
console.log(array.length = 7)
console.log(array.length = 2)
console.log(array)

array[5] = '444'
array[6] = '666'

console.log(array)

array.pop()
array.unshift(100)
array.unshift(1000)
array.shift()
array.push(87)

console.log(array)

//они мутируют массив




array.forEach(element => console.log(element)); //колбэк функция которая (это тут не важно) неявно возвращает функцию (без фигурных скобок)


const amap = array.map(element => element*10) //тут важно так как мэп возвращает новый объект то есть массив

console.log(amap)

const amap2 = array.map(element => {
    element*10
}) //тут важно так как мэп возвращает новый объект то есть массив

console.log(amap2) //тут нет ретурн поэтому возвращается андефайнд
//а там ретурн не важен


const amap3 = array.map(function(element) {
    return element*10
}) //тут анонимная функция

console.log(amap3)

*/
//деструктуризация объектов


/*
const obj = {
    f: 1,
    s: 'abc',
    t: true,
}

const { f, t } = obj //мы создаем переменные которые хранят в себе свойства какого то объекта

console.log(t)


//деструктуризация массива

const fruits = ['apple', 'banana']

const [one, two] = fruits //интерпритатор берет по порядку индексы 0 1 2 и тд важно учитывать порядок

console.log(two)

//деструктуризация в функциях

const userObj = {
    name: 'rodion',
    commentsQty: 473,
    hasSignedAgreemant: true,
}
 

const userInfo = ({ nama, commentsQty }) => {
    if(!commentsQty) {
        return `user ${nama} is empty`
    }
    return `user ${nama} has ${commentsQty}`
}

console.log(userInfo(userObj));
*/

//---


const object = {
    x: 1,
    y: 2,
    z: 3,
}


Object.keys(object).forEach((key) => { //Object.(values/keys) возвращает массив
    console.log(key)
})


for(key in object) { //так же работает для массива

    console.log(key)
}


for(i of "iterable") { //так же для массива но НЕ для объектов
    console.log(i)
}











