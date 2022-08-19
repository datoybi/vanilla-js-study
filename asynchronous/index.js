/*
synchronous : 동기 (순차적 실행)
asynchronous : 비동기 (동시 실행)

자바스크립트는 synchronous 이다. (코드가 순차적으로 실행된다)
console.log("1");
console.log("2");
console.log("3");
순서대로 출력된다.


console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// 1, 3, 2

// 동기 콜백 (Synchronous callback)
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// 비동기 콜백 (Asynchronous callback)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("ansync callback"), 2000);
*/
