/*
    20.값식문

*/
function ReactComponent() {
    return (
        <div>
            {(() => {
                if(conditionOne) return <span>One</span>;
                if(conditionTwo) return <span>Two</span>;
                else conditionOne;
                return <span>Three</span>
            })()}
            
            {conditionOne && <span>One</span>}
            {conditionTwo && <span>Two</span>}
            {conditionTwo && <span>Two</span>}
        </div> // 위처럼 바꿨다
    );
}

/*
    21.삼항 연산자 다루기
    삼항연산자 사용시 주의할 점 : 함수를 넣지 말기
*/

// case 1
function example(){
    return condition1 ? value1 
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}
// VS
function example() {
    if(condition1) { return value1; }
    else if(condition2) { return value2; }
    else if(condition3) { return value3; }
    else { return value4; }
}

// 이런 상황에는 Switch case 문 사용!
const temp = condition1; condition2; condition3;

function example() {
    switch(key) {
        case value:
            break;

        default:
            break;
    }
}

// case 2
// 변경전
const example = condition1
    ? a === 0 ? 'zero' : 'positive'
    : 'negative';
// 인덴트 이런식으로 하기💛

// 후
const example = condition1
    ? ((a === 0) ? 'zero' : 'positive') // true
    : 'negative'; // false

// 읽는 사람이 편하도록 괄호로 감싸기

// case 3
// 변경전
const welcomeMessage = (isLogin) => {
    const name = isLogin ? getName() : '이름없음'; // Nullable한 상황에서도 간단히 해결 가능

    return `안녕하세요 ${name}`;
};

// 만약 if로 바꾼다면
const welcomeMessage2 = (isLogin) => {
    const name = "이름없음";

    if(isLogin) {
        return  `안녕하세요 ${getName()}`;
    } else {
        return `안녕하세요 ${name}`;

    }
};

// case 4
// BAD
function alertMessage(isAdult){
    isAdult
    ? alert('입장이 가능합니다')
    : alert('입장이 불가능합니다');
}

// GOOD
function alertMessage(isAdult){
    if(isAdult) {
        alert('입장이 가능합니다');
    } else {
        alert('입장이 불가능합니다');
    }
}

// 삼항연산자 사용의 좋은 예
function alertMessage(isAdult){
    return isAdult ? '입장이 가능합니다' : '입장이 불가능합니다';
}

