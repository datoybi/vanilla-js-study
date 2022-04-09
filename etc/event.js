/*
    이벤트
    이벤트는 '리스너'로 추적하며 리스너는 이벤트가 일어날 때만 실행된다.
    옵저버 패턴이라고도 부른다 (이 패턴은 자바스크립트에서 정의하는 페이지 행동과 HTML및 CSS에서 정의하는 페이지 외형 사이에 느슨한 연결을 형성합니다.)
  
    이벤트 흐름
        이벤트 버블링
            이벤트가 가장 깊이 위치한 요소에서 시작해 거슬러 올라가 루트까지 도달하는 것

            <html>
                <head>
                    <title>Event Bubbling Example</title>
                </head>
                <body>
                    <div id="myDiv">click me</div>
                </body>
            </html>
            
            위의 페이지에서 <div> 요소를 클릭하면 click 이벤트가 다음 순서대로 발생한다.    
            1. div 2. body 3. html 4.document

        이벤트 캡처링
            최상위 노드에서 처음으로 이벤트가 발생하며 가장 명시적인 노드에서 마지막으로 발생
            위의 예제에서 <div> 요소를 클릭하면 1.document 2. html 3. body 4. div 순으로 발생한다.

        // 주로 이벤트 버블링을 쓰고 이벤트 캡처링은 특별한 상황에서만 사용하길 권장

    DOM의 이벤트 흐름
        DOM 레벨 2 이벤트에서 정의한 이벤트 흐름에는 이벤트 캡처링 단계, 타깃 단계, 이벤트 버블링 단계 세가지가 있다.

    이벤트 핸들러
        이벤트 핸들러는 전역 스코프에서 실행된다.
        <input type="button" value="click me" onclick="alert('clicked')"/>
        
        <script type="text/javascript">
            function showMessage() {
                alert('Hello world!);
            }
        </script>
        <input type="button" value="click me" onclick="showMessage()"/>
        이렇게 별도로 선언도 가능
        
        이벤트라는 특별한로컨 변수가 있고 이 변수는 이벤트 객체이다.
        <input type="button" value="click me" onclick="alert(event.type)"/>

        이벤트 핸들러 내부에서 this값은 이벤트 타깃 요소와 일치한다.
        <input type="button" value="click me" onclick="alert(this)"/>

        단점
            이벤트 핸들러 코드가 준비되기 전에 HTML요소가 화면에 나타나고 사용자가 이를 조작할 가능성이 있다
            스코프 체인 확장 결과가 브라우저마다 달라서 비적격 객체 멤버에 접근할 때 에러가 발생할 수 있다.
            이벤트 핸들러를 html에서 할당하면 HTML과 자바스크립트가 너무 단단히 묶인다는 점이다. 이벤트 핸들러를 바꿀 때 HTML과 자바스크립트 코드를 모두 바꿔야 할 수도 있다.
                이러한 이유로 많은 개발자들이 이벤트 핸들러를 JS에서 할당한다.
        
        DOM 레벨 2 이벤트 핸들러
            addEventListener(이벤트이름, 이벤트 핸들러 함수, 이벤트 핸들러를 캡쳐 단계에서 호출할지(true), 버블링 단계에서 호출할지(false)), removeEventListener()
*/

var btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
    console.log(this.id);
}, false)

btn.addEventListener("click", function() {
    console.log("hello world!");
}, false)

// 위처럼 생성한 이벤트 핸들러는 removeEventListener()를 호출해야만 제거할 수 있다.

var btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
    console.log(this.id);
}, false)

btn.removeEventListener("click", function() {
    console.log(this.id);
}, false) // 동작하지 않는다. - removeEventListener()에 넘기는 이벤트 함수는 완전히 같은것이여야 한다.

// 예제
var btn = document.getElementById("myBtn");
var handler = function() {
    console.log(this.id);
};
btn.addEventListener("click", handler, false);

btn.removeEventListener("click", handler, false) // 동작한다.

// 이벤트 핸들러가 버블링 단계에서 동작하도록 해야 모든 브라우저에서 지원하므로 이 방법을 가장 많이 사용한다.
// 이벤트 핸들러를 캡처 단계에 추가하는 건 필요 이벤트가 타깃에 도달하기 전에 가로채야 할 때 가장 적합하다. 가로챌 필요가 없으면 이벤트 캡처링은 사용하지 말자.

/* 
    크로스 브라우저 이벤트 핸들러 
    이벤트 처리 코드가 가능한 한 많은 브라우저에서 동작하게 하려면 버블링 단계에서만 동작하도록 해야한다.

    이벤트 객체
    HTML 속성을 통해 이벤트 핸들러를 할당했을 때는 event라는 변수가 event 객체 구실을 한다.

    이벤트 핸들러 내부에서 this객체는 항상 currentTarget의 값과 일치하며 target에는 이벤트의 실제 타깃만 포함된다.
    이벤트 핸들러가 타깃에 직접 할당되었다면 this와 currentTarget, target은 모두 같다.
*/

var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    console.log(event.currentTarget === this); // true
    console.log(event.target === this); // true
}
// event.currentTarget === this === event.target

document.body.onclick = function(event){
    console.log(event.currentTarget === document.body); // true
    console.log(document.body === this); // true
    console.log(event.target === document.getElementById("myBtn")); // true
}
// event.currentTarget === this === document.body === document.getElementById("myBtn")

