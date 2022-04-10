// 이름 공간으로 활용한다
var App = App || {}

// 이름 공간에 함수를 추가한다가. 의존성 있는 God 함수를 주입한다.
App.Person = function(God) {
    var name = God.makeName();

    // API를 노출한다.
    return {
        getName: function() {return name},
        setName: function(newName) {name = newName},
    }
}

// 사용
const person = App.Person(God);
person.getName();

// 객체를 여러개 만들 수 있다
