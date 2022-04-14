/*
    Callback? 
        함수에 파라미터로 들어가는 함수
    용도?
        순차적으로 실행하고 싶을 때 씀

*/

document.querySelector('button').addEventListener('click', function() {
// 파라미터에 함수가 들어간다.
});

setTimeout(function() {
    // 콜백함수
}, 1000);

// 파라미터에 함수 호출이 가능하다
document.querySelector('button').addEventListener('click', func());

// 함수명을 붙이는 것도 가능하다
document.querySelector('button').addEventListener('click', function func() { });


// 콜백함수 선언
function first(param) {
    param();
}

// 매개변수로 들어갈 함수 선언
function second() {}

// 콜백함수 호출
first(second);
// first(second)에서 first가 호출되고 param 자리에 second가 들어감


// 순차적으로 선언
// 이것을 구현하고 싶다면
function first(param) {
    console.log(1);
    param();
}

function second() {
    console.log(2)
}

first(second);
// first가 실행되고 이어서 second가 호출된다.

// 이렇게 실행해도 순차적 실행이 된다. 하지만 굳이 콜백함수를 만들 필요가 있나???
first();
second();

// 남이 쓸 코드에 순차적으로 실행하고 싶을 때 유용

// DB에서 데이터 뽑는데 A뽑고 B뽑고 C뽑고싶다 할때 
db.collection('post').findOne(A, function() {
    db.collection('post').findOne(B, function() {
        db.collection('post').findOne(C, function() {
            //
        })
    })
})

first(second);
// 해결법 -> promise! then()! async/await
// https://ko.javascript.info/callbacks
