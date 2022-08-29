/*
// prototype을 사용하지 않을 때
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);

// 반지름이 1인 인스턴스 생성
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // false :
//모든 인스턴스가 동일한 메서드를 중복 소유하는 것은 메모리를 불필요하게 낭비한다.

console.log(circle1.getArea());
console.log(circle2.getArea());
*/

// Prototype에 의한 상속 구현

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);

// 반지름이 1인 인스턴스 생성
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // true :
//모든 인스턴스가 동일한 메서드를 중복 소유하는 것은 메모리를 불필요하게 낭비한다.

console.log(circle1.getArea());
console.log(circle2.getArea());
