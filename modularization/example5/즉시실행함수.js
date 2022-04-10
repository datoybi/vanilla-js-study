var App = App || {}

App.Person = (function() {
    let name = "";

    return {
        getName(God) {
            name = name || God.makeName();
            return name; 
        },
        setName(newName) {
            name = newName;
        }
    }
})()
// 함수 선언 즉시 실행된다. 싱글톤이다.

// 사용
App.Person.getName(God);

