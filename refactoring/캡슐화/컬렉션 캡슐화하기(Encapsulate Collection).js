/*
    컬렉션 캡슐화하기
    컬렉션을 add()나 remove()로 감싸서 눈치채지 못하는 상태에서 원소들이 바뀌는 것을 방지하자.

*/

// 전
class person {
    get course() {return this._course;}
    set course(aList) {this._course = aList;}
}

// 후
class person {
    get course() {return this._course.slice();}
    addCourse(aCourse) {}
    removeCourse(aCourse) {}
}

// 예시
class Person {
    constructor(name){
        this._name = name;
        this._course = [];
    }
    get name() {return this._name;}
    
    addCourse(aCourse){
        this._course.push(aCourse);
    }
    removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
        const index = this._course.indefOf(aCourse);
        if(index === -1) fnIfAbsent();
        else this._course.splice(index, 1);
    }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }
    get name() {return this._name;}
    get isAdvanced() {return this._isAdvanced;}
}

