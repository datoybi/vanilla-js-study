/*
5. Var 사용을 지양하자.
    var : 함수 스코프
    let, const : 블록 단위 스코프, TDZ
*/

console.log(name); // undefined

var name = '이름';
var name = '이름2';
var name = '이름3';
var name = '이름3';

console.log(name); //이름3
// 값이 다르지만 변수 명이 일치할때 에러가 나오지 않는다.

let name;
name = '이름';
name = '이름2';
name = '이름3';
console.log(name)
// let은 재할당 가능

const name = '이름'; // const는 할당후 선언까지 해야함
name = '이름';
name = '이름2';
name = '이름3';
console.log(name)
// let은 재할당 가능

// 6. function scope & block scope
var global = '전역';

if (global === '전역') {
  var global = '지역';
  console.log(global); // 지역    
}
console.log(global); // 지역
// var은 함수단위 스코프인데 if는 함수가 아니기 때문

// let
let global = '전역';

if (global === '전역') {
  let global = '지역';
  console.log(global); // 지역    
}
console.log(global); // 전역

// const
const global = '전역';
{
  const global = '지역';
  console.log(global); // 지역    
}
console.log(global); // 전역

// let과 const는 블록 단위 스코프이기 때문에 블록 안에서만 할당된다.
// 자바스크립트는 변수안에 많은 것들을 담을 수 있는데 

// 객체
const person = {
  name: 'yun',
  age: '20'
}

person.name = 'lee'
person.age = '30'

console.log(person) // {"name: "lee", "age: "30"}
// person 자체를 바꾸는게 아니라 내부의 값을 바꾸기 때문에 바뀜

// 배열
const animal = [{
  name: 'dog',
  age: '2',
}]

animal.push({
  name: 'cat',
  age: '11',
})

console.log(animal) // [{name: 'dog', age: '2'}, {name: 'cat', age: '11'}]
// const는 재할당만 금지된다, 객체, 배열같은 레퍼런스 객체들을 조작할 때는 이상이 없다.


/* 
7.전역 공간 사용 최소화
  전역공간?
      최상위 공간
      glbal(nodeJS), window(브라우저)
*/
var globalVar = 'global';
console.log(globalVar); // window 객체 안ㅇ 들어간다
console.log(window.globalVar); // 다른 js 페이지에서도 접근 가능하다
// 몽키패치때문에 - 런타임 환경에서 변한다
// 파일을 나눠도 스코프가 나뉘지 않는다.

var setTimeout = 'setTimeout';
function setTimeout() {
  console.log('function');
}

// 이렇게 함수를 변환해도 코드상에서는 변화가 없어서 에러가 나지 않는다.
// window.setTimeout(() => {
//   console.log('1초');
// }, 1000);

const array = [10, 20, 30];

for (var index = 0; index < array.length; index++) {
  const element = array[index]
}
// index가 window 객체 안에 있다

window.foo = 'bar'
console.log(window.foo);

/*
  전역변수를 더럽히지 않기
  이유는 어디서나 접근 할 수 있기 때문에 스코프 분리가 위험
  전역변수 만들지 말기 
  window나 gloabl을 조작하지 말기
  Const, let, IIFE, Module, closure, 스코프를 나누는 방법을 고민하기
*/

/*
  8. 임시변수 제거하기
*/
/*
  임시 변수 ?
    scope안에서 전역변수처럼 활용되는 변수
*/

// 변경 전
function getElemets() {
  const result = {}; // 임시 객체, CRUD 가능

  result.title = document.querySelector('.title');
  result.text = document.querySelector('.text');
  result.value = document.querySelector('.value');

  return result;
}

// 변경 후
function getElemets() {
  return {
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    value: document.querySelector('.value'),
  };
}

// 변경 전 - 추가적인 요구사항이 생길 때 문제가 생긴다
// 1. 함수 추가, 2. 함수를 수정하고 유지보수
function getDateTime(targetData) {
  let month = targetData.getMonth();
  let day = targetData.getDate();
  let hour = targetData.Hours();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;

  return {
    month, day, hour
  };
}

// 변경 후
function getDateTime(targetData) {
  const month = targetData.getMonth();
  const day = targetData.getDate();
  const hour = targetData.Hours();

  return {
    month: month >= 10 ? month : '0' + month,
    day: day >= 10 ? day : '0' + day,
    hour: hour >= 10 ? hour : '0' + hour,
  };
}

// 변경 후
function getDateTime(params) {
  const currentDateTime = getDateTime(new Date());

  return {
    month: computedKrDate(currentDateTime.month) + '분 전',
    day: currentDateTime.day + '분 전',
    hour: currentDateTime.hour + '분 전',
  };
}

// 함수는 하나의 역할만 하는것이 좋다.
function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);

  return randomNumber;
}

// 혼란스러운 코드 (명령형)
function getSomeValue(params) {
  let temp = ''

  for (let index = 0; index < array.length; index++) {
    temp += array[index];
    temp += array[index];
    temp += array[index];
    temp += array[index];
    temp += array[index];
  }

  if (temp) {
    temp = 10
  } else if (temp) {
    temp += 10
  }

  return temp;
}

// 이런 임시변수를 사용하지 말자!
/* 
  임시변수는 좋지않다.
  왜? 명령형으로 가득한 로직이 나오고
  어디서 어떻게 변했는지 디버깅이 어렵다
  추가적인 코드를 작성하고싶은 유혹에 빠지기 쉽다.
  코드의 유지보수가 어렵다.
  
  해결책?
  함수를 나누기
  변수를 생성하지말고 바로 반환
  고차함수 사용하기(map(), filter(), reduce() 사용)
  선언형 코드로 바꾸기
*/

/*
  8. 호이스팅 주의하기
*/

/*
  호이스팅?
   런타임 때 선언과 할당이 분리된 것,
   선언된 변수가 초기화가 제대로 되어 있지 않을 때 undefined로 최상단에 끌여올려 줄 수 있는 것
*/

var global = 0;

function outer() {
  console.log(global); // undefined
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global); // 10
  }

  inner();
  global = 1;
  console.log(global); // 1
}
outer();

/*
undefined
10
1
*/

function duplicatedVar() {
  var a;
  console.log(a); // undefined

  var a = 100;
  console.log(a); // 100
}

console.log(duplicatedVar()) // undefined
/*
undefined
100
undefined
*/

var sum;

sum = function () {
  return 1 + 2;
};

console.log(sum())
// 3


var sum;

function sum() {
  return 1 + 2;
};

console.log(sum())
// 3


var sum;

console.log(typeof sum); // function

function sum() {
  return 1 + 2;
};


var sum;

console.log(sum); // 10 위의 변수 출력

function sum() {
  return 1 + 2;
};
function sum() {
  return 1 + 2 + 3;
};
function sum() {
  return 1 + 2 + 3 + 5;
};


// 보통 함수를 만들 때 const를 사용해서 만든 후 
// 함수를 할당하는 방식을 추천

// 함수 표현식( 함수를 만들 때 함수 표현식으로 만드는 것을 추천한다 )
const sum = function () {
  return 1 + 2;
};

console.log(sum); // 3

/*
  호이스팅
    런타임시 선언이 최상단으로 끌어올려진다.
  문제?
    코드를 작성할 때 예측하지 못한 실행결과가 노출
  해결책
    var 사용을 지양한다.
    함수 표현식을 사용한다.
*/