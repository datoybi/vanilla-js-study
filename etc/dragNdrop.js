/*
    clientX, clientY 
        클라이언트 영역 내의 가로, 세로 좌표 제공
        스크롤 무시

    offsetX, offsetY
        이벤트 대상 객체에서의 상대적 마우스 x, y좌표 위치 반환
    
    pageX, pageY
        전체문서를 기준으로 x, y좌표를 반환
        스크롤 화면 포함
    
    screenX, screenY
        모니터 화면을 기준으로 좌표를 제공
         
window.addEventListener("click", function (e) {
  console.log("client: " + e.clientX, e.clientY);
  console.log("page: " + e.pageX, e.pageY);
  console.log("offset: " + e.offsetX, e.offsetY);
});
window.onload = () => {};

https://ko.javascript.info/mouse-drag-and-drop
보고 다시 각 잡아보기

TODO: - [x] .resize 호버시 화살표 버튼 표출하기 
TODO: - [X] .resize 드래그 앤 드롭시 해당 width 가져오기
TODO: - [] .resize 드래그 할때 resize도 동시에 같이 따라오게 하기
TODO: - [] 드롭시 .resize의 width drop한 width로 지정하기
TODO: - [] 드롭시 .myDiv의 width drop한 width로 지정하기
TODO: - [] 드롭시 .myDiv의 width drop한 width로 지정하기

document.querySelector("#treeDiv").offsetWidth 

transform: translate(300px);

*/

const $ = (selector) => document.querySelector(selector);

// $(".resize").addEventListener("mousedown", (e) => {
//   e = e || window.event;
//   e.preventDefault();
//   console.log("mousedown");

//   e.target.onmousemove = drag;
// });

// function drag(e) {
//   e = e || window.event;
//   e.preventDefault();
//   console.log("onmousemove");
//   console.log(e);
// }

function dragNdrop(el) {
  console.log(el);
  let originalPosition;
  let pos3 = 0,
    pos1 = 0;

  el.onmousedown = down;
  el.ondragstart = () => false;

  function down(e) {
    e = e || window.event;
    e.preventDefault();
    console.log("down");
    originalPosition = e.clientX;
    pos3 = e.clientX;
    console.log(pos3); // 400

    document.onmouseup = close;
    document.onmousemove = drag;
  }

  function drag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    console.log("offsetWidth : " + e.target.offsetWidth);
    console.log("pos1 : " + pos1);
    console.log("pos3 : " + pos3);
    console.log("e.clientX : " + e.clientX);
    console.log("offsetWidth : " + e.target.offsetLeft);

    e.target.style.left = e.target.offsetLeft - pos1 + "px";

    // e.target.style.top = e.target.offsetTop - pos1 + "px";
    // $(".myDiv").style.width = e.target.offsetLeft - pos1 + "px";
  }

  function close() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragNdrop($(".resize"));

// $(".resize").addEventListener("mousedown", (e) => {});
