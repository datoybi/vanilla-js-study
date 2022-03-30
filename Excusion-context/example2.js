/*
    자바스크립트 함수는 일급객체(일급시민)이기 때문에 함수 표현식이 가능하다.
    
    일급객체(일급 시민)
    여기 x라는 것이 있다.
    x는 변수에 담을 수 있다.
    x는 매개변수에 넘길 수 있다.
    x를 함수에서 반환할 수 있다.

    x를 만족할 때, 이를 일급객체라고 한다.
    즉, 자바스크립트의 함수는 일급객체이므로
    함수를 변수에 담을 수 있다.
    함수를 매개변수에 넘길 수 있다.
    함수를 함수에서 반환할 수 있다.

    위의 조건들을 만족한다.

    이 예제의 함수를 함수 표현식으로 바꿔보자.
function a() {
    console.log(b);
    var b = 'bbb';
    console.log(b);
    function b() {};
    console.log(b)
}

a();

*/
// function a() {
//     console.log(b);
//     var b = 'bbb';
//     console.log(b);
//     function b() {};
//     console.log(b)
// }
// a();
/*
결과값
f b()
bbb
bbb
*/

// function a() {
//     console.log(b);
//     var b = 'bbb';
//     console.log(b);
//     var b = function() {}; // b에 익명함수를 할당
//     console.log(b)
// }

// a();
/*
결과값
undefined
bbb
f() {}

outerEnvironmentReference와 Scope
scope
    식별자에 대한 유효범위
    Scope A의 외부에서 선언한 변수는 A의 내/외부 모두 접근 가능하다.
    A의 내부에서 선언한 변수는 오직 A의 내부에서만 접근할 수 있다.     

스코프의 개념은 대부분 언어에 존재하지만, ES5까지의 Javascript는 특이하게도 오직 함수에 의해서만 스코프가 생성되낟.

scope chain
    식별자의 유효범위를 안에서 바깥으로 차례로 검색해나가는 것
    이를 가능하게 하는 것이 outerEnvironmentReference이다

*/
var a = 1 // 전역 컨텍스트
function outer() { // outer 컨텍스트
    function inner() { // inner 컨텍스트
        console.log(a);
        var a = 3;
        console.log(a); 
    }
    inner(); // inner가 실행될 때 outer의 LexicalEnvironment를 outerEnvironmentReference로 참조한다.
    console.log(a);
}
outer(); // outer가 실행될 때 전역 컨텍스트의 LexicalEnvironment를 outerEnvironmentReference로 참조한다.
console.log(a);
/*
결과값
undefined
3
1
1

이러한 scope chain을 형성한다.

inner LexicalEnvironment {
    식별자 a
    outerEnvironmentReference = outer LexicalEnvironment {
            식별자 a
            outerEnvironmentReference = global LexicalEnvironment {
                식별자 a
            }
        }
    }
}

*/


