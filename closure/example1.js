// 어휘적 범위 지정 (Lexical Scoping)
// 예제 1
function outer(param){
    const outerParam = `This is how ${param} works!`;

    function inner() { 
        console.log(outerParam); // 부모 함수에서 선언된 변수 outerParam를 사용
    }
    return inner;
}

const closure = outer('CLOSURE');
closure();

// 예제 2
function init() {
    var name = "dasom"; 
    function displayName() { // displayName()은 내부 함수이며, 클로저이다.
        alert(name); // 부모 함수에서 선언된 변수를 사용한다.
    }
    displayName();
}

init();

/*
클로저란?
함수가 선언된 환경의 렉시컬 스코프를 기억하여 함수가 스코프 밖에서 실행될 때에도 이 스코프에 접근할 수 있게 하는 기술
클로저는 바깥 합수의 변수에 접근할 수 있는 중첩합수이다.

*/
// 예제 1
const counter = function() {
    let count = 0;
    function changeCount(number) {
        count += number;
    }
    return {
        increase: function() {
            changeCount(1);
        },
        decrease: function() {
            changeCount(-1);
        },
        show: function() { 
            alert(count);
        }
    }
};

const counterClousre = counter();
counterClousre.increase();
counterClousre.show(); // 1
counterClousre.decrease();
counterClousre.show(); // 0

// 예제 2
function init() {
    var name = "dasom"; 
    function displayName() { 
        alert(name);
    }
    return displayName; // 전 예제와 다른 점 displayName(); 
}

let myInit = init(); // displayName을 리턴
myInit(); // name 변수에 접근


function idCreater(list) {
    var i;
    var unique = 100;
    for (i = 0; i < list.length; i++) {
      list[i]["id"] = function () {
        return unique + i;
      }
    }
    return list;
}

var list = [{name : "레레", id : 0}, {name : "도도", id : 0}, {name : "미미", id : 0}];
var idList = idCreater(list);
console.log(idList[0].id()); // 103




function idCreater(list) {
    var i;
    var unique = 100;
    for (i = 0; i < list.length; i++) {
      list[i]["id"] = (function () {
        return unique + i;
      })();
    }
    return list;
}

var list = [{name : "레레", id : 0}, {name : "도도", id : 0}, {name : "미미", id : 0}];
var idList = idCreater(list);
console.log(idList[0].id); // 100


