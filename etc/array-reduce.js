/*
    arr.reduce(누산기, 현재값, 현재인덱스, 원본배열)
    누산기는 리턴된 값을 계속 누적해나간다.
*/

// 사용법
var res = [0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
    console.log(`accumulator : ${accumulator}`);
    console.log(`currentValue : ${currentValue}`);
    console.log(`currentIndex : ${currentIndex}`);
    console.log(`array : ${array}`);
    console.log("                              ");
    return accumulator + currentValue; // 이것대로 리턴 되나보다
}, 10); // 10은 초기값 설정


// 1~10까지 더하기
var sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function (acc, value, index, array) {
    // console.log(acc)
    return acc + value;
})

console.log(sumArray)

// 개겣 배열에서 원하는 항목의 값만 더하기 - 나이 더하기
const friends = [
    {
      name: '양주진',
      age: 32,
      job: '코인러',
      married: false,
    },
    {
      name: '오영제',
      age: 32,
      job: '랩퍼',
      married: false,
    },
    {
      name: '서준형',
      age: 32,
      job: '2년차 유부남',
      married: true,
    }
];

var ageSum = friends.reduce(function (acc, value, index){
    let tmp = acc + value.age;
    return tmp;
}, 0); // initialvalue를 꼭 넣어줘야함 
/*
    왜냐하면 최초 호출시 initial value가 없을 때 acc의 값은 배열의 첫번째 요소이기 때문이다. 여기선 [object Object]
*/

console.log(ageSum);

// 배열 순회하며 kim, hong 몇개있는기 갯수 세주는 함수
// 값일 땐 누적해서 더하고 배열일 때는 누적 계속 해준다
var votes = ["kim", "hong", "lee", "hong", "lee", "lee", "hong"];

var reducer = function (accumulator, value, index, array) {
  console.log(accumulator)
  if (accumulator.hasOwnProperty(value)) {
    accumulator[value] = accumulator[value] + 1;
  } else {
    accumulator[value] = 1;
  }
  return accumulator;
}
var initialValue = {};
var result = votes.reduce(reducer, initialValue);
console.log(result); // { kim: 1, hong: 3, lee: 3 }


// reduce vs map
var data = [1, 2, 3];

var initialValue = [];
var reducer = function (accumulator, value) {
  accumulator.push(value * 2);
  return accumulator;
};
var result = data.reduce(reducer, initialValue);
console.log(result); // [2, 4, 6]

var result2 = data.map(x => x * 2);
console.log(result2); // [2, 4, 6]

// 배열의 원소*2, map이 훨씬 간결하다.

var data = [1, 2, 3, 4, 5, 6];

var initialValue = [];
var reducer = function(accumulator, value) {
  if (value % 2 != 0) {
    accumulator.push(value);
  }
  return accumulator;
};
var result1 = data.reduce(reducer, initialValue);
console.log(result1); // [1, 3, 5]

var result2 = data.filter(x => x % 2 != 0);
console.log(result2); // [1, 3, 5]

// fiter가 훨씬 직관적으로 보인다.
// 하지만 1번과 2번을 동시에 갖업해야 한다면?

var initialValue = [];
var reducer = function(accumulator, value) {
  if (value % 2 != 0) {
    accumulator.push(value * 2);
  }
  return accumulator;
}
var result1 = data.reduce(reducer, initialValue);
console.log(result1); // [2, 6, 10]

var result2 = data.filter(x => x % 2 != 0).map(x => x * 2);
console.log(result2); // [2, 6, 10]
// reduce는 한번 순회하면 되지만 filter/map 조합은 두번 순회해야 한다.

//https://medium.com/@hongkevin/js-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EB%A9%94%EC%84%9C%EB%93%9C-reduce-100-%ED%99%9C%EC%9A%A9%EB%B2%95-feat-egghead-io-97c679857ece
