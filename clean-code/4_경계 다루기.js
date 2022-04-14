/*
    함수를 만들거나 할때 명시적으로 경계에 대해 분명히 말해주어서
    이해하기 쉬운 코드로 만들기💛

    15. 경계다루기 min-max
    1. 최소값, 최댓값을다룬다.
    2. 최소값과 최대값 포함 여부를 결정해야 한다(이상-초과/ 이하-미만)
    3. 혹은 네이밍에 최소값과 최대값을 포함한다.
        
    이상, 초과 vs 이하, 미만을 사용하는지 컨벤션을 정해두는 것이 좋다.
*/
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const MAX_AGE = 20;
  
  function isAdult(age) {
    // 최소값, 최댓값 (포함되는지 vs 안되는지)
    // 이상, 초과 vs 이하, 미만
    if(age >= 20){
      
    }
  }
  
// // 상수
// const MIN_NUMBER = 1
// const MAX_NUMBER = 45;
// console.log(getRandom(MIN_NUMBER, MAX_NUMBER));

/*
    15. 경계다루기 begin-end
    예) 달력
*/

function reservationDate(bdginaDate, endDate){ }
reservationDate('YYYY-MM-DD','YYYY-MM-DD');

/*
    16. 경계다루기 first-last
    포함된 양 끝을 의미한다. 
    ~부터 ~까지
*/

const studnet = ['포코', '존', '현석'];
function getStudents(first, last){}

getStudent('포코', '현석');

/*
    18. 경계다루기 prefix-suffix
    # -> private
    코드 짜는데 일관성을 갖자
*/

// private 과거
function FactoryFunction(name){
    this._name = name;
}

// 현재
class FactoryFunction {
    #name = name;
}


/*
    19. 경계다루기 
    매개변수의 순서가 경계다
    호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다.

    1. 매개변수를 2개가 넘지 않도록 만든다.
    2, arguments, rest parameter 
    3. 매개변수를 객체에 담아서 넘긴다
    3. 랩핑하는 함수를 만든다.
    
*/


genRandomNumber(1, 50);
getDates('2021-10-01','2021-10-31');
genShuffleArray(1, 5);


function someFunc({someArg1, someArg2, someArg3, someArg4}){ }

// 함수를 수정할 수 없는 상태에서는 이렇게..
function someFunc(someArg1, someArg2, someArg3, someArg4){ }

function getFunc(someArg1, someArg2) {
    someFunc(someArg1, someArg2) // ????
}