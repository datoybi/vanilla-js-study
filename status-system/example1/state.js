const 상태 = new 발행기관 ({
    a: 10,
    b: 20,
});

const 덧셈계산기 = new 구독자(() => console.log(`a + b = ${상태.a + 상태.b}`));
const 곱셈계산기 = new 구독자(() => console.log(`a * b = ${상태.a * 상태.b}`));

덧셈계산기.구독(상태);  
곱셈계산기.구독(상태);

상태.구독자에게_알림();
// a + b = 30
// a * b = 200

상태.내부에_변화가_생김({a: 100, b: 200});
// a + b = 300
// a * b = 20000

// 2명의 구독자가 1개의 신문사를 구독하고 있는 상황
// 그런데 만약에 10명의 구독자가 100개의 신문사를 구독한다고 했을 경우.
// 구독 관련 코드가 기하급수적으로 늘어날 것이다.

