//  Object Type  

// 생성
// new, Object 이용
var person = new Object(); // ver persoon = {} 과 동일
person.name = "dasom";
person.age = 20;
console.log(person);

// 객체 리터럴 표기법 (선호)
var person = {
    name : "dasom",
    age : 20,
    5 : true // 프로퍼티 이름에는 문자열이나 숫자를 쓸 수 있다 (숫자는 자동으로 문자로 바뀐다)
};
console.log(person);

function displayInfo(args) {
    var output = "";
    
    if(typeof args.name === "string"){
        output += "Name : " + args.name + "\n";
    }
    
    if(typeof args.age === "number"){
        output += "age : " + args.age + "\n";
    }
    console.log(output);
}

displayInfo({ // 매개변수를 많이 쓸때 편리한 형태
    name : "dasom",
    age : 29
});

displayInfo({ 
    name : "yeajin" 
});

// 대괄호 표기법
console.log(person.name);
console.log(person["name"]); // 요고

// 장점 : 변수를 써서 프로퍼티에 접근 할 수 있다.
const propertyName = "name"
console.log(person[propertyName])
console.log(person.propertyName) // undefined - 점 연산자는 불가능

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Array Type 
/* 
어떤 타입의 데이터라도 넣을 수 있다. 
즉 배열의 첫 슬롯에는 문자열, 두번째는 숫자, 세번째는 객체를 넣는 식으로도 사용이 가능하다.
*/

// 생성
// 1. Array 생성자
var colors = new Array();
console.log(colors);
var colors = new Array(10); // length 프로퍼티가 10인 배열 생성
console.log(colors);
var colors = new Array("red", "blue", "green"); // 데이터도 할당 가능
console.log(colors);
var colors = Array(3); 
console.log(colors);
var colors = Array("red");
console.log(colors);

// 2. 배열 리터럴 방법
var colors = ["red", "blue", "green"];
console.log(colors);
var names = [];
console.log(names);
var values = [1,2,] // 만들 순 있는데 이렇게 만들지 말기
console.log(values); 

// 접근

var colors = ["red", "blue", "green"];
console.log(colors[0]) // 0번째 인덱스에 접근
colors[2] = "black";
colors[3] = "brown";
console.log(colors); // ['red', 'blue', 'black', 'brown']

// length
var colors = ["red", "blue", "green"];
var names = [];
console.log(colors.length); // 3
console.log(names.length); // 0
// length 프로퍼티는 읽기 전용이 아니다! 
// length 프로퍼티의 값을 바꾸면 배열 길이가 그에 맞게 바뀌면서 데이터를 제거하거나 빈 슬롯을 추가한다.

var colors = ["red", "blue", "green"];
colors.length = 4;
console.log(colors); // ['red', 'blue', 'green', empty]

// 배열 마지막에 데이터를 추가할 때 유용
var colors = ["red", "blue", "green"];
colors[colors.length] = "black";
console.log(colors); //  ['red', 'blue', 'green', 'black']


// 배열 감지
/* 
if(value instanceof Array) {
    // 배열일 때 실행하는 코드
}

ECMAScript3에서는 이렇게 정의했는데 전역 실행 컨텍스트가 여러개일 경우 문제가 된다.
그것의 해결책으로 ECMAScript5에서는 Array.isArray()를 사용한다.

if(Array.isArray(value)){
    // 배열일 때 실행하는 코드
}
*/

// 변환 메서드
var colors = ["red", "blue", "green"];
console.log(colors.toString()); // red,blue,green
console.log(colors.valueOf()); // ['red', 'blue', 'green']
console.log(colors); // ['red', 'blue', 'green'] // tostring과 같음

//  join()
var colors = ["red", "blue", "green"];
console.log(colors.join(",")); // red,blue,green
console.log(colors.join("||")); // red||blue||green\

// 스택 메서드
// 스택은 처음에 데이터를 추가하며
// push()와 pop()을 이용하여 스택처럼 동작할 수 있다
// 스텍은 마지막에 데이터를 추가하며 맨 마지막 데이터를 꺼낸다.
var arr = [1, 2, 3];
arr.push(4)
console.log(arr)
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

// 큐 메서드 
// 큐는 마지막에 데이터를 추가하며 맨 앞에 데이터를 꺼낸다
// shift() : 맨 앞에 데이터를 꺼낸다.

vararr = [1, 2, 3];
arr.push(4);
console.log(arr)
arr.shift();
console.log(arr) // [2, 3, 4]

// 정렬 메서드 sort(), reverse()
var values = [1, 2, 3, 4, 5];
values.reverse();
console.log(values) // [5, 4, 3, 2, 1]

var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values) // [0, 1, 10, 15, 5]
// 문자열로 비교하여 순서를 판단하기 때문에 사용하지말기

// 조작 매서드 concat()
var colors = ["red", "blue", "green"];
var colors2 = colors.concat("yellow", ["black", "brown"]) // ['red', 'blue', 'green', 'yellow', 'black', 'brown']
console.log(colors2)

// slice(원래 배열에서 가져올 데이터의 범위의 시작, 끝) 
var colors = ["red", "blue", "green", "yellow", "purple"];
var colors2 = colors.slice(1); // ['blue', 'green', 'yellow', 'purple']
var colors2 = colors.slice(1, 4); // ['blue', 'green', 'yellow']
console.log(colors2)

// splice() 
// 주요 목적 : 데이터를 중간에 삽입
// 삭제 : splice(삭제할 첫번째 인덱스, 삭제할 마지막 인덱스)
// 삽입 : 매개변수를 3개 이상 넘기면 삽입 가능 , splice(매개변수를 삽입할 위치, 0(아무것도 삭제안함), 삽입할 데이터)
// 대체 : splice(1, 2, "red", "green") 인덱스 2의 데이터를 삭제한 다음 문자열 red와 green을 인덱스 2에 삽입

var arr = [0, 1, 2, 3, 4, 5];
arr.splice(1, 5, 100, 200) // 궁금증.. 인덱스 0은 삭제 불가능한가?
console.log(arr)

var colors = ["red", "blue", "green"];
var removed = colors.splice(0, 1);
console.log(colors); // ['blue', 'green']
console.log(removed); // ['red']

removed = colors.splice(1, 0, "yellow", "orange") // 하나도 삭제하지 않고 인덱스 1에 데이터 2개 추가
console.log(colors); // ['blue', 'yellow', 'orange', 'green']
console.log(removed); // [] colors에 추가되고 removed에는 아무것도 안 들어옴

removed = colors.splice(1, 1, "red", "purple") // 데이터 두개를 추가하고 1개 제거
console.log(colors); // ['blue', 'red', 'purple', 'orange', 'green']
console.log(removed); // ['yellow']
