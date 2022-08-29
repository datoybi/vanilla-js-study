// WEB API를 사용한 AJAX 통신

// HTTP 요청 전송
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("GET", "http://localhost:3001/memo"); // HTTP 요청 초기화
xhr.setRequestHeader("content-type", "application/json"); // HTTP 요청 해더 설정 - 클라이언트가 서버로 전송할 MINE TYPE 지정
xhr.send(); // HTTP 요청 전송

// HTTP 응답 처리
xhr.onreadystatechange = () => {
  // HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티가 변경될 때마다 발생
  if (xhr.readyState !== XMLHttpRequest.DONE) return; // 서버의 응답이 끝나지 않았다면 return

  if (xhr.status === 200) {
    // 응답 코드가 200이면
    console.log(xhr.response);
  } else {
    console.error("Error", xhr.status, xhr.statusText);
  }
};
