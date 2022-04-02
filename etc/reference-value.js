/* 동적 프로퍼티 할당
원시값 : 딘슨한 데이터 (undefined, null, 불리언, 숫자, 문자열)
참조값 : 저장된 객체
자바스크립트는 메모리 위치에 직접 접근하는 것은 허용하지 않는다.
객체를 조작할 때 사실 객체 자체가 아니라 해당 객체에 대한 참조를 조작하는 것이다. - 참조로 조작한다
*/
// person이라는 참조로 조작
var person = new Object();
person.name = 'dasom';
console.log(person) // {name: 'dasom'}

// 직접 접근
var name = 'dasom';
name.age = 12;
console.log(name); // undefined

// -> 동적으로 프로퍼티를 할당할 수 있는 값은 참조값(객체) 뿐

/* 값 복사
    원시값 : 현재 저장된 값을 새로 생성한 다름 새로운 변수에 복사
    참조값 : 참조값도 다른 변수에 복사되지만 그 값이 객체 자체가 아니라 힙에 저장된 객체를 가리키는 포인터이다.   
*/
var num1 = 5; 
var num2 = num1; // num2는 num1과는 완전히 분리되어 있음 

var obj1 = new Object();
var obj2 = obj1; // obj1과 같은 객체를 가리키는 참조값이 저장된다.
obj1.name = "dasom";
console.log(obj2); // "dasom"

/* 매개변수 전달
변수는 값으로도, 참조로도 접근할 수 있지만,
매개변수는 오직 값으로만 전달됩니다.
*/

// 만약 num이 참조값이라면 count 가 30으로 변했을 것이다
function addTen(num) {
    num += 10;
    return num;
}

const count = 20;
const result = addTen(count);
console.log(count); // 20
console.log(result); // 30

// 객체를 주기 
function setName(obj) { // 함수 내부에서 obj와 person이 모두 같은 객체를 가리킨다
    obj.name = "dasom";
}

var person = new Object();
setName(person);
console.log(person.name); // "dasom"

// 좀더 명확하게 바꾸기
function setName(obj) { 
    obj.name = "dasom";
    obj = new Object();
    obj.name = "yun"; 
}

var person = new Object();
setName(person);
console.log(person.name); // "dasom", 만약 obj가 참조값이라면 결과값이 yun 이어야 함 

/*
정리
원시값(undefined, null, 불리언, 숫자, 문자열)은 동적 프로퍼티로 할당이 불가능 (참조값은 가능)
참조값은 복사시 얕은 복사가 일어남 (원시값은 깊은 복사)
매개변수는 오직 값으로만 전달
모든 참조 값은 Object의 인스턴스인 것으로 정의되어 있음
*/