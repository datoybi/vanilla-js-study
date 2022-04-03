/*
    this의 값은 함수의 호출하는 방법에 의해 결정된다.
  전역함수에서 this는 스트릭트 모드가 아닐때는 window, 스트릭트 모드에는 undefined이며
  함수가 객체 메서드로 호출되었을 때 this는 해당 객체 입니다.  
*/
// var object = {
// var name = "the window";

//     name : "My Object",
//     getNameFn : function() {
//         return function() {
//             return this.name;
//         };
//     }
// };

// console.log(object.getNameFn()());

// 전역변수일 경우 (non-strict)
function func() {
    if(window === this){
        console.log("same");
    }
}
func() // same

// 메소드의 this는 그 객체를 가르킨다.
var o = {
    func: function() {
        if(o === this) {
            console.log("same!@#");
        }
    }
}
o.func(); // same!@#

// 생성자의 this
 
// 현재 기능을 수행하는 객체이다.
