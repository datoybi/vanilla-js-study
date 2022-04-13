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