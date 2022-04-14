/*
12. eqeq 줄이기
    ===, !== 사용하기💛
    https://dorey.github.io/JavaScript-Equality-Table/
*/

// ==
console.log('1' == 1) // true
console.log(1 == true) // true

// ===
console.log('1' === 1) // false
console.log(1 === true) // false

// 객체의 value의 값을 비교해야 할 때
if(Number(ticket.value) === 0) {}
if(ticket.valueAsNumber === 0) {}


/*
13. 형변환 주의하기
암묵적인 형변환 대신 명시적인 형변환을 하자(예측하기 쉬운 코드)
*/

// 암묵적인 형변환이 일어난다.
// BAD
console.log(11 + '문자열'); // '11문자열'
console.log(!!'문자열'); // true 💛
console.log(!!''); // false 💛

// 명시적인 형변환으로 변환
// Good
console.log(String(11 + '문자열')); // '11문자열'
console.log(Boolean(!!'문자열')); // true 
console.log(Boolean(!!'')); // false 

/*
14. isNaN
// is Not a Number -> 숫자가 아니다
// 즉 false면 숫자, true면 숫자 X 여서 헷갈리기도 하고 느슨한 검사이다.
*/

console.log(isNaN(123)) // false
console.log(Number.isNaN(123 + '테스트')) // false
console.log(isNaN(123 + '테스트')) // true
// isNaN은 느슨한 검사이다.

// ES2015+ 부터 엄격한 검사를 만들었다.
// isNaN // 느슨한 검사 
// Number.isNaN // 엄격한 검사 
// 따라서 Number.isNaN를 사용하자!

