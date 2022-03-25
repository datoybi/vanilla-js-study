/*
Strict mode
- 반대용어: 느슨한 모드(sloppy mode)

Strict mode 란?
기존에는 무시되는 에러들을 표출하고 싶을때 사용

적용법 
'use strict'; 작성 
전체 스크립트에서, 함수안, 모듈에서 가능


특징
1. 기존에는 조용히 무시되던 에러등릉 Throwing 한다.
2. 엔진의 최적화 작업을 어렵게 만드는 실수를 바로잡는다. 가끔 비엄격 모드보다 빨리 작동한다.
3. 엄격모드는 상위 버전들에서 정의될 문법을 금지합니다.

주의
엄격모드와 비 엄격모드의 연결은 주의하기 - 엄격모드 + 비엄격모드를 사용해야 한다면 함수 단위로 엄격모드를 사용하는게 좋다
*/


// 스크립트에 strict mode 사용
// 'use strict'
// v = "A strict mode script";
// console.log(v) // Uncaught ReferenceError: v is not defined

// 함수에 strict mode 사용
// function fn() {
//     "use strict";
//     v = "A strict mode script";
//     console.log(v) // Uncaught ReferenceError: v is not defined
// }
// fn();

// 모듈에서는 자동으로 strict mode가 적용된다


// 오류를 일으킬만한 동작은 나중에 큰 문제를 가져올 수 있다.
// 1. 글로벌 변수, 선언하지 않은 변수를 만들시 에러 발생
// 'use strict';
// global = 1; // Uncaught ReferenceError: global is not defined

// // 2. NaN을 할당할 시 에러 발생
// 'use strict';

// // 쓸 수 없는 프로퍼티에 할당
// let undefined = 5;
// let Infinity = 10;

// console.log(undefined) // Uncaught SyntaxError: Identifier 'undefined' has already been declared
// console.log(Infinity) // 10

// 엄격 모드는 삭제할 수 없는 프로퍼티를 삭제하려 할때 예외 방생 (시도해도 효과거 없을 떄)
// "use strict";
// delete Object.prototype; // Uncaught TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

// 유니크한 함수 파라미터 이름을 요구 
// "use strict";
// function sum(a, a, c){ //Uncaught SyntaxError: Duplicate parameter name not allowed in this context

// }

// 8진 구문을 금지한다
// "use strict";
// var a = 0o10;
// console.log(a) // 8

// "use strict";
// var sum = 015 + // !!! 구문 에러
//           197 +
//           142;
// console.log(sum) // Uncaught SyntaxError: Octal literals are not allowed in strict mode.