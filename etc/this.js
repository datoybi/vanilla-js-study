/*
    this의 값은 함수의 호출하는 방법에 의해 결정된다.
  전역함수에서 this는 스트릭트 모드가 아닐때는 window, 스트릭트 모드에는 undefined이며
  함수가 객체 메서드로 호출되었을 때 this는 해당 객체 입니다.  
*/
// var object = {
// var name = "the window";

//     name : "My Object",
//     getNameFn : function() {
//         return function() {
//             return this.name;
//         };
//     }
// };

// console.log(object.getNameFn()());

// 전역변수일 경우 (non-strict)
// function func() {
//     if(window === this){
//         console.log("same");
//     }
// }
// func() // same

// // 메소드의 this는 그 객체를 가르킨다.
// var o = {
//     func: function() {
//         if(o === this) {
//             console.log("same!@#");
//         }
//     }
// }
// o.func(); // same!@#


// https://ko.javascript.info/object-methods

// 메서드 만들기
var user = {
    sayHi: function() {
        console.log("Hello");
    }
};

// 단축 구문 function을 생략해도 메서드를 정의할 수 있다. (미묘한 차이가 있음)
var user = { 
    sayHi() {
        console.log("Hello");
    }
}

// 메서드와 this
var user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // 'this'는 '현재 객체'인 user를 나타낸다.
      console.log(this.name);
    }
};
  
user.sayHi(); // John


var user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert(user.name); // this 대신 user를 이용 가능하다.
    }
};
// 하지만 이렇게 외부 변수를 사용하면 예상치 못한 에러가 발생할 수 있다.

/* 
자유로운 this
    자바스크립트에선 모든 함수에 this를 사용할 수 있다.
    this 값은 런타임에 결정된다.
    동일한 함수라도 다른 객체에서 호출했다면 this가 참조하는 값이 달라진다
*/

var user = {name: "Dasom"};
var admin = {name: "Admin"};

function sayHi() {
    console.log(this.name);
}

// 별개의 객체에서 동일한 함수를 사용함
user.func = sayHi; 
admin.func = sayHi;

// this 값이 달라짐
user.func(); // Dasom
admin.func(); // Admin

// 객체없이 this 호출하기
function sayHi() {
    // "use strict"
    console.log(this);
}

sayHi(); // 엄격모드일때는 undefined, 엄격모드가 아닐때는 window객체 
// 자바스크립트에서 this는 런타임 시 결정된다.
// 메서드가 어디서 정의되었는지에 상관없이 this는 점 앞의 객체가 무엇인가에 따라 자유롭게 결정한다.

// this가 없는 화살표 함수
// 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 '평범한' 외부 함수에서 this값을 가져온다.

var user = {
    firstName: "다솜",
    sayHi() {
        let arrow = () => console.log(this.firstName); // user.sayHi()의 this이다.
        arrow();
    }
};

user.sayHi(); // 다솜


function makeUser() {
    return {
      name: "John",
      ref: this
    };
  };
  
  var user = makeUser();
  
  alert( user.ref.name ); // 결과가 어떻게 될까요?


