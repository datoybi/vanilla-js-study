/*
    프로토타입 패턴
    모든 함수는 prototype 프로퍼티를 가진다.
    이 프로퍼티는 해당 참조타입의 인스턴스가 가져야 할 프로퍼티와 메서드를 담고 있는 객체이다.
    객체 정보를 생성자에 할당하는 대신 다음과 같이 직접적으로 프로토타입에 할당할 수 있다.
*/

function Person() {

}

Person.prototype.name = "Bob";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person();
person1.sayName(); // Bob

var person2 = new Person();
person2.sayName(); // Bob

console.log(person1.sayName === person2.sayName); // true
// 프로토타입은 프로퍼티와 메서드를 모든 인스턴스에서 공유한다.


/*
    프로토타입은 어떻게 동작하는가

    함수가 생성될 때마다 생성
*/
console.log(Person.prototype.isPrototypeOf(person1)); // true
console.log(Person.prototype.isPrototypeOf(person2)); // true

console.log(Object.getPrototypeOf(person1) == Person.prototype); // true
console.log(Object.getPrototypeOf(person1).name); // Bob

// 객체 인스턴스에서 프로토타입에 있는 값을 읽을 수는 있지만 수정은 불가능하다

var Person1 = new Person();
var Person2 = new Person();

console.log(person1.name); // Grag, 인스턴스에서
console.log(person2.name); // Bob, 프로토타입에서

// 인스턴스에서 name이라는 이름의 프로퍼티를 검색하고, 프로퍼티가 없다면 프로토타입에서 검색함
// 객체 인스턴스에 프로퍼티를 추가하면 해당 프로퍼티는 프로토타입에 존재하는 같은 이름의 프로퍼티를 가린다.

delete person1.name; // 인스턴스 값을 삭제했으니 프로토타입에서 가져옴
console.log(person1.name); // Bob, 프로토타입에서
console.log(person2.name); // Bob, 프로토타입에서

// hasOwnProperty

var Person1 = new Person();
var Person2 = new Person();
console.log(person1.hasOwnProperty("name")) // false

person1.name = "Grag";
console.log(person1.hasOwnProperty("name")) // true

console.log(person2.hasOwnProperty("name")) // false
delete person1.name; 
console.log(person2.hasOwnProperty("name")) // false
console.log('\n\n');

// 프로토타입과 in 연산자 
// in : 프로퍼티가 인스턴스에 존재하든 프로토타입에 존재하든 모두 true 반환

var Person1 = new Person();
var Person2 = new Person();

console.log(person1.hasOwnProperty("name")) // false
console.log("name" in person1); // true

person1.name = "Grag";
console.log(person1.hasOwnProperty("name")) // true
console.log("name" in person1); // true

console.log(person2.hasOwnProperty("name")) // false
console.log("name" in person2); // true

delete person1.name; 
console.log(person2.hasOwnProperty("name")) // false
console.log("name" in person2); // true

// 객체 프로퍼티가 프로토타입에 존재하는지 확인하는 방법
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

var person = new Person();

console.log(hasPrototypeProperty(person, "name")); // true
person.name = "Greg";
console.log(hasPrototypeProperty(person, "name")); // false

var o = {
    toString : function() {
        return "My Object";
    }
};

for(var prop in o) {
    if(prop == "toString"){
        console.log("Found toString"); 
    }
}


// Object.keys()

var keys = Object.keys(Person.prototype);
console.log(keys); // ['name', 'age', 'job', 'sayName']
var p1 = new Person();
p1.name = "Rob";
p1.age = 31;
var p1keys = Object.keys(p1);
console.log(p1keys); // ['name', 'age']

// 프로토타입 대체 문법 - 캡슐화 하는 패턴
function Person(){ }
Person.prototype = {
    name : "Bob",
    age: 29,
    job : "Software Engineer",
    sayName : function() {
        console.log(this.name);
    }
};

// 프로토타입 체인
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// SuperType을 상속
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
    return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue()); // true
// 프로퍼티나 메서드를 검색할 때는 항상 프로토타입 체인의 끝까지 거슬러 올라가며 검색한다.

// 모든 참조타입은 기본적으로 프로토타입의 체인을 통해 Object를 상속한다.

