/*
실행 컨텍스트
실행할 코드에 제공할 환경 정보들을 모아놓은 객체
자바스크립트의 동적 언어로서의 성격을 가장 잘 파악할 수 있는 개념

실행 컨텍스트가 활성화 될 때,
호이스팅이 발생한다.
외부 환경 정보를 구성한다.
this값을 설정한다.

이로인해 다른 언어에서 발견할 수 없는 특이한 현상들이 발생한다.

실행 컨텍스트는 다음과 같은 것들을 이용하면 call stack에 쌓이게 된다.
전역공간은 자동으로 컨텍스트로 구성된다.
함수를 실행한다.
eval() 함수를 실행한다
block을 만든다

*/

var a = 1 // 전역 컨텍스트
function outer() { // outer 컨텍스트
    function inner() { // inner 컨텍스트
        console.log(a); // undefined
        var a = 3;
        console.log(a); // 3
    }
    inner();
    console.log(a); // 1
}
outer();
console.log(a); // 1

/*
위 코드는 다음과 같은 순서로 실행된다.
프로그램 실행 [전역컨텍스트]
outer 실행  [전역컨텍스트, outer]
inner 실행  [전역컨텍스트, outer, inner]
inner 종료  [전역컨텍스트, outer]
outer 종료  [전역컨텍스트]

그리고 이러한 실행 컨텍스트를 구성할 때 생기는 것들이 있다.
VariableEnvironment 
    현재 컨텍스트 내의 식별자(변수)들에 대한 정보 
    외부 환경 정보
    선언 시점의 LexicalEnvironment의 스냅샷(변경사항 반영X)
    스냅샷 유지를 목적으로 사용

LexicalEnvironment
    처음에는 VariableEnvironment와 같음
    변경 사항이 실시간으로 반영됨
    내부에 environmentRecord(호이스팅 발생), outerEnvironmentReference(스코프와 스코프체인 형성)
    environmentRecord
        매개변수 식별자
        함수 자체
        함수 내부의 식별자
    Host Object
        전역 실행 컨텍스트는 변수 객체를 생성하는 대신 전역 객체를 활용한다.
        Window, Global 객체등이 이에 해당한다
    
ThisBinding
    식별자가 바라봐야 할 대상 객체

*/
console.log('\n');

function b(x){
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
}

b(1);
// 1
// 1
// 2
// 변수는 정의부만 호이스팅

console.log('\n');

function c() {
    console.log(d);
    var d = 'ddd';
    console.log(d);
    function d() {};
    console.log(d)
}

c();
// f d()
// ddd
// ddd
// 함수전체가 호이스팅 된다.
