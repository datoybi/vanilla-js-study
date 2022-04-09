/*
    객체 생성
    객체를 생성하면 하나를 생성할 때는 편리하지만, 
    중복된 코드를 매우 많이 써야 한다는 점이 단점이었다.
    그래서 팩토리 패턴을 사용하기 시작했다.
    (결국엔 지금은 클래스가 나왔지만 없었을 때는 이러한 패턴들을 사용했었다)
*/   

/*     
    팩토리 패턴 
    객체를 생성하는 과정을 추상화
*/

function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name)
    }
    return o;
}

var person1 = createPerson("Bob", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Docter");

// 단점 : 생성한 객체가 어떤 타입인지 알 수 없다는 단점을 가지고 있다.

/*     
    생성자 패턴 
    객체를 생성하는 과정을 추상화
*/

function Person(name, age, job) { // This constructor function may be converted to a class declaration.ts(80002) 클래스로 만들라고 한다.
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name)
    }
}

var person1 = new Person("Bob", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Docter");

console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true

// 인스턴스 타입은 식별 가능하나, 
// 단점 : 객체를 만들면 각각의 다른 함수를 생성한다. -> 메모리낭비
console.log(person1.sayName === person2.sayName); // false

// 이 단점을 우회하는 방법
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;

    function sayName() {
        console.log(this.name)
    }
}
// 이렇게 하면 전역 스코프를 어지럽힌다는 단점이 있다.

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
