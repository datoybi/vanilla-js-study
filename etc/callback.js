/*
    callback 함수란?
    함수에 파라미터로 들어가는 함수
    순차적으로 실행하고 싶을 때 사용


function first(num) {
    console.log(1);
    second();
}

function second() {
    console.log(2);
}

first(second)
// 결과값 
// 1
// 2


*/

// 이렇게 해도 되는데 위에 처럼 콜백함수를 사용하는 이유는 바로 연달아서 사용되지 않기도 해서.
function first(num) {
    console.log(1);
}

function second() {
    console.log(2);
}

first()
second()

// 결과값 
// 1
// 2

