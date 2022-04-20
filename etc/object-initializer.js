const job = "developer";
const color = "pink";
// 객체 선언시

const x = "x";

// const obj = {
//     job: job,
//     color: color,
//     x : x
// };

// key value 변수가 같으면 생략 가능

const obj = {
  job: job,
  color: color,
  x: x,
};

console.log(obj);

// 메서드 선언시

const obj2 = {
  func: function (param) {},
};

// 이렇게 축약 가능

const obj3 = {
  func(param) {},
};
