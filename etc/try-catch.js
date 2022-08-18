/*
	에러가 발생하면 자바스크립트는 에러 상세 내용이담긴 객체를 생성한다. 그 후, catch 블록에 이 객체를 인수로 전달한다.

*/
try {
  let json = '{"name":"John", "age": 30}';
  let user = JSON.parse(json); // 에러 발생 지점
  console.log(uer.name);
  console.log(uer.age);
} catch (err) {
  console.log("해당 데이터에 에러가 있습니다");
  console.log("err : " + err); // err : ReferenceError: uer is not defined
  console.log("err.name : " + err.name); // err.name : ReferenceError
  console.log("err.message : " + err.message); // err.message : uer is not defined
  console.log("err.stack : " + err.stack);
  /*
		err.stack : ReferenceError: uer is not defined
    at http://127.0.0.1:5501/etc/try-catch.js:4:15
	*/
}
/*
		catch 블록 안에서 새로운 네트워크 요청 보내기, 사용자에게 대안 제안하기, 로깅 장치에 에러정보 보내기 등 
		스크립트가 죽도록 놔두는 것보다 훨씬 나은 대응 가능

		try{} 구문은 예외가 발생하는지만을 체크
		catch(){} 구문은 단독으로는 사용할 수 없고 반드시 try{} 구문과 함께 사용 (if-else 처럼)
		이때 catch(){} 구문은 인자(Parameter)로 Error(Error) 객체를 함께 넘깁니다.(message, name, stack)
		에러를 발생시키는 구문은 throw
		간단하게 다음과 같이 작성하면 에러가 발생합니다. 물론 에러 핸들링 처리를 하지 않으면 throw 에러를 발생시킨 지점에서 코드 실행은 멈춥니다.
		
	*/

// 직접 에러를 만들어서 던지기

let json = '{"age" : 30}';
try {
  user = JSON.parse(json);
} catch (e) {
  console.log(e);
  throw new error("먀먀먀");
} finally {
  // 무조건 실행된다 (에러가 나든 안나든)
  console.log("finally");
}
