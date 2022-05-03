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
function currentDateTime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: currentDateTime.month + "분 전",
    day: currentDateTime.day + "분 전",
    hour: currentDateTime.hour + "분 전",
  };
}

// short-circuit-evaluation 💛
// AND 모두 참이여야 참
console.log(true && true && "도달 O"); // 도달O
console.log(true && false && "도달 X"); // false

// OR : 하나라도 참이면 참
console.log(false || false || "도달 O"); // 도달 O
console.log(true || true || "도달 X"); // true

// BAD

function favoriteDog(someDog) {
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
// 괄호를 이용해 우선순위를 직관적으로 알 수 있게 구현하기
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

// 배열 요소에 접근할때 [0] [1] 이런식으로 인덱스값으로 접근 지양하기💛
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

// const funcName = 'func';

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

// Object Destructuring 구조 분해 할당 💛
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

// Object freeze 💛
// 1차원적인 것만 가능 OPTIONS 같은 경우는 freeze 되지 않는다.
const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

STATUS.PENDING = "P";
console.log(STATUS.PENDING); // PENDING - 변하지않음

STATUS.NEW_PROP = "PP";
console.log(STATUS); // {"PENDING":"PENDING","SUCCESS":"SUCCESS","FAIL":"FAIL"}

console.log(Object.isFrozen(STATUS.FAIL)); // true

Object.isFrozen(STATUS.OPTIONS); // false

STATUS.OPTIONS.GREEN = "G";
STATUS.OPTIONS.YELLOW = "Y";
console.log(STATUS.OPTIONS); // {"GREEN":"G","RED":"RED","YELLOW":"Y"}

// 직접 접근 지양하기 💛
// BAD
const model = {
  isLogin: false,
  isValidToken: false,
};

function login() {
  model.isLogin = true;
  model.isValidToken = true;
}

function validToken() {
  model.isLogin = false;
  model.isValidToken = false;
}

someElement.addEventListener("click", login);

// GOOD 직접 접근 지양
const model1 = {
  isLogin: false,
  isValidToken: false,
};

//model에 대신 접근
function setLogin(bool) {
  model.isLogin = bool;
  serverAPI.log(model.isLogin);
}

function setValidToken(bool) {
  model.isValidToken = bool;
  serverAPI.log(model.isValidToken);
}

function login() {
  setLogin(true);
  setValidToken(true);
}

function logout() {
  setLogin(false);
  setValidToken(false);
}

// 복잡한 인자 관리하기 💛

// 이렇게 매개변수를 넘겨주지 않았을 경우 애러 처리하기
function createCar({ name, brand, color, type }) {
  if (!name) {
    throw new Error("name is a required");
  }
  if (!brand) {
    throw new Error("brand is a required");
  }
}

createCar({ name: "CAR", type: "SUV" });

// default value 💛
function createCarousel(options) {
  options = options || {};
  var margin = options.margin || 0;
  var center = options.center || false;
  var navElement = options.navElement || "div";

  return {
    margin,
    center,
    navElement,
  };
}
createCarousel();

// upgrade !
function createCarousel({
  margin = 0,
  center = false,
  navElement = "div",
} = {}) {
  return {
    margin,
    center,
    navElement,
  };
}
createCarousel();

// more upgrade !
const required = (argName) => {
  throw new Error("required is " + argName);
};

function createCarousel({
  items = required("items"),
  margin = required("margin"),
  center = false,
  navElement = "div",
} = {}) {
  return {
    items,
    margin,
    center,
    navElement,
  };
}
createCarousel();

// Rest Parameters 💛
// 나머지 매개변수는 매개변수의 맨 마지막에 작성되어야만 한다.
function sumTotal(initValue, bonusValue, ...args) {
  return args.reduce((acc, curr) => acc + curr, initValue);
}
console.log(sumTotal(100, 99, 1, 2, 3, 4, 5));

// Rest Parameters 💛

// arr.push()에도 반환값이 있다

// 화살표 함수 💛
// 화살표 함수에서는 argument, call, apply, bind도 사용할 수 없다.

// const user = {
//   name: 'Poco',
//   getName: () => {
//     return this.name;
//   }
// }

// console.log(user.getName()); // undefined

const user = {
  name: "Poco",
  getName() {
    return this.name;
  },
};

console.log(user.getName()); // Poco

// 화살표 함수로 만든 함수는 생성자로 사용할 수 없다

// const Person = (name, city) => {
//   this.name = name;
//   this.city = city;
// };

// const person = new Person('poco', 'korea');
// console.log(person); // Uncaught TypeError: Person is not a constructor

function Person(name, city) {
  this.name = name;
  this.city = city;
}

const person1 = new Person("poco", "korea");
console.log(person1); // {"name":"poco","city":"korea"}

// callback function 💛

// Bad
function register() {
  const isConfirm = confirm("회원가입에 성공했습니다.");

  if (isConfirm) {
    redirectUserInfoPage();
  }
}

function login() {
  const isConfirm = confirm("로그인에 성공했습니다.");

  if (isConfirm) {
    redirectUserInfoPage();
  }
}

// GOOD
function confirmModal(message, cbFunc) {
  const isConfirm = confirm(message);
  if (isConfirm && cbFunc) {
    cbFunc();
  }
}

function register() {
  confirmModal("회원가입에 성공했습니다.", redirectUserInfoPage);
}

function login() {
  confirmModal("로그인에 성공했습니다.", redirectUserInfoPage);
}

// 순수 함수 Pure function 💛

// BAD
// 함수를 사용할 때 예측이 안된다.
let num1 = 10;
let num2 = 20;

function impureSum1() {
  return num1 + num2;
}

function impureSum2(newNum) {
  return num1 + newNum;
}

console.log(impureSum1()); // 30
num1 = 30;
console.log(impureSum1()); // 50
console.log(impureSum2(30)); // 80

// GOOD 예측가능하다

num1 = 10;
num2 = 20;

function pureSum1(num1, num2) {
  return num1 + num2;
}

function pureSum2(newNum) {
  return num1 + newNum;
}

console.log(pureSum1(10, 20)); // 30
console.log(pureSum1(10, 20)); // 30
console.log(pureSum1(30, 100)); // 130
console.log(pureSum1(30, 100)); // 130

// BAD
//  객체, 배열 -> 새롭게 만들어서 반환

const obj1 = { one: 1 };
function changeObj(targetObj) {
  targetObj.one = 100;
  return targetObj;
}

console.log(changeObj(obj1)); // {"one":100}
console.log(obj1); // {"one":100}

// good
const obj2 = { one: 1 };
function changeObj(targetObj) {
  return { ...targetObj, one: 100 };
}

console.log(changeObj(obj2)); // {"one":100}
console.log(obj2); // {"one":1}

// Closure 💛
// 클로저 예제
function add(num1) {
  return function sum(num2) {
    return num1 + num2;
  };
}

const addOne = add(1);
const addTwo = add(2);

console.log(addOne(3)); // 4
console.log(addTwo(3)); // 5

// 다른 예제
function log(value) {
  return function (fn) {
    fn(value);
  };
}

const logFoo = log("foo");
logFoo((v) => console.log(v));
logFoo((v) => console.info(v));
logFoo((v) => console.error(v));
logFoo((v) => console.warn(v));

// 클로저 변환 전
// const arr = [1, 2, 3, 'A', 'B', 'C'];

// function isTypeOf(value, type){
//     return (typeof value === type);
// }

// console.log(isTypeOf(arr[0], 'number'))

// 클로저 변환
const arr1 = [1, 2, 3, "A", "B", "C"];

function isTypeOf(type) {
  return function (value) {
    return typeof value === type;
  };
}

const isNumber = isTypeOf("number");
console.log(isNumber(arr1[0])); // true

const isString = isTypeOf("string");
console.log(isNumber(arr1[4])); // true

// parseInt 사용시 두번쨰 인수도 넣어주는 게 좋다 💛
parseInt("9.999", 10);
// arr.push()에도 반환값이 있다
