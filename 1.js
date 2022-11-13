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

function function1() {
    a = true
    
}
function1()


console.log(`${function1}`)


let string = '${' + `${a}` + '}' + `                            ${1} -  + $     ${2}    ` + " " + '${}' + `         +  ${function1}`

console.log(string)



