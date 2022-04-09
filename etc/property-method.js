/*
    js에서 객체란, 
        객체가 특별한 순서가 없는 값의 배열
*/

// 일반적인 객체 - 예전 ver 
var person = new Object();
person.name = "Bob";
person.age = 29;
person.job = "Software Engineer";

person.sayName = function(){
    console.log(this.name);
}

console.log(person);

// 일반적인 객체 - 객체 리터럴 패턴, 이게 요새는 더 자주 사용
var person = {
    name : "Bob",
    age : 29,
    job : "Software Engineer",

    sayName : function(){
        console.log(this.name);
    }
};
console.log(person);
// 예전 ver과 동일하다. 

/*
    데이터 프로퍼티
        데이터 값에 대한 단 하나의 위치를 포함하여 이 위치에서 값을 읽고 쓴다.
        그 행동을 설명하는 네가지 속성이 있다.
        [[Configuable]] : 해당 프로퍼티가 변환할 수 있음을 나타낸다.
        [[Emumerable]] : for-in루프에서 해당 프로퍼티를 반환함을 나타낸다. 
        [[Writable]] : 프로퍼티 값을 바꿀 수 있음을 나타낸다.
        [[Value]] : 프로퍼티의 실제 데이터 값을 나타낸다.

    var person = {
        name : "Bob" // [[value]]에 Bob 할당
    }

*/

// Object.defineProperty()

// 예제
var person = {};
Object.defineProperty(person, "name", {
    writable: false, // 읽기전용
    value: "Bob"
});

console.log(person.name); // Bob
person.name = "Grag";
console.log(person.name); // Bob , 읽기전용으로 만들어서 새로운 값이 무시됨, Strict mode였다면 에러 발생

// 예제
var person = {};
Object.defineProperty(person, "name", {
    configurable: false, // 다시는 삭제, 수정 불가
    value: "Bob"
});

console.log(person.name); // Bob
delete person.name;
console.log(person.name); // Bob

// 예제
var person = {};
Object.defineProperty(person, "name", {
    configurable: false, 
    value: "Bob"
});

// 에러 발생, Uncaught TypeError: Cannot redefine property: name
// Object.defineProperty(person, "name", {
//     configurable: true,
//     value: "Bob"
// });

/*
    접근자 프로퍼티
    데이터 값이 들어있지 않고 getter, setter 함수로 구성
    [[Configurable]] : 해당 프로퍼티가 delete를 통해 삭제되거나 프로퍼티의 속성을 바꿀 수 있거나, 데이터 프로퍼티로 바꿀 수 있음을 나타낸다.
    [[Enumerable]] : for in 루프에서 해당 프로퍼티를 반환한다. default : true
    [[Get]] : 프로퍼티를 읽을 때 호출할 함수 default : udnefined
    [[Set]] : 프로퍼티를 바꿀 때 호출할 함수 default : udnefined
    
    접근자 프로퍼티는 반드시 Object.definedProperty()를 사용해야함
*/

// 예제
var book = {
    _year: 2004, 
    edition: 1
};

Object.defineProperty(book, "year", {
    get: function() {
        return this._year;
    },
    set: function(newValue){
        if(newValue > 2004){
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book.year = 2005;
console.log(book.edition);
// getter 만 지정하는 경우 읽기전용이 된다.

/*
    다중 프로퍼티 정의 - Object.defineProperties()
*/
var book = {};

Object.defineProperties(book, { // 여러 프로퍼티를 동시에 생성
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function() {
            return this._year;
        },
        set: function(newValue){
            if(newValue > 2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

/*
    프로퍼티 속성 읽기
    Object.getOwnPropertyDescriptor()
*/

var book = {};

Object.defineProperties(book, { // 여러 프로퍼티를 동시에 생성
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function() {
            return this._year;
        },
        set: function(newValue){
            if(newValue > 2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor.value); // 2004
console.log(descriptor.configurable); // false
console.log(typeof descriptor.get); // "undefined"

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor.value); // "undefined"
console.log(descriptor.enumerable); // false
console.log(typeof descriptor.get); // function

console.log('\n');
