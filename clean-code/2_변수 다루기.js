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

if(global === '전역'){
    var global = '지역';
    console.log(global); // 지역    
}
console.log(global); // 지역
// var은 함수단위 스코프인데 if는 함수가 아니기 때문

// let
let global = '전역';

if(global === '전역'){
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
  
  console.log(person) // { "name: "lee", "age: "30"}
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