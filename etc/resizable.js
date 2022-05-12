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
         
!: - [x] .resize 호버시 화살표 버튼 표출하기 
!: - [X] .resize 드래그 앤 드롭시 해당 width 가져오기
!: - [] .resize 드래그 할때 resize도 동시에 같이 따라오게 하기
!: - [] 드롭시 .resize의 width drop한 width로 지정하기
!: - [] 드롭시 .myDiv의 width drop한 width로 지정하기
!: - [] 드롭시 .myDiv의 width drop한 width로 지정하기
*/

const $ = (selector) => document.querySelector(selector);
const resize = $(".resize");

function dragElement(elmnt) {
  let pos1 = 0,
    pos3 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    $(".myDiv").style.width = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    $(".myDiv").style.width = elmnt.style.left;
  }
}

dragElement(resize);

window.onload = () => {};
