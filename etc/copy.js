// !: 얕은 복사
// =
// 아예 선언을 따로 한 경우
const obj1 = { value: 10 };
const newObj1 = { value: 10 };
console.log(obj1 === newObj1); // false - 참조값이 다르다

// = 연산자를 이용해 얕은 복사(객체)
const obj = { value: 10 };
const newObj = obj;
console.log(obj === newObj); // true - 참조값이 같다

// = 연산자를 이용해 얕은 복사(배열)
const arr = [1, 2, 3];
const newArr = arr;
console.log(arr === newArr); // true - 참조값이 같다

// 참조 값이 같은 경우 원본 데이터(arr)에 데이터를 넣으면 newArr이 영향을 받는다.
arr.push(4);
console.log(newArr); // [1,2,3,4]

// !: 깊은복사 + 얕은 복사
// !: Object.assign()

const category = { category: "espresso" };
const category1 = Object.assign({}, category); // false - 참조값이 다르다
const category2 = Object.assign(category, {}); // true - 참조값이 같다
const category3 = Object.assign(category); // true - 참조값이 같다

console.log(category === category1); // false
console.log(category === category2); // true
console.log(category === category3); // true

// 객체의 속성을 변경하였을 경우, 참조값이 다른 경우만 변경되지 않음
category.category = "tibana";
console.log(category1); // {"category":"espresso"}
console.log(category2); // {"category":"tibana"}
console.log(category3); // {"category":"tibana"}

// 얕은 복사인 이유
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = Object.assign({}, obj);
console.log(newObj); // {"a":1,"b":{"c":2}}
console.log(newObj === obj); // false 참조값이 다르다

// obj의 하위객체는 다른 참조값을 바라보고 있다.
obj.a = 444;
console.log(newObj); // {"a":1,"b":{"c":2}}
console.log(obj); // {"a":444,"b":{"c":2}}

// 그러나 하위 객체의 하위 객체는 같은 참조값을 바라보고 있다.
obj.b.c = 100;

console.log(newObj); // {"a":1,"b":{"c":100}}
console.log(obj); // {"a":444,"b":{"c":100}}

console.log(newObj === obj); // false
console.log(newObj.b.c === obj.b.c); // true

// !: 전개연산자

const category = { category: "espresso" };
const category1 = { ...category }; // false - 참조값이 다르다

console.log(category === category1); // false

// 객체의 속성을 변경하였을 경우, 참조값이 다른 경우만 변경되지 않음
category.category = "tibana";
console.log(category1); // {"category":"espresso"}

// 그러나 객체의 속성의 속성, 즉 객체 안의 객체는 같은 참조값을 갖는다.

const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = { ...obj };

// obj의 하위객체는 다른 참조값을 바라보고 있다.
obj.a = 444;
console.log(newObj); // {"a":1,"b":{"c":2}}
console.log(obj); // {"a":444,"b":{"c":2}}

// 그러나 하위 객체의 하위 객체는 같은 참조값을 바라보고 있다.
obj.b.c = 100;

console.log(newObj); // {"a":1,"b":{"c":100}}
console.log(obj); // {"a":444,"b":{"c":100}}

console.log(newObj === obj); // false
console.log(newObj.b.c === obj.b.c); // true

// !: DEEP COPY
function clone(item) {
  if (!item) {
    return item;
  } // null, undefined values check

  var types = [Number, String, Boolean],
    result;

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach(function (type) {
    if (item instanceof type) {
      result = type(item);
    }
  });

  if (typeof result == "undefined") {
    if (Object.prototype.toString.call(item) === "[object Array]") {
      result = [];
      item.forEach(function (child, index, array) {
        result[index] = clone(child);
      });
    } else if (typeof item == "object") {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode == "function") {
        result = item.cloneNode(true);
      } else if (!item.prototype) {
        // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item);
        } else {
          // it is an object literal
          result = {};
          for (var i in item) {
            result[i] = clone(item[i]);
          }
        }
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        if (false && item.constructor) {
          // would not advice to do that, reason? Read below
          result = new item.constructor();
        } else {
          result = item;
        }
      }
    } else {
      result = item;
    }
  }

  return result;
}

const a = [1, 2, 3, 4];
const b = clone(a);

console.log(a);
console.log(b);
console.log(a === b);

const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

const newObj = clone(obj);

console.log(obj);
console.log(newObj);
obj.b.c = 100;
console.log(obj);
console.log(newObj);
