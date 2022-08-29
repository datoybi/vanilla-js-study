// console.log(0.1 + 0.2 === 0.3); // false

// var a = "foo";
// console.log(window.isNaN(a)); // true
// console.log(Number.isNaN(a)); // false - 새로생긴 isNaN

// var a = 0 / -3; // -0
// var b = 0 * -3; // -0

// console.log(a);
// console.log(b);

// console.log(Object.prototype.toString.call([1, 2, 3]));

// 날짜 -> 숫자
// var a = +"3.14";
// console.log(a);
// console.log(typeof a); // number

// var date = new Date();
// console.log(+date); // 1661738120363
// console.log(date.getTime()); // 1661738312875

// -> 불리언으로 강제 형변환
// var a = 0;
// var b = "[]";
// var c = null;

// console.log(!a); // true
// console.log(!!a); // false

// console.log(!b); // false
// console.log(!!b);// true

// console.log(!c); // true
// console.log(!!c);  // false

// var a = "42";
// var b = true;

// console.log(a == b); // false

console.log(true || (false && false)); // true
console.log((true || false) && false); // false
console.log(true || (false && false)); // true
