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
            
        
*/

window.addEventListener("click", function (e) {
  console.log("client: " + e.clientX, e.clientY);
  console.log("page: " + e.pageX, e.pageY);
  console.log("offset: " + e.offsetX, e.offsetY);
});

window.onload = () => {};
