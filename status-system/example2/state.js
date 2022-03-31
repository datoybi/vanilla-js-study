// observable은 observe에서 사용된다.
// observable에 변화가 생기면 observe에 등록된 함수가 실행된다.

const 상태 = observable({a: 10, b: 20});
observe(() => console.log(`a = ${상태.a}`));
observe(() => console.log(`a = ${상태.b}`));
observe(() => console.log(`a + b = ${상태.a} + ${상태.b}`));
observe(() => console.log(`a * b = ${상태.a} + ${상태.b}`));
observe(() => console.log(`a - b = ${상태.a} - ${상태.b}`));

상태.a = 100;
상태.b = 200;

