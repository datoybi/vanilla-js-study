/*
    변수 캡슐화하기
    함수는 데이터보다 다루기 수월하다.
    함수를 사용한다는 건 대체로 호출한다는 뜻이고, 함수의 이름을 바꾸거나 다른 모듈로 옮기기는 어렵지 않다.
    반면에 데이터는 함수보다 다루기가 까다로운데 유효범위가 넓어질수록 다루기 어려워진다. 전역 데이터가 골칫거리인 이유도 바로 여기에 있다.
    
*/

// 변경 전
let defaultOwner = {firstName: "마틴", lastName: "파울러"}

// 변경 후
let defaultOwnerData = {firstName: "마틴", lastName: "파울러"}
export function defaultOwner() {return defaultOwnerData;}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}


// 변경 전 코드
defaultOwner = {firstName: "마틴", lastName: "파울러"}
spaceship.owner = defaultOwner;
defaultOwner = {firstName: "레베카", lastName: "파슨스"}

// step 1. getter setter 정의 
function getDefaultOwner() {return defaultOwnerData;}
function setDefaultOwner(arg) {defaultOwnerData = arg;}

// step2. defaultOwner를 찹조하는 코드를 찾아서 방금 만든 getter, setter를 사용한다.
spaceship.owner = getDefaultOwner(); // getter
setDefaultOwner({firstName: "레베카", lastName: "파슨스"}) // setter

// defaultOwner.js 파일
defaultOwnerData = {firstName: "마틴", lastName: "파울러"}
export function defaultOwner() {return defaultOwnerData;}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}

// 값 캡슐화 하기 
// 방금 본 기본 캡슐화 기법으로 데이터 구조로의 참조를 캡슐화하면, 그 구조로의 접근이나 구조 자체를 다시 대입하는 행위는 제어할 수있으나,
// 필드 값을 변경하는 일은 제어할 수 없다

class Person{ // 레코드 캡슐화하기 라는데 잘은 모르겠다
    constructor(data){
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }
    get lastName() {return this._lastName;}
    get firstName() {return this._firstName;}
}


