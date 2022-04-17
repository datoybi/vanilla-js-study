/*
    22.Truthy vs Falshy
*/

// Truthy : 전부 다 참
if(true) { }
if({}) { }
if([]) { }
if(42) { }
if('0') { }
if('false') { }
if(new Date()) { }
if(-42) { }
if(12n) { }
if(3.14) { }
if(-3.14) { }
if(Infinity) { }
if(-Infinity) { }

// Falshy : 전부 다 거짓
if(false) { }
if(null) { }
if(undefined) { }
if(0) { }
if(-0) { }
if(0n) { }
if(NaN) { }
if(!'') { }

// 예시
// BAS
function printName(name){
    if(name === undefined || name === null) {
        return '사람이 없네요';
    }
    return '안녕하세요 ' + name + '님 !';
}
// 실수 발생 가능

// GOOD
function printName(name){
    if(!name) {
        return '사람이 없네요';
    }
    return '안녕하세요 ' + name + '님 !';
}


/*
    23. 단축평가(short-circuit evaluation)

*/

/*
    AND
*/

// 전부 true여야 함
console.log(true && true && '도달 O'); // 도달 O
console.log(true && false && '도달 X'); // false

/*
    OR
*/
// 한개라도 true
console.log(false || false || '도달 O'); // 도달 O 
console.log(true || true || '도달 X'); // true


// 예시 1
// OR 연산자는 Default value를 표현할 때 좋다
function fetchDate() {
    // if(state.data) {
    //     return state.data;
    // } else {
    //     return 'Fetching...';
    // }

    return state.data || 'Fetching...';
}

// 예시 2
function favoriteDog(someDog) {
    // let favoriteDog;
    // if(someDog) {
    //     favoriteDog = dog;
    // } else {
    //     favoriteDog = '냐옹';
    // }
    
    // return favoriteDog + ' 입니다.';

    return (someDog || '냐옹') + '입나다.';
}

// 예시 3
// bad
function getActiveUserName(user, isLogin){
    if(isLogin) {
        if (user) {
            if(user.name){
                return user.name;
            } else {
                return '이름없음'
            }
        }
    }
} 
// GOOD
function getActiveUserName2(user, isLogin){
    if (isLogin && user) {
        return user.name || '이름없음'
    }
    // return isLogin && user ? user.name : '이름없음';
}
