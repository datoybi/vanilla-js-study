/*
  타입 검사
  연산자를 평가 후 문자열로 반환해준다.
*/

// PRIMITIVE vs REFERENCE
// REFERENCE (Array, function, Date...)

function myFunction () {}
console.log(typeof myFunction) // function

class MyClass {}
console.log(typeof MyClass) // function

const str = new String('문자열입니다');
console.log(typeof str) // object

console.log(typeof null) // object (js오류)

// REFERENCE value는 typeof 하기가 어렵다
// JS는 동적으로 변하는 언어이기 떄문에 타입까지 동적이다.


// instanceof
function Person(name, age){
  this.name = name;
  this.age = age;
}

const person = new Person('dasom', 99);
console.log(person instanceof Person) // true


const p = {
  name: 'text',
  age: 99
}
console.log(p instanceof Person) // false

// instanceof의 단점 
const arr = []
const func = function() {}
const date = new Date();

console.log(arr instanceof Array) // true
console.log(func instanceof Function) // true
console.log(date instanceof Date) // true

console.log(arr instanceof Object) // true
console.log(func instanceof Object) // true
console.log(date instanceof Object) // true
// 프로토타입 체인때문에 (모든 객체들은 Object를 상속받기 떄문에) Object에 true가 나온다.


// Object.prototype.toString.call 사용 - 그나마 ㄱㅊ

console.log(Object.prototype.toString.call('')) // [object String]
console.log(Object.prototype.toString.call(new String(''))) // [object String]

console.log(Object.prototype.toString.call(arr)) // [object Array] 
console.log(Object.prototype.toString.call(func)) // [object Function]
console.log(Object.prototype.toString.call(date)) // [object Date]

/*
  js는 동적인 타입을 갖기 떄문에 타입검사가 어려움
  그래서 잘 찾아서 검사를 해야하고 많은 타입 검사 방법이 있음
  외우진말자~

*/

///////////////////////////
// 11. undifined null

console.log(!null) // true
console.log(!!null) // false
console.log(null === false) // false
console.log(!null === true) // true
console.log(null+123) // 123, null은 수학적으로는 0

// undefined : 선언했지만 값은 정의되지 않고 할당X
let verb1;
console.log(verb1); // undefined
console.log(typeof verb1) // undefined

let verb2 = null;
console.log(typeof verb2); // object 

console.log(undefined + 10) // NaN

console.log(!undefined) // true
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(!undefined === null) // false
console.log(!undefined === !null) // true

/*
undefined vs null
공통점 : 값이 없거나 정의되지 않은
undefined : NaN, 
null : 0


*/