// 함수 하나에서 여러 이벤트를 처리하게끔 할때는 type 프로퍼티가 유용하다.
var btn = document.getElementById("myBtn");
var handler = function(event) {
    switch(event.type){
        case "click":
            console.log("clicked!!");
            break;
        case "mouseover":
            event.target.style.backgroundColor = "red";
            break;
        case "mouseout":
            event.target.style.backgroundColor = "";
            break;
    }
}

btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;

// preventDefault() - 이벤트의 기본 동작을 취소
var link = document.getElementById("myLink");
link.onclick = function(event){
    event.preventDefault();
};

// stopPropagation() - 이벤트 흐름을 즉시 멈춰서 이벤트 캡처링이나 버블링을 모두 취소한다.
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    console.log("clicked!@");
    event.stopPropagation(); // click 이벤트가 body까지 전달되지 않기 때문에 body clicked는 나타나지 않는다.
};
document.body.onclick = function(event){
    console.log("body clicked");
};

// eventPhase - 현재 이벤트가 어느 단계에 있는지 나타냄 1: 캡처단계에서 호출, 2: 타깃에서 호출, 3:버블링 단계에서 호출

var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    console.log(event.eventPhase); // 2 target에서 실행되면 this === target === currentTarget
};

document.body.addEventListener("click", function(event){
    console.log(event.eventPhase); // 1
}, true); // 캡처링

document.body.addEventListener("click", function(event){
    console.log(event.eventPhase); // 3
}, false); // 버블링

// event 객체는 이벤트 핸들러가 실행중일 때만 존재하며, 이벤트 핸들러가 실행을 마치면 event 객체는 파괴된다.

/*  
ui events
    load() 이벤트 - window 객체의 load이벤트는 이미지나 자바스크립트 파일, CSS파일 같은 외부 자원을 포함해 전체 페이지를 완전히 불러왔을 때 발생
    unload() 이벤트 - 문서를 완전히 닫을 때 발생
    resize() 이벤트 - 브라우저 창의 높이나 너비를 바꾸면 발생

메모리와 성능
    자바스크립트는 페이지에 존재하는 이벤트 핸들러의 개수가 페이지 성능에 직접적으로 영향을 미친다.
    그 이유는 1. 각 함수가 메모리를 점유하는 객체이기 때문이다. 객체가 많을 수록 성능은 떨어진다. (해결책 : 이벤트위임)
    2. 이벤트 핸들러를 많이 할당하려면 DOM 접근도 많아지고 이는 전체 페이지의 응답성을 떨어트린다.

    이벤트 위임
        이벤트 핸들러 개수의 문제점을 해결 할 수 있다.
        이벤트 위임이란 이벤트 버블링의 장점을 활용하여, 이벤트 핸들러를 하나만 할당해서 해당 타입의 이벤트를 모두 처리하는 테크닉이다.
        예를들어, Click 이벤트는 document레벨가지 버블링되어 올라간다. 즉 클릭 가능한 요소마다 일일이 onclick 이벤트 핸들러를 할당하지 않고
        전체 페이지에 하나만 할당해도 된다.
        예제를 보자.

<ul id="myLinks">
    <li id="goSomewhere">Go somewhere</li>
    <li id="goanywhere">Go anywhere</li>
    <li id="sayHi">say hi</li>
</ul>
이 에제에는 클릭에 반응해야 할 항목이 세개가 있다. 고전적이고 단순한 이벤트 핸들러 할당은 다음과 같다.
*/

// var item1 = document.getElementById("goSomewhere");
// var item2 = document.getElementById("goanywhere");
// var item3 = document.getElementById("sayHi");

// item1.addEventListener("click", function(event){
//     location.href="https://www.naver.com/";
// }, false);

// item2.addEventListener("click", function(event){
//     document.title = "I changed the document's title";
// }, false);

// item3.addEventListener("click", function(event){
//     console.log("hi");
// }, false);

// 이벤트 위임은 다음과 같이 DOM 트리에서 가능한 가장 높은 요소에 이벤트 핸들러를 단 하나만 할당하여 이 문제를 해결한다.

var $list = document.getElementById("myLinks");
const clickActions = {
    goSomewhere: () => location.href = "https://www.naver.com/",
    goanywhere: () => document.title = "I changed the document's title",
    sayHi: () => console.log("hi"),
}

$list.addEventListener("click", e => {
    const action = e.target.id;
    if(action) {
        clickActions[action]();
    }
});


/*
    이벤트 핸들링 제거 
    1. 문서에서 삭제했지만 이벤트 핸들러는 제거하지 않은 경우
        파괴된 요소에 할당되었던 이벤트 핸들러는 가비지 콜렉션 과정에서 제대로 회수되지 않을 수 있다.
*/ 
var btn = document.getElementById("myBtn2");
btn.onclick = function() {
    document.getElementById("myDiv").innerHTML = "processing..."; // 매우 나쁜 예
};

// 버튼을 페이지에서 제거했지만 이벤트 핸들러는 아직 연결되어 있다.
// 다음과 같이 잔류 핸들러를 직접 제거하는 편이 최선이다.

var btn = document.getElementById("myBtn2");
btn.onclick = function() {
    btn.onclick = null; // 잔류 핸들러 제거, 버튼을 제거하면 이벤트도 중단된다.
    document.getElementById("myDiv").innerHTML = "processing..."; // 매우 나쁜 예
};

// 이벤트 위임이 innerHTML을 사용하는 경우 잔류 핸들러를 효과적으로 삭제할 수 있다고 하는데 그 케이스 찾아보기 ❕❕❕❕
// onload에서 한 일은 반드시 onUnload에서 취소한다.
