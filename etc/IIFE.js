/*
IIFE(Immediately Invoked Function Expression) : 정의되자마자 즉시 실행되는 함수 표현식
'Self-Executing Anonymous Function' 이라고도 불리며,
전역 스코프에 불필요한 변수를 추가 방지 IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법
따라서 IIFE 사용의 가장 큰 목적은 데이터 프라이버시와 코드 모듈화라고 할 수 있다.
closure와 함께 private data를 사용할 수 있습니다.

기본 표현식
// 첫번째 괄호 - 익명함수 정의
(function() {
    console.log('hi IIFE')
// 두번째 괄호 - 함수 즉시 실행
})();
*/

// var app = (function() {
//     var privatevar = 'private';
//     return {
//         prop: privatevar
//     };
// })();

// console.log(app.prop) // private
// 구조
(function() {
    console.log('hi IIFE');
})();

(() =>{
    console.log('hi IIFE');
})();

// 인자 전달
(function (name) {
    console.log(`hello ${name}!`)
})('kim');

(function(x, y){
    console.log(`${x * y}`)
})(10, 20);

// 리턴값 반환
const sum = (function(x, y){
    return x + y;
})(1, 2);

console.log(sum)