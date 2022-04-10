/*
    기본형을 객체로 바꾸기
*/

// 전
orders.filter(o => "high" === o.priority || "rush" === o.priority);

// 후
orders.filter(o => o.priority.higherThan(new Priority("normal")));

// 예시
class Order{
    constructor(data) {
        this.priority = data.priority;
    }
}

// 클라이언트
highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;

// step1. 변수를 캡슐화
class Order{
    constructor(data) {
        this.priority = data.priority;
    }
    get priority() {return this.priority;}
    set priority(aString) {this.priority = aString;}
}

// step2. 클래스 priority 만들기 
class Priority {
    constructor(value){
        this._value = value;
    }
    toString() {return this._value;}
}

class Order{
    constructor(data) {
        this.priority = data.priority;
    }
    get priorityString() {return this._priority.toString();}
    set priority(aString) {this.priority = new Priority( aString);}
}

// step3. 더 가다듬기
class Priority {
    constructor(value){
        if(value instanceof Priority) return value;
        if(Priority.legalValues().includes(value)){
            this._value = value;
        } else {
            throw new Error(`<${value}>는 유효하지 않은 우선순위 입니다.`)
        }
    }
    toString() {return this._value;}
}

class Order{
    constructor(data) {
        this.priority = data.priority;
    }
    get priority() {return this._priority;}
    get priorityString() {return this._priority.toString();}
    set priority(aString) {this.priority = new Priority( aString);}
}

// 클라이언트
highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;


