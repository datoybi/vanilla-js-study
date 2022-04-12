/*
메서드 체이닝은...
길게 나열하면서 작성하는건데 
중간에 체인처럼 연결 된 함수에 return this;를 주어서 연결되게끔 만드는 것이다. 

*/

var user = {
    name: "John",
    age: 30
};

user.sayHi = function() {
    console.log('안녕');
}

user.sayHi();

// 메서드는 아래와 같이 이미 정의된 함수를 이용해서 만들 수도 있다.
var user = {
    name: "dasom",
    age: 29
}

function sayHi() {
    console.log('안녕하세요!');
}

user.sayHi = sayHi; 
user.sayHi();

// 메서드 내부의 this는 메서드를 호출할 떄 사용된 객체를 뜻한다.
var user = {
    name: "dasom",
    age: 29,
    
    sayHi() {
        console.log(`안녕하세요! ${this.name}씨!`);
    }

};
user.sayHi();

// 화살표 함수는 this가 없다.
// 아래의 예시에서 arrow()의 this는 외부 함수 user.sayHi()의 this를 사용한다.
var user = {
    firstName: "Bob",    
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi(); // Bob
console.log('\n\n');

// 메서드 체이닝
var ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() { 
        console.log(this.step);
    }
}

ladder.up();
ladder.up();
ladder.up();
ladder.down()
ladder.showStep(); // 2

// 메서드 호출 체이닝
var ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { 
        console.log(this.step);
        return this;
    }
}

ladder.up().up().up().down().showStep(); // 2 
// 이렇게 호출하기 위해서는 return this;를 해줘야함

// 변수 Obj를 포함하는 변수 생성 output
// 2변수를 추가하고 "출력"에 할당 하는 함수를 작성하십시오.
// 출력에 10을 곱합니다.
// 그것에서 20을 빼고 결과를 표시하십시오
// 각 수학 연산은 객체의 개별 기능입니다.

// var Obj = {
//     result: 0,
//     addNumber(a, b) {this.result = a + b;}
// };

// Obj.addNumber(10, 20);
// console.log(Obj.result);

var Obj = {
    result: 0,
    addNumber: function(a, b) {
        this.result = a + b;
        return this;
    },
    multiplyNumber: function(a) {
        this.result = this.result * a;
        return this;
    },
    divideNumber: function(a) {
        this.result = this.result / a;
        return this;
    }
};

Obj.addNumber(10, 20).multiplyNumber(10).divideNumber(10);
console.log(Obj.result);

// 메서드 체이닝을 사용하지 않는다면

var Obj = {
    result: 0,
    addNumber: function(a, b) {
        this.result = a + b;
    },
    multiplyNumber: function(a) {
        this.result = this.result * a;
    },
    divideNumber: function(a) {
        this.result = this.result / a;
    }
};

Obj.addNumber(10, 20);
Obj.multiplyNumber(10);
Obj.divideNumber(10);
console.log(Obj.result);