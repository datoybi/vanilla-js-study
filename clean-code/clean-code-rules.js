/*
	Udemy 클린코드를 보고 내가 지키지 않고 있거나 익숙해 져야 할 것들 정리
*/

// 타입 검사 💛
console.log(Object.prototype.toString.call("")); // [object String]
console.log(Object.prototype.toString.call(new String(""))); // [object String]
console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(func)); // [object Function]
console.log(Object.prototype.toString.call(date)); // [object Date]

// if - else 너무 많을 때는 switch문 사용하기

// 임시 변수 제거하기 💛
// BAD
function getElement() {
  const result = {}; // 임시 객체
  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
}
// GOOD
function getElement() {
  result = {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}

// BAD
// 이 경우 추가적인 요구사항이 들어올 경우, getDateTime함수를 변환하는 대신 리턴한 후
// 새로운 함수를 호출하는 편이 깔끔하다.
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getMonth();
  let hour = targetDate.getMonth();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;

  return {
    month,
    day,
    hour,
  };
}

// GOOD
function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getMonth();
  const hour = targetDate.getMonth();

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
    hour: hour >= 10 ? hour : "0" + hour,
  };
}

// 새 함수 추가
function getDateTtime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: currentDateTime.month + "분 전",
    day: currentDateTime.day + "분 전",
    hour: currentDateTime.hour + "분 전",
  };
}

// parseInt 사용시 두번쨰 인수도 넣어주는 게 좋다 💛
parseInt("9.999", 10);

// short-circuit-evaluation 💛
// AND 모두 참이여야 참
console.log(true && true && "도달 O"); // 도달O
console.log(true && false && "도달 X"); // false

// OR : 하나라도 참이면 참
console.log(false || false || "도달 O"); // 도달 O
console.log(true || true || "도달 X"); // true

function favoriteDog(domeDog) {
  // let favoriteDog;
  // if (someDog) {
  //   if (someDog) {
  //     favoriteDog = dog;
  //   } else {
  //     favoriteDog = "냐옹";
  //   }
  // }
  return (someDog || "나옹") + "입니다.";
}

// bad
const getActiveUserName = (user, isLogin) => {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return "이름 없음";
      }
    }
  }
};

// good
const getActiveUserName1 = (user, isLogin) => {
  if (isLogin && user) {
    return user.name || "이름없음";
  }
};

// early return : 사람이 보기 쉽게 코딩하기 💛
// BAD
function loginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();
        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}

// GOOD
function loginService(isLogin, user) {
  if (isLogin) return;

  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  refreshToken();
  return "로그인 성공";
}

// BAD
function 오늘하루(condition, weather, isJob) {
  if (condition === "GOOD") {
    공부();
    게임();
    유투브보기();

    if (weather === "GOOD") {
      운동();
      빨래();
    }

    if (isJob === "GOOD") {
      야간업무();
      조기취짐();
    }
  }
}

// GOOD
function 오늘하루(condition, weather, isJob) {
  if (condition !== "GOOD") return;
  공부();
  게임();
  유투브보기();

  if (weather !== "GOOD") return;
  운동();
  빨래();

  if (isJob !== "GOOD") return;
  야간업무();
  조기취짐();
}

// default 처리 잘 해주기 💛
function registerDay(userInputDay) {
  switch (userInputDay) {
    case "월요일": // some code
    case "화요일": // some code
    case "수요일": // some code
    case "목요일": // some code
    case "금요일": // some code
    case "토요일": // some code
    case "일요일": // some code
    default:
      throw Error("입력값이 유효하지 않습니다.");
  }
}

// 예측가능하고 디버깅 하기 쉬운 코드 만들기 💛
// 괄호를 이용해 우선순위 보기편하게 만들기
if ((isLogin && token) || user) {
}

// 전위 연산자, 후위 연산자 사용하지말기
function increment() {
  // BAD
  number++;
  ++number;
  // GOOD
  number += 1;
}

// Nullish coalescing operator : ?? 나중에 공부해보기

// 배열 요소에 접근할때 [0] [1] 이런식으로 원소로 접근 지양하기 💛
// BAD
function operatorTime(input, operators, is) {
  input[0].split("").forEach((num) => {});
  input[1].split("").forEach((num) => {});
}

// GOOD
function operatorTime(input, operators, is) {
  const [firstInput, secondInput] = inputs;
  firstInput.split("").forEach((num) => {});
  secondInput.split("").forEach((num) => {});
}

// 유사 배열 객체 💛
const obj = {
  0: "Hello",
  1: "World",
  length: 2,
};
console.log(obj); // {"0":"Hello","1":"World","length":2}
const arr = Array.from(obj);
console.log(arr); // ["Hello","World"]

const arr2 = arr.map((element) => element + "!");
console.log(arr2); // ["Hello!","World!"]

// 메서드 체이닝 💛
const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  return priceList.filter(isOverOneThousand).sort(ascendingList).map(suffixWon);
}

const result = getWonPrice(price);
console.log(result);

// map vs forEach 💛
// map은 반환값이 있지만 forEach는 반환값이 없다.
// map은 원본 배열을 변환시키지 않지만 forEach는 변환시킨다.

const prices = ["1000", "2000", "3000"];

const newPricesForEach = prices.forEach(function (price) {
  return price + "원";
});

const newPricesMap = prices.map(function (price) {
  return price + "원";
});

newPricesForEach; // undefined
newPricesMap; // ['1000원', '2000원', '3000원']

// shorthand property, concise Method 💛

const counterApp = combineReducers({
  counter,
  extra,
  counter2,
  counter3,
});

const person = {
  firstName: "poco",
  lastName: "jang",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// concise Method
const person2 = {
  firstName: "poco",
  lastName: "jang",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

// computed property name 💛

// const funcName 'func';

// const obj = {
// 	[funcName]() {
// 		return 'func';
// 	},
// };

// console.log(obj[funcName]());

// Object Lookup table 💛

// BAD
function getUsetType(type) {
  switch (key) {
    case "ADMIN":
      return "관리자";
    case "INSTRUCTOR":
      return "강사";
    case "STUDENT":
      return "학생";
    default:
      return "해당 없음";
  }
}

// GOOD
function getUsetType(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "수강생",
  };

  return USER_TYPE[type] || "해당 없음";
}

// Object Destructuring 💛
// BAD
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}
const poco1 = new Person("poco", 30, "korea");

// GOOD - 호출부에서 파라미터의 순서를 지키지 않아도 된다.
function Person({ name, age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}
const poco2 = new Person({
  name: "poco",
  age: 30,
  location: "korea",
});

// name 인자를 필수로 받기
// BAD
function Person(name, options) {
  this.name = name;
  this.age = options.age;
  this.location = options.location;
}

const options1 = {
  age: 30,
  location: "korea",
};

const poco3 = new Person("poco", options1);

//GOOD
function Person(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const pocoOptions = {
  age: 30,
  location: "korea",
};

const poco4 = new Person("poco", pocoOptions);

// BAD
var orders = ["First", "Second", "Third"];
const [first, , third] = orders;

console.log(first);
console.log(third);

//GOOD
var orders = ["First", "Second", "Third"];
const { 0: st, 2: th } = orders;

console.log(st);
console.log(th);

// 44까지 정리함
